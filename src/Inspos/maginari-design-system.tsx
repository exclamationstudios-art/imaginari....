import React from 'react';

export function Maginaridesignsystem() {
  return (
    <>
      <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>MAGINARI — Design System v1.0</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=Playfair+Display:ital,wght@1,400;1,600&display=swap" rel="stylesheet" />
<style dangerouslySetInnerHTML={{ __html: `
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  /* ── COLOUR TOKENS ── */
  --bg-base:        #2a2a27;
  --bg-elevated:    #323230;
  --bg-card:        #3a3a32;
  --bg-card-hover:  #404038;

  --olive-100:      #e8e0b0;
  --olive-200:      #d4c880;
  --olive-300:      #c4b870;
  --olive-400:      #b5a96a;
  --olive-500:      #9a9058;
  --olive-600:      #8a7f50;
  --olive-700:      #6b6440;
  --olive-800:      #4a4430;
  --olive-900:      #2a2418;

  --text-primary:   #f4f0e4;
  --text-secondary: #e8e4d4;
  --text-muted:     #8a8678;
  --text-dim:       #5a5850;
  --text-ghost:     #3a3830;

  --border-subtle:  rgba(181,169,106,0.08);
  --border-light:   rgba(181,169,106,0.15);
  --border-medium:  rgba(181,169,106,0.25);
  --border-strong:  rgba(181,169,106,0.45);

  /* ── TYPE SCALE ── */
  --type-display:   'Bebas Neue', sans-serif;
  --type-body:      'DM Sans', sans-serif;
  --type-editorial: 'Playfair Display', serif;

  --size-hero:      clamp(72px, 12vw, 140px);
  --size-display:   clamp(48px, 7vw, 80px);
  --size-title-xl:  42px;
  --size-title-lg:  32px;
  --size-title-md:  24px;
  --size-title-sm:  18px;
  --size-body-lg:   16px;
  --size-body-md:   14px;
  --size-body-sm:   13px;
  --size-label:     11px;
  --size-micro:     10px;

  /* ── SPACING ── */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* ── RADIUS ── */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-card: 8px 8px 0 0;
  --radius-pill: 20px;
  --radius-full: 9999px;

  /* ── SHADOWS ── */
  --shadow-card: 0 4px 24px rgba(0,0,0,0.3);
  --shadow-float: 0 8px 40px rgba(0,0,0,0.45);
}

body {
  background: var(--bg-base);
  color: var(--text-secondary);
  font-family: var(--type-body);
  font-weight: 300;
  line-height: 1.6;
}

::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: var(--bg-base); }
::-webkit-scrollbar-thumb { background: var(--olive-700); border-radius: 2px; }

/* ── SYSTEM NAV ── */
.sys-nav {
  position: fixed;
  top: 0; left: 0;
  width: 220px;
  height: 100vh;
  background: var(--bg-elevated);
  border-right: 1px solid var(--border-subtle);
  padding: 32px 24px;
  overflow-y: auto;
  z-index: 100;
}

.sys-nav-logo {
  font-family: var(--type-display);
  font-size: 22px;
  letter-spacing: 0.08em;
  color: var(--olive-400);
  margin-bottom: 4px;
}

.sys-nav-version {
  font-size: var(--size-micro);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-bottom: 32px;
}

.sys-nav-section {
  margin-bottom: 28px;
}

.sys-nav-section-title {
  font-size: var(--size-micro);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--olive-700);
  margin-bottom: 10px;
}

.sys-nav-link {
  display: block;
  font-size: 13px;
  color: var(--text-dim);
  text-decoration: none;
  padding: 5px 0;
  transition: color 0.2s;
  cursor: pointer;
}

.sys-nav-link:hover { color: var(--olive-400); }

/* ── MAIN CONTENT ── */
.sys-main {
  margin-left: 220px;
  padding: 60px 64px;
  max-width: 1100px;
}

/* ── SECTION HEADERS ── */
.section {
  margin-bottom: 80px;
  scroll-margin-top: 40px;
}

.section-eyebrow {
  font-size: var(--size-micro);
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--olive-700);
  margin-bottom: 8px;
}

.section-title {
  font-family: var(--type-display);
  font-size: 48px;
  letter-spacing: 0.04em;
  color: var(--text-primary);
  margin-bottom: 6px;
  line-height: 1;
}

.section-desc {
  font-size: var(--size-body-sm);
  color: var(--text-muted);
  margin-bottom: 40px;
  max-width: 520px;
  line-height: 1.7;
}

.divider {
  height: 1px;
  background: var(--border-subtle);
  margin: 40px 0;
}

/* ── COLOUR PALETTE ── */
.colour-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  margin-bottom: 24px;
}

.colour-swatch {
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.swatch-block {
  height: 64px;
  border: 1px solid rgba(255,255,255,0.04);
}

.swatch-info {
  padding: 8px 10px;
  background: var(--bg-elevated);
}

.swatch-name {
  font-size: var(--size-micro);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  display: block;
}

.swatch-hex {
  font-size: 11px;
  color: var(--text-dim);
  font-family: 'Courier New', monospace;
}

.colour-role-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.colour-role {
  padding: 16px;
  background: var(--bg-elevated);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
}

.colour-role-dot {
  width: 28px;
  height: 28px;
  border-radius: var(--radius-full);
  margin-bottom: 10px;
}

.colour-role-label {
  font-size: var(--size-micro);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-bottom: 4px;
}

.colour-role-desc {
  font-size: 12px;
  color: var(--text-muted);
  line-height: 1.5;
}

/* ── TYPOGRAPHY ── */
.type-specimen {
  margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--border-subtle);
}

.type-specimen:last-child { border-bottom: none; }

.type-meta {
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
  align-items: baseline;
}

.type-role {
  font-size: var(--size-micro);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--olive-700);
}

.type-spec {
  font-size: 11px;
  color: var(--text-dim);
  font-family: 'Courier New', monospace;
}

.t-hero {
  font-family: var(--type-display);
  font-size: var(--size-hero);
  letter-spacing: 0.02em;
  color: var(--text-primary);
  line-height: 0.9;
}

.t-display {
  font-family: var(--type-display);
  font-size: var(--size-display);
  letter-spacing: 0.03em;
  color: var(--text-primary);
  line-height: 1;
}

.t-title-xl {
  font-family: var(--type-display);
  font-size: var(--size-title-xl);
  letter-spacing: 0.04em;
  color: var(--text-primary);
}

.t-title-lg {
  font-family: var(--type-display);
  font-size: var(--size-title-lg);
  letter-spacing: 0.04em;
  color: var(--text-primary);
}

.t-editorial {
  font-family: var(--type-editorial);
  font-style: italic;
  font-size: 22px;
  color: var(--text-muted);
  line-height: 1.5;
}

.t-body {
  font-family: var(--type-body);
  font-size: var(--size-body-lg);
  font-weight: 300;
  color: var(--text-muted);
  line-height: 1.8;
  max-width: 560px;
}

.t-label {
  font-family: var(--type-body);
  font-size: var(--size-label);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.t-micro {
  font-family: var(--type-body);
  font-size: var(--size-micro);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-dim);
}

/* ── COMPONENTS ── */

/* Brand Card — extracted from Page 1 */
.component-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 16px;
  align-items: flex-start;
}

.component-label {
  font-size: var(--size-micro);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-bottom: 12px;
}

.brand-card {
  width: 200px;
  cursor: pointer;
  transition: transform 0.2s;
}

.brand-card:hover { transform: translateY(-4px); }

.brand-card-img {
  width: 100%;
  aspect-ratio: 3/3.5;
  border-radius: var(--radius-md) var(--radius-md) 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.bc-favela { background: linear-gradient(145deg, #1a2535 0%, #0d1520 100%); }
.bc-coci   { background: linear-gradient(145deg, #252520 0%, #151512 100%); }
.bc-empty  { background: linear-gradient(145deg, #201a25 0%, #100d15 100%); }

.brand-card-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 28px;
  height: 28px;
  border-radius: var(--radius-full);
  background: rgba(181,169,106,0.15);
  border: 1px solid rgba(181,169,106,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-card-badge-dot {
  width: 6px;
  height: 6px;
  border-radius: var(--radius-full);
  background: var(--olive-400);
}

.brand-card-dashes {
  position: absolute;
  inset: 6px;
  border: 1.5px dashed rgba(181,169,106,0.2);
  border-radius: 4px;
  pointer-events: none;
}

.brand-card-img-label {
  font-family: var(--type-display);
  font-size: 36px;
  color: rgba(181,169,106,0.15);
  letter-spacing: 0.1em;
}

.brand-card-body {
  background: var(--olive-600);
  border-radius: 0 0 var(--radius-md) var(--radius-md);
  padding: 14px 16px 18px;
  opacity: 0.88;
}

.brand-card-name {
  font-family: var(--type-display);
  font-size: 26px;
  letter-spacing: 0.08em;
  color: var(--bg-base);
  line-height: 1;
  margin-bottom: 2px;
}

.brand-card-origin {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(42,42,39,0.55);
}

/* Feed Item — extracted from Page 2 */
.feed-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 0;
  border-bottom: 1px solid var(--border-subtle);
  max-width: 480px;
}

.feed-thumb {
  width: 88px;
  height: 88px;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
}

.ft-1 { background: linear-gradient(145deg, #1a1a20 0%, #0d0d15 100%); }
.ft-2 { background: var(--olive-800); }

.feed-thumb-label {
  font-family: var(--type-display);
  font-size: 13px;
  color: rgba(181,169,106,0.3);
  letter-spacing: 0.1em;
}

.feed-info {
  flex: 1;
}

.feed-brand {
  font-family: var(--type-body);
  font-size: var(--size-body-md);
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: 2px;
}

.feed-product {
  font-size: var(--size-body-md);
  color: var(--text-secondary);
  margin-bottom: 6px;
}

.feed-studio {
  font-size: var(--size-label);
  color: var(--text-dim);
  letter-spacing: 0.06em;
}

.feed-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
}

.btn-circle {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-full);
  background: rgba(181,169,106,0.12);
  border: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  color: var(--olive-400);
  font-size: 16px;
}

.btn-circle:hover { background: rgba(181,169,106,0.22); }

.btn-circle-play svg {
  width: 11px;
  height: 11px;
  fill: var(--olive-400);
  margin-left: 2px;
}

/* Story/Products Toggle — extracted from Page 2 */
.toggle-group {
  display: inline-flex;
  gap: 0;
}

.toggle-btn {
  padding: 10px 22px;
  font-family: var(--type-body);
  font-size: var(--size-body-sm);
  letter-spacing: 0.06em;
  cursor: pointer;
  border: 1px solid var(--border-light);
  background: none;
  color: var(--text-dim);
  transition: all 0.2s;
}

.toggle-btn:first-child {
  border-radius: var(--radius-pill) 0 0 var(--radius-pill);
}

.toggle-btn:last-child {
  border-radius: 0 var(--radius-pill) var(--radius-pill) 0;
  border-left: none;
}

.toggle-btn.active {
  background: var(--olive-700);
  border-color: var(--olive-700);
  color: var(--text-primary);
}

.toggle-btn:hover:not(.active) { color: var(--text-muted); }

/* Nav Bar — extracted from both pages */
.nav-demo {
  background: var(--bg-base);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 16px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 700px;
}

.nav-demo-logo {
  font-family: var(--type-display);
  font-size: 22px;
  letter-spacing: 0.08em;
  color: var(--olive-400);
}

.nav-demo-search {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-pill);
  padding: 7px 16px;
  width: 180px;
}

.nav-demo-search span {
  font-size: 12px;
  color: var(--text-dim);
  letter-spacing: 0.04em;
}

.nav-demo-icons {
  display: flex;
  gap: 20px;
}

.nav-demo-icon {
  width: 16px;
  height: 16px;
  color: var(--text-dim);
}

/* Buttons */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  background: var(--olive-400);
  border: none;
  color: var(--bg-base);
  font-family: var(--type-display);
  font-size: 18px;
  letter-spacing: 0.12em;
  cursor: pointer;
  border-radius: var(--radius-sm);
  transition: background 0.2s, transform 0.1s;
}

.btn-primary:hover { background: var(--olive-300); transform: translateY(-1px); }

.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 28px;
  background: none;
  border: 1px solid var(--border-medium);
  color: var(--text-muted);
  font-family: var(--type-body);
  font-size: var(--size-body-sm);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: var(--radius-sm);
  transition: all 0.2s;
}

.btn-ghost:hover { border-color: var(--olive-400); color: var(--olive-400); }

.btn-play {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-full);
  background: var(--olive-400);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, background 0.2s;
}

.btn-play:hover { transform: scale(1.08); background: var(--olive-300); }

.btn-play svg {
  width: 16px;
  height: 16px;
  fill: var(--bg-base);
  margin-left: 3px;
}

/* ── SPACING SYSTEM ── */
.spacing-row {
  display: flex;
  align-items: flex-end;
  gap: 20px;
  flex-wrap: wrap;
}

.spacing-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.spacing-block {
  background: var(--olive-700);
  opacity: 0.6;
  width: 100%;
  min-width: 4px;
}

.spacing-label {
  font-size: 10px;
  color: var(--text-dim);
  letter-spacing: 0.1em;
  font-family: 'Courier New', monospace;
  white-space: nowrap;
}

/* ── GRID SYSTEM ── */
.grid-demo {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 8px;
  margin-bottom: 12px;
}

.grid-col {
  height: 32px;
  background: rgba(181,169,106,0.08);
  border: 1px solid rgba(181,169,106,0.12);
  border-radius: 2px;
}

/* ── INTERACTION STATES ── */
.state-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
}

.state-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.state-default { background: rgba(181,169,106,0.08); color: var(--text-dim); border: 1px solid var(--border-subtle); }
.state-hover   { background: rgba(181,169,106,0.14); color: var(--text-muted); border: 1px solid var(--border-light); }
.state-active  { background: var(--olive-700); color: var(--text-primary); border: 1px solid var(--olive-700); }
.state-sold    { background: rgba(90,88,80,0.2); color: var(--text-dim); border: 1px solid var(--border-subtle); text-decoration: line-through; }
.state-new     { background: rgba(181,169,106,0.2); color: var(--olive-300); border: 1px solid var(--border-medium); }

/* ── RULES ── */
.rules-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.rule-card {
  padding: 20px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
}

.rule-card.do { border-left: 3px solid var(--olive-400); background: rgba(181,169,106,0.04); }
.rule-card.dont { border-left: 3px solid rgba(160,80,80,0.6); background: rgba(160,80,80,0.03); }

.rule-tag {
  font-size: var(--size-micro);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.do .rule-tag { color: var(--olive-500); }
.dont .rule-tag { color: rgba(180,100,100,0.7); }

.rule-text {
  font-size: var(--size-body-sm);
  color: var(--text-muted);
  line-height: 1.6;
}

/* ── ANIMATIONS ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

.section { animation: fadeUp 0.5s ease both; }
` }} />
</head>
<body>

{/*  SYSTEM NAV  */}
<nav className="sys-nav">
  <div className="sys-nav-logo">MAGINARI.</div>
  <div className="sys-nav-version">Design System v1.0</div>

  <div className="sys-nav-section">
    <div className="sys-nav-section-title">Foundation</div>
    <a className="sys-nav-link" href="#colours">Colour Tokens</a>
    <a className="sys-nav-link" href="#typography">Typography</a>
    <a className="sys-nav-link" href="#spacing">Spacing</a>
    <a className="sys-nav-link" href="#grid">Grid</a>
  </div>

  <div className="sys-nav-section">
    <div className="sys-nav-section-title">Components</div>
    <a className="sys-nav-link" href="#nav">Navigation</a>
    <a className="sys-nav-link" href="#cards">Brand Cards</a>
    <a className="sys-nav-link" href="#feed">Feed Items</a>
    <a className="sys-nav-link" href="#toggle">Toggles</a>
    <a className="sys-nav-link" href="#buttons">Buttons</a>
    <a className="sys-nav-link" href="#states">States</a>
  </div>

  <div className="sys-nav-section">
    <div className="sys-nav-section-title">Rules</div>
    <a className="sys-nav-link" href="#rules">Do / Don't</a>
    <a className="sys-nav-link" href="#voice">Brand Voice</a>
  </div>
</nav>

{/*  MAIN  */}
<main className="sys-main">

  {/*  HEADER  */}
  <div data-style="margin-bottom: 60px; padding-bottom: 40px; border-bottom: 1px solid var(--border-subtle);">
    <div data-style="font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--olive-700); margin-bottom: 12px;">Exclamation Studios — Internal Document</div>
    <div data-style="font-family: var(--type-display); font-size: 72px; line-height: 0.9; color: var(--text-primary); letter-spacing: 0.04em; margin-bottom: 16px;">MAGINARI<br />DESIGN<br />SYSTEM</div>
    <div data-style="font-size: 14px; color: var(--text-muted); max-width: 480px; line-height: 1.7;">This document is the single source of truth for every visual and interaction decision on the MAGINARI platform. Every designer, developer, and creative partner works from this system — no exceptions.</div>
  </div>

  {/*  COLOURS  */}
  <section className="section" id="colours">
    <div className="section-eyebrow">01 — Foundation</div>
    <div className="section-title">Colour</div>
    <div className="section-desc">Extracted directly from the existing UI. These are not approximations — they are the exact tokens the platform is built on. Never deviate without approval.</div>

    <div className="component-label">Background Scale</div>
    <div className="colour-grid">
      <div className="colour-swatch">
        <div className="swatch-block" data-style="background:#2a2a27;"></div>
        <div className="swatch-info"><span className="swatch-name">bg-base</span><span className="swatch-hex">#2a2a27</span></div>
      </div>
      <div className="colour-swatch">
        <div className="swatch-block" data-style="background:#323230;"></div>
        <div className="swatch-info"><span className="swatch-name">bg-elevated</span><span className="swatch-hex">#323230</span></div>
      </div>
      <div className="colour-swatch">
        <div className="swatch-block" data-style="background:#3a3a32;"></div>
        <div className="swatch-info"><span className="swatch-name">bg-card</span><span className="swatch-hex">#3a3a32</span></div>
      </div>
      <div className="colour-swatch">
        <div className="swatch-block" data-style="background:#404038;"></div>
        <div className="swatch-info"><span className="swatch-name">bg-card-hover</span><span className="swatch-hex">#404038</span></div>
      </div>
    </div>

    <div className="component-label" data-style="margin-top: 24px;">Olive Scale — Primary Brand Colour</div>
    <div className="colour-grid">
      <div className="colour-swatch">
        <div className="swatch-block" data-style="background:#c4b870;"></div>
        <div className="swatch-info"><span className="swatch-name">olive-300</span><span className="swatch-hex">#c4b870</span></div>
      </div>
      <div className="colour-swatch">
        <div className="swatch-block" data-style="background:#b5a96a;"></div>
        <div className="swatch-info"><span className="swatch-name">olive-400 ★</span><span className="swatch-hex">#b5a96a</span></div>
      </div>
      <div className="colour-swatch">
        <div className="swatch-block" data-style="background:#8a7f50;"></div>
        <div className="swatch-info"><span className="swatch-name">olive-600</span><span className="swatch-hex">#8a7f50</span></div>
      </div>
      <div className="colour-swatch">
        <div className="swatch-block" data-style="background:#6b6440;"></div>
        <div className="swatch-info"><span className="swatch-name">olive-700</span><span className="swatch-hex">#6b6440</span></div>
      </div>
      <div className="colour-swatch">
        <div className="swatch-block" data-style="background:#4a4430;"></div>
        <div className="swatch-info"><span className="swatch-name">olive-800</span><span className="swatch-hex">#4a4430</span></div>
      </div>
    </div>

    <div className="component-label" data-style="margin-top: 24px;">Text Scale</div>
    <div className="colour-grid">
      <div className="colour-swatch">
        <div className="swatch-block" data-style="background:#f4f0e4;"></div>
        <div className="swatch-info"><span className="swatch-name">text-primary</span><span className="swatch-hex">#f4f0e4</span></div>
      </div>
      <div className="colour-swatch">
        <div className="swatch-block" data-style="background:#e8e4d4;"></div>
        <div className="swatch-info"><span className="swatch-name">text-secondary</span><span className="swatch-hex">#e8e4d4</span></div>
      </div>
      <div className="colour-swatch">
        <div className="swatch-block" data-style="background:#8a8678;"></div>
        <div className="swatch-info"><span className="swatch-name">text-muted</span><span className="swatch-hex">#8a8678</span></div>
      </div>
      <div className="colour-swatch">
        <div className="swatch-block" data-style="background:#5a5850;"></div>
        <div className="swatch-info"><span className="swatch-name">text-dim</span><span className="swatch-hex">#5a5850</span></div>
      </div>
    </div>

    <div className="divider"></div>

    <div className="component-label">Colour Roles</div>
    <div className="colour-role-grid">
      <div className="colour-role">
        <div className="colour-role-dot" data-style="background:var(--olive-400);"></div>
        <div className="colour-role-label">Brand Primary</div>
        <div className="colour-role-desc">olive-400. Used on wordmark, CTAs, play buttons, active states, pull quotes. The only accent colour.</div>
      </div>
      <div className="colour-role">
        <div className="colour-role-dot" data-style="background:var(--olive-600);"></div>
        <div className="colour-role-label">Card Body</div>
        <div className="colour-role-desc">olive-600 at 88% opacity. The card footer on all brand cards. Never full opacity — always slightly muted.</div>
      </div>
      <div className="colour-role">
        <div className="colour-role-dot" data-style="background:var(--bg-base);"></div>
        <div className="colour-role-label">Background Base</div>
        <div className="colour-role-desc">bg-base #2a2a27. The foundation of the entire platform. Never white. Never pure black.</div>
      </div>
    </div>
  </section>

  {/*  TYPOGRAPHY  */}
  <section className="section" id="typography">
    <div className="section-eyebrow">02 — Foundation</div>
    <div className="section-title">Typography</div>
    <div className="section-desc">Three typefaces. Each has a precise role. Never mix roles. Never use system fonts.</div>

    <div className="type-specimen">
      <div className="type-meta">
        <span className="type-role">Display / Brand</span>
        <span className="type-spec">Bebas Neue — All caps — Letter spacing 0.02–0.12em</span>
      </div>
      <div className="t-hero">MAGINARI</div>
      <div data-style="margin-top: 12px; font-size: 12px; color: var(--text-dim);">Used for: Wordmark, brand names, hero text, product names on cards, section titles, CTAs</div>
    </div>

    <div className="type-specimen">
      <div className="type-meta">
        <span className="type-role">Body / UI</span>
        <span className="type-spec">DM Sans — Weight 300 / 400 / 500 — Never bold</span>
      </div>
      <div className="t-body">The latest releases from fashion brands in diaspora. Culture worn as identity — before the world catches up.</div>
      <div data-style="margin-top: 12px; font-size: 12px; color: var(--text-dim);">Used for: All body copy, UI labels, navigation, meta information, descriptions</div>
    </div>

    <div className="type-specimen">
      <div className="type-meta">
        <span className="type-role">Editorial / Pull Quotes</span>
        <span className="type-spec">Playfair Display Italic — Sparingly — Never for UI</span>
      </div>
      <div className="t-editorial">"We don't design clothes. We design evidence that we were here."</div>
      <div data-style="margin-top: 12px; font-size: 12px; color: var(--text-dim);">Used for: Pull quotes, brand story excerpts, manifesto moments only. Maximum 2 instances per page.</div>
    </div>

    <div className="component-label" data-style="margin-top: 16px;">Type Scale</div>
    <div data-style="display: flex; flex-direction: column; gap: 16px;">
      <div data-style="display:flex; align-items:baseline; gap:20px;"><span data-style="font-size:10px;color:var(--text-dim);width:100px;letter-spacing:0.1em;">HERO</span><span className="t-display" data-style="font-size:56px;">FAVELA</span></div>
      <div data-style="display:flex; align-items:baseline; gap:20px;"><span data-style="font-size:10px;color:var(--text-dim);width:100px;letter-spacing:0.1em;">DISPLAY</span><span className="t-title-xl">WHAT'S NEW</span></div>
      <div data-style="display:flex; align-items:baseline; gap:20px;"><span data-style="font-size:10px;color:var(--text-dim);width:100px;letter-spacing:0.1em;">TITLE LG</span><span className="t-title-lg">The Collection</span></div>
      <div data-style="display:flex; align-items:baseline; gap:20px;"><span data-style="font-size:10px;color:var(--text-dim);width:100px;letter-spacing:0.1em;">BODY</span><span data-style="font-size:15px;color:var(--text-muted);font-weight:300;">Retro Jersey — Exclamation Studios</span></div>
      <div data-style="display:flex; align-items:baseline; gap:20px;"><span data-style="font-size:10px;color:var(--text-dim);width:100px;letter-spacing:0.1em;">LABEL</span><span className="t-label">Rio de Janeiro, Brazil</span></div>
      <div data-style="display:flex; align-items:baseline; gap:20px;"><span data-style="font-size:10px;color:var(--text-dim);width:100px;letter-spacing:0.1em;">MICRO</span><span className="t-micro">Exclusive Edition — 50 Units</span></div>
    </div>
  </section>

  {/*  SPACING  */}
  <section className="section" id="spacing">
    <div className="section-eyebrow">03 — Foundation</div>
    <div className="section-title">Spacing</div>
    <div className="section-desc">4px base unit. All spacing is a multiple of 4. Page margins are always 40px on desktop.</div>

    <div className="spacing-row">
      <div className="spacing-item"><div className="spacing-block" data-style="height:4px; width:32px;"></div><span className="spacing-label">4px</span></div>
      <div className="spacing-item"><div className="spacing-block" data-style="height:8px; width:32px;"></div><span className="spacing-label">8px</span></div>
      <div className="spacing-item"><div className="spacing-block" data-style="height:12px; width:32px;"></div><span className="spacing-label">12px</span></div>
      <div className="spacing-item"><div className="spacing-block" data-style="height:16px; width:32px;"></div><span className="spacing-label">16px</span></div>
      <div className="spacing-item"><div className="spacing-block" data-style="height:20px; width:32px;"></div><span className="spacing-label">20px</span></div>
      <div className="spacing-item"><div className="spacing-block" data-style="height:24px; width:32px;"></div><span className="spacing-label">24px</span></div>
      <div className="spacing-item"><div className="spacing-block" data-style="height:32px; width:32px;"></div><span className="spacing-label">32px</span></div>
      <div className="spacing-item"><div className="spacing-block" data-style="height:40px; width:32px;"></div><span className="spacing-label">40px ★</span></div>
      <div className="spacing-item"><div className="spacing-block" data-style="height:48px; width:32px;"></div><span className="spacing-label">48px</span></div>
      <div className="spacing-item"><div className="spacing-block" data-style="height:64px; width:32px;"></div><span className="spacing-label">64px</span></div>
      <div className="spacing-item"><div className="spacing-block" data-style="height:80px; width:32px;"></div><span className="spacing-label">80px</span></div>
    </div>
  </section>

  {/*  GRID  */}
  <section className="section" id="grid">
    <div className="section-eyebrow">04 — Foundation</div>
    <div className="section-title">Grid</div>
    <div className="section-desc">12-column grid. 40px page margin. 20px column gutter. Cards always in 3-column on desktop, 2 on tablet, 1 on mobile.</div>

    <div className="grid-demo">
      <div className="grid-col"></div><div className="grid-col"></div><div className="grid-col"></div>
      <div className="grid-col"></div><div className="grid-col"></div><div className="grid-col"></div>
      <div className="grid-col"></div><div className="grid-col"></div><div className="grid-col"></div>
      <div className="grid-col"></div><div className="grid-col"></div><div className="grid-col"></div>
    </div>
    <div data-style="font-size:11px; color:var(--text-dim); letter-spacing:0.1em;">12 columns — 20px gutter — 40px margin</div>
  </section>

  {/*  NAV  */}
  <section className="section" id="nav">
    <div className="section-eyebrow">05 — Components</div>
    <div className="section-title">Navigation</div>
    <div className="section-desc">Fixed top. Always dark. Wordmark left, search centre, icons right. Never changes.</div>

    <div className="nav-demo">
      <div className="nav-demo-logo">MAGINARI.</div>
      <div className="nav-demo-search">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5a5850" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <span>Search</span>
      </div>
      <div className="nav-demo-icons">
        <svg className="nav-demo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        <svg className="nav-demo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <svg className="nav-demo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      </div>
    </div>
  </section>

  {/*  BRAND CARDS  */}
  <section className="section" id="cards">
    <div className="section-eyebrow">06 — Components</div>
    <div className="section-title">Brand Cards</div>
    <div className="section-desc">The signature component of MAGINARI. Two zones — image top, brand identity bottom. The card body colour is always olive-600 at 88% opacity. Brand name is always Bebas Neue.</div>

    <div className="component-label">Card States</div>
    <div className="component-row">

      <div>
        <div className="component-label">Default</div>
        <div className="brand-card">
          <div className="brand-card-img bc-favela">
            <span className="brand-card-img-label">FAVELA</span>
          </div>
          <div className="brand-card-body">
            <div className="brand-card-name">FAVELA</div>
            <div className="brand-card-origin">Rio de Janeiro</div>
          </div>
        </div>
      </div>

      <div>
        <div className="component-label">With Badge</div>
        <div className="brand-card">
          <div className="brand-card-img bc-coci" data-style="position:relative;">
            <div className="brand-card-badge"><div className="brand-card-badge-dot"></div></div>
            <span className="brand-card-img-label">COCI</span>
          </div>
          <div className="brand-card-body">
            <div className="brand-card-name">COCI</div>
            <div className="brand-card-origin">Lagos, Nigeria</div>
          </div>
        </div>
      </div>

      <div>
        <div className="component-label">With Dashes (Coming Soon)</div>
        <div className="brand-card">
          <div className="brand-card-img bc-empty" data-style="position:relative;">
            <div className="brand-card-dashes"></div>
            <span className="brand-card-img-label" data-style="opacity:0.08;">—</span>
          </div>
          <div className="brand-card-body" data-style="opacity:0.5;">
            <div className="brand-card-name">SOON</div>
            <div className="brand-card-origin">Unrevealed</div>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/*  FEED ITEMS  */}
  <section className="section" id="feed">
    <div className="section-eyebrow">07 — Components</div>
    <div className="section-title">Feed Items</div>
    <div className="section-desc">The editorial feed component from the home page. Thumbnail left, info centre, actions at bottom. Play and Add always present as a pair.</div>

    <div data-style="max-width: 480px;">
      <div className="feed-item">
        <div className="feed-thumb ft-1">
          <span className="feed-thumb-label">FAVEL</span>
        </div>
        <div className="feed-info">
          <div className="feed-brand">Favela</div>
          <div className="feed-product">Retro Jersey</div>
          <div className="feed-studio">Exclamation Studios</div>
          <div className="feed-actions">
            <div className="btn-circle">+</div>
            <div className="btn-circle btn-circle-play">
              <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div className="feed-item">
        <div className="feed-thumb ft-2"></div>
        <div className="feed-info">
          <div className="feed-brand">Icons</div>
          <div className="feed-product">Retro Jersey</div>
          <div className="feed-studio">Exclamation Studios</div>
          <div className="feed-actions">
            <div className="btn-circle">+</div>
            <div className="btn-circle btn-circle-play">
              <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  TOGGLE  */}
  <section className="section" id="toggle">
    <div className="section-eyebrow">08 — Components</div>
    <div className="section-title">Story / Products Toggle</div>
    <div className="section-desc">The core interaction mechanic of the platform. Story is always first. Products always second. Never reversed.</div>

    <div className="component-row">
      <div>
        <div className="component-label">Story Active (Default)</div>
        <div className="toggle-group">
          <button className="toggle-btn">Story</button>
          <button className="toggle-btn active">Products</button>
        </div>
      </div>
      <div>
        <div className="component-label">Products Active</div>
        <div className="toggle-group">
          <button className="toggle-btn active">Story</button>
          <button className="toggle-btn">Products</button>
        </div>
      </div>
    </div>
  </section>

  {/*  BUTTONS  */}
  <section className="section" id="buttons">
    <div className="section-eyebrow">09 — Components</div>
    <div className="section-title">Buttons</div>
    <div className="section-desc">Three button types. Primary for commerce actions. Ghost for secondary. Circle Play for all video/film triggers.</div>

    <div className="component-row" data-style="align-items:center;">
      <div>
        <div className="component-label">Primary CTA</div>
        <button className="btn-primary">Add to Cart</button>
      </div>
      <div>
        <div className="component-label">Ghost</div>
        <button className="btn-ghost">Save to Wishlist</button>
      </div>
      <div>
        <div className="component-label">Circle Play</div>
        <button className="btn-play">
          <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </button>
      </div>
      <div>
        <div className="component-label">Circle Add</div>
        <div className="btn-circle" data-style="width:40px;height:40px;font-size:20px;">+</div>
      </div>
    </div>
  </section>

  {/*  STATES  */}
  <section className="section" id="states">
    <div className="section-eyebrow">10 — Components</div>
    <div className="section-title">Interaction States</div>
    <div className="section-desc">All interactive elements have these four states. Sold out is always visible — never hidden. Coming soon uses the dashed  treatment.</div>

    <div className="state-row">
      <div className="state-tag state-default">Default</div>
      <div className="state-tag state-hover">Hover</div>
      <div className="state-tag state-active">Active</div>
      <div className="state-tag state-sold">Sold Out</div>
      <div className="state-tag state-new">New Drop</div>
    </div>
  </section>

  {/*  RULES  */}
  <section className="section" id="rules">
    <div className="section-eyebrow">11 — Rules</div>
    <div className="section-title">Do / Don't</div>
    <div className="section-desc">These rules are non-negotiable. They protect the cultural authority of the platform.</div>

    <div className="rules-grid">
      <div className="rule-card do">
        <div className="rule-tag">DO</div>
        <div className="rule-text">Story always comes before product. On every page, in every component, the narrative leads.</div>
      </div>
      <div className="rule-card dont">
        <div className="rule-tag">DON'T</div>
        <div className="rule-text">Never list a product without cultural context. No isolated items. No detached commerce.</div>
      </div>
      <div className="rule-card do">
        <div className="rule-tag">DO</div>
        <div className="rule-text">Use olive-400 as the only accent. The restraint is intentional — it makes every use of colour feel significant.</div>
      </div>
      <div className="rule-card dont">
        <div className="rule-tag">DON'T</div>
        <div className="rule-text">Never introduce new colours. No reds, no blues, no whites as backgrounds. The palette is locked.</div>
      </div>
      <div className="rule-card do">
        <div className="rule-tag">DO</div>
        <div className="rule-text">Keep spacing generous. Negative space is authority. Crowded pages signal insecurity.</div>
      </div>
      <div className="rule-card dont">
        <div className="rule-tag">DON'T</div>
        <div className="rule-text">Never use Inter, Roboto, or any system font. Typography is the first signal of quality.</div>
      </div>
      <div className="rule-card do">
        <div className="rule-tag">DO</div>
        <div className="rule-text">Include origin, studio credit, and edition information on every product. Provenance is the product.</div>
      </div>
      <div className="rule-card dont">
        <div className="rule-tag">DON'T</div>
        <div className="rule-text">Never make MAGINARI feel like a marketplace. It is a cultural authority. Tone always reflects that.</div>
      </div>
    </div>
  </section>

  {/*  BRAND VOICE  */}
  <section className="section" id="voice">
    <div className="section-eyebrow">12 — Rules</div>
    <div className="section-title">Brand Voice</div>
    <div className="section-desc">How MAGINARI speaks. Every word on the platform must pass through this filter.</div>

    <div data-style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
      <div data-style="padding: 24px; background: var(--bg-elevated); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
        <div data-style="font-family: var(--type-display); font-size: 28px; color: var(--olive-400); margin-bottom: 12px;">RESTRAINED</div>
        <div data-style="font-size: 13px; color: var(--text-muted); line-height: 1.6;">Says only what needs to be said. Never oversells. Authority doesn't explain itself.</div>
      </div>
      <div data-style="padding: 24px; background: var(--bg-elevated); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
        <div data-style="font-family: var(--type-display); font-size: 28px; color: var(--olive-400); margin-bottom: 12px;">CULTURAL</div>
        <div data-style="font-size: 13px; color: var(--text-muted); line-height: 1.6;">Every word is rooted in the origin of the brand. Never generic. Always specific to the world it comes from.</div>
      </div>
      <div data-style="padding: 24px; background: var(--bg-elevated); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
        <div data-style="font-family: var(--type-display); font-size: 28px; color: var(--olive-400); margin-bottom: 12px;">CERTAIN</div>
        <div data-style="font-size: 13px; color: var(--text-muted); line-height: 1.6;">MAGINARI does not ask. It reveals. Copy is declarative, not interrogative. We saw it first.</div>
      </div>
    </div>

    <div data-style="margin-top: 24px; padding: 28px; background: var(--bg-elevated); border-radius: var(--radius-sm); border-left: 3px solid var(--olive-400);">
      <div data-style="font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--text-dim); margin-bottom: 14px;">Platform Tagline</div>
      <div data-style="font-family: var(--type-display); font-size: 36px; color: var(--text-primary); letter-spacing: 0.04em; margin-bottom: 8px;">THE MAGI SAW IT FIRST.</div>
      <div data-style="font-size: 13px; color: var(--text-dim);">Use on homepage hero, about page, and all brand communications.</div>
    </div>
  </section>

</main>

</body>
</html>

    </>
  );
}
