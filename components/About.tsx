"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"] },
    { category: "Backend & Tools", items: ["Firebase", "GitHub"] },
    { category: "Design & Security", items: ["UI/UX Design", "Cybersecurity Fundamentals"] },
  ];

  const achievements = [
    "Improved application security by 60% using Firebase authentication",
    "Increased performance by 30% using Next.js optimization",
    "Built 5+ responsive web applications",
    "Boosted engagement by 25% using AI-based content",
  ];

  const education = [
    {
      degree: "B.Tech in Cyber Security",
      school: "KS Institute of Technology",
      year: "2024–2028",
    },
    {
      degree: "MPC",
      school: "Sri Chaitanya Junior College",
      year: "2022–2024",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left Column elements
      gsap.from(".about-left > *", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-left",
          start: "top 80%",
        },
      });

      // Right Column Blocks
      gsap.from(".about-right-block", {
        y: 50,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-right",
          start: "top 80%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-20 bg-[#121212] py-24 px-4 md:px-8 border-b border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: About Me */}
        <div className="about-left lg:col-span-5">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
            About Me
          </h2>
          <div className="w-24 h-1 bg-white mb-8 rounded-full opacity-20"></div>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I am a B.Tech Cyber Security student and passionate frontend developer with strong skills in building modern, responsive, and secure web applications.
            </p>
            <p>
              I specialize in React, Next.js, and Firebase, focusing on performance, scalability, and user experience. I enjoy combining UI/UX design with security principles to create efficient and engaging digital products.
            </p>
            <p>
              I have developed multiple real-world web applications and implemented authentication systems that improved security and performance.
            </p>
          </div>
        </div>

        {/* Right Column: Skills, Achievements, Education */}
        <div className="about-right lg:col-span-7 space-y-16">
          
          {/* Skills Section */}
          <div className="about-right-block">
            <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
            <div className="space-y-6">
              {skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <p className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-3">
                    {skillGroup.category}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="about-right-block">
            <h3 className="text-2xl font-semibold text-white mb-6">Achievements</h3>
            <ul className="space-y-4">
              {achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1">🏆</span>
                  <span className="text-gray-300 leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Education Section */}
          <div className="about-right-block">
            <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l border-white/20">
                  <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-[6.5px] top-1.5 border-2 border-[#121212]"></div>
                  <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                  <p className="text-gray-400 mt-1">{edu.school}</p>
                  <p className="text-sm text-gray-500 mt-2 font-mono">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
