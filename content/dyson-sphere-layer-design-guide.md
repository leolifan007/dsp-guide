---
title: "DSP Dyson Sphere Layer Design (v0.10) - Permanent Frame Strategy for Maximum Power Per Solar Sail"
description: "Master Dyson Sphere layer design in Dyson Sphere Program. Complete guide to frame-first strategy, orbit selection, frame geometry, node distribution, and sail-to-power efficiency ratios for endgame power."
date: 2026-06-09
publishDate: 2026-06-13T17:31:00+08:00
lastmod: 2026-06-09T22:26:00+08:00
hidden: true
type: post
tags: [dyson-sphere, frame, solar-sail, orbit, power, critical-photon, endgame]
categories: [Power & Energy]
slug: dyson-sphere-layer-design-guide
---

{{< callout "info" >}}
**Short answer:** Build the Dyson Sphere frame first, then fill with sails. One complete frame layer with ~200 nodes produces enough Critical Photons for 100+ MW of antimatter power. Use the closest orbit to the star (0.5 AU or less) for maximum energy output per sail. Each inner orbit layer produces ~40% more power than the next ring outward.
{{< /callout >}}

The Dyson Sphere is the ultimate goal of DSP, but most players build it inefficiently. They launch sails into random orbits where they expire after 2 hours, wasting resources. The correct approach is frame-first: build the permanent structural frame, then let sails fill it.

## Frame-First Strategy

Solar Sails launched without a frame are temporary. They expire after 1800 seconds (30 minutes) and provide no permanent structure. Sails absorbed by a Dyson Sphere frame node become permanent.

| Approach | Sail Lifespan | Material Efficiency | Power Output |
|----------|-------------|-------------------|--------------|
| Sails only (no frame) | 30 minutes | 0% (all lost) | Temporary |
| Frame first, then sails | Permanent | 100% | Permanent |
| Mixed (some frame, some free sails) | Varies | 50-70% | Semi-permanent |

{{< callout "warning" >}}
**Critical rule:** Never launch Solar Sails before you have built at least a partial Dyson Sphere frame. Every sail launched without a frame destination is waste. The frame nodes are the anchor points that make sails permanent.
{{< /callout >}}

## Orbit Selection

The orbit radius determines power output per sail:

| Orbit Radius (AU) | Power Multiplier | Sail Count for 100 MW | Relative Cost |
|------------------|-----------------|---------------------|---------------|
| 0.5 | 1.4x | ~1800 | Baseline |
| 1.0 | 1.0x | ~2500 | +40% more sails |
| 1.5 | 0.7x | ~3600 | +100% more sails |
| 2.0 | 0.5x | ~5000 | +180% more sails |

{{< material "solar-sail" >}} {{< material "frame-material" >}}

The closer to the star, the more power per sail. Build your first layer at 0.5 AU or less. The frame costs more (wider circumference = more structure points), but the sail savings pay for the extra frame material within 2 hours of operation.

{{< insight >}}
**The 0.5 AU rule:** Most stars allow orbits as close as 0.2-0.3 AU. Check your star's radius in the starmap. Inner orbits pack more power density per square meter of sphere surface. A 0.3 AU sphere produces nearly 2x the power of a 1.0 AU sphere with the same sail count.
{{< /insight >}}

## Frame Geometry

Dyson Sphere frames are built from two structural elements:

| Element | Function | Material Cost | Build Time |
|---------|----------|--------------|------------|
| Node | Start/end point for cell lines | Frame Material x20 | 10s |
| Cell Line | Connects nodes, defines sail area | Frame Material x6 per segment | 5s per segment |

### Node Distribution Strategy

For maximum coverage with minimum nodes:

| Node Count | Coverage | Best For |
|-----------|---------|----------|
| 10 | ~15% surface | First layer test, minimum viable sphere |
| 30 | ~45% surface | Mid-game power source |
| 60 | ~75% surface | Endgame power needs |
| 100+ | ~90%+ surface | Max power output |

Build 30 nodes arranged in a geodesic pattern (like a soccer ball). Connect every node to its 3-5 nearest neighbors with cell lines. Complete one full layer before starting the next.

{{< stepgroup >}}
{{< step "Select orbit" >}}Choose the innermost available orbit (0.3-0.5 AU){{< /step >}}
{{< step "Place nodes" >}}Deploy 30-40 nodes evenly around the orbit in a grid pattern{{< /step >}}
{{< step "Connect nodes" >}}String cell lines between nearest nodes to form triangular sails{{< /step >}}
{{< step "Launch sails" >}}Fire Solar Sails from your planet's EM Rail Ejectors into the frame{{< /step >}}
{{< step "Scale layer" >}}Add more nodes and cell lines until the first layer is complete{{< /step >}}
{{< /stepgroup >}}

## Multi-Layer Design

Building multiple layers compounds power output:

| Layers | Orbit Radii | Total Power | Total Sails | Efficiency |
|--------|------------|-------------|-------------|------------|
| 1 | 0.5 AU | 100% | 100% | 1.0 |
| 2 | 0.5 + 1.0 AU | 170% | 200% | 0.85 |
| 3 | 0.5 + 1.0 + 1.5 AU | 220% | 300% | 0.73 |
| 3 (optimal) | 0.3 + 0.6 + 0.9 AU | 310% | 300% | 1.03 |

{{< callout "tip" >}}
**Multi-layer trick:** Each inner layer blocks a portion of light from reaching outer layers. Build inner layers with sparse frames (wide gaps between nodes) to minimize shading. The outer layers fill in the gaps. This produces more total power with the same total sail count.
{{< /callout >}}

## Critical Photon Production

The Dyson Sphere produces Critical Photons based on the total sail surface area facing the star. Each Ray Receiver:

- Produces 1 Critical Photon per 1.2s at 100% exposure
- Needs unobstructed line of sight to the sphere
- Works best on a tidally locked planet (always-facing side)

For stable power, build 20-40 Ray Receivers on the planet closest to the Dyson Sphere. Each receiver with Graviton Lenses produces ~2x the photon rate.

{{< section "Ray Receiver Placement" >}}

| Placement | Uptime | Photons/Day | Power |
|-----------|--------|------------|-------|
| Random planet | 30-60% | 200-400 | 25-50 MW |
| Planet inside sphere orbit | 80-100% | 600-800 | 75-100 MW |
| Tidally locked (day side) | 100% | 800-1000 | 100-125 MW |

Build your antimatter factory on the planet with the best Ray Receiver uptime. Ship Antimatter Fuel Rods via ILS to your production planets.

New to Dyson Spheres? Start with our [DSP Dyson Sphere Guide](/dsp-dyson-sphere-guide/) for the basics.

{{< resourcegrid >}}
{{< resourcecard name="DSP Wiki - Dyson Sphere" url="https://dsp-wiki.com/Dyson_Sphere" desc="Complete Dyson Sphere mechanics and formulas" >}}
{{< resourcecard name="Steam Guide - Sphere Design" url="https://steamcommunity.com/sharedfiles/filedetails/?id=2373611284" desc="Community Dyson Sphere design strategies" >}}
{{< /resourcegrid >}}
