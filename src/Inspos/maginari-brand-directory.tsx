import React from 'react';

export function Maginaribranddirectory() {
  return (
    <>
      <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>MAGINARI — All Brands</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=Playfair+Display:ital@1&display=swap" rel="stylesheet" />
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
  min-height: 100vh;
}

::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--olive-muted); border-radius: 2px; }

/* ── NAV — exact from upload ── */
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
  position: relative;
}
.nav-icon:hover { color: var(--olive); }

.nav-icon-dot {
  position: absolute;
  top: -2px; right: -2px;
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--olive);
}

/* ── PAGE INTRO — Page 2 heading style ── */
.page-intro {
  margin-top: 65px;
  padding: 52px 40px 36px;
}

.page-heading {
  font-size: clamp(36px, 5vw, 52px);
  font-weight: 300;
  color: var(--text-primary);
  line-height: 1.1;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.page-heading strong {
  font-weight: 500;
  color: var(--olive);
}

.page-subheading {
  font-size: 14px;
  color: var(--text-dim);
  letter-spacing: 0.02em;
  margin-bottom: 28px;
}

/* Story / Products toggle — exact from page 2 */
.toggle-row {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 0;
}

.toggle-btn {
  padding: 9px 22px;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  letter-spacing: 0.02em;
  cursor: pointer;
  border: 1px solid var(--border-light);
  background: none;
  color: var(--text-dim);
  transition: all 0.2s;
  border-radius: 0;
}

.toggle-btn:first-child { border-radius: 20px 0 0 20px; }
.toggle-btn:last-child  { border-radius: 0 20px 20px 0; border-left: none; }

.toggle-btn.active {
  background: var(--olive-muted);
  border-color: var(--olive-muted);
  color: var(--text-primary);
}

/* ── FILTER BAR ── */
.filter-bar {
  padding: 0 40px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-subtle);
}

.filter-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-label {
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-right: 4px;
}

.filter-pill {
  padding: 6px 14px;
  border-radius: 14px;
  border: 1px solid var(--border-light);
  background: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--text-dim);
  cursor: pointer;
  transition: all 0.2s;
}

.filter-pill:hover { border-color: var(--olive); color: var(--olive); }
.filter-pill.active { background: var(--olive-muted); border-color: var(--olive-muted); color: var(--text-primary); }

.filter-count {
  font-size: 11px;
  letter-spacing: 0.12em;
  color: var(--text-dim);
}

/* ── SECTION LABEL — exact from page 2 "This month" ── */
.section-label {
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 300;
  color: var(--text-primary);
  letter-spacing: -0.01em;
  padding: 40px 40px 24px;
}

