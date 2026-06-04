---
title: "Build a Mall in 30 Minutes - Never Hand-Craft a Building Again (DSP Guide)"
description: "Build a mall in DSP - a factory that produces every building automatically. No more hand-crafting belts, sorters, and assemblers."
date: "2026-06-04"
lastmod: "2026-06-04T23:44:00+08:00"
publishDate: "2026-06-15T09:11:00+08:00"
hidden: true
categories: [Logistics & Transport]
tags: [mall, automation, production, logistics]
---

<p>Hand-crafting buildings is the #1 time waste in DSP. You spend 20 minutes crafting assemblers, belts, and sorters when you should be designing production lines.</p>
<p>Here is how to build a mall - a factory that produces every building automatically, so you never craft by hand again.</p>

## TL;DR: The Mall Concept

<p>A mall is a production line where raw materials go in one end and every building type comes out the other. Each building type (belts, sorters, assemblers, furnaces, etc.) has one dedicated assembler with its own storage box. You walk by and grab a full stack of whatever you need.</p>

<h2>The Essential Mall (Phase 1)</h2>
<p>Start small. These 6 assemblers cover 80 percent of your building needs:</p>

<table>
<tr><td><strong>Building</strong></td><td><strong>Inputs</strong></td><td><strong>Storage</strong></td></tr>
<tr><td>Conveyor Belt Mk.I</td><td>1 iron ingot per 2 belts</td><td>1 box (storage: 7200 belts)</td></tr>
<tr><td>Sorter Mk.I</td><td>1 iron ingot + 1 magnetic coil per 3 sorters</td><td>1 box</td></tr>
<tr><td>Assembling Machine Mk.I</td><td>4 gears + 4 circuits + 2 iron plates</td><td>1 box (stack: 20)</td></tr>
<tr><td>Smelting Furnace</td><td>6 stone bricks + 4 magnetic coils</td><td>1 box (stack: 20)</td></tr>
<tr><td>Mining Machine</td><td>6 gears + 4 circuits + 4 iron plates</td><td>1 box (stack: 20)</td></tr>
<tr><td>Wind Turbine</td><td>6 coils + 4 circuits</td><td>1 box (stack: 20)</td></tr>
</table>

<p>Place these 6 assemblers in a row. Run a belt of iron ingots, a belt of gears, a belt of circuits, and a belt of magnetic coils past all of them. Each assembler pulls what it needs. Each feeds into its own storage box.</p>

<h2>Expanded Mall (Phase 2)</h2>
<p>Once phase 1 is running, add these 6 more assemblers:</p>

<table>
<tr><td><strong>Building</strong></td><td><strong>Inputs</strong></td><td><strong>Storage</strong></td></tr>
<tr><td>Conveyor Belt Mk.II</td><td>Mk.I belt + 1 titanium per 2 belts</td><td>1 box</td></tr>
<tr><td>Sorter Mk.II</td><td>Mk.I sorter + 1 processor</td><td>1 box</td></tr>
<tr><td>Storage Box Mk.I</td><td>6 iron plates</td><td>1 box</td></tr>
<tr><td>Tesla Tower</td><td>4 wires + 4 magnetic coils + 2 iron plates</td><td>1 box</td></tr>
<tr><td>Conveyor Splitter</td><td>5 gears + 5 circuits</td><td>1 box</td></tr>
<tr><td>Matrix Lab</td><td>8 circuits + 6 gears + 4 magnetic coils</td><td>1 box</td></tr>
</table>

<p>Run the additional belts (titanium, processors) alongside the existing bus. The bus now has 6 lanes: iron, copper, gears, circuits, coils, and titanium.</p>

<h2>Advanced Mall Design (Phase 3)</h2>
<p>By the time you hit mid-game, logistics stations replace belt buses. Build a small logistics station that requests all your mall ingredients. Place your mall assemblers around it. This is the endgame mall layout:</p>

<ul>
<li>1x Interstellar Logistics Station (requests: iron, copper, titanium, silicon, stone, coal, oil)</li>
<li>1x Planetary Logistics Station (requests: gears, circuits, coils, processors, titanium alloy)</li>
<li>12-20 assemblers around the stations, each pulling from drones</li>
<li>Each assembler feeds a storage box, and a drone from the station pulls the finished products back into supply</li>
</ul>
<p>This self-supplying mall requires only raw material input. It produces every building in the game automatically.</p>

<h2>Mall Layout Tips</h2>
<ul>
<li><strong>Belt bus width:</strong> Start with 4 belts side by side. Use 6 for phase 2. Expand to 8 for phase 3.</li>
<li><strong>Sorter pull direction:</strong> Keep all assemblers on one side of the belt bus. Sorters pull from the bus. Output belts run the opposite direction.</li>
<li><strong>Stack limiters:</strong> Set storage box stack limiters to 1 stack for low-volume items (assemblers, furnaces) and 2-3 stacks for high-volume items (belts, sorters).</li>
<li><strong>Proliferator:</strong> Once you have Mk.II proliferator, add it to the mall input. All buildings are produced with fewer materials.</li>
</ul>

<h2>What NOT to Include in Your Mall</h2>
<ul>
<li><strong>Foundation:</strong> Terrain tool, not a building. No point automating it.</li>
<li><strong>Combat buildings (if playing with mods):</strong> These are situational and expensive.</li>
<li><strong>Research items:</strong> Matrices are produced in dedicated labs, not the mall.</li>
</ul>

<h2>Community Verification and Resources</h2>
<ul>
<li><a href="https://www.reddit.com/r/Dyson_Sphere_Program/search/?q=mall+guide" target="_blank" rel="noopener noreferrer">Reddit DSP Mall Builds</a></li>
<li><a href="https://wiki.gg/dyson_sphere_program/Assembling_Machine" target="_blank" rel="noopener noreferrer">DSP Wiki: Assembling Machine</a></li>
</ul>
