"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    id: 1,
    title: "Kamma Icon Trust",
    category: "Web Application",
    description: "A modern, responsive platform built with high-end UI/UX design and Next.js performance optimizations.",
    image: "https://image.thum.io/get/width/1200/crop/800/noanimate/https://kammaicontrust.org/",
    link: "https://kammaicontrust.org/",
  },
  {
    id: 2,
    title: "Marriage Registration Web App",
    category: "Full-Stack Web App",
    description: "Built a full-stack web application using Next.js and Firebase for managing marriage registrations. Implemented authentication, form handling, and data storage.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 3,
    title: "Firebase Authentication System",
    category: "Cybersecurity",
    description: "Developed a secure login and authentication system using Firebase, improving application security and reducing unauthorized access.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !scrollContainerRef.current) return;

    const ctx = gsap.context(() => {
      const container = scrollContainerRef.current;
      if (!container) return;
      
      const cards = gsap.utils.toArray(".project-card");
      
      // Calculate how far to move the container to show all cards
      // It's the total width of all cards minus the viewport width + some padding
      const getScrollAmount = () => {
        return -(container.scrollWidth - window.innerWidth + 80); 
      };

      const tween = gsap.to(container, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${Math.abs(getScrollAmount())}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true, // Recalculates on resize
        },
      });

      // Stagger entry of cards when section enters
      gsap.from(cards, {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative z-20 bg-[#121212] overflow-hidden h-screen flex flex-col justify-center">
      <div className="absolute top-24 left-4 md:left-8 z-30">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Selected Work
        </h2>
        <div className="w-24 h-1 bg-white mt-6 rounded-full opacity-20"></div>
      </div>

      <div ref={scrollContainerRef} className="flex gap-8 px-4 md:px-8 mt-32 md:mt-48 w-max">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card relative w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] flex-shrink-0 group overflow-hidden rounded-2xl bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-md"
          >
            <a href={project.link} target={project.link !== "#" ? "_blank" : undefined} rel="noopener noreferrer" className="block w-full h-full p-4 flex flex-col">
              <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden rounded-xl bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {project.title === "Kamma Icon Trust" && (
                  <div className="absolute top-4 right-4 z-10 w-16 h-16 bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20">
                    <img 
                      src="https://kammaicontrust.org/logo.png" 
                      alt="Kamma Icon Trust Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>

              <div className="mt-6 px-2 mb-2 flex-grow">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
