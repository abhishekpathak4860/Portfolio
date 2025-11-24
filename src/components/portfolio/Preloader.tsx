import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 500);
      }
    });

    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    })
    .to(progressBarRef.current, {
      width: '100%',
      duration: 2,
      ease: 'power2.out'
    })
    .to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: 'power2.inOut'
    });
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <h1
        ref={textRef}
        className="text-4xl xl:text-6xl font-light mb-12 opacity-0 translate-y-8 gradient-text"
      >
        Abhishek Pathak
      </h1>
      <div className="w-64 xl:w-96 h-1 bg-muted rounded-full overflow-hidden">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-primary to-secondary w-0 neon-glow"
        />
      </div>
    </div>
  );
}
