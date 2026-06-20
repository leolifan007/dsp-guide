---
title: "DSP Advanced Oil Processing Guide (v0.10) - Never Waste Refined Oil or Backup Your Factory Again"
description: "Master oil processing in Dyson Sphere Program. Complete guide to refined oil management, thermal cracking ratios, plastic production, organic crystal synthesis, and preventing hydrogen backup that kills your factory."
date: 2026-06-09
publishDate: 2026-06-12T16:43:00+08:00
lastmod: 2026-06-09T22:20:00+08:00

type: post
tags: [oil, refining, plastic, organic-crystal, hydrogen, cracking, chemical]
categories: [Resources & Mining]
slug: advanced-oil-processing-guide
---

{{< callout "info" >}}
**Short answer:** The key to oil processing is balancing Hydrogen output with consumption. Build a thermal power station burning excess Hydrogen as a buffer. Store Refined Oil in tanks (not towers - tanks are free). When Hydrogen backs up, your entire oil chain stops, which stops plastic, which stops yellow science. Burn the excess.
{{< /callout >}}

Oil processing is the most mis-understood production chain in DSP. Unlike mining, which produces exactly what you ask for, oil refining produces multiple outputs simultaneously. When one output backs up, the entire refinery stops. This guide covers every aspect of oil management.

## Understanding Oil Ratios

Each Oil Refinery processing Crude Oil produces:

| Output | Quantity | Use Case |
|--------|----------|----------|
| Refined Oil | 2 per 2s | Plastic, Organic Crystal |
| Hydrogen | 1 per 2s | Casimir Crystals, Fractionators |

The critical ratio is 2:1 in favor of Refined Oil. But most mid-game production consumes Hydrogen faster than Refined Oil, creating an imbalance. The Plasma Refining tech (X-Ray Cracking) lets you convert Refined Oil into more Hydrogen.

{{< material "crude-oil" >}} {{< material "refined-oil" >}} {{< material "plastic" >}}

## The Three Oil Configurations

{{< section "Configuration 1: Direct Refining (Early Game)" >}}

Build 3-4 refineries, pipe Refined Oil into storage tanks, and use the Hydrogen for early casimir or thermal power. This is the simplest setup and handles the first 10 hours of gameplay.

| Component | Count | Notes |
|-----------|-------|-------|
| Oil Refinery | 3-4 | Feed from 2-3 oil seeps |
| Storage Tank (Oil) | 4 | Buffer for Refined Oil |
| Storage Tank (H2) | 2 | Buffer for Hydrogen |
| Thermal Generator | 4-6 | Burn excess Hydrogen |

{{< insight >}}
**Hidden cost:** Storage tanks are nearly free (circuit boards only). Build 4-8 of them before you need them. Once oil backs up, adding storage requires dismantling full pipes.
{{< /insight >}}

{{< section "Configuration 2: X-Ray Cracking (Mid Game)" >}}

X-Ray Cracking converts Refined Oil into Energetic Graphite and more Hydrogen:

| Recipe | Input | Output | When To Use |
|--------|-------|--------|-------------|
| X-Ray Cracking | 1 Refined Oil + 1 Hydrogen | 1 Energetic Graphite + 2 Hydrogen | Need more hydrogen, have excess refined oil |

This creates a positive feedback loop: feed Hydrogen back into the cracker to produce more Hydrogen. One Mk.I belt of Refined Oil through 4 crackers produces enough Hydrogen for 2 Casimir Crystal assemblers.

{{< callout "tip" >}}
**Optimization trick:** Loop Hydrogen back through X-Ray crackers using a priority splitter. Send hydrogen to crackers first, then to the rest of your factory. This ensures crackers always have priority fuel and your Refined Oil never backs up.
{{< /callout >}}

{{< section "Configuration 3: Thermal Cracking (Late Game)" >}}

When you have oil seeps on multiple planets, import Crude Oil and process it locally. Build 8+ refineries in a 2-row configuration with shared Hydrogen and Refined Oil bus lines.

| Stage | Refineries | Crackers | Output |
|-------|-----------|---------|--------|
| Stage 1 | 4 | 2 | Plastic + H2 for mid-game |
| Stage 2 | 8 | 6 | Plastic + Organic Crystal + H2 for late-game |
| Stage 3 | 12 | 10 | Full production for 60 SPM factory |

## Preventing Hydrogen Backup

Hydrogen backup is the fastest way to kill a DSP factory. Here is the cascade:

1. Hydrogen consumption drops (Casimir assemblers full)
2. Hydrogen fills all storage and pipes
3. Oil refineries stall because Hydrogen output has nowhere to go
4. Refined Oil stops flowing
5. Plastic production stops
6. Yellow science stops
7. Processor production stops
8. Everything that needs Processors stops

{{< callout "warning" >}}
**The fix:** Build a dedicated Hydrogen-burning thermal power plant with 6-8 generators. Connect it to your Hydrogen bus via a Priority Splitter set to "overflow." When hydrogen consumption drops, the excess flows to the thermal plant and burns. This single step prevents 90% of mid-game factory failures.
{{< /callout >}}

For a step-by-step walkthrough of this overflow setup with thermal plant ratios and priority splitter configurations, see our dedicated <a href="/hydrogen-backup-fix/">hydrogen backup fix guide</a>.

## Organic Crystal Production

Organic Crystals can be synthesized or mined:

| Method | Source | Output Rate | Complexity |
|--------|--------|-------------|------------|
| Synthesis | Refined Oil + Plastic | 2 per 3s per plant | Medium |
| Mining (Organic Planet) | Organic Crystal veins | ~6/min per miner | Very Low |

{{< material "organic-crystal" >}} {{< material "plastic" >}}

For 60 SPM factories, the mining route is dramatically easier. Find an organic planet (usually within 2-3 light years), set up miners, and ship the crystals home. One vein of organic crystal with 6 miners produces more than 8 chemical plants.

{{< stepgroup >}}
{{< step "Early oil" >}}Build 3 refineries, pipe to tanks, burn excess hydrogen{{< /step >}}
{{< step "Cracking setup" >}}Add 2 X-Ray crackers when hydrogen demand rises{{< /step >}}
{{< step "Plastic line" >}}Chain refined oil + thermal cracking into plastic production and <a href="/energy-matrix-production-guide/">energy matrix assembly</a>{{< /step >}}
{{< step "Organic crystal" >}}Either build synthesis plant or find organic planet{{< /step >}}
{{< step "Overflow buffer" >}}Always maintain hydrogen-burning thermal as pressure valve{{< /step >}}
{{< /stepgroup >}}

For the full oil-to-science chain, see our [DSP Green Science Deep Dive Guide](/green-science-deep-dive-guide/).

{{< diagram "diagrams/advanced-oil-processing-guide.svg" >}}

{{< resourcegrid >}}
{{< resourcecard name="DSP Wiki - Oil Refining" url="https://dsp-wiki.com/Oil_Refinery" desc="Oil refining mechanics and ratios" >}}
{{< resourcecard name="Steam Guide - Oil Processing" url="https://steamcommunity.com/sharedfiles/filedetails/?id=2373611284" desc="Community oil optimization strategies" >}}
{{< /resourcegrid >}}
