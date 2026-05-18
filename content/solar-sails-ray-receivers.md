---
title: "DSP Solar Sails & Ray Receivers: Complete Endgame Power Guide"
description: "Build and optimize Solar Sails and Ray Receivers in Dyson Sphere Program. Step-by-step orbit management, power scaling, and sail deployment strategies for late-game energy."
date: 2026-05-18
type: post
tags: [solar-sails, ray-receiver, power, endgame, late-game]
topics: [power, endgame]
categories: [Power & Energy]
featured_image: ""
slug: solar-sails-ray-receivers
draft: false
---

<!-- section:intro -->
# Solar Sails & Ray Receivers: The Only Power That Scales to the Stars

You've got a handful of coal power plants. Maybe you've built a wind farm or twelve. You're researching toward the stars — literally — and then it hits you: the Dyson sphere isn't just the goal, it's the power solution. To get there, you need Solar Sails and Ray Receivers working in tandem. One launches into orbit and reflects stellar radiation. The other catches that energy and converts it into usable power for your planet.

This guide walks you through how both systems actually work, how to deploy your first stable sail orbit, scale up Ray Receiver arrays, and keep the whole thing running without your grid blacking out mid-expansion.

> **Important note:** Game balance numbers below reflect DSP v0.10 (current Early Access). Check [dyson-calculator.com](https://dyson-calculator.com/) for live production ratios.

<!-- recipe:Ray Receiver Recipe -->
<!-- callout:Power Warning -->

## TL;DR

- **Solar Sails** launch from Vertical Launchers and orbit the local star — no fuel required
- **Ray Receivers** must be placed on a planet in the same star system to collect sail radiation and convert it to power
- A stable orbit needs roughly **6–10 sails** minimum; sail degradation over time means you need a replenishment schedule
- Ray Receivers output **~14.4 MW each** at full capacity (photon mode), or feed **Photonic Cells** into Solar Fusion
- Scale up by adding **more sails + more Ray Receivers** — one receiver saturates quickly
- The endgame power solution: multiple Ray Receiver arrays on multiple planets, powered by a full solar sail shell

<!-- callout:Prerequisites -->

## What Are Solar Sails and Ray Receivers?

These are two distinct buildings that form a paired system.

**Solar Sail** is a small, passive object that orbits your star. It has no inventory, no fuel cost, and no power draw. Its only job is to reflect stellar radiation outward. Sail it: one launched = one in orbit. They'll accumulate at orbital height and slowly degrade — you'll need to replenish them.

**Ray Receiver** is a planetary building. Placed on any planet in the same system as your sails, it absorbs the reflected radiation from orbiting sails and converts it into energy. In **Energy mode**, it feeds your grid. In **Photon mode**, it outputs **Photonic Cells** — the raw material for Solar Fusion and later research chains.

The two buildings are not optional. Sail without receivers and you're just lighting up empty space. Receivers without sails: zero input, zero output.

<!-- section:step1 -->

## Step 1: Unlock and Build Vertical Launchers

Before anything enters orbit, you need the **Vertical Launcher** — a building unlocked at the **Photon Network** technology tier. You also need the **Solar Sail** component in your inventory (crafted from **Graphene** — 2 per sail).

**What you'll need to make one Solar Sail:**
- 2 Graphene
- Graphene comes from: Coal + Oil in a Refining chain, or from Fire Ice

**Launcher placement:** Vertical Launchers are placed on any planet's surface, aimed at the local star. They don't need line-of-sight to the star — the sail trajectory is calculated automatically. One Launcher can fire sails continuously as long as you have them in its buffer.

**Launcher specs (v0.10):**
- Sail launch rate: 1 sail per 0.5 seconds
- Buffer capacity: 30 sails
- Launch range: entire star system
- Power draw: 240 kW during launch

Keep a stack of Solar Sails in the launcher's inventory. Set up a logistics network — an **Interstellar Logistics Station (ILS)** nearby is ideal — to auto-replenish the sail buffer.

<!-- section:step2 -->

## Step 2: Launch Your First Sail Orbit

This is where most players fumble their first attempt.

The key concept: **orbit is not automatic**. Sail launches go out, but they need to be *collected* and *launched in a stable pattern* to maintain a coherent shell. Here's what actually works.

### The Manual Approach (for your first test)

1. Place a **Vertical Launcher** on your home planet
2. Manually load 6–10 Solar Sails into the launcher
3. Click the launcher and set it to **Auto-Launch**
4. Watch the orbital view — sails will appear as small blue dots circling the star
5. Place a **Ray Receiver** on the same planet (or another planet in-system)
6. The receiver will start collecting from whatever sails are in orbit

The receiver won't instantly saturate — there's a lag as sails accumulate. Expect the first meaningful power output after ~30–60 seconds of continuous launch.

![Solar Sail & Ray Receiver System](/images/solar-sails-diagram.svg)

### The Stable Orbit Threshold

A "working" sail network for one Ray Receiver needs roughly **6–10 sails** in orbit. Below that threshold, the receiver idles. Above it, output climbs until it hits its per-receiver cap.

More sails = more reflected radiation = higher receiver output. There's no hard cap on sail count — but sail degradation means orbits thin out over time if you're not replenishing.

<!-- section:step3 -->

## Step 3: Build and Scale Ray Receivers

Ray Receivers are the power collection layer. A single receiver is never enough for late-game grids — you'll need an array.

### Receiver Placement Rules

- Must be placed on a **planet** — not in space
- Must be in the **same star system** as your active sail orbit
- No line-of-sight requirement — radiation travels through space regardless of planet positions
- Receivers can be planet-wide; they don't interfere with each other

### Energy vs. Photon Mode

Right-click a placed Ray Receiver to toggle between two modes:

**Energy Mode** feeds **14.4 MW** directly into your power grid (at full capacity). This is your primary power source once coal becomes insufficient.

**Photon Mode** outputs **Photonic Cells** at a rate of 1 per ~1.44 seconds. Photonic Cells feed into:
- Solar Fusion (produces Hydrogen and Deuterium without fire ice)
- Adv. Refining chains
- Quantum Chip production (endgame)

For most players: run receivers in **Energy mode** as your primary power. Switch a few to **Photon mode** when you need Photonic Cells for production chains.

### Scaling the Array

One Ray Receiver saturates at its output cap. To scale:
- Add more receivers on the same planet or nearby planets
- Each additional receiver draws from the same shared sail network
- More sails in orbit → higher aggregate collection rate → more receivers can operate at full output

**The ratio to aim for:** roughly 1 Ray Receiver per 6–8 Solar Sails in orbit. Overshoot on sails — it's better to have more radiation than the receivers can absorb than to starve them.

<!-- section:step4 -->

## Step 4: Automation — Never Run Out of Sails

Manual sail loading is a beginner trap. Here's how to automate the whole system.

### The ILS + Launcher Loop

1. Place an **ILS** near your Vertical Launcher
2. Set the ILS to **supply** Solar Sails (import from your logistics network)
3. Set the Launcher to **Auto-Launch** and keep its buffer stocked from the ILS

The ILS pulls Solar Sails from wherever they're being produced (your graphene factory) and delivers them to the launcher. The launcher fires them into orbit automatically. You never touch it again.

### Sail Replenishment Logic

Sails degrade over time. They'll exit orbit and burn up — the exact degradation rate depends on your star type and sail configuration. Budget for roughly **10–15% replenishment per minute** as a rough working estimate.

The practical fix: keep your sail production running continuously. If your launcher's auto-replenishment is active and your graphene supply is steady, degraded sails are naturally replaced.

### Backup Power

Ray Receivers, like all buildings, shut down if your grid power hits zero. If a sail shortage causes a receiver blackout, your grid loses power, which can cascade into production shutdowns. **Always maintain a small coal or thermal backup** for grid stability while transitioning to solar.

<!-- section:step5 -->

## Step 5: Late-Game Solar Sail Shells

The name of the endgame is the **Dyson sphere** — a full shell of Solar Sails surrounding your star. Getting there requires building out a dense sail network that your Ray Receivers can tap into.

The concept: instead of a handful of sails, you're launching thousands — enough to form a continuous shell. This is what enables truly massive power generation, the kind that fuels endgame production chains like Quantum Chips and Universe Matrix.

Late-game sail shell tips:
- Build **multiple Vertical Launchers** on multiple planets — one launcher can't supply a full shell alone
- Use **Planetary Logistics** to distribute sail production across multiple factories
- Ray Receivers on **inner planets** (closer to the star) collect more efficiently than outer planets
- Consider **ray receiver density** — more receivers per system means you can absorb more of the shell's output

This is where your ILS network (see our [ILS Setup Guide](/ils-setup-guide/)) becomes critical. A well-configured interstellar logistics network is the backbone of late-game sail automation.

For powering through the transition, our [Power Fix Guide](/power-fix-guide/) covers managing grid stability as you scale up from coal to solar.

<!-- quick-ref -->
## Quick Reference

| Building | Mode | Output |
|---|---|---|
| Ray Receiver | Energy | 14.4 MW (at full sail network) |
| Ray Receiver | Photon | ~1 Photonic Cell / 1.44s |
| Vertical Launcher | — | 1 Sail / 0.5s, 30-sail buffer |
| Solar Sail | Orbital | Reflects stellar radiation (passive) |

**Recipe: Solar Sail**
- Graphene x2 per sail

**Recipe: Graphene** (from Coal + Oil Refining)
- Coal x1 + Oil x1 → Graphene x2 + Hydrogen x1

**Key unlocks:** Photon Network tech → Vertical Launcher + Ray Receiver

<!-- bottom-line -->
## Bottom Line

Solar Sails and Ray Receivers are the bridge between planetary power and stellar-scale energy. Launch your first sails, get a single Ray Receiver running in Energy mode, then automate the replenishment loop with an ILS. From there, scale by adding more sails and more receivers — and switch a few receivers to Photon mode when you need Photonic Cells for late-game production.

The endgame sail shell is a different beast — but everything you need for it is covered by mastering the basics first.
