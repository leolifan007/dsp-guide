---
title: "DSP Orbital Collector Guide (v0.10) - 20 Collectors Per Gas Giant for Passive Resource Spam"
date: 2026-06-20T13:20:00+08:00
draft: false
version: "v0.10"
category: "Resources & Mining"
hidden: false
slug: "orbital-collector-strategy-guide"
lastmod: 2026-06-20T13:20:00+08:00
---



{{< diagram "diagrams/orbital-collector-strategy-guide.svg" "Orbital collector equatorial ring deployment on gas giant" "780" >}}
An Orbital Collector costs a bit of Titanium and 20 minutes of building time. Once deployed on a gas giant, it produces resources continuously with zero power, zero maintenance, and zero player attention. A fully saturated gas giant with 40 collectors produces more hydrogen and deuterium than any on-planet refinery complex.

Here is the layout: Gas giants support up to 40 Orbital Collectors in a single equatorial ring. Each collector taps up to 3 resource types (typically Hydrogen, Deuterium, and Fire Ice for gas giants; Deuterium and Fire Ice for ice giants). The output ships directly to your logistics network via the collector's built-in logistics storage.

DSP Orbital Collector Deployment Ring (SVG): Equatorial ring showing 40 orbital collector positions around a gas giant. Color-coded by resource output rates.

## How Many Collectors Per Giant

Each gas giant has a "resource density" stat shown in the star map. This determines how much each collector produces per second. A dense gas giant (4x+) with 40 collectors outputs:

- Hydrogen: 4-6 per second total
- Deuterium: 0.5-2 per second total  
- Fire Ice: 1-3 per second total

Ice giants trade Fire Ice for higher Hydrogen output. The exact values depend on the planet's procedural stats.

Do not place fewer than 20 collectors per gas giant. The orbital belt has 40 evenly spaced positions. Collectors on adjacent slots cover roughly 90 degrees of arc, meaning 20 collectors cover half the planet. Full coverage at 40 is optimal, but 20 is the minimum for a meaningful supply.

## Collector-to-ILS Pipeline

Each collector has its own logistics slot requesting warpers and supplying its collected resources. Configure every collector to:
1. **Request Warpers**: Minimum load 50. This lets the collector ship resources to off-world ILS stations.
2. **Local Supply mode**: Resources are available to any vessel within the same system.
3. **Remote Demand for Warpers**: The collector pulls warpers from your logistics network automatically.

The collector's own storage capacity is small (only 10 slots). Resources must be picked up by logistics vessels before storage fills up. If you notice collectors filling up and stalling, add more ILS stations at the receiving end with high demand priority.

The receiving ILS on your factory planet should be set to Remote Demand for Hydrogen, Deuterium, and Fire Ice. Use the [ILS Setup Guide](/ils-setup-guide/) to configure per-item priority correctly.

## Preventing the Hydrogen Overflow Catastrophe

Orbital Collectors produce Hydrogen continuously. Hydrogen is also produced as a byproduct of Oil Refining, Graphene production, and several other recipes. When hydrogen from both sources fills your logistics network, every ILS slot fills up with hydrogen. Other items cannot be transported through those stations.

This is the number one mid-game logistics killer. The solution:

1. Build a dedicated [Fractionator Loop](/fractionator-loop-guide/) near your orbital collector receiving station. The Fractionator converts hydrogen into deuterium, which is more valuable and has separate logistics channels.
2. Route overflow hydrogen into Thermal Generators. Burn it for power instead of letting it clog your network.
3. Isolate orbital collector hydrogen from refinery hydrogen. Use separate ILS networks with separate hydrogen storage.

The dedicated [Hydrogen Backup Fix](/hydrogen-backup-fix/) guide covers the overflow detection and consumption strategy in detail.

## Fire Ice Refinery

Fire Ice from gas giants needs processing on the ground. A Chemical Plant converts 1 Fire Ice into 1 Graphite and 2 Hydrogen.

Each orbital collector producing Fire Ice feeds roughly 2 Chemical Plants running at full speed. For 40 collectors, build 80 Chemical Plants on the receiving planet. The Graphite output feeds your steel production and graphene lines. The Hydrogen output merges with your existing hydrogen network (after overflow protection).

If your [Fire Ice and Deuterium Guide](/fire-ice-deuterium/) already has a cold-planet setup, route the orbital collector's Fire Ice output to that same processing line to share infrastructure.

DSP Fire Ice Processing Flow (SVG): Orbital Collector ?ILS (Remote Supply) ?Chemical Plant ?Graphite (belt to Steel) + Hydrogen (belt to Fractionator Loop).

## When to Build Orbital Collectors

Build your first collector as soon as you unlock the technology (after researching Purple Science). Even one collector on the nearest gas giant provides enough hydrogen to eliminate the early-game hydrogen shortage.

Build the full cluster of 40 after you have established:
- Stable Warper production (Green Science or [Green Science Deep Dive](/green-science-deep-dive-guide/))
- Your ILS network is operational across at least 2 systems
- You have several hundred logistics vessels in your network

Do not rush the full matrix of collectors before your logistics network can handle the throughput. A collector with full storage is a wasted collector.

## Ice Giants vs Gas Giants: Which to Prioritize

Ice giants produce no Fire Ice but more Hydrogen and Deuterium per collector. Gas giants produce all three resources. The decision depends on your current needs:

- **Hydrogen shortage** ?Ice giant (highest H2 per collector)
- **Deuterium shortage** ?Ice giant (but supplement with Fractionator loops)
- **Fire Ice shortage** ?Gas giant (only source of orbital Fire Ice)
- **Balanced supply** ?Gas giant (all three resources from one planet)

In practice, aim for one fully saturated gas giant for Fire Ice and one fully saturated ice giant for hydrogen/deuterium. This covers all three resource demands from two planets.
