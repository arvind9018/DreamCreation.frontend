import Link from "next/link";

export default function HelpCenterPage() {
  return (
    <div className="px-6 pt-32 pb-24 bg-dark text-secondary space-y-32">

      {/* Hero */}
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6">
          Help <span className="text-accent">Center</span>
        </h1>
        <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
          Find answers, learn how things work, and get help when you need it.
        </p>
      </section>

      {/* Search */}
      <section className="max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Search for help..."
          className="w-full px-5 py-4 rounded-xl bg-[#181818] border border-white/10 text-secondary placeholder:text-secondary/50 focus:outline-none focus:border-accent transition"
        />
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-14 text-center">
          Browse by Category
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Getting Started",
              desc: "Account setup, onboarding, and basics.",
            },
            {
              title: "Projects",
              desc: "Creating, editing, and managing projects.",
            },
            {
              title: "Billing & Plans",
              desc: "Pricing, upgrades, and payments.",
            },
            {
              title: "Account & Security",
              desc: "Login, password, and account safety.",
            },
            {
              title: "Roles & Permissions",
              desc: "User, Client, and Admin access.",
            },
            {
              title: "Troubleshooting",
              desc: "Fix common issues and errors.",
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

      {/* Popular Questions */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Popular Questions
        </h2>

        <div className="space-y-6">
          {[
            "How do I create a new project?",
            "Can clients view my projects?",
            "How do I upgrade my plan?",
            "Is my data secure?",
            "How do I delete my account?",
          ].map((q, i) => (
            <div
              key={i}
              className="bg-[#181818] p-6 rounded-xl border border-white/10"
            >
              <p className="font-medium">{q}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center bg-[#181818] rounded-2xl p-12 border border-white/10">
        <h2 className="text-3xl font-semibold mb-4">
          Still need help?
        </h2>
        <p className="text-secondary/70 mb-8">
          If you can’t find what you’re looking for,
          our support team is here to help.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 rounded-md bg-accent-gradient text-dark font-semibold hover:opacity-90 transition"
        >
          Contact Support
        </Link>
      </section>

    </div>
  );
}
