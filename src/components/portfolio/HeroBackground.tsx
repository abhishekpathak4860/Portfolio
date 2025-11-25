// import { useEffect, useRef } from "react";
// import HALO from "vanta/dist/vanta.halo.min";
// import * as THREE from "three";

// export default function HeroBackgroundHalo() {
//   const vantaRef = useRef(null);
//   const vantaEffect = useRef<any>(null);

//   useEffect(() => {
//     if (!vantaEffect.current && vantaRef.current) {
//       vantaEffect.current = HALO({
//         el: vantaRef.current,
//         THREE: THREE,

//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200,
//         minWidth: 200,

//         // Custom HALO settings
//         backgroundColor: 0x131a43,
//         baseColor: 0x1a59,
//         size: 1,
//         amplitudeFactor: 1,
//         xOffset: 0,
//         yOffset: 0,
//       });
//     }

//     return () => {
//       if (vantaEffect.current) vantaEffect.current.destroy();
//     };
//   }, []);

//   return (
//     <div
//       ref={vantaRef}
//       className="absolute inset-0 -z-10 w-full h-full overflow-hidden"
//     ></div>
//   );
// }
// import { useEffect, useRef } from "react";
// import GLOBE from "vanta/dist/vanta.globe.min";
// import * as THREE from "three";

// export default function HeroBackgroundGlobe() {
//   const vantaRef = useRef(null);
//   const vantaEffect = useRef<any>(null);

//   useEffect(() => {
//     if (!vantaEffect.current && vantaRef.current) {
//       vantaEffect.current = GLOBE({
//         el: vantaRef.current,
//         THREE: THREE,

//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,

//         minHeight: 200,
//         minWidth: 200,
//         scale: 1.0,
//         scaleMobile: 0.8,

//         // ⭐ Your custom GLOBE settings
//         backgroundColor: 0x23153c,
//         color: 0xff3f81,
//         color2: 0xffffff,
//         size: 1,
//       });
//     }

//     return () => {
//       if (vantaEffect.current) vantaEffect.current.destroy();
//     };
//   }, []);

//   return (
//     <div
//       ref={vantaRef}
//       className="absolute inset-0 -z-10 w-full h-full overflow-hidden"
//     ></div>
//   );
// }
import { useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

export default function HeroBackgroundBirds() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef<any>(null);
  // 240 10% 3.9%
  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = BIRDS({
        el: vantaRef.current,
        THREE: THREE,

        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 0.8, // mobile par thoda chhota

        // ⭐ Your BIRDS custom settings
        backgroundColor: 0x0a0a0c,
        backgroundAlpha: 1,
        color1: 0xff0000,
        color2: 0x0d1ff,
        colorMode: "varianceGradient",

        quantity: 5,
        birdSize: 1,
        wingSpan: 30,
        speedLimit: 5,

        separation: 20,
        alignment: 20,
        cohesion: 20,
      });
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 -z-10 w-full h-full overflow-hidden"
    ></div>
  );
}
