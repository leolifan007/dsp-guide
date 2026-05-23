#!/bin/bash
# auto-publish.sh - SOP 08/09/10: Publish articles whose publishDate has arrived
# Called by .github/workflows/scheduled-release.yml
#
# Strategy:
#   - content-polishing branch holds ALL articles (published + scheduled)
#   - Articles with hidden:true have a publishDate field (ISO timestamp)
#   - This script finds articles where publishDate <= now, sets hidden:false
#   - Then merges ONLY the published article files to main branch
#   - Hugo rebuilds on main, so sitemap only ever includes live articles
#   - This prevents Google from seeing bulk content drops or premature sitemap entries

set -e

ARTICLES_DIR="content"
NOW_EPOCH=$(date +%s)

echo "=== Auto-Publish Script ==="
echo "Current time: $(date '+%Y-%m-%d %H:%M:%S %Z')"
echo "Current epoch: $NOW_EPOCH"

PUBLISHED_ANY=false

# Find all hidden articles with publishDate
for f in "$ARTICLES_DIR"/*.md; do
  [ -f "$f" ] || continue

  # Check if hidden
  hidden=$(grep -c "^hidden: true" "$f" 2>/dev/null || true)
  [ "$hidden" -eq 0 ] && continue

  # Extract publishDate
  publish_date=$(grep "^publishDate:" "$f" | head -1 | sed 's/^publishDate:[[:space:]]*//' | tr -d '"' | tr -d "'")

  if [ -z "$publish_date" ]; then
    echo "  SKIP: $(basename "$f") - hidden but no publishDate set"
    continue
  fi

  # Parse publishDate to epoch (handle ISO format with timezone)
  # e.g. "2026-05-25T14:17:00+08:00" or "2026-05-25"
  publish_epoch=$(date -d "$publish_date" +%s 2>/dev/null || echo "0")

  if [ "$publish_epoch" -eq 0 ]; then
    echo "  SKIP: $(basename "$f") - cannot parse publishDate: $publish_date"
    continue
  fi

  if [ "$NOW_EPOCH" -ge "$publish_epoch" ]; then
    title=$(grep "^title:" "$f" | head -1 | sed 's/^title:[[:space:]]*//')
    echo "  PUBLISH: $(basename "$f") - $title"
    echo "    publishDate: $publish_date (epoch: $publish_epoch, now: $NOW_EPOCH)"

    # Set hidden: false
    sed -i "s/^hidden: true/hidden: false/" "$f"

    # Remove publishDate line (no longer needed after publish)
    sed -i "/^publishDate:/d" "$f"

    PUBLISHED_ANY=true
  else
    days_left=$(( (publish_epoch - NOW_EPOCH) / 86400 ))
    hours_left=$(( ( (publish_epoch - NOW_EPOCH) % 86400 ) / 3600 ))
    echo "  WAIT: $(basename "$f") - scheduled in ${days_left}d ${hours_left}h ($publish_date)"
  fi
done

if [ "$PUBLISHED_ANY" = true ]; then
  echo ""
  echo "=== Articles published this run - will merge to main ==="
  # List the newly published files for the workflow to merge
  grep -rl "^hidden: false" "$ARTICLES_DIR"/*.md 2>/dev/null | while read -r f; do
    # Only list files that were previously hidden (have lastmod with non-round time)
    echo "  $(basename "$f")"
  done
else
  echo ""
  echo "=== No articles due for publish this run ==="
fi

echo ""
echo "=== Auto-Publish Script Complete ==="
