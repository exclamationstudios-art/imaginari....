import React from 'react';

export function Maginaristorypage() {
  return (
    <>
      <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>MAGINARI — Stories</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=Playfair+Display:ital,wght@1,400;1,600&display=swap" rel="stylesheet" />
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
  --border-medium:  rgba(181,169,106,0.25);
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
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border-light);
  border-radius: 20px;
  padding: 8px 18px;
  width: 220px;
}

.nav-search input {
  background: none; border: none; outline: none;
  color: var(--text-muted);
  font-family: 'DM Sans', sans-serif;
  font-size: 13px; font-weight: 300; width: 100%;
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

/* ── PAGE HEADER ── */
.page-header {
  margin-top: 65px;
  padding: 60px 40px 48px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-end;
  border-bottom: 1px solid var(--border-subtle);
}

.page-eyebrow {
  font-size: 10px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--olive-700);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.page-eyebrow::before {
  content: '';
  width: 28px; height: 1px;
  background: var(--olive-700);
}

.page-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(56px, 9vw, 100px);
  letter-spacing: 0.03em;
  color: var(--text-primary);
  line-height: 0.9;
  margin-bottom: 16px;
}

.page-title em {
  color: var(--olive-400);
  font-style: normal;
}

.page-desc {
  font-size: 14px;
  color: var(--text-muted);
  max-width: 380px;
  line-height: 1.7;
}

.page-header-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}

/* Filter pills */
.filter-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.filter-pill {
  padding: 7px 16px;
  border-radius: 20px;
  border: 1px solid var(--border-light);
  background: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-dim);
  cursor: pointer;
  transition: all 0.2s;
}

.filter-pill:hover { border-color: var(--olive-400); color: var(--olive-400); }
.filter-pill.active { background: var(--olive-700); border-color: var(--olive-700); color: var(--text-primary); }

/* ── FEATURED STORY — HERO EDITORIAL ── */
.featured-story {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  min-height: 520px;
  border-bottom: 1px solid var(--border-subtle);
  cursor: pointer;
  overflow: hidden;
  transition: opacity 0.2s;
}

.featured-story:hover .featured-img-inner { transform: scale(1.02); }

.featured-img {
  position: relative;
  overflow: hidden;
  min-height: 520px;
}

.featured-img-inner {
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, #1a2535 0%, #0a1020 50%, #151520 100%);
  transition: transform 0.6s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.featured-img-label {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 120px;
  color: rgba(181,169,106,0.07);
  letter-spacing: 0.08em;
  user-select: none;
}

/* Film grain on featured */
.featured-img::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  background-size: 180px;
  pointer-events: none;
  mix-blend-mode: overlay;
}

/* Overlay gradient */
.featured-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, transparent 60%, var(--bg) 100%);
  pointer-events: none;
}

/* Featured badge */
.featured-badge {
  position: absolute;
  top: 28px; left: 28px;
  font-size: 9px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--olive-300);
  background: rgba(42,42,39,0.75);
  border: 1px solid var(--border-medium);
  padding: 5px 12px;
  border-radius: 2px;
  backdrop-filter: blur(4px);
}

/* Play button on featured */
.featured-play {
  position: absolute;
  bottom: 28px; left: 28px;
  width: 52px; height: 52px;
  border-radius: 50%;
  background: var(--olive-400);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, background 0.2s;
}

.featured-play:hover { transform: scale(1.1); background: var(--olive-300); }

.featured-play svg {
  width: 16px; height: 16px;
  fill: var(--bg);
  margin-left: 3px;
}

/* Featured text side */
.featured-text {
  padding: 52px 48px 48px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.featured-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.featured-brand-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.featured-brand-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--olive-400);
}

.featured-brand-name {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--olive-400);
}

.featured-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(36px, 4vw, 52px);
  letter-spacing: 0.03em;
  color: var(--text-primary);
  line-height: 1.0;
  margin-bottom: 20px;
}

.featured-excerpt {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 16px;
  line-height: 1.65;
  color: var(--text-muted);
  margin-bottom: 20px;
}

.featured-body {
  font-size: 13px;
  line-height: 1.8;
  color: var(--text-dim);
  margin-bottom: 32px;
}

.featured-body em {
  color: var(--olive-400);
  font-style: normal;
  font-weight: 400;
}

.featured-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid var(--border-subtle);
}

.featured-origin {
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.read-link {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--olive-400);
  text-decoration: none;
  cursor: pointer;
  transition: gap 0.2s;
}

.read-link:hover { gap: 13px; }
.read-link::after { content: '→'; font-size: 13px; }

/* ── STORY GRID ── */
.story-grid-section {
  padding: 64px 40px;
}

.grid-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 36px;
}

.grid-section-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 32px;
  letter-spacing: 0.04em;
  color: var(--text-primary);
}

