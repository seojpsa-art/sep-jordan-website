"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can apply for SEP?",
    answer: "SEP applications are open only for JPSA members."
  },
  {
    question: "What fields are available?",
    answer: "Available fields depend on the host country and include Community Pharmacy, Hospital Pharmacy, Clinical Pharmacy, Industrial Pharmacy, and Research."
  },
  {
    question: "How long is the exchange?",
    answer: "The duration of the exchange varies by country and field, typically ranging from 2 weeks to 3 months, with the majority lasting 2 to 4 weeks."
  },
  {
    question: "Are countries guaranteed?",
    answer: "No, spots are limited and highly competitive. Your placement depends on your application, interview, and the availability of the host country. We recommend selecting a second preference."
  },
  {
    question: "What happens after applying?",
    answer: "After submitting your application, our team will review it. If you meet the criteria, you will be invited for an interview. Successful candidates will then be matched with a host country."
  },
  {
    question: "Who should I contact for more information?",
    answer: (
      <>
        You can reach out to the JPSA Student Exchange Officer (SEO) or the SEP team via our official social media channels or email.<br /><br />
        Email: <a href="mailto:seo.jpsa@gmail.com" className="text-sep-primary font-bold hover:underline">seo.jpsa@gmail.com</a><br />
        Instagram: <a href="https://www.instagram.com/sep.jordan/" target="_blank" rel="noopener noreferrer" className="text-sep-primary font-bold hover:underline">@sep.jordan</a>
      </>
    )
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative z-10 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-sep-dark-text"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="glass border border-sep-light-gray rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-lg text-sep-dark-text">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-sep-primary transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-sep-muted border-t border-sep-light-gray/50 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
