---
title: "Blue Science Stuck? Fix Refinery Stalls and Hydrogen Backups (DSP Guide)"
description: "Blue Science keeps stopping? It is always Hydrogen. Set up stable Refinery chains, fix Hydrogen backup issues, and keep Blue Matrix flowing without babysitting."
date: "2026-05-18"
---

<p>You have got Red Science humming. Yellow Matrix is on the horizon. Then you build your first Refinery and everything stops.</p>
<p>Blue Science is the first wall in DSP that is not just "build more miners." It introduces Refined Oil, Hydrogen byproducts, and the frustrating "one output backed up, whole chain dead" problem. This guide walks through the exact setup so your Blue Matrix runs without constant babysitting.</p>

<div class="pro-tip">
  <strong>TL;DR Three things to get right:</strong><br>
  1. Hydrogen is a byproduct, not waste; give it somewhere to go or refineries stall<br>
  2. X-Ray Cracking is your release valve when Refined Oil backs up<br>
  3. Titanium Ingots are required for Blue Matrix; set that up first
</div>

{{< section "Why Blue Science Is Different" >}}

<p>Every science tier before Blue is straightforward. Magnetic coils go into Red. Gears and circuits, fine. Then Blue arrives and the game hands you a Refinery that takes one input and produces two outputs. Two outputs means two belts. If either belt fills up, the machine stops.</p>
<p>That is the core mechanic you have not faced yet. And it is why half the community posts about "help my factory stopped" are about this specific chain.</p>

<img src="/images/blue-science-refinery-split.svg" alt="Crude Oil Refinery split diagram showing production tree from Oil Extractor through Refinery to Refined Oil and Hydrogen byproducts" class="schema-diagram" loading="lazy" width="700" height="420">

{{< section "Step 1: Oil Extraction Setup" >}}

<p>Find an Oil Seep on your starter planet or a nearby ocean world. Each Seep supports 4 to 6 Oil Extractors at roughly 60 Crude Oil per minute per extractor at full utilization. Route all Crude Oil to your Refinery area on a single belt.</p>

<table>
  <thead>
    <tr>
      <th>Extractors</th>
      <th>Crude Oil/min</th>
      <th>Supports Blue/min</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4</td>
      <td>~240</td>
      <td>~30 Blue</td>
    </tr>
    <tr>
      <td>6</td>
      <td>~360</td>
      <td>~45 Blue</td>
    </tr>
    <tr>
      <td>8</td>
      <td>~480</td>
      <td>~60 Blue</td>
    </tr>
  </tbody>
</table>

<p>Overproduce Crude Oil. Refineries only pull what they need and the belt buffer smooths out dips when extractors run on low power.</p>

<div class="callout callout-warning">
  <strong>Oil tip:</strong> Do not belt Crude Oil across oceans from a distant planet. Ship it via ILS or use a Planetary Logistics Station. Long belts waste resources better spent on your factory core.
</div>

{{< section "Step 2: The Refinery Chain" >}}

<p>One Refinery processing Crude Oil produces roughly 30 Refined Oil and 20 Hydrogen per minute. Both outputs feed different parts of Blue Science.</p>

<p><strong>Blue Matrix ingredients:</strong></p>
<ul>
  <li><strong>Diamond</strong> from Refined Oil + Graphite (Chemical Plant)</li>
  <li><strong>Crystal Silicon</strong> from Refined Oil + Silicon Ore (Chemical Plant)</li>
  <li><strong>Titanium Ingot</strong> from Titanium Ore (Smelter) &mdash; <a href="/titanium-transport-guide/">need Titanium?</a></li>
</ul>

<h3>Target Build: 30 Blue Matrix/min</h3>
<ul>
  <li>3 Refineries (Crude Oil processing)</li>
  <li>2 Chemical Plants (Diamonds)</li>
  <li>2 Chemical Plants (Crystal Silicon)</li>
  <li>6 Matrix Labs (Blue Science assembly)</li>
  <li>1 X-Ray Cracking Chemical Plant (Hydrogen sink)</li>
</ul>

<p>Crude Oil belt feeds Refineries. Refinery output splits: Refined Oil goes to Diamond and Crystal Silicon plants, Hydrogen goes to a buffer tank. From the buffer tank, Hydrogen feeds either a Thermal Plant or X-Ray Cracker. Matrix Labs get all three ingredients via separate belts.</p>

<img src="/images/blue-science-flow.svg" alt="Blue Matrix production chain diagram showing full flow from Oil Extraction to Blue Matrix assembly with build ratios" class="schema-diagram" loading="lazy" width="800" height="520">

{{< section "Step 3: The Hydrogen Problem" >}}

<p>Here is where it breaks. Your Refineries produce Hydrogen. If Hydrogen has nowhere to go, the Refineries stall. If Refineries stall, no Refined Oil. No Refined Oil means no Blue Science. You come back ten minutes later and your labs are idle.</p>

<p>Three ways to handle it, ordered by reliability:</p>

