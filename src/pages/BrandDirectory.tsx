
import React from 'react';

export const BrandDirectory = () => {
  return (
    <div className="bg-bg-base min-h-screen text-text-secondary font-sans font-light overflow-x-hidden">
      

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
    <div style={{"position":"relative"}}>
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
  <div className="brand-card group">
    <div className="bc-img-wrap">
      <div className="bc-img-inner relative">
        <img 
          src="/favela-folder.svg" 
          alt="Favela Folder" 
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0 p-4" 
        />
        <img 
          src="/favela.svg" 
          alt="Favela Hover" 
          className="absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 p-4 scale-95 group-hover:scale-100" 
        />
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
        <div style={{"display":"flex","gap":"8px"}}>
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
        <div className="bc-studio-badge" style={{"right":"10px","top":"10px"}}>
          <svg viewBox="0 0 24 24" style={{"stroke":"rgba(100,90,50,0.5)"}}><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
        </div>
        <div className="bc-product-visual">
          <span className="bc-product-name" style={{"color":"rgba(100,90,40,0.18)"}}>COCI</span>
        </div>
      </div>
    </div>
    <div className="bc-body">
      <div className="bc-brand-name coci-style">COCi</div>
      <div className="bc-origin">Lagos, Nigeria</div>
      <div className="bc-actions">
        <span className="bc-story-count">2 drops · 3 stories</span>
        <div style={{"display":"flex","gap":"8px"}}>
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
        <div style={{"display":"flex","gap":"8px"}}>
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

<div className="card-grid" style={{"paddingBottom":"48px"}}>

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
        <div style={{"display":"flex","gap":"8px"}}>
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
        <div style={{"display":"flex","gap":"8px"}}>
          <button className="btn-sm-circle">+</button>
          <button className="btn-sm-circle play">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  {/*  COMING SOON — dashed border exact from page 1  */}
  <div className="brand-card">
    <div className="bc-img-wrap" style={{"opacity":"0.4"}}>
      <div className="bc-img-inner bg-coming">
        <div className="bc-dashes" style={{"position":"absolute","inset":"8px","border":"1.5px dashed rgba(181,169,106,0.2)","borderRadius":"6px","pointerEvents":"none"}}></div>
        <div className="bc-product-visual">
          <span className="bc-product-name" style={{"opacity":"0.3"}}>—</span>
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

  <div style={{"padding":"32px 0 12px","fontSize":"clamp(22px, 3vw, 32px)","fontWeight":"300","color":"var(--text-primary)","letterSpacing":"-0.01em"}}>This season</div>

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
  <div style={{"fontSize":"11px","color":"var(--text-dim)","letterSpacing":"0.1em","textAlign":"right"}}>
    Culture Envisioned.
  </div>
</footer>




    </div>
  );
};
