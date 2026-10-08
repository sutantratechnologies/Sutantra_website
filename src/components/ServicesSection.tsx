import React from "react";

const services = [
  {
    id: "01",
    title: "AI & Machine Learning",
    description: "Not sure which AI model is right for your project? Our consultation services help you navigate options, compliance, and budgeting. We provide expert guidance from initial planning through to final selection.",
    tags: ["EXPERT GUIDANCE", "PREDICTIVE MODELS", "AUTOMATION"],
  },
  {
    id: "02",
    title: "Cloud Architecture",
    description: "We work with you through a range of cloud providers to customize your infrastructure from floor to ceiling to fit your scale. From microservices to databases and security, we make our solutions suit your space.",
    tags: ["CUSTOM DESIGN", "AWS / GCP", "SCALABILITY"],
  },
  {
    id: "03",
    title: "Enterprise Platforms",
    description: "Our expert team collaborate closely with your project managers to fit within your project goals and timelines. We're experts in high-performance web standards and enterprise architecture.",
    tags: ["WEB DEVELOPMENT", "SYSTEM INTEGRATION", "MOBILE APPS"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 md:px-16 bg-white text-[#171717]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20 md:mb-32 max-w-2xl">
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight uppercase leading-[0.95] mb-8 text-black">
            OUR SERVICES
          </h2>
          <p className="text-base md:text-lg text-gray-500 mb-8 leading-relaxed">
            We offer a comprehensive range of design and development services tailored to your needs.
          </p>
          <a 
            href="/services" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black border-b-2 border-black pb-1 hover:text-[#2A3490] hover:border-[#2A3490] transition-colors"
          >
            WHAT WE DO <span className="font-mono text-sm font-normal">›</span>
          </a>
        </div>

        {/* Services List */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 md:py-16 group ${
                index === 0 ? "border-t border-gray-200" : "border-t border-gray-200"
              }`}
            >
              {/* Number Column */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex flex-col text-gray-400 font-medium">
                  <span className="text-lg tracking-wide">{service.id}</span>
                  <span className="text-lg leading-4 mt-1 opacity-50 font-serif">. .</span>
                </div>
              </div>

              {/* Content Column */}
              <div className="col-span-1 md:col-span-8 flex flex-col items-start">
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-black group-hover:text-[#2A3490] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
                  {service.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {service.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-4 py-1.5 rounded-full bg-gray-100 text-[10px] font-bold tracking-widest uppercase text-gray-600 transition-colors group-hover:bg-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button Column */}
              <div className="col-span-1 md:col-span-2 flex justify-start md:justify-end items-start mt-4 md:mt-0">
                <a 
                  href="/services"
                  className="w-12 h-12 rounded-full bg-[#171717] text-white flex items-center justify-center group-hover:bg-[#2A3490] hover:bg-[#2A3490] transition-colors shadow-lg duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
          {/* Final Bottom Border */}
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
}