<h3>Option A: Burn It (Beginner)</h3>
<p>Route excess Hydrogen into Thermal Power Stations. Each burns Hydrogen at 2.4 MW. Build 2 to 3 in a row, connect them to your grid, and set Hydrogen as priority fuel. They only kick in when there is surplus, acting as an automatic buffer.</p>
<p><strong>Pros:</strong> Dead simple, zero belt logic needed.</p>
<p><strong>Cons:</strong> Wastes free power potential. Fine for 30/min Blue.</p>

<h3>Option B: Feed Red Science (Efficient)</h3>
<p>If you are producing Red Science, hydrogen goes directly into Red Matrix production. Even if not expanding Red, storing Hydrogen in Liquid Storage Tanks gives you a buffer that feeds into your existing science line.</p>
<p><strong>Pros:</strong> Productive use of a waste stream.</p>
<p><strong>Cons:</strong> Need Liquid Storage Tanks researched and built.</p>

<h3>Option C: X-Ray Cracking Loop (Optimal)</h3>
<p>Run X-Ray Cracking on excess Refined Oil and Hydrogen. This converts both into Energetic Graphite while net-consuming Hydrogen. It is the cleanest long-term solution because it eliminates the backup at the source.</p>

<table>
  <thead>
    <tr>
      <th>Recipe</th>
      <th>Input</th>
      <th>Output</th>
      <th>Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Crude Oil Refining</td>
      <td>Crude Oil x2</td>
      <td>Refined Oil x1 + Hydrogen x1</td>
      <td>4s</td>
    </tr>
    <tr>
      <td>Diamond</td>
      <td>Refined Oil x1 + Graphite x1</td>
      <td>Diamond x1</td>
      <td>2s</td>
    </tr>
    <tr>
      <td>Crystal Silicon</td>
      <td>Refined Oil x1 + Silicon Ore x1</td>
      <td>Crystal Silicon x1</td>
      <td>2s</td>
    </tr>
    <tr>
      <td><strong>X-Ray Cracking</strong></td>
      <td>Refined Oil x1 + Hydrogen x2</td>
      <td>Energetic Graphite x1 + Hydrogen x1</td>
      <td>4s</td>
    </tr>
  </tbody>
</table>

<div class="callout callout-warning">
  <strong>X-Ray math:</strong> Input 2 Hydrogen, output 1 Hydrogen; net loss of 1 Hydrogen per cycle. Run one Cracker per 3 Refineries and your line stays stable.
</div>

{{< section "Step 4: Assemble the Matrix Line" >}}

<p>With Diamonds and Crystal Silicon stable, build your Matrix Labs. Blue Matrix needs all three inputs on separate belts feeding each lab:</p>
<ul>
  <li><strong>Belt 1:</strong> Diamonds</li>
  <li><strong>Belt 2:</strong> Crystal Silicon</li>
  <li><strong>Belt 3:</strong> Titanium Ingots</li>
</ul>

<p>Space labs 2 tiles apart in rows of 6 to 8. Run three input belts parallel and use Sorters to pull from each belt into each lab.</p>

<p><strong>Critical:</strong> Your Titanium Ingot belt needs a dedicated supply line. If it runs dry, Matrix Labs stop even when Diamonds and Silicon are flowing. Do not share the Titanium belt with other consumers.</p>

{{< section "Quick Reference" >}}

<table>
  <thead>
    <tr>
      <th>Component</th>
      <th>30 Blue/min</th>
      <th>60 Blue/min</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Oil Extractor</td>
      <td>4-6</td>
      <td>8-10</td>
    </tr>
    <tr>
      <td>Refinery</td>
      <td>3</td>
      <td>6</td>
    </tr>
    <tr>
      <td>Chemical Plant (Diamond)</td>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr>
      <td>Chemical Plant (Crystal Silicon)</td>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr>
      <td>X-Ray Cracking</td>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Matrix Lab</td>
      <td>6</td>
      <td>12</td>
    </tr>
    <tr>
      <td>Liquid Storage Tank</td>
      <td>1-2</td>
      <td>2-3</td>
    </tr>
  </tbody>
</table>

<div class="cta-box">
  <strong>ILS giving you trouble?</strong> <a href="/ils-setup-guide/">Fix Supply vs Demand here</a>
</div>

{{< section "Bottom Line" >}}

<p>Blue Science is not hard once you understand the byproduct mechanic. Get Oil Extractors on a Seep, feed Crude Oil to Refineries, split Refined Oil into Diamonds and Crystal Silicon, and always give Hydrogen an exit. The Hydrogen buffer tank is non-negotiable; skip it and your line stops within minutes.</p>

<p>Once Blue Matrix is stable, you are ready for Purple Science and the mid-game push toward Warpers and interstellar logistics.</p>

<div class="cta-box">
  <strong>More DSP Guides:</strong><br>
  <a href="/titanium-transport-guide/">Titanium Transport</a> &mdash; <a href="/ils-setup-guide/">ILS Not Moving Items?</a> &mdash; <a href="/power-fix-guide/">Power Keep Tripping?</a>
</div>
