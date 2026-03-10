 "use client";

 import Image from "next/image";
 import { useEffect, useState } from "react";

const slides = [
  {
    // Boş, modern yazılım ofisi (insan yok)
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    caption: "I am a professional in the field of modern software engineering offices.",
  },
  {
    // Sadece masa + laptop + not defteri (insan yok)
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    caption: "I am a professional in the field of collaborative product development.",
  },
  {
    // Minimalist bilgisayar masası, üretkenlik odaklı (insan yok)
    src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80",
    caption: "I am a professional in the field of digital transformation projects.",
  },
  {
    // Geniş, boş ofis katı (insan yok, farklı açı)
    src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80",
    caption: "I am a professional in the field of high-performance digital workspaces.",
  },
];

 const animations = [
   "hero-slide-animate-fade-up",
   "hero-slide-animate-fade-right",
   "hero-slide-animate-zoom-in",
 ];

 export function HeroBackgroundSlider() {
   const [index, setIndex] = useState(0);
   const [animClass, setAnimClass] = useState(animations[0]);

   useEffect(() => {
     const interval = setInterval(() => {
       setIndex((prev) => {
         const next = (prev + 1) % slides.length;
         setAnimClass(animations[next % animations.length]);
         return next;
       });
     }, 2700); // ~2.7 seconds

     return () => clearInterval(interval);
   }, []);

   const current = slides[index];

   return (
     <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
       <div className={`relative h-full w-full transition-opacity duration-700 ${animClass}`}>
         <Image
           src={current.src}
           alt={current.caption}
           fill
           priority
           className="object-cover opacity-60"
           sizes="100vw"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/70 via-[#020617]/75 to-[#020617]" />
         <div className="absolute bottom-8 left-1/2 w-[90%] max-w-2xl -translate-x-1/2 rounded-2xl bg-black/45 px-5 py-3 text-center text-sm text-slate-100 backdrop-blur-md md:text-base">
           {current.caption}
         </div>
       </div>
     </div>
   );
 }

