---
title: "DSP Research Lab Guide (v0.10) - Automate Red to Purple Science Without Hand-Feeding"
description: "Master research lab automation in Dyson Sphere Program. Full science pack chains from Red to Purple Science, lab spacing, power requirements, and the research tree priorities that unlock everything."
date: 2026-05-20
publishedAt: 2026-05-20T09:05:00+08:00
lastmod: 2026-06-05
type: post
tags: [research, labs, science-packs, red-science, yellow-science, green-science, blue-science, purple-science]
topics: [research, automation]
categories: [Science & Research]
featured_image: ""
slug: research-lab-automation-guide
---

Research is the clock in DSP. Every unlock — new buildings, new recipes, new logistics options — lives behind the research tree. And research lives behind science packs. If your science pack production is weak, your entire progression grinds to a halt.

This guide covers the complete science pack chain from Red Science to Purple Science, lab setup ratios, power requirements, and which research priorities actually matter for your factory's next phase.

---

{{< callout >}}
**TL;DR** — Each lab consumes science packs at 1/s. Build science pack assemblers first, then scale labs to match. Prioritize Red -> Yellow -> Green -> Blue -> Purple in order. Always automate science packs — hand-feeding labs is a trap that costs you hours.
{{< /callout >}}

---

{{< diagram "diagrams/research-lab-main.svg" "Complete science pack chain from Red to Purple Science packs — lab setup and research priorities" "780" >}}

---

{{< section "1 Lab, 1 Science Pack/s - No More, No Less" >}}

A **Research Lab** consumes science packs and outputs research progress. Each lab runs at 1/s base speed, consuming one science pack per second when researching.

Labs need **science packs** — not just any resource, but specific pack types that correspond to different branches of the tech tree.

**Lab specs:**
- 1 science pack consumed per second per lab (at 100% speed)
- Labs can be placed in a row — each adjacent lab is powered from the previous one
- Power draw scales with lab count
- Labs can research different items simultaneously — but each lab runs only one research at a time

---

{{< section "Red to Purple - What Each Science Pack Actually Needs to Produce" >}}

There are five science pack tiers, each with increasing production complexity.

### Red Science Packs (Tier 1)

The simplest science pack. Produced in an **Assembler** from Iron and Copper Ingots.

{{< recipe name1="iron" qty1="1x" name2="copper" qty2="1x" result="red-matrix" rqty="1x" >}}

One Red Science Assembler produces enough packs for 1-2 labs. For early game, two assemblers feeding into 4-6 labs is a solid starting setup.

### Yellow Science Packs (Tier 2)

Yellow Science introduces **Conveyor Modules** and **Electromagnetic Turbine** components.

{{< recipe name1="iron" qty1="2x" name2="copper" qty2="1x" result="yellow-matrix" rqty="1x" >}}

The key dependency chain is: Iron -> Gears -> Electromagnetic Turbine -> Yellow Science. See the Science Pack Chain diagram at the top of this article for the full visual breakdown.

You'll need a steady supply of Copper Ingots and Iron Ingots for Yellow Science. This is where smelting capacity starts to matter — if your iron production isn't scaled, Yellow Science will expose every bottleneck upstream.

### Green Science Packs (Tier 3)

Green Science requires components from the smelting and intermediate chains — including Conveyor Belts and Sorters.

{{< recipe name1="iron" qty1="1x" name2="conveyor-belt" qty2="1x" name3="sorter" qty3="1x" result="green-matrix" rqty="1x" >}}

**Key tip:** Build dedicated assemblers for belts and sorters as separate production chains. Don't try to share belt production between your factory logistics and science pack production — you'll constantly fight over the same belt lanes.

### Blue Science Packs (Tier 4)

Blue Science is the first major complexity jump. It requires **Refined Oil**, **Hydrogen**, and **Proliferator** products.

{{< recipe name1="oil" qty1="2x" name2="hydrogen" qty2="2x" name3="proliferator" qty3="1x" result="blue-matrix" rqty="1x" >}}

Blue Science production requires a working oil refining setup with hydrogen management. See our [Blue Science & Hydrogen Guide](/blue-science-hydrogen-refining/) for the full hydrogen byproduct solution before scaling Blue Science.

### Purple Science Packs (Tier 5)

Purple Science requires **Titanium Alloy** and **Crystal Silicon** — both mid to late-game materials.

{{< recipe name1="titanium-alloy" qty1="2x" name2="crystal-silicon" qty2="2x" result="i-matrix" rqty="1x" >}}

Titanium production requires Flame Smelting or a dedicated Titanium smelting column. Crystal Silicon requires refine recipes on silicon ore. This is a mid-game production challenge — start sourcing these materials before Purple Science becomes your bottleneck.

---

{{< section "Lab Row in 5 Minutes - The Standard 5-Lab Setup That Powers Your Early Game" >}}

### Standard Lab Row (5 Labs)

The most common early setup: 5 labs in a row, each fed by a science pack belt.

{{< diagram "diagrams/research-lab-row.svg" "Standard 5-lab row with science pack belt input and power daisy chain" "740" >}}

Each lab in the row is adjacent to the previous one, so power propagates across the row. You only need one power connection point.

**Power requirement:** 5 labs at full research speed draw significant power. Connect the row to a dedicated power grid — preferably fueled by Coal Power Plants early game, switching to Fuel Plants or Solar as you scale.

### Scaling Labs with Science Pack Supply

Labs consume packs at 1/s each. If you have 10 labs, you need 10 science packs/s feeding them. This means your science pack production must scale in exact proportion to your lab count.

**The math:**
- 1 Red Science Assembler ~ 1 science pack/5s = 0.2 science/s
- 5 labs = 5 science/s required
- 5 / 0.2 = 25 assemblers needed (per science type)

This is why most players dedicate entire factory sections to science pack production. The packs flow continuously; the labs run continuously. Stop the flow, stop the research.

---

{{< section "Research Priority Cheat Sheet - Unlock Mk.II Belts Before Everything Else" >}}

Not all research is equal. Some unlocks open entire game systems; others are minor conveniences. Here's what to prioritize at each stage.

### Early Game (Red -> Green Science)
- **Conveyor Belt Mk.II** — doubles belt throughput, immediately increases factory capacity
- **Assembler Mk.II** — faster production, critical for scaling science packs
- **Logistics System** — unlocks sorters, essential for automation

### Mid Game (Green -> Blue Science)
- **Logistics Pill** — enables logistics bots, game-changing for factory layout flexibility
- **Oil Refining** — unlocks Refined Oil, Plastics, and Rocket Fuel chains
- **Hydrogen Fuel Cells** — better power generation from hydrogen

### Late Game (Blue -> Purple Science)
- **Quantum Chip Production** — unlocks the endgame production chain
- **Solar Sail Production** — enables Dyson Sphere construction
- **Accumulator Production** — necessary for solar power grids on dark planets

---

Smelting arrays feed into science packs feed into labs feed into research unlocks. Every broken link in this chain stops your progression. Build dedicated production lines for each science pack type, scale assemblers to match lab count, and never hand-feed a lab. The factory that automates its science never runs out of things to discover.

For moving science pack materials between planets, see our [Titanium Transport Guide](/titanium-transport-guide/).
