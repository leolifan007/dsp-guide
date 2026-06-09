---
title: "DSP Late-Game Factory Expansion Guide (v0.10) - Scale From 30 to 300 Science Per Minute"
description: "Scale your Dyson Sphere Program factory from mid-game to endgame. Complete guide to transitioning from a single-planet base to a multi-planet production empire, with blueprint strategies, bus design, and logistics optimization for 300 SPM."
date: 2026-06-09
publishDate: 2026-06-14T14:18:00+08:00
lastmod: 2026-06-09T22:32:00+08:00
hidden: true
type: post
tags: [expansion, scaling, late-game, blueprint, factory, production, optimization]
categories: [Production & Automation]
slug: factory-expansion-guide
---

{{< callout "info" >}}
**Short answer:** Do not build everything on one planet. Designate each planet for one purpose: smelting, component production, or science. Run Mk.III belts between clustered assembler groups. Use ILS for cross-planet transport of intermediate products. The bottleneck is always either Iron Ore throughput or Hydrogen supply - build 3x more of both than you think you need.
{{< /callover >}}

Scaling from 30 SPM to 300 SPM is not about building bigger factories. It is about building different factories. The single-planet approach breaks down around 60 SPM. Beyond that, you need a distributed multi-planet production network.

## The Multi-Planet Architecture

{{< section "Planet Specialization" >}}

Assign each planet a single production role:

| Planet Role | Built On | Ships Out | Ships In |
|------------|----------|-----------|----------|
| Smelting World | High-ore planet | Iron, Copper, Steel, Titanium Ingots | Nothing (mine locally) |
| Component World | Any temperate planet | Processors, Circuit Boards, Magnetic Coils | Ingots from Smelting World |
| Science World | High-wind planet | Science Matrices | Components from Component World |
| Power World | Inside Dyson Sphere | Antimatter Fuel Rods | Nothing (local production) |
| Mining Outpost | Ore-rich planet | Raw ores | Warpers only |

{{< insight >}}
**Rule of thumb:** If a planet needs more than 3 different imports, you are over-complicating it. Each planet should import 1-2 raw materials, process them, and export 1-2 finished products. This keeps logistics simple and vessel routes predictable.
{{< /insight >}}

## Scaling Production Modules

Build production in identical, repeatable modules. Each module should produce exactly the amount needed for 30 SPM of one science type:

| Module | Input Belt | Output Belt | Buildings | Area |
|--------|-----------|-------------|-----------|------|
| 30 SPM Blue | 1 Mk.I Iron + 1 Mk.I Copper + 1 Mk.I Silicon | 1 Mk.I Blue Science | 6 smelters + 3 assemblers | ~20 tiles |
| 30 SPM Red | 1 Mk.I Coal | 1 Mk.I Red Science | 3 refineries + 3 assemblers | ~15 tiles |
| 30 SPM Yellow | 1 Mk.II Oil + 1 Mk.I Iron | 1 Mk.I Yellow Science | 4 refineries + 6 assemblers | ~30 tiles |
| 30 SPM Purple | 1 Mk.II Titanium + 1 Mk.II Steel | 1 Mk.I Purple Science | 8 assemblers + 4 chem plants | ~40 tiles |
| 30 SPM Green | 2 Mk.II H2 + 1 Mk.II Graphene | 1 Mk.I Green Science | 12 assemblers + 6 colliders | ~50 tiles |

{{< material "mkii-belt" >}} {{< material "assembler-mkiii" >}}

Build each module 10 times for 300 SPM. Place them side by side in a row, fed by a main bus of raw materials.

## The Main Bus Design for 300 SPM

A main bus carries bulk raw materials past all production modules:

| Bus Lane | Material | Belt Type | Items/min |
|----------|----------|-----------|-----------|
| Lane 1 | Iron Ore | Mk.III (1080/min) | 720 |
| Lane 2 | Copper Ore | Mk.III | 360 |
| Lane 3 | Coal | Mk.III | 180 |
| Lane 4 | Energetic Graphite | Mk.III | 360 |
| Lane 5 | Silicon Ore | Mk.III | 180 |
| Lane 6 | Titanium Ore | Mk.III | 240 |
| Lane 7 | Steel | Mk.III | 360 |
| Lane 8 | Refined Oil | Mk.III | 240 |

