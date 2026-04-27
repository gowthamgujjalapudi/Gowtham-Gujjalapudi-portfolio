"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Setup Text Reveal Animation on Load
      gsap.from(".hero-text-char", {
        y: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5,
      });

      // Section 1
      gsap.fromTo(
        ".section-1",
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "0% 0%",
            end: "20% 0%",
            scrub: true,
          },
        }
      );

      // Section 2
      gsap.fromTo(
        ".section-2",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "20% 0%",
            end: "30% 0%",
            scrub: true,
          },
        }
      );
      gsap.to(".section-2", {
        opacity: 0,
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "40% 0%",
          end: "50% 0%",
          scrub: true,
        },
      });

      // Section 3
      gsap.fromTo(
        ".section-3",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "50% 0%",
            end: "60% 0%",
            scrub: true,
          },
        }
      );
      gsap.to(".section-3", {
        opacity: 0,
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "70% 0%",
          end: "80% 0%",
          scrub: true,
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Section 1 */}
        <div className="section-1 absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-lg flex flex-wrap justify-center gap-[0.3em] overflow-hidden pointer-events-auto">
              {"Gowtham Gujjalapudi".split(" ").map((word, wIdx) => (
                <div key={wIdx} className="flex overflow-hidden">
                  {word.split("").map((char, cIdx) => (
                    <span key={cIdx} className="hero-text-char inline-block">
                      {char}
                    </span>
                  ))}
                </div>
              ))}
            </h1>
            <div className="overflow-hidden mt-4">
              <p className="hero-text-char text-lg sm:text-xl md:text-2xl text-gray-300 tracking-wide drop-shadow-md pointer-events-auto inline-block">
                Frontend Developer & Cyber Security Specialist.
              </p>
            </div>
            <div className="overflow-hidden mt-8 flex justify-center">
              <a 
                href="#projects" 
                className="hero-text-char pointer-events-auto px-8 py-3 rounded-full bg-white text-black font-semibold tracking-wide transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] block"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="section-2 absolute inset-0 flex items-center justify-start max-w-7xl mx-auto px-6 sm:px-12 md:px-16 opacity-0">
          <div className="max-w-xl pointer-events-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              I build secure digital experiences.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mt-6 drop-shadow-md">
              Specializing in responsive web applications using Next.js and Firebase, with a strong focus on high-performance code and robust cybersecurity.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="section-3 absolute inset-0 flex items-center justify-end max-w-7xl mx-auto px-6 sm:px-12 md:px-16 opacity-0">
          <div className="max-w-xl text-right pointer-events-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Bridging design and engineering.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mt-6 drop-shadow-md">
              Passionate about UI/UX design. I turn complex problems into elegant, user-centric solutions while maintaining top-tier security standards.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
