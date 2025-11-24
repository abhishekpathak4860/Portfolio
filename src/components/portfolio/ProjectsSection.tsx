import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight } from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Dashboard Analytics',
    description: 'Modern web application dashboard with real-time analytics and data visualization',
    image: '/images/project-1.jpg',
    tech: ['React', 'TypeScript', 'Tailwind']
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-featured online shopping platform with payment integration',
    image: '/images/project-2.jpg',
    tech: ['Next.js', 'Node.js', 'MongoDB']
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Creative portfolio showcase with stunning animations and 3D elements',
    image: '/images/project-3.png',
    tech: ['React', 'GSAP', 'Three.js']
  },
  {
    id: 4,
    title: 'Mobile App Design',
    description: 'Intuitive mobile application interface with seamless user experience',
    image: '/images/project-4.jpg',
    tech: ['React Native', 'Firebase', 'Redux']
  },
  {
    id: 5,
    title: 'Social Media App',
    description: 'Modern social networking platform with real-time messaging',
    image: '/images/project-5.png',
    tech: ['React', 'Socket.io', 'Express']
  },
  {
    id: 6,
    title: 'Task Management',
    description: 'Collaborative task management tool with team features',
    image: '/images/project-6.png',
    tech: ['Vue.js', 'Node.js', 'PostgreSQL']
  }
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
            start: 'top 80%'
          }
        }
      );

      const cards = scrollContainerRef.current?.querySelectorAll('.project-card');
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
              start: 'top 80%'
            }
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
          Featured <span className="gradient-text font-normal">Projects</span>
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
                <Button
                  variant="ghost"
                  size="sm"
                  className="group/btn hover:text-primary transition-colors duration-300"
                >
                  View Project
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                  />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