.grid-section-count {
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.story-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* Story card */
.story-card {
  cursor: pointer;
  transition: transform 0.25s;
}

.story-card:hover { transform: translateY(-5px); }
.story-card:hover .sc-img-inner { transform: scale(1.04); }

.sc-img {
  aspect-ratio: 16/10;
  border-radius: 6px 6px 0 0;
  overflow: hidden;
  position: relative;
}

.sc-img-inner {
  position: absolute;
  inset: 0;
  transition: transform 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sc-1 { background: linear-gradient(145deg, #1a2535 0%, #0d1520 100%); }
.sc-2 { background: linear-gradient(145deg, #252515 0%, #151510 100%); }
.sc-3 { background: linear-gradient(145deg, #201525 0%, #100d15 100%); }
.sc-4 { background: linear-gradient(145deg, #151a20 0%, #0d1015 100%); }
.sc-5 { background: linear-gradient(145deg, #201a10 0%, #100d08 100%); }
.sc-6 { background: linear-gradient(145deg, #1a2015 0%, #0d1008 100%); }

.sc-img-label {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 36px;
  color: rgba(181,169,106,0.1);
  letter-spacing: 0.1em;
}

/* Story type badge */
.sc-type {
  position: absolute;
  top: 10px; left: 10px;
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 4px 9px;
  border-radius: 2px;
}

.sc-type.film   { color: var(--olive-300); background: rgba(181,169,106,0.12); border: 1px solid rgba(181,169,106,0.22); }
.sc-type.origin { color: #a8c8a0; background: rgba(100,160,90,0.1); border: 1px solid rgba(100,160,90,0.2); }
.sc-type.drop   { color: var(--text-muted); background: rgba(90,88,80,0.2); border: 1px solid rgba(90,88,80,0.3); }

.sc-body {
  padding: 18px 0 0;
}

.sc-brand {
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--olive-700);
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.sc-brand::before {
  content: '';
  width: 16px; height: 1px;
  background: var(--olive-700);
}

.sc-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  letter-spacing: 0.04em;
  color: var(--text-primary);
  line-height: 1.1;
  margin-bottom: 8px;
}

.sc-excerpt {
  font-size: 12px;
  line-height: 1.65;
  color: var(--text-dim);
  margin-bottom: 14px;
}

.sc-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid var(--border-subtle);
}

.sc-origin {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.sc-read {
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--olive-700);
  cursor: pointer;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
}

.sc-read:hover { color: var(--olive-400); gap: 9px; }
.sc-read::after { content: '→'; }

/* ── PULL QUOTE DIVIDER ── */
.pull-quote-divider {
  padding: 56px 40px;
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 48px;
  align-items: center;
}

.pq-number {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 120px;
  line-height: 1;
  color: rgba(181,169,106,0.06);
  letter-spacing: 0.02em;
  user-select: none;
}

.pq-content {}

.pq-text {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: clamp(20px, 3vw, 32px);
  line-height: 1.45;
  color: var(--text-muted);
  margin-bottom: 20px;
}

.pq-text em {
  color: var(--olive-400);
  font-style: normal;
}

.pq-attribution {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-dim);
  display: flex;
  align-items: center;
  gap: 12px;
}

.pq-attribution::before {
  content: '';
  width: 24px; height: 1px;
  background: var(--text-dim);
}

/* ── SECOND STORY ROW — asymmetric ── */
.story-asymmetric {
  padding: 64px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
}

/* Large story card — spans 2 cols */
.story-card-large {
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition:  0.25s;
}

.story-card-large:hover { border-color: var(--border-medium); }
.story-card-large:hover .scl-img-inner { transform: scale(1.03); }

.scl-img {
  position: relative;
  overflow: hidden;
  min-height: 340px;
}

.scl-img-inner {
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, #252515 0%, #151510 100%);
  transition: transform 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scl-img-label {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 56px;
  color: rgba(181,169,106,0.09);
  letter-spacing: 0.1em;
}

.scl-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, transparent 50%, rgba(42,42,39,0.3) 100%);
  pointer-events: none;
}

.scl-text {
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--bg-elevated);
}

.scl-brand {
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--olive-700);
  margin-bottom: 10px;
}

.scl-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 30px;
  letter-spacing: 0.03em;
  color: var(--text-primary);
  line-height: 1.1;
  margin-bottom: 14px;
}

.scl-excerpt {
  font-size: 12px;
  line-height: 1.7;
  color: var(--text-dim);
  flex: 1;
}

.scl-footer {
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.scl-origin {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.scl-read {
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--olive-700);
  cursor: pointer;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
}

.scl-read:hover { color: var(--olive-400); gap: 9px; }
.scl-read::after { content: '→'; }

/* Tall narrow story card */
.story-card-tall {
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition:  0.25s, transform 0.25s;
}

.story-card-tall:hover { border-color: var(--border-medium); transform: translateY(-4px); }
.story-card-tall:hover .sct-img-inner { transform: scale(1.04); }

.sct-img {
  flex: 1;
  position: relative;
  overflow: hidden;
  min-height: 240px;
}

.sct-img-inner {
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, #201525 0%, #100d15 100%);
  transition: transform 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sct-img-label {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 38px;
  color: rgba(181,169,106,0.09);
  letter-spacing: 0.1em;
}

.sct-body {
  padding: 20px;
  background: var(--bg-elevated);
}

.sct-brand {
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--olive-700);
  margin-bottom: 7px;
}

.sct-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  letter-spacing: 0.03em;
  color: var(--text-primary);
  line-height: 1.1;
  margin-bottom: 8px;
}

.sct-excerpt {
  font-size: 11px;
  line-height: 1.65;
  color: var(--text-dim);
}

/* ── MANIFESTO CTA ── */
.manifesto-cta {
  margin: 0 40px 80px;
  padding: 56px 48px;
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 40px;
  background: linear-gradient(135deg, rgba(181,169,106,0.03) 0%, transparent 60%);
}

.mc-left {}

.mc-eyebrow {
  font-size: 10px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--olive-700);
  margin-bottom: 12px;
}

.mc-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 48px;
  letter-spacing: 0.04em;
  color: var(--text-primary);
  line-height: 1;
  margin-bottom: 12px;
}

.mc-title em {
  color: var(--olive-400);
  font-style: normal;
}

.mc-sub {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
  max-width: 400px;
}

.btn-primary {
  padding: 16px 40px;
  background: var(--olive-400);
  border: none;
  color: var(--bg);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 18px;
  letter-spacing: 0.12em;
  cursor: pointer;
  border-radius: 3px;
  white-space: nowrap;
  transition: background 0.2s, transform 0.15s;
}

.btn-primary:hover { background: var(--olive-300); transform: translateY(-2px); }

/* ── FOOTER ── */
footer {
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border-subtle);
}

.footer-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  letter-spacing: 0.08em;
  color: var(--olive-700);
}

.footer-sub {
  font-size: 11px;
  letter-spacing: 0.12em;
  color: var(--text-dim);
  margin-top: 4px;
}

/* ── ANIMATIONS ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.page-header { animation: fadeUp 0.6s ease both; }
.featured-story { animation: fadeUp 0.7s ease 0.1s both; }
.story-grid-section { animation: fadeUp 0.7s ease 0.2s both; }
` }} />
</head>
<body>

{/*  NAV  */}
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

{/*  PAGE HEADER  */}
<div className="page-header">
  <div>
    <div className="page-eyebrow">Cultural Archive</div>
    <div className="page-title">THE<br /><em>STORIES</em></div>
    <p className="page-desc">Every brand on MAGINARI exists because of a story. This is where those stories live — before the product, behind the drop, beneath the garment.</p>
  </div>
  <div className="page-header-right">
    <div className="filter-row">
      <button className="filter-pill active">All</button>
      <button className="filter-pill">Film</button>
      <button className="filter-pill">Origin</button>
      <button className="filter-pill">Drop</button>
      <button className="filter-pill">Interview</button>
    </div>
  </div>
</div>

{/*  FEATURED STORY  */}
<div className="featured-story">
  <div className="featured-img">
    <div className="featured-img-inner">
      <span className="featured-img-label">FAVELA</span>
    </div>
    <div className="featured-img-overlay"></div>
    <div className="featured-badge">Featured Story</div>
    <button className="featured-play">
      <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
    </button>
  </div>

  <div className="featured-text">
    <div>
      <div className="featured-meta">
        <div className="featured-brand-tag">
          <div className="featured-brand-dot"></div>
          <span className="featured-brand-name">Favela — Rio de Janeiro</span>
        </div>
      </div>
      <div className="featured-title">Born From<br />The Hill</div>
      <p className="featured-excerpt">"We don't design clothes. We design evidence that we were here."</p>
      <p className="featured-body">
        Favela is not a reference. It is not aesthetic borrowed from the outside.<br /><br />
        <em>It is the inside, made wearable.</em><br /><br />
        Founded in the comunidades of Rio de Janeiro, every piece carries the weight of a neighbourhood that has always dressed with intention — even when the world looked away. The retro jersey is not nostalgia. It is a document.
      </p>
    </div>
    <div className="featured-footer">
      <span className="featured-origin">Exclamation Studios — 2025</span>
      <a className="read-link">Read the story</a>
    </div>
  </div>
</div>

{/*  STORY GRID — RECENT  */}
<div className="story-grid-section">
  <div className="grid-header">
    <span className="grid-section-title">Recent Stories</span>
    <span className="grid-section-count">12 stories this season</span>
  </div>

  <div className="story-grid">

    <div className="story-card">
      <div className="sc-img">
        <div className="sc-img-inner sc-1">
          <span className="sc-img-label">FAVELA</span>
        </div>
        <span className="sc-type film">Film</span>
      </div>
      <div className="sc-body">
        <div className="sc-brand">Favela</div>
        <div className="sc-title">The Making of the Retro Jersey</div>
        <p className="sc-excerpt">A documentary of the design process — from comunidade wall to finished garment. Shot entirely on the streets of Rio.</p>
        <div className="sc-footer">
          <span className="sc-origin">Rio de Janeiro</span>
          <span className="sc-read">Watch</span>
        </div>
      </div>
    </div>

    <div className="story-card">
      <div className="sc-img">
        <div className="sc-img-inner sc-2">
          <span className="sc-img-label">COCI</span>
        </div>
        <span className="sc-type origin">Origin</span>
      </div>
      <div className="sc-body">
        <div className="sc-brand">Coci</div>
        <div className="sc-title">Lagos as a Living Garment</div>
        <p className="sc-excerpt">How the chaos and colour of Lagos Island became the visual language of an entire collection.</p>
        <div className="sc-footer">
          <span className="sc-origin">Lagos, Nigeria</span>
          <span className="sc-read">Read</span>
        </div>
      </div>
    </div>

    <div className="story-card">
      <div className="sc-img">
        <div className="sc-img-inner sc-3">
          <span className="sc-img-label">ICONS</span>
        </div>
        <span className="sc-type drop">Drop</span>
      </div>
      <div className="sc-body">
        <div className="sc-brand">Icons</div>
        <div className="sc-title">Why the Drop Matters More Than the Product</div>
        <p className="sc-excerpt">Icons on releasing with intention — why they will never do unlimited runs and what scarcity means to cultural fashion.</p>
        <div className="sc-footer">
          <span className="sc-origin">Accra, Ghana</span>
          <span className="sc-read">Read</span>
        </div>
      </div>
    </div>

  </div>
</div>

{/*  PULL QUOTE DIVIDER  */}
<div className="pull-quote-divider">
  <div className="pq-number">01</div>
  <div className="pq-content">
    <p className="pq-text">
      "The diaspora doesn't need permission to define <em>global taste.</em> It has been doing so quietly for decades. MAGINARI just makes it visible."
    </p>
    <div className="pq-attribution">Exclamation Studios — MAGINARI Manifesto</div>
  </div>
</div>

{/*  ASYMMETRIC STORY GRID  */}
<div className="story-asymmetric">

  <div className="story-card-large">
    <div className="scl-img">
      <div className="scl-img-inner">
        <span className="scl-img-label">SURULERE</span>
      </div>
      <div className="scl-overlay"></div>
    </div>
    <div className="scl-text">
      <div>
        <div className="scl-brand">Surulere — Lagos</div>
        <div className="scl-title">The Neighbourhood That Dressed the City</div>
        <p className="scl-excerpt">
          Before Victoria Island became Lagos, Surulere was where style was born. This is the story of a neighbourhood that never needed validation — and the brand that carries that legacy forward, stitch by stitch.
        </p>
      </div>
      <div className="scl-footer">
        <span className="scl-origin">Lagos, Nigeria</span>
        <span className="scl-read">Read the story</span>
      </div>
    </div>
  </div>

  <div className="story-card-tall">
    <div className="sct-img">
      <div className="sct-img-inner">
        <span className="sct-img-label">DIASPORA</span>
      </div>
    </div>
    <div className="sct-body">
      <div className="sct-brand">MAGINARI — Editorial</div>
      <div className="sct-title">What Diaspora Fashion Really Means in 2025</div>
      <p className="sct-excerpt">Not a trend. Not a category. A force that has been shaping global culture from the margins — now moving to the centre.</p>
    </div>
  </div>

</div>

{/*  MANIFESTO CTA  */}
<div className="manifesto-cta">
  <div className="mc-left">
    <div className="mc-eyebrow">Submit Your Story</div>
    <div className="mc-title">YOUR BRAND.<br /><em>YOUR STORY.</em></div>
    <p className="mc-sub">Every culturally-driven fashion brand has a story worth telling. MAGINARI is where that story finds its audience — before the world catches up.</p>
  </div>
  <button className="btn-primary">Apply to MAGINARI</button>
</div>

{/*  FOOTER  */}
<footer>
  <div>
    <div className="footer-logo">MAGINARI.</div>
    <div className="footer-sub">Exclamation Studios © 2025</div>
  </div>
  <div data-style="font-size:11px;color:var(--text-dim);letter-spacing:0.1em;text-align:right;">
    Culture Envisioned.<br />
    <span data-style="color:var(--text-ghost,#3a3830);">All rights reserved.</span>
  </div>
</footer>

<script>
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });
</script>

</body>
</html>

    </>
  );
}
