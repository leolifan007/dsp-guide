---
title: "How to Fix DSP Yellow Matrix Research Slowdown After Tech Unlock"
description: "Your yellow matrix research just ground to a halt after researching a major tech? Here is the real cause and the production line fix."
date: "2026-06-02"
lastmod: "2026-05-25T23:57:00+08:00"
publishDate: "2026-06-02T14:00:00+08:00"
hidden: true
version: "0.10.32"
categories: [Production & Science]
tags: [yellow-matrix, science, production-line, mid-game]
---

<p>You researched Titanium Alloy Smelting. Yellow matrices stopped. You researched Interstellar Logistics. Yellow matrices stopped again. Your research lab is consuming matrices but production is stalled. This isn't a bug — it's a buffer collapse, and it is fixable in 5 minutes.</p>

<div class="pro-tip">
<strong>TL;DR — The Fix:</strong><br>
Yellow matrix slowdown after tech unlock is caused by your production buffers running dry while new tech consumes the same materials. The fix is to add buffer storage between each production step and increase production of the bottleneck ingredient.<br>
<strong>Quick check:</strong> Open your production stats (P key). Check which yellow matrix ingredient is empty. That's your bottleneck.
</div>

<img src="/images/yellow-matrix-slowdown.svg" alt="Yellow matrix research slowdown diagram showing how buffers drain after tech unlocks and the production line fix" class="schema-diagram" loading="lazy" width="800" height="400">

<h2 id="the-buffer-collapse-mechanic">The Buffer Collapse: How It Works</h2>

<p>Here is what actually happens when you research a big tech and your yellow science stops:</p>

<ol>
<li>Your yellow matrix lab is producing matrices steadily from your production buffers</li>
<li>You research a tech that consumes materials ALSO used by yellow matrix (titanium, processor, etc.)</li>
<li>The new tech building pulls materials from shared buffers</li>
<li>Yellow matrix buffer runs dry → lab stops → research stops → and you sit there waiting</li>
</ol>

<p>The game's research system does NOT reserve materials for active research. If you build a new factory that consumes processors, it will happily starve your yellow matrix production because they draw from the same belt.</p>

<h2 id="find-your-real-bottleneck">Triage: Find Your Real Bottleneck</h2>

<table>
<thead>
<tr><th>Symptom</th><th>Likely Bottleneck</th><th>Fix</th></tr>
</thead>
<tbody>
<tr><td>Titanium shortage</td><td>Not enough titanium ingot production</td><td>Add 2-3 more smelting furnaces on titanium ore</td></tr>
<tr><td>Processor shortage</td><td>Processor production line at capacity</td><td>Add 2-3 more processor assemblers + circuit support</td></tr>
<tr><td>Organic crystal shortage</td><td>Oil refining or organic crystal production too low</td><td>Add refineries or switch to crystal mining</td></tr>
<tr><td>Water shortage</td><td>Water pumps not generating fast enough</td><td>Place 3-4 water pumps on a lake</td></tr>
</tbody>
</table>

<p>Open the production panel (P key) and look at the consumption rate vs. production rate for each yellow matrix ingredient. Any ingredient where consumption > production is your bottleneck.</p>

<h2 id="buffer-storage-strategy">The Buffer Storage Strategy</h2>

<p>Buffers are your friend. Add storage tanks or storage boxes at each yellow matrix ingredient production step. A buffer of 200-500 items per ingredient gives you a 10-30 minute cushion against material fluctuations.</p>

<p>Here is the buffer placement:</p>
<ul>
<li>After titanium smelting → storage box (200 ingots minimum)</li>
<li>After processor assembly → storage box (100 processors)</li>
<li>After organic crystal production → storage box (200 crystals)</li>
<li>After yellow matrix lab → storage box (50 matrices)</li>
</ul>

<p>The key insight: buffers turn intermittent production stalls into non-events. Your yellow lab keeps running for 10-30 minutes even if a belt backs up, giving you time to fix the root cause without stopping research.</p>

<div class="callout callout-info">
<strong>Pro tip from a 200-hour player:</strong> "I always overbuild yellow matrix production by 50%. The moment you unlock ILS, you will need a massive stockpile of yellow matrices to research all the new logistics techs at once."
</div>

<h2 id="permanent-production-scale">Permanent Solution: Production Scaling</h2>

<p>Buffers only delay the problem. The permanent fix is to scale your yellow matrix production line to handle both research consumption AND new tech building consumption.</p>

<p>The rule of thumb: if you are running 4 yellow matrix labs, build 6-8. The extra production capacity absorbs the spike when you research a tech that consumes processors or titanium.</p>

<p>Here is the target production rate for comfortable mid-game yellow science:</p>

<ul>
<li>6 Yellow Matrix Labs with Mk.I proliferator</li>
<li>Titanium Ingots: 120/min (6 smelters on titanium ore)</li>
<li>Processors: 60/min (4 assemblers)</li>
<li>Organic Crystals: 30/min (direct smelting from crystal mines if available)</li>
</ul>

<h2 id="tech-order-tip">Tech Order Tip: Research in Batches</h2>

<p>Instead of researching one tech at a time (which causes repeated buffer drain spikes), save up 2-3 techs and research them in sequence. This reduces the number of times your yellow matrix production needs to re-stabilize.</p>

<div class="cta-box">
<strong>Next production challenge:</strong> Once yellow science is stable, purple science (gravity matrices) is your next wall. See: <a href="/gravity-matrix-proliferator/">Gravity Matrix Proliferator Guide →</a>
</div>

<h2 id="community-verification">Community Verification</h2>
<ul>
<li><a href="https://wiki.gg/dyson-sphere-program/Matrix" target="_blank" rel="noopener noreferrer">DSP Wiki: Research Matrix production</a></li>
<li><a href="https://steamcommunity.com/app/1366540/discussions/" target="_blank" rel="noopener noreferrer">Steam Community: Mid-game science tips</a></li>
</ul>