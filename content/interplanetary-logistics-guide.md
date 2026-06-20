---
title: "DSP Interplanetary Logistics Guide (v0.10) - Warper Economics and Vessel Management for Endgame"
description: "Master interplanetary logistics in Dyson Sphere Program. Complete guide to ILS vessel management, warper production ratios, fuel economics, drone vs vessel routing strategies, and scaling logistics for 60+ SPM factories."
date: 2026-06-09
publishDate: 2026-06-13T10:22:00+08:00
lastmod: 2026-06-09T22:23:00+08:00

type: post
tags: [logistics, ils, vessels, warper, interplanetary, drones, transportation, late-game]
categories: [Logistics & Transportation]
slug: interplanetary-logistics-guide
---

{{< callout "info" >}}
**Short answer:** One ILS with 3 Logistics Vessels handles ~60 items/min over 5 light years. Each trip uses 1 Warper per vessel per jump. For 60 SPM factories, allocate 1 Warper chemical plant per 5 ILS towers. Set demand on the home planet's ILS, supply on remote outposts. Never set both on the same tower.
{{< /callout >}}

Interplanetary logistics is the backbone of every mid-to-late game DSP factory. Moving materials between planets efficiently determines whether your factory scales cleanly or becomes a congested mess. This guide covers the economics, the routing, and the common mistakes.

## Vessel Economics

Logistics Vessels operate on a simple principle: they carry items between ILS towers on different planets.

| Vessel Stat | Base | With Mk.III Proliferator (Fuel) |
|------------|------|--------------------------------|
| Cargo Capacity | 100 | 100 |
| Speed (base) | 400 m/s | 520 m/s |
| Warper per trip | 1 | 1 (can be proliferated) |

The cost per trip is always 1 Warper regardless of distance. This means short hops are expensive per-item while long hauls are cheaper per light year. Optimize by batching: a single vessel carrying 100 items costs 1 Warper. Splitting into 2 vessels costs 2 Warpers.

{{< material "warper" >}} {{< material "logistics-vessel" >}}

{{< insight >}}
**Cost-saving trick:** For planets within the same system (planet-to-planet, not star-to-star), vessels do not need Warpers. Use this for your first two planets. Only use Warpers for interstellar routes. This alone cuts your Warper consumption by 60% in the mid game.
{{< /insight >}}

## Warper Production Scaling

Each ILS tower needs Warpers in its warper slot. The Warper production chain is:

| Step | Input | Output | Buildings for 60/min |
|------|-------|--------|---------------------|
| Gravity Lens | 4 Graphite + 4 Diamond + 1 Strange Matter | 1 Lens | 4 assemblers |
| Warper | 1 Gravity Lens + 1 Processor | 5 Warpers | 3 assemblers Mk.II |

One assembler producing Warpers from Gravity Lenses makes 5 Warpers every 6 seconds. That is 50 Warpers per minute per assembler. One assembler running full time supplies ~50 ILS towers.

| Factory Size | Warpers Needed | Assemblers Required |
|-------------|---------------|-------------------|
| Small (10 ILS) | ~0.5/min | 1 (runs 1% of the time) |
| Medium (30 ILS) | ~1.5/min | 1 (runs 3% of the time) |
| Large (100 ILS) | ~5/min | 1 (runs 10% of the time) |

{{< callout "tip" >}}
**Under-estimated cost:** Most players over-build Warper production. One assembler with Mk.III assembler speed upgrade produces enough Warpers for 100+ ILS towers. Build exactly 1 Warper assembler and let it run. The belts will saturate and the assembler will auto-throttle.
{{< /callout >}}

## Routing Strategy

{{< section "The Supply-Demand Rule" >}}

Every ILS route must follow this rule exactly:

| ILS Type | Slots | Direction | Example |
|----------|-------|-----------|---------|
| Supply | Remote outpost | Output slots set to Supply | "Send Titanium Ore" |
| Demand | Factory planet | Input slots set to Demand | "Receive Titanium Ore" |
| Supply+Demand | Balanced planet | Some Supply, some Demand | Rare (planets that both send and receive) |

Never set the same slot to both Supply and Demand. This creates vessel ping-pong where ships waste Warpers traveling empty between planets.

{{< section "Vessel Count Optimization" >}}

Each ILS has a default of 3 vessel slots. Increase this only when:

- Your factory consumes >60 items/min of a single resource
- The resource travels >10 light years
- The resource is bulky (Titanium Ore, Stone)

For most resources, the default 2-3 vessels per ILS are sufficient. Over-allocating vessels wastes power and Warpers.

| Resource | Vessels Needed | Why |
|----------|---------------|-----|
| Titanium Ore | 4-6 | High volume, from early outposts |
| Silicon Ore | 3-4 | High volume, similar to titanium |
| Processors | 1-2 | Low volume, high value |
| Antimatter Rods | 1-2 | Very low volume, very high value |
| Warpers | 1 | Single vessel is enough forever |

## Common Mistakes

1. **Oversized logistics stations** - Use the Planetary Logistics Station (PLS) for intra-planet transport. ILS is over-kill and wastes power. Choosing between <a href="/logistics-drones-vs-belts-guide/">logistics drones and conveyor belts</a> for planet-side transport depends on your factory layout and throughput needs.
2. **No Warper slot configured** - ILS without Warpers in the special slot cannot make interstellar trips, causing mysterious supply failures
3. **Identical station names** - Name each ILS by what it does ("Titanium Mining Outpost - North") for debugging
4. **All vessels on one planet** - Vessel travel time increases exponentially with distance. Distribute ILS towers across planets. Overloaded vessel routes cause significant throughput issues - learn how to diagnose and resolve them in our <a href="/ils-drone-congestion/">ILS drone congestion guide</a>.

{{< stepgroup >}}
{{< step "Build Warper line" >}}One chemical plant making Warpers, fed by processor + gravity lens{{< /step >}}
{{< step "Set supply ILS" >}}On mining planets, set ore slots to Supply, add Warpers{{< /step >}}
{{< step "Set demand ILS" >}}On factory planet, set matching slots to Demand, add Warpers{{< /step >}}
{{< step "Monitor stats" >}}Check ILS vessel activity tab - empty trips mean routing errors{{< /step >}}
{{< /stepgroup >}}

For ILS basics and setup, check our [DSP ILS Setup Guide](/ils-setup-guide/).

{{< diagram "diagrams/interplanetary-logistics-guide.svg" >}}

{{< resourcegrid >}}
{{< resourcecard name="DSP Wiki - Logistics" url="https://dsp-wiki.com/Interstellar_Logistics_Station" desc="ILS mechanics and vessel behavior" >}}
{{< resourcecard name="Steam Guide - Logistics Network" url="https://steamcommunity.com/sharedfiles/filedetails/?id=2373611284" desc="Community logistics routing strategies" >}}
{{< /resourcegrid >}}
