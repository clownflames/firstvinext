// components/MotivationMarquee.tsx
"use client";

import React from "react";

const motivations: string[] = [
  "🚀 Your dream career starts with one internship",
  "💡 Learn by doing — real projects, real impact",
  "🌟 Top companies hire from our talent pool",
  "📈 87% of interns receive full-time offers",
  "🎯 Build your portfolio before you graduate",
  "🤝 Network with industry mentors",
  "⚡ Get hands-on experience from day one",
  "🏆 Stand out to recruiters with real-world skills",
  "🌈 Turn curiosity into a career",
  "🔥 Apply today — your future self will thank you",
];

export default function MotivationMarquee() {
  return (
    <div className="relative w-full overflow-hidden border-y bg-muted/40 py-3">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

      {/* Marquee track */}
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {[...motivations, ...motivations].map((text, i) => (
          <span
            key={i}
            className="text-sm font-medium text-muted-foreground sm:text-base"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}