import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen px-6 pt-32 pb-24 bg-dark text-secondary">

      {/* Hero */}
      <section className="max-w-5xl mx-auto text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6">
          Our <span className="text-accent">Services</span>
        </h1>
        <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
          End-to-end digital solutions to design, build, and scale
          modern products with confidence.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <ServiceCard
            title="Web Development"
            description="High-performance websites, dashboards, and SaaS platforms using modern frameworks and scalable architectures."
            points={[
              "Custom websites & SaaS apps",
              "Admin dashboards",
              "API integrations",
              "Performance optimization",
            ]}
            link="/services/web-development"
          />

          <ServiceCard
            title="App Development"
            description="Robust mobile applications designed for scalability, performance, and long-term growth."
            points={[
              "Android & iOS apps",
              "Cross-platform solutions",
              "Secure backend integration",
              "App maintenance & updates",
            ]}
            link="/services/app-development"
          />

          <ServiceCard
            title="Digital Marketing"
            description="Data-driven strategies that help your product reach the right audience and convert users into customers."
            points={[
              "SEO & content strategy",
              "Paid ads & campaigns",
              "Analytics & reporting",
              "Brand growth strategy",
            ]}
            link="/services/digital-marketing"
          />

          <ServiceCard
            title="UI / UX Design"
            description="User-focused designs that balance aesthetics with usability and business goals."
            points={[
              "Wireframes & prototypes",
              "Product UI design",
              "UX research & testing",
              "Design systems",
            ]}
            link="/services/ui-ux-design"
          />

        </div>
      </section>

      {/* How We Work */}
      <section className="max-w-6xl mx-auto mb-32">
        <h2 className="text-3xl font-semibold mb-14 text-center">
          How We Work
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { step: "01", title: "Understand", desc: "We analyze your idea, goals, and requirements." },
            { step: "02", title: "Design", desc: "We design clean, user-friendly solutions." },
            { step: "03", title: "Build", desc: "We develop scalable and secure systems." },
            { step: "04", title: "Launch & Scale", desc: "We deploy, monitor, and improve continuously." },
          ].map((item, i) => (
            <div key={i}>
              <div className="text-accent text-4xl font-bold mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-medium mb-2">
                {item.title}
              </h3>
              <p className="text-secondary/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-5xl mx-auto mb-32 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Technologies We Use
        </h2>
        <p className="text-secondary/70 mb-10">
          We work with modern, proven technologies to ensure
          performance, scalability, and security.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-secondary/80">
          {[
            "React",
            "Next.js",
            "Node.js",
            "MongoDB",
            "Firebase",
            "AWS",
            "Tailwind CSS",
          ].map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-[#181818] border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center bg-[#181818] rounded-2xl p-12 border border-white/10">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to start your project?
        </h2>
        <p className="text-secondary/70 mb-8">
          Let’s discuss your idea and turn it into a real product.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 rounded-md bg-accent-gradient text-dark font-semibold hover:opacity-90 transition"
        >
          Contact Us
        </Link>
      </section>

    </div>
  );
}