/* ── CARD GRID — exact from page 1 ── */
.card-grid {
  padding: 0 40px 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Brand card — exact component from page 1 */
.brand-card {
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s;
  position: relative;
}

.brand-card:hover { transform: translateY(-5px); }
.brand-card:hover .bc-img-wrap img,
.brand-card:hover .bc-img-wrap .bc-img-inner { transform: scale(1.03); }

/* Image zone — top 58% of card */
.bc-img-wrap {
  position: relative;
  aspect-ratio: 1 / 0.9;
  background: var(--bg-card);
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bc-img-inner {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease;
}

/* Unique background per brand — matches upload color worlds */
.bg-favela  { background: linear-gradient(160deg, #192030 0%, #0d1525 60%, #131825 100%); }
.bg-coci    { background: linear-gradient(160deg, #d4cdb0 0%, #c8c098 50%, #b8b088 100%); }
.bg-icons   { background: linear-gradient(160deg, #111115 0%, #0a0a10 60%, #080810 100%); }
.bg-sure    { background: linear-gradient(160deg, #201820 0%, #150d15 60%, #100a10 100%); }
.bg-accra   { background: linear-gradient(160deg, #201510 0%, #150d08 60%, #100a05 100%); }
.bg-coming  { background: linear-gradient(160deg, #1e1e1c 0%, #181815 100%); }

/* Studio badge — top right, exact from page 1 */
.bc-studio-badge {
  position: absolute;
  top: 10px; right: 10px;
  z-index: 2;
  width: 34px; height: 34px;
  border-radius: 50%;
  background: rgba(42,42,39,0.55);
  border: 1px solid rgba(181,169,106,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
}

.bc-studio-badge svg {
  width: 14px; height: 14px;
  fill: none;
  stroke: rgba(181,169,106,0.5);
  strokeWidth: 1.5;
}

/* Dashed  — coming soon, exact from page 1 */
.bc-dashed {
  position: absolute;
  inset: 8px;
  border: 1.5px dashed rgba(181,169,106,0.18);
  border-radius: 6px;
  pointer-events: none;
  z-index: 1;
}

/* Brand image placeholder illustration */
.bc-product-visual {
  width: 75%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.bc-product-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 52px;
  color: rgba(181,169,106,0.12);
  letter-spacing: 0.08em;
  text-align: center;
}

/* For coci — light background like upload */
.bg-coci .bc-product-name { color: rgba(100,90,50,0.2); }

/* Card body — olive/khaki bottom zone, exact from page 1 */
.bc-body {
  background: #9e9460;
  padding: 18px 18px 22px;
  border-radius: 0 0 10px 10px;
  opacity: 0.9;
}

/* Brand name typography — custom distressed feel per upload */
.bc-brand-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 32px;
  letter-spacing: 0.1em;
  color: #2a2a25;
  line-height: 1;
  margin-bottom: 6px;
}

/* Coci has different typography in upload — more display/editorial */
.bc-brand-name.coci-style {
  font-size: 36px;
  letter-spacing: 0.06em;
}

.bc-origin {
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(42,42,35,0.55);
  margin-bottom: 10px;
}

.bc-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(42,42,35,0.12);
}

.bc-story-count {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(42,42,35,0.5);
}

/* Small circle buttons — exact from page 2 */
.btn-sm-circle {
  width: 28px; height: 28px;
  border-radius: 50%;
  background: rgba(42,42,35,0.15);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  color: rgba(42,42,35,0.6);
  font-size: 15px;
  line-height: 1;
}

.btn-sm-circle:hover { background: rgba(42,42,35,0.28); }

.btn-sm-circle.play svg {
  width: 9px; height: 9px;
  fill: rgba(42,42,35,0.6);
  margin-left: 2px;
}

/* Coming soon card */
.bc-body.coming {
  background: #5a5540;
  opacity: 0.45;
}

/* ── FEED VIEW — page 2 exact ── */
.feed-view {
  display: none;
  padding: 0 40px;
  flex-direction: column;
}

.feed-view.visible { display: flex; }

.feed-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 22px 0;
  border-bottom: 1px solid var(--border-subtle);
  cursor: pointer;
  transition: opacity 0.2s;
}

.feed-item:hover { opacity: 0.78; }

/* Thumbnail — exact square from page 2 */
.feed-thumb {
  width: 92px; height: 92px;
  border-radius: 6px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.ft-favela { background: linear-gradient(145deg, #192030 0%, #0d1525 100%); }
.ft-coci   { background: linear-gradient(145deg, #d4cdb0 0%, #b8b088 100%); }
.ft-icons  { background: linear-gradient(145deg, #111115 0%, #080810 100%); }
.ft-sure   { background: linear-gradient(145deg, #201820 0%, #100a10 100%); }
.ft-accra  { background: linear-gradient(145deg, #201510 0%, #100a05 100%); }

.ft-label {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 13px;
  color: rgba(181,169,106,0.25);
  letter-spacing: 0.08em;
}

.ft-label.dark { color: rgba(80,70,30,0.3); }

.feed-info { flex: 1; }

/* Text hierarchy exact from page 2 */
.feed-brand-name {
  font-size: 15px;
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: 2px;
}

.feed-product-name {
  font-size: 15px;
  font-weight: 300;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.feed-studio-name {
  font-size: 13px;
  color: var(--text-dim);
  letter-spacing: 0.02em;
}

/* Feed actions row — + left, ▶ right, exact from page 2 */
.feed-action-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding-top: 0;
}

.btn-feed-circle {
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

.btn-feed-circle:hover { background: rgba(181,169,106,0.2); }

.btn-feed-circle.play svg {
  width: 11px; height: 11px;
  fill: var(--olive);
  margin-left: 2px;
}

/* ── CHEVRON DOWN — exact from page 2 ── */
.chevron-down {
  display: flex;
  justify-content: center;
  padding: 32px 0 48px;
  cursor: pointer;
}

.chevron-down svg {
  width: 24px; height: 14px;
  stroke: var(--text-dim);
  fill: none;
  strokeWidth: 1.5;
  transition: stroke 0.2s, transform 0.2s;
}

.chevron-down:hover svg {
  stroke: var(--olive);
  transform: translateY(3px);
}

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
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.page-intro  { animation: fadeUp 0.5s ease both; }
.filter-bar  { animation: fadeUp 0.5s ease 0.1s both; }
.card-grid   { animation: fadeUp 0.6s ease 0.15s both; }
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
    <div data-style="position:relative;">
      <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
      <div className="nav-icon-dot"></div>
    </div>
  </div>
</nav>

{/*  PAGE INTRO — page 2 heading style  */}
<div className="page-intro">
  <div className="page-heading">The <strong>Brands</strong></div>
  <div className="page-subheading">Culturally-driven fashion from the diaspora — curated by MAGINARI</div>

  {/*  Toggle — exact from page 2  */}
  <div className="toggle-row">
    <button className="toggle-btn active" id="btn-grid" onclick="switchView('grid', this)">Story</button>
    <button className="toggle-btn" id="btn-feed" onclick="switchView('feed', this)">Products</button>
  </div>
</div>

{/*  FILTER BAR  */}
<div className="filter-bar">
  <div className="filter-left">
    <span className="filter-label">Region</span>
    <button className="filter-pill active">All</button>
    <button className="filter-pill">West Africa</button>
    <button className="filter-pill">Latin America</button>
    <button className="filter-pill">East Africa</button>
    <button className="filter-pill">Diaspora UK</button>
  </div>
  <span className="filter-count">5 brands — 2 coming soon</span>
</div>

{/*  SECTION LABEL — "This month" style from page 2  */}
<div className="section-label">Featured</div>

{/*  CARD GRID — exact from page 1  */}
<div className="card-grid" id="grid-view">

  {/*  FAVELA  */}
  <div className="brand-card">
    <div className="bc-img-wrap">
      <div className="bc-img-inner bg-favela">
        <div className="bc-product-visual">
          <span className="bc-product-name">FAVELA</span>
        </div>
      </div>
      <div className="bc-studio-badge">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
      </div>
    </div>
    <div className="bc-body">
      <div className="bc-brand-name">FAVELA</div>
      <div className="bc-origin">Rio de Janeiro, Brazil</div>
      <div className="bc-actions">
        <span className="bc-story-count">3 drops · 2 stories</span>
        <div data-style="display:flex;gap:8px;">
          <button className="btn-sm-circle">+</button>
          <button className="btn-sm-circle play">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  {/*  COCI  */}
  <div className="brand-card">
    <div className="bc-img-wrap">
      <div className="bc-img-inner bg-coci">
        <div className="bc-studio-badge" data-style="right:10px;top:10px;">
          <svg viewBox="0 0 24 24" data-style="stroke:rgba(100,90,50,0.5);"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
        </div>
        <div className="bc-product-visual">
          <span className="bc-product-name" data-style="color:rgba(100,90,40,0.18);">COCI</span>
        </div>
      </div>
    </div>
    <div className="bc-body">
      <div className="bc-brand-name coci-style">COCi</div>
      <div className="bc-origin">Lagos, Nigeria</div>
      <div className="bc-actions">
        <span className="bc-story-count">2 drops · 3 stories</span>
        <div data-style="display:flex;gap:8px;">
          <button className="btn-sm-circle">+</button>
          <button className="btn-sm-circle play">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  {/*  ICONS  */}
  <div className="brand-card">
    <div className="bc-img-wrap">
      <div className="bc-img-inner bg-icons">
        <div className="bc-product-visual">
          <span className="bc-product-name">ICONS</span>
        </div>
      </div>
    </div>
    <div className="bc-body">
      <div className="bc-brand-name">ICONS</div>
      <div className="bc-origin">Accra, Ghana</div>
      <div className="bc-actions">
        <span className="bc-story-count">1 drop · 1 story</span>
        <div data-style="display:flex;gap:8px;">
          <button className="btn-sm-circle">+</button>
          <button className="btn-sm-circle play">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>

</div>

{/*  SECOND ROW SECTION LABEL  */}
<div className="section-label">This season</div>

<div className="card-grid" data-style="padding-bottom:48px;">

  {/*  SURULERE  */}
  <div className="brand-card">
    <div className="bc-img-wrap">
      <div className="bc-img-inner bg-sure">
        <div className="bc-product-visual">
          <span className="bc-product-name">SURULERE</span>
        </div>
      </div>
    </div>
    <div className="bc-body">
      <div className="bc-brand-name">SURULERE</div>
      <div className="bc-origin">Lagos, Nigeria</div>
      <div className="bc-actions">
        <span className="bc-story-count">2 drops · 1 story</span>
        <div data-style="display:flex;gap:8px;">
          <button className="btn-sm-circle">+</button>
          <button className="btn-sm-circle play">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  {/*  ACCRA COLLECTIVE  */}
  <div className="brand-card">
    <div className="bc-img-wrap">
      <div className="bc-img-inner bg-accra">
        <div className="bc-product-visual">
          <span className="bc-product-name">ACCRA</span>
        </div>
      </div>
    </div>
    <div className="bc-body">
      <div className="bc-brand-name">ACCRA CO.</div>
      <div className="bc-origin">Accra, Ghana</div>
      <div className="bc-actions">
        <span className="bc-story-count">1 drop · 2 stories</span>
        <div data-style="display:flex;gap:8px;">
          <button className="btn-sm-circle">+</button>
          <button className="btn-sm-circle play">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  {/*  COMING SOON — dashed  exact from page 1  */}
  <div className="brand-card">
    <div className="bc-img-wrap" data-style="opacity:0.4;">
      <div className="bc-img-inner bg-coming">
        <div className="bc-dashes" data-style="position:absolute;inset:8px;border:1.5px dashed rgba(181,169,106,0.2);border-radius:6px;pointer-events:none;"></div>
        <div className="bc-product-visual">
          <span className="bc-product-name" data-style="opacity:0.3;">—</span>
        </div>
      </div>
    </div>
    <div className="bc-body coming">
      <div className="bc-brand-name">COMING</div>
      <div className="bc-origin">Unrevealed</div>
    </div>
  </div>

</div>

{/*  FEED VIEW — page 2 exact layout (hidden by default)  */}
<div className="feed-view" id="feed-view">

  <div className="feed-item">
    <div className="feed-thumb ft-favela">
      <span className="ft-label">FAVEL</span>
    </div>
    <div className="feed-info">
      <div className="feed-brand-name">Favela</div>
      <div className="feed-product-name">Retro Jersey</div>
      <div className="feed-studio-name">Exclamation Studios</div>
      <div className="feed-action-row">
        <button className="btn-feed-circle">+</button>
        <button className="btn-feed-circle play">
          <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </button>
      </div>
    </div>
  </div>

  <div className="feed-item">
    <div className="feed-thumb ft-coci">
      <span className="ft-label dark">COCI</span>
    </div>
    <div className="feed-info">
      <div className="feed-brand-name">Coci</div>
      <div className="feed-product-name">Lagos Sweatshirt</div>
      <div className="feed-studio-name">Exclamation Studios</div>
      <div className="feed-action-row">
        <button className="btn-feed-circle">+</button>
        <button className="btn-feed-circle play">
          <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </button>
      </div>
    </div>
  </div>

  <div className="feed-item">
    <div className="feed-thumb ft-icons">
      <span className="ft-label">ICONS</span>
    </div>
    <div className="feed-info">
      <div className="feed-brand-name">Icons</div>
      <div className="feed-product-name">Retro Jersey</div>
      <div className="feed-studio-name">Exclamation Studios</div>
      <div className="feed-action-row">
        <button className="btn-feed-circle">+</button>
        <button className="btn-feed-circle play">
          <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </button>
      </div>
    </div>
  </div>

  <div data-style="padding: 32px 0 12px; font-size: clamp(22px, 3vw, 32px); font-weight: 300; color: var(--text-primary); letter-spacing: -0.01em;">This season</div>

  <div className="feed-item">
    <div className="feed-thumb ft-sure">
      <span className="ft-label">SURE</span>
    </div>
    <div className="feed-info">
      <div className="feed-brand-name">Surulere</div>
      <div className="feed-product-name">Street Tee Vol. 2</div>
      <div className="feed-studio-name">Exclamation Studios</div>
      <div className="feed-action-row">
        <button className="btn-feed-circle">+</button>
        <button className="btn-feed-circle play">
          <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </button>
      </div>
    </div>
  </div>

  <div className="feed-item">
    <div className="feed-thumb ft-accra">
      <span className="ft-label">ACCRA</span>
    </div>
    <div className="feed-info">
      <div className="feed-brand-name">Accra Co.</div>
      <div className="feed-product-name">Heritage Cap</div>
      <div className="feed-studio-name">Exclamation Studios</div>
      <div className="feed-action-row">
        <button className="btn-feed-circle">+</button>
        <button className="btn-feed-circle play">
          <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </button>
      </div>
    </div>
  </div>

</div>

{/*  CHEVRON DOWN — exact from page 2  */}
<div className="chevron-down" id="chevron">
  <svg viewBox="0 0 24 14" xmlns="http://www.w3.org/2000/svg">
    <polyline points="2,2 12,12 22,2"/>
  </svg>
</div>

{/*  FOOTER  */}
<footer>
  <div>
    <div className="footer-logo">MAGINARI.</div>
    <div className="footer-sub">Exclamation Studios © 2025</div>
  </div>
  <div data-style="font-size:11px;color:var(--text-dim);letter-spacing:0.1em;text-align:right;">
    Culture Envisioned.
  </div>
</footer>

<script>
  // Toggle between grid and feed — Story/Products mechanic from page 2
  function switchView(view, el) {
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');

    const gridView = document.getElementById('grid-view');
    const feedView = document.getElementById('feed-view');
    const allGrids = document.querySelectorAll('.card-grid');
    const sectionLabels = document.querySelectorAll('.section-label');

    if (view === 'grid') {
      allGrids.forEach(g => g.style.display = 'grid');
      sectionLabels.forEach(l => l.style.display = 'block');
      feedView.classList.remove('visible');
    } else {
      allGrids.forEach(g => g.style.display = 'none');
      sectionLabels.forEach(l => l.style.display = 'none');
      feedView.classList.add('visible');
    }
  }

  // Filter pills
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // Chevron scrolls down
  document.getElementById('chevron').addEventListener('click', () => {
    window.scrollBy({ top: 400, behavior: 'smooth' });
  });
</script>

</body>
</html>

    </>
  );
}
