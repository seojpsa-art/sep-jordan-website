"use client";

import { motion } from "framer-motion";

export default function HeroShemaghCloth() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* The main cloth wrapper with positioning and floating animation */}
      <motion.div
        animate={{ 
          y: [0, -12, 0, 10, 0],
          x: [0, 8, 0, -6, 0],
          rotate: [-8, -6, -9, -7, -8],
          scale: [1, 1.02, 1, 1.01, 1]
        }}
        transition={{ 
          duration: 16, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute right-[-20%] md:right-[-5%] top-[5%] md:top-[12%] w-[140vw] md:w-[60vw] h-[80vh] md:h-[70vh] max-w-[900px] opacity-[0.22] md:opacity-[0.35] blur-[0.5px]"
        style={{
          // Creates a natural draped fabric edge
          borderRadius: "45% 55% 50% 40%",
          // Fades the edges of the cloth softly into the background
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)"
        }}
      >
        <div className="relative w-full h-full overflow-hidden rounded-[inherit]">
          {/* Base Off-White Cloth Color */}
          <div className="absolute inset-0 bg-sep-off-white" />

          {/* Cloth Pattern Layer 1: Diagonal Lines */}
          <motion.div
            animate={{ backgroundPosition: ['0px 0px', '100px 100px'] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute inset-0 opacity-[0.6] mix-blend-multiply"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 8px, #B22222 8px, #B22222 10px)`
            }}
          />

          {/* Cloth Pattern Layer 2: Opposite Diagonal Lines */}
          <motion.div
            animate={{ backgroundPosition: ['0px 0px', '-80px 80px'] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute inset-0 opacity-[0.6] mix-blend-multiply"
            style={{
              backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 8px, #B22222 8px, #B22222 10px)`
            }}
          />

          {/* Cloth Pattern Layer 3: Small Checkered Grid */}
          <motion.div
            animate={{ backgroundPosition: ['0px 0px', '40px -40px'] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="absolute inset-0 opacity-[0.3] mix-blend-multiply"
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 4px, #8E1B1B 4px, #8E1B1B 6px), repeating-linear-gradient(0deg, transparent, transparent 4px, #8E1B1B 4px, #8E1B1B 6px)`
            }}
          />

          {/* Fabric Depth: Shadows and Folds */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-black/10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_transparent_0%,_rgba(0,0,0,0.05)_50%,_transparent_100%)] mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent mix-blend-screen" />
          
          {/* Subtle Moving Shine for Fabric Highlights */}
          <motion.div
            animate={{ opacity: [0.1, 0.3, 0.1], x: ['-20%', '20%', '-20%'] }}
            transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
          />
        </div>
      </motion.div>
    </div>
  );
}
