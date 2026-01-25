export default function AppDevelopment() {
  return (
    <div className="min-h-screen px-6 pt-32 pb-24 bg-dark text-secondary">

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6">
          App <span className="text-accent">Development</span>
        </h1>
        <p className="text-lg text-secondary/70">
          We build scalable, high-performance mobile applications
          designed for real users and real business growth.
        </p>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold mb-6">
          What We Deliver
        </h2>
        <p className="text-secondary/70 leading-relaxed max-w-3xl">
          Our app development services focus on building reliable,
          user-friendly mobile applications that scale with your business.
          From idea validation to launch and long-term maintenance,
          we handle the complete lifecycle.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto mb-32">
        <h2 className="text-3xl font-semibold mb-14 text-center">
          App Development Capabilities
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Android & iOS Apps",
              desc: "Native and cross-platform applications tailored to your users.",
            },
            {
              title: "Cross-Platform Solutions",
              desc: "Build once, deploy everywhere using modern frameworks.",
            },
            {
              title: "Backend & API Integration",
              desc: "Secure, scalable backend systems that power your app.",
            },
            {
              title: "Performance Optimization",
              desc: "Fast load times, smooth animations, and efficient resource usage.",
            },
            {
              title: "Maintenance & Updates",
              desc: "Ongoing support, improvements, and feature updates.",
            },
            {
              title: "Security & Scalability",
              desc: "Industry best practices for data protection and growth.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#181818] p-8 rounded-xl border border-white/10 hover:border-accent transition"
            >
              <h3 className="text-xl font-medium mb-3">
                {item.title}
              </h3>
              <p className="text-secondary/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto mb-32">
        <h2 className="text-3xl font-semibold mb-14 text-center">
          Our Development Process
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { step: "01", title: "Planning", desc: "Understanding your idea and requirements" },
            { step: "02", title: "Design", desc: "Creating clean and user-friendly UI/UX" },
            { step: "03", title: "Development", desc: "Building secure and scalable applications" },
            { step: "04", title: "Launch & Support", desc: "Deploying and maintaining your app" },
          ].map((item, i) => (
            <div key={i}>
              <div className="text-accent text-4xl font-bold mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-medium mb-2">
                {item.title}
              </h3>
              <p className="text-secondary/70 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center bg-[#181818] rounded-2xl p-12 border border-white/10">
        <h2 className="text-3xl font-semibold mb-4">
          Have an app idea?
        </h2>
        <p className="text-secondary/70 mb-8">
          Let’s turn your idea into a powerful mobile application.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 rounded-md bg-accent-gradient text-dark font-semibold hover:opacity-90 transition"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
}
