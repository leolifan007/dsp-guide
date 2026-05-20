---
title: "Dyson Sphere Program Logistics Drones vs Belts: Complete Comparison"
description: "Logistics Drones or Belts in DSP? This guide covers drone cargo capacity, speed, fuel costs, belt throughput, cross-planet transport, and when to use each system for maximum factory efficiency."
date: 2026-05-20
publishedAt: 2026-05-20T09:15:00+08:00
lastmod: 2026-05-20
type: post
tags: [logistics, drones, vessels, belts, transportation, mkii, interplanetary]
topics: [logistics, transportation]
categories: [Logistics & Transportation]
featured_image: ""
slug: logistics-drones-vs-belts-guide
draft: false
---

DSP gives you two ways to move materials: belts and drones. Belts are local, simple, and fast. Drones are flexible, cross-planetary, and require zero physical infrastructure. Knowing which to use — and when — is one of the core strategic decisions in DSP factory design.

This guide breaks down throughput, use cases, cost, and scalability for each system.

---

{{< callout >}}
**TL;DR** — Use **belts** for high-throughput local transport (within a planet). Use **logistics drones** for cross-planetary transport and flexible low-volume requests. Use **vessels** for massive interplanetary shipments of raw materials. For maximum efficiency, combine all three — belts for planet-level production, drones and vessels for network-level logistics.
{{< /callout >}}

---

{{< diagram "logistics-hierarchy.svg" "Logistics hierarchy: belt vs drone vs vessel" "750" >}}

---

{{< section "Belt Transportation: When to Use It" >}}

Belt transport moves materials along physical paths. They're fast, reliable, and perfect for any situation where you're moving high volumes of materials between buildings on the same planet.

**Belt throughput (per belt):**
- Mk.I (Yellow): 1 item/s
- Mk.II (Red): 2 items/s
- Mk.III (Blue): 3 items/s
- Mk.IV (Purple): 4 items/s

For any production line that needs more than 1–2 items/s of a material and all the buildings are on the same planet, belts are the right answer. They're cheap to build, require no fuel, and never get lost.

**When belts are better:**
- Smelting arrays (local ore → ingots → factory bus)
- Production chains within a single planet
- Any situation where you need guaranteed throughput with no latency
- High-volume materials like iron ingots, copper ingots, stone bricks

**When belts fail:**
- Cross-planetary transport (you can't build a belt to another planet)
- Scattered consumption points that change as your factory scales
- Long-distance transport within a large planet (latency from long belt chains)

---

{{< section "Logistics Drones: When to Use Them" >}}

**Logistics Drones** are small robotic aircraft that fly between ILS stations. They carry materials over short-to-medium distances and are ideal for connecting facilities on the same planet or nearby planets.

**Drone specs (v0.10):**
- Carry capacity: moderate (single cargo load per trip)
- Speed: fast (faster than vessels)
- Fuel: consume power from the ILS
- Range: limited to local star system

**ILS Drone configuration:**
- Set the sending ILS to **Remote Supply** for the material
- Set the receiving ILS to **Remote Demand** for the same material
- Drones will automatically fly the route when demand exists

**When drones are better:**
- Supplying a scattered research lab grid from a central science pack factory
- Delivering materials to multiple consumption points on the same planet
- Low-to-medium volume transport that doesn't justify a dedicated belt line
- Mid-game cross-planetary supply chains within the same star system

**When drones aren't enough:**
- Raw material transport (ore, ingots) at high volume — use vessels instead
- Very long distances (across multiple star systems)
- High-throughput production chains — drones can't match belt volume

---

{{< section "Logistics Vessels: Interplanetary Workhorses" >}}

**Logistics Vessels** are large cargo ships that travel between ILS stations in different star systems. They carry massive cargo loads and are the backbone of any serious DSP logistics network.

**Vessel specs:**
- Carry capacity: large (much higher than drones)
- Speed: slower than drones but still fast
- Fuel: significant power draw from ILS — needs dedicated power supply
- Range: interplanetary and interstellar

**Vessel use case:**
You have a titanium mining outpost on an ice planet in a distant star system. Your main factory is on your starting planet. You need titanium ingots flowing continuously into your production chains.

Solution: Place an ILS at the titanium outpost (supply), place an ILS at your main factory (demand), and configure a vessel route between them. Vessels will shuttle titanium ingots automatically.

---

{{< section "ILS Setup for Drone and Vessel Logistics" >}}

The **Interplanetary Logistics Station (ILS)** is the hub of DSP's drone and vessel network. Every station in your logistics network talks to every other station — you set the rules, and drones/vessels handle the execution.

### Basic ILS Configuration

**At the supply station (mining outpost):**
1. Place ILS
2. Set to **Supply** mode
3. Set the **resource** and **amount per dispatch**
4. Set **Remote** to make it available across the logistics network

**At the demand station (factory):**
1. Place ILS
2. Set to **Demand** mode
3. Set the **resource** being requested
4. Set **Remote** to pull from remote supply stations

**The system:** When your factory's demand station has less than the minimum amount of a resource, it broadcasts a request. Any remote supply station in your network that has that resource dispatches a drone or vessel with the material. Done.

### Power Requirements

ILS stations consume significant power — especially vessel bays. A vessel launch or landing draws more power than a drone. Always connect your ILS to a dedicated power grid with surplus capacity. Fuel Power Plants or Solar Arrays near your main ILS hub are the standard solution.

---

Belt local, drone regional, vessel global. That's the DSP logistics hierarchy. Build belts within each planet's factory, use drones to move materials between facilities on the same planet or nearby, and use vessels for all your interplanetary and interstellar supply chains. Once your ILS network is configured, the logistics system manages itself — your job is just to build the supply stations.

For ILS configuration details, see our [ILS Setup Guide](/ils-setup-guide/). For moving raw materials off-world, see our [Titanium Transport Guide](/titanium-transport-guide/).