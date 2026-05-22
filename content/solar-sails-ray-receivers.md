---
title: "DSP Solar Sails & Ray Receivers: Complete Endgame Power Guide"
description: "Build and optimize Solar Sails and Ray Receivers in Dyson Sphere Program. Step-by-step orbit management, power scaling, and sail deployment strategies for late-game energy."
date: 2026-05-18
publishedAt: 2026-05-18T21:13:00+08:00
lastmod: 2026-05-18
type: post
tags: [solar-sails, ray-receiver, power, endgame, late-game]
topics: [power, endgame]
categories: [Power & Energy]
featured_image: ""
slug: solar-sails-ray-receivers
draft: false
---

You've got a handful of coal power plants. Maybe you've built a wind farm or twelve. You're researching toward the stars — literally — and then it hits you: the Dyson sphere isn't just the goal, it's the power solution. To get there, you need Solar Sails and Ray Receivers working in tandem.

One launches into orbit and reflects stellar radiation. The other catches that energy and converts it into usable power for your planet.

This guide walks you through how both systems actually work, how to deploy your first stable sail orbit, scale up Ray Receiver arrays, and keep the whole thing running without your grid blacking out mid-expansion.

> **Important note:** Game balance numbers below reflect DSP v0.10 (current Early Access). Check [dyson-calculator.com](https://dyson-calculator.com/) for live production ratios.

---

{{< callout >}}
**TL;DR** — Solar Sails launch from Vertical Launchers and orbit the local star. Ray Receivers placed on planets in the same system collect radiation and convert it to power. You need ~6-10 sails minimum for stable output. Scale by adding more sails + more receivers.
{{< /callout >}}

---

{{< section "How Solar Sails and Ray Receivers Work" >}}

These are two distinct buildings that form a paired system.

**Solar Sail** is a small, passive object that orbits your star. It has no inventory, no fuel cost, and no power draw. Its only job is to reflect stellar radiation outward.

**Ray Receiver** is a planetary building. Placed on any planet in the same system as your sails, it absorbs reflected radiation and converts it into energy.

{{< diagram "solar-sails-diagram.svg" "Solar Sail orbit and Ray Receiver collection system" "700" >}}

The two buildings are not optional. Sail without receivers and you're just lighting up empty space. Receivers without sails: zero input, zero output.

---

{{< section "Step 1: Unlock and Build Vertical Launchers" >}}

Before anything enters orbit, you need the **Vertical Launcher** — unlocked at the **Photon Network** technology tier.

**What you'll need to make one Solar Sail:**

{{< recipe name1="graphene" qty1="2x" result="solar-sail" rqty="1x" >}}

Graphene comes from Coal + Oil in a Refining chain, or from Fire Ice on cold planets.

**Launcher placement:** Vertical Launchers are placed on any planet's surface, aimed at the local star. They don't need line-of-sight — the sail trajectory is calculated automatically.

**Launcher specs (v0.10):**
- Sail launch rate: 1 sail per 0.5 seconds
- Buffer capacity: 30 sails
- Power draw: 240 kW during launch

Keep a stack of Solar Sails in the launcher's inventory. Set up an **Interstellar Logistics Station (ILS)** nearby to auto-replenish the sail buffer.

---

{{< section "Step 2: Launch Your First Sail Orbit" >}}

The key concept: **orbit is not automatic**. Sails need to be launched in a stable pattern to maintain a coherent shell.

### The Manual Approach (for your first test)

1. Place a **Vertical Launcher** on your home planet
2. Manually load 6–10 Solar Sails into the launcher
3. Click the launcher and set it to **Auto-Launch**
4. Watch the orbital view — sails appear as small blue dots circling the star
5. Place a **Ray Receiver** on the same planet
6. The receiver starts collecting from whatever sails are in orbit

### The Stable Orbit Threshold

A "working" sail network for one Ray Receiver needs roughly **6–10 sails** in orbit. Below that threshold, the receiver idles. Above it, output climbs until it hits its per-receiver cap.

{{< diagram "solar-sail-threshold.svg" "Minimum sails needed for stable Ray Receiver output" "600" >}}

---

{{< section "Step 3: Build and Scale Ray Receivers" >}}

Ray Receivers are the power collection layer. A single receiver is never enough for late-game grids — you'll need an array.

### Receiver Placement Rules

- Must be placed on a **planet** — not in space
- Must be in the **same star system** as your active sail orbit
- No line-of-sight requirement — radiation travels through space
- Receivers can be planet-wide; they don't interfere with each other

### Energy vs. Photon Mode

Right-click a placed Ray Receiver to toggle between two modes:

**Energy Mode** feeds **14.4 MW** directly into your power grid (at full capacity).

**Photon Mode** outputs **Photonic Cells** at a rate of 1 per ~1.44 seconds. Photonic Cells feed into:
- Solar Fusion (produces Hydrogen and Deuterium)
- Adv. Refining chains
- Quantum Chip production (endgame)

{{< callout tip >}}
**Pro Tip** — Run receivers in **Energy mode** as your primary power. Switch a few to **Photon mode** only when you need Photonic Cells for production chains.
{{< /callout >}}

### Scaling the Array

One Ray Receiver saturates at its output cap. To scale:

{{< recipe name1="solar-sail" qty1="6-8x" result="ray-receiver" rqty="1x" >}}

**The ratio to aim for:** roughly 1 Ray Receiver per 6–8 Solar Sails in orbit. Overshoot on sails — it's better to have more radiation than receivers can absorb than to starve them.

---

{{< section "Step 4: Automate Sail Replenishment" >}}

Manual sail loading is a beginner trap. Here's how to automate the whole system.

### The ILS + Launcher Loop

1. Place an **ILS** near your Vertical Launcher
2. Set the ILS to **supply** Solar Sails
3. Set the Launcher to **Auto-Launch**

{{< diagram "sail-automation-loop.svg" "ILS to Vertical Launcher automation flow" "650" >}}

### Sail Replenishment Logic

Sails degrade over time. They exit orbit and burn up — the exact degradation rate depends on your star type. Budget for roughly **10–15% replenishment per minute**.

The practical fix: keep your sail production running continuously. If your launcher's auto-replenishment is active and your graphene supply is steady, degraded sails are naturally replaced.

### Backup Power

Ray Receivers shut down if your grid power hits zero. If a sail shortage causes a receiver blackout, your grid loses power, which can cascade into production shutdowns. **Always maintain a small coal or thermal backup** for grid stability while transitioning to solar.

---

{{< section "Late-Game Solar Sail Shells" >}}

The name of the endgame is the **Dyson sphere** — a full shell of Solar Sails surrounding your star.

The concept: instead of a handful of sails, you're launching thousands — enough to form a continuous shell. This enables truly massive power generation, the kind that fuels endgame production chains like Quantum Chips and Universe Matrix.

{{< callout >}}
**Late-game sail shell tips:**
- Build **multiple Vertical Launchers** on multiple planets
- Use **Planetary Logistics** to distribute sail production
- Ray Receivers on **inner planets** collect more efficiently
- A well-configured ILS network is critical — see our [ILS Setup Guide](/ils-setup-guide/)
{{< /callout >}}

For powering through the transition, our [Power Fix Guide](/power-fix-guide/) covers managing grid stability as you scale from coal to solar.

---

{{< section "Quick Reference" >}}

| Building | Mode | Output |
|---|---|---|
| Ray Receiver | Energy | 14.4 MW (at full sail network) |
| Ray Receiver | Photon | ~1 Photonic Cell / 1.44s |
| Vertical Launcher | — | 1 Sail / 0.5s, 30-sail buffer |
| Solar Sail | Orbital | Reflects stellar radiation (passive) |

**Recipe: Solar Sail**
{{< recipe name1="graphene" qty1="2x" result="solar-sail" rqty="1x" >}}

**Recipe: Graphene** (from Coal + Oil Refining)
{{< recipe name1="coal" qty1="1x" name2="refined-oil" qty2="1x" result="graphene" rqty="2x" >}}

**Key unlocks:** Photon Network tech → Vertical Launcher + Ray Receiver

---

{{< section "Bottom Line" >}}

Solar Sails and Ray Receivers are the bridge between planetary power and stellar-scale energy. Launch your first sails, get a single Ray Receiver running in Energy mode, then automate the replenishment loop with an ILS. From there, scale by adding more sails and more receivers — and switch a few receivers to Photon mode when you need Photonic Cells for late-game production.

The endgame sail shell is a different beast — but everything you need for it is covered by mastering the basics first.
