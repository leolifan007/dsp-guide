"""Analyze green science page structure for TOC debugging."""
import re

with open('docs/green-science-warper-guide/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract article-body
m = re.search(r'<main class="article-body">(.*?)</main>', content, re.DOTALL)
if m:
    body = m.group(1)
    # Find all h2 tags
    h2s = re.findall(r'<h2[^>]*>(.*?)</h2>', body, re.DOTALL)
    print(f'Found {len(h2s)} h2 tags in article-body:')
    for i, h in enumerate(h2s):
        text = re.sub(r'<[^>]+>', '', h).strip()
        print(f'  {i+1}. "{text}"')
    
    # Also check for h2 outside of section-head
    bare_h2s = re.findall(r'<h2[^>]*>(.*?)</h2>', body, re.DOTALL)
    if len(bare_h2s) != len(h2s):
        print(f'\nBare h2 count: {len(bare_h2s)}')
else:
    print('No article-body found')
    # Check for any h2 in the file
    all_h2s = re.findall(r'<h2[^>]*>(.*?)</h2>', content, re.DOTALL)
    print(f'All h2s in file: {len(all_h2s)}')
    for i, h in enumerate(all_h2s):
        text = re.sub(r'<[^>]+>', '', h).strip()
        print(f'  {i+1}. "{text}"')
