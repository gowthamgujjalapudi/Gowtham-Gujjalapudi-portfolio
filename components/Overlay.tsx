"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]); // Parallax up

  // Section 2: 20% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

  // Section 3: 50% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Section 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-lg">
              Gowtham Gujjalapudi
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mt-4 tracking-wide drop-shadow-md">
              Frontend Developer & Cyber Security Specialist.
            </p>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex items-center justify-start max-w-7xl mx-auto px-8 md:px-16"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              I build secure digital experiences.
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mt-6 drop-shadow-md">
              Specializing in responsive web applications using Next.js and Firebase, with a strong focus on high-performance code and robust cybersecurity.
            </p>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex items-center justify-end max-w-7xl mx-auto px-8 md:px-16"
        >
          <div className="max-w-xl text-right">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Bridging design and engineering.
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mt-6 drop-shadow-md">
              Passionate about UI/UX design. I turn complex problems into elegant, user-centric solutions while maintaining top-tier security standards.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
