#!/usr/bin/env python3
"""
auto-publish.py — SOP 08 compliant auto-publisher

Scans content/*.md for articles with:
  hidden: true
  publishDate: <ISO-8601 timestamp that has passed>

When found:
  - Removes the `hidden:` line (article becomes visible)
  - Removes the `publishDate:` line (no longer needed)
  - Updates `lastmod:` to current non-round timestamp

Returns exit code 0 (prints what it published).
"""

import os
import re
import sys
from datetime import datetime, timezone, timedelta
import random

ARTICLES_DIR = "content"
NOW = datetime.now(timezone.utc)


def parse_iso_timestamp(s: str) -> datetime | None:
    """Parse ISO 8601 timestamps including 'T', 'Z', and +/-HH:MM offsets."""
    s = s.strip().strip('"').strip("'")
    # Remove timezone offset for parsing with fromisoformat
    # Python 3.11+ supports Z. Handle both.
    try:
        return datetime.fromisoformat(s)
    except ValueError:
        pass

    # Handle missing timezone — treat as UTC
    try:
        return datetime.fromisoformat(s).replace(tzinfo=timezone.utc)
    except ValueError:
        return None


def publish_article(filepath: str) -> bool:
    """Read file, remove hidden: true and publishDate lines. Returns True if modified."""
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract publishDate to compare
    pub_match = re.search(r"^publishDate:\s*(.+)$", content, re.MULTILINE)
    hidden_match = re.search(r"^hidden:\s*true$", content, re.MULTILINE)

    if not pub_match or not hidden_match:
        return False

    pub_str = pub_match.group(1).strip()
    pub_dt = parse_iso_timestamp(pub_str)

    if pub_dt is None:
        print(f"  SKIP: {os.path.basename(filepath)} - cannot parse publishDate: {pub_str}")
        return False

    # Normalize to UTC
    if pub_dt.tzinfo is None:
        pub_dt = pub_dt.replace(tzinfo=timezone.utc)

    if NOW < pub_dt:
        remaining = (pub_dt - NOW).total_seconds()
        hours = int(remaining // 3600)
        mins = int((remaining % 3600) // 60)
        print(f"  WAIT: {os.path.basename(filepath)} - due in {hours}h {mins}m ({pub_str})")
        return False

    # It's due! Remove hidden: true and publishDate lines
    # Also update lastmod to a non-round time
    now_local = datetime.now(timezone(timedelta(hours=8)))  # CST
    random_minute = random.randint(1, 59)
    random_second = random.randint(1, 59)
    new_lastmod = now_local.replace(minute=random_minute, second=random_second).strftime(
        "%Y-%m-%dT%H:%M:%S+08:00"
    )

    lines = content.split("\n")
    new_lines = []
    for line in lines:
        stripped = line.strip()
        if stripped == "hidden: true":
            continue  # remove
        if stripped.startswith("publishDate:"):
            continue  # remove
        if stripped.startswith("lastmod:"):
            new_lines.append(f"lastmod: '{new_lastmod}'")
            continue
        new_lines.append(line)

    new_content = "\n".join(new_lines)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)

    # Extract title for the log
    title_match = re.search(r"^title:\s*(.+)$", content, re.MULTILINE)
    title = title_match.group(1).strip().strip('"').strip("'") if title_match else "(unknown)"

    print(f"  PUBLISH: {os.path.basename(filepath)} — {title}")
    print(f"    publishDate: {pub_str} → lastmod: {new_lastmod}")
    return True


def main():
    print("=== Auto-Publish Script (Python3) ===")
    print(f"Current time (UTC): {NOW.strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"Current time (CST): {datetime.now(timezone(timedelta(hours=8))).strftime('%Y-%m-%d %H:%M:%S')}")

    # Find all markdown files
    if not os.path.isdir(ARTICLES_DIR):
        print(f"  ERROR: {ARTICLES_DIR}/ not found")
        sys.exit(1)

    files = sorted(
        f for f in os.listdir(ARTICLES_DIR)
        if f.endswith(".md") and f != "_index.md"
    )

    if not files:
        print("  No article files found.")
        sys.exit(0)

    published = False
    for fname in files:
        fpath = os.path.join(ARTICLES_DIR, fname)
        if publish_article(fpath):
            published = True

    print("")
    if published:
        print("=== Articles published this run ===")
    else:
        print("=== No articles due for publish this run ===")
    print("=== Auto-Publish Script Complete ===")

    sys.exit(0)


if __name__ == "__main__":
    main()
