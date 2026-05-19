---
title: "Green Science and Warpers: Stop Being Scared of Green Matrix (DSP Guide)"
description: "Step-by-step guide to Green Science in Dyson Sphere Program: what to build, how to get Casimir Crystals, and how to start making Warpers."
date: "2026-05-14"
categories: [Science & Production]
tags: [green-science, warpers, casimir-crystals, mid-game]
---

You've got Yellow Science running. Titanium flowing. Everything is… fine. Then you look at Green Matrix. Three ingredients. Processors. Casimir Crystals. Electromagnetic Turbines.

And you think: **"Yeah no. I'll do it later."**

I get it. Every DSP player hits this wall. But here's the thing — Green Matrix unlocks Space Warpers. And Warpers turn your factory from a solar-system-only operation into a galactic empire. You want that.

{{< callout >}}
**TL;DR** — Green Matrix needs 3 things: **Processors + Casimir Crystals + EM Turbines.** Scale your existing Processor line. Build a Casimir plant. That's most of the work done.
{{< /callout >}}

---

{{< section "The Three Things You Need" >}}

**Green Matrix = Processors + Casimir Crystals + EM Turbines**

{{< recipe name1="processor" qty1="1x" name2="casimir" qty2="1x" name3="em-turbine" qty3="1x" result="green-matrix" rqty="1x" >}}

---

### 1. Processors (You Already Make These)

If you're at Yellow Science, you already have a processor line. You just need more. A green matrix build running 3 labs/min needs ~4 processors per second. That's about **20-25 assemblers** making processors.

**Don't build a new factory.** Just expand your existing one. Slap down more assemblers on your current circuit board + silicon line.

{{< recipe name1="circuit" qty1="1x" name2="silicon" qty2="1x" result="processor" rqty="1x" >}}

---

### 2. Casimir Crystals (The "Scary" One)

Casimir Crystals need three ingredients:

{{< recipe name1="hydrogen" qty1="1x" name2="graphene" qty2="1x" name3="titanium" qty3="2x" result="casimir" rqty="1x" >}}

**The hydrogen is the real constraint.** You need a steady stream — way more than your refineries produce.

**The fix:** Find a gas giant in your system.

{{< diagram "orbital-collector-h2.svg" "Orbital Collectors for Hydrogen" "700" >}}

Build an **Orbital Collector** on it. Each collector pulls **0.35 hydrogen/second** forever. Drop 10 collectors around a gas giant and you'll never worry about hydrogen again.

{{< callout tip >}}
**Pro Tip** — Drop 20 collectors around your nearest gas giant. Not 10. You'll thank yourself later when purple science needs ridiculous amounts of hydrogen too.
{{< /callout >}}

---

### 3. EM Turbines (Easy)

These are just electric motors + magnetic coils:

{{< recipe name1="motor" qty1="1x" name2="coil" qty2="1x" result="em-turbine" rqty="1x" >}}

If you've been automating motors at all, you already have most of this. Build a few more assemblers. Done.

{{< callout >}}
**Why are you scared of green?** The truth: it's not harder than yellow. Yellow asks you to handle oil, hydrogen, graphite, and titanium all at once across multiple planets. Green is just "more of the same but with processors." You've got this.
{{< /callout >}}

---

{{< section "The Warpers Payoff" >}}

Once Green Matrix is running, your research unlocks: **Space Warper**.

**Space Warper = your vessels can fly to other star systems.** Your factory goes from one system to unlimited.

{{< diagram "warper-payoff.svg" "Warper interstellar travel benefit" "700" >}}

Each warper costs **1 Green Matrix**. Each vessel trip costs **1 warper**. One warper moves **200 items**. That's insanely efficient.

**Build a warper production line right next to your green matrix setup.** Route a fraction of your green matrix output into Assembling Machines M2/M3 that produce warpers. Feed them into an ILS. Set ILS slot to Supply.

Now every ILS in your network can grab warpers and start shipping across the galaxy.

{{< callout tip >}}
**One gotcha:** ILS ships won't pick up warpers unless you set a slot to Supply for warpers. They don't auto-grab them from inventory. You have to explicitly tell the ILS: "hey, this slot has warpers, take them."
{{< /callout >}}

{{< section "Quick Ratio: 1 Green Matrix/Second" >}}

<div class="box-wrap">
<div class="box-title">1/SEC GREEN MATRIX — PRODUCTION LINE</div>
<div class="box-sub">Feed 3 Green Matrix labs. Mk.I ratios. Mk.II ~30% less.</div>

<div class="box-grid">

<div class="game-card">
<div class="game-card-title">Step 1: <span style="color:#60a5fa;">Processors</span></div>
{{< recipe name1="circuit" qty1="2x" name2="silicon" qty2="1x" result="processor" rqty="1x" >}}
<div class="game-card-stat">18 assemblers · 4/sec</div>
</div>

<div class="game-card">
<div class="game-card-title">Step 2: <span style="color:#34d399;">Casimir Crystals</span></div>
{{< recipe name1="hydrogen" qty1="1x" name2="graphene" qty2="1x" name3="titanium" qty3="2x" result="casimir" rqty="1x" >}}
<div class="game-card-stat">20 collectors · 10 chem · 12 assm</div>
</div>

<div class="game-card">
<div class="game-card-title">Step 3: <span style="color:#a78bfa;">EM Turbines</span></div>
{{< recipe name1="motor" qty1="1x" name2="coil" qty2="1x" result="em-turbine" rqty="1x" >}}
<div class="game-card-stat">10 motors · 8 coils · 6 turbines · 3 labs</div>
</div>

</div>

<div class="box-summary">⚡ ~8 MW power · Mk.II belts recommended · ~15 min build time</div>
</div>

<div class="box-wrap" style="margin-top:16px;">
<div class="box-title">BUILD CHECKLIST — 1/SEC GREEN MATRIX</div>

<div class="box-split">

<div>
<div class="checklist-group-title">INGREDIENTS / SEC</div>
{{< recipe name1="processor" qty1="4.5x" name2="casimir" qty2="3.5x" name3="em-turbine" qty3="2.8x" result="green-matrix" rqty="1x" >}}
<div style="color:#5a6a8a;font-size:.6rem;margin-top:8px;font-family:'JetBrains Mono',monospace;">~52 Mk.I assemblers total</div>
</div>

<div>
<div class="checklist-group-title">POWER &amp; LOGISTICS</div>
<div class="check-item">~8 MW total (solar ring + 4 wind)</div>
<div class="check-item">ILS set to Supply / Demand</div>
<div class="check-item">Warpers added to ILS slot (manual)</div>
<div class="check-item">Mk.II belts or higher on main bus</div>
<div class="check-item">20 orbital collectors on gas giant</div>
</div>

</div>
</div>

That's a 1/sec build. Enough to research everything through Green Science at a reasonable pace.

{{< section "What You Get" >}}

{{< diagram "what-you-get-green-science.svg" "What Green Science unlocks" >}}

---

{{< section "Bottom Line" >}}

Green Matrix is a mental hurdle, not a difficult one. Start with your processor line. Build orbital collectors for hydrogen. Add Casimir production. Then watch warpers roll off the line and your factory goes interstellar.

You were scared of yellow science once too. Remember how that turned out?
