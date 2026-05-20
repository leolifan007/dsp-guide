---
title: "Dyson Sphere Program Mining Outposts: Coal, Fire Ice & Resource Veins"
description: "Build efficient mining outposts in DSP. Complete guide to coal mining, fire ice extraction, mining machine placement, and setting up off-world mining bases connected to your logistics network."
date: 2026-05-20
publishedAt: 2026-05-20T09:10:00+08:00
lastmod: 2026-05-20
type: post
tags: [mining, coal, fire-ice, titanium, early-game, outpost, logistics]
topics: [mining, logistics]
categories: [Resources & Mining]
featured_image: ""
slug: coal-fire-ice-mining-outpost-guide
draft: false
---

Every DSP factory runs on raw materials — and raw materials live on planets that are rarely the planet where your main factory sits. Mining outposts are how you get coal from a gas giant's moon, titanium from an ice world, and fire ice from the dark reaches of the galaxy without leaving your main factory's logistics grid.

This guide covers how to build mining outposts, position mining machines correctly, and connect them to your logistics network so resources flow automatically.

---

{{< callout >}}
**TL;DR** — Mining Machines extract resources from veins. Place one miner per vein, connect to a belt or ILS, and export. For off-world mining, an ILS with demand set to "remote supply" ensures your factory automatically pulls resources from any connected outpost across your logistics network.
{{< /callout >}}

---

{{< section "How Mining Machines Work" >}}

A **Mining Machine** extracts resources from a resource vein. Each vein is a finite source — it will eventually deplete, though DSP veins are large enough that depletion rarely matters within a single playthrough.

**Mining Machine specs:**
- Mining speed varies by ore type and vein richness
- Produces raw ore at a fixed rate per vein
- Must be placed directly on a resource vein tile
- Output is raw ore — smelting is a separate step

**Key rule:** One Mining Machine per vein. You cannot place two mining machines on the same vein. The machine mines the vein until it's depleted, then stops.

---

{{< section "Coal Mining Outpost" >}}

Coal is the backbone of early-game power. You need a dedicated coal mining outpost before your factory's power demand outpaces your starting coal supply.

### Building a Coal Outpost

1. **Find a coal-rich planet.** The galaxy map shows resource distribution. Look for planets with at least 3–4 coal veins adjacent to each other.
2. **Place Mining Machines** on each coal vein. Set each miner to its own belt lane.
3. **Run belts** from the miners to a central collection point.
4. **Connect to your power grid.** Route coal directly to Thermal Power Plants.
5. **Add ILS** if this outpost is off-world — see the ILS setup section below.

### Belt Ratios

A Mk.I belt carries 1 ore/s. A coal vein produces roughly 1 ore/s per miner. For a full Mk.I belt of coal: 1 miner × 1 vein × 1 belt = 1 coal/s.

For higher throughput: use Mk.II belts (2 miners) or Mk.III belts (3 miners) feeding into a coal column, then route the collected coal to power plants.

---

{{< section "Fire Ice Mining Outpost" >}}

**Fire Ice** is DSP's most distinctive early resource — a crystalline fuel found on ice worlds. Fire Ice is mined using **Flame Smelters** instead of standard Mining Machines, and it requires the **Flame Interlocking** research to unlock.

### Flame Smelter vs Mining Machine

A standard Mining Machine extracts ore from veins. A **Flame Smelter** (activated on Fire Ice veins) converts Fire Ice directly into **Fuel Pellets** — a high-energy fuel source that burns in Fuel Plants.

**Flame Smelter on Fire Ice:**
- Fire Ice × 1/s → Fuel Pellet × 1
- No intermediate ore step — directly converts to fuel

This makes Fire Ice the most efficient early fuel source. A small Fire Ice mining outpost can produce enough Fuel Pellets to power a mid-sized factory without any coal logistics.

### Building a Fire Ice Outpost

1. **Unlock Flame Interlocking** research (early tech tree).
2. **Find a Fire Ice planet.** Ice worlds with ocean surfaces. Use your Vessel to scout.
3. **Place Flame Smelters** on Fire Ice veins.
4. **Connect output** to a Fuel Pellet storage tank or directly to Fuel Plants.
5. **Connect the outpost ILS** to your logistics network for remote access.

---

{{< section "Off-World Mining: Connecting Outposts to Your Network" >}}

For any mining outpost not on your main factory planet, you need an **Interplanetary Logistics Station (ILS)** to pull resources back to your main factory.

### ILS Outpost Setup

1. **Place an ILS** at the mining outpost.
2. **Configure the ILS:**
   - Set **Supply** for the resource being mined (e.g., Iron Ore)
   - Set the amount per dispatch
   - Set to **Remote** mode
3. **Configure your main factory ILS:**
   - Set **Demand** for the resource
   - Set to pull from **Remote** stations

When your main factory needs iron, the ILS at the outpost will automatically dispatch cargo vessels carrying iron ore to your factory. This is what "logistics automation" means in DSP — you set the rules, the game handles the shipping.

For full ILS configuration, see our [ILS Setup Guide](/ils-setup-guide/).

---

{{< section "Mining Machine Belt Placement" >}}

### Standard Belt Output

Place the mining machine directly adjacent to a belt. The ore flows onto the belt automatically.

```
[Resource Vein] → [Mining Machine] → [Belt] → [Collection Point / ILS]
```

For multiple veins: each vein gets its own belt lane, merging at a collection point.

### Belt Merge Rules

When merging multiple belt lanes into one:
- Mk.I belt (1 ore/s): max 1 input lane
- Mk.II belt (2 ore/s): max 2 input lanes, properly compressed
- Mk.III belt (3 ore/s): max 3 input lanes

**Critical:** If your input lanes aren't fully compressing the belt (every tile filled), you're not getting full throughput. Visual check: a fully compressed belt entering a smelter bay looks solid — no gaps.

---

Mining outposts are your factory's supply chain. Build them close to rich resource veins, connect them with ILS, and your factory will never starve for raw materials. Coal for power, Fire Ice for fuel, titanium and silicon for advanced components — each outpost is a node in your logistics network. Set it up once, and it runs forever.

For moving mined materials off-world, see our [Titanium Transport Guide](/titanium-transport-guide/).