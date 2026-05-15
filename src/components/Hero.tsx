"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Plane, MapPin, Pill, Star } from "lucide-react";
import { countries } from "@/data/countries";
import WavingShemaghCloth from "./WavingShemaghCloth";

export default function Hero() {
  // Use a few real countries for the floating cards
  const sampleCountries = countries.slice(0, 3);

  // Shemagh SVG Data URI (reused for patterns)
  const shemaghPattern = "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%23B22222' fill-opacity='1' fill-rule='evenodd'/%3E";

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-sep-off-white">
      
      {/* 1. Large Waving Cloth Banner Component */}
      <WavingShemaghCloth />

      {/* 2. Global Grain/Noise Texture for Premium feel */}
      <div className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay opacity-30 bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noise\\' x=\\'0\\' y=\\'0\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.85\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noise)\\'/%3E%3C/svg%3E')]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: Content */}
          <div className="max-w-2xl relative z-30">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-sep-primary/20 mb-8 shadow-[0_4px_20px_rgba(178,34,34,0.08)] backdrop-blur-xl"
            >
              <span className="w-2 h-2 rounded-full bg-sep-primary animate-pulse-slow shadow-[0_0_8px_rgba(178,34,34,0.8)]" />
              <span className="text-sm font-bold tracking-wide text-sep-primary uppercase">2026 Applications Open</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-sep-dark-text drop-shadow-sm"
            >
              Your Global <br />
              <span className="text-gradient relative inline-block">
                Pharmacy Journey
                {/* Decorative underline */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-sep-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-sep-muted mb-10 leading-relaxed max-w-xl relative"
            >
              <span className="absolute -inset-4 bg-white/40 blur-xl -z-10 rounded-full" />
              Discover international exchange opportunities. Train in top-tier fields globally, experience new cultures, and proudly represent JPSA and Jordan abroad.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 relative z-10"
            >
              <Link 
                href="/#apply"
                className="group flex items-center justify-center gap-2 bg-sep-primary hover:bg-sep-deep-red text-white font-bold px-8 py-4 rounded-xl shadow-[0_8px_25px_rgba(178,34,34,0.25)] neon-glow hover-shine"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/#countries"
                className="group flex items-center justify-center gap-2 bg-white hover:bg-sep-warm-white border border-sep-light-gray text-sep-dark-text font-bold px-8 py-4 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] filter-glow"
              >
                <Globe className="w-5 h-5 text-sep-primary group-hover:rotate-12 transition-transform icon-pulse" />
                Explore Destinations
              </Link>
              <Link 
                href="/incomings"
                className="group flex items-center justify-center gap-2 bg-sep-primary hover:bg-sep-deep-red text-white font-bold px-8 py-4 rounded-xl shadow-[0_8px_25px_rgba(178,34,34,0.25)] neon-glow hover-shine"
              >
                For Incomings
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Animated Visual Composition */}
          <div className="relative h-auto sm:h-[450px] lg:h-[650px] perspective-1000 z-20 mt-8 lg:mt-0 w-full flex justify-center sm:block py-8 sm:py-0 sm:overflow-visible">
            
            {/* Desktop Only Graphics (Globes, Routes) */}
            <div className="hidden lg:block">


            {/* Abstract Globe Base / Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-sep-primary/10 rounded-full border-dashed mix-blend-multiply z-10"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-sep-primary/5 rounded-full border-solid mix-blend-multiply z-10"
            />
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-sep-primary/5 rounded-full blur-3xl mix-blend-multiply z-10"
            />

            {/* SVG Animations: Routes and Airplane */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 600 650" overflow="visible">
              <defs>
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#B22222" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#B22222" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#C94C4C" stopOpacity="0.1" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Decorative Travel Routes (Dashed) */}
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                d="M 100 250 C 250 150 350 150 450 300 C 550 450 400 550 200 500" 
                fill="transparent" 
                stroke="url(#routeGradient)" 
                strokeWidth="2" 
                strokeDasharray="6 8"
                className="opacity-60"
              />
              
              {/* Secondary faint route */}
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, delay: 1, ease: "easeInOut" }}
                d="M 500 200 Q 300 350 150 500" 
                fill="transparent" 
                stroke="#B22222" 
                strokeWidth="1.5" 
                strokeDasharray="4 6"
                className="opacity-30"
              />

              {/* Animated Airplane along path */}
              <path id="airplanePath" d="M 50 450 C 150 300 300 100 550 200 C 700 250 600 500 300 600 C 100 650 -50 500 50 450" fill="transparent" stroke="none" />
              <g filter="url(#glow)">
                {/* Airplane icon using standard SVG path (Lucide Plane) */}
                <svg x="-12" y="-12" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B22222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 5.5L6.5 16l-3.2-.8C2.9 15 2.5 15.3 2.5 15.7L2 17l4 2 2 4c.4.5.7.5 1.1.1l1.3-1.3c.4-.4.1-.8-.1-1.3L9.5 17.5 12 15l2.5 6 1.8.7c.4.2.8 0 .9-.5z"/>
                </svg>
                {/* Shadow dot */}
                <circle cx="0" cy="0" r="3" fill="#B22222" opacity="0.5" className="animate-pulse" />
                <animateMotion dur="25s" repeatCount="indefinite" rotate="auto" path="M 50 450 C 150 300 300 100 550 200 C 700 250 600 500 300 600 C 100 650 -50 500 50 450" />
              </g>
            </svg>
            </div>
            {/* Floating Cards (Hidden on very small screens, visible sm and up) */}
            <div className="hidden sm:block">
              {sampleCountries[0] && (
              <motion.div
                initial={{ opacity: 0, x: 50, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                className="absolute top-12 right-12 w-64 glass-premium p-4 z-30 shadow-[0_15px_35px_rgba(0,0,0,0.08)] animate-float-slow interactive-card neon-glow"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-sep-primary/10 flex items-center justify-center border border-sep-primary/20">
                    <MapPin className="w-5 h-5 text-sep-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sep-dark-text leading-tight">{sampleCountries[0].country}</h4>
                    <span className="text-[10px] font-bold text-sep-primary bg-sep-primary/10 px-2 py-0.5 rounded-full uppercase tracking-wider">{sampleCountries[0].status}</span>
                  </div>
                </div>
                <div className="text-xs text-sep-muted mt-3 border-t border-sep-light-gray pt-2 font-medium">
                  <p>{sampleCountries[0].fields[0]} • {sampleCountries[0].duration}</p>
                </div>
              </motion.div>
            )}

            {sampleCountries[1] && (
              <motion.div
                initial={{ opacity: 0, x: -50, y: 50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                className="absolute bottom-20 left-8 w-56 glass-premium p-4 z-30 shadow-[0_15px_35px_rgba(0,0,0,0.08)] animate-float interactive-card neon-glow"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center border border-orange-100">
                    <Star className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sep-dark-text leading-tight">{sampleCountries[1].country}</h4>
                    <p className="text-xs text-sep-muted font-medium">{sampleCountries[1].city}</p>
                  </div>
                </div>
                <div className="text-[10px] text-sep-muted mt-3 border-t border-sep-light-gray pt-2 font-bold uppercase tracking-wider">
                  <p className="truncate">{sampleCountries[1].fields.join(', ')}</p>
                </div>
              </motion.div>
            )}
            </div>

            {/* Passport/Boarding Pass Style Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              className="relative sm:absolute sm:top-[50%] lg:top-[45%] sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-[90vw] sm:w-[90%] max-w-[320px] bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.12)] border border-sep-light-gray/50 overflow-hidden z-40 animate-float-fast lg:hover:rotate-0 lg:hover:scale-105 interactive-card neon-glow"
            >
              {/* Card Header (Red Shemagh pattern) */}
              <div className="h-20 bg-sep-primary relative overflow-hidden flex items-center px-6 shadow-inner">
                <div className="absolute inset-0 opacity-60 mix-blend-overlay" style={{ backgroundImage: `url("${shemaghPattern}")` }} />
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4" />
                <Plane className="w-7 h-7 text-white mr-3 relative z-10" />
                <span className="text-white font-black tracking-widest uppercase text-sm relative z-10">SEP Boarding</span>
              </div>
              
              <div className="p-7 bg-white relative">
                {/* Faint background pattern inside card */}
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("${shemaghPattern}")` }} />
                
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <div className="text-center">
                    <p className="text-4xl font-black text-sep-dark-text tracking-tighter">AMM</p>
                    <p className="text-[10px] text-sep-muted font-bold uppercase tracking-widest mt-1">Amman, JO</p>
                  </div>
                  <div className="flex-1 flex flex-col items-center px-4 relative">
                    <div className="w-8 h-8 rounded-full bg-sep-primary/10 flex items-center justify-center relative z-10 mb-1 border border-sep-primary/20">
                      <Plane className="w-4 h-4 text-sep-primary" />
                    </div>
                    <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-sep-light-gray -z-0" />
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-black text-sep-primary tracking-tighter">WLD</p>
                    <p className="text-[10px] text-sep-muted font-bold uppercase tracking-widest mt-1">Worldwide</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 relative z-10">
                  <div className="bg-sep-warm-white rounded-xl p-3 border border-sep-light-gray/50">
                    <p className="text-[9px] text-sep-muted uppercase font-black tracking-widest mb-1">Passenger</p>
                    <p className="text-sm font-bold text-sep-dark-text">JPSA Member</p>
                  </div>
                  <div className="bg-sep-warm-white rounded-xl p-3 border border-sep-light-gray/50">
                    <p className="text-[9px] text-sep-muted uppercase font-black tracking-widest mb-1">Field</p>
                    <p className="text-sm font-bold text-sep-dark-text flex items-center gap-1.5">
                      <Pill className="w-3.5 h-3.5 text-sep-primary" /> Pharmacy
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Tear-off bottom */}
              <div className="border-t-2 border-dashed border-sep-light-gray bg-sep-off-white p-5 flex justify-between items-center relative overflow-hidden">
                <div className="absolute left-0 -top-2 w-4 h-4 rounded-full bg-sep-warm-white border border-sep-light-gray shadow-inner" />
                <div className="absolute right-0 -top-2 w-4 h-4 rounded-full bg-sep-warm-white border border-sep-light-gray shadow-inner" />
                
                <div className="flex gap-1.5">
                  {[...Array(14)].map((_, i) => (
                    <div key={i} className={`h-8 rounded-sm ${i % 3 === 0 ? 'w-2 bg-sep-dark-text' : i % 2 === 0 ? 'w-1 bg-sep-dark-text/80' : 'w-1.5 bg-sep-dark-text/60'}`} />
                  ))}
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-sep-muted uppercase tracking-widest block mb-0.5">Valid</span>
                  <span className="text-sm font-black text-sep-primary uppercase">2026</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
