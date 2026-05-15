"""Verify HTML structure of old articles after div closing fixes."""
import re, os

os.chdir('docs')
results = []

for page in ['ils-setup-guide', 'power-fix-guide', 'titanium-transport-guide']:
    path = os.path.join(page, 'index.html')
    if not os.path.isfile(path):
        print(f'{page}: NOT FOUND')
        continue
    
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    body_match = re.search(
        r'<main class="article-body">(.*?)</main>',
        content, re.DOTALL
    )
    
    if body_match:
        body = body_match.group(1)
        body_opens = len(re.findall(r'<div[^>]*>', body))
        body_closes = len(re.findall(r'</div>', body))
        h2_count = len(re.findall(r'<h2[^>]*>', body))
        section_count = len(re.findall(r'<div class="section-head">', body))
        balanced = body_opens == body_closes
        
        status = 'OK' if balanced else 'UNBALANCED'
        print(
            f'{page}: divs={body_opens}/{body_closes} '
            f'balanced={balanced} [{status}], '
            f'h2s={h2_count}, sections={section_count}'
        )
    else:
        print(f'{page}: no article-body found')
