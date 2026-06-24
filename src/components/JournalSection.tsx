import { useState } from 'react';
import { Article } from '../types';
import { Clock, ArrowRight, CornerDownRight, X, Sparkles } from 'lucide-react';

interface JournalSectionProps {
  articles: Article[];
}

export default function JournalSection({ articles }: JournalSectionProps) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="maginari-journal" className="w-full bg-stone-100 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Editorial Section Top Header */}
        <div className="pb-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-500 uppercase">THE CHRONICLE</span>
            <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-black uppercase mt-2">
              MAGINARI JOURNAL
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-550 max-w-sm uppercase tracking-widest leading-relaxed">
            Unpacking the technical constructs of Scandinavian utility and the rebellions of youth streetwear.
          </p>
        </div>

        {/* Major Article Feed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Lead Feature (Article 1) */}
          <div className="lg:col-span-7 space-y-5">
            <div
              onClick={() => setSelectedArticle(articles[0])}
              className="group cursor-pointer aspect-16/9 overflow-hidden bg-neutral-900"
            >
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-102 group-hover:grayscale-0 transition-all duration-750"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
                <span className="font-bold text-black pr-4 uppercase">
                  {articles[0].category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {articles[0].readTime}
                </span>
                <span>{articles[0].date}</span>
              </div>

              <h3
                onClick={() => setSelectedArticle(articles[0])}
                className="text-2xl md:text-3xl font-sans font-black tracking-tight text-neutral-900 uppercase cursor-pointer hover:underline hover:text-black leading-tight"
              >
                {articles[0].title}
              </h3>

              <p className="text-sm text-stone-600 font-light leading-relaxed max-w-2xl">
                {articles[0].summary}
              </p>

              <button
                onClick={() => setSelectedArticle(articles[0])}
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase font-bold tracking-widest text-black hover:underline cursor-pointer"
              >
                Read Fully
                <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Side Articles (2 and 3) */}
          <div className="lg:col-span-5 space-y-12">
            {articles.slice(1).map((art) => (
              <div
                key={art.id}
                className="group flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 items-start pb-8 last:border-none"
              >
                {/* Side Image */}
                <div
                  onClick={() => setSelectedArticle(art)}
                  className="w-full sm:w-48 lg:w-full xl:w-48 aspect-4/3 overflow-hidden bg-stone-200 cursor-pointer flex-none group-hover:brightness-95 transition-all"
                >
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover grayscale group-hover:scale-103 group-hover:grayscale-0 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Side Content Details */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 text-[10px] font-mono text-neutral-500">
                    <span className="font-bold text-black uppercase pr-2">
                      {art.category}
                    </span>
                    <span>{art.readTime}</span>
                  </div>

                  <h4
                    onClick={() => setSelectedArticle(art)}
                    className="text-md font-sans font-black uppercase tracking-tight text-neutral-900 group-hover:underline cursor-pointer leading-tight line-clamp-2"
                  >
                    {art.title}
                  </h4>

                  <p className="text-xs text-stone-500 leading-relaxed font-light line-clamp-2">
                    {art.summary}
                  </p>

                  <button
                    onClick={() => setSelectedArticle(art)}
                    className="text-[10px] items-center gap-1 font-mono uppercase tracking-widest text-black hover:underline inline-flex cursor-pointer"
                  >
                    <CornerDownRight className="w-3 h-3 text-stone-400" /> View Story
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* FULL READER MODAL POPUP */}
      {selectedArticle && (
        <div id="article-reader-modal" className="fixed inset-0 bg-black/75 backdrop-blur-xs z-50 flex items-center justify-center p-4 md:p-8 animate-fadeIn">
          <div className="bg-stone-100 max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-12 relative flex flex-col">
            
            {/* Close Cross */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 bg-stone-200/50 hover:bg-stone-200 rounded-full cursor-pointer focus:outline-none z-10"
              aria-label="Close reader"
            >
              <X className="w-5 h-5 text-black" />
            </button>

            {/* Reader Core Structure */}
            <article className="space-y-6">
              
              <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
                <span className="font-bold text-black uppercase pb-0.5">
                  {selectedArticle.category}
                </span>
                <span>{selectedArticle.date}</span>
                <span>• {selectedArticle.readTime}</span>
              </div>

              <h2 className="text-2xl md:text-4xl font-sans font-black tracking-tight text-black uppercase leading-tight">
                {selectedArticle.title}
              </h2>

              <p className="text-neutral-500 font-mono text-xs uppercase tracking-wide pl-4 py-1 italic">
                {selectedArticle.summary}
              </p>

              {/* Large immersive layout image */}
              <div className="w-full aspect-21/9 overflow-hidden bg-neutral-900">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Text Area */}
              <div className="prose prose-stone max-w-none text-neutral-800 text-sm md:text-md leading-relaxed font-light space-y-4 pt-4 whitespace-pre-wrap">
                {selectedArticle.content}
              </div>

              {/* Closing Signatures and details */}
              <div className="pt-8 mt-12 flex items-center justify-between text-[11px] font-mono text-neutral-400 uppercase tracking-widest select-none bg-stone-200/20 p-4">
                <span className="flex items-center gap-1.5 text-black">
                  <Sparkles className="w-3.5 h-3.5" />
                  MAGINARI JOURNAL SECTOR
                </span>
                <span>MAY 2026 EDITION</span>
              </div>

            </article>

          </div>
        </div>
      )}

    </section>
  );
}
