import React, { useState, useRef } from 'react';
import { UserProfile, OrderRecord } from '../types';
import { 
  X, User, Mail, Lock, ShieldCheck, Award, History, 
  ChevronDown, ChevronUp, LogOut, Camera, Save, Edit2, CheckCircle2 
} from 'lucide-react';

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile | null;
  onLogin: (email: string, name: string) => void;
  onLogout: () => void;
  onUpdateProfile: (updated: Partial<UserProfile>) => void;
}

// Predefined high-fashion avatar presets
const AVATAR_PRESETS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200'
];

export default function ProfileDrawer({
  isOpen,
  onClose,
  profile,
  onLogin,
  onLogout,
  onUpdateProfile
}: ProfileDrawerProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  
  // Auth Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameInput, setNameInput] = useState('');

  // Profile Edit State
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  
  // Avatar Selection State
  const [showAvatarPresets, setShowAvatarPresets] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Expandable Order Details Map
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  if (!isOpen) return null;

  // Handle local Auth Submission
  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    if (isSignUp) {
      if (!nameInput) {
        alert('Please enter your name for registration.');
        return;
      }
      onLogin(email, nameInput);
    } else {
      // Default name for mock logins
      const resolvedName = email.split('@')[0];
      const prettyName = resolvedName.charAt(0).toUpperCase() + resolvedName.slice(1);
      onLogin(email, prettyName || 'Valued Guest');
    }
    
    // Clear inputs
    setEmail('');
    setPassword('');
    setNameInput('');
  };

  // Start Editing Mode
  const startEdit = () => {
    if (!profile) return;
    setEditName(profile.name);
    setEditEmail(profile.email);
    setIsEditing(true);
  };

  // Save Edits
  const saveProfileEdits = () => {
    if (!editName || !editEmail) {
      alert('Name and Email cannot be empty.');
      return;
    }
    onUpdateProfile({
      name: editName,
      email: editEmail
    });
    setIsEditing(false);
  };

  // Toggle Predefined Avatar or Upload Custom
  const selectAvatarPreset = (url: string) => {
    onUpdateProfile({ avatar: url });
    setShowAvatarPresets(false);
  };

  // Handle local image file upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          onUpdateProfile({ avatar: reader.result });
          setShowAvatarPresets(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleOrderExpand = (orderId: string) => {
    setExpandedOrderId(prev => prev === orderId ? null : orderId);
  };

  return (
    <div 
      id="profile-drawer-backdrop" 
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex justify-end animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md h-full bg-stone-100 flex flex-col justify-between p-6 shadow-2xl relative overflow-hidden animate-slideLeft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-250 pb-4 mb-4 select-none">
          <h2 className="text-sm font-sans font-black uppercase text-black flex items-center gap-2">
            <User className="w-5 h-5 text-black" />
            <span>Account Clearance</span>
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-stone-250 cursor-pointer text-black transition-colors"
            aria-label="Close profile drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Inner Container */}
        <div className="flex-1 flex flex-col justify-between overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-stone-300">
          
          {!profile ? (
            /* --- LOGGED OUT STATE --- */
            <div className="flex-grow flex flex-col justify-center py-6">
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-stone-200 border border-stone-300 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="w-6 h-6 text-stone-500" />
                </div>
                <h3 className="text-xs font-mono font-bold text-black uppercase tracking-widest">
                  ACCESS RESTRICTED
                </h3>
                <p className="text-stone-500 text-[10px] font-mono uppercase leading-relaxed max-w-xs mx-auto mt-2">
                  Authenticate your credentials to unlock custom tiers, archive orders, and priority checkout clearance.
                </p>
              </div>

              <form onSubmit={handleAuthSubmit} className="space-y-4 max-w-sm mx-auto w-full font-mono text-xs">
                
                {isSignUp && (
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase text-stone-500 block">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="JULIAN VANE"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 p-2.5 outline-none focus:border-black uppercase rounded-none text-black"
                    />
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-[9px] uppercase text-stone-500 block">CREATOR EMAIL</label>
                  <div className="relative flex items-center">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3" />
                    <input
                      type="email"
                      required
                      placeholder="CREATOR@MAGINARI.COM"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 p-2.5 pl-10 outline-none focus:border-black uppercase rounded-none text-black"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] uppercase text-stone-500 block">SECURITY CODE / PASSWORD</label>
                  <div className="relative flex items-center">
                    <Lock className="w-4 h-4 text-stone-400 absolute left-3" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 p-2.5 pl-10 outline-none focus:border-black rounded-none text-black"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black hover:bg-neutral-900 text-stone-100 hover:text-white py-3.5 uppercase font-bold text-[10px] tracking-widest cursor-pointer transition-all mt-6"
                >
                  {isSignUp ? 'CREATE ARCHIVE DECK' : 'VALIDATE CLEARANCE'}
                </button>

                <div className="text-center pt-4 border-t border-stone-200">
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-[10px] text-stone-500 hover:text-black hover:underline cursor-pointer uppercase tracking-wider"
                  >
                    {isSignUp ? 'Already authenticated? Login' : 'Need clearance? Register here'}
                  </button>
                </div>

                <div className="p-3 bg-stone-200 border border-stone-300 text-[9px] text-stone-500 leading-normal uppercase text-center mt-6">
                  <span>Fast Access Node: Login with <span className="font-bold text-black font-sans text-[10px]">guest@maginari.com</span> / any code.</span>
                </div>

              </form>
            </div>
          ) : (
            /* --- LOGGED IN PROFILE DASHBOARD --- */
            <div className="space-y-6 py-2">
              
              {/* Profile Card & Avatar */}
              <div className="bg-stone-200/50 border border-stone-200 p-4 relative flex items-center gap-4 group">
                
                {/* Avatar Image container with Hover Overlay */}
                <div className="relative w-18 h-18 rounded-full overflow-hidden bg-stone-300 border border-stone-400 flex-none group">
                  <img
                    src={profile.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'}
                    alt={profile.name}
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <button 
                    onClick={() => setShowAvatarPresets(!showAvatarPresets)}
                    className="absolute inset-0 bg-black/65 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                    title="Change Avatar"
                  >
                    <Camera className="w-5 h-5 text-white stroke-[2]" />
                  </button>
                </div>

                {/* Account Details / Edit Fields */}
                <div className="flex-grow min-w-0">
                  {isEditing ? (
                    <div className="space-y-2 font-mono text-[11px]">
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="bg-white border border-stone-300 p-1 w-full text-black uppercase font-bold text-xs"
                      />
                      <input
                        type="email"
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                        className="bg-white border border-stone-300 p-1 w-full text-black"
                      />
                    </div>
                  ) : (
                    <div className="select-none truncate">
                      <h3 className="text-sm font-sans font-black uppercase text-black leading-tight flex items-center gap-1.5">
                        {profile.name}
                        <CheckCircle2 className="w-3.5 h-3.5 text-stone-500 fill-stone-100" />
                      </h3>
                      <span className="text-[10px] font-mono text-stone-500 block truncate mt-0.5">{profile.email}</span>
                      <span className="text-[9px] font-mono text-[#B6861B] bg-[#B6861B]/10 border border-[#B6861B]/20 py-0.5 px-2 font-semibold tracking-widest inline-block uppercase mt-1.5">
                        ID: {profile.memberId}
                      </span>
                    </div>
                  )}
                </div>

                {/* Edit Action Button */}
                <div className="flex-none">
                  {isEditing ? (
                    <button
                      onClick={saveProfileEdits}
                      className="p-2 bg-black hover:bg-neutral-900 text-white rounded-none cursor-pointer"
                      title="Save Changes"
                    >
                      <Save className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={startEdit}
                      className="p-2 hover:bg-stone-200 text-stone-600 hover:text-black transition-colors rounded-full cursor-pointer"
                      title="Edit Profile Name"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

              </div>

              {/* Predefined Avatar Selector Panel */}
              {showAvatarPresets && (
                <div className="p-4 bg-stone-200 border border-stone-300 space-y-3 animate-fadeIn">
                  <div className="flex justify-between items-center select-none">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-black">SELECT NEW AVATAR PRESET</span>
                    <button 
                      onClick={() => setShowAvatarPresets(false)}
                      className="text-[10px] text-stone-500 hover:text-black uppercase underline"
                    >
                      Close
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {AVATAR_PRESETS.map((preset, idx) => (
                      <button
                        key={idx}
                        onClick={() => selectAvatarPreset(preset)}
                        className="w-12 h-12 rounded-full overflow-hidden border-2 border-stone-350 hover:border-black cursor-pointer active:scale-95 transition-all"
                      >
                        <img src={preset} className="w-full h-full object-cover grayscale" alt="preset" />
                      </button>
                    ))}
                    
                    {/* Custom File Upload button */}
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-12 h-12 rounded-full border-2 border-dashed border-stone-400 hover:border-black flex items-center justify-center text-stone-500 hover:text-black transition-all cursor-pointer bg-stone-100"
                      title="Upload Custom Image File"
                    >
                      <Camera className="w-5 h-5" />
                    </button>
                    <input 
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                </div>
              )}

              {/* Membership Tier & Points Progress */}
              <div className="bg-neutral-950 text-white p-5 border border-neutral-900 shadow-md flex flex-col gap-4 relative overflow-hidden select-none">
                <div className="absolute right-0 top-0 opacity-15 translate-x-4 -translate-y-4 text-[130px] font-sans font-black pointer-events-none select-none tracking-tighter text-stone-600">
                  M
                </div>
                
                <div className="flex items-center gap-2 relative z-10">
                  <Award className="w-5 h-5 text-rose-300 stroke-[1.5]" />
                  <span className="text-[10px] font-mono tracking-[0.25em] text-stone-400 uppercase">
                    MEMBERSHIP STATUS
                  </span>
                </div>

                <div className="relative z-10">
                  <h4 className="text-md font-sans font-black uppercase tracking-widest text-[#B6861B] bg-gradient-to-r from-[#B6861B] to-[#FFE8AA] bg-clip-text text-transparent">
                    {profile.tier}
                  </h4>
                  <div className="flex justify-between items-baseline mt-2">
                    <span className="text-[10px] font-mono text-stone-400">ACTIVE MEMBER ACCUMULATION</span>
                    <span className="text-lg font-sans font-black text-rose-300">{profile.points.toLocaleString()} PTS</span>
                  </div>
                </div>

                {/* Progress bar to next reward */}
                <div className="space-y-1.5 relative z-10">
                  <div className="h-1 bg-neutral-800 w-full">
                    <div 
                      className="h-full bg-gradient-to-r from-[#B6861B] to-[#FFE8AA]" 
                      style={{ width: `${Math.min(100, (profile.points / 10000) * 100)}%` }} 
                    />
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-stone-500">
                    <span>LEVEL 01</span>
                    <span>10,000 PTS FOR NEXT REWARD (DISPATCH CODE)</span>
                  </div>
                </div>
              </div>

              {/* Order History */}
              <div className="space-y-3 font-mono">
                <h4 className="text-[10px] font-bold tracking-widest uppercase border-b border-stone-250 pb-2 text-black flex items-center gap-1.5 select-none">
                  <History className="w-4 h-4 text-stone-600" />
                  <span>ELEMENTS ARCHIVE TRANSITS ({profile.orders.length})</span>
                </h4>

                {profile.orders.length === 0 ? (
                  <div className="p-8 text-center text-stone-400 border border-dashed border-stone-300 text-[10px] uppercase select-none">
                    NO HISTORICAL TRANSITS RECORDED
                  </div>
                ) : (
                  <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                    {profile.orders.map((order) => {
                      const isExpanded = expandedOrderId === order.id;
                      return (
                        <div 
                          key={order.id}
                          className="bg-stone-200 border border-stone-300 transition-colors"
                        >
                          {/* Order Header Summary */}
                          <div 
                            onClick={() => toggleOrderExpand(order.id)}
                            className="p-3 flex items-center justify-between cursor-pointer select-none"
                          >
                            <div className="space-y-1">
                              <span className="text-[10px] font-bold text-black block">{order.id}</span>
                              <span className="text-[9px] text-stone-500 block">{order.date}</span>
                            </div>

                            <div className="flex items-center gap-4 text-right">
                              <div className="space-y-0.5">
                                <span className="text-xs font-bold text-black block">£{order.total.toFixed(2)}</span>
                                <span className={`text-[8px] font-bold uppercase tracking-wider inline-block px-1.5 py-0.2 rounded-none border ${
                                  order.status === 'Processing' 
                                    ? 'bg-amber-100 text-amber-700 border-amber-300' 
                                    : 'bg-emerald-100 text-emerald-700 border-emerald-300'
                                }`}>
                                  {order.status}
                                </span>
                              </div>
                              {isExpanded ? <ChevronUp className="w-4 h-4 text-stone-500" /> : <ChevronDown className="w-4 h-4 text-stone-500" />}
                            </div>
                          </div>

                          {/* Expanded Order Items Detail */}
                          {isExpanded && (
                            <div className="p-3 border-t border-stone-300 bg-stone-50 text-[10px] space-y-2 select-none">
                              {order.items.map((item, idx) => (
                                <div key={idx} className="flex gap-3 pb-2 border-b border-stone-200 last:border-b-0 last:pb-0">
                                  <div className="w-10 h-12 bg-stone-200 border border-stone-250 flex-none overflow-hidden">
                                    <img src={item.image} className="w-full h-full object-cover grayscale" alt="item" />
                                  </div>
                                  <div className="flex-grow min-w-0">
                                    <span className="text-[8px] text-stone-400 uppercase block">{item.brand}</span>
                                    <span className="font-bold text-black block truncate text-[9px]">{item.productName}</span>
                                    <div className="text-stone-500 text-[8px] space-x-2 mt-0.5 uppercase">
                                      <span>Size: <span className="font-bold text-black">{item.size}</span></span>
                                      <span>Colour: <span className="font-semibold text-black">{item.colour.split(' ')[0]}</span></span>
                                      <span>Qty: <span className="font-bold text-black">{item.quantity}</span></span>
                                    </div>
                                  </div>
                                  <div className="flex-none text-right font-bold text-black">
                                    £{(item.price * item.quantity).toFixed(2)}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>
          )}

        </div>

        {/* Footer Actions */}
        {profile && (
          <div className="border-t border-stone-250 pt-4 mt-4 select-none">
            <button
              onClick={onLogout}
              className="w-full border border-stone-300 text-neutral-500 hover:text-black hover:border-black py-3 bg-transparent uppercase font-mono text-xs tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <LogOut className="w-4 h-4" /> TERMINATE SESSION
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
