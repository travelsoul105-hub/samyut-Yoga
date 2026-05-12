"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Award, Globe, Users, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: 15, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 2000, suffix: "+", label: "Students Trained" },
  { icon: Globe, value: 80, suffix: "+", label: "Countries" },
  { icon: Award, value: null, suffix: "", label: "Yoga Alliance RYS" },
  { icon: Award, value: null, suffix: "", label: "E-RYT 500" },
  { icon: Star, value: 4.3, suffix: "★", label: "Trustpilot" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const stepValue = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += stepValue;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {typeof target === "number" && target % 1 !== 0
        ? count.toFixed(1)
        : count}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section className="bg-forest-dark border-y border-gold/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <Icon className="w-5 h-5 text-gold opacity-70" />
                <div className="font-cormorant text-2xl sm:text-3xl font-bold text-ivory">
                  {stat.value !== null ? (
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span className="text-gold text-lg font-semibold">✓</span>
                  )}
                </div>
                <p className="text-ivory/60 text-xs font-inter leading-tight">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
