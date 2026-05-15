# DSP Guide Site — Handoff Summary for New Session
**Generated:** 2026-05-15 12:46 GMT+8 | **Updated:** 13:11 GMT+8 (Git/Domain/Monetization Added)

## Project Location
```
C:\Users\ROG\.qclaw\workspace-irfnf4l86a7w0aii\100个Steam攻略站\DSP_Site\
```
Hugo v0.161.1 | GitHub Pages | Base URL: `https://leolifan007.github.io/dsp-guide/`

## Live Site
**URL:** https://leolifan007.github.io/dsp-guide/
**Pages:** 4 guides (ILS Setup, Power Fix, Titanium Transport, Green Science/Warpers) + Home

---

## 💾 GIT & REPO MANAGEMENT

### Repo Structure
```
C:\Users\ROG\.qclaw\workspace-irfnf4l86a7w0aii\100个Steam攻略站\DSP_Site\
    ├── content/          # Markdown articles (source)
    ├── themes/           # Hugo theme (dsp-theme)
    │   └── dsp-theme/layouts/_default/
    │       ├── baseof.html    # Site shell (head/nav/footer/scripts)
    │       ├── single.html    # Article page template
    │       └── home.html      # Homepage template
    ├── layouts/
    │   └── shortcodes/   # Hugo component shortcodes (6 files)
    ├── static/
    │   ├── css/dsp-main.css   # Single CSS file
    │   ├── js/main.js         # TOC generation + scroll-spy
    │   └── images/            # SVG diagrams + dsp-icons/*.png
    ├── data/
    │   └── materials.toml     # Icon name→filename mapping
    ├── public/            # Build output (untracked/generated)
    ├── docs/              # GitHub Pages deploy target (tracked)
    └── hugo.toml          # Site config
```

### Key Git Facts
- **Remote:** https://github.com/leolifan007/dsp-guide.git
- **Branch:** main (single branch, no develop/staging)
- **Deploy:** GitHub Pages from `/docs` folder on main branch
- **Powershell caveat:** Use `;` instead of `&&` to chain commands. Git LF→CRLF warnings are cosmetic.
- **Windows path issue:** The `100个Steam攻略站` directory name has Chinese chars. Python `os.listdir` can find it via glob. Use `cd` first, then short commands.

### Git Workflow
```powershell
# Full deploy cycle:
cd "path\to\DSP_Site"
hugo --destination docs --cleanDestinationDir
# Entity fix (Python script)
git add -A
git commit -m "descriptive message"
git push origin main
# Wait ~45s for GitHub Pages build
```

### What's Tracked vs Ignored
- **Tracked:** content/, themes/, layouts/, static/, data/, hugo.toml, docs/ (deploy output)
- **Untracked (in .gitignore):** public/, resources/, .hugo_build.lock, qa_screenshots/, _viewer/, public2/
- **docs/ IS tracked** — this is the GitHub Pages deploy folder. Rebuild it every time (`docs/css/dsp-main.css` is the deployed CSS).

### Common Git Pitfalls on Windows
- `git push exit code 1` is FALSE POSITIVE in PowerShell — check for `main -> main` in output
- LF/CRLF warnings are cosmetic, don't fix them (Windows vs Linux line endings)
- `&&` doesn't work in PowerShell — use `;` or separate commands

---

## 🌐 DOMAIN PLANNING

### Current Status
- Site is at `https://leolifan007.github.io/dsp-guide/` (GitHub Pages subpath)
- User has existing Cloudflare DNS setup (uses for gambonanzaguide.com etc.)
- **Next step:** Buy a domain, point to GitHub Pages, bind to Cloudflare

### Recommended Domain Strategy
1. **Buy domain** from Namecheap/GoDaddy/Cloudflare Registrar
   - Suggested: `dspguide.com`, `dysonsphereguide.com`, or similar
   - ~$10-15/year for .com TLD
