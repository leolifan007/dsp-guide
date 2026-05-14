---
title: "ILS Not Moving Items? Here's the 30-Second Fix (DSP Guide)"
description: "ILS not moving items? Here's why and exactly how to fix Supply vs Demand, Warper slots, and vessel range in 30 seconds."
date: "2026-05-14"
---





  <p>Your ILS has power. Ships are docked. Nothing moves.</p>
<p>Yeah. This is the #1 &ldquo;why the hell isn't this working&rdquo; question in DSP. Let's fix it in 30 seconds flat.</p>

<div class="pro-tip">
  <strong>TL;DR — Two things to check:</strong><br>
  1. One planet must be Supply, the other Demand (not both Supply)<br>
  2. Your vessels need Space Warpers to fly. Put some in the slot.


{{< section >}} Supply vs Demand — The 1-Minute Show{{< /section >}}

<p>Every ILS slot has a dropdown: Supply, Demand, and Store. Half the community doesn't know these make the difference between a dead ILS and a humming factory.</p>

<img src="/images/ils-demand-vs-supply.svg" alt="ILS Supply vs Demand explanation showing how items flow on green arrows between planets" class="schema-diagram" loading="lazy" width="600" height="420">

<p><strong>Supply</strong> → &ldquo;I have this. Take it.&rdquo;
<strong>Demand</strong> → &ldquo;I don't have this. Bring it.&rdquo;</p>
<p>The classic mistake: you set both planets to Supply. Or both to Demand. Nothing moves — the game's waiting for a match that doesn't exist.</p>
<p><strong>Fix it:</strong> Planet A (factory) = Supply. Planet B (where you need it) = Demand. Done.</p>
{{< section >}} Warpers — The Hidden Requirement{{< /section >}}
<p>This one catches everyone. Interstellar vessels don't fly for free. Each trip burns one Space Warper.</p>

<img src="/images/ils-warper-slot.svg" alt="ILS Warper slot setup showing Slot 4 must be set to Supply with Space Warpers or vessels won't fly" class="schema-diagram" loading="lazy" width="600" height="400">

<p>Here's what happens: vessels dock at your ILS, sit there looking pretty, and never take off. You check the ILS screen — &ldquo;waiting for cargo&rdquo; — but there's cargo. The real reason? Slot 4 is empty.</p>
<p><strong>Fix it:</strong></p>
<ol>
<li>Craft some Space Warpers (need Green Matrix unlocked)</li>
<li>Put them in ILS Slot 4</li>
<li>Set that slot to Supply</li>
<li>Keep at least 50 in stock</li>
</ol>

<div class="callout callout-warning">
  <strong>⚡ One warper = 200 items shipped.</strong> The math works out fine. Just don't run out.


{{< section >}}️ The Vessel Range Slider{{< /section >}}
<p>There's a slider in the ILS panel labeled &ldquo;Vessel Range.&rdquo; Default is 60 AU (max). If you accidentally nudged it down, your vessels can't reach the next planet.</p>
<p><strong>Fix:</strong> Drag it back to 60. Takes half a second.</p>
<img src="/images/ils-how-it-works.svg" alt="ILS workflow diagram showing Planet A sending items via vessels to Planet B through logistics station" class="schema-diagram" loading="lazy" width="800" height="500">
{{< section >}}✅ Quick Checklist{{< /section >}}
<table>
  <thead>
      <tr>
          <th>Step</th>
          <th>Check This</th>
          <th>Fix</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>1</td>
          <td>Supply/Demand set right?</td>
          <td>One Supply, one Demand</td>
      </tr>
      <tr>
          <td>2</td>
          <td>Warpers loaded?</td>
          <td>50+ in a Supply slot</td>
      </tr>
      <tr>
          <td>3</td>
          <td>Vessel Range max?</td>
          <td>Should be 60 AU</td>
      </tr>
      <tr>
          <td>4</td>
          <td>Power stable?</td>
          <td>ILS needs ~10 MW to charge ships</td>
      </tr>
      <tr>
          <td>5</td>
          <td>Ships built?</td>
          <td>Crafted and docked</td>
      </tr>
  </tbody>
</table>

<div class="cta-box">
   <strong>Still stuck on power?</strong> → <a href="/en/power-fix-guide/">Power keeps tripping? Fix it here →</a>


{{< section >}} Why DSP Makes This Confusing{{< /section >}}
<p>The game unlocks the ILS and gives you a tooltip with power specs, slot counts, and vessel capacity. Useful info. What it doesn't tell you: the logistics logic. How Supply vs Demand works. That vessels need fuel.</p>
<p>One fix and you'll never get stuck again. Every new planet, same setup. Supply, Demand, Warpers. Done.</p>