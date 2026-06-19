---
title: "How to Prevent DSP Logistic Drone Congestion at ILS Station"
description: "Drones piling up at one ILS while others starve? Here is the fix using priority splitters, drone limits, and orbital buffer stations."
date: "2026-05-27"
lastmod: "2026-05-25T23:57:00+08:00"
hidden: false
version: "0.10.32"
categories: [Logistics & Transport]
tags: [ils, drones, logistics, congestion, late-game]
---

<p>You have 200 drones orbiting a single ILS while three other stations sit empty. Items that should take 10 seconds to move take 5 minutes. Your factory is running at 30% because of logistics gridlock. Drone congestion is the hidden throughput killer of DSP. If your ILS vessels are not even taking off yet, start with our <a href="/ils-setup-guide/">ILS Setup Guide</a> to make sure your Supply/Demand configuration and warper slots are correct before troubleshooting drone distribution.</p>

<div class="pro-tip">
<strong>TL;DR — The Fix:</strong><br>
Cap your drones per ILS station (5-10 max), use priority splitters to balance material distribution, and add orbital buffer chests near high-traffic buildings.<br>
<strong>The magic number:</strong> 8 drones per ILS station is the sweet spot for 95% of factory setups.
</div>

<img src="/images/ils-drone-congestion.svg" alt="DSP drone congestion diagram showing how drones stack at one ILS while others are idle, with the fix using drone caps and buffer stations" class="schema-diagram" loading="lazy" width="800" height="450">

<h2 id="what-causes-drone-gridlock">What Causes Drone Gridlock</h2>

<p>The drone congestion problem is a classic tragedy of the commons in DSP's logistics system. Here is the chain reaction:</p>

<ol>
<li>Station A has 50 drones assigned</li>
<li>Station A's demand fills up (buildings don't need items right now)</li>
<li>All 50 drones from Station A return home and sit idle</li>
<li>Station B needs items but only has 2 drones assigned</li>
<li>Station B cannot move enough items, factory stalls</li>
</ol>

<p>The game gives you no built-in load balancing for drones. Each ILS station has its own assigned drones, and they won't help other stations. The only way to prevent congestion is to design the system so no single station accumulates too many idle drones.</p>

<h2 id="the-drone-cap-rule">The Drone Cap Rule: 8 Maximum Per Station</h2>

<table>
<thead>
<tr><th>Station Type</th><th>Recommended Drones</th><th>Recommended Vessels</th><th>Notes</th></tr>
</thead>
<tbody>
<tr><td>Mining Outpost</td><td>8</td><td>5</td><td>High throughput, single material</td></tr>
<tr><td>Smelting Column</td><td>6</td><td>4</td><td>Moderate throughput</td></tr>
<tr><td>Intermediate Production</td><td>6</td><td>3</td><td>Multi-material, lower volume</td></tr>
<tr><td>Science Hub</td><td>10</td><td>6</td><td>High traffic, multiple materials</td></tr>
<tr><td>Remote Mining Planet</td><td>4</td><td>10</td><td>Vessels do the work, drones just for belts</td></tr>
</tbody>
</table>

<p>Lower drone counts force stations to process items faster. A station with 50 drones will have 48 of them idle. A station with 8 drones will keep all 8 moving at all times. Less drones = more throughput per drone.</p>

<h2 id="priority-splitter-strategy">Priority Splitter Material Distribution</h2>

<p>When you have multiple ILS stations requesting the same material (e.g., iron ingots), the default behavior is that the <em>nearest</em> supply ILS handles all requests. This creates a bottleneck at the closest supply station while distant supply stations sit full.</p>

<p>The fix: use priority splitters at the <strong>belt level</strong> to distribute incoming materials across multiple ILS receiving stations. Set your highest-throughput station as priority, and the overflow routes to secondary stations.</p>

<div class="callout callout-info">
<strong>Pro tip:</strong> One splitter distributes to two outputs. For three or more receiving stations, chain priority splitters in sequence. First priority grabs what it needs, passes the rest down the line.
</div>

<h2 id="orbital-buffer-strategy">Orbital Buffer Chests: The Pro Solution</h2>

<p>For high-traffic buildings like Research Labs or Fractionators, add a small buffer chest between the ILS output and the building input. This chest acts as a shock absorber: when the drone is delayed, your building pulls from the buffer instead of starving.</p>

<p>A single Mk.II Storage Box holds enough materials to run most production lines for 5-10 minutes without drone deliveries. This eliminates the production stutter caused by drone travel time.</p>

<h2 id="drone-vs-belt-tradeoff">When to Switch: Drones vs Belts</h2>

<ul>
<li><strong>Short distance + high volume:</strong> Belts win (4 belts = unlimited throughput)</li>
<li><strong>Long distance + low volume:</strong> Drones win (no belt cost, low latency)</li>
<li><strong>Cross-planet:</strong> ILS always (belts don't work between planets)</li>
<li><strong>Mixed material types:</strong> Drones win (sorting via belts is painful)</li>
</ul>

<p>A good rule: use belts for high-volume base materials (iron, copper, coal) and drones for everything else.</p>

<div class="cta-box">
<strong>Going interplanetary?</strong> Scale your logistics further: <a href="/ils-setup-guide/">ILS Setup Guide →</a>
</div>

<p>When expanding to a multi-planet logistics network, drone congestion compounds across planetary systems. The <a href="/factory-expansion-guide/">Factory Expansion Guide</a> covers how to design planet-specific ILS configurations that minimize cross-planet drone traffic.</p>

<h2 id="community-verification">Community Verification</h2>
<p><em>Diagram updated 2026-06-10: SVG rebuilt to fix rendering on GitHub Pages.</em></p>
<ul>
<li><a href="https://wiki.gg/dyson-sphere-program/Logistics_Drone" target="_blank" rel="noopener noreferrer">DSP Wiki: Logistics Drone mechanics</a></li>
<li><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2817369299" target="_blank" rel="noopener noreferrer">Steam Guide: Advanced ILS logistics</a></li>
</ul>