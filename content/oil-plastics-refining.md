---
title: "DSP Oil & Plastics: Full Refining Chain Guide"
description: "Master the Oil Refining chain in Dyson Sphere Program. From Crude Oil extraction to Plastics and Rocket Fuel — complete production ratios, byproduct management, and automation setup."
date: 2026-05-18
type: post
tags: [oil, refining, plastics, fuel, mid-game]
topics: [refining, production]
categories: [Resources & Mining]
featured_image: ""
slug: oil-plastics-refining
draft: false
---

Somewhere between your first smelter array and your first interplanetary logistics network, every DSP player hits the same wall: oil. Crude oil is everywhere once you find a sea on another planet, but turning it into something useful — Plastics, Rocket Fuel, or even just keeping your refineries from backing up — is a system that catches almost everyone off guard.

This guide covers the complete Oil Refining chain from extraction to end products, with working production ratios, the critical **hydrogen byproduct problem**, and how to automate it without tearing your hair out.

---

{{< callout >}}
**TL;DR** — Refineries convert Crude Oil into Refined Oil, Hydrogen, and (at scale) Graphite. Three product chains matter: **Refined Oil → Plastics**, **Refined Oil → Rocket Fuel**, **Hydrogen + Coal → Graphene**. Hydrogen backs up fast and stalls refineries — route it to Fuel Plants or Graphene production to keep the chain flowing.
{{< /callout >}}

---

{{< section "How Oil Extraction Works" >}}

Before refining, you need crude oil on the surface. Deploy an **Oil Extractor** on a tile with crude oil nodes.

**Extractor specs (v0.10):**
- 1 Oil per second per extractor
- No power draw (passive once placed)
- Must connect to a **Tank** or directly to refineries via belts

{{< callout warning >}}
**Common mistake:** Building extractors, connecting a single belt to one refinery, and wondering why production crawls. You need volume — multiple extractors feeding a central refinery bank.
{{< /callout >}}

> **Finding oil:** You won't find sea planets early. Explore with your Vessel or use the galaxy map to scout — oil seas are on wet or oceanic planets. See our [Titanium Transport Guide](/titanium-transport-guide/) for how to set up interplanetary mining outposts.

---

{{< section "Step 1: The Three Refining Recipes" >}}

Right-click a placed Refinery to choose its recipe. Each recipe produces different outputs.

### Recipe 1: Refined Oil (Standard)

{{< recipe name1="crude-oil" qty1="1x" result="refined-oil" rqty="1x" >}}

**Plus byproduct:** Hydrogen x0.5/s

This is your default recipe. Set it and forget it — as long as your hydrogen is being consumed downstream.

### Recipe 2: Heavy Oil Residual (Hydrogen Focus)

{{< recipe name1="crude-oil" qty1="1x" result="refined-oil" rqty="0.5x" >}}

**Plus byproduct:** Hydrogen x1/s

Use this when you're running short on hydrogen for Blue Science chains (see our [Blue Science Guide](/blue-science-hydrogen-refining/)).

---

{{< section "Step 2: Solving the Hydrogen Bottleneck" >}}

This is where most players lose hours.

Hydrogen backs up into the refinery. When a refinery's output belt is full, it stops. When it stops, you lose refined oil production even if the rest of your factory is fine.

### Solution 1: Hydrogen Fuel Plants

Place **Hydrogen Fuel Plants** as consumers of your hydrogen output. Each Fuel Plant burns hydrogen to generate power.

{{< recipe name1="hydrogen" qty1="1x" result="power" rqty="1.08 MW" >}}

Set up a dedicated hydrogen bus: Tank → refineries (hydrogen output) → Hydrogen Fuel Plants.

A bank of 10 Hydrogen Fuel Plants can consume enough hydrogen to run a mid-sized refinery array and produce meaningful power on top.

### Solution 2: Route Hydrogen to Graphene

The better long-term solution: use hydrogen in your **Graphene production** chain. Graphene goes into Solar Sails and Blue Science.

{{< recipe name1="coal" qty1="1x" name2="refined-oil" qty2="1x" result="graphene" rqty="2x" >}}

**Plus byproduct:** Hydrogen x1

That hydrogen output is itself the fuel for the fuel plants. It's a cycle — and once balanced, it runs cleanly.

