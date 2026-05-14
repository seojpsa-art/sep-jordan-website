"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Incomings", href: "/incomings" },
  { name: "About SEP", href: "/#about" },
  { name: "Countries", href: "/#countries" },
  { name: "Experiences", href: "/#experiences" },
  { name: "Timeline", href: "/#timeline" },
  { name: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-sep-light-gray shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image src="/seplogo.png" alt="SEP Jordan Logo" fill sizes="(max-width: 640px) 40px, 64px" className="object-contain" priority />
            </div>
            <span className="font-black text-xl tracking-tight text-sep-dark-text uppercase hidden sm:block">
              SEP <span className="text-sep-primary font-bold">Jordan</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-bold text-sep-muted hover:text-sep-primary transition-colors py-2 uppercase tracking-wide"
                onMouseEnter={() => setActiveHover(link.name)}
                onMouseLeave={() => setActiveHover(null)}
              >
                {link.name}
                {activeHover === link.name && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-sep-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Link>
            ))}
            <Link
              href="#apply"
              className="bg-sep-primary hover:bg-sep-deep-red text-white font-bold px-6 py-2.5 rounded-xl transition-all duration-300 shadow-[0_4px_15px_rgba(178,34,34,0.2)] hover:shadow-[0_8px_25px_rgba(178,34,34,0.3)] hover:-translate-y-0.5"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Button and CTA */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/#apply"
              className="bg-sep-primary hover:bg-sep-deep-red text-white font-bold px-4 py-2 rounded-full text-xs shadow-[0_4px_12px_rgba(178,34,34,0.3)] transition-colors whitespace-nowrap"
            >
              Apply
            </Link>
            <button
              className="text-sep-dark-text p-2 hover:bg-sep-warm-white rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-sep-light-gray absolute w-full top-full left-0 shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <Link href="/" className="text-lg font-bold text-sep-muted hover:text-sep-primary py-2 transition-colors uppercase tracking-wide" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/incomings" className="text-lg font-bold text-sep-muted hover:text-sep-primary py-2 transition-colors uppercase tracking-wide" onClick={() => setMobileMenuOpen(false)}>Incomings</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
