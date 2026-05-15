"""Analyze green science page HTML structure."""
import re

with open('docs/green-science-warper-guide/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the aside/floatingToc area
aside = re.search(r'<aside class="floating-toc"[^>]*>.*?</aside>', content, re.DOTALL)
if aside:
    print('=== FLOATING TOC AREA ===')
    print(aside.group(0)[:600])
else:
    print('No floatingToc aside found (empty/not rendered yet - JS generates it)')

# Show article-body structure
body_m = re.search(r'<main class="article-body">(.*?)</main>', content, re.DOTALL)
if body_m:
    body = body_m.group(1)
    print('\n=== ARTICLE-BODY STRUCTURE ===')
    # Show tag structure up to 1500 chars
    text = re.sub(r'\s+', ' ', body)[:1500]
    print(text)

# Also check if there's inline JS that might interfere
if 'toc' in content.lower():
    print('\n=== TOC references in page ===')
    for m in re.finditer(r'[^.]*toc[^.]*\.', content, re.IGNORECASE):
        print(m.group(0)[:200])
