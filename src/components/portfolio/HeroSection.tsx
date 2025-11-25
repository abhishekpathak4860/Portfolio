// import { useEffect, useRef, useState } from "react";

// import { Button } from "@/components/ui/button";

// import HeroBackground from "./HeroBackground";

// export default function HeroSection() {
//   const headlineRef = useRef<HTMLHeadingElement>(null);
//   const subtitleRef = useRef<HTMLParagraphElement>(null);
//   const ctaRef = useRef<HTMLDivElement>(null);

//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Function to check screen width
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768); // <768px considered mobile
//     };

//     handleResize(); // initial check
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Only render the background on mobile
//   if (!isMobile) return null;

//   const scrollToContact = () => {
//     document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center w-full overflow-hidden"
//     >
//       <div className="absolute inset-0 z-0 h-full w-full block md:hidden">
//         <HeroBackground />
//       </div>

//       {/* <div
//         ref={orb1Ref}
//         className="absolute top-1/4 left-1/4 w-32 h-32 xl:w-48 xl:h-48 rounded-full bg-primary/20 blur-3xl pointer-events-none"
//       />
//       <div
//         ref={orb2Ref}
//         className="absolute top-1/3 right-1/4 w-40 h-40 xl:w-56 xl:h-56 rounded-full bg-secondary/20 blur-3xl pointer-events-none"
//       />
//       <div
//         ref={orb3Ref}
//         className="absolute bottom-1/4 left-1/3 w-36 h-36 xl:w-52 xl:h-52 rounded-full bg-neon-cyan/20 blur-3xl pointer-events-none"
//       /> */}

//       <div className="relative z-10 text-center px-4 xl:px-8 max-w-5xl mx-auto backdrop-blur-sm">
//         <h1
//           ref={headlineRef}
//           className="text-4xl xl:text-4xl font-light mb-6 leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
//         >
//           Hi, I'm{" "}
//           <span className="gradient-text font-normal">Abhishek Pathak</span>
//           <br />
//           Full-Stack Web Developer
//         </h1>
//         <p
//           ref={subtitleRef}
//           className="text-lg xl:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
//         >
//           Crafting digital experiences that inspire and engage through
//           innovative design and cutting-edge technology
//         </p>
//         <div ref={ctaRef}>
//           <Button
//             onClick={scrollToContact}
//             size="lg"
//             className="bg-black text-base xl:text-lg px-8 py-6"
//           >
//             Hire Me
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import HeroBackground from "./HeroBackground";

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // <768px is mobile
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center w-full overflow-hidden"
    >
      {/* Only render HeroBackground on mobile */}
      {isMobile && (
        <div className="absolute inset-0 z-0 h-full w-full">
          <HeroBackground />
        </div>
      )}

      {/* Text content always visible */}
      <div className="relative z-10 text-center px-4 xl:px-8 max-w-5xl mx-auto backdrop-blur-sm">
        <h1
          ref={headlineRef}
          className="text-4xl xl:text-4xl font-light mb-6 leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
        >
          Hi, I'm{" "}
          <span className="gradient-text font-normal">Abhishek Pathak</span>
          <br />
          Full-Stack Web Developer
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg xl:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        >
          Crafting digital experiences that inspire and engage through
          innovative design and cutting-edge technology
        </p>
        <div ref={ctaRef}>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-black text-base xl:text-lg px-8 py-6"
          >
            Hire Me
          </Button>
        </div>
      </div>
    </section>
  );
}