Build the bus 2 tiles wide between lanes for power poles and sorters. Leave 10 tiles on each side for assembler clusters. The bus should run east-west across the planet's equator.

{{< callout "tip" >}}
**Bus bottleneck warning:** At 300 SPM, the iron ore bus lane needs 720 items/min. A single Mk.III belt carries 1080/min - enough margin. But if you add more modules later, upgrade to a 2-belt iron lane. Smarter is to build a second smelting planet and pipe iron from both sides.
{{< /callover >}}

## Blueprint Library for Rapid Expansion

Build a library of reusable blueprints:

| Blueprint | Buildings | Connectors | Purpose |
|-----------|-----------|-----------|---------|
| 4x Smelter Array | 4 smelters | 1 input belt, 1 output belt | Ore smelting |
| 4x Assembler Block | 4 assemblers | 2 input belts, 1 output belt | Component assembly |
| 2x Chemical Plant Block | 2 chem plants | 2 input belts, 1 output belt | Chemical processing |
| ILS In/Out Hub | 1 ILS + 5 belts | 1 input tower, 1 output tower | Logistics hub |
| Power Substation | 4 fusion plants + 16 batteries | Power pole connections | Stable power supply |

Each blueprint should snap to a grid. Place them side by side to build a factory in minutes instead of hours.

## Common Scaling Pitfalls

{{< section "The Hydrogen Wall" >}}

At 150+ SPM, Hydrogen consumption exceeds 1000/min. No single gas giant supplies this. You need:
- 40+ orbital collectors across 3 gas giants
- A fleet of 20+ Logistics Vessels dedicated to Hydrogen transport
- Thermal power plants burning excess Hydrogen as buffer

{{< section "The Mineral Depletion Cliff" >}}

At 200+ SPM, your starting planet veins deplete fast:
- Iron ore: ~8 hours per million units at 200 SPM
- Copper ore: ~10 hours per million units
- Titanium ore: ~15 hours per million units

Build off-world mining outposts on 3+ planets before hitting the depletion cliff. Use Vein Utilization research aggressively - aim for level 6 before scaling past 100 SPM.

## Summary: Scaling Roadmap

| SPM Target | Planets Needed | Total Miners | Total ILS | Power Required |
|-----------|---------------|-------------|-----------|---------------|
| 30 SPM | 1 (starting planet) | 60 | 4 | 10 MW |
| 60 SPM | 2 (home + 1 outpost) | 120 | 10 | 30 MW |
| 120 SPM | 3 (home + 2 outposts) | 240 | 20 | 80 MW |
| 300 SPM | 5+ (distributed) | 600 | 50 | 250 MW |

{{< stepgroup >}}
{{< step "Build modules" >}}Create reusable 30 SPM blueprints for each science tier{{< /step >}}
{{< step "Distribute planets" >}}Assign roles: smelting, components, science, power{{< /step >}}
{{< step "Scale bus" >}}Upgrade main bus to Mk.III belts before adding more modules{{< /step >}}
{{< step "Expand mining" >}}Build 3+ off-world outposts before your home planet depletes{{< /step >}}
{{< step "Monitor hydrogen" >}}Watch hydrogen supply - it is always the first bottleneck to hit{{< /step >}}
{{< /stepgroup >}}

Before scaling, make sure your [DSP Research Lab Guide](/research-lab-automation-guide/) covers your science foundation.

{{< resourcegrid >}}
{{< resourcecard name="DSP Calculator" url="https://www.dsp-calc.com/" desc="Online calculator for production ratios" >}}
{{< resourcecard name="DSP Wiki - Production" url="https://dsp-wiki.com/" desc="Complete production chain data" >}}
{{< /resourcegrid >}}
