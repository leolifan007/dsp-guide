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

<!-- section:intro -->
# Oil & Plastics: The Refining Chain That Makes or Breaks Your Mid-Game

Somewhere between your first smelter array and your first interplanetary logistics network, every DSP player hits the same wall: oil. Crude oil is everywhere once you find a sea on another planet, but turning it into something useful — Plastics, Rocket Fuel, or even just keeping your refineries from backing up and stalling your entire chain — is a system that catches almost everyone off guard.

This guide covers the complete Oil Refining chain from extraction to end products, with working production ratios, the critical **hydrogen byproduct problem**, and how to automate it without tearing your hair out.

<!-- recipe:Refinery Recipe -->
<!-- recipe:Hydrogen Cracking Recipe -->
<!-- callout:Important -->

## TL;DR

- **Refineries** convert Crude Oil into **Refined Oil**, Hydrogen, and (at scale) Graphite
- Three product chains matter: **Refined Oil → Plastics**, **Refined Oil → Rocket Fuel**, **Hydrogen + Coal → Graphene**
- Hydrogen is the main byproduct — it backs up fast and stalls refineries if you don't use it
- Use **Hydrogen Fuel Plants** or route hydrogen into **Graphene production** to keep the chain flowing
- Scale up by adding refineries in parallel — not by speeding up one refinery
- Key ratios to memorize: 1 Refinery : ~3.5 Oil Extractors (at 1:1 basic ratio), but always balance to your actual demand

<!-- callout:Prerequisites -->

## How Oil Extraction Works

Before refining, you need crude oil on the surface. Deploy an **Oil Extractor** on a tile with crude oil nodes. Extractors pull oil at a rate of 1 unit per second per extractor — subject to the node's richness.

**Extractor specs (v0.10):**
- 1 Oil per second per extractor
- No power draw (passive once placed)
- Must connect to a **Tank** or directly to refineries via belts

Oil Extractors need a nearby **Tank** or direct belt feed. The common mistake: building extractors, connecting a single belt to one refinery, and wondering why production crawls. You need volume — multiple extractors feeding a central refinery bank.

> **Finding oil:** You won't find sea planets early. Explore with your Vessel or use the galaxy map to scout — oil seas are on wet or oceanic planets. See our [Titanium Transport Guide](/titanium-transport-guide/) for how to set up interplanetary mining outposts.

<!-- section:step1 -->

## Step 1: The Three Refining Recipes

Right-click a placed Refinery to choose its recipe. Each recipe produces different outputs and consumes oil at different rates.

### Recipe 1: Refined Oil (Standard)

- **Input:** Crude Oil x1 / s
- **Output:** Refined Oil x1 / s + Hydrogen x0.5 / s
- **Use for:** Plastics, Rocket Fuel chains
- **Problem:** Hydrogen byproduct — accumulates and backs up if unused

This is your default recipe. Set it and forget it — as long as your hydrogen is being consumed downstream.

### Recipe 2: Heavy Oil Residual (Byproduct Focus)

- **Input:** Crude Oil x1 / s
- **Output:** Refined Oil x0.5 / s + Hydrogen x1 / s
- **Use for:** Hydrogen-intensive chains (Graphene production, Blue Science)
- **Trade-off:** Half the refined oil output — use only when hydrogen demand is your bottleneck

Switch to this when you're running short on hydrogen for your Blue Science chains (see our [Blue Science Guide](/blue-science-hydrogen-refining/)).

### Recipe 3: Mineral Water — only available with certain research

Used in advanced chains — not covered here.

<!-- section:step2 -->

## Step 2: Solving the Hydrogen Bottleneck

This is where most players lose hours.

Hydrogen backs up into the refinery. When a refinery's output belt is full, it stops. When it stops, you lose refined oil production even if the rest of your factory is fine. The fix isn't one trick — it's a system.

### Use Hydrogen Fuel Plants

Place **Hydrogen Fuel Plants** as consumers of your hydrogen output. Each Fuel Plant burns hydrogen to generate power — turning a problematic byproduct into grid energy.

Set up a dedicated hydrogen bus:
1. Tank → refineries (hydrogen output) → Hydrogen Fuel Plants

The Fuel Plants will draw hydrogen continuously, keeping refinery outputs clear.

**Fuel Plant specs (v0.10):**
- Input: Hydrogen x1 / s
- Output: 1.08 MW of power
- Burns hydrogen — no other input needed

A bank of 10 Hydrogen Fuel Plants can consume enough hydrogen to run a mid-sized refinery array and produce meaningful power on top.

### Route Hydrogen to Graphene

The better long-term solution: use hydrogen in your **Graphene production** chain. Graphene goes into:
- Solar Sails (our [Solar Sails Guide](/solar-sails-ray-receivers/))
- Blue Science research requirements

