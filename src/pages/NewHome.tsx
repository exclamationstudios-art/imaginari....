
import React from 'react';

export const NewHome = () => {
  return (
    <div className="bg-bg-base min-h-screen text-text-secondary font-sans font-light overflow-x-hidden">
      

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
    <span className="city-label" style={{"top":"12%","left":"8%","fontSize":"80px"}}>LAGOS</span>
    <span className="city-label" style={{"top":"30%","right":"15%","fontSize":"60px"}}>RIO</span>
    <span className="city-label" style={{"top":"55%","left":"20%","fontSize":"48px"}}>ACCRA</span>
    <span className="city-label" style={{"bottom":"25%","right":"25%","fontSize":"36px"}}>SURULERE</span>
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
  <div className="section-header" style={{"marginBottom":"32px"}}>
    <div className="section-header-left">
      <div className="section-eyebrow">The Brands</div>
      <div className="section-title">On MAGINARI</div>
    </div>
    <a className="section-link">All brands</a>
  </div>

  <div className="brand-grid">

    <div className="brand-card group">
      <div className="brand-card-img bc-favela relative">
        <div className="brand-card-studio-badge z-10 relative">Exclamation Studios</div>
        <img 
          src="/favela-folder.svg" 
          alt="Favela Folder" 
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0 p-4" 
        />
        <img 
          src="/favela-hover.svg" 
          alt="Favela Hover" 
          className="absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 p-4 scale-95 group-hover:scale-100" 
        />
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
        <span className="brand-card-img-label" style={{"opacity":"0.4"}}>—</span>
      </div>
      <div className="brand-card-body" style={{"opacity":"0.4"}}>
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
    <span style={{"color":"var(--text-ghost)"}}>All rights reserved.</span>
  </div>
</footer>




    </div>
  );
};
