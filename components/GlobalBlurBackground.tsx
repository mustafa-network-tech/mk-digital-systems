"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { NetworkSphere } from "@/components/NetworkSphere";

function BackgroundContent() {
  const pathname = usePathname();
  const isProjectsPage = pathname?.includes("/projects") ?? false;

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0B0F14]"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        minHeight: "100vh",
      }}
      aria-hidden
    >
      {/* Subtle radial glow in center (behind sphere) */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          width: "100vw",
          height: "100vh",
          minHeight: "100vh",
          background: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.15) 0%, transparent 50%)",
        }}
        aria-hidden
      />

      {/* Rotating wireframe sphere - centered in viewport, no stretch; opacity lower on mobile / raised on Projects */}
      <div
        className={`network-sphere-wrapper absolute inset-0 flex items-center justify-center blur-[1px] ${isProjectsPage ? "network-sphere-wrapper--projects" : ""}`}
      >
        <NetworkSphere />
      </div>

      {/* Soft floating blurred orbs - dark theme */}
      <div
        className="absolute w-[min(80vw,600px)] aspect-square rounded-full opacity-30 blur-[80px] animate-float-slow"
        style={{
          background: "radial-gradient(circle, rgba(30,41,59,0.5) 0%, transparent 70%)",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <div
        className="absolute w-[min(60vw,400px)] aspect-square rounded-full opacity-20 blur-[60px] animate-float-slower"
        style={{
          background: "radial-gradient(circle, rgba(51,65,85,0.4) 0%, transparent 60%)",
          bottom: "20%",
          right: "10%",
        }}
      />
      <div
        className="absolute w-[min(50vw,320px)] aspect-square rounded-full opacity-25 blur-[70px] animate-float-slow"
        style={{
          background: "radial-gradient(circle, rgba(30,41,59,0.4) 0%, transparent 65%)",
          top: "50%",
          left: "5%",
        }}
      />
    </div>
  );
}

export function GlobalBlurBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === "undefined") return null;

  return createPortal(<BackgroundContent />, document.body);
}
