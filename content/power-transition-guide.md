---
title: "DSP Power Transition Guide (v0.10) - From Wind Turbines to Antimatter Without Blackouts"
description: "Master every power stage in Dyson Sphere Program. Complete guide to wind turbine placement, thermal power ratios, fusion plant setup, and antimatter self-sustaining loop. Never get a blackout again."
date: 2026-06-09
publishDate: 2026-06-11T15:52:00+08:00
lastmod: 2026-06-09T22:14:00+08:00

type: post
tags: [power, wind-turbine, thermal, fusion, antimatter, transition, early-game, mid-game]
categories: [Power & Energy]
slug: power-transition-guide
---

{{< callout "info" >}}
**Short answer:** Never skip power tiers. Wind turbines handle early game (build 20-30). Thermal generators power mid game with refined oil or coal (one refinery feeds 3 generators). Fusion plants carry late game (deuterium rods last 4+ hours per plant). Antimatter is endgame only - skip it until you have a stable Dyson Sphere producing critical photons.
{{< /callout >}}

Power is the single most common reason DSP factories stop. A blackout cascades - miners stop, belts stop, power generators starve, more things stop. Understanding each power tier and when to transition prevents hours of troubleshooting.

## Tier 1: Wind Turbines (Early Game)

Wind Turbines are your first power source. Each generates 300 kW continuously regardless of wind percentage on most planets. The key advantage is zero fuel cost and zero maintenance.

| Planet Type | Wind Turbine Output | Recommended Count |
|-------------|-------------------|------------------|
| Mediterranean | 200-350 kW | 20-30 for starting base |
| Arid Desert | 250-450 kW | 15-20 |
| Oceanic Jungle | 150-200 kW | 30-40 |
| Ice World | 300-500 kW | 10-15 |

{{< insight >}}
**Layout trick:** Place wind turbines along the edges of your base footprint in a double row. They take no space inside your factory and provide reliable baseline power. Build 30 before transitioning to thermal.
{{< /insight >}}

## Tier 2: Thermal Power (Early to Mid Game)

Thermal generators burn anything. The smartest fuel is refined oil byproducts or <a href="/coal-fire-ice-mining-guide/">coal from well-placed miners</a>.

### Fuel Efficiency Comparison

| Fuel | Energy Per Unit | Burn Time | Units Per Minute Per Generator |
|------|----------------|-----------|-------------------------------|
| Coal | 2.7 MJ | 6.75s | ~8.9 |
| Energetic Graphite | 6.3 MJ | 15.75s | ~3.8 |
| Refined Oil | 4.0 MJ | 10s | ~6.0 |
| Hydrogen | 7.5 MJ | 18.75s | ~3.2 |

Hydrogen is an efficient thermal fuel, but be aware that it can cause a <a href="/hydrogen-backup-fix/">hydrogen backup cascade</a> that stalls your entire oil processing chain if not properly managed.

{{< material "energetic-graphite" >}} {{< material "coal" >}}

The transition point is when you have 5+ thermal generators. Before that, wind turbines are cheaper. Build thermal generators in groups of 4, daisy-chained with conveyor belts. One Mk.I belt of Energetic Graphite feeds ~8 thermal generators.

{{< callout "warning" >}}
**Critical rule:** Never, ever put thermal generators on the same power grid as your coal miners. If the grid overloads, miners stop, coal stops, generators starve, chain reaction blackout. Build a dedicated wind turbine sub-grid for miners.
{{< /callout >}}

## Tier 3: Fusion Power (Mid to Late Game)

Fusion Power Stations are the biggest power jump in the game. One station with Deuterium Fuel Rods produces 10 MW + bonus from proliferation.

### Fusion Plant Economics

| Rod Type | Energy Per Rod | Burn Time | MW Output |
|----------|---------------|-----------|-----------|
| Deuterium Fuel Rod | 450 MJ | 45s at 10 MW | 10 MW |
| Deuterium Fuel Rod (Mk.III) | 585 MJ | 58.5s at 10 MW | 10 MW |
| Annihilation Constraint Rod | 750 MJ | 75s at 10 MW | 15 MW |

{{< section "Fusion Transition Checklist" >}}

Switch from thermal to fusion when:

- [ ] Your power demand exceeds 30 MW
- [ ] You have stable deuterium production (orbital collectors + fractionators)
- [ ] You have titanium supply for the rod production chain
- [ ] You have at least 4 Fusion Power Stations ready

Fusion plants do not suffer from the thermal cascade failure problem. They consume rods at a constant rate regardless of grid load. This makes them dramatically safer for factory-critical systems.

{{< stepgroup >}}
{{< step "Deuterium supply" >}}Set up orbital collectors on a Deuterium gas giant + fractionator array{{< /step >}}
{{< step "Rod production" >}}Build assemblers producing Deuterium Fuel Rods from Titanium + Deuterium{{< /step >}}
{{< step "Fusion stations" >}}Deploy 4 Fusion Power Stations, each running 1 rod at a time{{< /step >}}
{{< step "Phase out thermal" >}}Keep thermal as backup, let fusion carry the main load{{< /step >}}
{{< /stepgroup >}}

## Tier 4: Antimatter (Endgame)

Antimatter power is for Dyson Sphere builders only. The loop requires:

1. Dyson Sphere producing Critical Photons
2. Ray Receivers capturing photons
3. Particle Colliders converting photons to Antimatter + Hydrogen
4. Artificial Suns burning Antimatter Fuel Rods

One Artificial Sun with Antimatter Fuel Rods produces 75 MW. A single rod burns for approximately 3 minutes. With Mk.III proliferator applied to both the rod production and the fuel input, one rod lasts nearly 5 minutes.

{{< insight >}}
**Endgame tip:** Build the antimatter loop on a planet in the Dyson Sphere's orbit. Ray Receivers get 100% uptime inside the sphere. Ship Antimatter Fuel Rods out to your production planets via ILS. Never try to run Ray Receivers on planets outside the sphere - the efficiency loss is not worth it.
{{< /insight >}}

## Summary: When to Transition

| Power Tier | When | MW Range | Key Resource |
|------------|------|---------|--------------|
| Wind | First 30 minutes | 0-9 MW | None (free) |
| Thermal | After Red Science | 5-40 MW | Coal or Oil |
| Fusion | After Purple Science | 20-100 MW | Deuterium |
| Antimatter | After Dyson Sphere | 75-500+ MW | Critical Photons |

Skip no tier. Each transition is a stepping stone. The fastest path to stable power is: Wind -> Thermal (coal/graphite) -> Fusion -> Antimatter.

For a complete endgame power setup, see our [DSP Antimatter Power Guide](/dsp-antimatter-power-guide/).

{{< diagram "diagrams/power-transition-guide.svg" >}}

{{< resourcegrid >}}
{{< resourcecard name="DSP Wiki - Power" url="https://dsp-wiki.com/Power" desc="Complete power system mechanics" >}}
{{< resourcecard name="Steam Guide - Power Management" url="https://steamcommunity.com/sharedfiles/filedetails/?id=2373611284" desc="Community power optimization guides" >}}
{{< /resourcegrid >}}
