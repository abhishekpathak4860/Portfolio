import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out' }
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    )
    .fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.4'
    );

    gsap.to(orb1Ref.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    gsap.to(orb2Ref.current, {
      y: -30,
      x: 20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 0.5
    });

    gsap.to(orb3Ref.current, {
      y: -25,
      x: -15,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 1
    });
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/orb-fbGp9hFeP42G7XmmRYxfFc53/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="pointer-events-none"
          title="3D Background"
        />
      </div>

      <div
        ref={orb1Ref}
        className="absolute top-1/4 left-1/4 w-32 h-32 xl:w-48 xl:h-48 rounded-full bg-primary/20 blur-3xl pointer-events-none"
      />
      <div
        ref={orb2Ref}
        className="absolute top-1/3 right-1/4 w-40 h-40 xl:w-56 xl:h-56 rounded-full bg-secondary/20 blur-3xl pointer-events-none"
      />
      <div
        ref={orb3Ref}
        className="absolute bottom-1/4 left-1/3 w-36 h-36 xl:w-52 xl:h-52 rounded-full bg-neon-cyan/20 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 text-center px-4 xl:px-8 max-w-5xl mx-auto">
        <h1
          ref={headlineRef}
          className="text-4xl xl:text-7xl font-light mb-6 leading-tight"
        >
          Hi, I'm <span className="gradient-text font-normal">Abhishek</span> —<br />
          Full-Stack Web Developer
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg xl:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Crafting digital experiences that inspire and engage through innovative design and cutting-edge technology
        </p>
        <div ref={ctaRef}>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="neon-glow hover:neon-glow-violet transition-all duration-300 text-base xl:text-lg px-8 py-6"
          >
            Hire Me
          </Button>
        </div>
      </div>
    </section>
  );
}