Graphene recipe (from Coal + Oil):
- Coal x1 + Refined Oil x1 → Graphene x2 + Hydrogen x1

That hydrogen output is itself the fuel for the fuel plants. It's a cycle — and once it's balanced, it runs cleanly.

### The Hydrogen Tank Buffer

Always keep a **Tank** on your hydrogen output line. A buffer of hydrogen lets your refineries keep running during demand spikes. Set it up as a pressure-release valve — if the tank fills, your fuel plants are running. If the tank drains, the refineries are outrunning your demand.

<!-- section:step3 -->

## Step 3: Plastics — The Core End Product

Plastics are used everywhere in mid and late-game: Circuit Boards, Thrusters, and the Red Science chain.

**Plastics recipe:**
- Refined Oil x1 + Coal x1 → Plastics x1 per 1.5 seconds (in Refinery)

One Refinery running Plastics recipe needs a belt supply of Refined Oil and Coal. At full throughput (roughly 1 belt of each), one Plastics Refinery covers the needs of a modest mid-game factory.

Scale Plastics by adding more refinery units — not by pushing a single refinery faster.`n`n![Oil Refining Chain Flow](/images/oil-refining-flow.svg)

### Plastics to Circuit Boards

Circuit Boards are the bridge from raw materials to advanced components:
- Plastics x2 + Iron Ingots x2 → Circuit Boards x1 per 2 seconds

Circuit Boards feed into:
- Thrusters (logistics)
- Red / Yellow Science Packs
- Quantum Chips (endgame)

For full production ratios and ratios calculators, see [dyson-calculator.com](https://dyson-calculator.com/).

<!-- section:step4 -->

## Step 4: Rocket Fuel — When You Need the Big Burns

Rocket Fuel is the endgame energy carrier and the key input for:
- Accumulator production
- Yellow Science (particle broadband)
- Direct power generation in Fuel Plants

**Rocket Fuel recipe (Refinery):**
- Refined Oil x2 + Coal x1 → Rocket Fuel x1 per 3 seconds

The bottleneck here is *volume*. One Rocket Fuel Refinery consumes 2 units of Refined Oil per second — roughly double what a single oil extractor provides. You'll need a substantial refinery bank for significant Rocket Fuel output.

Scale: aim for 2–3 Refineries dedicated to Rocket Fuel for every 5–6 oil extractors you have running.

### Fuel Plant Power on Rocket Fuel

Yes, Rocket Fuel can also be burned in Fuel Plants — at higher energy density than hydrogen:
- Rocket Fuel x1 → significantly more power than hydrogen equivalent

If your power grid is stable on hydrogen fuel, Rocket Fuel is your grid's "top tier" fuel for late-game surges.

<!-- section:step5 -->

## Step 5: Automate the Full Refinery Bank

Here's the layout that actually works without belt spaghetti.

1. **Oil extractors** on a dedicated patch → direct belt to a **central refinery bay**
2. **Refineries** in the refinery bay, each set to appropriate recipe
3. **Tanks** on hydrogen output lines — serve as both buffer and pressure valve
4. **Hydrogen Fuel Plants** fed from tank → stabilize hydrogen demand
5. **Plastics Refineries** on a separate output line fed by refined oil bus
6. **ILS** at the refinery outpost to export Plastics and import Coal as needed

Keep your refining isolated on its own planet or dedicated area. Refineries are heavy consumers — the moment you mix them into your main production bus, balancing becomes painful.

<!-- quick-ref -->
## Quick Reference

| Recipe | Input | Output | Notes |
|---|---|---|---|
| Refined Oil | Crude Oil x1/s | Refined Oil x1/s + H2 x0.5/s | Standard; watch hydrogen |
| Heavy Oil Residual | Crude Oil x1/s | Refined Oil x0.5/s + H2 x1/s | H2-focused; lower oil output |
| Plastics | Refined Oil x1 + Coal x1 | Plastics x1 / 1.5s | Central mid-game component |
| Rocket Fuel | Refined Oil x2 + Coal x1 | Rocket Fuel x1 / 3s | High-volume; endgame fuel |
| Graphene | Coal x1 + Refined Oil x1 | Graphene x2 + H2 x1 | Sail component; H2 cycle |

**Extractor → Refinery ratio:** 1 extractor feeds ~1 refinery comfortably. Scale with multiples.

<!-- bottom-line -->
## Bottom Line

Oil isn't complicated — it's just demanding. One Refinery bank solving for hydrogen keeps everything downstream clean. Run hydrogen into Fuel Plants, use the refined oil for Plastics, and scale with parallel refineries rather than faster ones. The moment your refinery tanks are backed up, check your hydrogen consumer count first. More often than not, that's the bottleneck.

For getting oil resources off-world, see our [Titanium Transport Guide](/titanium-transport-guide/) — the logistics setup covered there applies directly to oil outpost chains.
