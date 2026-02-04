export function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-dark text-secondary relative overflow-hidden">
      
      {/* Background glow */}
      <div className="
        absolute inset-0 flex justify-center items-center
        pointer-events-none
      ">
        <div className="
          w-[420px] h-[420px] rounded-full
          bg-accent/20 blur-[120px]
          animate-pulse
        " />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-up">

        <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
          Ready to build something
          <span className="block text-accent">amazing?</span>
        </h2>

        <p className="text-secondary/70 mb-12 max-w-xl mx-auto text-lg">
          Stop overthinking. Start building real projects that
          actually showcase your skills and ideas.
        </p>

        <button
          className="
            px-14 py-4 rounded-2xl
            bg-accent-gradient text-dark
            font-semibold text-lg
            hover:scale-105 hover:shadow-xl
            transition-all duration-300
          "
        >
          Start for Free
        </button>

        {/* Subtext */}
        <p className="text-secondary/50 text-sm mt-6">
          No credit card required · Free forever
        </p>

      </div>
    </section>
  );
}

