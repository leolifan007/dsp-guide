"""Fix HTML entity encoding in Hugo build output.
Run after: hugo --destination docs
"""
import html, os, glob

os.chdir('docs')
for p in glob.glob('**/index.html', recursive=True):
    if not os.path.isfile(p):
        continue
    with open(p, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()
    fixed = html.unescape(content)
    with open(p, 'w', encoding='utf-8') as f:
        f.write(fixed)
    print(f'fixed: {p}')
