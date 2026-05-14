"use client";

import { motion } from "framer-motion";
import { Stethoscope, Globe2, Users, Rocket, Target } from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Professional Training",
    description: "Gain hands-on experience in community, hospital, clinical, or industrial pharmacy settings abroad."
  },
  {
    icon: Globe2,
    title: "Cultural Exchange",
    description: "Immerse yourself in a new culture, discover local traditions, and share Jordanian culture with the world."
  },
  {
    icon: Users,
    title: "Global Network",
    description: "Connect with pharmacy students and professionals globally, building friendships and future collaborations."
  },
  {
    icon: Rocket,
    title: "Personal Growth",
    description: "Step out of your comfort zone, develop independence, and boost your confidence through international travel."
  }
];

export default function AboutSEP() {
  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Visual / Typography */}
          <div className="w-full lg:w-5/12 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-sep-primary" />
                <span className="text-sm font-bold tracking-widest uppercase text-sep-primary">Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-sep-dark-text leading-tight">
                What is <br />
                <span className="text-gradient">SEP?</span>
              </h2>
              <p className="text-lg text-sep-muted leading-relaxed mb-8">
                The Student Exchange Program (SEP) is IPSF's largest project. It gives pharmacy students the opportunity to experience pharmacy practice in another country, combining professional training, cultural exchange, and global networking.
              </p>
              
              <div className="flex gap-4">
                <div className="w-16 h-2 bg-sep-primary rounded-full" />
                <div className="w-8 h-2 bg-sep-primary/30 rounded-full" />
                <div className="w-4 h-2 bg-sep-primary/10 rounded-full" />
              </div>
            </motion.div>

            {/* Patterned Side Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -top-10 -left-10 w-full h-[120%] bg-sep-primary/5 rounded-3xl -z-10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'16\\' height=\\'16\\' viewBox=\\'0 0 16 16\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 0h4v4H0V0zm4 4h4v4H4V4zm4-4h4v4H8V0zm4 4h4v4h-4V4zM0 8h4v4H0V8zm4 4h4v4H4v-4zm4-4h4v4H8V8zm4 4h4v4h-4v-4zM4 0L0 4v4l4-4V0zm4 4L4 8v4l4-4V4zm4-4L8 4v4l4-4V0zm4 4l-4 4v4l4-4V4z\\' fill=\\'%23B22222\\' fill-opacity=\\'0.05\\' fill-rule=\\'evenodd\\'%3E')] mix-blend-multiply" />
            </motion.div>
          </div>

          {/* Right Side: Icon Cards Grid */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="glass-premium p-8 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sep-primary/5 rounded-full blur-2xl group-hover:bg-sep-primary/10 transition-colors" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-sep-light-gray flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-sep-primary/30 transition-all duration-300 relative z-10">
                    <feature.icon className="w-7 h-7 text-sep-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-sep-dark-text relative z-10">{feature.title}</h3>
                  <p className="text-sep-muted text-sm leading-relaxed relative z-10">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
