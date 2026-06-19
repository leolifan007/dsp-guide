---
title: "How to Fix ILS Not Picking Up Items From DSP Local Storage"
description: "Your Interstellar Logistics Station has local storage items but drones won't pick them up? Here is the exact slot configuration and filter fix."
date: "2026-05-25"
lastmod: "2026-05-25T23:40:00+08:00"
hidden: false
version: "0.10.32"
categories: [Logistics & Transport]
tags: [ils, logistics, drones, mid-game]
---

<p>You have 2,000 iron ingots sitting inside the ILS storage. The drones are idle. Nothing is moving. Your factory downstream is starving. This is the most common ILS troubleshooting issue in DSP. For a complete walkthrough of ILS settings including remote/local supply and demand, check our <a href="/ils-setup-guide/">ILS Setup Guide</a>.</p>

<div class="pro-tip">
<strong>TL;DR — The Fix:</strong><br>
Open the ILS panel. Set the slot to <strong>Supply</strong> (not Storage). Remote Demand set to 0. Local Demand set to 0 or your target. Drones will now pick up from this station.<br>
<strong>The golden rule:</strong> "Supply" means drones can TAKE items out. "Storage" means items just sit there.
</div>

<img src="/images/ils-slots-explained.svg" alt="ILS slot configuration diagram showing the difference between Supply, Demand, and Storage slot modes" class="schema-diagram" loading="lazy" width="800" height="400">

<h2 id="the-slot-mode-problem">The #1 Culprit: Slot Mode Mismatch</h2>

<p>The ILS has three slot states per item type: <strong>Supply</strong>, <strong>Demand</strong>, and <strong>Storage</strong>. These are NOT the same as the station-level "Local Supply / Local Demand / Remote Supply / Remote Demand" settings. They are per-slot behaviors that many players confuse.</p>

<p>Here is what each one actually does:</p>

<table>
<thead>
<tr><th>Slot Mode</th><th>Drones Can Take Items Out</th><th>Drones Can Bring Items In</th><th>Use Case</th></tr>
</thead>
<tbody>
<tr><td>Supply</td><td>✅ Yes</td><td>Yes (if remote demand is set)</td><td>Export extra ingots to other planets</td></tr>
<tr><td>Demand</td><td>❌ No</td><td>Yes</td><td>Import rare materials from other planets</td></tr>
<tr><td>Storage</td><td>❌ No</td><td>No</td><td>Dead inventory that goes nowhere</td></tr>
</tbody>
</table>

<h2 id="remote-vs-local-confusion">The Remote vs Local Settings Trap</h2>

<p>Even with the slot set to Supply, your drones may still refuse to move. The second most common mistake: confusing the <strong>Remote</strong> and <strong>Local</strong> settings.</p>

<p><img src="/images/ils-remote-local.svg" alt="ILS remote vs local station settings comparison showing where to configure interplanetary vs local logistics" class="schema-diagram" loading="lazy" width="800" height="350"></p>

<p>Here is the matrix of what drones actually check:</p>

<ul>
<li><strong>Local drones</strong> (yellow icon): check "Local Supply/Demand" settings only</li>
<li><strong>Remote drones</strong> (green icon): check "Remote Supply/Demand" settings only</li>
<li><strong>Slot mode</strong> must be set correctly for both types to work</li>
</ul>

<div class="callout callout-warning">
<strong>Debug checklist:</strong><br>
1. Slot mode = Supply?<br>
2. Local Supply checkbox ticked (for local drones to pick up)?<br>
3. Remote Supply checkbox ticked (for remote drones to pick up)?<br>
4. There is actually a drone in the station? (Drones are crafted separately)<br>
5. The destination ILS has Demand mode + Remote Demand ticked?
</div>

<h2 id="drone-assignment-bug">The Drone Station Assignment</h2>

<p>Another hidden issue: drones in DSP are assigned to a specific ILS station. If you placed a new ILS and didn't put new drones in it, the drones from your other station won't fly over to help. Each ILS needs its own fleet of drones assigned to it.</p>

<p>Check the drone count in the ILS panel. If it shows 0/10, you need to craft more logistics drones and insert them directly into this station's drone slot.</p>

<h2 id="practical-example">Practical Example: Cross-Planet Iron Supply</h2>

<ol>
<li>Mining planet: ILS set with iron ingots in Supply, Remote Supply ticked</li>
<li>Factory planet: ILS set with iron ingots in Demand, Remote Demand ticked</li>
<li>Both stations have at least 2 drones and 1 vessel assigned</li>
<li>Both stations have warpers (if cross-system)</li>
<li>Vessels will auto-transport from Supply planet to Demand planet</li>
</ol>

<p>This is the standard "two-ILS blueprint" that powers <em>every</em> interplanetary factory in late game. If you are building a distributed factory with multiple planets, our <a href="/factory-expansion-guide/">Factory Expansion Guide</a> covers planet specialization and ILS-based scaling strategies up to 300 SPM.</p>

<h2 id="power-check">One More Thing: Power Your ILS</h2>

<p>An ILS without power is an ILS that does nothing. Drones and vessels consume power per trip. If your ILS shows the power icon as red/orange, check if your grid has enough capacity. An ILS draws 1-3 MW depending on activity.</p>

<div class="cta-box">
<strong>Related guide:</strong> Once your ILS is working, the next logistics challenge is drone congestion. See: <a href="/ils-drone-congestion/">ILS Drone Congestion Guide →</a>
</div>

<h2 id="community-verification">Community Verification</h2>
<ul>
<li><a href="https://wiki.gg/dyson-sphere-program/Interstellar_Logistics_Station" target="_blank" rel="noopener noreferrer">DSP Wiki: Interstellar Logistics Station</a></li>
<li><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2847308345" target="_blank" rel="noopener noreferrer">Steam Guide: ILS setup best practices</a></li>
</ul>