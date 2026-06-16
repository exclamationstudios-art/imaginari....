import { useState } from 'react';
import { Play, Pause, SkipForward, Volume2, Disc, MapPin, Instagram, Sparkles, Flame, CalendarRange } from 'lucide-react';
import { PLAYLIST, INSTAGRAM_POSTS } from '../data';

export default function CultureBlock() {
  // Audio Player states (Simulated audio player with realistic tracks)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const currentTrack = PLAYLIST.tracks[currentTrackIndex];

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.tracks.length);
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="community-culture" className="w-full bg-stone-150 py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Culture block header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3 select-none">
          <div className="inline-flex items-center gap-1 bg-black text-rose-300 text-[9px] font-mono font-bold uppercase py-1 px-3.5 tracking-widest rounded-full">
            <Flame className="w-3.5 h-3.5 animate-bounce fill-rose-300" />
            Culture Sector Zero
          </div>
          <h2 className="text-4xl md:text-6xl font-sans font-black tracking-tighter text-black uppercase leading-none">
            WEAR THE MOVEMENT.
          </h2>
          <p className="text-zinc-650 text-xs md:text-sm font-light max-w-lg mx-auto font-mono uppercase tracking-wider">
            Streetwear is a cooperative canvas. Showcasing global creators, city archives, and curated frequencies.
          </p>
        </div>

        {/* Dual major Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column A (Col-span 5): Playlists, Soundtrack widget, and Upcoming Pop-ups */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Interactive Audio Player widget */}
            <div className="bg-neutral-950 text-stone-100 border border-neutral-800 p-6 md:p-8 rounded-none flex flex-col justify-between h-96 relative overflow-hidden group">
              
              {/* Disc rotate anim overlay */}
              <div className="absolute -right-24 -top-24 w-60 h-60 border-2 border-neutral-855 rounded-full flex items-center justify-center opacity-15">
                <Disc className={`w-32 h-32 text-white ${isPlaying ? 'animate-spin-slow' : ''}`} />
              </div>

              {/* Player Top meta details */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-shadow text-neutral-450 uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                  MAGINARI FM / ONLINE BROADCOAST
                </span>
                <span className="text-[8px] font-mono border border-neutral-800 px-2 py-0.5 tracking-wider">
                  S01 SECTOR_FREQ
                </span>
              </div>

              {/* Track detail display */}
              <div className="relative z-10 space-y-2 mt-8">
                <p className="text-rose-300 font-mono text-[10px] uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Playing Stream Node S01
                </p>
                <h3 className="text-2xl font-sans font-black uppercase text-white tracking-tight leading-none">
                  {currentTrack.name}
                </h3>
                <p className="text-neutral-450 font-mono text-xs uppercase tracking-wide">
                  Artist: {currentTrack.artist} // Duration: {currentTrack.duration}
                </p>
                
                {/* Simulated Audio Spectrum Wave bars visualizer */}
                <div className="flex items-end gap-1 h-8 pt-4">
                  {Array.from({ length: 24 }).map((_, i) => {
                    const randomHeight = isPlaying 
                      ? Math.floor(Math.random() * 28) + 4 
                      : 4;
                    return (
                      <span
                        key={i}
                        className="w-1.5 bg-rose-300 scale-y-100 transition-all duration-300 origin-bottom"
                        style={{ height: `${randomHeight}px` }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Playback HUD controls panel */}
              <div className="relative z-10 pt-6 mt-auto border-t border-neutral-900 flex items-center justify-between gap-6">
                
                {/* Left - Skip / Play */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleTogglePlay}
                    className="w-12 h-12 bg-rose-100 hover:bg-rose-200 text-black rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-all outline-none"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-black" /> : <Play className="w-5 h-5 fill-black translate-x-0.5" />}
                  </button>

                  <button
                    onClick={handleNextTrack}
                    className="w-9 h-9 bg-neutral-900 hover:bg-neutral-800 rounded-full flex items-center justify-center text-stone-300 hover:text-white cursor-pointer transition-colors"
                    aria-label="Skip Track"
                  >
                    <SkipForward className="w-4 h-4" />
                  </button>
                </div>

                {/* Right - Volume knob slider display */}
                <div className="flex items-center gap-2 text-neutral-400">
                  <Volume2 className="w-4 h-4 text-rose-300" />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(parseInt(e.target.value))}
                    className="w-20 bg-neutral-800 h-1 accent-rose-300 outline-none cursor-pointer"
                  />
                  <span className="text-[9px] font-mono">{volume}%</span>
                </div>

              </div>

            </div>

            {/* Upcoming Cultural Pop-ups & events list */}
            <div className="bg-stone-100 border border-stone-250 p-6 md:p-8 shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-stone-250 pb-3">
                <h3 className="text-xs font-mono font-black uppercase text-black flex items-center gap-2">
                  <CalendarRange className="w-4.5 h-4.5" /> Pop-Up & Culture Log
                </h3>
                <span className="text-[9px] font-mono text-neutral-400 uppercase">Archive 2026 // active</span>
              </div>

              <div className="space-y-4">
                {/* Pop up 1 */}
                <div className="flex items-start gap-4 p-2 cursor-default hover:bg-stone-200/50 transition">
                  <div className="bg-black text-rose-300 font-mono text-center flex flex-col justify-center px-3 py-1.5 uppercase font-bold text-xs">
                    <span>JUN</span>
                    <span className="text-lg leading-none">05</span>
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-sans font-black uppercase text-black">COPENHAGEN SKATEPARK GATHERING</h4>
                    <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">LOC: Faelledparken Sector / Aarhus team presentation</p>
                    <p className="text-xs text-stone-600 font-light line-clamp-1">Free drinks, DJ set with Sevilles Collective and limited rain parkas.</p>
                  </div>
                </div>

                {/* Pop up 2 */}
                <div className="flex items-start gap-4 p-2 cursor-default hover:bg-stone-200/50 transition">
                  <div className="bg-black text-white font-mono text-center flex flex-col justify-center px-3 py-1.5 uppercase font-bold text-xs">
                    <span>JUN</span>
                    <span className="text-lg leading-none">19</span>
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-sans font-black uppercase text-black">MADRID METROPOLIS ESCAPE TOURS</h4>
                    <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">LOC: Plaza de Colón Pop-Up Shop / Seville Crew</p>
                    <p className="text-xs text-stone-600 font-light line-clamp-1">Heavy loops 480gsm fleece hoodies available in offline color limits.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Column B (Col-span 7): Gorgeous UGC Street Creator photo grid */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 uppercase tracking-widest select-none pb-1">
              <span>COMMUNITY STYLING CREDITS // @MAGINARI</span>
              <span>LIVE INTEGRATED UGC HUB</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {INSTAGRAM_POSTS.map((post) => (
                <div
                  key={post.id}
                  className="group relative aspect-square overflow-hidden bg-stone-200 border border-stone-250 shadow-xs"
                >
                  <img
                    src={post.image}
                    alt={`${post.user} creator`}
                    className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-103 group-hover:grayscale-0 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Subtle creator handles overlay tag */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-white">
                    <span className="text-rose-300 font-mono text-[9px] tracking-widest uppercase flex items-center gap-1.5">
                      <Instagram className="w-3.5 h-3.5 text-white" /> Live UGC
                    </span>
                    <div>
                      <h4 className="text-sm font-sans font-black tracking-tight uppercase block leading-none">{post.user}</h4>
                      <p className="text-[9px] font-mono text-stone-300 tracking-wider flex items-center gap-0.5 mt-1">
                        <MapPin className="w-3 h-3 text-rose-300" />
                        {post.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-stone-200/50 p-4 border border-stone-250 text-center text-xs font-mono text-neutral-600 uppercase select-all">
              TAG US TO BE ARCHIVED: <span className="font-bold text-black font-sans tracking-wide">#MAGINARIUNIFORM</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
