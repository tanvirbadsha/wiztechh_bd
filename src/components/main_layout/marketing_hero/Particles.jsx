import { useMemo } from "react";

export default function Particles() {
  const dots = useMemo(() => {
    return Array.from({ length: 30 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      floatDuration: 4 + Math.random() * 4,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            width: dot.size,
            height: dot.size,
            animationDelay: `-${dot.delay}s`,
            animation: `float ${dot.floatDuration}s ease-in-out infinite, pulseGlow 4s ease-in-out infinite`,
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );
}
