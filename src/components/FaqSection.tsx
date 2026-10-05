"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity and scope. A standard web platform might take 8-12 weeks, while complex enterprise solutions can take 4-6 months. We provide a detailed timeline during the initial consultation.",
  },
  {
    id: 2,
    question: "What maintenance is required after launch?",
    answer: "We offer comprehensive maintenance packages including security updates, performance monitoring, server hosting, and regular backups to ensure your platform runs smoothly at all times.",
  },
  {
    id: 3,
    question: "Are your solutions compliant with enterprise security standards?",
    answer: "Yes. Security is built into our architecture from day one. We adhere to industry best practices and can ensure compliance with specific standards like SOC2, GDPR, or HIPAA depending on your requirements.",
  },
  {
    id: 4,
    question: "Can you integrate with existing legacy systems?",
    answer: "Absolutely. We specialize in building modern interfaces and APIs that seamlessly connect with your existing legacy systems, preventing the need for a full rip-and-replace of your infrastructure.",
  },
  {
    id: 5,
    question: "What tech stack do you specialize in?",
    answer: "We focus on modern, highly scalable technologies. Our primary stack includes Next.js, React, Node.js, and cloud architecture across AWS and Google Cloud, ensuring high performance and reliability.",
  },
  {
    id: 6,
    question: "Do you offer emergency support services?",
    answer: "Yes, we provide 24/7 SLA-based emergency support for critical enterprise applications to ensure maximum uptime and immediate resolution of any critical issues.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 px-6 md:px-16 bg-white text-[#171717]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-black tracking-tight uppercase leading-[1] text-black">
            FREQUENTLY <br /> ASKED QUESTIONS
          </h2>
          <p className="text-gray-500 text-xs md:text-sm max-w-2xl mx-auto mt-6">
            Find answers to common questions about our software solutions, development process, and enterprise services.
          </p>
        </div>

        {/* FAQs List */}
        <div className="w-full flex flex-col border-t border-gray-200">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="border-b border-gray-200"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className={`w-full flex items-center justify-between py-6 px-4 md:px-6 transition-colors duration-300 ${
                  openId === faq.id ? "bg-gray-50" : "hover:bg-gray-50"
                }`}
              >
                <span className="text-sm md:text-base font-bold text-black text-left">
                  {faq.question}
                </span>
                
                {/* Plus/Minus Icon */}
                <motion.div
                  animate={{ rotate: openId === faq.id ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "anticipate" }}
                  className="flex-shrink-0 ml-4 text-black font-light text-2xl leading-none"
                >
                  +
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden bg-gray-50"
                  >
                    <div className="pb-8 px-4 md:px-6 text-sm md:text-base text-gray-500 max-w-3xl leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
