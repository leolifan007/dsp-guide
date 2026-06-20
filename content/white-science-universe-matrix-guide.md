---
title: "DSP White Science Guide (v0.10) - Feed All 6 Matrices Into One Lab Stack for 1000/min"
date: 2026-06-20T13:12:00+08:00
draft: false
version: "v0.10"
category: "Science & Production"
hidden: false
slug: "white-science-universe-matrix-guide"
lastmod: 2026-06-20T13:12:00+08:00
---



{{< diagram "diagrams/white-science-universe-matrix-guide.svg" "White science lab stack configuration with ILS hub feeding all 6 matrices" "780" >}}
Color matrix production rates for a balanced 1000 white/min factory:
- **Blue Matrix**: 1000/min - 1.0 Chemical Plant per refinery, simple oil math
- **Red Matrix**: 1000/min - 1.7 Fuel Refinery Mk.II with proliferator
- **Yellow Matrix**: 1000/min - Processors and belts, watch the diamond demand
- **Purple Matrix**: 1000/min - Largest footprint, 4+ full smelter columns
- **Green Matrix**: 1000/min - Hydrogen bottleneck, need 3+ orbital collectors
- **Antimatter**: 600/min - 80+ Ray Receivers on a max-power Dyson Sphere

Reaching White Science means every previous bottleneck needs to be solved at once. Universe Matrix (white) consumes 1 of each colored matrix plus 1 Antimatter per craft. If any single color backs up, white science stalls. If the Antimatter supply drops, white science stalls. The entire factory must be balanced.

Here is the core layout: one stack of Matrix Labs producing white cubes, fed by an ILS requesting all six matrices plus antimatter. A second stack of Matrix Labs directly above that consumes white cubes for research. The two stacks are connected vertically via the lab's own input/output pass-through.

DSP White Science Lab Stack Configuration (SVG): Bottom Stack Produces White, Top Stack Consumes White, ILS in the Middle Feeds Everything.

## The 6-to-1 Ratio Problem

White Science does not need a 1:1 ratio of each color. It needs exactly 1 of each color per craft, meaning the consumption rate per color is identical. If your factory produces 60 Blue per minute and 60 Purple per minute, white science runs at 60 per minute.

The practical trap: players build disproportionate color production. Blue science is easy to overproduce. Purple science is hard. Green science is the hardest, especially the Casimir Crystal production chain. The [Green Science Deep Dive Guide](/green-science-deep-dive-guide/) covers the hydrogen management needed to keep green production running without backups. When white science starts, the bottleneck color dictates the entire white production rate.

To sustain 1000 White per minute, you need 1000 per minute of every color -- Blue, Red, Yellow, Purple, Green, Energy, plus 1000 Antimatter per minute. Each of these needs its own dedicated production chain running at full capacity. The [Energy Matrix Guide](/energy-matrix-production-guide/) and [Purple Science Guide](/purple-science-production-guide/) have the exact ratios for their respective colors.

DSP White Science Full Chain Diagram (SVG): All 6 Matrices Feed Into One ILS, Plus Antimatter from Ray Receivers, White Labs Output to Research Labs.

## Matrix Lab Stacking: Input and Output Directions

Matrix Labs have a directional input/output system. Each lab accepts items from the back and bottom, and outputs to the front and top. When stacked vertically, the bottom lab's output feeds the next lab above it.

For white science, place the producing labs on the bottom row. Route their output upward into a second row of labs set to research mode (the option that consumes matrices for hash computation). The top row of labs outputs their science to nothing -- the hash is consumed automatically.

The ILS that supplies the matrices should sit next to the lab stack, with belts feeding into the bottom lab's input ports. If the distance is more than a few tiles, use sorters directly from the belt into the lab.

## Antimatter: The Hidden Gatekeeper

White Science consumes 1 Antimatter per craft. Antimatter is produced by Ray Receivers collecting Critical Photons from a Dyson Sphere, then converted via Particle Collider. Without a stable Dyson Sphere power supply, antimatter production is unreliable. The [Antimatter Power Guide](/dsp-antimatter-power-guide/) covers the full photon-to-antimatter conversion chain with the correct Ray Receiver to Particle Collider ratio.

Do not start white science production until you have at least 10 Ray Receivers actively collecting photons and feeding a Particle Collider. The ratio is roughly 1 Collider per 10-12 Receivers, depending on your receiver uptime.

Antimatter is also needed for Antimatter Fuel Rods. If your power grid depends on Artificial Suns burning Antimatter Fuel Rods, those two demands (white science vs power) will compete for the same antimatter. Build dedicated receivers for white science to avoid a power cascade failure.

## Lab Stack Sizing for 1000/min

Each Matrix Lab produces 5 white science per minute with full proliferator bonus. To reach 1000/min, you need 200 producing labs in the bottom stack. A 10x10 grid fits two rows of 5 across and 10 deep.

Each research-mode lab consumes white science at the same rate. The top stack needs an equal number of labs. Total: 400 labs, 200 producing and 200 researching.

If that sounds like a lot, it is. White science at this scale is an endgame build that assumes you have already automated the entire production chain for each individual color and can dedicate a full planet to science alone.

## Proliferating White Science

White Science benefits from proliferator at two stages:

1. **Proliferate the input hydrogen, coal, and oil** before they enter each individual color's production chain.
2. **Spray Mk.III proliferator on the white science output** for the 2x research speed bonus.

The stacking multiplier is signficant: with production proliferation on the component recipes and speed proliferation on the final product, your 1000 labs effectively research at 2000+ per minute.

This means you can research Vein Utilization upgrades that cost 400,000 hashes in a fraction of the time. The payoff is massive: higher mining yield means less mining infrastructure, which means more UPS for larger factories.

## Transitioning from Colored Sciences

Before white science, you likely had independent belts feeding each color into a research lab stack. When you unlock white science, the approach changes: all colors now route to the white production labs instead.

The most common mistake is leaving the old research lab configuration running alongside the new white labs. This consumes matrices that could otherwise feed white production, reducing white output. Remove the old research labs entirely or repurpose them for white production. The [Research Lab Guide](/research-lab-automation-guide/) has the correct input/output direction setup for Matrix Lab stacks.
