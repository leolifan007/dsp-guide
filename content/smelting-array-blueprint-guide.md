---
title: "Dyson Sphere Program Smelting Arrays: Complete Setup Guide"
description: "Learn how to build efficient smelting arrays in Dyson Sphere Program. From basic smelter chains to optimized smelting columns — production ratios, belt speeds, and scalable layouts for every stage of the game."
date: 2026-05-20
publishedAt: 2026-05-20T09:00:00+08:00
lastmod: 2026-05-20
type: post
tags: [smelting, basics, early-game, production, iron, copper]
topics: [smelting, production]
categories: [Production & Automation]
featured_image: ""
slug: smelting-array-blueprint-guide
draft: true
---

Smelting is where every DSP run starts, and where most players first feel the pain of scaling up. One smelter looks fine. Ten smelters look decent. Fifty smelters feeding a sprawling factory reveal every bottleneck you buried under "it should work."

This guide covers smelting from the first furnace on a new planet through to full production columns — the correct ratios, the belt speeds that matter, and the layouts that scale cleanly without requiring you to redesign everything at every tier.

---

{{< callout >}}
**TL;DR** — Smelters convert Ores into Metal Ingots. Match smelter count to belt throughput: Mk.I Belt = 1 smelter, Mk.II = 2 smelters, Mk.III = 3 smelters per belt. Build smelting as dedicated columns from day one — you'll never regret having more smelting capacity early.
{{< /callout >}}

---

{{< diagram "diagrams/smelting-column-main.svg" "Smelting column layout with belt ratios — 3 smelters per Mk.III belt" "820" >}}

---

{{< section "How Smelting Works in DSP" >}}

Smelters take raw **Ore** from a mining machine and output **Ingots** — Iron Ingots, Copper Ingots, or their stone and silicon variants.

**Smelter specs (v0.10):**
- Smelts 1 ore per second at base speed
- Requires power to operate
- No recipe switching — a smelter is dedicated to one ore type

The first smelter you place converts whatever ore belt you connect to it. You can run Iron Ore into a smelter, then swap the belt to Copper Ore and it'll start smelting copper immediately. The smelter itself doesn't care — it's purely a 1:1 conversion machine.

**Smelting chain:**
- Iron Ore → **Iron Ingot**
- Copper Ore → **Copper Ingot**
- Stone Ore → **Stone Brick**
- Silicon Ore → **Silicon Ingot**
- Titanium Ore → **Titanium Ingot**

---

{{< section "The Belt Throughput Problem" >}}

Every smelter consumes ore at 1/s. Every belt carries a fixed amount of ore per second. The mismatch between smelter demand and belt capacity is where most early-game factory designs fall apart.

### Belt Tiers and Smelter Ratios

| Belt Tier | Throughput | Smelters Per Belt |
|---|---|---|
| Mk.I (Yellow) | 1 ore/s | 1 smelter |
| Mk.II (Red) | 2 ore/s | 2 smelters |
| Mk.III (Blue) | 3 ore/s | 3 smelters |
| Mk.IV (Purple) | 4 ore/s | 4 smelters |

This is the fundamental smelting ratio. If you feed a Mk.II belt into your smelting array and only connect one smelter, you're leaving 50% of your belt capacity unused. The remaining ore/s just sits on the belt with nowhere to go — until it backs up all the way to your miners.

### How Backups Cascade

When a smelter bay stalls because the out belt is full, ore backs up onto the input belt. The input belt backs up to the mining machine. The mining machine stops. Now your entire planet's ore production has halted because one part of one smelting bay is backed up.

The fix isn't to build more smelters. It's to ensure your **output belts always have capacity** to drain the smelter output. This means either:
1. Your downstream factory is consuming ingots faster than smelters produce them, or
2. You route overflow to an ILS (Interplanetary Logistics Station) for export

---

{{< section "Smelting Array Layout: The Column Method" >}}

The cleanest smelting layout is a column array — each column dedicated to one ore type, with consistent spacing and parallel input belts.

### Basic Iron Column (Mk.I Belts)

{{< diagram "diagrams/smelting-mk1-basic.svg" "Basic smelting column — Mk.I Belt, 1:1:1 ratio" "720" >}}

