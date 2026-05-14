"use client";

import { motion } from "framer-motion";
import { Search, ListChecks, Send, Users, CheckCircle, Plane } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Explore",
    description: "Browse available countries and discover the different pharmacy fields offered."
  },
  {
    icon: ListChecks,
    title: "2. Choose",
    description: "Select your preferred destinations and the pharmacy fields you are most interested in."
  },
  {
    icon: Send,
    title: "3. Apply",
    description: "Fill out the online application form with your details and motivation."
  },
  {
    icon: Users,
    title: "4. Interview",
    description: "Attend a brief interview with the SEP team to discuss your application."
  },
  {
    icon: CheckCircle,
    title: "5. Confirm",
    description: "Get matched with a host country and complete the necessary preparation steps."
  },
  {
    icon: Plane,
    title: "6. Travel",
    description: "Pack your bags and embark on your life-changing SEP journey!"
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 relative z-10 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-sep-dark-text"
          >
            Application <span className="text-gradient">Journey</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-sep-muted"
          >
            Follow these steps to secure your spot in the Student Exchange Program.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Connecting Animated Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-1 bg-sep-light-gray -translate-y-1/2 z-0 rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "100%" }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="h-full bg-sep-primary"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                key={step.title}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-sep-warm-white flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.06)] group-hover:shadow-[0_12px_40px_rgba(178,34,34,0.15)] group-hover:border-sep-primary/20 z-10 relative">
                    <step.icon className="w-8 h-8 text-sep-primary" />
                    
                    {/* Number Badge */}
                    <div className="absolute -top-1 -right-1 w-8 h-8 bg-sep-dark-text text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md group-hover:bg-sep-primary transition-colors">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Vertical connecting line for mobile */}
                  {index !== steps.length - 1 && (
                    <div className="lg:hidden absolute top-24 left-1/2 w-0.5 h-16 bg-sep-light-gray -translate-x-1/2 -z-10" />
                  )}
                </div>

                <h3 className="text-xl font-bold text-sep-dark-text mb-3">{step.title.split('. ')[1]}</h3>
                <p className="text-sm text-sep-muted leading-relaxed max-w-[200px] mx-auto">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
