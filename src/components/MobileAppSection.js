import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileAppSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  // Auto-rotate through features every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      id: 0,
      title: "All markets in one place",
      description: "Get the most out of global markets thanks to access to 10100 instruments.",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 1,
      title: "Comprehensive solution",
      description: "Make informed trading decisions with latest news push notifications, educational courses and market research tools.",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Intuitive interface",
      description: "Easy-to-use design for both beginners and experienced traders.",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <span className="inline-block text-black bg-gray-100 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide mb-4">App</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">Everything you need - in one app</h2>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="relative cursor-pointer transition-all duration-300"
                  onClick={() => setActiveFeature(index)}
                >
                  {/* Rotating Border Line Animation */}
                  {activeFeature === index && (
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 border-2 border-transparent rounded-xl">
                        <div className="absolute top-0 left-0 w-8 h-0.5 bg-green-400 animate-border-line"></div>
                      </div>
                    </div>
                  )}

                  <div className="relative bg-white rounded-xl p-4 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shadow-sm">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      {index === 1 && <div className="w-16 h-0.5 bg-green-400 mt-3"></div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Mobile App Image */}
          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.5
                }}
                className="relative"
              >
                <img
                  src="/3-app-hp-desktop-usd.png"
                  alt="Mobile App Interface"
                  className="w-auto h-full object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
