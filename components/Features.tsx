export function Features() {
  return (
    <section className="py-24 px-6 bg-dark">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-12">
          Everything you need to build faster
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            { title: "Project Management", desc: "Organize ideas, tasks, and milestones in one place." },
            { title: "Startup Ready", desc: "Designed with real-world startup workflows in mind." },
            { title: "Showcase Work", desc: "Share your projects with recruiters, clients, or teams." },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent transition"
            >
              <h3 className="text-xl font-semibold mb-3">
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
