---
title: "DSP Purple Science Guide (v0.10) - Build a Complete Structure Matrix Production Line"
description: "Complete Structure Matrix (purple science) production guide for Dyson Sphere Program. Full chain from raw materials to automated purple science, with exact ratios, factory layout, and scaling strategies."
date: 2026-06-09
publishDate: 2026-06-10T14:37:00+08:00
lastmod: 2026-06-09T22:08:00+08:00
hidden: true
type: post
tags: [purple-science, structure-matrix, mid-game, titanium, deuterium, frame-material]
categories: [Science & Research]
slug: purple-science-production-guide
---

{{< callout "info" >}}
**Short answer:** Purple Science (Structure Matrix) needs Frame Material + Diamond + Titanium Glass. The bottleneck is always Titanium Crystal and Deuterium. Build dedicated production for these two first, then chain Frame Material + Diamond + Glass into the matrix assemblers.
{{< /callout >}}

Purple Science is the fourth science tier in DSP, unlocking Mk.III assemblers, Plane Smelters, advanced logistics, and endgame buildings. The jump from Yellow to Purple is the biggest difficulty spike in the research tree because it introduces three new production chains simultaneously.

This guide walks through each sub-chain, then assembles everything into a complete factory.

## The Three Sub-Chains

Purple Science requires three intermediate products. Each has its own production chain.

{{< section "Sub-Chain 1: Frame Material" >}}

Frame Material is the steel-hungry component. Each unit needs:

| Input | Quantity | Source |
|-------|----------|--------|
| Titanium Ingot | 2 | Smelt titanium ore |
| Steel | 3 | Smelt iron ore into Steel (3:1 ratio) |

You need 2 Titanium Ingots and 3 Steel per Frame Material. The steel requirement is deceptively high - for every 60 Purple Science per minute, you need 180 Steel per minute, which means 540 Iron Ore per minute just for the steel.

{{< insight >}}
**Common mistake:** Do not hand-feed titanium to Frame Material assemblers. Set up an Interstellar Logistics Station requesting Titanium Ingots from your off-world mining outpost. The throughput matters more than the distance.
{{< /insight >}}

{{< section "Sub-Chain 2: Diamond" >}}

Diamonds come from one of two routes:

| Route | Input | Output | Pros | Cons |
|-------|-------|--------|------|------|
| Organic Crystal | 2 Organic Crystal | 1 Diamond | Faster, less energy | Requires oil processing |
| Graphite (synthetic) | 2 Energetic Graphite | 1 Diamond | Simpler setup | Slower, needs more smelters |

The Organic Crystal route is more efficient. Set up a dedicated oil refining line to produce Organic Crystal, then feed it into cheap Diamond assemblers.

{{< material "organic-crystal" >}} {{< material "energetic-graphite" >}}

{{< section "Sub-Chain 3: Titanium Glass" >}}

Titanium Glass is the gatekeeper. It needs two production steps:

**Step 1:** Titanium Crystal = 2 Titanium Ingot + 1 Energetic Graphite + 1 Sulfuric Acid
**Step 2:** Titanium Glass = 2 Titanium Crystal + 1 Glass

The Sulfuric Acid requirement means you need either a Sulfuric Acid ocean planet (rare) or a chemical plant making it from refined oil processing. Most players under-estimate this chain.

| Production Step | Buildings Needed (60 SPM) | Raw Inputs |
|-----------------|--------------------------|------------|
| Titanium Crystal | 8 Assemblers Mk.II | 120 Titanium Ore + 60 Graphite + 60 Sulfuric Acid |
| Titanium Glass | 8 Assemblers Mk.II | 16 Titanium Crystal + 8 Glass |
| Diamond (organic) | 4 Assemblers Mk.II | 8 Organic Crystal |
| Frame Material | 12 Assemblers Mk.II | 24 Titanium Ingot + 36 Steel |
| Structure Matrix | 6 Assemblers Mk.II | 6 Frame Material + 6 Diamond + 6 Titanium Glass |

## Complete Factory Layout

Build these modules in order from raw materials in to matrix out:

{{< stepgroup >}}
{{< step "Titanium smelting" >}}Smelt titanium ore into ingots on your mining planet, ship via ILS{{< /step >}}
{{< step "Steel production" >}}Chain iron ore through 3:1 smelters to produce steel{{< /step >}}
{{< step "Oil -> Organic" >}}Refine crude oil, crack to refined oil, produce Organic Crystal{{< /step >}}
{{< step "Sulfuric Acid" >}}Build chemical plants producing acid from oil byproducts{{< /step >}}
{{< step "Titanium Glass" >}}Chain Crystal -> Glass assemblers near the acid supply{{< /step >}}
{{< step "Matrix assembly" >}}Feed all three lines into assemblers set to Structure Matrix{{< /step >}}
{{< /stepgroup >}}

## Scaling Beyond 60 SPM

To scale purple science, identify the bottleneck by checking these in order:

1. **Titanium supply** - Add more off-world miners and ILS slots
2. **Steel production** - Each 60 SPM needs 180 Steel/min (12 smelters)
3. **Sulfuric Acid** - This is the hidden bottleneck. Add chemical plants before you run out
4. **Frame Material** - If frames are queued, your steel or titanium is under-supplied

{{< callout "tip" >}}
**Edge case:** If you are on a planet with Sulfuric Acid oceans (typically the starting planet's gas giant moons), pump directly instead of making it. This frees up 4-6 chemical plants and saves significant power.
{{< /callout >}}

Need to optimize your titanium supply? Check our [DSP Mining Outpost Guide](/coal-fire-ice-mining-outpost-guide/) for off-world mining setup.

{{< resourcegrid >}}
{{< resourcecard name="DSP Wiki - Structure Matrix" url="https://dsp-wiki.com/Structure_Matrix" desc="Official recipe and ratio data" >}}
{{< resourcecard name="Steam Guide - Purple Science" url="https://steamcommunity.com/sharedfiles/filedetails/?id=2373611284" desc="Production chain layouts from the community" >}}
{{< /resourcegrid >}}