{{< diagram "oil-refining-flow.svg" "Complete oil refining chain with hydrogen management" "750" >}}

### The Hydrogen Tank Buffer

Always keep a **Tank** on your hydrogen output line. A buffer lets your refineries keep running during demand spikes. If the tank fills, your fuel plants are running. If the tank drains, the refineries are outrunning your demand.

---

{{< section "Step 3: Plastics Production" >}}

Plastics are used everywhere in mid and late-game: Circuit Boards, Thrusters, and Red Science.

**Plastics recipe:**

{{< recipe name1="refined-oil" qty1="1x" name2="coal" qty2="1x" result="plastics" rqty="1x" >}}

One Refinery running Plastics recipe needs a belt supply of Refined Oil and Coal. At full throughput, one Plastics Refinery covers the needs of a modest mid-game factory.

Scale Plastics by adding more refinery units — not by pushing a single refinery faster.

### Plastics to Circuit Boards

Circuit Boards are the bridge from raw materials to advanced components:

{{< recipe name1="plastics" qty1="2x" name2="iron" qty2="2x" result="circuit" rqty="1x" >}}

Circuit Boards feed into:
- Thrusters (logistics)
- Red / Yellow Science Packs
- Quantum Chips (endgame)

For full production ratios, see [dyson-calculator.com](https://dyson-calculator.com/).

---

{{< section "Step 4: Rocket Fuel" >}}

Rocket Fuel is the endgame energy carrier and key input for Accumulator production and Yellow Science.

**Rocket Fuel recipe:**

{{< recipe name1="refined-oil" qty1="2x" name2="coal" qty2="1x" result="rocket-fuel" rqty="1x" >}}

The bottleneck is *volume*. One Rocket Fuel Refinery consumes 2 units of Refined Oil per second — roughly double what a single oil extractor provides.

**Scale:** Aim for 2–3 Refineries dedicated to Rocket Fuel for every 5–6 oil extractors.

### Fuel Plant Power on Rocket Fuel

Rocket Fuel can also be burned in Fuel Plants — at higher energy density than hydrogen:

{{< recipe name1="rocket-fuel" qty1="1x" result="power" rqty="high MW" >}}

If your power grid is stable on hydrogen fuel, Rocket Fuel is your grid's "top tier" fuel for late-game surges.

---

{{< section "Automate the Full Refinery Bank" >}}

Here's the layout that works without belt spaghetti.

1. **Oil extractors** on a dedicated patch → belt to central refinery bay
2. **Refineries** in the bay, each set to appropriate recipe
3. **Tanks** on hydrogen output lines — buffer and pressure valve
4. **Hydrogen Fuel Plants** fed from tank → stabilize hydrogen demand
5. **Plastics Refineries** on separate output line fed by refined oil bus
6. **ILS** at the refinery outpost to export Plastics and import Coal

{{< callout tip >}}
**Pro Tip:** Keep refining isolated on its own planet or dedicated area. Refineries are heavy consumers — mixing them into your main production bus makes balancing painful.
{{< /callout >}}

---

{{< section "Quick Reference" >}}

| Recipe | Input | Output | Notes |
|---|---|---|---|
| Refined Oil | Crude Oil x1/s | Refined Oil x1/s + H2 x0.5/s | Standard; watch hydrogen |
| Heavy Oil Residual | Crude Oil x1/s | Refined Oil x0.5/s + H2 x1/s | H2-focused |
| Plastics | Refined Oil + Coal | Plastics x1 / 1.5s | Mid-game component |
| Rocket Fuel | Refined Oil x2 + Coal x1 | Rocket Fuel x1 / 3s | Endgame fuel |
| Graphene | Coal + Refined Oil | Graphene x2 + H2 x1 | Sail component |

**Extractor → Refinery ratio:** 1 extractor feeds ~1 refinery comfortably. Scale with multiples.

---

{{< section "Bottom Line" >}}

Oil isn't complicated — it's just demanding. One Refinery bank solving for hydrogen keeps everything downstream clean. Run hydrogen into Fuel Plants, use the refined oil for Plastics, and scale with parallel refineries rather than faster ones. The moment your refinery tanks are backed up, check your hydrogen consumer count first. More often than not, that's the bottleneck.

For getting oil resources off-world, see our [Titanium Transport Guide](/titanium-transport-guide/).
