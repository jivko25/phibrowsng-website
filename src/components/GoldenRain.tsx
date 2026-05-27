"use client";

import { useMemo } from "react";

type Particle = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  drift: number;
};

function buildParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: ((i * 37 + 11) % 100),
    delay: (i * 0.55) % 12,
    duration: 9 + (i % 7) * 1.2,
    size: 2 + (i % 4),
    opacity: 0.12 + (i % 5) * 0.08,
    drift: ((i % 9) - 4) * 6,
  }));
}

type GoldenRainProps = {
  /** Брой частици — по-малко на мобилни */
  density?: "light" | "medium";
  className?: string;
};

export function GoldenRain({ density = "medium", className = "" }: GoldenRainProps) {
  const count = density === "light" ? 22 : 38;
  const particles = useMemo(() => buildParticles(count), [count]);

  return (
    <div
      className={`golden-rain pointer-events-none absolute inset-0 z-[1] overflow-hidden ${className}`}
      aria-hidden
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="golden-particle"
          style={
            {
              left: `${p.left}%`,
              "--particle-delay": `${p.delay}s`,
              "--particle-duration": `${p.duration}s`,
              "--particle-size": `${p.size}px`,
              "--particle-opacity": p.opacity,
              "--particle-drift": `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
      {particles.slice(0, 8).map((p) => (
        <span
          key={`spark-${p.id}`}
          className="golden-sparkle"
          style={
            {
              left: `${(p.left + 15) % 100}%`,
              "--particle-delay": `${p.delay + 2}s`,
              "--particle-duration": `${p.duration + 3}s`,
              "--particle-opacity": p.opacity * 0.7,
              "--particle-drift": `${p.drift * 0.5}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
