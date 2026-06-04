---
title: "DSP Blueprint Guide (v0.10) - Copy and Paste Entire Factories in Seconds"
description: "Complete blueprint guide for DSP v0.10. How to copy, paste, mirror, and share factory blueprints. Save hours of rebuilding."
date: "2026-06-04"
lastmod: "2026-06-04T23:42:00+08:00"
publishDate: "2026-06-12T15:03:00+08:00"
hidden: true
categories: [Production & Automation]
tags: [blueprint, automation, production, v0.10]
---

<p>DSP v0.10 added a proper blueprint system. No more hand-placing every smelter. Here is everything you need to know about blueprints - from basic copy-paste to advanced mirroring and sharing.</p>

{{< diagram "blueprint-workflow.svg" "Blueprint copy mirror paste workflow" "600" >}}

## TL;DR: How Blueprints Work in DSP v0.10

<p>Press B to open the Blueprint Library. Select buildings (hold shift to multi-select), press CTRL+C to copy, then CTRL+V to paste. That is the basic flow. This guide covers the details that are not in the game.</p>

<h2>Basic Operations</h2>

<h3>Copying a Layout</h3>
<p>Select the Blueprint Tool from your toolbar (or press B, then click the Copy button). Click and drag a selection box around the buildings you want to copy. The game highlights all selected buildings in green. Press CTRL+C.</p>
<p>Your new blueprint appears in the Blueprint Library. Name it. The blueprint stores:</p>
<ul>
<li>Building types and positions</li>
<li>Conveyor belt paths and sorter connections</li>
<li>Assembler recipes (if set)</li>
<li>Logistics station slot configuration (if set)</li>
<li>Power pole and substation placement</li>
</ul>
<p>It does NOT store inserter filter settings, station vessel/drone counts, or power grid wiring. You must set these manually after pasting.</p>

<h3>Pasting a Blueprint</h3>
<p>Open the Blueprint Library (B), click your blueprint, and the ghost image follows your cursor. Press R to rotate. Move to the build location and click to confirm.</p>
<p>Buildings appear as ghosts. If you have the materials in your inventory, bots build them automatically. If not, bots wait for materials from logistics.</p>

<h2>Pro Blueprint Techniques</h2>

<h3>Mirror Mode</h3>
<p>Press V while holding a blueprint to toggle mirror mode. This flips the layout horizontally or vertically. Essential for building symmetrical smelting arrays or research lab setups. Mirror mode works both for copy and paste.</p>
<p>Pro tip: build one half of a symmetrical factory, copy it with mirror ON, and paste the mirrored copy next to the original. Perfectly symmetrical factory in two clicks.</p>

<h3>Smart Paste Alignment</h3>
<p>Hold SHIFT while positioning a blueprint to enable snap-to-grid mode. The blueprint snaps to the nearest foundation grid line. This ensures perfect spacing when building multiple copies side by side.</p>
<p>Combine snap-to-grid with conveyor belt alignment: belt the output of blueprint copy 1 into the input of copy 2. The factory scales without manual belt work between segments.</p>

<h2>Blueprint Sharing (Save Files)</h2>
<p>Blueprints save to your local machine. The Blueprint Library file is at:</p>
<p>Windows: %APPDATA%/Dyson Sphere Program/Blueprints/</p>
<p>Each blueprint is a single .txt file. You can:</p>
<ul>
<li>Share .txt files with other players (post on Reddit, Discord)</li>
<li>Import blueprints from other players (place .txt in the Blueprints folder)</li>
<li>Export your best layouts for community use</li>
</ul>
<p>To import, paste the bluepront .txt file into the Blueprints folder and restart DSP. The new blueprint appears in your library.</p>

<h2>Blueprint Recipes for Automation</h2>
<p>Here are three essential blueprints every DSP player should save:</p>

<table>
<tr><td><strong>Blueprint</strong></td><td><strong>Size</strong></td><td><strong>Use</strong></td></tr>
<tr><td>Smelting Column (12 furnices)</td><td>6x12 tiles</td><td>One belt iron ingots in, 120/min out</td></tr>
<tr><td>Research Lab Row (10 labs)</td><td>4x16 tiles</td><td>Matrix automation with belt feed</td></tr>
<tr><td>Oil Refinery Block (4 refineries)</td><td>8x12 tiles</td><td>Crude oil to refined oil + hydrogen</td></tr>
</table>

<p>Enable recipe in assemblers before copying to save recipe assignments in the blueprint. This saves time when pasting: assemblers come pre-configured.</p>

<h2>Common Blueprint Mistakes</h2>
<ul>
<li><strong>Missing belts:</strong> Make sure all belts are connected before copying. Disconnected belts do not save.</li>
<li><strong>Too large:</strong> Blueprints over 50 buildings become hard to place. Break them into 20-30 building chunks.</li>
<li><strong>Sorter conflicts:</strong> Sorters set to specific items might not match after paste. Check sorter filters after placement.</li>
</ul>

<h2>Community Verification and Resources</h2>
<ul>
<li><a href="https://wiki.gg/dyson_sphere_program/Blueprint" target="_blank" rel="noopener noreferrer">DSP Wiki: Blueprint</a></li>
<li><a href="https://www.reddit.com/r/Dyson_Sphere_Program/comments/?q=blueprint" target="_blank" rel="noopener noreferrer">Reddit DSP Blueprint Sharing</a></li>
</ul>
