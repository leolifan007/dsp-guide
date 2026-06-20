---
title: "DSP Dark Fog Farming Guide (v0.10) - Keep One Base Alive for Infinite High-Tier Drops"
date: 2026-06-20T13:28:00+08:00
draft: false
version: "v0.10"
category: "Combat"
hidden: false
slug: "dark-fog-farming-guide"
lastmod: 2026-06-20T13:28:00+08:00
---



{{< diagram "diagrams/dark-fog-farming-guide.svg" "Top-down dark fog farming layout showing perimeter wall, turrets, and storage" "780" >}}
Destroying every Dark Fog base on a planet feels satisfying. It is also a mistake. A single surviving base at level 5+ drops components that cost hours of conventional production: Processors, Quantum Chips, Titanium Alloy, even Frame Material parts. Leave one base alive and design a kill zone around it.

Here is the farming layout: Surround the Dark Fog base with a perimeter wall and signal towers. Place 6-8 missile turrets behind the wall with ammunition belts feeding them. Use 2-3 laser turrets for point defense against flyers. The Dark Fog sends waves that attack the turrets, and the turrets kill them. Drops accumulate on nearby belts or in storage chests.

DSP Dark Fog Farm Layout (SVG): Top-down view showing base in center, perimeter wall with turrets, storage area outside wall, and belt system collecting drops.

## Level 5+ Is the Sweet Spot

Dark Fog bases level up over time. A level 1 base drops only basic components (Iron Ingots, Copper Ingots, Coal). Level 3 drops Circuit Boards and Silicon. Level 5+ drops Processors, Titanium Alloy, and Quantum Chips.

To reach level 5, the base must survive for roughly 30-60 minutes of real time without being destroyed. Defend against attack waves without destroying the base itself. The base levels up faster if you also raid it occasionally and let it rebuild -- each rebuild cycle adds a level.

Do not destroy the base's relay connections. The relay stations feed the base minerals from space. If you destroy them, the base cannot level up because it cannot build advanced structures.

## Defensive Perimeter Design

The perimeter wall should be 4 tiles away from the base's outermost structure. This prevents the base from expanding past the perimeter while staying close enough to trigger attack waves.

Wall configuration:
- Outer wall: 2-layer thick wall segments (Stone or Steel walls, 2 deep)
- Inner wall: Signal towers every 8 tiles along the perimeter
- Turret spacing: 1 missile turret every 4 segments, 1 laser turret every 8 segments
- Ammo: Missile turrets use the cheapest explosive ammo (not the high-damage variant). Dark Fog waves are numerous but fragile; volume of fire beats per-shot damage.

The [Dark Fog Combat Guide](/dark-fog-combat-guide/) has the detailed turret placement geometry for different base sizes.

## Drop Collection System

Dark Fog drops land on the ground near the turret line. Use belts running along the inside of the wall to collect drops. Sorters pick up items from the ground and place them on the belt.

Set up a belt loop that circles the entire perimeter. At one point, branch off into a storage/ILS area. Use storage chests as buffers and an ILS to export the drops to your logistics network.

Drops include:
- Level 3+: Circuit Boards, Crystal Silicon, Magnetic Coils
- Level 4+: Processors, Titanium Alloy, Particle Containers
- Level 5+: Quantum Chips, Frame Material components, Casimir Crystals
- Level 6+: Rare resources (Spiniform, Fractal Silicon)

The drops replace the need to build dedicated production lines for these items. A single level 5 Dark Fog farm produces roughly 30-50 Processors per hour -- not enough to replace your [Processor Factory](/processor-factory-guide/), but enough to supplement it.

## Managing Dark Fog Aggression

Keeping a base alive means managing its aggression. The base sends attack waves periodically. Each wave grows stronger as the base levels up. At level 5+, waves include ground troops, flying units, and occasional artillery.

Your defense must scale with the base level. Start with 3-4 turrets. Add 2 more turrets per level after level 3. At level 5+, expand to 8-10 turrets with overlapping fields of fire.

Flyers (air units) ignore walls and attack turrets directly. Laser turrets are essential for anti-air because they cannot miss. Place 2 laser turrets per 3 missile turrets.

Use [Belt Throughput/Piler stacking](/belt-throughput-piler-guide/) on the ammo supply belt if the farm is large. The ammo consumption at level 5+ can exceed 30 rounds per second on a busy wave.

## Enemy Drops vs Conventional Production

Dark Fog farming is not a replacement for conventional production. It is a supplement that provides high-tier components without building the full production chain.

| Component | Farm at L5+/hr | Conventional production | Verdict |
|-----------|---------------|----------------------|---------|
| Circuit Boards | ~200/hr | Unlimited | Supplement only |
| Processors | ~50/hr | Unlimited | Supplement, good early boost |
| Quantum Chips | ~10/hr | Unlimited | Worth farming for early Chi |
| Titanium Alloy | ~80/hr | Unlimited | Good supplement for rockets |
| Casimir Crystals | ~5/hr | Unlimited | Minor supplement |

Use farmed components to bootstrap production lines. If your Processor factory is still being built, farmed Processors keep the science labs running. If your rocket fuel line is starved for Titanium Alloy, farmed alloy covers the gap.

## Farming Multiple Bases

A single planet can support 2-3 Dark Fog bases at different locations. Each base operates independently and can be farmed simultaneously. Build a separate perimeter and collection system for each base.

Do not connect multiple farm outputs into one belt. Keep them separate to prevent one base's wave from overwhelming the collection system and causing a jam. Each base gets its own storage chest and ILS.

The [Rare Resources Location](/rare-resources-location-guide/) scan helps here: farm bases on planets that also have rare veins, so you can collect both in one trip.

## When to Stop Farming

Farming becomes obsolete when your conventional production lines outpace the farmed output. Once your Processor factory produces 200+/min, the ~50/hr from farming is negligible.

At that point, destroy the base and reclaim the planet's surface for expansion. The reclaimed space is often valuable real estate, especially if the planet has good solar exposure or is close to your production cluster.

Destroy the base by overloading the perimeter. Build 20 missile turrets and fire continuously. The base cannot regenerate faster than 20 turrets can damage it. Alternatively, drop a single explosive payload directly on the base core.
