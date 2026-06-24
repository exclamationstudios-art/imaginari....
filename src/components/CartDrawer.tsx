import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ShieldAlert, CreditCard, Sparkles, CheckCircle } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onRemove: (id: string) => void;
  onClearCart: () => void;
  onCheckoutComplete?: (orderId: string, orderTotal: number, items: any[]) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onIncrement,
  onDecrement,
  onRemove,
  onClearCart,
  onCheckoutComplete
}: CartDrawerProps) {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shipping' | 'success'>('cart');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [card, setCard] = useState('');
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shippingFreeThreshold = 100;
  const shippingCost = subtotal >= shippingFreeThreshold || subtotal === 0 ? 0 : 15;
  const total = subtotal + shippingCost;
  const missingForFreeShipping = Math.max(0, shippingFreeThreshold - subtotal);

  // Trigger simulated purchase checkout
  const handleProceedToShipping = () => {
    if (cart.length === 0) return;
    setCheckoutStep('shipping');
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !address || !card) {
      alert('Please fill out the critical security clearances');
      return;
    }
    // Generate order ID
    const randomId = 'MGR-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomId);
    
    // Fire callback to sync with user profile order history
    if (onCheckoutComplete) {
      const orderItems = cart.map(item => ({
        productName: item.product.name,
        brand: item.product.brand,
        quantity: item.quantity,
        price: item.product.price,
        size: item.selectedSize,
        colour: item.selectedColour,
        image: item.product.images[0]
      }));
      onCheckoutComplete(randomId, total, orderItems);
    }

    setCheckoutStep('success');
  };

  const handleResetCheckout = () => {
    onClearCart();
    setCheckoutStep('cart');
    onClose();
  };

  return (
    <div id="cart-drawer-backdrop" className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex justify-end animate-fadeIn">
      <div className="w-full max-w-md h-full bg-stone-100 flex flex-col justify-between p-6 shadow-2xl relative overflow-hidden">
        
        {/* Draw Header */}
        <div className="flex items-center justify-between pb-4 mb-4 select-none">
          <h2 className="text-sm font-sans font-black uppercase text-black flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-black" />
            <span>Shopping Bag</span>
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-stone-250 cursor-pointer text-black"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic checkout views */}
        {checkoutStep === 'cart' && (
          <div className="flex-1 flex flex-col justify-between overflow-y-auto">
            {/* Cart Items List */}
            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 py-12">
                <ShoppingBag className="w-16 h-16 text-stone-300 stroke-[1]" />
                <h3 className="text-xs font-mono font-bold text-black uppercase tracking-widest">
                  YOUR BAG IS BLANK
                </h3>
                <p className="text-stone-500 text-[11px] font-mono leading-relaxed uppercase max-w-xs">
                  Fill the void with technical shell jackets, dense heavy hoodies, or modular trousers.
                </p>
                <button
                  onClick={onClose}
                  className="bg-black text-stone-100 py-3 px-6 uppercase font-mono font-bold text-[10px] tracking-widest cursor-pointer hover:bg-neutral-900"
                >
                  Continue Browsing
                </button>
              </div>
            ) : (
              <div className="flex-1 space-y-4 pr-1 overflow-y-auto scrollbar-thin scrollbar-thumb-stone-300">
                {/* Free shipping banner helper */}
                {missingForFreeShipping > 0 ? (
                  <div className="p-3 bg-stone-200 text-[10px] font-mono text-neutral-600 uppercase text-center tracking-wider">
                    Add <span className="font-bold text-black font-sans text-xs">£{missingForFreeShipping}</span> more of items for <span className="font-bold text-black pb-0.5">FREE SHIPPING</span>
                  </div>
                ) : (
                  <div className="p-3 bg-neutral-950 text-rose-300 text-[10px] font-mono uppercase text-center tracking-[0.15em] flex items-center justify-center gap-1.5 animate-pulse">
                    <Sparkles className="w-3.5 h-3.5 animate-bounce" />
                    COMPLIMENTARY SHIPPING SECURED
                  </div>
                )}

                {/* Items loop */}
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-2 bg-stone-200/50 hover:border-stone-300 relative group transition-colors"
                  >
                    {/* Item Image */}
                    <div className="w-20 h-24 overflow-hidden bg-stone-300 flex-none">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover grayscale"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Meta & Increment Controls */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start text-[9px] font-mono text-neutral-450 uppercase pb-1">
                          <span>{item.product.brand}</span>
                          <span>£{item.product.price} each</span>
                        </div>
                        <h4 className="text-xs font-sans font-black uppercase text-black pt-1 leading-tight truncate">
                          {item.product.name}
                        </h4>
                        <div className="flex gap-4 pt-1 font-mono text-[9px] text-stone-500 uppercase">
                          <span>Size: <span className="text-black font-bold">{item.selectedSize}</span></span>
                          <span>Colour: <span className="text-black font-semibold truncate">{item.selectedColour.split(' ')[0]}</span></span>
                        </div>
                      </div>

                      {/* Quantity Toggles */}
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center bg-stone-50 text-xs font-mono">
                          <button
                            onClick={() => onDecrement(item.id)}
                            className="p-1 hover:bg-stone-250 cursor-pointer"
                          >
                            <Minus className="w-3 h-3 text-black" />
                          </button>
                          <span className="px-3 font-bold text-black">{item.quantity}</span>
                          <button
                            onClick={() => onIncrement(item.id)}
                            className="p-1 hover:bg-stone-250 cursor-pointer"
                          >
                            <Plus className="w-3 h-3 text-black" />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemove(item.id)}
                          className="p-1.5 text-neutral-500 hover:text-red-650 cursor-pointer hover:bg-stone-250 rounded-full transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}

            {/* Bottom Total Block */}
            {cart.length > 0 && (
              <div className="pt-4 space-y-3.5 mt-4 text-xs font-mono select-none">
                <div className="space-y-1 bg-stone-200/50 p-3 uppercase">
                  <div className="flex justify-between">
                    <span>Subtotal Archive</span>
                    <span className="text-black font-bold text-sm">£{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-neutral-500">
                    <span>Shipping Transit</span>
                    <span>{shippingCost === 0 ? 'FREE' : `£${shippingCost}`}</span>
                  </div>
                  <div className="flex justify-between text-black font-black pt-2 text-sm">
                    <span>Total Bill</span>
                    <span className="text-rose-950 font-mono text-base font-bold">£{total}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[9px] text-zinc-500 uppercase leading-snug">
                  <ShieldAlert className="w-4.5 h-4.5 flex-none text-zinc-400" />
                  <span>Verified clearance SSL certified transactions. All duties pre-paid at Aarhus logistics terminals.</span>
                </div>

                <button
                  onClick={handleProceedToShipping}
                  className="w-full bg-black hover:bg-neutral-900 text-stone-100 hover:text-white font-mono text-xs uppercase tracking-widest py-4 bg-block font-bold flex items-center justify-center gap-2 cursor-pointer transition-all outline-none"
                >
                  <CreditCard className="w-4 h-4" /> Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        )}

        {checkoutStep === 'shipping' && (
          <form onSubmit={handleCompleteOrder} className="flex-1 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">AUTHENTICATION DEPLOYMENT</span>
              <h3 className="text-md font-sans font-black uppercase text-black pb-2">
                SHIPPING & CLEARANCE NODE
              </h3>

              <div className="space-y-3 font-mono text-xs">
                
                {/* Full name */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-stone-500 block">CREATOR / FULL NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="SAMS SUDEEN"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-stone-50 p-2.5 outline-none focus:border-black uppercase rounded-none text-black"
                  />
                </div>

                {/* Shipping Location */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-stone-500 block">DELIVERY ADDRESS</label>
                  <input
                    type="text"
                    required
                    placeholder="CODENAME APARTMENTS 4B"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-stone-50 p-2.5 outline-none focus:border-black uppercase rounded-none text-black"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase text-stone-500 block">CITY SATELLITE</label>
                    <input
                      type="text"
                      required
                      placeholder="LONDON"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-stone-50 p-2.5 outline-none focus:border-black uppercase rounded-none text-black"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase text-stone-500 block">POSTAL ZIP</label>
                    <input
                      type="text"
                      required
                      placeholder="E1 6QL"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      className="w-full bg-stone-50 p-2.5 outline-none focus:border-black uppercase rounded-none text-black"
                    />
                  </div>
                </div>

                {/* Card Number details */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-stone-500 block">CREDIT CARD TRANSIT NODE</label>
                  <input
                    type="text"
                    required
                    placeholder="4000 1234 5678 9010"
                    maxLength={19}
                    value={card}
                    onChange={(e) => setCard(e.target.value)}
                    className="w-full bg-stone-50 p-2.5 outline-none focus:border-black uppercase rounded-none text-black"
                  />
                </div>

              </div>
            </div>

            {/* Simulated actions checkout summary */}
            <div className="pt-4 mt-8 space-y-2.5">
              <div className="flex justify-between font-mono text-xs uppercase text-zinc-500 px-1">
                <span>Total Amount of Elements:</span>
                <span className="text-black font-bold">£{total}</span>
              </div>
              <button
                type="submit"
                className="w-full bg-black hover:bg-neutral-900 text-stone-100 hover:text-white font-mono text-xs uppercase tracking-widest py-4 block font-bold cursor-pointer transition-all outline-none"
              >
                Secure and Complete Order
              </button>
              <button
                type="button"
                onClick={() => setCheckoutStep('cart')}
                className="w-full text-stone-500 font-mono text-xs uppercase tracking-widest py-3 bg-transparent cursor-pointer hover:text-black hover:border-black transition"
              >
                Back to Shopping Bag
              </button>
            </div>
          </form>
        )}

        {checkoutStep === 'success' && (
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-neutral-950 text-rose-300 flex items-center justify-center shadow-lg animate-bounce">
              <CheckCircle className="w-10 h-10 text-rose-300 stroke-[1.5]" />
            </div>

            <div className="space-y-2 select-none">
              <span className="text-[10px] font-mono tracking-widest text-emerald-600 font-bold uppercase block">
                [ TRANSACTION SECURED ]
              </span>
              <h3 className="text-xl font-sans font-black uppercase text-black leading-none">
                ORDER LODGED SAFELY!
              </h3>
              <p className="font-mono text-xs font-bold text-rose-950 uppercase select-all bg-stone-200 p-2 py-1.5 rounded-none">
                ID: {orderId}
              </p>
              <p className="text-stone-500 text-[11px] font-mono leading-relaxed max-w-xs mx-auto uppercase">
                Creator <span className="text-black font-bold">{name}</span>, your transit package is registered for priority dispatch. A confirmation message was dispatched to your communication node.
              </p>
            </div>

            <button
              onClick={handleResetCheckout}
              className="bg-black hover:bg-neutral-900 text-stone-100 font-mono text-xs uppercase tracking-widest py-3.5 px-8 font-bold cursor-pointer transition-all outline-none"
            >
              Continue Uniforming
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
