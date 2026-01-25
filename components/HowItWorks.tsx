export function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-16">
          How Dream Creation Works
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          {[
            { step: "01", title: "Create Account", desc: "Sign up in seconds and get started." },
            { step: "02", title: "Build Projects", desc: "Add ideas, structure them, and track progress." },
            { step: "03", title: "Share & Grow", desc: "Showcase work and get real opportunities." },
          ].map((item, i) => (
            <div key={i}>
              <div className="text-accent text-3xl font-bold mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
