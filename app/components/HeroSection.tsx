"use client";

import { useEffect, useRef, useState } from "react";

const subtitle = "Full Stack Developer // Open Source Enthusiast // Problem Solver";

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    let index = 0;
    const interval = setInterval(() => {
      if (index < subtitle.length) {
        setDisplayedText(subtitle.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative">
      {/* Terminal prompt */}
      <p className="text-matrix-green/40 text-sm mb-6 tracking-wider">
        {">"} system.identify()
      </p>

      {/* Name with glitch */}
      <h1
        className="glitch-text text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        data-text="NEO_DEV"
        style={{ animation: "glow-pulse 3s ease-in-out infinite" }}
      >
        NEO_DEV
      </h1>

      {/* Typewriter subtitle */}
      <div className="text-matrix-green/70 text-sm md:text-base lg:text-lg mb-12 h-8 flex items-center justify-center font-mono">
        <span>{displayedText}</span>
        <span className="inline-block w-[2px] h-[1.2em] bg-matrix-green ml-1 animate-[blink-caret_1s_step-end_infinite]" />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#projects"
          className="border border-matrix-green/40 px-8 py-3 text-matrix-green text-sm uppercase tracking-widest hover:bg-matrix-green hover:text-black transition-all duration-300 border-glow"
        >
          [ View Projects ]
        </a>
        <a
          href="#contact"
          className="border border-matrix-green/20 px-8 py-3 text-matrix-green/60 text-sm uppercase tracking-widest hover:border-matrix-green/40 hover:text-matrix-green transition-all duration-300"
        >
          [ Contact Me ]
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-[bounce-subtle_2s_ease-in-out_infinite]">
        <div className="flex flex-col items-center gap-2 text-matrix-green/30">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-matrix-green/30"
          >
            <path
              d="M10 4 L10 16 M4 10 L10 16 L16 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
