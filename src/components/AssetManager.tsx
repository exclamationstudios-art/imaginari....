import React, { useState } from 'react';
import { ArrowLeft, Upload, RefreshCw, CheckCircle, Database, Eye } from 'lucide-react';
import { Product } from '../types';

interface AssetManagerProps {
  products: Product[];
  onSaveProducts: (updatedProducts: Product[]) => void;
  onBack: () => void;
}

const LOCAL_MODEL_PRESETS = [
  '/models/photo_2026-06-15_15-24-56.jpg',
  '/models/photo_2026-06-15_15-25-23.jpg',
  '/models/photo_2026-06-15_15-25-29.jpg',
  '/models/photo_2026-06-15_15-25-34.jpg',
  '/models/photo_2026-06-15_15-25-38.jpg',
  '/models/photo_2026-06-15_15-25-43.jpg',
  '/models/photo_2026-06-15_15-25-47.jpg',
  '/models/photo_2026-06-15_15-25-54.jpg',
  '/models/photo_2026-06-15_15-25-58.jpg',
  '/models/photo_2026-06-15_15-26-02.jpg',
  '/models/photo_2026-06-15_15-26-05.jpg',
  '/models/photo_2026-06-15_15-26-10.jpg',
  '/models/photo_2026-06-15_15-26-14.jpg',
  '/models/photo_2026-06-15_15-26-19.jpg',
  '/models/photo_2026-06-15_15-26-23.jpg',
  '/models/mixed-model.png',
  '/models/hero-model.png',
  '/models/footer-model.png'
];

const LOCAL_SHIRT_PRESETS = [
  '/shirts/GREEN OFFICIAL COC CROP T SHIRT.jpg',
  '/shirts/white coc crop t shirt.jpg',
  '/shirts/black coc cropt shirt back.jpg',
  '/shirts/icons srop t shirt.jpg',
  '/shirts/coc ash reg 2.jpg',
  '/shirts/coc reg green .jpg',
  '/shirts/coc regula t shirt black frint.jpg',
  '/shirts/coc regula t shirt hite frint.jpg'
];

