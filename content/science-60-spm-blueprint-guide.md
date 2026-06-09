---
title: "DSP 60 Science Per Minute Blueprint (v0.10) - Full Production Ratios From Raw Materials to All Science"
description: "Complete 60 science per minute (60 SPM) factory plan for Dyson Sphere Program. Exact ratios for every science pack from Blue to White, with raw material requirements, building counts, and belt throughput calculations."
date: 2026-06-09
publishDate: 2026-06-12T09:07:00+08:00
lastmod: 2026-06-09T22:17:00+08:00
hidden: true
type: post
tags: [science, ratios, 60-spm, blueprint, production, optimization, endgame]
categories: [Science & Research]
slug: science-60-spm-blueprint-guide
---

{{< callout "info" >}}
**Short answer:** 60 SPM (all six science types) requires: 120 Iron Ore/min, 60 Copper Ore/min, 30 Coal/min, 30 Crude Oil/min, plus off-world Titanium and Silicon. {{< material "iron-ore" >}} {{< material "copper-ore" >}} Total about 30 assemblers, 40 smelters, and 15 chemical plants. The single most important ratio is 3 Blue : 3 Red : 6 Yellow : 8 Purple : 12 Green : 15 White assemblers.
{{< /callout >}}

Science production is measured in science per minute (SPM). 60 SPM is the standard mid-game target - achievable on a single planet, enough to research most technologies at a reasonable pace. This guide covers every production chain from raw materials to completed science matrices.

## Raw Material Requirements

To produce 60 of each science type per minute, you need these raw inputs:

| Raw Material | Amount/Min | Source |
|-------------|-----------|--------|
| Iron Ore | 120 | 20 miners on normal veins |
| Copper Ore | 60 | 10 miners |
| Coal | 30 | 5 miners |
| Crude Oil | 30 | 3 oil seeps |
| Stone | 25 | 4 miners |
| Titanium Ore | 40 | Off-world outpost |
| Silicon Ore | 30 | Off-world outpost |
| Water | 150 | 3 water pumps |

{{< insight >}}
**Rule of thumb:** Each miner on a normal 1M+ vein produces ~6 ore per minute. Always over-build miners by 20% to account for vein depletion over time.
{{< /insight >}}

## Building Counts by Science Type

{{< section "Blue Science (Electromagnetic Matrix)" >}}

| Building | Count | Makes |
|----------|-------|-------|
| Smelter (Magnetic Coil) | 3 | Coils from Copper + Iron |
| Smelter (Circuit Board) | 3 | Boards from Copper + Silicon |
| Assembler Mk.II | 3 | Blue Science |

Requirement: 60 Iron Ore + 30 Copper Ore + 30 Silicon Ore per minute.

{{< section "Red Science (Energy Matrix)" >}}

| Building | Count | Makes |
|----------|-------|-------|
| Refinery | 3 | Energetic Graphite from Coal |
| Assembler Mk.II | 3 | Red Science from Graphite |

Red science is the simplest tier. Three refineries turning coal into Energetic Graphite feed three assemblers. No multi-stage chains needed.

{{< section "Yellow Science (Information Matrix)" >}}

| Building | Count | Makes |
|----------|-------|-------|
| Refinery | 4 | Refined Oil + Hydrogen |
| Chemical Plant | 3 | Plastic from Refined Oil |
| Smelter | 2 | Energetic Graphite |
| Assembler Mk.II | 6 | Yellow Science (Processor + Board + Plastic) |

Yellow science introduces the processor chain. The bottleneck is always refined oil throughput. Build extra oil refineries and crack excess Hydrogen into Energetic Graphite.

{{< section "Purple Science (Structure Matrix)" >}}

| Building | Count | Makes |
|----------|-------|-------|
| Smelter (Steel) | 6 | Steel from Iron Ore (3:1) |
| Smelter (Titanium) | 4 | Titanium Ingots |
| Chemical Plant | 2 | Sulfuric Acid |
| Assembler Mk.II | 8 | Frame Material + Diamond + Titanium Glass |
| Assembler Mk.II | 8 | Purple Science |

The purple science jump is the hardest. The secondary resource chains (Sulfuric Acid, Titanium Glass) are where most players get stuck. Build these first, then chain everything into the matrix assemblers.

{{< section "Green Science (Gravity Matrix)" >}}

| Building | Count | Makes |
|----------|-------|-------|
| Chemical Plant | 4 | Casimir Crystal precursors |
| Assembler Mk.III | 6 | Casimir Crystals |
| Assembler Mk.III | 6 | Quantum Chips |
| Assembler Mk.II | 4 | Graviton Lenses |
| Assembler Mk.III | 6 | Green Science |

Green science is the hydrogen test. Build orbital collectors on at least 2 gas giants before attempting 60 SPM green science. Hydrogen shortage is the #1 bottleneck.

{{< section "White Science (Universe Matrix)" >}}

| Building | Count | Makes |
|----------|-------|-------|
| Particle Collider | 2 | Antimatter from Critical Photons |
| Assembler Mk.III | 15 | White Science (all 6 types combined) |

White science consumes all six colored matrices equally. 60 SPM white science needs 10 of each color per minute, which aligns with ~60 SPM production of each type. The antimatter loop is the only new production chain at this tier.

## Belt Throughput Planning

A common failure is underestimating belt throughput:

| Belt Type | Throughput (Items/Min) |
|-----------|----------------------|
| Mk.I | 360 |
| Mk.II | 720 |
| Mk.III | 1080 |

At 60 SPM, iron ore demand is 120/min - easily handled by a single Mk.I belt. But as you scale to 120+ SPM, upgrade to Mk.II or Mk.III belts on the main bus. The iron ore belt will be the first to saturate.

{{< callout "tip" >}}
**Scaling tip:** Build your 60 SPM factory with expansion in mind. Leave space between modules for additional assemblers. Use Mk.II belts even where Mk.I would work. The upgrade cost is minimal, and the capacity headroom saves hours of belt replacement later.
{{< /callout >}}

{{< stepgroup >}}
{{< step "Raw materials" >}}Set up iron, copper, coal, stone, and oil mining on your home planet{{< /step >}}
{{< step "Blue + Red" >}}Build the first two science tiers (3 assemblers each){{< /step >}}
{{< step "Yellow science" >}}Add oil processing and plastic production for processors{{< /step >}}
{{< step "Purple science" >}}Ship titanium from off-world, build steel and acid production{{< /step >}}
{{< step "Green science" >}}Deploy orbital collectors, build Casimir Crystal chain{{< /step >}}
{{< step "White science" >}}Build Dyson Sphere, set up critical photon collection, combine all 6{{< /step >}}
{{< /stepgroup >}}

Need a blueprint for individual science modules? See our [DSP Blueprint Guide](/dsp-blueprint-guide/) for copy-paste factory designs.

{{< resourcegrid >}}
{{< resourcecard name="DSP Calculator" url="https://www.dsp-calc.com/" desc="Online production ratio calculator for Dyson Sphere Program" >}}
{{< resourcecard name="DSP Wiki - Production" url="https://dsp-wiki.com/" desc="Official wiki with all recipe data" >}}
{{< /resourcegrid >}}
