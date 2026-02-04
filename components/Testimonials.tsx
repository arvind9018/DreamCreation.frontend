"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Arjun Patel",
    role: "CS Student",
    rating: 5,
    text: "Dream Creation helped me organize my projects properly. My resume finally looks professional.",
  },
  {
    name: "Neha Sharma",
    role: "Frontend Developer",
    rating: 4,
    text: "The UI is clean and the workflow feels like a real startup tool.",
  },
  {
    name: "Rohit Verma",
    role: "Startup Founder",
    rating: 5,
    text: "Perfect for managing ideas and sharing them with my team.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <section className="py-32 px-6 bg-dark text-secondary">
      <div className="max-w-4xl mx-auto text-center">

        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Loved by <span className="text-accent">creators & students</span>
        </h2>

        <p className="text-secondary/70 mb-10">
          Trusted by 1,200+ creators building real-world projects
        </p>

        {/* Testimonial Card */}
        <div className="
          bg-[#181818] border border-white/10
          rounded-3xl p-10 max-w-xl mx-auto
        ">

          {/* Avatar */}
          <div className="flex justify-center mb-4">
            <div className="
              w-14 h-14 rounded-full
              bg-accent/20 text-accent
              flex items-center justify-center
              font-bold text-lg
            ">
              {t.name.charAt(0)}
            </div>
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={i < t.rating ? "text-accent" : "text-secondary/30"}
              >
                ★
              </span>
            ))}
          </div>

          {/* Text */}
          <p className="text-secondary/80 mb-6 leading-relaxed">
            “{t.text}”
          </p>

          <div className="font-semibold">{t.name}</div>
          <div className="text-sm text-secondary/60">{t.role}</div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
            className="px-4 py-2 rounded-lg border border-white/10 hover:border-accent transition"
          >
            ←
          </button>

          <button
            onClick={() => setIndex((index + 1) % testimonials.length)}
            className="px-4 py-2 rounded-lg border border-white/10 hover:border-accent transition"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}
