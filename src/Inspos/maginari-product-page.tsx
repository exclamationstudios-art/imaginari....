import React from 'react';

export function Maginariproductpage() {
  return (
    <>
      <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>MAGINARI — Favela Retro Jersey</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Playfair+Display:ital@1&display=swap" rel="stylesheet" />
<style dangerouslySetInnerHTML={{ __html: `
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --bg: #2a2a27;
    --bg-card: #3a3a32;
    --olive: #b5a96a;
    --olive-dark: #8a7f50;
    --olive-muted: #6b6440;
    --text: #e8e4d4;
    --text-muted: #8a8678;
    --text-dim: #5a5850;
    --white: #f4f0e4;
    --accent: #c4b870;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    min-height: 100vh;
  }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--olive-muted); border-radius: 2px; }

  /* ── NAV ── */
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    background: var(--bg);
    border-bottom: 1px solid rgba(181,169,106,0.1);
  }

  .nav-logo {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 28px;
    letter-spacing: 0.08em;
    color: var(--olive);
    text-decoration: none;
  }

  .nav-search {
    display: flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(181,169,106,0.15);
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

  .nav-icons {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  .nav-icon {
    width: 18px;
    height: 18px;
    color: var(--text-muted);
    cursor: pointer;
    transition: color 0.2s;
  }
  .nav-icon:hover { color: var(--olive); }

  /* ── BREADCRUMB ── */
  .breadcrumb {
    margin-top: 65px;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-dim);
  }

  .breadcrumb a {
    color: var(--text-dim);
    text-decoration: none;
    transition: color 0.2s;
  }

  .breadcrumb a:hover { color: var(--olive); }

  .breadcrumb span { color: var(--olive-muted); }

  /* ── PRODUCT LAYOUT ── */
  .product-layout {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 0;
    min-height: calc(100vh - 120px);
  }

  /* ── LEFT — VISUAL ── */
  .product-visual {
    position: sticky;
    top: 65px;
    height: calc(100vh - 65px);
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px 24px 20px 40px;
  }

  .product-main-img {
    flex: 1;
    background: var(--bg-card);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .product-main-img .img-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(145deg, #1a2535 0%, #0d1520 100%);
  }

  .product-main-img .img-content {
    position: relative;
    z-index: 1;
    text-align: center;
  }

  .product-main-img .img-label {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 80px;
    color: rgba(181,169,106,0.15);
    letter-spacing: 0.1em;
    display: block;
  }

  .product-main-img .img-sublabel {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(181,169,106,0.3);
  }

  .play-overlay {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--olive);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s, background 0.2s;
    z-index: 2;
  }

  .play-overlay:hover {
    transform: scale(1.08);
    background: var(--accent);
  }

  .play-overlay svg {
    width: 16px;
    height: 16px;
    fill: var(--bg);
    margin-left: 3px;
  }

  .product-thumbs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }

  .product-thumb {
    aspect-ratio: 1;
    background: var(--bg-card);
    border-radius: 6px;
    cursor: pointer;
    border: 2px solid transparent;
    transition:  0.2s;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .product-thumb.active { border-color: var(--olive); }
  .product-thumb:hover { border-color: var(--olive-muted); }

  .product-thumb .thumb-bg {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 11px;
    color: rgba(181,169,106,0.3);
    letter-spacing: 0.1em;
  }

  .t1 { background: linear-gradient(145deg, #1a2535 0%, #0d1520 100%); }
  .t2 { background: linear-gradient(145deg, #252515 0%, #151510 100%); }
  .t3 { background: linear-gradient(145deg, #201a20 0%, #101010 100%); }
  .t4 { background: linear-gradient(145deg, #151a20 0%, #0d1015 100%); }

  /* ── RIGHT — DETAILS ── */
  .product-details {
    padding: 40px 40px 40px 24px;
    border-left: 1px solid rgba(181,169,106,0.08);
    overflow-y: auto;
  }

  .product-studio {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--olive-muted);
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .product-studio::before {
    content: '';
    width: 20px;
    height: 1px;
    background: var(--olive-muted);
  }

  .product-brand-name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 64px;
    line-height: 0.9;
    color: var(--white);
    letter-spacing: 0.04em;
    margin-bottom: 8px;
  }

  .product-name {
    font-size: 16px;
    color: var(--text-muted);
    font-weight: 300;
    margin-bottom: 28px;
    letter-spacing: 0.04em;
  }

  .product-price {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 36px;
    color: var(--olive);
    letter-spacing: 0.06em;
    margin-bottom: 32px;
  }

  .product-price span {
    font-size: 14px;
    color: var(--text-dim);
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    letter-spacing: 0.05em;
    margin-left: 8px;
  }

  /* SIZE SELECTOR */
  .size-label {
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-dim);
    margin-bottom: 12px;
  }

  .size-grid {
    display: flex;
    gap: 8px;
    margin-bottom: 32px;
    flex-wrap: wrap;
  }

  .size-btn {
    width: 44px;
    height: 44px;
    border: 1px solid rgba(181,169,106,0.2);
    background: none;
    color: var(--text-muted);
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    letter-spacing: 0.05em;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s;
  }

  .size-btn:hover {
    border-color: var(--olive);
    color: var(--olive);
  }

  .size-btn.active {
    background: var(--olive);
    border-color: var(--olive);
    color: var(--bg);
    font-weight: 500;
  }

  .size-btn.sold-out {
    opacity: 0.3;
    cursor: not-allowed;
    text-decoration: line-through;
  }

  /* CTA BUTTONS */
  .cta-stack {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 36px;
  }

  .btn-primary {
    width: 100%;
    padding: 16px;
    background: var(--olive);
    border: none;
    color: var(--bg);
    font-family: 'Bebas Neue', sans-serif;
    font-size: 18px;
    letter-spacing: 0.12em;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.2s, transform 0.1s;
  }

  .btn-primary:hover {
    background: var(--accent);
    transform: translateY(-1px);
  }

  .btn-secondary {
    width: 100%;
    padding: 15px;
    background: none;
    border: 1px solid rgba(181,169,106,0.25);
    color: var(--text-muted);
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s;
  }

  .btn-secondary:hover {
    border-color: var(--olive);
    color: var(--olive);
  }

  /* DIVIDER */
  .divider {
    height: 1px;
    background: rgba(181,169,106,0.1);
    margin: 32px 0;
  }

  /* STORY EXCERPT */
  .story-excerpt {
    margin-bottom: 32px;
  }

  .story-excerpt-label {
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-dim);
    margin-bottom: 14px;
  }

  .story-excerpt blockquote {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 17px;
    line-height: 1.6;
    color: var(--text-muted);
    padding-left: 16px;
    border-left: 2px solid var(--olive-muted);
    margin-bottom: 12px;
  }

  .story-excerpt p {
    font-size: 13px;
    line-height: 1.7;
    color: var(--text-dim);
    font-weight: 300;
  }

  .story-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 14px;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--olive);
    text-decoration: none;
    cursor: pointer;
    transition: gap 0.2s;
  }

  .story-link:hover { gap: 12px; }

  .story-link::after {
    content: '→';
    font-size: 13px;
  }

  /* PRODUCT META */
  .product-meta {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .meta-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(181,169,106,0.07);
  }

  .meta-row:last-child { border-bottom: none; }

  .meta-key {
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text-dim);
  }

  .meta-val {
    font-size: 13px;
    color: var(--text-muted);
    text-align: right;
  }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .product-brand-name { animation: fadeUp 0.6s ease forwards; }
  .product-name { animation: fadeUp 0.6s ease 0.1s both; }
  .product-price { animation: fadeUp 0.6s ease 0.15s both; }
` }} />
</head>
<body>

{/*  NAV  */}
<nav>
  <a href="#" className="nav-logo">MAGINARI.</a>
  <div className="nav-search">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b6440" strokeWidth="2">
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
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  </div>
</nav>

{/*  BREADCRUMB  */}
<div className="breadcrumb">
  <a href="#">MAGINARI</a>
  <span>/</span>
  <a href="#">Favela</a>
  <span>/</span>
  Retro Jersey
</div>

{/*  PRODUCT LAYOUT  */}
<div className="product-layout">

  {/*  LEFT — VISUAL  */}
  <div className="product-visual">
    <div className="product-main-img">
      <div className="img-bg"></div>
      <div className="img-content">
        <span className="img-label">FAVELA</span>
        <span className="img-sublabel">Retro Jersey — Vol. 1</span>
      </div>
      <button className="play-overlay">
        <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      </button>
    </div>
    <div className="product-thumbs">
      <div className="product-thumb active">
        <div className="thumb-bg t1">FRONT</div>
      </div>
      <div className="product-thumb">
        <div className="thumb-bg t2">BACK</div>
      </div>
      <div className="product-thumb">
        <div className="thumb-bg t3">DETAIL</div>
      </div>
      <div className="product-thumb">
        <div className="thumb-bg t4">WORN</div>
      </div>
    </div>
  </div>

  {/*  RIGHT — DETAILS  */}
  <div className="product-details">
    <div className="product-studio">Exclamation Studios — Favela</div>
    <div className="product-brand-name">FAVELA</div>
    <div className="product-name">Retro Jersey — Vol. 1</div>
    <div className="product-price">₦ 48,000 <span>Exclusive Edition</span></div>

    <div className="size-label">Select Size</div>
    <div className="size-grid">
      <button className="size-btn sold-out">XS</button>
      <button className="size-btn">S</button>
      <button className="size-btn active">M</button>
      <button className="size-btn">L</button>
      <button className="size-btn">XL</button>
      <button className="size-btn sold-out">XXL</button>
    </div>

    <div className="cta-stack">
      <button className="btn-primary">Add to Cart</button>
      <button className="btn-secondary">♡ &nbsp; Save to Wishlist</button>
    </div>

    <div className="divider"></div>

    <div className="story-excerpt">
      <div className="story-excerpt-label">The Story Behind This Piece</div>
      <blockquote>"We don't design clothes. We design evidence that we were here."</blockquote>
      <p>The Retro Jersey is not nostalgia. It is a document. Every stitch a street name, every colour a memory of someone who made the hill beautiful before beauty was fashionable.</p>
      <a className="story-link">Read the full story</a>
    </div>

    <div className="divider"></div>

    <div className="product-meta">
      <div className="meta-row">
        <span className="meta-key">Origin</span>
        <span className="meta-val">Rio de Janeiro, Brazil</span>
      </div>
      <div className="meta-row">
        <span className="meta-key">Material</span>
        <span className="meta-val">100% Cotton — Heavyweight</span>
      </div>
      <div className="meta-row">
        <span className="meta-key">Edition</span>
        <span className="meta-val">Limited — 50 units</span>
      </div>
      <div className="meta-row">
        <span className="meta-key">Ships</span>
        <span className="meta-val">Worldwide — 7–14 days</span>
      </div>
      <div className="meta-row">
        <span className="meta-key">Studio</span>
        <span className="meta-val">Exclamation Studios</span>
      </div>
    </div>

  </div>
</div>

<script>
  document.querySelectorAll('.size-btn:not(.sold-out)').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  document.querySelectorAll('.product-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.product-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
</script>

</body>
</html>

    </>
  );
}
