# Homepage Restructure v3 — By Topic + Hot Guides Title-Only

**Time**: 2026-05-23 ~22:18 GMT+8  
**Branch**: main (commit e5d823d)  
**Commit**: `Homepage restructure: By Topic cards above Hot Guides (21:10 banners + article counts), Hot Guides title-only, 4 category SVG images`

## Changes Made

### 1. Homepage HTML (`themes/dsp-theme/layouts/_default/home.html`)
- Added `<section class="topic-section">` before `<section class="hot-guides-section">`
- Loops `site.Params.nav_categories` for dynamic 4-card grid
- Each card: 21:10 banner image (SVG) → category name → article count
- Hot Guides simplified: title-only (no description, no card-footer)

### 2. Category Banner SVGs (`static/images/categories/`)
Created 4 decorative SVGs (630×300, 21:10 aspect ratio):
- `power--energy.svg` — amber lightning bolts + rings (DSP energy theme)
- `resources--mining.svg` — green crystals + ore dots (mining theme)
- `science--production.svg` — purple flask + molecules (lab theme)
- `logistics--transport.svg` — cyan conveyor belts + ILS station (transport theme)

### 3. CSS (`static/css/dsp-main.css`)
- Added `.hot-grid-new { grid-template-columns: repeat(3, 1fr) }` base rule
- Added `.hot-grid-new .guide-card p, ...footer, ...read, ...date { display: none }` for title-only
- Added `.topic-card { flex-direction: column }` with 21:10 `.topic-banner` area
- Added `.home-main { max-width: 1100px }` constraint
- Added responsive: 2-col at ≤900px, 1-col at ≤600px for topic-grid
- Removed old conflicting `.topic-card`/`.topic-count` definitions
- Per-category accent borders: `.topic-banner-0` through `-3`

### 4. Article Count (Hugo template logic)
```
{{ $catArticles := where (where site.RegularPages "Params.hidden" "!=" true) "Params.categories" "intersect" (slice $cat) }}
{{ $count := len $catArticles }}
```

## Verifications
- HTTP 200 on all pages and CSS
- 4 SVGs return 200 and render correctly
- By Topic section above Hot Guides ✅
- Article counts: 3/3/3/1 ✅
- Hot Guides: title-only, 3×3 grid, NEW badges preserved ✅
- Article pages: category bar + sidebar + collapsible sections intact ✅
- Nav: no "Topics" link ✅
- CDN cache cleared after ~60s
