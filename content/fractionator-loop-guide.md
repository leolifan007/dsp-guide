---
title: "DSP Fractionator Guide (v0.10) - Stack Pilers to Get 10x Deuterium in the Same Space"
date: 2026-06-20T13:09:00+08:00
draft: false
version: "v0.10"
category: "Resources & Mining"
hidden: false
slug: "fractionator-loop-guide"
lastmod: 2026-06-20T13:09:00+08:00
---



{{< diagram "diagrams/fractionator-loop-guide.svg" "Fractionator loop with priority splitter, piler chain, and deuterium output" "780" >}}
Key output rates at each stack level:
- No stacking: 0.3 D/s per Fractionator (30 H2/s input, 1% conversion)
- 2-stack: 0.6 D/s per Fractionator (double belt throughput)
- 3-stack: 0.9 D/s per Fractionator (triple throughput, needs 2 Pilers)
- 4-stack: 1.2 D/s per Fractionator (4x throughput, needs 4 Pilers)

A single Fractionator loop without Pilers churns out less than 1 Deuterium per second even on a full Mk.III belt. Stack four Pilers in series, and that same loop pushes 30 Deuterium per minute -- 10x the output from the same footprint. No Particle Collider power bill, no ice giant orbiters, just a smarter loop.

Here is the layout: Hydrogen enters the loop from an ILS, runs through a priority Splitter that forces loop-back hydrogen first, passes four stacker Pilers in series, feeds the Fractionator row, and any unconverted hydrogen cycles back through the Splitter. The [Belt Throughput and Piler Guide](/belt-throughput-piler-guide/) covers the exact Piler spacing for maximum stack efficiency. The Deuterium output goes to a dedicated ILS.

DSP Fractionator Process Flow (SVG): A Belt Runs in a Loop, Fractionators Tap 1% per Pass, Deuterium Exits Here.

## One Percent Per Pass -- The Math That Demands Stacking

Every Fractionator converts exactly 1% of the hydrogen that passes through it into Deuterium. With no stacking, a Mk.III belt moves 30 hydrogen per second, so each Fractionator averages 0.3 Deuterium per second. A row of 10 Fractionators running a single loop produces roughly 3 per second.

That sounds reasonable until you realize the late-game hunger: Deuteron Fuel Rods for Artificial Suns chew through 12 Deuterium per second for a single Mk.III assembler. The gap is enormous, and the usual reaction is to build more Fractionators. More belts. More floors. More space.

The Piler eliminates that sprawl. An Automatic Piler doubles the stack count on a belt segment, up to the max of 4 per slot. A Mk.III belt at full 4-stack carries the equivalent of 120 items per second through the belt's item-processing logic. Each Fractionator now sees 120 potential conversions per second, yielding 1.2 Deuterium per second per machine. Ten Fractionators on a stacked loop produce 12 per second.

DSP Piler Stacking Comparison (SVG): Mk.III Belt at 4-stack vs Mk.III Belt at 1-stack, Floor Space Used, Deuterium Output / minute.

## The Correct Loop Design (Stop the Clogs)

The single biggest mistake players make with Fractionators is the loop itself. A naive loop feeds Fractionators, collects the Deuterium, and dumps the unconverted hydrogen back into the belt. The problem: new hydrogen from the ILS mixes with the returned hydrogen, and without priority logic, the loop eventually fills up with hydrogen that has already been processed once.

The fix is a priority Splitter at the top of the loop.

DSP Fractionator Loop Priority Splitter (SVG): ILS Output ?Splitter ?Piler Chain ?Fractionators ?Return to Splitter (Priority Input) ?Excess to Thermal Generator.

Set the Splitter to prioritize the loop-back hydrogen. Configure it so that the Input 1 (return hydrogen) takes precedence over Input 2 (fresh hydrogen from ILS). This guarantees that hydrogen cycles through the Fractionators multiple times before being replaced. Fresh hydrogen only enters when the return line has free capacity.

## Piler Chain: Four Stackers in Series Is the Magic Number

Each Piler doubles whatever stack count it finds on the belt. A single Piler turns 1-stack into 2-stack. A second Piler turns 2-stack into 4-stack. Two more Pilers do nothing more because 4 is the hard cap.

Practical sequence: Piler 1 ?Piler 2 ?Piler 3 ?Piler 4, all in a straight line before the hydrogen reaches the first Fractionator. Four Pilers require 4 tiles of belt length (one tile between each Piler is optional but recommended for belt pathing).

Use Mk.III belts for the entire loop. Mk.I or Mk.II belts become the bottleneck because even with stacking, the underlying belt speed limits physical item movement.

## Fractionator vs Particle Collider: When to Use Each

Fractionators win on energy efficiency. A single Fractionator draws 720 kW. A Particle Collider draws 12 MW for the same Deuterium output when using the conversion recipe. That is 16x the power for the same production rate.

Particle Colliders win on compactness and directness. One Collider produces 2 Deuterium per second from 4 Hydrogen per second, no loop design required. If you have power to spare and space is tight, Colliders are the easier build.

The best strategy is both: Fractionator loops on the main factory planet for steady, low-power production, supplemented by Colliders when a burst of Deuterium is needed for rocket fuel or antimatter fuel rod production.

DSP Fractionator vs Particle Collider Comparison (SVG): Energy Cost per Deuterium, Space per Deuererium / second, Build Complexity, Recommended Phase.

## Practical Blueprint: 30 Fractionator Loop

For a production-scale loop, aim for 30 Fractionators in a single loop. This fits comfortably on one planetary grid square (roughly 10x3 tiles). With a full Mk.III belt at 4-stack, 30 Fractionators convert roughly 36 Deuterium per second -- enough to feed 3 Deuteron Fuel Rod assemblers at full speed.

The ILS at the input end requests hydrogen. The ILS at the output end supplies Deuterium. The loop's Splitter connects to a thermal generator array at the overflow output to burn any excess hydrogen that cannot fit back into the loop.

If Deuterium demand drops, the overflow burning prevents the loop from stalling. If demand spikes, fresh hydrogen from the ILS fills the gap instantly.

## Where This Fits in Your Factory

Deuterium feeds three major late-game chains:

\* Deuteron Fuel Rods for Artificial Suns (endgame power)
\* Small Carrier Rockets (Dyson Sphere construction)
\* Gravity Matrix research (purple science)

Build your Fractionator loop before or alongside your Particle Collider setup. If your hydrogen supply keeps backing up and stalling the loop, the [Hydrogen Backup Fix](/hydrogen-backup-fix/) guide has the overflow-burn solution. The power savings from Fractionators free up megawatts for other production lines, especially when you are still running on fusion or solar and have not yet transitioned to antimatter power.

If your gas giant has orbital collectors feeding hydrogen, route a dedicated ILS to the Fractionator loop. The [Orbital Collector Strategy Guide](/orbital-collector-strategy-guide/) shows how to saturate a gas giant with 40 collectors for a stable hydrogen supply. Orbital collectors produce hydrogen faster than any on-planet refinery, and the Fractionator loop is the most efficient way to turn that hydrogen into deuterium.

Once the loop is running, spray Mk.II or Mk.III proliferator on the hydrogen entering the loop. The production speed bonus applies to the Fractionator conversion, boosting Deuterium output by a further 25% or 50% without any extra machines.

