---
title: "DSP Green Science Deep Dive (v0.10) - Casimir Crystals, Quantum Chips and Full Production Chain"
description: "Master Gravity Matrix (green science) production in Dyson Sphere Program. Complete chain from Casimir crystals to quantum chips, optimal proliferation strategies, and factory blueprints for 60 SPM."
date: 2026-06-09
publishDate: 2026-06-11T08:44:00+08:00
lastmod: 2026-06-09T22:11:00+08:00
hidden: true
type: post
tags: [green-science, gravity-matrix, casimir-crystals, quantum-chips, late-game, proliferation]
categories: [Science & Research]
slug: green-science-deep-dive-guide
---

{{< callout "info" >}}
**Short answer:** Green Science (Gravity Matrix) needs Casimir Crystals, Quantum Chips, and Graviton Lenses. The Casimir Crystal chain is the hardest - it consumes massive Hydrogen and Graphene. Build dedicated Hydrogen processing before scaling green science, or hydrogen backup will halt your entire factory.
{{< /callout >}}

Gravity Matrix is the fifth science tier. It unlocks Warpers (interstellar travel), Plane Smelters, Artificial Stars, and the endgame research tree. Green science is where factory design separates casual players from experts - the chain complexity rivals everything before it combined.

## The Three Pillars of Green Science

{{< section "Pillar 1: Casimir Crystals" >}}

Casimir Crystals are the most resource-intensive component in the entire green chain. Each crystal needs:

| Input | Quantity | Source |
|-------|----------|--------|
| Graphene | 2 | Fire Ice smelting or Graphite synthesis |
| Hydrogen | 2 | From oil refining or gas giant collectors |
| Titanium Ingot | 1 | Standard titanium smelting |

The graphene and hydrogen requirements create a feedback loop. Fire Ice smelting produces both Graphene and Hydrogen, which sounds perfect - but the hydrogen output never matches the Casimir demand.

{{< insight >}}
**Key insight:** One Casimir Crystal assembler running at full speed consumes 4 Hydrogen per second. A single Gas Giant Collector on a Hydrogen-rich gas giant produces roughly 0.3-0.5 Hydrogen per second. You need 8-12 orbital collectors per Casimir assembler. Plan your gas giant infrastructure BEFORE scaling green science.
{{< /insight >}}

{{< section "Pillar 2: Quantum Chips" >}}

Quantum Chips require the Processor production chain. This is already covered in the gameplay loop, but scaling matters:

| Component | Production Step | Buildings for 60 SPM |
|-----------|----------------|---------------------|
| Circuit Boards | Basic component | 6 assemblers |
| Processors | Circuit Board + Silicon | 8 assemblers |
| Quantum Chips | Processor + Casimir + Optical Grating | 10 assemblers Mk.III |

The Optical Grating Crystal requirement is the hidden cost. Each Quantum Chip needs 2 Optical Grating Crystals, which need Sulfuric Acid and Energetic Graphite. If your Sulfuric Acid supply is already tapped for Titanium Glass (purple science), adding more demand will strain your chemical plant setup.

{{< material "quantum-chip" >}} {{< material "processor" >}} {{< material "casimir-crystal" >}}

{{< section "Pillar 3: Graviton Lenses" >}}

Graviton Lenses are the simplest of the three. They need:

- 4 Energetic Graphite
- 4 Diamond
- 1 Strange Matter

The Diamond demand compounds with purple science. If you are already using Diamonds for purple, green science doubles or triples your diamond requirement. Plan your Graphite and Organic Crystal supply accordingly.

## Proliferation Strategy for Green Science

Proliferation (Spray Coater) significantly reduces input costs for green science:

| Item | Without Proliferator | With Mk.III Proliferator | Savings |
|------|--------------------|------------------------|---------|
| Casimir Crystal input | 2 Graphene + 2 H2 | ~1.4 Graphene + 1.4 H2 | ~30% |
| Quantum Chip input | 1 Processor + 1 Casimir | ~0.7 Processor + 0.7 Casimir | ~30% |
| Gravity Matrix input | 1 Casimir + 1 Quantum + 1 Lens | ~0.7 of each | ~30% |

{{< callout "tip" >}}
**Pro tip:** Spray all input belts to Casimir Crystal assemblers with Mk.III proliferator first. The Casimir chain is the longest, so reducing its input cost has the highest multiplicative effect down the production line.
{{< /callout >}}

## Complete 60 SPM Green Science Factory

Build in this order to avoid bottlenecks:

{{< stepgroup >}}
{{< step "Gas giant collectors" >}}Deploy 20+ orbital collectors on a Hydrogen/Fire Ice gas giant{{< /step >}}
{{< step "Casimir Crystal line" >}}Build 6-8 assemblers with dedicated Hydrogen belt and Graphene input{{< /step >}}
{{< step "Processor expansion" >}}Add 4 more processor assemblers for quantum chip demand{{< /step >}}
{{< step "Quantum Chip line" >}}Chain Processors + Casimir + Grating into 8 assemblers{{< /step >}}
{{< step "Graviton Lens line" >}}Set up 4 assemblers fed by Graphite + Diamond + Strange Matter{{< /step >}}
{{< step "Gravity Matrix" >}}Feed all three outputs into 6 assemblers, proliferate outputs{{< /step >}}
{{< /stepgroup >}}

## Scaling Checklist

Before doubling your green science output, check these:

- [ ] Hydrogen supply from gas giants (need 2x more collectors)
- [ ] Fire Ice import from organic planets
- [ ] Sulfuric Acid production for Optical Grating Crystals
- [ ] Titanium ingot supply from off-world outposts
- [ ] Graphene production capacity

{{< callout "warning" >}}
**Hydrogen trap:** The most common green science failure is hydrogen backup. When your Casimir line stops producing, hydrogen backs up in your oil refineries, which stops refined oil, which stops everything. Always build a thermal power station burning excess hydrogen as a pressure release valve.
{{< /callout >}}

Struggling with hydrogen backup? Read our [DSP Hydrogen Backup Fix Guide](/hydrogen-backup-fix/) before scaling green science.

{{< resourcegrid >}}
{{< resourcecard name="DSP Wiki - Gravity Matrix" url="https://dsp-wiki.com/Gravity_Matrix" desc="Official recipe and production chain" >}}
{{< resourcecard name="Steam Guide - Production Chains" url="https://steamcommunity.com/sharedfiles/filedetails/?id=2373611284" desc="Community production chain layouts" >}}
{{< /resourcegrid >}}
