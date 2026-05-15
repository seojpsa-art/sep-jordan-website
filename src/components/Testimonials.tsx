"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Quote, Star, MapPin, Pill, CalendarHeart } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="experiences" className="py-24 relative z-10 bg-sep-warm-white">
      {/* Background Shemagh Pattern - subtle */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z\\' fill=\\'%23B22222\\' fill-opacity=\\'0.02\\' fill-rule=\\'evenodd\\'/%3E')] opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-sep-dark-text"
          >
            Stories From <span className="text-gradient">Our Outgoings</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-sep-muted"
          >
            Hear about the life-changing experiences of JPSA students who traveled the world through SEP.
          </motion.p>
        </div>

        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={index}
              className="glass-premium p-8 w-full flex flex-col relative group hover:-translate-y-2 transition-transform duration-300 interactive-card neon-glow"
            >
              <div className="absolute top-0 right-8 w-16 h-16 bg-sep-primary/5 rounded-b-3xl -z-10 group-hover:bg-sep-primary/10 transition-colors" />
              <Quote className="absolute top-8 right-10 w-10 h-10 text-sep-primary/20 group-hover:text-sep-primary/40 transition-colors duration-300" />
              
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>

              <p className="text-sep-dark-text text-lg leading-relaxed mb-8 italic flex-1 font-medium relative">
                <span className="text-2xl text-sep-primary font-serif leading-none mr-1">"</span>
                {testimonial.quote}
                <span className="text-2xl text-sep-primary font-serif leading-none ml-1">"</span>
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-sep-primary bg-sep-primary/10 px-2 py-1 rounded-md">
                  <MapPin className="w-3 h-3" /> {testimonial.country}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-sep-dark-text bg-sep-light-gray px-2 py-1 rounded-md">
                  <Pill className="w-3 h-3" /> {testimonial.field}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-sep-muted bg-white border border-sep-light-gray px-2 py-1 rounded-md">
                  <CalendarHeart className="w-3 h-3" /> {testimonial.year}
                </span>
              </div>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-sep-light-gray/50">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-sep-warm-white flex items-center justify-center overflow-hidden border-2 border-white shadow-md z-10 relative">
                    {/* Placeholder for Photo */}
                    <div className="w-full h-full bg-gradient-to-br from-sep-primary/80 to-sep-soft-red/80 flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  {/* Decorative circle behind */}
                  <div className="absolute -inset-1 bg-sep-primary/20 rounded-full blur-sm -z-0" />
                </div>
                <div>
                  <h4 className="font-bold text-sep-dark-text text-lg">{testimonial.name}</h4>
                  <p className="text-xs text-sep-muted font-medium uppercase tracking-wider">JPSA Outgoing Student</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
