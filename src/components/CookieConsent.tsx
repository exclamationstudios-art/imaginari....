import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    // Check if the user has already answered the consent prompt
    const consent = localStorage.getItem('imaginari-cookie-consent');
    if (!consent) {
      // Show the banner
      setShowBanner(true);
      // Trigger the slide up animation shortly after mounting
      setTimeout(() => setAnimateIn(true), 500);
    }
  }, []);

  const handleConsent = (type: 'accept' | 'reject') => {
    // Save to local storage
    localStorage.setItem('imaginari-cookie-consent', type);
    
    // Animate out
    setAnimateIn(false);
    
    // Unmount after animation finishes
    setTimeout(() => {
      setShowBanner(false);
    }, 500);
  };

  if (!showBanner) return null;

  return (
    <div 
      className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:w-[400px] bg-white/95 backdrop-blur-xl border border-neutral-200 shadow-2xl z-[100] p-6 rounded-2xl font-sans transition-all duration-500 ease-out transform ${
        animateIn ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">i.</span>
        </div>
        <h3 className="text-lg font-bold text-neutral-900">Your Privacy</h3>
      </div>
      
      <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
        We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
      </p>
      
      <div className="flex gap-3">
        <button 
          onClick={() => handleConsent('reject')}
          className="flex-1 bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-800 font-semibold py-2.5 rounded-full text-sm transition-colors"
        >
          Decline
        </button>
        <button 
          onClick={() => handleConsent('accept')}
          className="flex-1 bg-black hover:bg-neutral-800 text-white font-semibold py-2.5 rounded-full text-sm transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
