import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="px-6 pt-32 pb-24 bg-dark text-secondary space-y-32">

      {/* Hero */}
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6">
          Powerful <span className="text-accent">Features</span>
        </h1>
        <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
          Everything you need to build, manage, and showcase real-world projects
          — all in one clean platform.
        </p>
      </section>

      {/* Core Features */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-14 text-center">
          Core Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Project Management",
              desc: "Create, update, and organize projects with proper structure and clarity.",
            },
            {
              title: "Real-World Workflow",
              desc: "Workflows inspired by real startups, not just tutorials.",
            },
            {
              title: "Public Showcase",
              desc: "Share projects publicly with recruiters and clients.",
            },
            {
              title: "Role-Based Access",
              desc: "Separate experiences for Users, Clients, and Admins.",
            },
            {
              title: "Dashboard Insights",
              desc: "Track progress, activity, and project status at a glance.",
            },
            {
              title: "Secure Authentication",
              desc: "Safe login system ready for real-world production use.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-[#181818] p-8 rounded-xl border border-white/10 hover:border-accent transition"
            >
              <h3 className="text-xl font-medium mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary/70">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-14 text-center">
          How Dream Creation Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              step: "01",
              title: "Create Account",
              desc: "Sign up and access your personal dashboard.",
            },
            {
              step: "02",
              title: "Build Projects",
              desc: "Add ideas, track progress, and improve continuously.",
            },
            {
              step: "03",
              title: "Showcase & Grow",
              desc: "Share projects and unlock real opportunities.",
            },
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

      {/* Who It’s For */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Who Is This For?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-secondary/70">
          <div className="bg-[#181818] p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-medium mb-3 text-secondary">
              Students
            </h3>
            <p>
              Build real projects instead of only collecting certificates.
            </p>
          </div>

          <div className="bg-[#181818] p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-medium mb-3 text-secondary">
              Developers
            </h3>
            <p>
              Organize work professionally and grow with a product mindset.
            </p>
          </div>

          <div className="bg-[#181818] p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-medium mb-3 text-secondary">
              Founders & Clients
            </h3>
            <p>
              Discover talent and explore real project portfolios.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center bg-[#181818] rounded-2xl p-12 border border-white/10">
        <h2 className="text-3xl font-semibold mb-4">
          Start building with purpose
        </h2>
        <p className="text-secondary/70 mb-8">
          Join Dream Creation and turn ideas into real-world products.
        </p>
        <Link
          href="/signup"
          className="inline-block px-8 py-3 rounded-md bg-accent-gradient text-dark font-semibold hover:opacity-90 transition"
        >
          Get Started
        </Link>
      </section>

    </div>
  );
}
