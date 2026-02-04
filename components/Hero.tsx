"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    title: "WEB DEVELOPMENT",
    desc: "We build powerful, user-friendly websites tailored to your brand and goals. Reliable, responsive, and ready to drive real results — no shortcuts, just quality development you can count on.",
    image: "/hero/web.png",
  },
  {
    title: "APP DEVELOPMENT",
    desc: "Reliable app development tailored to your vision and goals. Clean code, cross-platform expertise, and pixel-perfect design — delivering secure, scalable apps ready to perform.",
    image: "/hero/app.png",
  },
  {
    title: "DIGITAL MARKETING",
    desc: "We deliver results-driven digital marketing that grows your brand and revenue. Targeted SEO, high-ROI PPC, social strategies, and converting content.",
    image: "/hero/digital.png",
  },
  {
    title: "UI / UX DESIGN",
    desc: "Designing interfaces users love at first glance. Intuitive UX and stunning UI for higher retention, better conversions, and happier users.",
    image: "/hero/ui.png",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="animate-slide-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="text-accent">
              {slide.title.split(" ")[0]}
            </span>{" "}
            {slide.title.split(" ").slice(1).join(" ")}
          </h1>

          <p className="max-w-xl text-lg text-gray-400 mb-10">
            {slide.desc}
          </p>
          <a href="/signup">
            <button className="px-10 py-4 rounded-xl bg-accent-gradient text-dark font-bold text-lg shadow-lg hover:scale-105 transition">
              Get Started
            </button>
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center animate-slide-right">
          <Image
            src={slide.image}
            alt={slide.title}
            width={520}
            height={520}
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
