export default function UIUXDesign() {
  return (
    <div className="min-h-screen px-6 pt-32 pb-24 bg-dark text-secondary">

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6">
          UI / UX <span className="text-accent">Design</span>
        </h1>
        <p className="text-lg text-secondary/70">
          Thoughtful, user-centered design that improves usability,
          engagement, and conversions.
        </p>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold mb-6">
          Design That Solves Real Problems
        </h2>
        <p className="text-secondary/70 leading-relaxed max-w-3xl">
          Great design is not just about visuals — it’s about understanding users.
          We design intuitive interfaces that align business goals with
          seamless user experiences across web and mobile platforms.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto mb-32">
        <h2 className="text-3xl font-semibold mb-14 text-center">
          Our UI / UX Design Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "User Research & Wireframing",
              desc: "Understanding users, mapping journeys, and structuring ideas clearly.",
            },
            {
              title: "Website & App UI Design",
              desc: "Clean, modern interfaces designed for usability and clarity.",
            },
            {
              title: "Prototypes & Design Systems",
              desc: "Interactive prototypes and reusable design systems for consistency.",
            },
            {
              title: "Mobile-First & Responsive Design",
              desc: "Designs that adapt seamlessly across all devices and screen sizes.",
            },
            {
              title: "Usability Testing",
              desc: "Testing designs with real users to uncover friction points.",
            },
            {
              title: "Conversion Optimization",
              desc: "Design improvements focused on engagement and business results.",
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
          Our Design Process
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { step: "01", title: "Research", desc: "Understanding users and business goals" },
            { step: "02", title: "Wireframe", desc: "Structuring layouts and user flows" },
            { step: "03", title: "Design", desc: "Crafting polished, user-friendly interfaces" },
            { step: "04", title: "Test & Refine", desc: "Validating designs and improving usability" },
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
          Want a better user experience?
        </h2>
        <p className="text-secondary/70 mb-8">
          Let’s design interfaces your users will love to use.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 rounded-md bg-accent-gradient text-dark font-semibold hover:opacity-90 transition"
        >
          Talk to Us
        </a>
      </section>

    </div>
  );
}
