import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Experience = {
  id: number;
  role: string;
  type: string; // Added 'type' for the badge (Internship, Full-time, etc.)
  company: string;
  period: string;
  bullets: string[];
};

const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    type: "Internship",
    company: "Eniacworld Media",
    period: "June 2025 – Sept 2025",
    bullets: [
      "Coded and optimized responsive web pages using HTML, CSS, JavaScript, and React, reducing average page load time by 30% and increasing client site traffic by 18%.",
      "Synced backend APIs, cutting manual data entry by 40%.",
      "Optimized MongoDB schemas for 20% faster data retrieval.",
    ],
  },
  {
    id: 2,
    role: "Web Developer",
    type: "Internship",
    company: "VaultofCodes",
    period: "June 2025 – July 2025",
    bullets: [
      "Created 4 web modules, improving session duration by 15%.",
      "Automated data transfer via REST APIs, enhancing accuracy.",
      "Resolved 50+ UI bugs, raising usability scores by 22%.",
    ],
  },
  {
    id: 3,
    role: "Web Developer",
    type: "Internship",
    company: "Future Intern ",
    period: "Aug 2024 – Sept 2024",
    bullets: [
      "Developed 3 dynamic web pages using HTML, CSS, and JavaScript.",
      "ntegrated REST APIs to automate data transfer, reducing manual input by 35% and increasing data accuracy by 20%",
      "Deployed updates through Git and GitHub.",
    ],
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the Section Title
      gsap.from(".section-title", {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      // Animate the Timeline Items
      const items = containerRef.current?.querySelectorAll(".experience-item");
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-16 text-white border-b border-gray-800 pb-4 w-fit">
          Experience
        </h2>

        <div className="relative pl-4 md:pl-8">
          {/* Vertical Timeline Line */}
          <div
            className="absolute left-4 md:left-8 top-2 bottom-0 w-[2px] bg-white/20"
            style={{ zIndex: 0 }}
          />

          <div ref={containerRef} className="space-y-12">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="experience-item relative flex flex-col md:flex-row gap-4 md:gap-10"
              >
                {/* Dot on the Timeline */}
                <div className="absolute -left-[21px] md:-left-[21px] top-2 z-10">
                  <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                </div>

                {/* Content Area */}
                <div className="flex-1 pb-8">
                  {/* Role & Badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <span className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full">
                      {exp.type}
                    </span>
                  </div>

                  {/* Company & Date */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6">
                    <span className="bg-white/10 text-white px-2 py-1 text-sm font-semibold rounded-md">
                      {exp.company}
                    </span>
                    <span className="text-gray-400 text-sm italic">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-gray-400 text-sm md:text-base flex items-start leading-relaxed"
                      >
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-gray-600 rounded-full shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
