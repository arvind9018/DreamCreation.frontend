import Link from "next/link";

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="px-6 pt-32 pb-24 bg-dark text-secondary">

      {/* Article Container */}
      <article className="max-w-3xl mx-auto">

        {/* Back link */}
        <Link
          href="/blog"
          className="text-sm text-accent hover:underline"
        >
          ← Back to Blog
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold mt-6 mb-4 leading-tight">
          How to Build Real Projects That Stand Out
        </h1>

        {/* Meta */}
        <p className="text-secondary/60 text-sm mb-10">
          Published on Aug 20, 2026 · 6 min read
        </p>

        {/* Content */}
        <div className="space-y-8 text-secondary/80 leading-relaxed text-lg">

          <p>
            Most developers spend months watching tutorials but still struggle
            to build real-world projects. The problem isn’t lack of knowledge —
            it’s lack of structure and execution.
          </p>

          <p>
            Real projects are not about copying code. They are about solving
            problems, making decisions, and improving through feedback.
          </p>

          <h2 className="text-2xl font-semibold text-secondary mt-10">
            1. Start With a Clear Goal
          </h2>

          <p>
            Every meaningful project begins with a clear objective. Ask yourself:
            what problem does this project solve, and for whom?
          </p>

          <h2 className="text-2xl font-semibold text-secondary mt-10">
            2. Build in Public
          </h2>

          <p>
            Sharing progress publicly helps you stay accountable and opens
            opportunities for feedback from real users.
          </p>

          <h2 className="text-2xl font-semibold text-secondary mt-10">
            3. Focus on Quality, Not Quantity
          </h2>

          <p>
            One well-built project is more valuable than ten unfinished ones.
            Treat your work like a product, not an experiment.
          </p>

          <p>
            Dream Creation exists to help you organize, track, and showcase
            projects professionally — the same way real teams do.
          </p>
        </div>

        {/* Divider */}
        <div className="my-16 border-t border-white/10" />

        {/* CTA */}
        <div className="text-center bg-[#181818] p-10 rounded-2xl border border-white/10">
          <h3 className="text-2xl font-semibold mb-4">
            Build projects that matter
          </h3>
          <p className="text-secondary/70 mb-6">
            Stop following endless tutorials. Start building real products.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-3 rounded-md bg-accent-gradient text-dark font-semibold hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>

      </article>
    </div>
  );
}