export default function AssetManager({ products, onSaveProducts, onBack }: AssetManagerProps) {
  // Authentication states
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('maginari_admin_auth') === 'true';
  });
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(false);

  // Banners state
  const [banners, setBanners] = useState({
    banner1: localStorage.getItem('maginari_banner1') || '/models/photo_2026-06-15_15-26-05.jpg',
    banner2: localStorage.getItem('maginari_banner2') || '/models/photo_2026-06-15_15-26-10.jpg',
    banner3: localStorage.getItem('maginari_banner3') || '/models/photo_2026-06-15_15-26-19.jpg',
    banner4: localStorage.getItem('maginari_banner4') || '/models/photo_2026-06-15_15-26-23.jpg',
  });

  // Local products working state
  const [currentProducts, setCurrentProducts] = useState<Product[]>([...products]);
  
  // Feedback alert states
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // File upload to Base64 helper
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'banner' | 'product', id: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      if (type === 'banner') {
        setBanners(prev => ({ ...prev, [id]: base64String }));
      } else {
        setCurrentProducts(prev => 
          prev.map(p => p.id === id ? { ...p, images: [base64String, ...p.images.slice(1)] } : p)
        );
      }
      showFeedback('Custom image uploaded successfully!');
    };
    reader.readAsDataURL(file);
  };

  // Preset selector helper
  const handleSelectPreset = (presetPath: string, type: 'banner' | 'product', id: string) => {
    if (type === 'banner') {
      setBanners(prev => ({ ...prev, [id]: presetPath }));
    } else {
      setCurrentProducts(prev => 
        prev.map(p => p.id === id ? { ...p, images: [presetPath, ...p.images.slice(1)] } : p)
      );
    }
    showFeedback('Asset preset assigned successfully.');
  };

  const showFeedback = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(null), 3000);
  };

  // Reset to default settings
  const handleResetToDefaults = () => {
    if (window.confirm('Reset all custom mappings to original theme configurations?')) {
      localStorage.removeItem('maginari_banner1');
      localStorage.removeItem('maginari_banner2');
      localStorage.removeItem('maginari_banner3');
      localStorage.removeItem('maginari_banner4');
      localStorage.removeItem('maginari_custom_products');
      
      // Reset local states
      setBanners({
        banner1: '/models/photo_2026-06-15_15-26-05.jpg',
        banner2: '/models/photo_2026-06-15_15-26-10.jpg',
        banner3: '/models/photo_2026-06-15_15-26-19.jpg',
        banner4: '/models/photo_2026-06-15_15-26-23.jpg',
      });
      
      // Reload page to pull initial configuration
      window.location.reload();
    }
  };

  // Save changes to localStorage and reload state
  const handleSaveChanges = () => {
    localStorage.setItem('maginari_banner1', banners.banner1);
    localStorage.setItem('maginari_banner2', banners.banner2);
    localStorage.setItem('maginari_banner3', banners.banner3);
    localStorage.setItem('maginari_banner4', banners.banner4);
    
    // Save custom products
    onSaveProducts(currentProducts);
    
    showFeedback('Configurator saved! Live site updated.');
    setTimeout(() => {
      onBack();
    }, 800);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPass = password.trim().toLowerCase();
    if (cleanPass === 'exclamation' || cleanPass === 'maginari2026' || cleanPass === 'admin') {
      localStorage.setItem('maginari_admin_auth', 'true');
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('maginari_admin_auth');
    setIsAuthenticated(false);
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neutral-950 text-stone-100 font-mono flex items-center justify-center p-4">
        <div className="max-w-md w-full border border-neutral-800 bg-neutral-900/40 p-8 md:p-10 text-center space-y-8 animate-fadeIn">
          {/* Logo element */}
          <div className="space-y-2 select-none">
            <span className="text-[9px] text-rose-300 tracking-[0.35em] uppercase block">// SECURE GATEWAY</span>
            <h1 className="text-2xl font-sans font-black tracking-widest text-white uppercase">
              EXCLAMATION STUDIO
            </h1>
            <p className="text-[10px] text-neutral-400 uppercase tracking-widest leading-relaxed">
              Collectible Configurator Access Portal
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[9px] text-neutral-500 tracking-wider uppercase block text-left">
                Enter Access Key:
              </label>
              <input
                type="password"
                placeholder="ACCESS_KEY"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full bg-neutral-950 border ${
                  authError ? 'border-red-500' : 'border-neutral-800 focus:border-white'
                } p-3 text-center text-xs uppercase tracking-widest outline-none text-white font-mono placeholder-neutral-700 transition-colors`}
                autoFocus
              />
              {authError && (
                <p className="text-[9px] text-red-500 uppercase tracking-wider text-left">
                  * Invalid Access Key. Access Denied.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-white hover:bg-neutral-200 text-black py-3.5 text-xs font-bold uppercase tracking-widest cursor-pointer transition-colors"
            >
              Request Authorization
            </button>
          </form>

          {/* Cancel button */}
          <button
            onClick={onBack}
            className="text-[10px] text-neutral-500 hover:text-white uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5 mx-auto cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-stone-100 font-mono pb-24">
      {/* Header Bar */}
      <header className="border-b border-neutral-800 bg-neutral-900/50 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-white cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Site
          </button>
          
          <div className="text-center select-none">
            <span className="text-[9px] text-rose-300 tracking-[0.3em] uppercase block">EXCLAMATION STUDIO PORTAL</span>
            <span className="text-sm font-sans font-black tracking-widest text-white">COLLECTIBLE CONFIGURATOR</span>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={handleLogout}
              className="border border-neutral-800 hover:border-neutral-500 px-4 py-2 text-[10px] uppercase tracking-widest cursor-pointer transition-colors"
            >
              Lock
            </button>
            <button 
              onClick={handleResetToDefaults}
              className="border border-neutral-800 hover:border-red-500 hover:text-red-400 px-4 py-2 text-[10px] uppercase tracking-widest cursor-pointer transition-colors"
            >
              Reset
            </button>
            <button 
              onClick={handleSaveChanges}
              className="bg-white text-black hover:bg-neutral-200 px-5 py-2 text-[10px] uppercase font-bold tracking-widest cursor-pointer transition-colors"
            >
              Save Config
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
        {/* Status Alerts */}
        {statusMessage && (
          <div className="mb-8 p-4 bg-neutral-900 border border-rose-300 text-rose-300 text-xs flex items-center gap-2 animate-fadeIn">
            <CheckCircle className="w-4 h-4 text-rose-300" />
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Intro Block */}
        <div className="bg-neutral-900 border border-neutral-800 p-6 md:p-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Database className="w-5 h-5 text-rose-300" /> Live Asset Assignment Board
            </h2>
            <p className="text-xs text-neutral-400 leading-relaxed uppercase">
              Use this dashboard to assign collection assets. Select a banner or product image slot, upload a custom file from your device, or choose from our preloaded high-fashion model assets. Changes persist locally.
            </p>
          </div>
          <div className="bg-neutral-950 border border-neutral-800 p-4 text-[10px] text-neutral-400">
            CURRENT PRODUCTS: <span className="text-white font-bold">{currentProducts.length} Slots</span><br />
            CURRENT BANNERS: <span className="text-white font-bold">4 Slots</span>
          </div>
        </div>

        {/* SECTION A: BANNERS CONFIG */}
        <div className="mb-16">
          <h3 className="text-xs font-bold text-neutral-400 tracking-[0.25em] uppercase border-b border-neutral-800 pb-3 mb-8">
            [ 01 // HOME DROP BANNERS ]
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { id: 'banner1', name: 'Banner 1: Crown of Clay', default: '/models/photo_2026-06-15_15-26-05.jpg' },
              { id: 'banner2', name: 'Banner 2: Exclamation Studio', default: '/models/photo_2026-06-15_15-26-10.jpg' },
              { id: 'banner3', name: 'Banner 3: 8ternity Campaign', default: '/models/photo_2026-06-15_15-26-19.jpg' },
              { id: 'banner4', name: 'Banner 4: Dreamers Campaign', default: '/models/photo_2026-06-15_15-26-23.jpg' }
            ].map(b => (
              <div key={b.id} className="bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">{b.name}</h4>
                  
                  {/* Preview box */}
                  <div className="aspect-[21/9] w-full bg-neutral-950 border border-neutral-800 overflow-hidden relative group mb-6">
                    <img 
                      src={banners[b.id as keyof typeof banners]} 
                      alt="Banner Preview" 
                      className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-350"
                    />
                    <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-[8px] text-stone-300 px-2 py-1 flex items-center gap-1.5">
                      <Eye className="w-3 h-3 text-rose-300" /> Configured
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="space-y-4">
                  {/* File Upload */}
                  <div className="flex items-center gap-4">
                    <label className="flex-1 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-500 py-3.5 px-4 text-[9px] uppercase tracking-widest text-center cursor-pointer transition-colors flex items-center justify-center gap-2">
                      <Upload className="w-3.5 h-3.5" /> Upload File
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => handleFileUpload(e, 'banner', b.id)}
                      />
                    </label>
                  </div>

                  {/* Preset Selector */}
                  <div>
                    <span className="text-[9px] text-neutral-500 tracking-wider uppercase block mb-2">Or Choose Model Preset:</span>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-neutral-800">
                      {LOCAL_MODEL_PRESETS.map((p, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelectPreset(p, 'banner', b.id)}
                          className={`w-12 h-12 flex-shrink-0 border overflow-hidden transition-all ${
                            banners[b.id as keyof typeof banners] === p ? 'border-rose-300 scale-95' : 'border-neutral-800 hover:border-neutral-500'
                          }`}
                        >
                          <img src={p} alt="preset" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION B: PRODUCTS CONFIG */}
        <div>
          <h3 className="text-xs font-bold text-neutral-400 tracking-[0.25em] uppercase border-b border-neutral-800 pb-3 mb-8">
            [ 02 // COLLECTIBLE PRODUCT SHIRTS ]
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentProducts.map(p => (
              <div key={p.id} className="bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{p.name}</h4>
                    <span className="text-[9px] border border-neutral-800 px-2 py-0.5 text-neutral-400">{p.brand}</span>
                  </div>
                  
                  {/* Preview box */}
                  <div className="aspect-[4/5] w-36 bg-neutral-950 border border-neutral-800 overflow-hidden relative group mb-6 mx-auto">
                    <img 
                      src={p.images[0]} 
                      alt="Product Preview" 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-350"
                    />
                    <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-[8px] text-stone-300 px-2 py-1 flex items-center gap-1.5">
                      <Eye className="w-3 h-3 text-rose-300" /> Preview
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="space-y-4">
                  {/* File Upload */}
                  <div className="flex items-center gap-4">
                    <label className="flex-1 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-500 py-3.5 px-4 text-[9px] uppercase tracking-widest text-center cursor-pointer transition-colors flex items-center justify-center gap-2">
                      <Upload className="w-3.5 h-3.5" /> Upload Shirt File
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => handleFileUpload(e, 'product', p.id)}
                      />
                    </label>
                  </div>

                  {/* Preset Selector */}
                  <div>
                    <span className="text-[9px] text-neutral-500 tracking-wider uppercase block mb-2">Or Choose Shirt Preset:</span>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-neutral-800">
                      {LOCAL_SHIRT_PRESETS.map((sh, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelectPreset(sh, 'product', p.id)}
                          className={`w-12 h-12 flex-shrink-0 border overflow-hidden transition-all ${
                            p.images[0] === sh ? 'border-rose-300 scale-95' : 'border-neutral-800 hover:border-neutral-500'
                          }`}
                        >
                          <img src={sh} alt="preset" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
