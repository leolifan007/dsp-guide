#!/bin/bash
# preview.sh - Local preview server for content-polishing branch
# Shows ALL articles including hidden ones for review before publishing
# Usage: bash .github/scripts/preview.sh
#
# This builds Hugo with --buildDrafts and --buildFuture so hidden/future
# articles are rendered locally. The site is served at http://localhost:1313
# with live reload - edit content and see changes instantly.

set -e

echo "=== DSP Guide Local Preview ==="
echo "Branch: $(git branch --show-current)"
echo ""
echo "This preview includes ALL articles (including hidden/scheduled)."
echo "Open http://localhost:1313 in your browser."
echo "Press Ctrl+C to stop."
echo ""

# Build with all content visible
hugo server \
  --buildDrafts \
  --buildFuture \
  --disableFastRender \
  --port 1313
