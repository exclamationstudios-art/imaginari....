import React from 'react';

export function Maginarihomepage() {
  return (
    <>
      <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>MAGINARI — Culture Envisioned</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet" />
<style dangerouslySetInnerHTML={{ __html: `
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg:          #2a2a27;
  --bg-elevated: #323230;
  --bg-card:     #3a3a32;
  --olive-300:   #c4b870;
  --olive-400:   #b5a96a;
  --olive-600:   #8a7f50;
  --olive-700:   #6b6440;
  --olive-800:   #4a4430;
  --text-primary:   #f4f0e4;
  --text-secondary: #e8e4d4;
  --text-muted:     #8a8678;
  --text-dim:       #5a5850;
  --border-subtle:  rgba(181,169,106,0.08);
  --border-light:   rgba(181,169,106,0.15);
}

html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--text-secondary);
  font-family: 'DM Sans', sans-serif;
  font-weight: 300;
  overflow-x: hidden;
}

::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--olive-700); border-radius: 2px; }

/* ── NAV ── */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background: transparent;
  transition: background 0.4s,  0.4s;
}

nav.scrolled {
  background: var(--bg);
  border-bottom: 1px solid var(--border-subtle);
}

.nav-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 28px;
  letter-spacing: 0.08em;
  color: var(--olive-400);
  text-decoration: none;
}

.nav-search {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--border-light);
  border-radius: 20px;
  padding: 8px 18px;
  width: 220px;
}

.nav-search input {
  background: none;
  border: none;
  outline: none;
  color: var(--text-muted);
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 300;
  width: 100%;
}

.nav-search input::placeholder { color: var(--text-dim); }

.nav-icons { display: flex; align-items: center; gap: 22px; }

.nav-icon {
  width: 18px; height: 18px;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.2s;
}
.nav-icon:hover { color: var(--olive-400); }

/* ── HERO ── */
.hero {
  position: relative;
  height: 100vh;
  min-height: 640px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
}

/* Layered background — cultural depth */
.hero-bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom,
      rgba(42,42,39,0.2) 0%,
      rgba(42,42,39,0.0) 30%,
      rgba(42,42,39,0.5) 65%,
      rgba(42,42,39,0.95) 100%),
    linear-gradient(135deg,
      #1a2010 0%,
      #2a2a1a 35%,
      #1a1a2a 65%,
      #1a2018 100%);
}

/* Grain texture */
.hero-grain {
  position: absolute;
  inset: 0;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-size: 200px 200px;
  pointer-events: none;
}

/* Film strip — right edge detail */
.hero-filmstrip {
  position: absolute;
  top: 0; right: 60px;
  width: 2px;
  height: 100%;
  background: repeating-linear-gradient(
    to bottom,
    rgba(181,169,106,0.25) 0px,
    rgba(181,169,106,0.25) 18px,
    transparent 18px,
    transparent 28px
  );
  pointer-events: none;
}

/* Floating city labels — atmosphere */
.hero-city-labels {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.city-label {
  position: absolute;
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.15em;
  color: rgba(181,169,106,0.06);
  user-select: none;
}

/* Hero content */
.hero-content {
  position: relative;
  z-index: 10;
  padding: 0 40px 64px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-end;
  gap: 40px;
}

.hero-left {}

.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 10px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--olive-700);
  margin-bottom: 16px;
  opacity: 0;
  animation: fadeUp 0.6s ease 0.2s forwards;
}

.hero-eyebrow-line {
  width: 32px;
  height: 1px;
  background: var(--olive-700);
}

.hero-headline {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(80px, 13vw, 160px);
  line-height: 0.88;
  letter-spacing: 0.02em;
  color: var(--text-primary);
  margin-bottom: 24px;
  opacity: 0;
  animation: fadeUp 0.7s ease 0.35s forwards;
}

.hero-headline em {
  color: var(--olive-400);
  font-style: normal;
}

.hero-sub {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 18px;
  color: var(--text-muted);
  line-height: 1.5;
  max-width: 400px;
  margin-bottom: 36px;
  opacity: 0;
  animation: fadeUp 0.7s ease 0.5s forwards;
}

.hero-cta-row {
  display: flex;
  align-items: center;
  gap: 20px;
  opacity: 0;
  animation: fadeUp 0.7s ease 0.65s forwards;
}

.btn-primary {
  padding: 14px 36px;
  background: var(--olive-400);
  border: none;
  color: var(--bg);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 18px;
  letter-spacing: 0.12em;
  cursor: pointer;
  border-radius: 3px;
  transition: background 0.2s, transform 0.15s;
}

.btn-primary:hover {
  background: var(--olive-300);
  transform: translateY(-2px);
}

.btn-ghost-link {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-dim);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s, gap 0.2s;
}

.btn-ghost-link:hover { color: var(--olive-400); gap: 12px; }
.btn-ghost-link::after { content: '→'; font-size: 14px; }

/* Hero right — featured drop */
.hero-right {
  opacity: 0;
  animation: fadeRight 0.8s ease 0.7s forwards;
  flex-shrink: 0;
}

.hero-drop-card {
  width: 200px;
  cursor: pointer;
  transition: transform 0.25s;
}

.hero-drop-card:hover { transform: translateY(-6px); }

.hero-drop-img {
  width: 100%;
  aspect-ratio: 3/3.8;
  border-radius: 6px 6px 0 0;
  background: linear-gradient(145deg, #1a2535 0%, #0d1520 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-drop-img-label {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 40px;
  color: rgba(181,169,106,0.14);
  letter-spacing: 0.1em;
}

.hero-drop-new {
  position: absolute;
  top: 10px; left: 10px;
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--olive-300);
  background: rgba(181,169,106,0.12);
  border: 1px solid rgba(181,169,106,0.25);
  padding: 4px 8px;
  border-radius: 2px;
}

.hero-drop-body {
  background: var(--olive-600);
  border-radius: 0 0 6px 6px;
  padding: 12px 14px 14px;
  opacity: 0.88;
}

.hero-drop-brand {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  letter-spacing: 0.08em;
  color: var(--bg);
  line-height: 1;
}

.hero-drop-name {
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(42,42,39,0.55);
  margin-top: 2px;
}

/* ── SCROLL INDICATOR ── */
.scroll-indicator {
  position: absolute;
  bottom: 64px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: 0;
  animation: fadeIn 1s ease 1.2s forwards;
  z-index: 10;
}

.scroll-indicator-text {
  font-size: 9px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.scroll-indicator-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--olive-700), transparent);
  animation: scrollPulse 2s ease infinite;
}

/* ── WHAT'S NEW SECTION ── */
.whats-new {
  padding: 80px 40px;
}

.section-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 40px;
}

.section-header-left {}

.section-eyebrow {
  font-size: 10px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--olive-700);
  margin-bottom: 6px;
}

.section-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 48px;
  letter-spacing: 0.03em;
  color: var(--text-primary);
  line-height: 1;
}

.section-title-accent {
  color: var(--olive-400);
}

.section-sub {
  font-size: 13px;
  color: var(--text-dim);
  margin-top: 4px;
  letter-spacing: 0.04em;
}

.section-link {
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-dim);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: color 0.2s, gap 0.2s;
}

.section-link:hover { color: var(--olive-400); gap: 12px; }
.section-link::after { content: '→'; }

/* Toggle */
.toggle-group {
  display: inline-flex;
  margin-bottom: 36px;
}

.toggle-btn {
  padding: 10px 24px;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  letter-spacing: 0.06em;
  cursor: pointer;
  border: 1px solid var(--border-light);
  background: none;
  color: var(--text-dim);
  transition: all 0.2s;
}

.toggle-btn:first-child { border-radius: 20px 0 0 20px; }
.toggle-btn:last-child { border-radius: 0 20px 20px 0; border-left: none; }
.toggle-btn.active { background: var(--olive-700); border-color: var(--olive-700); color: var(--text-primary); }
.toggle-btn:hover:not(.active) { color: var(--text-muted); }

/* Feed list */
.feed-list {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}

.feed-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px 0;
  border-bottom: 1px solid var(--border-subtle);
  cursor: pointer;
  transition: opacity 0.2s;
}

.feed-item:hover { opacity: 0.8; }

.feed-thumb {
  width: 88px;
  height: 88px;
  border-radius: 4px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.ft-favela { background: linear-gradient(145deg, #1a1a20 0%, #0d0d15 100%); }
.ft-icons  { background: var(--olive-800); }
.ft-coci   { background: linear-gradient(145deg, #201a10 0%, #100d08 100%); }

.feed-thumb-text {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 12px;
  color: rgba(181,169,106,0.25);
  letter-spacing: 0.1em;
}

.feed-info { flex: 1; }

.feed-brand {
  font-size: 14px;
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: 2px;
}

.feed-product {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.feed-studio {
  font-size: 11px;
  color: var(--text-dim);
  letter-spacing: 0.06em;
}

.feed-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
}

.btn-circle {
  width: 32px; height: 32px;
  border-radius: 50%;
  background: rgba(181,169,106,0.1);
  border: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  color: var(--olive-400);
  font-size: 16px;
}

.btn-circle:hover { background: rgba(181,169,106,0.2); }

.btn-circle-play svg {
  width: 11px; height: 11px;
  fill: var(--olive-400);
  margin-left: 2px;
}

/* Section label */
.time-label {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 28px;
  letter-spacing: 0.06em;
  color: var(--text-primary);
  margin-top: 48px;
  margin-bottom: 4px;
}

/* ── BRAND GRID ── */
.brand-section {
  padding: 0 40px 80px;
}

.brand-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.brand-card {
  cursor: pointer;
  transition: transform 0.25s;
}

.brand-card:hover { transform: translateY(-5px); }

.brand-card-img {
  width: 100%;
  aspect-ratio: 3/3.5;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.bc-favela { background: linear-gradient(145deg, #1a2535 0%, #0d1520 100%); }
.bc-coci   { background: linear-gradient(145deg, #252520 0%, #151512 100%); }
.bc-empty  {
  background: linear-gradient(145deg, #201a25 0%, #100d15 100%);
  border: 1.5px dashed rgba(181,169,106,0.15);
  border-radius: 8px 8px 0 0;
}

.brand-card-studio-badge {
  position: absolute;
  top: 10px; right: 10px;
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(181,169,106,0.5);
  background: rgba(42,42,39,0.6);
  padding: 4px 8px;
  border-radius: 2px;
  border: 1px solid rgba(181,169,106,0.12);
}

.brand-card-img-label {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 44px;
  color: rgba(181,169,106,0.13);
  letter-spacing: 0.1em;
}

.brand-card-body {
  background: var(--olive-600);
  border-radius: 0 0 8px 8px;
  padding: 14px 16px 18px;
  opacity: 0.88;
}

.brand-card-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 26px;
  letter-spacing: 0.08em;
  color: var(--bg);
  line-height: 1;
  margin-bottom: 2px;
}

.brand-card-origin {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(42,42,39,0.55);
}

/* ── MANIFESTO BAR ── */
.manifesto-bar {
  padding: 64px 40px;
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  text-align: center;
}

.manifesto-text {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(32px, 5vw, 64px);
  letter-spacing: 0.06em;
  color: var(--text-primary);
  line-height: 1.1;
}

.manifesto-text em {
  color: var(--olive-400);
  font-style: normal;
}

.manifesto-sub {
  margin-top: 16px;
  font-size: 13px;
  color: var(--text-dim);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* ── FOOTER ── */
footer {
  padding: 48px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  letter-spacing: 0.08em;
  color: var(--olive-700);
}

.footer-sub {
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-top: 4px;
}

.footer-right {
  font-size: 11px;
  color: var(--text-dim);
  letter-spacing: 0.1em;
  text-align: right;
}

/* ── ANIMATIONS ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeRight {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.4; transform: scaleY(1); }
  50% { opacity: 1; transform: scaleY(1.15); }
}
` }} />
</head>
<body>

{/*  NAV  */}
<nav id="main-nav">
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

{/*  HERO  */}
<section className="hero">
  <div className="hero-bg"></div>
  <div className="hero-grain"></div>
  <div className="hero-filmstrip"></div>

  {/*  Atmospheric city labels  */}
  <div className="hero-city-labels">
    <span className="city-label" data-style="top:12%;left:8%;font-size:80px;">LAGOS</span>
    <span className="city-label" data-style="top:30%;right:15%;font-size:60px;">RIO</span>
    <span className="city-label" data-style="top:55%;left:20%;font-size:48px;">ACCRA</span>
    <span className="city-label" data-style="bottom:25%;right:25%;font-size:36px;">SURULERE</span>
  </div>

  <div className="hero-content">
    <div className="hero-left">
      <div className="hero-eyebrow">
        <span className="hero-eyebrow-line"></span>
        Cultural Discovery Platform
      </div>
      <h1 className="hero-headline">THE<br />MAGI<br /><em>SAW IT</em><br />FIRST.</h1>
      <p className="hero-sub">Where diaspora fashion finds its global voice. Story before product. Culture before commerce.</p>
      <div className="hero-cta-row">
        <button className="btn-primary">Explore Drops</button>
        <a className="btn-ghost-link">How it works</a>
      </div>
    </div>

    <div className="hero-right">
      <div className="hero-drop-card">
        <div className="hero-drop-img">
          <div className="hero-drop-new">New Drop</div>
          <span className="hero-drop-img-label">FAVELA</span>
        </div>
        <div className="hero-drop-body">
          <div className="hero-drop-brand">FAVELA</div>
          <div className="hero-drop-name">Retro Jersey — Vol. 1</div>
        </div>
      </div>
    </div>
  </div>

  <div className="scroll-indicator">
    <div className="scroll-indicator-line"></div>
    <span className="scroll-indicator-text">Scroll</span>
  </div>
</section>

{/*  WHAT'S NEW  */}
<section className="whats-new">
  <div className="section-header">
    <div className="section-header-left">
      <div className="section-eyebrow">Latest Releases</div>
      <div className="section-title">What's <span className="section-title-accent">New</span></div>
      <div className="section-sub">The latest releases from fashion brands in diaspora</div>
    </div>
    <a className="section-link">View all</a>
  </div>

  <div className="toggle-group">
    <button className="toggle-btn" onclick="switchFeedTab('story',this)">Story</button>
    <button className="toggle-btn active" onclick="switchFeedTab('products',this)">Products</button>
  </div>

  <div className="feed-list" id="feed-content">

    <div className="feed-item">
      <div className="feed-thumb ft-favela">
        <span className="feed-thumb-text">FAVEL</span>
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
      <div className="feed-thumb ft-icons"></div>
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

    <div className="time-label">This Month</div>

    <div className="feed-item">
      <div className="feed-thumb ft-coci">
        <span className="feed-thumb-text">COCI</span>
      </div>
      <div className="feed-info">
        <div className="feed-brand">Coci</div>
        <div className="feed-product">Lagos Sweatshirt</div>
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

{/*  BRAND GRID  */}
<section className="brand-section">
  <div className="section-header" data-style="margin-bottom:32px;">
    <div className="section-header-left">
      <div className="section-eyebrow">The Brands</div>
      <div className="section-title">On MAGINARI</div>
    </div>
    <a className="section-link">All brands</a>
  </div>

  <div className="brand-grid">

    <div className="brand-card">
      <div className="brand-card-img bc-favela">
        <div className="brand-card-studio-badge">Exclamation Studios</div>
        <span className="brand-card-img-label">FAVELA</span>
      </div>
      <div className="brand-card-body">
        <div className="brand-card-name">FAVELA</div>
        <div className="brand-card-origin">Rio de Janeiro, Brazil</div>
      </div>
    </div>

    <div className="brand-card">
      <div className="brand-card-img bc-coci">
        <div className="brand-card-studio-badge">Exclamation Studios</div>
        <span className="brand-card-img-label">COCI</span>
      </div>
      <div className="brand-card-body">
        <div className="brand-card-name">COCI</div>
        <div className="brand-card-origin">Lagos, Nigeria</div>
      </div>
    </div>

    <div className="brand-card">
      <div className="brand-card-img bc-empty">
        <span className="brand-card-img-label" data-style="opacity:0.4;">—</span>
      </div>
      <div className="brand-card-body" data-style="opacity:0.4;">
        <div className="brand-card-name">COMING</div>
        <div className="brand-card-origin">Unrevealed</div>
      </div>
    </div>

  </div>
</section>

{/*  MANIFESTO BAR  */}
<div className="manifesto-bar">
  <div className="manifesto-text">
    CULTURE WORN.<br />
    <em>STORY FIRST.</em><br />
    WORLD AFTER.
  </div>
  <div className="manifesto-sub">MAGINARI — A Cultural Discovery Platform by Exclamation Studios</div>
</div>

{/*  FOOTER  */}
<footer>
  <div>
    <div className="footer-logo">MAGINARI.</div>
    <div className="footer-sub">Exclamation Studios © 2025</div>
  </div>
  <div className="footer-right">
    Culture Envisioned.<br />
    <span data-style="color:var(--text-ghost);">All rights reserved.</span>
  </div>
</footer>

<script>
  // Nav scroll behaviour
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Feed toggle
  function switchFeedTab(tab, el) {
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
  }
</script>

</body>
</html>

    </>
  );
}