2. **Cloudflare DNS** (user already uses it)
   - Add domain to Cloudflare
   - Set A records to GitHub Pages IPs (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
   - Or CNAME www → `leolifan007.github.io`
3. **GitHub Pages custom domain**
   - In repo Settings > Pages > Custom domain → enter your domain
   - GitHub auto-creates a CNAME file in the repo
   - Enable HTTPS enforcement (GitHub provides TLS cert)

### Post-Domain Changes Needed
- Update `baseURL` in `hugo.toml` from `https://leolifan007.github.io/dsp-guide/` to `https://yourdomain.com/`
- Update `<base>` tag in `baseof.html` to new domain
- Remove `/dsp-guide/` prefix from all paths — when on root domain, paths become `/css/...` instead of `/dsp-guide/css/...`
- Rebuild + push to deploy

### Cloudflare-Specific
- Enable proxy (orange cloud) for DDoS protection + CDN
- Set SSL to Full (not Flexible) since GitHub provides TLS
- Page Rules: cache everything for static assets
- Speed > Rocket Loader → OFF (breaks Hugo scripts)

---

## 💰 MONETIZATION SETUP

### Google AdSense
- **AdSense ID already in hugo.toml:** `ca-pub-7551387157478980`
- **Status:** ID is configured but NO AdSense code is rendered on the site yet
- **When to enable:** After domain is set up and site has ~5-10 articles (Google requires quality content)
- **Implementation:** Add AdSense auto-ads script to `baseof.html` <head>:
  ```html
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7551387157478980" crossorigin="anonymous"></script>
  ```
- **Ad placement strategy:**
  - In-article ads (after 2nd section)
  - Sidebar (TOC area — but TOC already lives there)
  - Bottom of article (before "Bottom Line")
  - Don't overload — DSP audience is technical, hates intrusive ads

### Google Analytics 4 (GA4)
- **GA4 ID field in hugo.toml:** Currently EMPTY `google_analytics_id = ''`
- **Setup:**
  1. Go to https://analytics.google.com/ → Create new property
  2. Get Measurement ID (format: `G-XXXXXXXXXX`)
  3. Add to `hugo.toml`: `google_analytics_id = 'G-XXXXXXXXXX'`
  4. Add Google tag (gtag.js) to `baseof.html` <head>
- **Key metrics to track:** Page views, organic search traffic, bounce rate, top landing pages
- **Goal tracking:** Set up "scroll depth" events to measure engagement

### Google Search Console
- **Critical for SEO** — tells Google about your site + shows search queries
- **Setup:**
  1. https://search.google.com/search-console → Add property
  2. Use Domain property type (recommended) or URL prefix
  3. Verify via DNS TXT record (if using Cloudflare) or HTML file upload
  4. Submit sitemap: `https://yourdomain.com/sitemap.xml` (Hugo generates this)
- **Monitor:** Index coverage, search queries, click-through rate, Core Web Vitals

### SEO Checklist (Pre-Launch)
- [ ] Custom domain set up
- [ ] Google Search Console verified
- [ ] Sitemap submitted (`/sitemap.xml` — Hugo generates automatically)
- [ ] robots.txt exists (`/robots.txt` — Hugo generates from hugo.toml)
- [ ] `<meta name="description">` on every page (set in front matter)
- [ ] `<title>` tags are unique per page
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`) for social sharing
- [ ] Canonical URLs set (Hugo does this with `<link rel="canonical">`)
- [ ] Page speed: compress SVGs, lazy-load images
- [ ] Internal linking between guides (homepage cards + nav already do this)

### Monetization Pipeline (Order of Operations)
```
1. Write 5-10 quality articles  ← YOU ARE HERE (4 done)
2. Buy custom domain
3. Cloudflare DNS → GitHub Pages
4. Update hugo.toml baseURL
5. Google Search Console verification
6. Submit sitemap
7. Wait for indexing (1-2 weeks)
8. Apply for Google AdSense (need ~10 articles + 3 months recommended)
9. Add GA4 tracking
10. Optional: Amazon affiliate links (DSP is on Steam, not Amazon-friendly)
```

---

## 📝 CONTENT CREATION PRINCIPLES (Gun ammo know)

### 1. Core Principle (一字不差记住)
> **"带说明的图片才是最好的交互方案。文字尽量减少。"**
> Images with explanations are the best interaction. Minimize text.

Every guide must follow this. Never write walls of text. Always ask: "Can I replace this paragraph with a diagram?"

### 2. Content Strategy: Problem-Driven, Not Beginner Guide
- **DO NOT write:** "新手入门", "游戏介绍", "beginner guide", "how to play", "getting started"
- **DO write:** Solutions to specific player pain points — search intent is "卡住了怎么办" / "why does X keep happening"
- **Example:** "Dyson Sphere Program power keeps crashing" → a guide about cascade failures and emergency restart. Not a guide about what power is.
- **Long-tail keywords win:** `"dyson sphere program ILS supply vs demand"` >> `"dyson sphere program guide"`

### 3. Target Audience
- Players who have passed the early game (Yellow Science stage) and hit a wall
- Not absolute beginners — assume they know the basics of mining, crafting, building
- They're frustrated with a specific problem, not looking for a tutorial

### 4. Visual-First Content Design
- **SVG diagrams** > text explanations (always)
- **Game material icon cards** (recipe shortcode) > ingredient text lists
- **Annotated flowcharts** for multi-step processes (e.g., Titanium transport workflow, Power cascade restart)
- **Callout boxes** for TL;DRs and pro-tips (callout shortcode)
- **Build checklists** as card grids (check shortcode), not bullet lists
- **Section headers** with visual separation (section shortcode → amber left border + dark bg)

### 5. Article Structure (template from green-science-warper-guide.md)
Each article should roughly follow:
1. **Hook** — Name the pain point. "You've got Yellow Science running. Titanium flowing. Then you look at Green Matrix and think..."
2. **TL;DR** — Callout box at the top with the quick answer for impatient readers
3. **Breaking it down** — Step-by-step sections. Each h2 section = one logical step
4. **Visual diagrams** — At least 1-2 SVG diagrams per article explaining key concepts
5. **Quick ratio / reference** — Production numbers, ingredient counts, assembler ratios
6. **What you get** — Unlocks and benefits summary
7. **Bottom line** — Brief motivational wrap-up
8. **Every section ends with a visual** — never end a section with text alone

### 6. Writing Style
- **Direct, conversational tone** — Like a veteran player explaining it to a friend
- **No emoji** (user explicitly rejected them — caused garbled chars and unprofessional look)
- **Short paragraphs** (2-4 sentences max)
- **No walls of text** — If you see more than 5 lines without an image/card/diagram, break it up
- **English only** — Single-language English site (Chinese reduces Google ranking)
- **Casual but precise** — Use game terminology correctly, but don't be dry

### 7. Available Components (Shortcodes)
| Shortcode | Usage | Example |
|-----------|-------|---------|
| `{{< section "Title" >}}` | H2 section heading | `{{< section "Step 1: Find Titanium" >}}` |
| `{{< recipe name1="..." qty1="1x" ... result="..." rqty="1x" >}}` | Recipe row with icons | name1/2/3 + qty1/2/3 for ingredients, result + rqty for output |
| `{{< callout >}}text{{< /callout >}}` | Tip/info/warning box | Regular callout |
| `{{< callout tip >}}text{{< /callout >}}` | Pro-tip style callout | Yellow-bordered tip |
| `{{< diagram src="..." caption="..." >}}` | SVG diagram | `{{< diagram src="/images/xxx.svg" caption="..." >}}` |
| `{{< check icon="..." label="..." count="..." >}}` | Checklist item | For build checklists |
| `{{< material img="..." name="..." >}}` | Single material card | Material icon with name |

**IMPORTANT:**
- Recipe shortcode uses **named parameters** ONLY. NEVER positional.
- Diagram shortcode: provide SVG path (relative to /images/) and caption.
- Callout shortcode MUST have closing tag: `{{< callout >}}...{{< /callout >}}`
- Section shortcode is self-closing: `{{< section "Title" >}}`

### 8. Content Ideas Queue (Validated Topics)
Priority topics (already validated by user — pain points competitors DON'T cover):
1. **How to fix power cascade failure** — ✅ DONE (power-fix-guide.md)
2. **ILS supply vs demand explained** — ✅ DONE (ils-setup-guide.md)
3. **Titanium transport to home planet** — ✅ DONE (titanium-transport-guide.md)
4. **Green Matrix / Space Warpers** — ✅ DONE (green-science-warper-guide.md)
5. **Orbital Collector deployment guide** — 🔲 HIGH PRIORITY (P1 SVG planned)
6. **Equatorial solar belt layout** — 🔲 MEDIUM (P1)
7. **Yellow vs Green tech tree comparison** — 🔲 MEDIUM (P1)
8. **Advanced Mining Machine guide** — 🔲 LOW
9. **Plane Smelter setup** — 🔲 LOW
10. **Logistics Carrier Engine upgrades explained** — 🔲 LOW

### 9. Content Review Process
- Write the article → Build (`hugo --destination docs`) → Entity fix → Push → Wait for GH Pages (~45s)
- Let USER visually verify on GitHub Pages (they Ctrl+F5 to hard-refresh)
- User reviews, gives feedback → Iterate
- **Never push without entity fixing** — the raw Goldmark output has escaped HTML

---

## What's Working (Verified on Live)

### ✅ Recipe Icons (28 game-slots)
- Shortcode `layouts/shortcodes/recipe.html` uses **named parameters**
- Inline icon mapping embedded (48 materials), no TOML data file dependency
- Icon paths: `/dsp-guide/images/dsp-icons/*.png`
- 33 real game icons downloaded from `dyson-calculator.com` in `static/images/dsp-icons/`

### ✅ TOC (Table of Contents)
- `static/js/main.js` generates TOC from `.article-body h2` elements
- Also handles scroll-spy + smooth-scroll
- No inline backup script in `baseof.html` (was removed — had broken regex with newline)
- CSS `.toc-link` styles exist in `dsp-main.css`

### ✅ H2 Section Headers
- Amber left border (`#f59e0b`) + dark background (`rgba(10,25,50,0.95)`)
- Verified deployed and correct

### ✅ Homepage
- Hero background, guide cards, topic cards CSS added
- Homepage template rewritten clean (no more garbled emoji chars)

### ✅ CSS Cleanup
- Deleted: `custom.css`, `main.css`, `vendor.css`, `public/`, `public2/`
- Removed: `FORCE OVERRIDES` section (1768 bytes stale !important rules)
- Single CSS file: `static/css/dsp-main.css`

### ✅ Hugo Shortcode System
6 shortcodes + 1 data file:
| File | Path | Usage |
|------|------|-------|
| recipe | `layouts/shortcodes/recipe.html` | Recipe ingredient + result row |
| material | `layouts/shortcodes/material.html` | Single material icon card |
| callout | `layouts/shortcodes/callout.html` | Tip/info/warning |
| section | `layouts/shortcodes/section.html` | H2 heading |
| diagram | `layouts/shortcodes/diagram.html` | SVG fig |
| check | `layouts/shortcodes/check.html` | Checklist item |
| data | `data/materials.toml` | Icon name→filename mapping (not used by recipe.html) |

### ✅ Green Science Page Refactored
- `content/green-science-warper-guide.md` — fully rewritten with all shortcodes
- 5 sections, 8 recipe rows, 3 diagrams, 4 callouts

---

## What's Still Broken (User Reported 12:19)

| # | Issue | Page(s) | Type |
|---|-------|---------|------|
| A1 | H2 background bar | All pages | FIXED ✅ |
| A2 | Content not centered (偏右) | All pages | FIXED ✅ |
| A3 | Cost Calculator layout loose | Green Science | FIXED ✅ |
| A4 | Bottom check-list/box-split messy | Green Science | NEEDS VERIFY |
| B1 | Icon display inconsistency | All pages | FIXED ✅ |
| B2 | Same material different icons | Green Science | FIXED ✅ |
| B3 | Icon size too large/small | All pages | NEEDS VERIFY |
| C1 | Nav alignment | All pages | FIXED ✅ |
| C2 | TOC font too small / not button-like | All pages | NEEDS CSS FIX |
| C3 | TOC only 1 button (A-level bug) | Green Science | NEEDS DEBUG |
| C4 | TOC position/sticky | All pages | NEEDS VERIFY |
| C5 | TOC truncation | All pages | NEEDS CHECK |
| D | Homepage broken | Home | FIXED ✅ |

---

## Build & Deploy Workflow
```powershell
cd "C:\Users\ROG\.qclaw\workspace-irfnf4l86a7w0aii\100个Steam攻略站\DSP_Site"
Remove-Item -Recurse docs\* -Force
hugo --destination docs --cleanDestinationDir
# Entity fix (post-build) — CRITICAL STEP, never skip:
python -c "import html,os; os.chdir('docs'); [setattr(f,'_',html.unescape(f.read())) or open(f.name,'w').write(f._) or print(f'{os.path.basename(os.path.dirname(f.name))}: fixed') for d in os.listdir('.') for f in [open(os.path.join(d,'index.html'),'r+')] if os.path.isfile(os.path.join(d,'index.html'))]"
# Then:
git add -A
git commit -m "message"
git push origin main
# Wait ~45s for GitHub Pages to build
```

## Entity Fix (Critical!)
Hugo 0.161 Goldmark outputs `.Content` with HTML entity encoding (`&lt;` instead of `<`) even with `unsafe=true`. 
**Post-build fix:** Python `html.unescape()` applied to all `docs/*/index.html` files.
**Template pipeline in single.html (backup):** 
```
{{ .Content | safeHTML | replaceRE `&lt;` `<` | replaceRE `&gt;` `>` | replaceRE `&#34;` `"` | replaceRE `&#39;` `'` | replaceRE `src="/images/` `src="/dsp-guide/images/` }}
```

## Key Technical Decisions
1. **Hugo server unreliable** — keep getting SIGKILL'd (OOM), use direct build + Python http-server
2. **GitHub Pages subpath** — `/dsp-guide/` prefix required, `<base>` tag used in baseof.html
3. **CSS never append** — always dedupe or rewrite cleanly, FORCE OVERRIDES creates cascade conflicts
4. **No inline TOC scripts** — single source in main.js, don't mix with baseof.html inline
5. **Recipe shortcode** — named params > string parsing for reliability
6. **No emoji in content** — user rejected them (caused garbled chars)
7. **Always entity-fix after build** — Goldmark escapes HTML even with unsafe=true

## Files That Need Most Attention
- `static/css/dsp-main.css` — single CSS file (~13KB)
- `static/js/main.js` — TOC generation + scroll-spy
- `themes/dsp-theme/layouts/_default/single.html` — article page template
- `themes/dsp-theme/layouts/_default/baseof.html` — site shell
- `layouts/shortcodes/recipe.html` — recipe component
- `content/green-science-warper-guide.md` — reference article (best example of shortcode usage)

## Other 3 Articles (Not Yet Refactored)
- `content/ils-setup-guide.md` — still uses old HTML divs
- `content/power-fix-guide.md` — same
- `content/titanium-transport-guide.md` — same
These 3 pages have no game-slot icons (they use SVG diagrams instead). No recipe rows to convert.

## Competition Analysis
- **Conclusion:** "英文深度问题解决型攻略有缺口"
- Competitors: Fandom Wiki (database), GamePressure (shallow ~600-1000 words, no H2s), PCGamesN/GamesRadar (generic beginner)
- **Our edge:** Problem-solving deep guides (3000-5000 words) with rich SVG diagrams and interactive recipe cards

## Next Priorities for New Session
1. **C2/C3 TOC** — Make TOC links look like buttons, fix truncation (only 1 shows)
2. **A4** — Verify bottom check-list layout
3. **B3** — Verify icon size consistency
4. **Verify ALL fixes with user** before writing new content
5. **Write new guides** following Content Principles above (start with P1 topics)
6. **Propagate component system** to other 3 articles (ils, power, titanium) if needed
7. Buy custom domain → Cloudflare → GitHub Pages
8. Google Search Console → Sitemap → Indexing
9. GA4 tracking
10. AdSense (after content critical mass)
