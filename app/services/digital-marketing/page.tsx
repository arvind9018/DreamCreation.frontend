export default function DigitalMarketing() {
  return (
    <div className="min-h-screen px-6 pt-32 pb-24 bg-dark text-secondary">

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6">
          Digital <span className="text-accent">Marketing</span>
        </h1>
        <p className="text-lg text-secondary/70">
          Data-driven marketing strategies that help your business
          grow, convert, and scale sustainably.
        </p>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold mb-6">
          Grow with Strategy, Not Guesswork
        </h2>
        <p className="text-secondary/70 leading-relaxed max-w-3xl">
          We focus on building marketing systems that attract the right audience,
          increase conversions, and deliver measurable results.
          Every strategy is backed by data, analysis, and continuous optimization.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto mb-32">
        <h2 className="text-3xl font-semibold mb-14 text-center">
          Our Digital Marketing Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "SEO & Website Optimization",
              desc: "Improve visibility, rankings, and organic traffic through proven SEO techniques.",
            },
            {
              title: "Social Media Marketing",
              desc: "Build brand presence and engage audiences across social platforms.",
            },
            {
              title: "Paid Ads & Campaigns",
              desc: "Targeted advertising campaigns designed for ROI, not just clicks.",
            },
            {
              title: "Content & Brand Strategy",
              desc: "Create meaningful content that builds trust and authority.",
            },
            {
              title: "Analytics & Reporting",
              desc: "Track performance with clear insights and actionable data.",
            },
            {
              title: "Conversion Optimization",
              desc: "Turn visitors into customers with data-backed improvements.",
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
          Our Marketing Process
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { step: "01", title: "Research", desc: "Understanding your market and audience" },
            { step: "02", title: "Strategy", desc: "Building a clear, goal-driven plan" },
            { step: "03", title: "Execution", desc: "Launching campaigns and content" },
            { step: "04", title: "Optimize", desc: "Tracking results and improving continuously" },
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
          Ready to grow your business?
        </h2>
        <p className="text-secondary/70 mb-8">
          Let’s build a marketing strategy that delivers real results.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 rounded-md bg-accent-gradient text-dark font-semibold hover:opacity-90 transition"
        >
          Get in Touch
        </a>
      </section>

    </div>
  );
}
