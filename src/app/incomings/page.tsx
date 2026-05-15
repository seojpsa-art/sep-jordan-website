"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Instagram, MapPin, Pill, Globe, HeartHandshake, FileText, CheckCircle2, AlertTriangle, Plane, Camera, Users, Sparkles, BookOpen, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IncomingsPage() {
  const shemaghPattern = "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%23B22222' fill-opacity='0.03' fill-rule='evenodd'/%3E";

  const fields = [
    { title: "Community Pharmacy", icon: <Pill className="w-6 h-6 text-sep-primary" /> },
    { title: "Hospital Pharmacy", icon: <Pill className="w-6 h-6 text-sep-primary" /> },
    { title: "Industrial Pharmacy", icon: <Pill className="w-6 h-6 text-sep-primary" /> },
    { title: "Clinical Pharmacy", icon: <Pill className="w-6 h-6 text-sep-primary" /> },
    { title: "Research", icon: <BookOpen className="w-6 h-6 text-sep-primary" /> },
  ];

  return (
    <main className="min-h-screen bg-sep-warm-white overflow-hidden pt-20">
      <Navbar />

      {/* A) Hero Section */}
      <section className="relative pt-24 pb-28 overflow-hidden">
        {/* Subtle Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-sep-primary/5 to-transparent z-0" />
        <div className="absolute inset-0 opacity-40 mix-blend-multiply" style={{ backgroundImage: `url("${shemaghPattern}")` }} />
        
        {/* Decorative Blur Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sep-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sep-primary/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-sep-primary/10 text-sep-primary font-bold text-xs tracking-widest uppercase mb-8 border border-sep-primary/20 shadow-sm">
              <Sparkles className="w-4 h-4" /> Discover Jordan
            </span>
            
            <h1 className="text-5xl md:text-7xl font-black text-sep-dark-text tracking-tight mb-6 leading-tight">
              Welcome to <span className="text-gradient relative inline-block">SEP Jordan
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-sep-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-sep-muted leading-relaxed mb-6 font-medium">
              Experience pharmacy training, Jordanian hospitality, cultural exchange, and unforgettable memories with JPSA.
            </p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base text-sep-muted/80 leading-relaxed max-w-3xl mx-auto mb-10 italic"
            >
              "Every incoming student becomes part of a journey that blends professional growth, cultural discovery, and lifelong friendships. From training sites to Jordan's landmarks, SEP Jordan is designed to make students feel supported, welcomed, and inspired."
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 relative z-20">
              <Link 
                href="#explore"
                className="group flex items-center justify-center gap-2 bg-sep-primary hover:bg-sep-deep-red text-white font-bold px-8 py-4 rounded-xl shadow-[0_8px_25px_rgba(178,34,34,0.25)] neon-glow hover-shine w-full sm:w-auto"
              >
                Explore the Experience
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="mailto:seo.jpsa@gmail.com"
                className="group flex items-center justify-center gap-2 bg-white hover:bg-sep-warm-white border border-sep-light-gray text-sep-dark-text font-bold px-8 py-4 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] filter-glow w-full sm:w-auto"
              >
                <Mail className="w-5 h-5 text-sep-primary group-hover:scale-110 transition-transform" />
                Contact SEP Jordan
              </a>
            </div>

            {/* Stat Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/90 backdrop-blur-2xl border border-white/80 px-8 py-5 rounded-[2rem] shadow-[0_20px_50px_rgba(178,34,34,0.15)] hover:-translate-y-2 transition-all duration-500 cursor-default interactive-card relative overflow-hidden group neon-glow hover-shine"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sep-primary/0 via-sep-primary/5 to-sep-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="text-5xl md:text-7xl font-black text-sep-primary drop-shadow-md tracking-tighter group-hover:scale-105 transition-transform duration-500">+30</div>
              <div className="w-full h-px sm:w-px sm:h-14 bg-gradient-to-b from-transparent via-sep-light-gray to-transparent" />
              <div className="text-center sm:text-left">
                <div className="text-sm md:text-base font-black text-sep-dark-text uppercase tracking-widest leading-none mb-2">Incoming Students</div>
                <div className="text-xs md:text-sm font-bold text-sep-muted uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1">
                  Hosted in Jordan <MapPin className="w-3.5 h-3.5 text-sep-primary inline animate-bounce" />
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-24 relative bg-sep-warm-white border-t border-sep-light-gray overflow-hidden">
        <div className="glass-ribbon top-0 left-0" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("${shemaghPattern}")` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-sep-primary/10 text-sep-primary font-bold text-xs tracking-widest uppercase mb-6 border border-sep-primary/20 shadow-sm">
              <Camera className="w-4 h-4" /> Real Experiences
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-sep-dark-text tracking-tight">
              Incoming <span className="text-gradient">Moments</span>
            </h2>
            <p className="text-lg md:text-xl text-sep-muted leading-relaxed font-medium">
              Watch highlights from SEP Jordan experiences, cultural trips, training moments, and student memories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
            {[
              { src: "/videos/incoming1.MOV" },
              { src: "/videos/incoming2.MOV" },
              { src: "/videos/incoming3.MOV" },
              { src: "/videos/incoming4.MOV" }
            ].map((video, i) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                key={i}
                className="glass-premium rounded-[32px] overflow-hidden border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_80px_rgba(178,34,34,0.3)] hover:-translate-y-2 transition-all duration-500 relative group bg-white interactive-card neon-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="aspect-[9/16] bg-sep-off-white relative w-full">
                  <video 
                    controls 
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Summer SEP Incoming Opportunities */}
      <section className="py-24 relative bg-white overflow-hidden border-b border-sep-light-gray">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("${shemaghPattern}")` }} />
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sep-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sep-primary/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-sep-primary/10 text-sep-primary font-bold text-xs tracking-widest uppercase mb-6 border border-sep-primary/20 shadow-sm">
              <Calendar className="w-4 h-4" /> Available for this summer
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-sep-dark-text">
              Summer SEP <span className="text-gradient">Incoming Opportunities</span>
            </h2>
            <p className="text-lg text-sep-muted leading-relaxed">
              Join SEP Jordan this July–August and experience professional pharmacy training, cultural exchange, and unforgettable memories with JPSA.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
            {[
              { field: "Community Pharmacy", seats: 12, icon: <Pill className="w-8 h-8" /> },
              { field: "Hospital Pharmacy", seats: 5, icon: <HeartHandshake className="w-8 h-8" /> },
              { field: "Industrial Pharmacy", seats: 3, icon: <Globe className="w-8 h-8" /> }
            ].map((opportunity, i) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="glass-premium bg-white rounded-[32px] p-8 border border-sep-light-gray shadow-md hover:shadow-[0_20px_50px_rgba(178,34,34,0.15)] transition-all duration-500 neon-glow relative group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-sep-primary/10 text-sep-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-sep-primary group-hover:text-white transition-all duration-500 border border-sep-primary/20">
                  {opportunity.icon}
                </div>
                
                <h3 className="font-bold text-2xl text-sep-dark-text mb-2">
                  {opportunity.field}
                </h3>
                
                <div className="my-6 relative w-full flex justify-center">
                  <div className="absolute inset-0 bg-sep-primary/5 rounded-2xl -m-4 group-hover:bg-sep-primary/10 transition-colors duration-300" />
                  <div className="relative">
                    <span className="text-7xl font-black text-sep-primary drop-shadow-sm leading-none block">
                      {opportunity.seats}
                    </span>
                    <span className="text-xs uppercase font-bold tracking-widest text-sep-muted mt-2 block">
                      Seats Available
                    </span>
                  </div>
                </div>

                <div className="w-full space-y-3 mt-auto">
                  <div className="flex items-center justify-center gap-2 text-sm font-medium text-sep-dark-text bg-sep-warm-white py-2 px-4 rounded-xl border border-sep-light-gray">
                    <Clock className="w-4 h-4 text-sep-primary shrink-0" /> Training duration: 2–3 weeks
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm font-medium text-sep-dark-text bg-sep-warm-white py-2 px-4 rounded-xl border border-sep-light-gray">
                    <Calendar className="w-4 h-4 text-sep-primary shrink-0" /> Period: July–August
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto flex items-start justify-center gap-3 bg-sep-warm-white border border-sep-light-gray p-4 rounded-xl"
          >
            <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
            <p className="text-xs md:text-sm text-sep-muted font-medium leading-relaxed text-center sm:text-left">
              Final availability may depend on SEP coordination, host site capacity, and the official exchange process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* B) About Incoming SEP in Jordan */}
      <section id="explore" className="py-24 relative bg-white">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("${shemaghPattern}")` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-sep-dark-text">
              The <span className="text-gradient">Jordanian</span> Experience
            </h2>
            <p className="text-lg text-sep-muted">
              Incoming SEP students can experience professional pharmacy training in Jordan while discovering the culture, people, and landmarks of our beautiful country.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Professional Training", icon: <Pill />, desc: "Top-tier training in various pharmacy fields." },
              { title: "Cultural Exchange", icon: <Globe />, desc: "Immerse yourself in authentic Arab and Jordanian culture." },
              { title: "Explore Jordan", icon: <MapPin />, desc: "Visit Petra, Dead Sea, Wadi Rum, and vibrant Amman." },
              { title: "JPSA Support", icon: <HeartHandshake />, desc: "Our dedicated team will guide you every step of the way." }
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                key={i}
                className="glass-premium p-8 text-center interactive-card group hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-sep-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-sep-primary/10 transition-colors duration-500" />
                <div className="w-16 h-16 mx-auto rounded-2xl bg-sep-warm-white flex items-center justify-center mb-6 border border-sep-light-gray group-hover:border-sep-primary/30 group-hover:scale-110 transition-all duration-300 text-sep-primary">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-sep-dark-text">{item.title}</h3>
                <p className="text-sep-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* C) Training Fields in Jordan */}
      <section className="py-20 bg-sep-warm-white border-y border-sep-light-gray relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sep-dark-text">Available <span className="text-gradient">Training Fields</span></h2>
            <p className="text-sep-muted max-w-2xl mx-auto">Explore various professional environments across Jordan.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {fields.map((field, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="flex items-center gap-3 bg-white border border-sep-light-gray px-6 py-4 rounded-xl shadow-sm hover:border-sep-primary/30 hover:shadow-md transition-all group"
              >
                <div className="group-hover:scale-110 transition-transform">
                  {field.icon}
                </div>
                <span className="font-bold text-sep-dark-text">{field.title}</span>
              </motion.div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto glass-premium border border-orange-200 p-6 rounded-2xl flex items-start gap-4 shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0 border border-orange-200">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h4 className="font-bold text-sep-dark-text mb-1">Important Note</h4>
              <p className="text-sm text-sep-muted leading-relaxed">
                Training field availability may vary depending on the SEP season, host sites, and coordination with the SEP team. We try our best to accommodate your preferences!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* D) Jordan Pass & E) Visa Requirements */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            
            {/* Jordan Pass */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-premium p-8 md:p-10 flex flex-col h-full border-t-4 border-t-sep-primary relative overflow-hidden interactive-card"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sep-primary/5 rounded-bl-full -z-10" />
              <div className="w-14 h-14 rounded-2xl bg-sep-primary/10 flex items-center justify-center mb-6 border border-sep-primary/20">
                <MapPin className="w-7 h-7 text-sep-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-sep-dark-text">Jordan Pass</h3>
              <p className="text-sep-muted mb-8 leading-relaxed">
                The Jordan Pass is a comprehensive tourism package giving visitors access to many of Jordan's main tourist attractions while potentially waving visa fees.
              </p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Access to major tourist attractions such as Petra, Jerash, Wadi Rum, and more.",
                  "Tourist visa fee waiver may apply when purchased before arrival and when staying the required minimum nights.",
                  "Students should check the official Jordan Pass website before traveling."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 text-sep-dark-text items-start">
                    <div className="mt-1 bg-sep-primary/10 rounded-full p-1 border border-sep-primary/20 shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-sep-primary" />
                    </div>
                    <span className="text-sm font-medium leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-sep-warm-white border border-sep-light-gray p-5 rounded-xl mb-8 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <p className="text-xs text-sep-muted font-medium leading-relaxed">
                  <strong className="text-sep-dark-text block mb-1">Important Disclaimer</strong> 
                  Jordan Pass is not a visa by itself. Requirements may vary by nationality and travel conditions.
                </p>
              </div>
              
              <a 
                href="https://www.jordanpass.jo/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-sep-dark-text hover:bg-black text-white font-bold px-6 py-4 rounded-xl transition-all shadow-md mt-auto justify-center"
              >
                Check Official Website
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Visa Requirements */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-premium p-8 md:p-10 flex flex-col h-full border-t-4 border-t-sep-dark-text relative overflow-hidden interactive-card"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sep-light-gray/50 rounded-bl-full -z-10" />
              <div className="w-14 h-14 rounded-2xl bg-sep-warm-white flex items-center justify-center mb-6 border border-sep-light-gray">
                <FileText className="w-7 h-7 text-sep-dark-text" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-sep-dark-text">Visa Requirements</h3>
              <p className="text-sep-muted mb-8 leading-relaxed">
                Visa requirements for Jordan depend on nationality, passport type, length of stay, and current regulations. Always check official resources.
              </p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Check if your nationality requires a visa before arrival.",
                  "Make sure your passport is valid for the required period.",
                  "Prepare travel details, accommodation information, and invitation/support documents if needed.",
                  "Confirm whether you can use Jordan Pass, e-visa, or visa on arrival.",
                  "Contact the SEP Jordan team if you are unsure."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 text-sep-dark-text items-start">
                    <div className="mt-1 bg-sep-light-gray rounded-full p-1 border border-sep-light-gray/80 shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-sep-dark-text" />
                    </div>
                    <span className="text-sm font-medium leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-sep-warm-white border border-sep-light-gray p-5 rounded-xl mb-8 flex gap-3">
                <Globe className="w-5 h-5 text-sep-primary shrink-0 mt-0.5" />
                <p className="text-xs text-sep-muted font-medium leading-relaxed">
                  <strong className="text-sep-dark-text block mb-1">Verify Before Travel</strong> 
                  Incoming students must confirm with the SEP team and the Ministry portal prior to their flight.
                </p>
              </div>

              <a 
                href="https://moi.gov.jo/EN/Pages/Visa_E_Applications"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white border-2 border-sep-light-gray hover:border-sep-dark-text text-sep-dark-text font-bold px-6 py-3.5 rounded-xl transition-all shadow-sm mt-auto justify-center"
              >
                Jordan eVisa / Ministry Portal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* F) Practical Information */}
      <section className="py-20 bg-sep-warm-white border-y border-sep-light-gray relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sep-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sep-dark-text">Practical Information</h2>
            <p className="text-sep-muted">Quick facts to know before you land.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: <Plane />, label: "Arrival Airport", value: "Queen Alia Int. (AMM)" },
              { icon: <Globe />, label: "Local Currency", value: "Jordanian Dinar (JOD)" },
              { icon: <MapPin />, label: "Main City", value: "Amman" },
              { icon: <Users />, label: "Communication", value: "SEP Team Guided" },
              { icon: <AlertTriangle />, label: "Emergency", value: "SEP Support Available" }
            ].map((info, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-white p-6 rounded-2xl shadow-sm border border-sep-light-gray text-center flex flex-col items-center justify-center gap-4 hover:shadow-md hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-sep-primary/5 text-sep-primary flex items-center justify-center group-hover:bg-sep-primary group-hover:text-white transition-colors duration-300">
                  {info.icon}
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-sep-muted tracking-widest mb-1.5">{info.label}</div>
                  <div className="text-sm font-black text-sep-dark-text leading-tight">{info.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      {/* H) Premium Contact CTA */}
      <section className="py-24 relative overflow-hidden bg-transparent">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto glass-premium bg-white border border-sep-primary/10 p-8 md:p-14 lg:p-16 rounded-[40px] shadow-[0_20px_60px_rgba(178,34,34,0.06)] relative overflow-hidden"
          >
            {/* Subtle Shemagh Background & Glows inside card */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("${shemaghPattern}")` }} />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sep-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sep-primary/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
              
              {/* Left Side: Text Content */}
              <div>
                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-sep-primary/10 text-sep-primary font-bold text-xs tracking-widest uppercase mb-6 border border-sep-primary/20">
                  Get in Touch
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-sep-dark-text mb-6 tracking-tight leading-[1.1]">
                  Ready to connect with <span className="text-gradient">SEP Jordan?</span>
                </h2>
                <p className="text-sep-muted text-lg leading-relaxed mb-8">
                  Whether you have questions about outgoing applications, incoming opportunities, or the SEP experience in Jordan, our team is here to help.
                </p>
                <div className="w-16 h-1.5 bg-sep-primary/20 rounded-full" />
              </div>

              {/* Right Side: Contact Cards */}
              <div className="space-y-4">
                
                <motion.a
                  href="mailto:seo.jpsa@gmail.com"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group block bg-white border border-sep-light-gray hover:border-sep-primary/40 p-6 rounded-2xl shadow-sm hover:shadow-[0_10px_30px_rgba(178,34,34,0.1)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden interactive-card neon-glow"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sep-primary/0 to-sep-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-5 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-sep-primary/10 flex items-center justify-center shrink-0 border border-sep-primary/20 group-hover:bg-sep-primary transition-colors duration-300">
                      <Mail className="w-6 h-6 text-sep-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-sep-muted mb-1">Email Support</p>
                      <p className="text-lg font-black text-sep-dark-text">seo.jpsa@gmail.com</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-sm font-bold text-sep-primary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                      Send Email <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.a>

                {/* Instagram Card */}
                <motion.a
                  href="https://www.instagram.com/sep.jordan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group block bg-white border border-sep-light-gray hover:border-sep-primary/40 p-6 rounded-2xl shadow-sm hover:shadow-[0_10px_30px_rgba(178,34,34,0.1)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden interactive-card neon-glow"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sep-primary/0 to-sep-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-5 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-sep-primary/10 flex items-center justify-center shrink-0 border border-sep-primary/20 group-hover:bg-sep-primary transition-colors duration-300">
                      <Instagram className="w-6 h-6 text-sep-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-sep-muted mb-1">Official Instagram</p>
                      <p className="text-lg font-black text-sep-dark-text">@sep.jordan</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-sm font-bold text-sep-primary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                      Follow Us <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.a>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
