import Link from "next/link";

export default function CareersPage() {
  return (
    <div className="px-6 pt-32 pb-24 bg-dark text-secondary space-y-32">

      {/* Hero */}
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6">
          Join Our <span className="text-accent">Team</span>
        </h1>
        <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
          We’re building a platform that helps creators turn ideas into
          real-world products. If you love building meaningful things,
          you’ll fit right in.
        </p>
      </section>

      {/* Why Work With Us */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-14 text-center">
          Why Work at Dream Creation?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Real Impact",
              desc: "Your work directly helps students and developers build real projects.",
            },
            {
              title: "Growth-Oriented",
              desc: "We value learning, experimentation, and continuous improvement.",
            },
            {
              title: "Remote Friendly",
              desc: "Work from anywhere and focus on what truly matters.",
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

      {/* Open Positions */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-14 text-center">
          Open Positions
        </h2>

        <div className="space-y-6">

          {[
            {
              role: "Frontend Developer",
              type: "Remote · Full-time",
              desc: "Build clean, scalable UI using React and modern web tools.",
            },
            {
              role: "Backend Developer",
              type: "Remote · Full-time",
              desc: "Design APIs, manage databases, and scale core systems.",
            },
            {
              role: "Content & Community Manager",
              type: "Remote · Part-time",
              desc: "Create content and engage with our growing creator community.",
            },
          ].map((job, i) => (
            <div
              key={i}
              className="bg-[#181818] p-6 rounded-xl border border-white/10 flex flex-col md:flex-row justify-between gap-6"
            >
              <div>
                <h3 className="text-xl font-medium mb-2">
                  {job.role}
                </h3>
                <p className="text-secondary/70 mb-2">
                  {job.desc}
                </p>
                <span className="text-sm text-secondary/60">
                  {job.type}
                </span>
              </div>

              <Link
                href="/contact"
                className="self-start md:self-center px-6 py-3 rounded-lg bg-accent-gradient text-dark font-semibold hover:opacity-90 transition"
              >
                Apply Now
              </Link>
            </div>
          ))}

        </div>
      </section>

      {/* Hiring Process */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-14 text-center">
          Our Hiring Process
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            "Apply",
            "Short Interview",
            "Skill Assessment",
            "Final Discussion",
          ].map((step, i) => (
            <div key={i}>
              <div className="text-accent text-3xl font-bold mb-4">
                {`0${i + 1}`}
              </div>
              <p className="text-secondary/70">
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center bg-[#181818] rounded-2xl p-12 border border-white/10">
        <h2 className="text-3xl font-semibold mb-4">
          Don’t see a role that fits?
        </h2>
        <p className="text-secondary/70 mb-8">
          We’re always excited to meet talented people.
          Reach out and tell us how you can contribute.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 rounded-md bg-accent-gradient text-dark font-semibold hover:opacity-90 transition"
        >
          Contact Us
        </Link>
      </section>

    </div>
  );
}
