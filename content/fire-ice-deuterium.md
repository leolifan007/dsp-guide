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

You've found a lava world or an ice giant. The stars call it a Fire Ice planet — and it's full of something that doesn't exist on temperate worlds: **Deuterium**. Deuterium is your path to advanced fuels, high-output Rocket Fuel, and the Yellow Science chain.

But getting it out of the ground and into your factory requires understanding a completely different logistics problem.

This guide covers finding Fire Ice planets, the extraction and refining mechanics, managing the water byproduct, and how to integrate Deuterium into your endgame production.

---

{{< callout >}}
**TL;DR** — Fire Ice is found on cold, volcanic, or ocean planets. Processing it produces **Deuterium** (for advanced fuels) and **Water** (high-volume byproduct). Build Fractionators near water sources or import water via ILS. Scale by adding parallel fractionator units.
{{< /callout >}}

---

{{< section "Finding a Fire Ice Planet" >}}

Fire Ice deposits appear on specific planet types:
- **Volcanic** planets
- **Oceanic** planets (large water/ice surfaces)
- **Tundra** or ice cap planets with high "cold" rating

Not every planet in a volcanic system will have Fire Ice. Check the planet's surface in the galaxy map — look for blue-white deposits in the resource overlay.

{{< callout tip >}}
**Pro Tip:** Set up **Vein Prospecting** research (Uncommon research item) to expand your passive scanning range. This helps locate cold worlds without manually flying to every system.
{{< /callout >}}

For the logistics to get off-world resources, see our [Titanium Transport Guide](/titanium-transport-guide/) and [ILS Setup Guide](/ils-setup-guide/).

---

{{< section "Step 1: Extract Fire Ice" >}}

**Fire Ice Extractors** are the mining buildings for this resource. Unlike standard Mining Machines, they're specialized for the Fire Ice deposit type.

**Extractor specs (v0.10):**
- Extracts Fire Ice from deposit nodes
- Produces: Fire Ice x1 / s
- Power draw: 360 kW

### Placement Strategy

Fire Ice nodes are often spread across a planet's surface rather than concentrated. Build extractors at multiple clusters.

One central **Deuterium Fractionator bank** can receive Fire Ice via **Planetary Logistics** or **Interstellar Logistics** for cross-system chains.

{{< callout >}}
**Power on cold planets:** Coal is scarce on lava/ice worlds. Plan for solar panels on volcanic surfaces (high solar efficiency) or set up a **Ray Receiver** array from your existing sail network.
{{< /callout >}}

---

{{< section "Step 2: The Deuterium Fractionator" >}}

The **Deuterium Fractionator** converts Fire Ice into Deuterium. It requires a water input — which is where the byproduct problem starts.

**Fractionator recipe:**

{{< recipe name1="fire-ice" qty1="1x" name2="water" qty2="2x" result="deuterium" rqty="0.5x" >}}

The byproduct ratio matters. For every 0.5 units of Deuterium you produce, you need 2 units of water. On a planet with limited water deposits, this becomes a bottleneck fast.

{{< diagram "fire-ice-chain.svg" "Fire Ice extraction and Deuterium fractionation chain" "700" >}}

### Solving the Water Problem

Water is easy on ocean planets — but scarce on volcanic worlds. Options:

1. **Import water via logistics** from a water-rich planet in the same system. Use ILS for interplanetary transport.
2. **Use oceans directly** — if your Fire Ice deposits are on an oceanic planet, build fractionators on the shore.
3. **Desalination** — available in some planet biomes (research-dependent).

**Water tank storage:** Keep a buffer tank near your fractionators. If your water supply briefly stalls, the fractionator stops and you lose throughput.

---

{{< section "Step 3: Using Deuterium" >}}

Deuterium isn't just a curiosity — it has serious applications in late-game production.

### Rocket Fuel (Deuterium variant)

Advanced Rocket Fuel recipe uses Deuterium:

{{< recipe name1="deuterium" qty1="2x" name2="coal" qty2="1x" result="rocket-fuel" rqty="1x" >}}

Compared to the standard refined oil recipe, the Deuterium version is more compact — no refined oil dependency — but requires a stable Fire Ice supply chain.

This is the preferred late-game fuel recipe once your Fire Ice operation is established.

### Yellow Science and Advanced Research

Deuterium feeds into the **Yellow Science** chain — the final science tier that requires particle broadband and quantum chips.

Yellow Science unlocks:
- Full Dyson sphere shell construction
- Macro logistics network
- Endgame production structures

---

{{< section "Step 4: Automation and Logistics Setup" >}}

The Fire Ice chain is more demanding than standard mining. Here's the layout that works:

1. **Fire Ice Extractors** on multiple surface clusters → belts to central bank
2. **Central Deuterium Fractionator bank** — co-located with water supply
3. **Water tanks** at fractionator inputs — buffer against interruptions
4. **Water import ILS** — pull water from water-rich planet if needed
5. **Deuterium export ILS** — ship to your main production planet

{{< callout tip >}}
**Scaling:** Each fractionator has a processing rate. When Deuterium output drops, add another fractionator unit — not a bigger one. Parallel fractionators scale cleanly.
{{< /callout >}}

**Power planning:** A fractionator bank of 10 units draws 3.6 MW — not trivial. Make sure your cold planet has adequate power before scaling up.

---

{{< section "Quick Reference" >}}

| Building | Input | Output | Notes |
|---|---|---|---|
| Fire Ice Extractor | Deposit | Fire Ice x1/s | 360 kW power draw |
| Deuterium Fractionator | Fire Ice + Water x2 | Deuterium x0.5 | Water is the constraint |
| Adv. Rocket Fuel | Deuterium x2 + Coal x1 | Rocket Fuel x1 | No oil dependency |

**Water ratio:** 2 Water per 0.5 Deuterium. Budget water supply before scaling fractionators.

---

{{< section "Bottom Line" >}}

Fire Ice is a planet-type-gated resource — finding the right world is half the battle. Once you've got a cold planet with Fire Ice deposits, the processing chain is straightforward: extract, fractionate, export.

The water byproduct is the real constraint — manage it with a dedicated water import route or an on-planet ocean supply before you scale up. Deuterium rockets are worth it for endgame fuel independence.

For a full production calculator covering Fire Ice chains and Deuterium ratios, see [dyson-calculator.com](https://dyson-calculator.com/).
