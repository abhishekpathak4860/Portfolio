import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Trekking Mantra",
    description:
      "Designed and implemented an end-to-end travel booking platform for adventure trekking, group tours, and customizable trip packages for customers",
    image: "/images/trekkingmantra.jpeg",
    tech: ["Next.js", "TypeScript", "Tailwind", "Node.js", "MySQL"],
    link: "https://trekkingmantra.com/",
  },
  {
    id: 2,
    title: "Swasth Raho",
    description:
      "Built a scalable healthcare ecosystem (patients–doctors–hospitals) reducing onboarding time by 40% and improving overall system efficiency.Integrated AI-driven medical report analysis, increasing user engagement by 45% and enabling 24/7 automated health support.",
    image: "/images/swasthRaho.jpeg",
    tech: ["Next.js", "Node.js", "MongoDB", "JWT", "TypeScript", "Tailwind"],
    link: "https://swasth-raho-9ehr.vercel.app/",
  },
  {
    id: 3,
    title: "Innovate Hub",
    description:
      "Innovate Hub is a startup-focused platform that connects entrepreneurs, mentors, and investors. It streamlines idea validation, collaboration, and resource sharing to accelerate innovation.",
    image: "/images/innovateHub.png",
    tech: [
      "Express.js",
      "NextJsAuth",
      "TailwindCSS",
      "NodeJs",
      "vercel",
      "mongodb",
    ],
    link: "https://github.com/abhishekpathak4860/founders-hub",
  },
  {
    id: 4,
    title: "Chatify",
    description:
      "Engineered a real-time chat app with peer-to-peer video calling using Socket.IO and WebRTC",
    image: "/images/chatify.jpeg",
    tech: ["MERN", "Socket.IO", "WebRTC"],
    link: "https://chat-app-pzif.vercel.app/",
  },
  {
    id: 5,
    title: "GlobeInfo",
    description:
      "GlobeInfo is a dynamic and responsive web application that displays comprehensive information about countries around the world. Built using React and the REST Countries API, the app fetches real-time data to present users with details like country names, flags, capitals, populations, regions, and more.",
    image: "/images/countries.jpeg",
    tech: ["React", "REST Countries API"],
    link: "https://pathak-countries.netlify.app/",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      const cards =
        scrollContainerRef.current?.querySelectorAll(".project-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 100, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: scrollContainerRef.current,
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
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 xl:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-3xl xl:text-5xl font-light mb-12 text-center"
        >
          <span className="text-white font-normal">Projects</span>
        </h2>

        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card glass-card rounded-xl overflow-hidden group cursor-pointer hover:neon-glow transition-all duration-500"
            >
              <div className="relative h-48 xl:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl xl:text-2xl font-light mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm xl:text-base text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs xl:text-sm px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn hover:text-primary transition-colors duration-300 flex items-center"
                >
                  View Project
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
