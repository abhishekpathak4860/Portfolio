import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Certificate, BookOpen } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

type Education = {
  id: number;
  degree: string;
  institution: string;
  year: string;
  status: string; // e.g., "Graduating 2026" or "Completed"
  description: string;
  stats: { label: string; value: string }[];
  icon: React.ElementType;
};

const educationData: Education[] = [
  {
    id: 1,
    degree: "B.Tech in Computer Science",
    institution: "University Of Lucknow",
    year: "2022 — Present",
    status: "Pursuing",
    description:
      "Specializing in software engineering and full-stack development.",
    stats: [{ label: "SGPA (3rd Year)", value: "8.33" }],
    icon: GraduationCap,
  },
  {
    id: 2,
    degree: "Senior Secondary (XII) & High School (X)",
    institution: "Christ Church College, Hazratganj",
    year: "Completed",
    status: "ISC Board",
    description:
      "Completed foundation education with a focus on Science (PCM) and Computer Science.",
    stats: [
      { label: "Senior Secondary (SSC)", value: "85.5%" },
      { label: "High School (HSC)", value: "83.45%" },
    ],
    icon: BookOpen,
  },
];

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Animation
      gsap.from(".edu-header", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      // 2. Timeline Items Animation
      const items = containerRef.current?.querySelectorAll(".edu-item");
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
      id="education"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 md:px-8 lg:px-16 flex flex-col justify-center"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Title */}
        <h2 className="edu-header text-4xl md:text-5xl font-bold mb-16 text-white border-b border-gray-800 pb-4 w-fit">
          Education
        </h2>

        <div className="relative pl-4 md:pl-8">
          {/* Vertical Timeline Line */}
          <div
            className="absolute left-4 md:left-8 top-2 bottom-0 w-[2px] bg-white/10"
            style={{ zIndex: 0 }}
          />

          <div ref={containerRef} className="space-y-12">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="edu-item relative flex flex-col md:flex-row gap-6 md:gap-10"
              >
                {/* Timeline Dot with Icon */}
                {/* Fixed: -left-5 centers the w-10 icon on the timeline line */}
                <div className="absolute -left-5 top-1 z-10 bg-black">
                  <div className="w-10 h-10 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    <edu.icon size={20} weight="fill" />
                  </div>
                </div>

                {/* Content Card */}
                {/* Fixed: Added pl-8 md:pl-12 to push text right, avoiding overlap with icon */}
                <div className="flex-1 pb-4 pl-8 md:pl-12">
                  {/* Header: Degree & Status */}
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full">
                      {edu.status}
                    </span>
                  </div>

                  {/* Institution & Year */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-5">
                    <span className="text-lg font-semibold text-gray-200">
                      @ {edu.institution}
                    </span>
                    <span className="hidden sm:inline text-gray-600">•</span>
                    <span className="text-gray-400 text-sm italic">
                      {edu.year}
                    </span>
                  </div>

                  {/* Stats / Grades Row */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    {edu.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                      >
                        <Certificate size={16} className="text-yellow-500" />
                        <span className="text-xs text-gray-400 uppercase tracking-wider">
                          {stat.label}:
                        </span>
                        <span className="text-sm font-bold text-white">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
