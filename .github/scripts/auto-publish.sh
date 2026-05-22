#!/bin/bash
# auto-publish.sh - SOP 08/09/10: Randomly select hidden:true articles and publish them
# Called by .github/workflows/scheduled-release.yml
# Works by finding hidden articles, picking 1-2, setting hidden:false with random lastmod

set -e

ARTICLES_DIR="content"
PUBLISH_COUNT=1  # Number of articles to publish each run
MAX_PUBLISH=2

# Find all hidden articles (hidden: true or draft: true)
find_hidden() {
  grep -rl "^hidden: true\|^draft: true" "$ARTICLES_DIR"/*.md 2>/dev/null || true
}

# Publish an article: set hidden:false, update lastmod to non-round time
publish_article() {
  local file="$1"
  local now=$(date +"%Y-%m-%dT%H:%M:00+08:00")

  # Generate non-round lastmod (random minutes 01-59, not 00)
  local rand_min=$(printf "%02d" $(( (RANDOM % 58) + 1 )))
  local rand_hour=$(printf "%02d" $(( (RANDOM % 23) )))
  local publish_time="${now:0:11}${rand_hour}:${rand_min}:00+08:00"

  echo "Publishing: $file -> hidden:false, lastmod=$publish_time"

  # Use sed to modify front matter
  sed -i "s/^hidden: true/hidden: false/" "$file"
  sed -i "s/^draft: true/draft: false/" "$file"

  # Update or add lastmod
  if grep -q "^lastmod:" "$file"; then
    sed -i "s/^lastmod:.*/lastmod: \"$publish_time\"/" "$file"
  else
    # Insert lastmod after date: line
    sed -i "/^date:/a\\lastmod: \"$publish_time\"" "$file"
  fi

  echo "    Done: $(grep "^title:" "$file" | head -1)"
}

# Main
echo "=== Auto-Publish Script ==="
echo "Time: $(date '+%Y-%m-%d %H:%M:%S')"

HIDDEN_ARTICLES=$(find_hidden)

if [ -z "$HIDDEN_ARTICLES" ]; then
  echo "No hidden articles found. Nothing to publish."
  exit 0
fi

COUNT=$(echo "$HIDDEN_ARTICLES" | wc -l)
echo "Found $COUNT hidden articles:"
echo "$HIDDEN_ARTICLES"

# Pick 1-2 articles to publish
if [ "$COUNT" -le "$MAX_PUBLISH" ]; then
  TO_PUBLISH="$HIDDEN_ARTICLES"
else
  TO_PUBLISH=$(echo "$HIDDEN_ARTICLES" | shuf -n $PUBLISH_COUNT)
fi

echo ""
echo "Publishing selected articles..."
echo "$TO_PUBLISH" | while read -r article; do
  if [ -n "$article" ]; then
    publish_article "$article"
  fi
done

echo ""
echo "=== Auto-Publish Complete ==="
