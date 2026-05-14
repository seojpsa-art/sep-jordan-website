"use client";

import { motion } from "framer-motion";

export default function WavingShemaghCloth() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* 
        This is ONE distinct waving cloth element, NOT a full background. 
        It sits explicitly on the right side of the screen.
      */}
      <motion.div
        animate={{ 
          y: [0, -15, 0, 15, 0],
          x: [0, 10, 0, -10, 0],
          rotate: [-12, -8, -14, -10, -12],
          scale: [1, 1.03, 0.98, 1.02, 1]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute right-[-10%] md:right-[2%] top-[15%] md:top-[10%] w-[80vw] md:w-[55vw] h-[60vh] md:h-[70vh] max-w-[850px] opacity-[0.35] md:opacity-[0.45] blur-[0.2px] shadow-2xl"
        style={{
          // Distinct wavy organic shape to look like a draped piece of fabric
          borderRadius: "45% 55% 50% 40% / 50% 45% 60% 55%",
          // Fades the edges of the cloth so it doesn't have hard straight CSS edges
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)"
        }}
      >
        <div className="relative w-full h-full overflow-hidden rounded-[inherit]">
          {/* 
            Inside the cloth shape ONLY:
            Base Off-White Cloth Color 
          */}
          <div className="absolute inset-0 bg-sep-off-white" />

          {/* Cloth Pattern Layer: Real Shemagh Pattern */}
          <motion.div
            animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute inset-0 opacity-[0.85] mix-blend-multiply"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%23B22222' fill-opacity='1' fill-rule='evenodd'/%3E")`,
              backgroundSize: '60px 60px'
            }}
          />

          {/* 
            Fabric Depth: 
            Shadows and Highlights applied directly to the cloth shape 
          */}
          {/* Deep fold shadows */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/20 mix-blend-multiply" />
          
          {/* Soft inner radial fold */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_transparent_0%,_rgba(0,0,0,0.15)_60%,_transparent_100%)] mix-blend-multiply" />
          
          {/* Top highlight to catch light */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent mix-blend-screen" />
          
          {/* Subtle Moving Shine for Fabric Highlights mimicking light changing as fabric waves */}
          <motion.div
            animate={{ opacity: [0.1, 0.4, 0.1], x: ['-30%', '30%', '-30%'] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
          />
        </div>
      </motion.div>
    </div>
  );
}
