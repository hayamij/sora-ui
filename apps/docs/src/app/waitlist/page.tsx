"use client";

import { useGSAP } from "@gsap/react";
import { MeshGradient } from "@paper-design/shaders-react";
import gsap from "gsap";
import { useRef } from "react";
import { WaitlistForm } from "@/components/waitlist-form";
import { WaitlistNavbar } from "@/components/waitlist-navbar";

export default function WaitlistPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".animate-hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      })
        .from(
          ".animate-form",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".animate-footer",
          {
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        );
    },
    { scope: containerRef }
  );

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-slate-900"
      ref={containerRef}
    >
      {/* Minimal Navbar */}
      <WaitlistNavbar />

      {/* Gradient Background */}
      <div className="fixed inset-0 z-0">
        <MeshGradient
          colors={[
            "hsl(216, 90%, 27%)",
            "hsl(243, 68%, 36%)",
            "hsl(205, 91%, 64%)",
            "hsl(211, 61%, 57%)",
          ]}
          distortion={0.8}
          offsetX={0}
          offsetY={0}
          rotation={0}
          scale={1}
          speed={0.5}
          style={{ height: "100vh", width: "100vw" }}
          swirl={0.1}
        />
      </div>

      <div className="relative z-10">
        {/* Main content */}
        <main className="flex min-h-screen items-center justify-center p-4 pt-20">
          <div className="mx-auto w-full max-w-2xl space-y-8 text-center">
            {/* Hero section */}
            <div className="font-bold font-sans text-4xl text-white tracking-tight drop-shadow-2xl md:text-6xl">
              <h1 className="animate-hero-text py-[23px] font-semibold text-4xl text-white tracking-tight drop-shadow-2xl md:text-6xl">
                We are launching <br /> Sora UI soon!
                <span className="font-bold font-sans text-4xl text-white tracking-tight drop-shadow-2xl md:text-6xl">
                  {" "}
                </span>
              </h1>
              <p className="mx-auto mt-4 h-auto max-w-lg animate-hero-text px-0 py-0 text-center font-body font-normal text-white text-xl leading-7 tracking-[0.01em] drop-shadow-xl">
                The ultimate React UI component library for modern web
                applications.
              </p>
            </div>

            {/* Waitlist form */}
            <div className="animate-form">
              <WaitlistForm />
            </div>

            {/* Footer */}
            <div className="animate-footer pt-8 font-body text-sm text-white/80 drop-shadow-lg">
              <p>We respect your inbox. No spam, ever.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
