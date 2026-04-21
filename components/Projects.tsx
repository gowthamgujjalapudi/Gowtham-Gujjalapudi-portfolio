"use client";

import React from "react";
import { motion } from "framer-motion";

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
  return (
    <section className="relative z-20 bg-[#121212] py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Selected Work
          </h2>
          <div className="w-24 h-1 bg-white mt-6 rounded-full opacity-20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-md block"
            >
              <a href={project.link} target={project.link !== "#" ? "_blank" : undefined} rel="noopener noreferrer" className="block w-full h-full p-4">
                {/* Project Image */}
                <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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

                {/* Project Info */}
                <div className="mt-6 px-2 mb-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