One miner, one smelter, one belt. Simple, but it doesn't scale well.

### Scalable Iron Column (Mk.II Belts)

{{< diagram "diagrams/smelting-mk2-standard.svg" "Standard smelting column — Mk.II Belt, 2:2:2 ratio" "720" >}}

Two miners feed a Mk.II belt. Two smelters drain it. The output belt carries 2 ingots/s to wherever you need iron.

### High-Volume Iron Column (Mk.III Belts)

{{< diagram "diagrams/smelting-mk3-highvol.svg" "High-volume smelting column — Mk.III Belt, 3:3:3 ratio (recommended)" "720" >}}

Three miners. Three smelters. This is your mid-game target — it matches the throughput of a Mk.III belt and produces iron fast enough to feed serious production.

---

{{< section "Building Smelting Columns in Practice" >}}

### Step 1: Find a Mineral-Rich Patch

You want a mining patch with at least two veins of the same ore. Place **Mining Machines** on each vein. Set each miner to its own belt lane.

### Step 2: Build the Input Belt Line

Run a belt from your miners to the smelting area. Keep this belt **dedicated to ore only** — don't mix ore and ingots on the same belt. You'll regret it when you need to trace a bottleneck.

For a Mk.III column: run three parallel belt lanes from three miners to three smelter slots.

### Step 3: Place Smelters

Smelters must be placed directly adjacent to the input belt. They snap to the grid. Place one smelter per smelter slot, adjacent to the belt.

For a three-smelter column, you need three adjacent positions on the smelting grid. You can place smelters in a row:

{{< diagram "diagrams/smelting-row-placement.svg" "Smelter row placement — 3 smelters adjacent to a single belt" "620" >}}

### Step 4: Connect Output to Your Bus

The output belt carries ingots away from smelters and into your production bus. Connect it to whatever factory system consumes iron or copper — and make sure your downstream consumption matches or exceeds smelter output.

### Step 5: Add Overflow to ILS

If smelters produce faster than your factory consumes, route the overflow to an **Interplanetary Logistics Station (ILS)**. Set the ILS to import ingots and distribute them to requesting stations across your logistics network. See our [ILS Setup Guide](/ils-setup-guide/) for full details on ILS configuration.

---

{{< section "Smelter Power Consumption" >}}

Smelters consume power continuously. Each smelter draws a base amount — enough to matter when you're running 50+ smelters.

**Power tip:** Place **Thermal Power Plants** near your smelting area. Coal Power Plants are cheap to build and produce enough electricity to run large smelter arrays. In mid-game, switch to Fuel Power or Solar to reduce coal logistics overhead.

If your smelters are stuttering, check your power grid first — a smelter with no power produces zero ingots, and you won't see the problem until your factory backs up.

---

{{< section "Common Smelting Mistakes" >}}

### Mistake 1: Mixing Ores on Belts

Don't run Iron Ore and Copper Ore on the same belt expecting smelters to magically sort them. Smelters are dumb — they take whatever is on the belt. One ore per belt, always.

### Mistake 2: No Overflow Management

If your smelting output backs up, your smelters stop. Always have either:
- Active downstream consumption, or
- An ILS exporting the overflow

### Mistake 3: Underbuilding Smelters Early

Players often build "enough smelters for now" and end up rebuilding the entire smelting array when they unlock Yellow Science. Better to build a full column (3 smelters per belt) from the start, even if some slots are empty. The real estate is cheap; the time to redesign is expensive.

### Mistake 4: Belt Compression

A partially-loaded belt is a wasted belt. Make sure your miners are saturating the input belt before worrying about adding more smelters. Run a visual check: if the belt entering your smelter bay has gaps, your miners aren't full — fix the miners first.

---

The smelting column is your factory's foundation. Build it once, build it right: three smelters per Mk.III belt, dedicated ore belts, and an ILS to handle overflow. Everything downstream — circuits, gears, research labs — depends on this iron and copper arriving on time. Get the smelting right and your factory will scale without constant firefighting.

For moving smelted materials off-world, see our [Titanium Transport Guide](/titanium-transport-guide/).