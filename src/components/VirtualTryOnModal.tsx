import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Camera, Upload, Check, Shirt } from 'lucide-react';
import { Product } from '../types';
import { generateTryOn } from '../services/TryOnService';

interface VirtualTryOnModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function VirtualTryOnModal({ product, onClose }: VirtualTryOnModalProps) {
  const [step, setStep] = useState<'upload' | 'processing' | 'result'>('upload');
  const [userImage, setUserImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!product) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result as string);
        startProcessing(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const startProcessing = async (image: string) => {
    setStep('processing');
    const result = await generateTryOn(image, product.images[0], product.name);
    if (result) {
      setResultImage(result);
      setStep('result');
    } else {
      setStep('upload');
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
        
        <motion.div 
          initial={{ scale: 0.98, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.98, opacity: 0, y: 10 }}
          className="relative w-full max-w-4xl h-auto max-h-[90vh] bg-white overflow-hidden flex flex-col md:flex-row shadow-2xl"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-stone-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>

          {/* Left Side: Preview/Result Area */}
          <div className="flex-1 bg-[#f6f6f6] relative flex items-center justify-center min-h-[50vh] md:min-h-[60vh] p-8">
            
            {step === 'upload' && (
              <div className="flex flex-col items-center gap-6 w-full max-w-sm">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Camera size={32} className="text-neutral-400" />
                </div>
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold tracking-tight">Upload Your Photo</h2>
                  <p className="text-sm text-neutral-500">For best results, use a well-lit, full-body photo facing the camera.</p>
                </div>
                
                <div className="w-full flex flex-col gap-3 mt-4">
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full bg-black text-white py-4 rounded-full font-medium text-base hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <Upload size={18} />
                    Choose from device
                  </button>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*" 
                    onChange={handleFileUpload}
                  />
                </div>
              </div>
            )}

            {step === 'processing' && (
              <div className="flex flex-col items-center gap-8 w-full max-w-sm text-center">
                <div className="relative w-48 aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-sm">
                  {userImage && <img src={userImage} className="w-full h-full object-cover opacity-50 grayscale" alt="Processing" />}
                  <motion.div 
                    animate={{ y: ['0%', '100%', '0%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-full h-[2px] bg-black shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-center items-center gap-2 font-bold text-sm tracking-widest uppercase">
                    <Shirt size={16} className="animate-pulse" />
                    Generating Look
                  </div>
                  <p className="text-sm text-neutral-500">Tailoring {product.name} to fit your body...</p>
                </div>
              </div>
            )}

            {step === 'result' && resultImage && (
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src={resultImage} 
                  className="w-auto h-full max-h-[80vh] object-contain drop-shadow-sm"
                  alt="Virtual Try On Result"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
            
          </div>

          {/* Right Side: Info Panel */}
          <div className="w-full md:w-[320px] lg:w-[380px] p-8 flex flex-col bg-white">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-green-600 mb-4">
                <Check size={14} />
                Virtual Fitting
              </div>
              <div className="text-sm font-medium text-neutral-500 mb-1">{product.brand}</div>
              <h3 className="text-2xl font-bold tracking-tight leading-tight">{product.name}</h3>
              <p className="text-xl font-medium mt-3">£{product.price}</p>
            </div>

            {step === 'result' && (
              <div className="mt-4 mb-8">
                <button 
                  onClick={() => setStep('upload')}
                  className="text-sm font-medium text-neutral-500 hover:text-black underline underline-offset-4 transition-colors"
                >
                  Try another photo
                </button>
              </div>
            )}

            <div className="mt-auto space-y-4 pt-6">
               <button 
                  onClick={onClose}
                  className="w-full bg-black text-white py-4 rounded-full font-medium text-base hover:bg-neutral-800 transition-colors"
               >
                  Close & Add to Bag
               </button>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
