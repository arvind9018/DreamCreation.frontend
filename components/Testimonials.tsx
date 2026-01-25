export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-dark">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-16">
          Loved by creators & students
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              name: "Arjun Patel",
              role: "CS Student",
              text: "Dream Creation helped me organize my projects properly. My resume finally looks professional."
            },
            {
              name: "Neha Sharma",
              role: "Frontend Developer",
              text: "The UI is clean and the workflow feels like a real startup tool."
            },
            {
              name: "Rohit Verma",
              role: "Startup Founder",
              text: "Perfect for managing ideas and sharing them with my team."
            },
          ].map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <p className="text-gray-300 mb-6">
                “{t.text}”
              </p>
              <div className="font-semibold">
                {t.name}
              </div>
              <div className="text-sm text-gray-400">
                {t.role}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
