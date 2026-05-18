---
title: "DSP Fire Ice & Deuterium: Cold Planet Refining Guide"
description: "Find and refine Fire Ice on cold planets in Dyson Sphere Program. How to extract Deuterium, manage water byproducts, and power your advanced fuel chains."
date: 2026-05-18
type: post
tags: [fire-ice, deuterium, cold-planet, fuel, advanced]
topics: [resources, fuel, refining]
categories: [Resources & Mining]
featured_image: ""
slug: fire-ice-deuterium
draft: false
---

<!-- section:intro -->
# Fire Ice & Deuterium: The Cold Chain Nobody Warns You About

You've found a lava world or an ice giant. The stars call it a Fire Ice planet — and it's full of something that doesn't exist on temperate worlds: **Deuterium**. Deuterium is your path to advanced fuels, high-output Rocket Fuel, and the Yellow Science chain. But getting it out of the ground and into your factory requires understanding a completely different logistics problem.

This guide covers finding Fire Ice planets, the extraction and refining mechanics, managing the water byproduct, and how to integrate Deuterium into your endgame production.

<!-- callout:Callout -->

## TL;DR

- **Fire Ice** is found on cold, volcanic, or ocean planets — not on every world
- **Deuterium** is the product; it's used in advanced fuels and Yellow Science
- Processing **Fire Ice produces water** as a high-volume byproduct — you need a water management plan
- Fire Ice **Extractors** and **Deuterium Fractionators** are the two buildings involved
- The cold planet environment may require **thermal or solar power** — set up logistics before you start
- Scale by adding fractionator units — one fractionator can saturate quickly

<!-- callout:Warning -->

## Finding a Fire Ice Planet

Fire Ice deposits appear on specific planet types:
- **Volcanic** planets
- **Oceanic** planets (large water/ice surfaces)
- **Tundra** or ice cap planets with high "cold" rating

Not every planet in a volcanic system will have Fire Ice. Check the planet's surface in the galaxy map — look for blue-white deposits in the resource overlay.

The best approach: scan systems methodically. Set up a **Vein Prospecting** research (Uncommon research item) to expand your passive scanning range. This helps locate cold worlds without manually flying to every system.

For the logistics to get off-world resources, see our [Titanium Transport Guide](/titanium-transport-guide/) and [ILS Setup Guide](/ils-setup-guide/).

<!-- section:step1 -->

## Step 1: Extract Fire Ice

**Fire Ice Extractors** are the mining buildings for this resource. Unlike standard Mining Machines, they're specialized for the Fire Ice deposit type.

**Extractor specs (v0.10):**
- Extracts Fire Ice from deposit nodes
- Produces: Fire Ice x1 / s
- Power draw: 360 kW (lower than equivalent oil extractors)
- Requires: deposit on surface

### Placement Strategy

Fire Ice nodes are often spread across a planet's surface rather than concentrated. Unlike ore veins on a single mountain, Fire Ice deposits can be in multiple sea zones.

**Tip:** Build extractors at multiple clusters. One central refinery bank can receive Fire Ice via **Planetary Logistics** (transport belts within a system) or **Interstellar Logistics** for cross-system chains.

Thermal power on cold planets: you have options. Coal is scarce on lava/ice worlds. Plan for solar panels on volcanic surfaces (high solar efficiency) or set up a **Ray Receiver** array from your existing sail network if you have one running.

<!-- section:step2 -->

## Step 2: The Deuterium Fractionator

The **Deuterium Fractionator** is the building that converts Fire Ice into Deuterium. It requires a water input — which is where the byproduct problem starts.

**Fractionator process:**
- Input: Fire Ice x1 + Water x2 → Deuterium x0.5 + Hydrogen x0.25
- The fractionator is essentially a cracking unit — it breaks Fire Ice into Deuterium and water

The byproduct ratio matters. For every 1 unit of Deuterium you produce, you generate 2 units of water. On a planet with limited water deposits, this becomes a bottleneck fast.

### Solving the Water Problem

Water is easy to come by on ocean planets — but scarce on volcanic worlds. Options:

1. **Import water via logistics** from a water-rich planet in the same system or a nearby one. Use ILS for interplanetary water transport.
2. **Use oceans directly** — if your Fire Ice deposits are on an oceanic planet, you likely have abundant water. Build fractionators on the shore.
3. **Desalination** — available in some planet biomes, converts seawater to usable water (research-dependent).

Water tank storage: keep a buffer tank near your fractionators. If your water supply briefly stalls, the fractionator stops and you lose Fire Ice input throughput.

<!-- section:step3 -->

## Step 3: Using Deuterium

Deuterium isn't just a curiosity — it has serious applications in late-game production.

### Rocket Fuel (Deuterium variant)

Advanced Rocket Fuel recipe uses Deuterium:
- Deuterium x2 + Coal x1 → Rocket Fuel x1

Compared to the standard refined oil recipe, the Deuterium version is more compact (no refined oil dependency) — but requires a stable Fire Ice supply chain.

This is the preferred late-game fuel recipe once your Fire Ice operation is established.

### Yellow Science and Advanced Research

Deuterium feeds into the **Yellow Science** chain — the final science tier that requires particle broadband and quantum chips. The chain is complex and resource-intensive, but Yellow Science is what unlocks your endgame structures: the full Dyson sphere shell and the macro logistics network.

### Proliferator Boost (v0.10)

A newer addition: **Proliferator** can be applied to intermediate products in Deuterium production chains, boosting output at various stages. Proliferator mechanics (v0.10): spray it onto belts or into assemblers to increase yield by tier level. This is covered in detail in our [Quantum Chips & Proliferator Guide](/quantum-chips-proliferator/).

<!-- section:step4 -->

## Step 4: Automation and Logistics Setup

The Fire Ice chain is more demanding than standard mining. Here's the layout that works:

1. **Fire Ice Extractors** on multiple surface clusters → belts or logistics bots to central bank
2. **Central Deuterium Fractionator bank** — co-located with water supply or water import
3. **Water tanks** at fractionator inputs — buffer against supply interruptions
4. **Water import ILS** — pull water from a water-rich planet if local supply is insufficient
5. **Deuterium export ILS** — ship Deuterium to your main production planet

**Scaling the fractionator bank:** Each fractionator has a processing rate. When your Deuterium output starts dropping, add another fractionator unit — not a bigger one. Parallel fractionators scale cleanly.

**Power planning:** A fractionator bank of 10 units draws 3.6 MW — not trivial. Make sure your cold planet has adequate power before you scale up.

<!-- quick-ref -->
## Quick Reference

| Building | Input | Output | Notes |
|---|---|---|---|
| Fire Ice Extractor | Deposit | Fire Ice x1/s | 360 kW power draw |
| Deuterium Fractionator | Fire Ice x1 + Water x2 | Deuterium x0.5 + H2 x0.25 | Water byproduct is the constraint |
| Adv. Rocket Fuel | Deuterium x2 + Coal x1 | Rocket Fuel x1 | No oil dependency |

**Water ratio:** 2 Water per 0.5 Deuterium. Budget water supply before scaling fractionators.

<!-- bottom-line -->
## Bottom Line

Fire Ice is a planet-type-gated resource — finding the right world is half the battle. Once you've got a cold planet with Fire Ice deposits, the processing chain is straightforward: extract, fractionate, export. The water byproduct is the real constraint — manage it with a dedicated water import route or an on-planet ocean supply before you scale up. Deuterium rockets are worth it for endgame fuel independence.

For a full production calculator covering Fire Ice chains and Deuterium ratios, see [dyson-calculator.com](https://dyson-calculator.com/).
