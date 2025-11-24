import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code,
  Database,
  Palette,
  Rocket,
  Globe,
  Lightning
} from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'HTML', icon: Code },
  { name: 'CSS', icon: Palette },
  { name: 'JavaScript', icon: Lightning },
  { name: 'React', icon: Rocket },
  { name: 'Node.js', icon: Globe },
  { name: 'MongoDB', icon: Database },
  { name: 'GSAP', icon: Lightning },
  { name: 'TypeScript', icon: Code }
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -100, filter: 'blur(10px)' },
        {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1
          }
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 100, filter: 'blur(10px)' },
        {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1
          }
        }
      );

      gsap.fromTo(
        skillsRef.current?.children || [],
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 85%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 px-4 xl:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center">
          <div ref={imageRef} className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative w-64 h-64 xl:w-80 xl:h-80 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                <img
                  src="/images/profile.png"
                  alt="Abhishek Pathak"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div ref={contentRef}>
            <h2 className="text-3xl xl:text-5xl font-light mb-6">
              About <span className="gradient-text font-normal">Me</span>
            </h2>
            <p className="text-base xl:text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm a passionate Full-Stack Web Developer with expertise in creating
              stunning, high-performance web applications. With a keen eye for design
              and a deep understanding of modern web technologies, I bring ideas to
              life through clean code and innovative solutions.
            </p>
            <p className="text-base xl:text-lg text-muted-foreground mb-10 leading-relaxed">
              My journey in web development has equipped me with a diverse skill set,
              allowing me to tackle complex challenges and deliver exceptional user
              experiences across all platforms.
            </p>

            <h3 className="text-xl xl:text-2xl font-light mb-6">
              <span className="gradient-text">Skills</span>
            </h3>
            <div ref={skillsRef} className="grid grid-cols-2 xl:grid-cols-4 gap-4">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="glass-card p-4 rounded-lg flex flex-col items-center justify-center gap-3 hover:neon-glow transition-all duration-300 group cursor-pointer"
                  >
                    <Icon
                      size={32}
                      weight="light"
                      className="text-primary group-hover:text-secondary transition-colors duration-300"
                    />
                    <span className="text-sm xl:text-base font-light">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
