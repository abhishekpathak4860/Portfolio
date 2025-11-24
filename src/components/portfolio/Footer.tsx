import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, Heart } from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%'
          }
        }
      );

      const particles = particlesRef.current?.children;
      if (particles) {
        Array.from(particles).forEach((particle) => {
          gsap.to(particle, {
            y: -30,
            x: gsap.utils.random(-20, 20),
            opacity: gsap.utils.random(0.3, 0.8),
            duration: gsap.utils.random(3, 5),
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: gsap.utils.random(0, 2)
          });
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="relative py-12 px-4 xl:px-8 border-t border-border/30">
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl xl:text-2xl font-light mb-4 gradient-text">
              Abhishek Pathak
            </h3>
            <p className="text-sm xl:text-base text-muted-foreground">
              Full-Stack Web Developer crafting digital experiences with passion and precision.
            </p>
          </div>

          <div>
            <h4 className="text-base xl:text-lg font-light mb-4 text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('home')}
                className="text-sm xl:text-base text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm xl:text-base text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-sm xl:text-base text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm xl:text-base text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          <div>
            <h4 className="text-base xl:text-lg font-light mb-4 text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 rounded-lg hover:neon-glow transition-all duration-300 group"
              >
                <GithubLogo
                  size={24}
                  weight="fill"
                  className="text-foreground group-hover:text-primary transition-colors duration-300"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 rounded-lg hover:neon-glow transition-all duration-300 group"
              >
                <LinkedinLogo
                  size={24}
                  weight="fill"
                  className="text-foreground group-hover:text-primary transition-colors duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 text-center">
          <p className="text-sm xl:text-base text-muted-foreground flex items-center justify-center gap-2">
            2025 Abhishek Pathak
            <span className="inline-flex items-center gap-1">
              <span>•</span>
              <span>Made with</span>
              <Heart size={16} weight="fill" className="text-primary animate-pulse" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
