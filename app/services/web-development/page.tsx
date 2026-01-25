export default function WebDevelopment() {
  return (
    <div className="min-h-screen px-6 pt-32 pb-24 bg-dark text-secondary">

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6">
          Web <span className="text-accent">Development</span>
        </h1>
        <p className="text-lg text-secondary/70">
          High-performance websites and web applications built
          for scalability, security, and real business growth.
        </p>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold mb-6">
          Modern Web Solutions for Real Products
        </h2>
        <p className="text-secondary/70 leading-relaxed max-w-3xl">
          We specialize in building fast, reliable, and scalable web applications
          using modern technologies. From landing pages to full SaaS platforms,
          our solutions are designed to grow with your business.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto mb-32">
        <h2 className="text-3xl font-semibold mb-14 text-center">
          Our Web Development Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Custom Websites & SaaS Platforms",
              desc: "Tailored web solutions built around your business goals.",
            },
            {
              title: "Frontend & Backend Development",
              desc: "Clean, maintainable code across the full technology stack.",
            },
            {
              title: "Admin Dashboards & APIs",
              desc: "Secure dashboards and APIs to manage data and workflows.",
            },
            {
              title: "SEO & Performance Optimization",
              desc: "Fast load times, optimized structure, and search visibility.",
            },
            {
              title: "Cloud Deployment",
              desc: "Scalable deployments using modern cloud infrastructure.",
            },
            {
              title: "Maintenance & Support",
              desc: "Ongoing updates, monitoring, and improvements.",
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
            { step: "01", title: "Planning", desc: "Understanding goals and system requirements" },
            { step: "02", title: "Design", desc: "Creating clean UI and system architecture" },
            { step: "03", title: "Development", desc: "Building scalable and secure applications" },
            { step: "04", title: "Launch & Scale", desc: "Deploying, monitoring, and improving" },
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
          Need a powerful web product?
        </h2>
        <p className="text-secondary/70 mb-8">
          Let’s build a web solution that grows with your business.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 rounded-md bg-accent-gradient text-dark font-semibold hover:opacity-90 transition"
        >
          Start a Project
        </a>
      </section>

    </div>
  );
}
