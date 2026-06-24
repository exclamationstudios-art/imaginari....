import React from 'react';

export function Comp2maginariabout() {
  return (
    <>
      <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>MAGINARI — About</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=Playfair+Display:ital,wght@1,400;1,600&display=swap" rel="stylesheet" />
<style dangerouslySetInnerHTML={{ __html: `
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg:          #2e2e2b;
  --bg-elevated: #363633;
  --bg-card:     #3c3c34;
  --olive:       #b5a96a;
  --olive-dark:  #8a7f50;
  --olive-muted: #6b6440;
  --olive-deep:  #4a4430;
  --olive-body:  #9e9460;
  --text-primary:   #f4f0e4;
  --text-secondary: #e8e4d4;
  --text-muted:     #8a8678;
  --text-dim:       #5a5850;
  --border-subtle:  rgba(181,169,106,0.08);
  --border-light:   rgba(181,169,106,0.15);
  --border-medium:  rgba(181,169,106,0.25);
}

html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--text-secondary);
  font-family: 'DM Sans', sans-serif;
  font-weight: 300;
  min-height: 100vh;
  overflow-x: hidden;
}

::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--olive-muted); border-radius: 2px; }

/* ── NAV — exact from uploads ── */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 40px;
  background: var(--bg);
  border-bottom: 1px solid var(--border-subtle);
}

.nav-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 30px;
  letter-spacing: 0.06em;
  color: var(--olive);
  text-decoration: none;
}

.nav-search {
  display: flex;
  align-items: center;
  gap: 9px;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border-light);
  border-radius: 20px;
  padding: 9px 20px;
  width: 240px;
}

.nav-search input {
  background: none; border: none; outline: none;
  color: var(--text-muted);
  font-family: 'DM Sans', sans-serif;
  font-size: 13px; font-weight: 300; width: 100%;
}
.nav-search input::placeholder { color: var(--text-dim); }

.nav-icons { display: flex; align-items: center; gap: 24px; }

.nav-icon {
  width: 19px; height: 19px;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.2s;
}
.nav-icon:hover { color: var(--olive); }

/* ── MANIFESTO HERO ── */
.manifesto-hero {
  margin-top: 65px;
  padding: 80px 40px 72px;
  border-bottom: 1px solid var(--border-subtle);
  position: relative;
  overflow: hidden;
}

/* Ghost city names in background — from upload aesthetic */
.hero-ghost-text {
  position: absolute;
  font-family: 'Bebas Neue', sans-serif;
  color: rgba(181,169,106,0.04);
  pointer-events: none;
  user-select: none;
  letter-spacing: 0.08em;
}

.ghost-1 { font-size: 200px; top: -20px; right: -20px; line-height: 1; }
.ghost-2 { font-size: 120px; bottom: 0; left: 30%; line-height: 1; }

.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 10px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--olive-muted);
  margin-bottom: 24px;
}

.hero-eyebrow::before {
  content: '';
  width: 28px; height: 1px;
  background: var(--olive-muted);
}

/* Page heading — "What's New" weight contrast style from page 2 */
.hero-heading {
  font-size: clamp(42px, 7vw, 80px);
  font-weight: 300;
  color: var(--text-primary);
  line-height: 1.05;
  letter-spacing: -0.01em;
  margin-bottom: 32px;
  max-width: 700px;
  position: relative;
  z-index: 1;
}

.hero-heading strong {
  font-weight: 500;
  color: var(--olive);
}

.hero-declaration {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 20px;
  line-height: 1.6;
  color: var(--text-muted);
  max-width: 520px;
  position: relative;
  z-index: 1;
}

/* ── MANIFESTO TEXT SECTION ── */
.manifesto-section {
  padding: 72px 40px;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 80px;
  border-bottom: 1px solid var(--border-subtle);
}

.manifesto-left {}

/* Section label — "This month" style from page 2 */
.section-label {
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 300;
  color: var(--text-primary);
  letter-spacing: -0.01em;
  margin-bottom: 20px;
}

.manifesto-number {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 120px;
  color: rgba(181,169,106,0.06);
  line-height: 1;
  letter-spacing: 0.02em;
  margin-top: 32px;
}

.manifesto-right {}

.manifesto-statement {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(32px, 4.5vw, 52px);
  letter-spacing: 0.03em;
  color: var(--text-primary);
  line-height: 1.05;
  margin-bottom: 28px;
}

.manifesto-statement em {
  color: var(--olive);
  font-style: normal;
}

.manifesto-body {
  font-size: 15px;
  line-height: 1.85;
  color: var(--text-muted);
  font-weight: 300;
  margin-bottom: 20px;
}

.manifesto-body em {
  color: var(--olive);
  font-style: normal;
  font-weight: 400;
}

/* Pull quote — Playfair with olive left  */
.pull-quote {
  margin: 32px 0;
  padding-left: 20px;
  border-left: 2px solid var(--olive-muted);
}

.pull-quote p {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 18px;
  line-height: 1.6;
  color: var(--text-muted);
}

/* ── THREE PILLARS — card grid language from page 1 ── */
.pillars-section {
  padding: 72px 40px;
  border-bottom: 1px solid var(--border-subtle);
}

.pillars-header {
  margin-bottom: 40px;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Pillar card — uses exact card structure from page 1 */
.pillar-card {
  border-radius: 10px;
  overflow: hidden;
  cursor: default;
}

/* Image zone — exact bg card from page 1 */
.pillar-img {
  aspect-ratio: 1 / 0.75;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.pi-1 { background: linear-gradient(160deg, #192030 0%, #0d1525 100%); }
.pi-2 { background: linear-gradient(160deg, #251520 0%, #150d15 100%); }
.pi-3 { background: linear-gradient(160deg, #201510 0%, #150d08 100%); }

.pillar-img-number {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 100px;
  color: rgba(181,169,106,0.08);
  letter-spacing: 0.04em;
  line-height: 1;
}

.pillar-img-icon {
  position: absolute;
  bottom: 20px; left: 20px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 13px;
  letter-spacing: 0.2em;
  color: rgba(181,169,106,0.35);
  text-transform: uppercase;
}

/* Card body — exact olive/khaki from page 1 */
.pillar-body {
  background: var(--olive-body);
  border-radius: 0 0 10px 10px;
  padding: 18px 18px 22px;
  opacity: 0.9;
}

.pillar-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 28px;
  letter-spacing: 0.1em;
  color: #2a2a25;
  line-height: 1;
  margin-bottom: 8px;
}

.pillar-desc {
  font-size: 12px;
  line-height: 1.65;
  color: rgba(42,42,35,0.6);
  font-weight: 300;
}

/* ── FEED SECTION — page 2 exact ── */
.feed-section {
  padding: 72px 40px;
  border-bottom: 1px solid var(--border-subtle);
}

.feed-section-heading {
  font-size: clamp(36px, 5vw, 52px);
  font-weight: 300;
  color: var(--text-primary);
  line-height: 1.1;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.feed-section-heading strong {
  font-weight: 500;
  color: var(--olive);
}

.feed-section-sub {
  font-size: 14px;
  color: var(--text-dim);
  margin-bottom: 32px;
}

/* Toggle — exact from page 2 */
.toggle-row {
  display: flex;
  margin-bottom: 32px;
}

.toggle-btn {
  padding: 9px 22px;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  cursor: pointer;
  border: 1px solid var(--border-light);
  background: none;
  color: var(--text-dim);
  transition: all 0.2s;
}

.toggle-btn:first-child { border-radius: 20px 0 0 20px; }
.toggle-btn:last-child  { border-radius: 0 20px 20px 0; border-left: none; }
.toggle-btn.active { background: var(--olive-muted); border-color: var(--olive-muted); color: var(--text-primary); }

/* Feed items — exact from page 2 */
.feed-list { max-width: 580px; }

.feed-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 22px 0;
  border-bottom: 1px solid var(--border-subtle);
  cursor: pointer;
  transition: opacity 0.2s;
}

.feed-item:hover { opacity: 0.75; }

.feed-thumb {
  width: 92px; height: 92px;
  border-radius: 6px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ft-1 { background: linear-gradient(145deg, #192030 0%, #0d1525 100%); }
.ft-2 { background: var(--olive-deep); }
.ft-3 { background: linear-gradient(145deg, #201510 0%, #100a05 100%); }

.ft-text {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 12px;
  color: rgba(181,169,106,0.25);
  letter-spacing: 0.08em;
}

.feed-info { flex: 1; }

.feed-brand { font-size: 15px; font-weight: 400; color: var(--text-secondary); margin-bottom: 2px; }
.feed-product { font-size: 15px; font-weight: 300; color: var(--text-secondary); margin-bottom: 8px; }
.feed-studio { font-size: 13px; color: var(--text-dim); }

.feed-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
}

/* Circle buttons — exact from page 2 */
.btn-circle {
  width: 32px; height: 32px;
  border-radius: 50%;
  background: rgba(181,169,106,0.1);
  border: 1px solid var(--border-light);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  color: var(--olive);
  font-size: 17px;
  line-height: 1;
}

.btn-circle:hover { background: rgba(181,169,106,0.2); }

.btn-circle.play svg {
  width: 11px; height: 11px;
  fill: var(--olive);
  margin-left: 2px;
}

/* ── STUDIO SECTION ── */
.studio-section {
  padding: 72px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  border-bottom: 1px solid var(--border-subtle);
}

.studio-left {}

.studio-img {
  aspect-ratio: 4/3;
  border-radius: 10px;
  background: linear-gradient(145deg, #252520 0%, #151510 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.studio-img-label {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 56px;
  color: rgba(181,169,106,0.08);
  letter-spacing: 0.1em;
}

/* Studio badge in corner — from page 1 */
.studio-badge {
  position: absolute;
  top: 16px; right: 16px;
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(181,169,106,0.4);
  background: rgba(42,42,39,0.6);
  border: 1px solid rgba(181,169,106,0.15);
  padding: 5px 10px;
  border-radius: 2px;
}

.studio-right {}

.studio-eyebrow {
  font-size: 10px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--olive-muted);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.studio-eyebrow::before {
  content: '';
  width: 24px; height: 1px;
  background: var(--olive-muted);
}

.studio-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 48px;
  letter-spacing: 0.04em;
  color: var(--text-primary);
  line-height: 1;
  margin-bottom: 20px;
}

.studio-name em {
  color: var(--olive);
  font-style: normal;
}

.studio-body {
  font-size: 14px;
  line-height: 1.8;
  color: var(--text-muted);
  margin-bottom: 28px;
}

.studio-meta {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.studio-meta-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border-subtle);
}

.studio-meta-row:last-child { border-bottom: none; }

.meta-key {
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.meta-val {
  font-size: 13px;
  color: var(--text-muted);
}

/* ── CTA SECTION ── */
.cta-section {
  padding: 80px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-ghost {
  position: absolute;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 280px;
  color: rgba(181,169,106,0.03);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: 0.04em;
  pointer-events: none;
  white-space: nowrap;
}

.cta-eyebrow {
  font-size: 10px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--olive-muted);
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.cta-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(48px, 8vw, 96px);
  letter-spacing: 0.04em;
  color: var(--text-primary);
  line-height: 0.95;
  margin-bottom: 24px;
  position: relative;
  z-index: 1;
}

.cta-title em {
  color: var(--olive);
  font-style: normal;
}

.cta-sub {
  font-size: 14px;
  color: var(--text-muted);
  max-width: 400px;
  margin: 0 auto 40px;
  line-height: 1.7;
  position: relative;
  z-index: 1;
}

.cta-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: relative;
  z-index: 1;
}

.btn-primary {
  padding: 16px 40px;
  background: var(--olive);
  border: none;
  color: var(--bg);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 18px;
  letter-spacing: 0.12em;
  cursor: pointer;
  border-radius: 3px;
  transition: background 0.2s, transform 0.15s;
}

.btn-primary:hover { background: #c4b870; transform: translateY(-2px); }

.btn-ghost {
  padding: 15px 32px;
  background: none;
  border: 1px solid var(--border-medium);
  color: var(--text-muted);
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.2s;
}

.btn-ghost:hover { border-color: var(--olive); color: var(--olive); }

/* ── CHEVRON DOWN — exact from page 2 ── */
.chevron-down {
  display: flex;
  justify-content: center;
  padding: 16px 0 40px;
  cursor: pointer;
}

.chevron-down svg {
  width: 24px; height: 14px;
  stroke: var(--text-dim);
  fill: none;
  strokeWidth: 1.5;
  transition: stroke 0.2s, transform 0.2s;
}

.chevron-down:hover svg { stroke: var(--olive); transform: translateY(3px); }

/* ── FOOTER ── */
footer {
  padding: 40px;
  border-top: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  letter-spacing: 0.08em;
  color: var(--olive-muted);
}

.footer-sub {
  font-size: 11px;
  letter-spacing: 0.12em;
  color: var(--text-dim);
  margin-top: 3px;
}

/* ── ANIMATIONS ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}

.manifesto-hero  { animation: fadeUp 0.6s ease both; }
.manifesto-section { animation: fadeUp 0.6s ease 0.1s both; }
.pillars-section { animation: fadeUp 0.6s ease 0.15s both; }
` }} />
</head>
<body>

{/*  NAV — exact from uploads  */}
<nav>
  <a href="#" className="nav-logo">MAGINARI.</a>
  <div className="nav-search">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#5a5850" strokeWidth="2">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
    <input type="text" placeholder="Search" />
  </div>
  <div className="nav-icons">
    <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
    <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
    <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  </div>
</nav>

{/*  MANIFESTO HERO  */}
<div className="manifesto-hero">
  <span className="hero-ghost-text ghost-1">MAGI</span>
  <span className="hero-ghost-text ghost-2">NARI</span>

  <div className="hero-eyebrow">About MAGINARI</div>

  <h1 className="hero-heading">
    Not a store.<br />
    A cultural <strong>engine.</strong>
  </h1>

  <p className="hero-declaration">
    MAGINARI exists because diaspora culture has always been ahead — and the world has always been late. We are not here to follow trends. We are here to make them visible before they become trends.
  </p>
</div>

{/*  MANIFESTO TEXT  */}
<div className="manifesto-section">
  <div className="manifesto-left">
    <div className="section-label">The Manifesto</div>
    <div className="manifesto-number">01</div>
  </div>
  <div className="manifesto-right">
    <div className="manifesto-statement">
      THE MAGI SAW IT<br /><em>FIRST.</em>
    </div>
    <p className="manifesto-body">
      The Magi were not kings. They were seers. They crossed borders, read signs that others couldn't see, and arrived before the world caught up. That is MAGINARI.
    </p>
    <p className="manifesto-body">
      We are a curated discovery platform built for <em>culturally-driven fashion brands</em> whose stories have been told from the margins — not because the work wasn't worthy of the centre, but because the centre wasn't paying attention.
    </p>
    <div className="pull-quote">
      <p>"Every garment on this platform exists because a culture refused to be invisible. MAGINARI just makes sure the world sees it — before it's too late to be early."</p>
    </div>
    <p className="manifesto-body">
      Diaspora is not our category. It is our <em>source of power.</em> The creativity that emerges from living between worlds — between Lagos and London, Rio and Rotterdam, Accra and Amsterdam — produces a visual language that is more original, more layered, and more enduring than anything trend-cycle fashion can manufacture.
    </p>
  </div>
</div>

{/*  THREE PILLARS — card grid from page 1  */}
<div className="pillars-section">
  <div className="pillars-header">
    <div className="section-label">What we stand for</div>
  </div>

  <div className="pillars-grid">

    <div className="pillar-card">
      <div className="pillar-img pi-1">
        <span className="pillar-img-number">01</span>
        <span className="pillar-img-icon">Curation</span>
      </div>
      <div className="pillar-body">
        <div className="pillar-name">CURATION</div>
        <p className="pillar-desc">Not everything gets in. Presence on MAGINARI signals cultural value before the market confirms it. The gatekeeping is the product.</p>
      </div>
    </div>

    <div className="pillar-card">
      <div className="pillar-img pi-2">
        <span className="pillar-img-number">02</span>
        <span className="pillar-img-icon">Story</span>
      </div>
      <div className="pillar-body">
        <div className="pillar-name">STORY FIRST</div>
        <p className="pillar-desc">Every product on this platform is inseparable from its origin, its maker, and its cultural intent. Commerce is always secondary to context.</p>
      </div>
    </div>

    <div className="pillar-card">
      <div className="pillar-img pi-3">
        <span className="pillar-img-number">03</span>
        <span className="pillar-img-icon">Authority</span>
      </div>
      <div className="pillar-body">
        <div className="pillar-name">AUTHORITY</div>
        <p className="pillar-desc">MAGINARI does not follow taste. It sets it. By the time the world catches up, our brands have already moved forward.</p>
      </div>
    </div>

  </div>
</div>

{/*  FEED SECTION — exact from page 2  */}
<div className="feed-section">
  <div className="feed-section-heading">What's <strong>New</strong></div>
  <div className="feed-section-sub">The latest releases from fashion brands in diaspora</div>

  <div className="toggle-row">
    <button className="toggle-btn" onclick="switchTab(this)">Story</button>
    <button className="toggle-btn active" onclick="switchTab(this)">Products</button>
  </div>

  <div className="feed-list">

    <div className="feed-item">
      <div className="feed-thumb ft-1">
        <span className="ft-text">FAVEL</span>
      </div>
      <div className="feed-info">
        <div className="feed-brand">Favela</div>
        <div className="feed-product">Retro Jersey</div>
        <div className="feed-studio">Exclamation Studios</div>
        <div className="feed-actions">
          <button className="btn-circle">+</button>
          <button className="btn-circle play">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
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
          <button className="btn-circle">+</button>
          <button className="btn-circle play">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
        </div>
      </div>
    </div>

    {/*  "This month" label exact from page 2  */}
    <div data-style="font-size:clamp(22px,3vw,32px);font-weight:300;color:var(--text-primary);letter-spacing:-0.01em;padding:28px 0 4px;">This month</div>

    <div className="feed-item">
      <div className="feed-thumb ft-3">
        <span className="ft-text">COCI</span>
      </div>
      <div className="feed-info">
        <div className="feed-brand">Favela</div>
        <div className="feed-product">Retro Jersey</div>
        <div className="feed-studio">Exclamation Studios</div>
        <div className="feed-actions">
          <button className="btn-circle">+</button>
          <button className="btn-circle play">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
        </div>
      </div>
    </div>

  </div>
</div>

{/*  CHEVRON DOWN — exact from page 2  */}
<div className="chevron-down" onclick="window.scrollBy({top:400,behavior:'smooth'})">
  <svg viewBox="0 0 24 14"><polyline points="2,2 12,12 22,2"/></svg>
</div>

{/*  STUDIO SECTION  */}
<div className="studio-section">
  <div className="studio-left">
    <div className="studio-img">
      <span className="studio-img-label">EXCLAMATION</span>
      <div className="studio-badge">Exclamation Studios</div>
    </div>
  </div>
  <div className="studio-right">
    <div className="studio-eyebrow">Built by</div>
    <div className="studio-name">EXCLAMATION<br /><em>STUDIOS</em></div>
    <p className="studio-body">
      MAGINARI is a product of Exclamation Studios — a creative agency with 20 years of experience in brand identity, visual storytelling, and cultural design. We built MAGINARI because we kept seeing the same problem: extraordinary cultural fashion brands with no worthy platform to call home.
    </p>
    <div className="studio-meta">
      <div className="studio-meta-row">
        <span className="meta-key">Founded</span>
        <span className="meta-val">Exclamation Studios, Lagos</span>
      </div>
      <div className="studio-meta-row">
        <span className="meta-key">Experience</span>
        <span className="meta-val">20 years in brand and visual design</span>
      </div>
      <div className="studio-meta-row">
        <span className="meta-key">Speciality</span>
        <span className="meta-val">Cultural branding, editorial design</span>
      </div>
      <div className="studio-meta-row">
        <span className="meta-key">Platform</span>
        <span className="meta-val">MAGINARI — Cultural Discovery</span>
      </div>
    </div>
  </div>
</div>

{/*  CTA  */}
<div className="cta-section">
  <div className="cta-ghost">MAGINARI</div>
  <div className="cta-eyebrow">Join the platform</div>
  <div className="cta-title">YOUR BRAND.<br /><em>YOUR STORY.</em><br />YOUR WORLD.</div>
  <p className="cta-sub">Every culturally-driven fashion brand has a story worth telling. MAGINARI is where that story finds its global audience — before the world catches up.</p>
  <div className="cta-buttons">
    <button className="btn-primary">Apply to MAGINARI</button>
    <button className="btn-ghost">Explore Brands</button>
  </div>
</div>

{/*  FOOTER  */}
<footer>
  <div>
    <div className="footer-logo">MAGINARI.</div>
    <div className="footer-sub">Exclamation Studios © 2025</div>
  </div>
  <div data-style="font-size:11px;color:var(--text-dim);letter-spacing:0.1em;text-align:right;">
    Culture Envisioned.<br />
    <span data-style="opacity:0.5;">All rights reserved.</span>
  </div>
</footer>

<script>
  function switchTab(el) {
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
  }
</script>

</body>
</html>

    </>
  );
}
