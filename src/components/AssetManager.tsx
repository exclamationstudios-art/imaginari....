import React, { useState } from 'react';
import { ArrowLeft, Upload, CheckCircle, Database, Eye, Lock, RefreshCw } from 'lucide-react';
import { Product, CustomLayout } from '../types';
import { supabase } from '../services/supabaseClient';
import { uploadBase64ToS3 } from '../services/s3Uploader';

interface AssetManagerProps {
  layout: CustomLayout;
  onSaveLayout: (updatedLayout: CustomLayout) => void;
  onBack: () => void;
}

function compressImage(base64Str: string, maxWidth = 1600, maxHeight = 1600, quality = 0.75): Promise<string> {
  return new Promise((resolve) => {
    if (!base64Str.startsWith('data:image/')) {
      resolve(base64Str);
      return;
    }

    const img = new Image();
    img.src = base64Str;
    img.onload = () => {
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(base64Str);
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);
      const compressedBase64 = canvas.toDataURL('image/jpeg', quality);
      resolve(compressedBase64);
    };
    img.onerror = () => {
      resolve(base64Str);
    };
  });
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
  '/models/mixed-model.jpg',
  '/models/hero-model.jpg',
  '/models/footer-model.jpg'
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

export default function AssetManager({ layout, onSaveLayout, onBack }: AssetManagerProps) {
  // Authentication states
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('maginari_admin_auth') === 'true';
  });
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Local working state representing changes inside visual preview
  const [workingLayout, setWorkingLayout] = useState<CustomLayout>(() => ({ ...layout }));
  
  // Dashboard Tabs
  const [activeTab, setActiveTab] = useState<'visuals' | 'vendors'>('visuals');

  // Feedback alert states
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Edit Modals configurations
  const [activeEditItem, setActiveEditItem] = useState<{
    type: 'banner' | 'product';
    bannerKey?: string;
    section?: 'heroProducts' | 'banner1Products' | 'banner2Products' | 'banner3Products' | 'banner4Products';
    index?: number;
    title?: string;
  } | null>(null);

  // Modal temporary forms
  const [modalBannerImage, setModalBannerImage] = useState('');
  const [modalProdName, setModalProdName] = useState('');
  const [modalProdPrice, setModalProdPrice] = useState(0);
  const [modalProdImage, setModalProdImage] = useState('');
  const [modalProdBackImage, setModalProdBackImage] = useState('');
  const [modalProdStatus, setModalProdStatus] = useState<'available' | 'sold_out' | 'coming_soon'>('available');

  const showFeedback = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(null), 3000);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPass = password.trim().toLowerCase();
    
    setIsLoggingIn(true);
    setAuthError(false);

    try {
      // Query the access_codes table for the entered code
      const { data, error } = await supabase
        .from('access_codes')
        .select('code')
        .eq('code', cleanPass)
        .eq('is_active', true)
        .maybeSingle();

      if (error) {
        throw error;
      }

      if (data) {
        // Access code is valid!
        localStorage.setItem('maginari_admin_auth', 'true');
        setIsAuthenticated(true);
      } else {
        // Code not found or inactive
        setAuthError(true);
      }
    } catch (err) {
      console.error('Failed to authenticate access code with database:', err);
      // Fallback: allow the default local key if DB is offline/unconfigured
      if (cleanPass === 'alhajisoye') {
        localStorage.setItem('maginari_admin_auth', 'true');
        setIsAuthenticated(true);
      } else {
        setAuthError(true);
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('maginari_admin_auth');
    setIsAuthenticated(false);
    setPassword('');
  };

  const handleResetToDefaults = async () => {
    if (window.confirm('Reset all custom mappings to original theme configurations?')) {
      localStorage.removeItem('maginari_custom_layout');
      try {
        const { error } = await supabase
          .from('layouts')
          .delete()
          .eq('id', 'active');
        if (error) throw error;
      } catch (err) {
        console.error('Failed to reset layout in Supabase database:', err);
      }
      window.location.reload();
    }
  };

  const handleSaveChanges = () => {
    onSaveLayout(workingLayout);
    showFeedback('Configurator saved! Live site updated.');
    setTimeout(() => {
      onBack();
    }, 800);
  };

  // Open Edit Modals helper
  const openEditBannerModal = (bannerKey: string, currentSrc: string, title: string) => {
    setActiveEditItem({ type: 'banner', bannerKey, title });
    setModalBannerImage(currentSrc);
  };

  const openEditProductModal = (
    section: 'heroProducts' | 'banner1Products' | 'banner2Products' | 'banner3Products' | 'banner4Products',
    index: number
  ) => {
    const prod = workingLayout[section][index];
    setActiveEditItem({ type: 'product', section, index, title: prod.name });
    setModalProdName(prod.name);
    setModalProdPrice(prod.price);
    setModalProdImage(prod.images[0] || '');
    setModalProdBackImage(prod.images[1] || '');
    setModalProdStatus(prod.status || 'available');
  };

  // Upload actions inside modals
  const handleModalBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = async () => {
      const originalBase64 = reader.result as string;
      const compressed = await compressImage(originalBase64);
      setModalBannerImage(compressed);
    };
    reader.readAsDataURL(file);
  };

  const handleModalProdUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = async () => {
      const originalBase64 = reader.result as string;
      const compressed = await compressImage(originalBase64);
      setModalProdImage(compressed);
    };
    reader.readAsDataURL(file);
  };

  const handleModalProdBackUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = async () => {
      const originalBase64 = reader.result as string;
      const compressed = await compressImage(originalBase64);
      setModalProdBackImage(compressed);
    };
    reader.readAsDataURL(file);
  };

  const [isApplying, setIsApplying] = useState(false);

  const handleApplyBannerChanges = async () => {
    if (!activeEditItem || !activeEditItem.bannerKey) return;
    
    setIsApplying(true);
    try {
      const publicUrl = await uploadBase64ToS3(modalBannerImage, `banner-${activeEditItem.bannerKey}.jpg`);
      setWorkingLayout(prev => ({
        ...prev,
        [activeEditItem.bannerKey!]: publicUrl
      }));
      setActiveEditItem(null);
      showFeedback('Banner updated inside dashboard mockup!');
    } finally {
      setIsApplying(false);
    }
  };

  const handleApplyProductChanges = async () => {
    if (!activeEditItem || activeEditItem.index === undefined || !activeEditItem.section) return;
    const { section, index } = activeEditItem;
    
    setIsApplying(true);
    try {
      const publicUrl = await uploadBase64ToS3(modalProdImage, `product-${section}-${index}.jpg`);
      const publicBackUrl = modalProdBackImage ? await uploadBase64ToS3(modalProdBackImage, `product-${section}-${index}-back.jpg`) : '';

      setWorkingLayout(prev => {
        const updatedSection = [...prev[section]];
        const newImages = [publicUrl];
        if (publicBackUrl) newImages.push(publicBackUrl);
        const restImages = updatedSection[index].images.slice(2);
        newImages.push(...restImages);

        updatedSection[index] = {
          ...updatedSection[index],
          name: modalProdName,
          price: Number(modalProdPrice) || 0,
          status: modalProdStatus,
          images: newImages
        };
        return {
          ...prev,
          [section]: updatedSection
        };
      });
      setActiveEditItem(null);
      showFeedback('Product slot updated inside dashboard mockup!');
    } finally {
      setIsApplying(false);
    }
  };

  // Gateway Logon view
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neutral-950 text-stone-100 font-mono flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-neutral-900/40 p-8 md:p-10 text-center space-y-8 animate-fadeIn">
          <div className="space-y-2 select-none">
            <span className="text-[9px] text-rose-300 tracking-[0.35em] uppercase block">// SECURE GATEWAY</span>
            <h1 className="text-2xl font-sans font-black tracking-widest text-white uppercase">
              EXCLAMATION STUDIO
            </h1>
            <p className="text-[10px] text-neutral-400 uppercase tracking-widest leading-relaxed">
              Collectible Configurator Access Portal
            </p>
          </div>

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
                className={`w-full bg-neutral-950  ${
                  authError ? '' : ' focus:border-white'
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
              disabled={isLoggingIn}
              className={`w-full py-3.5 text-xs font-bold uppercase tracking-widest cursor-pointer transition-colors ${
                isLoggingIn ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed' : 'bg-white hover:bg-neutral-200 text-black'
              }`}
            >
              {isLoggingIn ? 'Verifying Code...' : 'Request Authorization'}
            </button>
          </form>

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

  // Dashboard Sub-components for visual mockup simulation
  const MockProductCard = ({ 
    item, 
    onClick 
  }: { 
    item: Product; 
    onClick: () => void;
    key?: string;
  }) => (
    <div
      onClick={onClick}
      className="relative flex-shrink-0 w-[60vw] sm:w-[40vw] md:w-[26vw] lg:w-[18vw] cursor-pointer group bg-neutral-950 p-2 hover:border-rose-300 transition-all duration-300 select-none"
    >
      <div className="aspect-[4/5] bg-neutral-900 overflow-hidden mb-2 relative">
        <img
          src={item.images[0]}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 grayscale group-hover:grayscale-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10">
          <span className="text-[9px] tracking-widest text-rose-300 uppercase font-bold border-rose-300/40 px-3 py-1.5 bg-black/90">
            Edit Details
          </span>
        </div>
        <div className="absolute top-1.5 left-1.5 bg-black/80 px-2 py-0.5 text-[8px] text-stone-300 font-mono tracking-wider">
          EDITABLE SLOT
        </div>
      </div>
      <div className="text-[11px] font-mono text-neutral-400 px-1">
        <div className="font-bold text-white truncate uppercase mb-0.5">{item.name}</div>
        <div className="text-[9px] text-neutral-500 truncate uppercase">{item.category}</div>
        <div className="mt-1 font-bold text-rose-300">£{Number(item.price).toFixed(2)}</div>
      </div>
    </div>
  );

  const MockBanner = ({ 
    src, 
    title, 
    logo, 
    logoInvert, 
    onClick 
  }: { 
    src: string; 
    title: string; 
    logo?: string; 
    logoInvert?: boolean; 
    onClick: () => void;
  }) => (
    <div 
      onClick={onClick}
      className="w-full h-[55vh] relative overflow-hidden select-none bg-neutral-900 hover:border-rose-300 transition-colors duration-300 cursor-pointer group mb-6"
    >
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover object-center grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-20">
        <span className="text-xs tracking-widest text-rose-300 uppercase font-bold px-5 py-2.5 bg-black/90">
          Edit Campaign Banner
        </span>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-8 flex flex-col items-start z-10">
        {logo && (
          <img 
            src={logo} 
            alt="Brand Logo" 
            className={`w-[56px] h-[56px] md:w-[72px] md:h-[72px] object-contain mb-2 drop-shadow-md ${logoInvert ? 'invert brightness-0' : ''}`} 
          />
        )}
        <h2 className="text-white text-2xl md:text-3xl font-sans font-bold leading-tight uppercase">
          {title}
        </h2>
      </div>
      <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 text-[9px] text-stone-300 font-mono tracking-widest">
        EDITABLE BANNER SLOT
      </div>
    </div>
  );

  const VendorReportsTab = () => {
    const [reports, setReports] = React.useState<any[]>([]);

    React.useEffect(() => {
      const data = localStorage.getItem('maginari_vendor_applications');
      if (data) {
        setReports(JSON.parse(data).reverse());
      }
    }, []);

    if (reports.length === 0) {
      return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 flex flex-col items-center justify-center py-32 text-neutral-500">
          <Database className="w-12 h-12 mb-4 opacity-50" />
          <h3 className="text-xl uppercase font-bold tracking-widest text-white mb-2">No Applications Yet</h3>
          <p className="text-xs uppercase tracking-widest">When vendors apply, their forms will appear here.</p>
        </div>
      );
    }

    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
        <div className="bg-neutral-900/40 p-5 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Database className="w-4 h-4 text-rose-300" /> Vendor Pipeline
            </h2>
            <p className="text-[10px] text-neutral-400 uppercase leading-relaxed">
              Review incoming product applications and assess fulfillment capability.
            </p>
          </div>
        </div>
        
        <div className="grid gap-6">
          {reports.map((report) => (
            <div key={report.id} className="bg-neutral-950 border border-neutral-900 p-6 flex flex-col md:flex-row gap-8 hover:border-rose-300 transition-colors">
              <div className="min-w-[200px]">
                <span className="text-[10px] uppercase text-rose-300 tracking-widest block mb-1">{report.id}</span>
                <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-4">
                  {new Date(report.submittedAt).toLocaleDateString()}
                </span>
                <div className="inline-block px-3 py-1 bg-neutral-900 text-[10px] font-bold uppercase tracking-widest text-white mb-2">
                  {report.exclusivity === 'exclusive' ? 'Platform Exclusive' : 'Actively Retailed'}
                </div>
              </div>
              
              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-1">Volume</span>
                  <span className="text-sm font-bold text-white">{report.volume}</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-1">Target Price</span>
                  <span className="text-sm font-bold text-white">{report.retailPrice}</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-1">Margins</span>
                  <span className="text-sm font-bold text-white">{report.margins}</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-1">Fulfillment</span>
                  <span className="text-sm font-bold text-white uppercase">
                    {report.fulfillmentModel === 'pre-produced' ? 'Pre-Produced' : 'Pre-Order'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-stone-100 font-mono pb-24">
      {/* Sticky Header Configurator Bar */}
      <header className="bg-neutral-900/60 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-white cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Exit Editor
          </button>
          
          <div className="flex items-center gap-6 select-none hidden sm:flex">
            <button 
              onClick={() => setActiveTab('visuals')}
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 'visuals' ? 'text-white border-b-2 border-rose-300' : 'text-neutral-500 hover:text-white'}`}
            >
              Storefront Visuals
            </button>
            <button 
              onClick={() => setActiveTab('vendors')}
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 'vendors' ? 'text-white border-b-2 border-rose-300' : 'text-neutral-500 hover:text-white'}`}
            >
              Vendor Reports
            </button>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={handleLogout}
              className="hover:border-neutral-500 px-3.5 py-1.5 text-[9px] uppercase tracking-widest cursor-pointer transition-colors"
            >
              Lock
            </button>
            <button 
              onClick={handleResetToDefaults}
              className="hover:border-red-500 hover:text-red-400 px-3.5 py-1.5 text-[9px] uppercase tracking-widest cursor-pointer transition-colors"
            >
              Reset
            </button>
            <button 
              onClick={handleSaveChanges}
              className="bg-white text-black hover:bg-neutral-200 px-4 py-1.5 text-[9px] uppercase font-bold tracking-widest cursor-pointer transition-colors"
            >
              Save Config
            </button>
          </div>
        </div>
      </header>

      {/* Intro Bar & Alerts */}
      {activeTab === 'visuals' ? (
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
        {statusMessage && (
          <div className="mb-6 p-4 bg-neutral-900 text-rose-300 text-xs flex items-center gap-2 animate-fadeIn">
            <CheckCircle className="w-4 h-4 text-rose-300" />
            <span>{statusMessage}</span>
          </div>
        )}

        <div className="bg-neutral-900/40 p-5 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Database className="w-4 h-4 text-rose-300" /> Live Replica Canvas (Visual Mode)
            </h2>
            <p className="text-[10px] text-neutral-400 uppercase leading-relaxed">
              Hover and click directly on the Hero banner, the 4 Campaign Banners, or any of the 40 product items below to edit names, prices, or swap images.
            </p>
          </div>
        </div>

        {/* 1:1 HOMEPAGE REPLICA EDITOR CANVAS */}
        <div className="bg-neutral-950 p-4 md:p-8 space-y-12">
          
          {/* MOCKUP HERO SECTION */}
          <div 
            onClick={() => openEditBannerModal('heroBanner', workingLayout.heroBanner, 'Hero Background')}
            className="w-full h-[65vh] relative overflow-hidden select-none bg-neutral-900 hover:border-rose-300 transition-colors duration-300 cursor-pointer group"
          >
            <img
              src={workingLayout.heroBanner}
              alt="Hero Preview"
              className="w-full h-full object-cover object-top grayscale brightness-75 group-hover:scale-[1.01] transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-20">
              <span className="text-xs tracking-widest text-rose-300 uppercase font-bold px-5 py-2.5 bg-black/90">
                Edit Hero Banner Background
              </span>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-10 flex flex-col items-start z-10">
              <span className="text-xs text-neutral-350 uppercase tracking-widest mb-1 select-none">Maginari Style By</span>
              <h1 className="text-white text-3xl md:text-5xl font-sans font-bold leading-tight select-none uppercase">
                Main Character Energy
              </h1>
            </div>
            <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 text-[9px] text-stone-300 font-mono tracking-widest">
              EDITABLE HERO BANNER
            </div>
          </div>

          {/* HERO CAROUSEL: 8 PRODUCTS */}
          <div className="w-full">
            <h3 className="text-[11px] font-bold text-neutral-450 tracking-[0.2em] uppercase mb-4 px-1">
              [ 00 // Hero Drop Products ]
            </h3>
            <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-neutral-800">
              {workingLayout.heroProducts.map((item, idx) => (
                <MockProductCard 
                  key={item.id} 
                  item={item} 
                  onClick={() => openEditProductModal('heroProducts', idx)} 
                />
              ))}
            </div>
          </div>

          {/* BANNER 1 SECTION */}
          <div className="space-y-6">
            <MockBanner 
              src={workingLayout.banner1} 
              title="Crown of Clay Collection" 
              logo="/coc-logo.svg" 
              onClick={() => openEditBannerModal('banner1', workingLayout.banner1, 'Banner 1: Crown of Clay')}
            />
            <div className="w-full">
              <h3 className="text-[11px] font-bold text-neutral-450 tracking-[0.2em] uppercase mb-4 px-1">
                [ 01 // Banner 1 Collection Items ]
              </h3>
              <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-neutral-800">
                {workingLayout.banner1Products.map((item, idx) => (
                  <MockProductCard 
                    key={item.id} 
                    item={item} 
                    onClick={() => openEditProductModal('banner1Products', idx)} 
                  />
                ))}
              </div>
            </div>
          </div>

          {/* BANNER 2 SECTION */}
          <div className="space-y-6">
            <MockBanner 
              src={workingLayout.banner2} 
              title="Exclamation Studio Drops" 
              logo="/exclamation-logo.svg" 
              onClick={() => openEditBannerModal('banner2', workingLayout.banner2, 'Banner 2: Exclamation Studio')}
            />
            <div className="w-full">
              <h3 className="text-[11px] font-bold text-neutral-450 tracking-[0.2em] uppercase mb-4 px-1">
                [ 02 // Banner 2 Collection Items ]
              </h3>
              <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-neutral-800">
                {workingLayout.banner2Products.map((item, idx) => (
                  <MockProductCard 
                    key={item.id} 
                    item={item} 
                    onClick={() => openEditProductModal('banner2Products', idx)} 
                  />
                ))}
              </div>
            </div>
          </div>

          {/* BANNER 3 SECTION */}
          <div className="space-y-6">
            <MockBanner 
              src={workingLayout.banner3} 
              title="8ternity Endless Summer" 
              logo="/8ternity-logo.svg" 
              logoInvert
              onClick={() => openEditBannerModal('banner3', workingLayout.banner3, 'Banner 3: 8ternity')}
            />
            <div className="w-full">
              <h3 className="text-[11px] font-bold text-neutral-450 tracking-[0.2em] uppercase mb-4 px-1">
                [ 03 // Banner 3 Collection Items ]
              </h3>
              <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-neutral-800">
                {workingLayout.banner3Products.map((item, idx) => (
                  <MockProductCard 
                    key={item.id} 
                    item={item} 
                    onClick={() => openEditProductModal('banner3Products', idx)} 
                  />
                ))}
              </div>
            </div>
          </div>

          {/* BANNER 4 SECTION */}
          <div className="space-y-6">
            <MockBanner 
              src={workingLayout.banner4} 
              title="Dreamers Essentials" 
              onClick={() => openEditBannerModal('banner4', workingLayout.banner4, 'Banner 4: Dreamers')}
            />
            <div className="w-full">
              <h3 className="text-[11px] font-bold text-neutral-450 tracking-[0.2em] uppercase mb-4 px-1">
                [ 04 // Banner 4 Collection Items ]
              </h3>
              <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-neutral-800">
                {workingLayout.banner4Products.map((item, idx) => (
                  <MockProductCard 
                    key={item.id} 
                    item={item} 
                    onClick={() => openEditProductModal('banner4Products', idx)} 
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* EDITING DIALOG POPUP MODALS */}
      {activeEditItem && (
        <div className="fixed inset-0 bg-neutral-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          
          {/* BANNER EDIT MODAL */}
          {activeEditItem.type === 'banner' && (
            <div className="bg-neutral-900 w-full max-w-xl p-6 md:p-8 space-y-6 text-stone-200">
              <div>
                <span className="text-[9px] text-rose-300 tracking-[0.2em] uppercase font-mono block">CAMPAGN SETTINGS</span>
                <h3 className="text-base font-bold text-white uppercase tracking-wider">{activeEditItem.title}</h3>
              </div>

              {/* Preview */}
              <div className="aspect-[21/9] w-full bg-neutral-950 overflow-hidden relative">
                <img 
                  src={modalBannerImage} 
                  alt="Banner preview" 
                  className="w-full h-full object-cover grayscale brightness-90"
                />
              </div>

              {/* Controls */}
              <div className="space-y-4">
                <label className="w-full bg-neutral-950 hover:bg-neutral-800 hover:border-neutral-500 py-3 px-4 text-[9px] uppercase tracking-widest text-center cursor-pointer transition-colors flex items-center justify-center gap-2">
                  <Upload className="w-3.5 h-3.5" /> Upload File Image
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="sr-only" 
                    onChange={handleModalBannerUpload}
                  />
                </label>

                <div>
                  <span className="text-[9px] text-neutral-500 tracking-wider uppercase block mb-2">Or Select Preset Model:</span>
                  <div className="grid grid-cols-6 gap-2 max-h-32 overflow-y-auto p-1 border-neutral-800/60 bg-neutral-950">
                    {LOCAL_MODEL_PRESETS.map((src, idx) => (
                      <button
                        key={idx}
                        onClick={() => setModalBannerImage(src)}
                        className={`aspect-square  overflow-hidden transition-all ${
                          modalBannerImage === src ? ' scale-95' : ' hover:border-neutral-500'
                        }`}
                      >
                        <img src={src} alt="preset" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={() => setActiveEditItem(null)}
                  className="flex-1 hover:border-neutral-600 text-stone-300 hover:text-white py-3 text-[10px] uppercase tracking-widest cursor-pointer transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleApplyBannerChanges}
                  disabled={isApplying}
                  className={`flex-1 font-bold py-3 text-[10px] uppercase tracking-widest cursor-pointer transition-colors ${isApplying ? 'bg-neutral-600 text-neutral-400' : 'bg-white hover:bg-neutral-200 text-black'}`}
                >
                  {isApplying ? 'Uploading...' : 'Apply Changes'}
                </button>
              </div>
            </div>
          )}

          {/* PRODUCT EDIT MODAL */}
          {activeEditItem.type === 'product' && (
            <div className="bg-neutral-900 w-full max-w-xl p-6 md:p-8 space-y-6 text-stone-200">
              <div>
                <span className="text-[9px] text-rose-300 tracking-[0.2em] uppercase font-mono block">COLLECTIBLE SPECIFICATIONS</span>
                <h3 className="text-base font-bold text-white uppercase tracking-wider">Configure Product Slot</h3>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                {/* Left Form */}
                <div className="flex-1 space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] text-neutral-500 tracking-wider uppercase block">Product Name:</label>
                    <input 
                      type="text"
                      value={modalProdName}
                      onChange={(e) => setModalProdName(e.target.value)}
                      className="w-full bg-neutral-950 focus:border-white p-2.5 text-xs text-white uppercase tracking-wider outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] text-neutral-500 tracking-wider uppercase block">Price (£):</label>
                    <input 
                      type="number"
                      step="0.01"
                      value={modalProdPrice}
                      onChange={(e) => setModalProdPrice(parseFloat(e.target.value) || 0)}
                      className="w-full bg-neutral-950 focus:border-white p-2.5 text-xs text-white tracking-wider outline-none"
                    />
                  </div>
                  <div className="flex gap-2">
                    <div className="space-y-1.5 flex-1">
                      <label className="text-[9px] text-neutral-500 tracking-wider uppercase block">Front Image:</label>
                      <label className="w-full bg-neutral-950 hover:bg-neutral-800 hover:border-neutral-500 py-3 px-3 text-[9px] uppercase tracking-widest text-center cursor-pointer transition-colors flex items-center justify-center gap-1.5">
                        <Upload className="w-3.5 h-3.5" /> Front
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="sr-only" 
                          onChange={handleModalProdUpload}
                        />
                      </label>
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <label className="text-[9px] text-neutral-500 tracking-wider uppercase block">Back Image:</label>
                      <label className="w-full bg-neutral-950 hover:bg-neutral-800 hover:border-neutral-500 py-3 px-3 text-[9px] uppercase tracking-widest text-center cursor-pointer transition-colors flex items-center justify-center gap-1.5">
                        <Upload className="w-3.5 h-3.5" /> Back
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="sr-only" 
                          onChange={handleModalProdBackUpload}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] text-neutral-500 tracking-wider uppercase block">Availability Status:</label>
                    <select
                      value={modalProdStatus}
                      onChange={(e) => setModalProdStatus(e.target.value as any)}
                      className="w-full bg-neutral-950 focus:border-white p-2.5 text-xs text-white uppercase tracking-wider outline-none appearance-none cursor-pointer"
                    >
                      <option value="available">Available</option>
                      <option value="sold_out">Sold Out</option>
                      <option value="coming_soon">Coming Soon</option>
                    </select>
                  </div>
                </div>

                {/* Right Preview */}
                <div className="flex gap-2 flex-shrink-0 flex-col items-center">
                  <span className="text-[9px] text-neutral-500 tracking-wider uppercase block mb-1.5">Image Preview</span>
                  <div className="flex gap-2">
                    <div className="aspect-[4/5] w-24 bg-neutral-950 overflow-hidden relative">
                      <img 
                        src={modalProdImage} 
                        alt="Product front preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {modalProdBackImage && (
                      <div className="aspect-[4/5] w-24 bg-neutral-950 overflow-hidden relative">
                        <img 
                          src={modalProdBackImage} 
                          alt="Product back preview" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Shirt Presets */}
              <div>
                <span className="text-[9px] text-neutral-500 tracking-wider uppercase block mb-2">Or Select Product Preset:</span>
                <div className="grid grid-cols-8 gap-2 p-1 border-neutral-800/60 bg-neutral-950">
                  {LOCAL_SHIRT_PRESETS.map((src, idx) => (
                    <button
                      key={idx}
                      onClick={() => setModalProdImage(src)}
                      className={`aspect-square  overflow-hidden transition-all ${
                        modalProdImage === src ? ' scale-95' : ' hover:border-neutral-500'
                      }`}
                    >
                      <img src={src} alt="preset" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={() => setActiveEditItem(null)}
                  className="flex-1 hover:border-neutral-600 text-stone-300 hover:text-white py-3 text-[10px] uppercase tracking-widest cursor-pointer transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleApplyProductChanges}
                  disabled={isApplying}
                  className={`flex-1 font-bold py-3 text-[10px] uppercase tracking-widest cursor-pointer transition-colors ${isApplying ? 'bg-neutral-600 text-neutral-400' : 'bg-white hover:bg-neutral-200 text-black'}`}
                >
                  {isApplying ? 'Uploading...' : 'Apply Changes'}
                </button>
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
