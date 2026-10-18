"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "What kind of projects do you take on?",
    answer: "Websites and web apps, Android and iOS mobile apps, brand and graphic design, and custom management software — especially school, college, consultancy and small-business systems. If your work runs on registers, spreadsheets and WhatsApp messages today, that is usually a good place to start.",
  },
  {
    id: 2,
    question: "Do you build school management software from scratch?",
    answer: "Yes. We map your admissions process, fee structure, attendance rules, exam pattern and reporting requirements, then build a system around them. Modules can be added in phases, so you are not paying for the whole platform on day one.",
  },
  {
    id: 3,
    question: "How long does a typical project take?",
    answer: "A business website usually takes 3–5 weeks, a mobile app 8–12 weeks, and a custom management system 2–4 months depending on modules. You get a written timeline with milestones before work starts — and regular working builds to review, not one big reveal at the end.",
  },
  {
    id: 4,
    question: "What happens after launch?",
    answer: "You get training, documentation and admin access so your team can run the system. We also offer ongoing support covering backups, updates, monitoring, and new features as your needs change.",
  },
  {
    id: 5,
    question: "Can you work with our existing website or records?",
    answer: "Usually, yes. We migrate data from spreadsheets, older databases or another platform, and we can build around an existing website or app instead of replacing everything. We will tell you honestly if a rebuild is the cheaper option.",
  },
  {
    id: 6,
    question: "Who owns the code and the data?",
    answer: "You do. On final payment the code and content built for you are yours, and your data stays in your accounts. Our internal libraries and tooling remain ours, but nothing about your business is locked behind us.",
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
            Straight answers about timelines, ownership, support and how we build custom systems.
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
