---
title: "DSP Frame Material & Rocket Factory Guide (v0.10) - 10 Rockets/min From a Single Planet"
date: 2026-06-20T13:14:00+08:00
draft: false
version: "v0.10"
category: "Endgame"
hidden: false
slug: "frame-material-rocket-factory-guide"
lastmod: 2026-06-20T13:14:00+08:00
---



{{< diagram "diagrams/frame-material-rocket-factory-guide.svg" "Full production chain from raw ores to small carrier rockets" "780" >}}
A Dyson Sphere consumes thousands of Small Carrier Rockets. Each rocket needs Frame Material, which needs Titanium Alloy, Carbon Nanotubes, and Deuteron Fuel Rods. Building them at scale requires a dedicated factory planet with a carefully balanced supply chain.

Here is the production chain: Titanium Ore ?Smelt into Titanium Ingot ?Combine with Steel for Titanium Alloy. Coal + Graphene ?Carbon Nanotube. Hydrogen ?Fractionator Loop ?Deuterium ?Deuteron Fuel Rod. Both intermediate parts plus Processor and Quantum Chip ?Frame Material ?Small Carrier Rocket.

DSP Small Carrier Rocket Full Production Chain (SVG): Raw Ores ?Intermediate Parts ?Frame Material ?Rockets. Arrows show item flow with per-minute quantities.

## Frame Material: The Real Bottleneck

Frame Material requires Titanium Alloy (4), Carbon Nanotubes (4), and Processor (1) per craft. A single Mk.III assembler with Mk.III proliferator produces roughly 2 Frame Material per second. Each Small Carrier Rocket needs 2 Frame Material plus 2 Deuteron Fuel Rods and 1 Quantum Chip.

To produce 10 Rockets per minute, you need 20 Frame Material per minute. That requires 80 Titanium Alloy, 80 Carbon Nanotubes, and 20 Processors per minute as inputs. Each of those inputs has its own multi-step production chain.

Titanium Alloy production is often the first bottleneck. Titanium Alloy is smelted from Titanium Ingot + Steel in a Smelter. To sustain 80 Titanium Alloy per minute, you need roughly 160 Titanium Ingot and 80 Steel per minute. A standard [Smelting Array Blueprint](/smelting-array-blueprint-guide/) feeding Mk.III belts handles the titanium smelting, but you need a dedicated steel line as well.

DSP Titanium Alloy Smelting Setup (SVG): Titanium Ore Belt ?Mk.III Smelter Row (8+ units) ?Titanium Ingot Belt. Steel Belt ?Combine with Titanium Ingot ?Mk.III Smelter Row ?Titanium Alloy. Three belts in, one belt out.

## Carbon Nanotubes: Choose Your Route

Carbon Nanotubes have two production methods. The default Graphene recipe needs 3 Graphene per tube, consuming huge quantities of Graphite. The alternative recipe uses Fire Ice and Graphene, cutting the Graphene demand roughly in half.

If your planet has access to Fire Ice through an ILS delivery from a gas giant or an ice giant [Orbital Collector](/orbital-collector-strategy-guide/), use the hybrid recipe. If you are relying on coal-to-graphite Graphene, build extra Chemical Plants.

The raw material cost for 80 Carbon Nanotubes per minute:
- Default recipe: 240 Graphene/min ?840 Graphite/min ?~20 Coal Veins fully mined
- Fire Ice recipe: 80 Fire Ice + 80 Graphene/min ?280 Graphite/min + Orbital Collector supply

## Deuteron Fuel Rods: The Fractionator Connection

Each Small Carrier Rocket consumes 2 Deuteron Fuel Rods. At 10 Rockets per minute, that is 20 Fuel Rods per minute. Each Fuel Rod requires 10 Deuterium and 2 Titanium Ingot.

20 Fuel Rods per minute = 200 Deuterium per minute = 3.3 Deuterium / second. A 30-unit [Fractionator Loop with Piler Stacking](/fractionator-loop-guide/) produces roughly 36 Deuterium / second, which is 10x what you need for rockets alone.

This means your Fractionator loop built for rocket fuel also handles the Deuterium demand for Artificial Suns. A single properly built loop covers both.

DSP Deuteron Fuel Rod Assembly (SVG): Deuterium + Titanium Ingot ?Mk.II Assembler ?Deuteron Fuel Rods. Show 3 assemblers for 20/min with proliferator bonus.

## Quantum Chip Supply

Each Rocket needs 1 Quantum Chip. Quantum Chips require Processors and part of the [Purple Science](/purple-science-production-guide/) production chain. A dedicated Quantum Chip line feeding the rocket factory prevents competition with other builds.

Build 2 Mk.III assemblers for Quantum Chips, set to Mk.III proliferator spray. That produces roughly 6 Quantum Chips per second, enough for 360 Rockets per minute (far above the 10/min target, but it means you can scale up later).

## Rocket Silo Configuration

Small Carrier Rockets are built in the Rocket Silo (not an assembler). The Silo has 5 input slots: Frame Material, Deuteron Fuel Rod, Quantum Chip, and two optional slots for proliferator.

The Silo also requires Dyson Sphere components (Solar Sails) to launch. Route a separate belt of Solar Sails to each Silo. A single Mk.III belt carries 30 sails/second, enough to feed approximately 5 Silos at full fire rate.

Feed Mk.III proliferator into both remaining slots. The production speed bonus applies to rocket construction, reducing build time and increasing the rate at which your Silo launches.

## Where to Build

The rocket factory is a perfect candidate for a dedicated planet. It requires:
- Titanium (planet-side veins or ILS import)
- Steel (planet-side iron + smelting or import)
- Fire Ice or Graphene
- Processors (import from your [Processor Factory](/processor-factory-guide/))
- Hydrogen (for the Fractionator loop)
- Coal (for Graphite and Nanotube byproducts)

Build everything on one planet to minimize ILS traffic. Import only Processors and Fire Ice through logistics. Everything else can be mined and processed on-site.

Your [Interplanetary Factory Plan](/interplanetary-factory-plan-guide/) should designate this as the dedicated rocket world, with all supporting production on adjacent planets in the same system to keep transport distances short.
