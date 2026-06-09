---
title: "DSP Vein Utilization Guide (v0.10) - Optimal Miner Placement and Proliferation for Maximum Output"
description: "Master mining optimization in Dyson Sphere Program. Complete guide to mining machine placement, vein coverage patterns, proliferator application, and vein utilization upgrade priorities. Extract more ore per vein with fewer miners."
date: 2026-06-09
publishDate: 2026-06-14T08:55:00+08:00
lastmod: 2026-06-09T22:29:00+08:00
hidden: true
type: post
tags: [mining, vein-utilization, proliferation, miner, optimization, early-game, mid-game]
categories: [Resources & Mining]
slug: vein-utilization-mining-guide
---

{{< callout "info" >}}
**Short answer:** Each Mining Machine covers a 3x3 grid of ore tiles. Place them edge-to-edge over the densest part of the vein. One Mk.III proliferator sprayed on the ore output increases effective output by 25% at the cost of proliferator materials. The Vein Utilization research (up to level 10) doubles your effective ore per node.
{{< /callout >}}

Ore veins are finite. Every iron ore, copper ore, and coal vein on your starting planet will eventually deplete. Mining optimization determines whether you run out of resources in 20 hours or 200 hours. This guide covers every mining optimization technique.

## Mining Machine Coverage

{{< section "Placement Pattern" >}}

Each mining machine covers a 3x3 tile area, extracting ore from all 9 tiles simultaneously. The key insight is overlapping coverage:

| Placement | Coverage | Ore Veins Used | Output | Efficiency |
|-----------|----------|---------------|--------|------------|
| Scattered random | 50-70% | Partial | ~20/min | 60% |
| Edge-to-edge grid | 90-95% | Full vein | ~30/min | 90% |
| Dense center cluster | 95-100% | Full vein | ~36/min | 95% |

{{< material "mining-machine" >}} {{< material "belt" >}}

Build mining machines in a grid pattern starting from the densest cluster of ore tiles. Place them edge-to-edge so no tile is left un-mined. A single 12-tile-wide iron vein supports 4 mining machines in a 2x2 grid.

{{< insight >}}
**Depth rule:** Mining machines placed directly on top of the ore patch mine faster than machines placed on the edge. The center tiles of a large vein get priority mining. If your vein is irregularly shaped, cluster miners on the thickest part.
{{< /insight >}}

## The Vein Utilization Tech Tree

Vein Utilization is the single most important infinite research in DSP. Each level reduces ore consumption by 10%, effectively increasing your ore supply by 11% per level.

| Level | Ore Consumption Reduction | Effective Ore Multiplier | Cost (Previous Level x) |
|-------|-------------------------|------------------------|------------------------|
| 1 | 10% | 1.11x | 1x |
| 5 | 50% | 2.0x | 480x |
| 10 | 100% | infinite (free mining) | 196,830x |
| 15 | 150% | 2.5x reduction per craft | 47Mx |

{{< callout "tip" >}}
**Research priority:** Rush Vein Utilization to level 4 before you exhaust your starting iron vein. Each level costs progressively more science, but the savings compound. At level 4, your starting iron vein lasts 66% longer. At level 6, it lasts 150% longer.
{{< /callout >}}

## Proliferation for Mining

Applying Mk.II or Mk.III Proliferator to mining outputs is surprisingly effective:

| Proliferator | Extra Output | Cost to Spray | Net Gain |
|-------------|-------------|---------------|----------|
| Mk.I | +12.5% | 1 Coal per 12 ore | Small gain |
| Mk.II | +20% | 1 Diamond per 10 ore | Medium gain |
| Mk.III | +25% | 1 Carbon Nanotube per 8 ore | Good gain (late game) |

For early game, skip proliferator on mining. The coal and diamond costs outweigh the gains. For late game (post-green science), Mk.III proliferator on high-volume ores (iron, copper, titanium) is worthwhile.

{{< section "When to Proliferate Mining" >}}

| Ore Type | Early Game | Mid Game | Late Game |
|----------|-----------|---------|-----------|
| Iron Ore | No | No | Yes (Mk.III) |
| Copper Ore | No | No | Yes (Mk.III) |
| Coal | No | No | No |
| Titanium Ore | No | Maybe (Mk.II) | Yes (Mk.III) |
| Silicon Ore | No | Maybe (Mk.II) | Yes (Mk.III) |
| Rare Minerals | N/A | Yes (Mk.II) | Yes (Mk.III) |

## Off-World Mining Setup

When your home planet veins run low, expand to off-world outposts:

{{< stepgroup >}}
{{< step "Scout planets" >}}Scan nearby systems for high-concentration ore planets{{< /step >}}
{{< step "Drop miners" >}}Grid-place 20-30 mining machines covering the best patches{{< /step >}}
{{< step "Power up" >}}Build 10-15 wind turbines + 4-6 thermal generators for off-grid power{{< /step >}}
{{< step "ILS export" >}}Place an ILS set to Supply with 3-4 vessels and Warpers{{< /step >}}
{{< step "Home import" >}}Set matching ILS on home planet to Demand{{< /step >}}
{{< /stepgroup >}}

{{< callout "warning" >}}
**Outpost trap:** Do not over-build miners on off-world outposts. Export capacity is limited by ILS vessel throughput. 20 miners on a single ILS is usually enough. More miners without more ILS towers just clog the belts.
{{< /callover >}}

## Mining Priority for Starting Planet

Set mining priority based on depletion speed:

| Ore | Starting Amount (Typical) | Hours at 60 SPM | Strategy |
|-----|--------------------------|-----------------|----------|
| Iron Ore | 2-3M | ~40h | Build iron off-world outpost at hour 15 |
| Copper Ore | 1-2M | ~30h | Build copper off-world at hour 10 |
| Coal | 1-2M | ~50h | Switch to Energetic Graphite from Oil by hour 20 |
| Stone | 500K-1M | ~60h | Negligible consumption, skip off-world |
| Oil Seeps | 2-4/s | Infinite | Oil never depletes, just slows |

Pair mining optimization with our [DSP Smelting Array Blueprint Guide](/smelting-array-blueprint-guide/) for a complete raw-to-ingot pipeline.

{{< resourcegrid >}}
{{< resourcecard name="DSP Wiki - Mining" url="https://dsp-wiki.com/Mining_Machine" desc="Mining machine mechanics and coverage" >}}
{{< resourcecard name="Steam Guide - Resource Management" url="https://steamcommunity.com/sharedfiles/filedetails/?id=2373611284" desc="Community mining optimization guides" >}}
{{< /resourcegrid >}}
