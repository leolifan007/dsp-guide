---
title: "Dyson Sphere Program Energy Matrix: Complete Production Guide"
description: "Master Energy Matrix production in Dyson Sphere Program. Full dependency chain from crude oil to Energy Matrix, optimal recipes, proliferation strategies, and scaling for late-game Dyson Sphere construction."
date: 2026-05-20
publishedAt: 2026-05-20T09:20:00+08:00
lastmod: 2026-05-20
type: post
tags: [energy-matrix, endgame, proliferator, warper, fuel-refinery, solar-sails]
topics: [production, endgame]
categories: [Endgame Production]
featured_image: ""
slug: energy-matrix-production-guide
draft: true

Energy Matrix is the energy currency that powers Dyson Sphere construction. Every Solar Sail launched, every Ray Receiver powered, every component of the Dyson Sphere itself — all of it requires Energy Matrix. It's the fuel of the endgame, and getting a reliable Energy Matrix supply running is one of the most satisfying milestones in DSP.

This guide covers the complete Energy Matrix production chain, the recipes that matter, how to scale it, and how proliferation affects your output.

---

{{< callout >}}
**TL;DR** — Energy Matrix is produced from **Hydrogen** and **Refined Oil** via the **Fuel Refinery**. One Fuel Refinery converts Hydrogen + Refined Oil into Energy Matrix. Scale Energy Matrix production by adding more refineries and managing hydrogen supply. Use **Proliferator** to boost refinery output — the efficiency gain compounds at scale.
{{< /callout >}}

---

{{< diagram "energy-matrix-chain.svg" "Energy Matrix production chain" "750" >}}

---

{{< section "What Is Energy Matrix Used For?" >}}

Energy Matrix is the endgame energy resource. It's consumed by:
- **Ray Receivers** — convert Energy Matrix into power for the planet's grid
- **Solar Sails** — each sail launcher consumes Energy Matrix per launch
- **Dyson Sphere construction** — requires a massive continuous supply

The more ambitious your Dyson Sphere, the more Energy Matrix you need. A partial sphere might consume 100 Energy Matrix/s. A full sphere consumes orders of magnitude more.

---

{{< section "The Energy Matrix Recipe" >}}

**Fuel Refinery recipe (Energy Matrix):**
```
Hydrogen × 2/s + Refined Oil × 1/s → Energy Matrix × 1/s
```

This is the only recipe that produces Energy Matrix. The critical input is hydrogen — and hydrogen is the same resource used in Blue Science chains, Rocket Fuel production, and Fuel Plant power generation. Your Energy Matrix production competes with all other hydrogen consumers.

**Production dependency chain:**
```
Crude Oil → Refinery (Refined Oil + Hydrogen) → Fuel Refinery → Energy Matrix
```

To produce Energy Matrix, you need a functioning oil refining setup first. If your refineries are already backfeeding hydrogen into Blue Science production, you'll need to expand hydrogen supply before scaling Energy Matrix.

---

{{< section "Managing the Hydrogen Bottleneck" >}}

Hydrogen is the bottleneck in almost every DSP factory that reaches mid-game. Energy Matrix makes it worse — one Energy Matrix Refinery consumes 2 hydrogen/s, and you'll want multiple refineries running simultaneously.

**The hydrogen competition:**
| Consumer | Hydrogen/s per unit |
|---|---|
| Hydrogen Fuel Plants | 1/s |
| Blue Science Packs | 2/s |
| Graphene Production | 1/s |
| Energy Matrix Refineries | 2/s |

At scale, you're consuming hydrogen faster than a single oil field can produce it. The solution is the same as always: more oil extractors, more refineries, and a dedicated hydrogen routing plan.

See our [Oil & Plastics Refining Guide](/oil-plastics-refining/) for the full hydrogen management solution, including the hydrogen tank buffer strategy that prevents refinery stalls.

---

{{< section "Proliferation: Boosting Energy Matrix Output" >}}

**Proliferator** is a late-game resource that boosts production efficiency when applied to assemblers, refineries, and smelters. Energy Matrix Refineries benefit significantly from proliferation.

**How proliferation works:**
- Apply **Proliferator** to a building via the building's recipe menu
- The building produces more output per cycle
- Each level of proliferation increases output (up to a cap)
- Higher proliferation levels consume more proliferator products

**Energy Matrix with proliferation:**
At maximum proliferation, an Energy Matrix Refinery can produce significantly more than 1/s. The exact multiplier depends on your proliferator research level.

**Proliferation priority:**
Energy Matrix Refineries are among the highest-value buildings to proliferate — the output gain compounds directly into your Dyson Sphere construction speed. Proliferate them early and heavily.

---

{{< section "Ray Receivers: Converting Energy Matrix to Power" >}}

**Ray Receivers** are structures placed on planets that convert Energy Matrix into electricity for the local grid.

**Ray Receiver specs:**
- Consumes Energy Matrix continuously while active
- Converts Energy Matrix into power for the planet's electrical grid
- Effective primarily on planets near active Dyson Sphere segments

**Ray Receiver placement:**
Place Ray Receivers on high-elevation tiles on the planet's surface. They need line-of-sight to the star to function optimally. Multiple Ray Receivers can be placed in a row to increase total power conversion capacity.

**Power output:** A single Ray Receiver produces meaningful power, but a large Dyson Sphere will require dozens of Ray Receivers to consume all the Energy Matrix being generated. Plan your Ray Receiver array size based on your Sphere's energy output.

---

Scaling Energy Matrix production is a three-layer problem: get more hydrogen from your oil refining setup, build more Fuel Refineries to convert hydrogen into Energy Matrix, and proliferate those refineries to maximize output per unit of input. The moment your Dyson Sphere construction starts demanding more Energy Matrix than your refineries can supply, that's your signal to scale all three layers simultaneously.

For building the refining chains that feed Energy Matrix production, see our [Oil & Plastics Refining Guide](/oil-plastics-refining/). For moving resources between planets for Energy Matrix production, see our [Titanium Transport Guide](/titanium-transport-guide/).