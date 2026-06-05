---
title: "1 Artificial Sun Replaces 125 Wind Turbines - DSP Endgame Power Loop Guide"
description: "Complete guide to critical photon, antimatter, and artificial sun power. Set up the endgame energy loop in DSP without confusion."
date: "2026-06-04"
lastmod: '2026-06-05T21:29:49+08:00'
categories: [Endgame Production]
tags: [endgame, power, critical-photon, antimatter, fuel-rod]
---

<p>Critical photons and antimatter are the gateway to endgame power in DSP. The loop is confusing at first: photons come from the sphere, make antimatter, make fuel rods, power your planet. Here is exactly how the chain works, step by step.</p>

{{< diagram "antimatter-power-loop.svg" "Antimatter power self-sustaining loop" "680" >}}

## TL;DR: The Endgame Power Loop

<p>Ray Receivers capture Dyson Sphere power and output Critical Photons. Particle Colliders turn photons into Antimatter + Hydrogen. Assemblers combine Antimatter with other materials to make Deuterium Fuel Rods or Antimatter Fuel Rods. Artificial Suns burn these rods for massive power. The loop produces more power than it consumes - but only if designed correctly.</p>

<h2>Step 1: Capture Critical Photons</h2>
<p>Ray Receivers have two modes (press Tab to toggle): Direct Power mode and Photon Generation mode. For the endgame loop, set them to Photon Generation. Each receiver in this mode produces roughly 5-10 Critical Photons per minute, depending on sphere output.</p>
<p>You need about 20-40 receivers for a starter antimatter loop. Place them on the planet side facing the sphere. Use the receiver auto-orient feature (the green circle shows coverage).</p>
<p>Route the photon output to a Logistics Station. Critical Photons stack to 500 and can be transported via ILS. Build the particle collider setup on a different planet if needed.</p>

<h2>Step 2: Convert Photons to Antimatter</h2>
<p>Particle Colliders consume 1 Critical Photon + 2 Hydrogen to produce 2 Antimatter. Each collider runs at about 1 cycle every 2 seconds, producing roughly 60 Antimatter per minute.</p>
<p>The hydrogen input is critical: each collider needs a steady 60 hydrogen per minute. One Orbital Collector on a gas giant produces 15-30 hydrogen per second - enough to feed 15-30 colliders.</p>
<p>Route the Antimatter output to storage. Antimatter stacks to 500. Build buffer storage because collider output fluctuates with sphere power availability.</p>

<h2>Step 3: Make Fuel Rods</h2>
<p>Two types of fuel rods use antimatter. Build whichever your factory can support:</p>

<table>
<tr><td><strong>Fuel Rod</strong></td><td><strong>Inputs</strong></td><td><strong>Energy per Rod</strong></td><td><strong>Burn Time in Artificial Sun</strong></td></tr>
<tr><td>Deuterium Fuel Rod</td><td>Deuterium + Titanium Alloy + Super-Magnetic Ring</td><td>750 MJ</td><td>20 seconds</td></tr>
<tr><td>Antimatter Fuel Rod</td><td>Antimatter + Hydrogen + Titanium Alloy + Processor</td><td>7500 MJ</td><td>200 seconds</td></tr>
</table>

<p>Antimatter Fuel Rods store 10x the energy of Deuterium rods. This is your goal. Each assembler produces about 10 rods per minute. Ten assemblers running antimatter rods power an entire planet.</p>

<h2>Step 4: Burn in Artificial Suns</h2>
<p>Artificial Suns burn Antimatter Fuel Rods at 1 rod every 200 seconds, outputting 37.5 MW each. That is nearly 40 million watts from a single building.</p>
<p>Compare with other power sources:</p>
<ul>
<li>Wind Turbine: 0.3 MW each - need 125 for same output</li>
<li>Thermal Power Plant (coal): 2.1 MW - need 18</li>
<li>Fusion Power Plant: 9 MW - need 4</li>
<li>Artificial Sun (antimatter): 37.5 MW - 1 building</li>
</ul>
<p>One belt of Antimatter Fuel Rods (at 60 rods/min) feeds about 600 Artificial Suns. That is 22.5 GW of power from one belt. The endgame power solution is to build 10-20 Artificial Suns and never worry about power again.</p>

<h2>The Self-Sustaining Loop</h2>
<p>The critical photon to antimatter loop produces a hydrogen surplus. Here is how:</p>
<ul>
<li>1 Critical Photon + 2 Hydrogen - 2 Antimatter</li>
<li>Orbital Collectors on gas giants produce free hydrogen</li>
<li>Particle Colliders running on antimatter production also generate heat - this is free</li>
<li>The Artificial Sun burning antimatter rods generates 37.5 MW, more than enough to run the colliders processing the photons</li>
</ul>
<p>In practice, 10 Ray Receivers generating photons will power 3-4 Particle Colliders making antimatter, which feeds 1 Assembler making fuel rods. This loop is slightly power-positive even before accounting for the sphere output.</p>

<h2>Common Antimatter Loop Mistakes</h2>
<ul>
<li><strong>Hydrogen starvation:</strong> Colliders consume hydrogen faster than expected. Have 4-6 Orbital Collectors on a gas giant before scaling up.</li>
<li><strong>No buffer storage:</strong> Photon production fluctuates with sphere visibility. Store 2000-5000 photons and 2000-5000 antimatter before starting fuel rod production.</li>
<li><strong>Skipping deuterium:</strong> Antimatter Fuel Rods need titanium alloy (which needs titanium + coal + oil). Build this production line before the fuel rod assembler, not after.</li>
<li><strong>Too few receivers:</strong> Each receiver produces 5-10 photons per minute. You need at least 20 receivers for consistent fuel rod production.</li>
</ul>

<h2>Community Verification and Resources</h2>
<ul>
<li><a href="https://wiki.gg/dyson_sphere_program/Critical_Photon" target="_blank" rel="noopener noreferrer">DSP Wiki: Critical Photon</a></li>
<li><a href="https://wiki.gg/dyson_sphere_program/Antimatter_Fuel_Rod" target="_blank" rel="noopener noreferrer">DSP Wiki: Antimatter Fuel Rod</a></li>
</ul>
