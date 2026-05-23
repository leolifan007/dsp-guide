# Article Page Redesign v2 (Factory Control Panel) — 2026-05-23 22:54-23:10

**Objective**: Fix 6 article page issues + garbled characters + professional redesign per frontend-design skill

## Changes

### Templates
- `single.html`: Removed breadcrumb nav. Replaced sidebar with `.sidebar-panel` + `.sidebar-panel-list` structure. Changed `.article-title-block` → `.article-content-header`.
- `header.html`: Added Hugo active state detection (`$isActive`) to nav links — checks if current page type is "categories" matching title, or page's categories contain the nav category.
- `categories/term.html`: Category redirect to latest article (kept unchanged).

### CSS (`static/css/dsp-main.css`)
- **Encoding fix**: Replaced all em-dash (U+2014), en-dash (U+2013), curly quotes with ASCII equivalents. Fixed mojibake `▼` (U+25BC → `â–¼` via Latin-1 misinterpretation) by replacing with CSS escape `\203A`.
- **Nav active**: `.nav-link.active` → amber color + amber bg 18% + amber bottom border + bold weight.
- **Sidebar**: New `.sidebar-panel` with dark gradient bg, gold border-left, 8px radius. Items have `.sp-list-title` + `.sp-list-date`. Hover: translateX(3px).
- **Content header**: `.article-content-header` with bottom amber border, `.article-main-title` at 18px.
- **Content sections**: Comprehensive redesign of `.article-content-sections` — h2/h3, lists, tables, `.pro-tip`, `.callout`, `.cta-box`, `.article-lead`. All with consistent border/amber accent styling.
- **Collapsible sections**: `.section-head` redesigned with gradient bg, 4px amber left border, `›` collapse indicator, bottom-right microcopy ("click to collapse"/"click to expand").
- **Images**: Centered with `margin: 24px auto; max-width: 100%; width: auto;`
- **Tables**: Styled with amber header bg, hover rows, better spacing/fonts.

### Files
- Modified: `themes/dsp-theme/layouts/_default/single.html`, `themes/dsp-theme/layouts/partials/header.html`, `static/css/dsp-main.css`
- Cleanup: Removed `static/css/dsp-main.css.tmp` and `docs/css/dsp-main.css.tmp`

## Verification (live site)
- 9/9 checks passed: breadcrumb removed ✅, sidebar panel ✅, dates ✅, content header ✅, nav active (homepage + article) ✅, redesign CSS loaded ✅, nav-link.active CSS ✅, no garbled chars ✅
