---
title: "DSP Interplanetary Factory Plan Guide (v0.10) - 5 Planets, 5 Jobs: The Ultimate Division of Labor"
date: 2026-06-20T13:26:00+08:00
draft: false
version: "v0.10"
category: "Logistics & Transport"
hidden: false
slug: "interplanetary-factory-plan-guide"
lastmod: 2026-06-20T13:26:00+08:00
---



{{< diagram "diagrams/interplanetary-factory-plan-guide.svg" "Interplanetary factory map showing 5 planets with ILS supply routes" "780" >}}
A single-planet factory in Dyson Sphere Program runs out of space around the time you unlock Purple Science. Expanding past that point requires dedicated planets: one for smelting, one for processors, one for science, one for rockets, and one for power. Spreading production across planets is not optional -- it is the only way to reach endgame scale.

Here is the no-regret planetary assignment: Home planet (or starter planet) ?Mall + initial research. Smelting planet ?All raw ore processing. Processor planet ?Circuit Boards, Crystal Silicon, Processors, Quantum Chips. Science planet ?All 6 colors + White Science. Rocket planet ?Frame Material, Deuteron Fuel Rods, Small Carrier Rockets. Power planet ?Solar panel array + Ray Receiver + Artificial Sun array.

DSP Interplanetary Factory Map (SVG): System view showing 5 planets with labeled icons. Arrows between them showing ILS supply routes. Ore ?Smelting ?Processor ?Science ?Rocket arrows.

## Planet 1: The Mall and Starter Base

Your planet of origin keeps the Mall (all building production) and initial research labs. The Mall produces belts, sorters, assemblers, smelters, and logistics buildings. These items are low-weight but essential.

Do not tear down your Mall when you expand. Instead, route raw materials from off-world ILS into the Mall's supply lines. The Mall becomes a consumer of processed goods rather than a producer of raw processing.

Keep the initial science labs running for early research. As you unlock White Science, the research function moves entirely to the Science planet. The Mall planet only handles building production after that point.

## Planet 2: The Smelting World

A dedicated smelting planet is the single best decision for scalability. This planet imports raw ore (Iron, Copper, Silicon, Titanium, Stone) and exports ingots. All smelting happens here using the standard [Smelting Array Blueprint](/smelting-array-blueprint-guide/).

The smelting planet needs:
- 30+ Mk.III smelters for each ore type
- Dedicated ILS output for each ingot type
- Abundant power (either a ring of solar panels or an Artificial Sun array)
- [Piler stacking](/belt-throughput-piler-guide/) on all export belts to handle high throughput

The smelting planet exports to every other planet. Every planet in your network requests ingots, not raw ore. This reduces ILS traffic because ingots stack better (fewer trips per unit of material).

DSP Smelting Planet Layout (SVG): Planet grid with labeled zones for Iron, Copper, Silicon, Titanium smelting. ILS import at top, ILS export at bottom.

## Planet 3: The Processor and Component World

This planet takes ingots from the smelting world and produces Circuit Boards, Crystal Silicon, Processors, and Quantum Chips. It exports Processors and Quantum Chips to the Science and Rocket planets.

Specific builds:
- [Processor Factory](/processor-factory-guide/): 200+ Processors per minute
- Quantum Chip line: 60+ per minute
- Microcrystalline Component line for science
- Casimir Crystal production for Green Science

If your [Rare Resources Location](/rare-resources-location-guide/) scan found Fractal Silicon, route it to this planet. The Crystal Silicon production simplifies dramatically.

## Planet 4: The Science World

The Science planet consumes Processors, Quantum Chips, and all colored science ingredients to produce White Science. This is a late-game-only planet; do not build it until you are ready for Universe Matrix production.

Build in this order:
1. Energy Matrix production (fire ice + graphite)
2. Blue Science (magnetic coils + circuit boards)
3. Red Science (hydrogen + oil products)
4. Yellow Science (titanium + stone products)
5. Purple Science (processors + particle containers)
6. Green Science (quantum chips + casimir crystals)
7. White Science (all 6 matrices + antimatter)

Each color gets its own planetary zone. Route the outputs through an ILS network to the White Science labs. Configure the [White Science lab stack](/white-science-universe-matrix-guide/) in the center of the planet for shortest belt distances.

## Planet 5: The Rocket Factory

The Rocket planet imports Titanium Alloy, Carbon Nanotubes, Processors, and Quantum Chips. It produces Frame Material, Deuteron Fuel Rods, and Small Carrier Rockets. These go directly to the Dyson Sphere launch sites.

Build the [Frame Material and Rocket Factory](/frame-material-rocket-factory-guide/) near the equator for easy vessel access. The Rocket Silo must be within the planet's atmosphere (anywhere on the planet works, but equator minimizes belt runs from support production zones).

This planet also hosts your Fractionator arrays. A 30-unit Fractionator Loop per rocket silo provides enough Deuterium for continuous launch operations.

## Power Planet: Sustain All of the Above

A dedicated power planet covered in solar panels and Ray Receivers generates the energy for your interplanetary empire. The power planet does not need to be in the same system as your production planets. It just needs to connect via ILS for antimatter fuel rod delivery.

Build in phases:
1. Phase 1: Equatorial solar belt (covers base 20-50 MW)
2. Phase 2: Thermal generator bank burning excess hydrogen (50-150 MW)
3. Phase 3: Artificial Suns burning Deuteron Fuel Rods (100-500 MW)
4. Phase 4: Artificial Suns burning Antimatter Fuel Rods (500 MW+)

Each power planet can support roughly 3-4 production planets at full capacity.

## ILS Network: The Glue

Every planet needs at least 2 ILS stations at each import/export zone: one for incoming materials (set to Remote Demand) and one for outgoing materials (set to Remote Supply). Configure warper slots on all stations -- production planets need warpers to receive items from other systems.

The logistics vessel count scales with distance. For in-system transport (< 5 AU), 20-30 vessels suffice. For inter-system transport, 50+ vessels per route prevent cargo backlog.

The Interplanetary Logistics Guide has the full vessel allocation strategy.

## Expansion Path: When to Add More Planets

Add a new planet when any existing planet's belt coverage exceeds roughly 60% of its surface. At that point, the belt sprawl becomes unmanageable, and the UPS cost of rendering thousands of belt segments exceeds the cost of a new ILS chain.

Typical expansion order: Starter ?Smelting ?Processor ?Science ?Rocket ?Power ?Smelting #2 (same function, new planet) ?Science #2.
