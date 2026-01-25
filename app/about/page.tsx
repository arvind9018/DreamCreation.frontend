export default function AboutPage() {
  return (
    <div className="px-6 pt-32 pb-24 bg-dark text-secondary space-y-32">

      {/* Hero */}
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight">
          Building Ideas into
          <span className="block text-accent">Real-World Products</span>
        </h1>

        <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
          Dream Creation is a platform for students, developers, and creators
          who want to turn ideas into structured, professional digital projects.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6">
            Our Mission
          </h2>
          <p className="text-secondary/70 leading-relaxed">
            Our mission is to bridge the gap between learning and real-world execution.
            Too many ideas remain unfinished due to lack of structure.
            We provide a clean system where ideas grow into meaningful,
            showcase-ready projects.
          </p>
        </div>

        <div className="bg-[#181818] p-8 rounded-2xl border border-white/10">
          <ul className="space-y-4 text-secondary/80">
            <li>✔ Turn ideas into structured projects</li>
            <li>✔ Learn by building, not just watching</li>
            <li>✔ Present work professionally</li>
            <li>✔ Think like a real product team</li>
          </ul>
        </div>
      </section>

      {/* What We Do */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-14 text-center">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Project Organization",
              desc: "Create, manage, and track projects with a clean and logical structure.",
            },
            {
              title: "Startup-Driven Workflow",
              desc: "Workflows inspired by real startups, teams, and modern products.",
            },
            {
              title: "Professional Showcase",
              desc: "Share your work confidently with recruiters, clients, or collaborators.",
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

      {/* Why Choose Us */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">
          Why Dream Creation?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-secondary/70">
          <p>
            We focus on simplicity, clarity, and real-world usability.
            No unnecessary features. No distractions.
            Just a focused environment to build meaningful work.
          </p>
          <p>
            Whether you’re a beginner or an experienced creator,
            Dream Creation adapts to your growth and helps you think
            like a product builder from day one.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center bg-[#181818] rounded-2xl p-12 border border-white/10">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to build something meaningful?
        </h2>
        <p className="text-secondary/70 mb-8">
          Start organizing your ideas and turning them into real projects today.
        </p>
        <a
          href="/signup"
          className="inline-block px-8 py-3 rounded-md bg-accent-gradient text-dark font-semibold hover:opacity-90 transition"
        >
          Get Started
        </a>
      </section>

    </div>
  );
}
