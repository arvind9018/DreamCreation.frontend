export function HowItWorks() {
  return (
    <section className="py-32 px-6 bg-dark text-secondary">
      <div className="max-w-6xl mx-auto text-center animate-fade-up">

        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          How <span className="text-accent">Dream Creation</span> Works
        </h2>

        <p className="text-secondary/70 max-w-2xl mx-auto mb-20">
          A simple, structured flow designed to help you
          turn ideas into real, professional digital products.
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 relative">

          {[
            {
              step: "01",
              title: "Create Your Account",
              desc: "Sign up in seconds and access your personal workspace.",
            },
            {
              step: "02",
              title: "Build & Organize Projects",
              desc: "Turn ideas into structured projects with clear progress tracking.",
            },
            {
              step: "03",
              title: "Share & Grow",
              desc: "Showcase your work, get feedback, and unlock opportunities.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                relative bg-[#181818] p-8 rounded-2xl
                border border-white/10
                hover:border-accent
                hover:-translate-y-2
                transition-all duration-300
                animate-fade-up
              "
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Step number */}
              <div className="text-accent text-4xl font-bold mb-4">
                {item.step}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-secondary/70">
                {item.desc}
              </p>

              {/* Accent glow line */}
              <div className="
                absolute bottom-0 left-1/2 -translate-x-1/2
                w-16 h-[2px] bg-accent/60
                blur-sm
              " />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
