export function Features() {
  return (
    <section className="py-32 px-6 bg-dark text-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto text-center animate-fade-up">

        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Everything you need to <span className="text-accent">build faster</span>
        </h2>

        <p className="text-secondary/70 max-w-2xl mx-auto mb-24">
          Dream Creation provides the tools and structure required to
          turn ideas into real, production-ready digital products.
        </p>

        {/* Features */}
        <div className="relative grid md:grid-cols-3 gap-10 items-center">

          {/* LEFT CARD */}
          <FeatureCard
            title="Project Management"
            desc="Organize ideas, tasks, and milestones with clarity."
          />

          {/* CENTER CARD WITH GLOW */}
          <div className="relative">
            {/* Circular animation */}
            <div className="glow-orbit" />

            <div className="
              relative z-10 p-10 rounded-3xl
              bg-[#1b1b1b]
              border border-white/15
              shadow-xl
              scale-105
            ">
              <h3 className="text-2xl font-semibold mb-4">
                Startup-Ready Workflow
              </h3>
              <p className="text-secondary/70">
                Built around real startup practices, not just tutorials.
              </p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <FeatureCard
            title="Professional Showcase"
            desc="Present your projects confidently to recruiters or clients."
          />

        </div>
      </div>
    </section>
  );
}

/* Small reusable card */
function FeatureCard({ title, desc }: any) {
  return (
    <div
      className="
        p-8 rounded-2xl
        bg-white/5
        border border-white/10
        hover:border-accent
        hover:-translate-y-2
        transition-all duration-300
      "
    >
      <h3 className="text-xl font-medium mb-3">
        {title}
      </h3>
      <p className="text-secondary/70">
        {desc}
      </p>
    </div>
  );
}
