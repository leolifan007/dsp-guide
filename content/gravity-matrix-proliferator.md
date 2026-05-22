---
title: "How to Set Up DSP Gravity Matrix Production With Mk.III Proliferator"
description: "Gravity matrices are the chokepoint of late-game DSP. Here is a blueprint-ready setup using Mk.III proliferator to 4x your output."
date: "2026-05-22"
lastmod: "2026-05-22T22:34:00+08:00"
hidden: true
version: "0.10.32"
categories: [Production & Science]
tags: [gravity-matrix, proliferator, science, purple-science, late-game]
---

<p>Purple science asks you to make Gravity Matrices — 20 processors, 20 quantum chips, and 2 plane filters per matrix. Without proliferator, you need dozens of buildings just to keep one matrix lab running. With Mk.III proliferator, the math changes completely.</p>

<div class="pro-tip">
<strong>TL;DR — The Setup:</strong><br>
Proliferate all three ingredients (Processors, Quantum Chips, Plane Filters) to Mk.III before inserting into the matrix lab. This gives you 4x production speed with no additional matrix labs.<br>
<strong>The ratio:</strong> 1 Matrix Lab + 4 Proliferator Sprayers + dedicated production lines for each ingredient.
</div>

<img src="/images/gravity-matrix-proliferator.svg" alt="Gravity matrix production setup with Mk.III proliferator showing the ingredient flow and sprayer placement" class="schema-diagram" loading="lazy" width="800" height="450">

<h2 id="why-proliferator-changes-everything">Why Mk.III Proliferator Changes Everything</h2>

<p>Gravity Matrices require three complex ingredients: Processors (made from circuits + microcrystalline), Quantum Chips (from processors), and Plane Filters (from nanotubes). Each of these ingredients benefits from proliferator spray in two ways:</p>

<table>
<thead>
<tr><th>Ingredient</th><th>Base Production Time</th><th>With Mk.III Proliferator</th><th>Buildings Saved</th></tr>
</thead>
<tbody>
<tr><td>Processor</td><td>3s</td><td>1.5s (2x speed)</td><td>50% fewer assemblers</td></tr>
<tr><td>Quantum Chip</td><td>6s</td><td>3s (2x speed)</td><td>50% fewer assemblers</td></tr>
<tr><td>Plane Filter</td><td>12s</td><td>6s (2x speed)</td><td>50% fewer assemblers</td></tr>
<tr><td>Gravity Matrix</td><td>24s</td><td>6s (4x speed)</td><td>75% fewer matrix labs</td></tr>
</tbody>
</table>

<p>That's right: a Mk.III proliferated Gravity Matrix lab runs at 4x speed because ALL three ingredients arrive pre-proliferated, giving you the spray adjacency bonus on top of the individual ingredient bonuses.</p>

<h2 id="the-exact-build">The Exact Build: Blueprint Ready</h2>

<p>Here is the build order for one full production module (produces ~45 gravity matrices per minute):</p>

<ol>
<li><strong>Line 1 — Processors:</strong> Circuit Board + Microcrystalline Component → Proliferator Sprayer → Assembler (Processor)</li>
<li><strong>Line 2 — Quantum Chips:</strong> Processor (from Line 1) → Proliferator Sprayer → Assembler (Quantum Chip)</li>
<li><strong>Line 3 — Plane Filters:</strong> Titanium Nanotube + Organic Crystal → Proliferator Sprayer → Assembler (Plane Filter)</li>
<li><strong>Line 4 — Matrix Assembly:</strong> Processors + Quantum Chips + Plane Filters (all proliferated) → Matrix Lab</li>
</ol>

<p>Each ingredient belt passes through a Mk.III Proliferator Sprayer before entering its assembler. The sprayers consume 1 spray per 8 items, so make sure your proliferator production (pink coal + diamond) keeps up.</p>

<div class="callout callout-warning">
<strong>Key detail:</strong> Proliferator is used as it sprays. If your proliferator line runs dry mid-production, the sprayers won't spray the ingredients, and your matrix lab drops to 1x speed. Build a dedicated proliferator production line just for this setup.
</div>

<h2 id="item-rate-calculations">Item Rate Calculations</h2>

<ul>
<li><strong>Processors needed:</strong> 20/min per matrix lab (30/min with Mk.III spray)</li>
<li><strong>Quantum Chips needed:</strong> 20/min per matrix lab (30/min with Mk.III spray)</li>
<li><strong>Plane Filters needed:</strong> 2/min per matrix lab (3/min with Mk.III spray)</li>
<li><strong>Proliferator per minute:</strong> ~30 spray cans (one full Mk.III Assembler)</li>
</ul>

<p>To produce enough Gravity Matrices for one full science line (60/min purple science), you need about 12 matrix labs with full proliferator support.</p>

<h2 id="before-you-build">Pre-Build Checklist</h2>

<p>Do NOT start building gravity matrix production until these are done:</p>
<ul>
<li>Processors production running at 60+/min</li>
<li>Quantum Chips unlocked with stable processor supply</li>
<li>Plane Filter production operational (titanium nanotubes + organic crystal)</li>
<li>Mk.III Proliferator unlocked and producing at least 30 spray/min</li>
<li>ILS network established for cross-planet material transport</li>
</ul>

<div class="cta-box">
<strong>Want to optimize further?</strong> See the proliferator guide for maximum efficiency: <a href="/quantum-chips-proliferator/">Quantum Chips Proliferator Guide →</a>
</div>

<h2 id="community-verification">Community Verification</h2>
<ul>
<li><a href="https://wiki.gg/dyson-sphere-program/Gravity_Matrix" target="_blank" rel="noopener noreferrer">DSP Wiki: Gravity Matrix</a></li>
<li><a href="https://steamcommunity.com/app/1366540/discussions/" target="_blank" rel="noopener noreferrer">Steam Community: End-game science setups</a></li>
</ul>