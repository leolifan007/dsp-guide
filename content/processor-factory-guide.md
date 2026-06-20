---
title: "DSP Processor Factory Guide (v0.10) - 200 Processors/min With Proliferator and Fractal Silicon"
date: 2026-06-20T13:24:00+08:00
draft: false
version: "v0.10"
category: "Science & Production"
hidden: false
slug: "processor-factory-guide"
lastmod: 2026-06-20T13:24:00+08:00
---



{{< diagram "diagrams/processor-factory-guide.svg" "Processor production chain from raw ores through circuit boards to final assembly" "780" >}}
Processors (the Mk.I version, not Quantum Chips) are the backbone of mid-to-late-game production. Every Purple Science lab, every Quantum Chip assembler, every logistics station, and every Frame Material craft needs Processors. A shortage of Processors causes a cascade effect across your entire factory.

Here is the production math: Each Mk.III assembler with Mk.III proliferator produces roughly 1.5 Processors per second. Each Processor needs 2 Circuit Boards and 2 Crystal Silicon. Circuit Boards need 2 Iron Ingots and 1 Copper Ingot each. Crystal Silicon needs 2 Silicon Ingots each (or 1 Fractal Silicon with the rare recipe).

DSP Processor Production Chain (SVG): Raw ores ?Smelted ingots ?Circuit Boards + Crystal Silicon ?Processor. Per-minute quantities for 200/min target.

## 200 Processors Per Minute: The Full Bill of Materials

Target: 200 Processors per minute.

- Processors needed: 200/min
- Crystal Silicon needed: 400/min
- Circuit Boards needed: 400/min
- Iron Ingots needed: 800/min (400 * 2)
- Copper Ingots needed: 400/min (400 * 1)
- Silicon Ingots needed: 800/min (400 * 2, or 400/min with Fractal Silicon)

Without Fractal Silicon, this requires roughly 30 smelters for Silicon, 30 for Iron, and 15 for Copper. With Fractal Silicon, the Silicon requirement drops to 200/min, halving the smelter count.

DSP Processor Factory Floor Plan (SVG): Grid layout showing smelter rows feeding assembler rows. ILS supply at top, ILS demand at bottom. Belt routing for each intermediate.

## The Fractal Silicon Shortcut

If you have found [Fractal Silicon](/rare-resources-location-guide/) on an Ash or Desert planet, the Crystal Silicon recipe changes. Instead of smelting raw Silicon Ore into ingots, you can process Fractal Silicon directly. The ratio is 1 Fractal Silicon ?6 Crystal Silicon in a Chemical Plant.

This is a massive reduction in infrastructure. Where the standard recipe needs a full smelter row just for Silicon, the Fractal recipe needs a single Chemical Plant per 6 Crystal Silicon per second. The footprint savings free up real estate on your Processor planet for more assemblers.

Import Fractal Silicon via ILS from your mining outpost. Build the Chemical Plants directly next to the receiving ILS to minimize belt runs.

## Circuit Board Production Layout

Circuit Boards need Iron Ingots and Copper Ingots. The formula is 2 Iron + 1 Copper = 2 Circuit Boards. This means the input ratio is 2 Iron : 1 Copper by ingot count.

For 200 Processors/min, you need 400 Circuit Boards/min. Build 4 Mk.III assemblers for Circuit Boards. Each assembler needs roughly 4 iron ingot smelters and 2 copper ingot smelters feeding it.

Design the smelter arrays using the standard 3-smelter-per-belt [Smelting Array Blueprint](/smelting-array-blueprint-guide/). Route the iron output belt to the Circuit Board assemblers and also to a secondary belt for Crystal Silicon's Silicon Ore input.

## Proliferator Spray Priority on Processors

Processors are one of the top 5 items for [Proliferator ROI](/proliferator-priority-roi-guide/). Spray the final Processor output with speed proliferator for 2x the output per assembler. Spray the Circuit Board and Crystal Silicon inputs for additive compounding.

The compounding effect: spraying Circuit Boards increases their output by 25% (Mk.II) or 100% (Mk.III). Since Processors consume Circuit Boards, this means fewer Circuit Board assemblers needed. The savings cascade back to Iron and Copper ore consumption.

Actual savings from full Mk.III proliferation on a 200/min Processor line: roughly 30 fewer smelters, 6 fewer assemblers, and 400 less ore per minute.

## Processor Output Distribution

Processors feed multiple downstream production lines. Build your Processor factory with dedicated ILS outputs for:
- [White Science](/white-science-universe-matrix-guide/) production
- [Quantum Chip](/quantum-chips-proliferator/) assembly
- [Frame Material](/frame-material-rocket-factory-guide/) construction
- Purple Science (Structure Matrix)
- ILS / Logistics station construction (if you build on-site)

Set up separate ILS stations for each receiving factory. Each station requests Processors remotely. This prevents any single downstream line from starving others.

## Scaling Beyond 200/min

The Processor factory scales linearly. Double the assemblers, double the smelters, double the belt throughput. At 500+ Processors/min, belt throughput becomes the bottleneck without Piler stacking.

At this scale, switch to logistics for intermediate transport. Route Circuit Boards directly into the Processor assembler's ILS input rather than using belts. The ILS handles the throughput without the belt management overhead.

The dedicated Processor planet strategy comes into its own at 500+/min. Import Iron Ore, Copper Ore, and Silicon Ore (or Fractal Silicon). Export Processors. Everything else happens on-planet.

## Common Failure Points

1. **Silicon starvation**: Processors consume Silicon faster than most players expect. Check your Silicon ore vein capacity before committing to scale. A single Silicon vein with VU level 5 sustains roughly 100 Processors/min.

2. **Copper shortage**: Copper goes into Circuit Boards and Crystal Silicon production. If you are also building Quantum Chips, the combined Copper demand is enormous. Plan separate copper mining outposts.

3. **Sorter bottleneck**: Mk.II sorters pulling from mk.III belts cannot keep up with 4-item inputs. Upgrade to Mk.III sorters on all Processor-related belts.

4. **Belt merging dilution**: When merging multiple Circuit Board belts into one, use a Piler at each input before merging. Otherwise the merge point becomes the bottleneck at ~30/s.
