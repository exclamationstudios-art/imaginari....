import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowLeft, Check, Loader2 } from 'lucide-react';

export default function VendorForm() {
  const [step, setStep] = useState(0); // 0 = loader, 1 = part 1, 2 = part 2, 3 = part 3, 4 = success

  // Form State
  const [formData, setFormData] = useState({
    exclusivity: 'exclusive', 
    volume: '',
    retailPrice: '',
    margins: '',
    hasHighFidelityAssets: false,
    brandStory: '',
    fulfillmentModel: 'pre-produced', 
    fulfillmentTimeline: '',
    handlesShipping: false
  });

  useEffect(() => {
    // Initial loader sequence
    const timer = setTimeout(() => {
      setStep(1);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to local storage for Admin Dashboard retrieval
    const existing = localStorage.getItem('maginari_vendor_applications');
    const apps = existing ? JSON.parse(existing) : [];
    
    apps.push({
      id: `VND-${Date.now().toString().slice(-6)}`,
      submittedAt: new Date().toISOString(),
      ...formData
    });
    
    localStorage.setItem('maginari_vendor_applications', JSON.stringify(apps));
    
    nextStep();
  };

  return (
    <div className="min-h-[100dvh] bg-stone-100 flex flex-col justify-center items-center p-4 text-stone-900 font-sans selection:bg-black selection:text-white relative overflow-x-hidden">
      
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div 
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-neutral-950 text-white flex flex-col items-center justify-center gap-8"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, filter: 'blur(10px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-4xl sm:text-5xl font-bold tracking-tighter uppercase text-rose-300"
            >
              Maginari
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-[1px] bg-white/10 overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="w-full h-full bg-rose-300 shadow-[0_0_8px_rgba(253,164,175,0.8)]"
                />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-mono">Secure Vendor Portal</span>
            </motion.div>
          </motion.div>
        )}

        {step > 0 && step < 4 && (
          <motion.div
            key={`step-${step}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-lg bg-white p-6 sm:p-10 shadow-2xl relative"
          >
            {/* Progress indicator */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex-1 h-1 bg-stone-100 overflow-hidden">
                  <motion.div 
                    className="h-full bg-black"
                    initial={{ width: '0%' }}
                    animate={{ width: step >= s ? '100%' : '0%' }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mb-8">
              {step > 1 ? (
                <button type="button" onClick={prevStep} className="p-2 -ml-2 text-stone-400 hover:text-black transition-colors">
                  <ArrowLeft size={20} />
                </button>
              ) : (
                <div className="w-9" />
              )}
              <span className="text-[10px] uppercase tracking-widest text-stone-400 font-mono">
                Part {step} of 3
              </span>
              <div className="w-9" />
            </div>

            <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }} className="space-y-8">
              
              {/* PART 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold uppercase tracking-tight mb-2">Exclusivity & Scarcity</h2>
                    <p className="text-sm text-stone-500">The Drop Mechanics</p>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="block space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider block">Retail Status</span>
                      <p className="text-xs text-stone-500 mb-3">Is this item/collection an exclusive release for our platform, or is it actively retailed elsewhere?</p>
                      <select 
                        value={formData.exclusivity}
                        onChange={(e) => handleChange('exclusivity', e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 p-4 text-sm outline-none focus:border-black transition-colors appearance-none"
                      >
                        <option value="exclusive">Platform Exclusive</option>
                        <option value="retailed">Actively Retailed Elsewhere</option>
                      </select>
                    </label>

                    <label className="block space-y-2 pt-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider block">Production Volume</span>
                      <p className="text-xs text-stone-500 mb-3">What is the total, strict production volume allocation available for this specific drop window?</p>
                      <input 
                        type="text" 
                        placeholder="e.g. 50 units"
                        value={formData.volume}
                        onChange={(e) => handleChange('volume', e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 p-4 text-sm outline-none focus:border-black transition-colors"
                        required
                      />
                    </label>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <label className="block space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider block">Target Retail Price</span>
                        <input 
                          type="text" 
                          placeholder="£ / $"
                          value={formData.retailPrice}
                          onChange={(e) => handleChange('retailPrice', e.target.value)}
                          className="w-full bg-stone-50 border border-stone-200 p-4 text-sm outline-none focus:border-black transition-colors"
                          required
                        />
                      </label>
                      <label className="block space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider block">Margins (COGS)</span>
                        <input 
                          type="text" 
                          placeholder="e.g. 60%"
                          value={formData.margins}
                          onChange={(e) => handleChange('margins', e.target.value)}
                          className="w-full bg-stone-50 border border-stone-200 p-4 text-sm outline-none focus:border-black transition-colors"
                          required
                        />
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* PART 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold uppercase tracking-tight mb-2">High-Signal Asset Readiness</h2>
                    <p className="text-sm text-stone-500">The Visual Check</p>
                  </div>
                  
                  <div className="space-y-6">
                    <label className="flex items-start gap-4 p-4 border border-stone-200 bg-stone-50 cursor-pointer group">
                      <div className="pt-1">
                        <input 
                          type="checkbox" 
                          checked={formData.hasHighFidelityAssets}
                          onChange={(e) => handleChange('hasHighFidelityAssets', e.target.checked)}
                          className="w-4 h-4 accent-black cursor-pointer"
                          required
                        />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider block mb-1">Visual Assurance</span>
                        <p className="text-xs text-stone-600">I confirm we have high-fidelity, studio-grade product imagery and assets matching a clean, editorial aesthetic ready for deployment.</p>
                      </div>
                    </label>

                    <label className="block space-y-2 pt-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider block">Brand Story & Inspiration</span>
                      <p className="text-xs text-stone-500 mb-3">Provide a copy deck or the exact brand story/inspiration narrative behind this specific piece.</p>
                      <textarea 
                        rows={5}
                        placeholder="Our inspiration..."
                        value={formData.brandStory}
                        onChange={(e) => handleChange('brandStory', e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 p-4 text-sm outline-none focus:border-black transition-colors resize-none"
                        required
                      />
                    </label>
                  </div>
                </div>
              )}

              {/* PART 3 */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold uppercase tracking-tight mb-2">Logistics & Fulfillment</h2>
                    <p className="text-sm text-stone-500">Execution Assurance</p>
                  </div>
                  
                  <div className="space-y-6">
                    <label className="block space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider block">Fulfillment Model</span>
                      <p className="text-xs text-stone-500 mb-3">Are the pieces pre-produced and ready to ship immediately, or is this a pre-order model?</p>
                      <select 
                        value={formData.fulfillmentModel}
                        onChange={(e) => handleChange('fulfillmentModel', e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 p-4 text-sm outline-none focus:border-black transition-colors appearance-none"
                      >
                        <option value="pre-produced">Pre-produced & Ready</option>
                        <option value="pre-order">Pre-order Model</option>
                      </select>
                    </label>

                    {formData.fulfillmentModel === 'pre-order' && (
                      <motion.label 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="block space-y-2"
                      >
                        <span className="text-[11px] font-bold uppercase tracking-wider block">Fulfillment Timeline</span>
                        <input 
                          type="text" 
                          placeholder="e.g. Ships in 4-6 weeks"
                          value={formData.fulfillmentTimeline}
                          onChange={(e) => handleChange('fulfillmentTimeline', e.target.value)}
                          className="w-full bg-stone-50 border border-stone-200 p-4 text-sm outline-none focus:border-black transition-colors"
                          required={formData.fulfillmentModel === 'pre-order'}
                        />
                      </motion.label>
                    )}

                    <label className="flex items-start gap-4 p-4 border border-stone-200 bg-stone-50 cursor-pointer group">
                      <div className="pt-1">
                        <input 
                          type="checkbox" 
                          checked={formData.handlesShipping}
                          onChange={(e) => handleChange('handlesShipping', e.target.checked)}
                          className="w-4 h-4 accent-black cursor-pointer"
                          required
                        />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider block mb-1">D2C Fulfillment</span>
                        <p className="text-xs text-stone-600">I confirm our team will handle direct-to-consumer shipping, tracking infrastructure, and international fulfillment once order sheets are provided.</p>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full bg-black text-white p-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors"
                >
                  {step === 3 ? 'Submit Application' : 'Continue'}
                  {step !== 3 && <ChevronRight size={16} />}
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg bg-white p-10 shadow-2xl flex flex-col items-center text-center gap-6"
          >
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
              <Check size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-2">Application Received</h2>
              <p className="text-stone-500 text-sm">Our curation team will review your drop mechanics and asset fidelity. We will reach out within 48 hours.</p>
            </div>
            <button 
              onClick={() => window.location.href = 'https://maginari.com'}
              className="mt-4 px-6 py-3 border border-stone-200 text-xs font-bold uppercase tracking-widest hover:border-black transition-colors"
            >
              Return to Platform
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
