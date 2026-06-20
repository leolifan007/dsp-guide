---
title: "DSP Rare Resources Guide (v0.10) - Where to Find Every Vein in Your Star Cluster"
date: 2026-06-20T13:18:00+08:00
draft: false
version: "v0.10"
category: "Resources & Mining"
hidden: false
slug: "rare-resources-location-guide"
lastmod: 2026-06-20T13:18:00+08:00
---



{{< diagram "diagrams/rare-resources-location-guide.svg" "Star cluster heatmap showing which star types yield which rare resources" "780" >}}
Rare resources in Dyson Sphere Program are not random. Each spawn follows a pattern tied to star type, planet type, and distance from the starting system. Knowing these rules lets you skip the hours of blind exploration and go straight to the right systems.

Here is the cheat sheet: Gas giants in O-type and B-type stars always have Fire Ice. Ice giants in any system have Deuterium and Fire Ice. Organic Crystal veins only appear on "Prairie" or "Eden" type planets within 20 light-years of the starting system. Spiniform stalagmite on "Lava" planets. Fractal Silicon on "Ash" or "Desert" planets. Kimberlite Ore and Optical Grinding Crystal on "Gobi" and "Scorched" planets.

DSP Rare Resource Spawn Map (SVG): Star cluster heatmap showing which star types yield which rare resources. O-type center, M-type edges, each with a color-coded resource icon.

## How to Search Efficiently

Press `M` to open the Star Map. Sort stars by distance from your starting system. Filter by spectral type using the list below. Click each promising star and look for the planet type that matches the resource you need.

Mark promising planets with a waypoint (right-click on the star, select "Set Waypoint"). Build an ILS on the target planet, set it to supply the rare resource, and connect it to your logistics network.

Do not automate mining until you have confirmed the vein capacity. Some rare resource veins are tiny (under 500k total ore). A [Mining Outpost](/coal-fire-ice-mining-outpost-guide/) with too many miners will deplete the vein in hours, not days.

## Fire Ice Locations

Fire Ice is the most versatile rare resource. It functions as both a fuel and a production ingredient. One Fire Ice can be refined into 1 Graphite and 2 Hydrogen in a Chemical Plant, replacing the need for coal-to-graphite conversion.

Fire Ice appears on:
- **Ice giants** in any system (the most reliable source)
- **Gas giants** in O-type and B-type star systems
- **Ice planets** with cryogenic veins (rare, but on-planet mining is faster than orbital collection)

The best strategy is to place an [Orbital Collector](/orbital-collector-strategy-guide/) on a gas giant with Fire Ice. A single collector produces 0.5-2 Fire Ice per second, depending on the giant's density. Deploy 10-20 collectors per gas giant for a stable supply.

## Organic Crystal Locations

Organic Crystals replace the need for the Plastic-to-Crystal synthesis chain, which consumes Oil and Coal. Finding an Organic Crystal vein eliminates an entire production line.

Organic Crystals only spawn on:
- **Prairie** type planets (green, vegetation-covered)
- **Eden** type planets (rich, blue-green, high vegetation)

These planets typically appear between 10 and 25 light-years from the starting system. Systems with G-type (yellow) and F-type (yellow-white) stars have the highest probability.

Target range: 10-25 LY from starting system. Organic crystals never appear in the starting system itself or in very close systems.

## Spiniform Stalagmite Locations

Spiniform Stalagmite is used for high-efficiency Carbon Nanotube production. It appears exclusively on:

- **Lava** type planets

Lava planets are common around K-type (orange) stars. The resource is typically abundant (2M-10M per vein), so you can mine aggressively.

Combined with Fire Ice, Spiniform Stalagmite makes Carbon Nanotubes trivial. This is critical for [Frame Material](/frame-material-rocket-factory-guide/) production and Green Science.

## Fractal Silicon Locations

Fractal Silicon replaces the Crystal Silicon ?Processor chain's silicon requirement. It appears on:

- **Ash** type planets (gray, volcanic-looking)
- **Desert** type planets (dry, sandy)

Both types are common around M-type (red dwarf) and K-type (orange) stars. Fractal Silicon veins tend to be medium-sized (1M-5M).

A single Fractal Silicon vein processed through smelters can supply your entire [Processor Factory](/processor-factory-guide/) with Crystal Silicon, eliminating the need for dedicated Silicon ore smelting.

## Kimberlite Ore and Optical Grinding Crystal

Kimberlite Ore produces Diamonds, which are used in the Gravity Matrix production chain. Optical Grinding Crystal produces Prisms for the same chain.

Both appear on:
- **Gobi** type planets (dry, rocky)
- **Scorched** type planets (hot, reddish)

These planet types are most common around M-type stars. Kimberlite veins are abundant (5M+), while Optical Grinding Crystal veins are more limited (1M-3M).

## Uncommon Planet-Specific Resources

Some planets have unique, unrepeatable resources:

- **Sulfuric Acid Oceans**: Sulfuric Acid can be pumped directly from the ocean on "Sulfuric Acid" type planets using an offshore pump. No Chemical Plant needed. This is the single most impactful rare resource find.

- **Water**: Available on any water-capable planet, but a "Water" type planet has massive surface coverage for pumps.

- **Coal ore**: Not rare, but essential for proliferator production at scale. If your starting system has limited coal, prioritize exploration for coal-heavy planets.

Every rare resource discovery simplifies your production chain. The Vein Utilization research tree rewards this exploration: each VU level increases rare ore yield by 10%, making that initial discovery even more valuable over time.

DSP Exploration Priority Map (SVG): Star map showing recommended exploration routes by star type, color-coded by resource priority.
