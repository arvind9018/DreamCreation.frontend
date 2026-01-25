import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="px-6 pt-32 pb-24 bg-dark text-secondary">

      {/* Header */}
      <section className="max-w-5xl mx-auto text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6">
          Our <span className="text-accent">Blog</span>
        </h1>
        <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
          Insights, tutorials, and real-world lessons on building projects,
          startups, and digital products.
        </p>
      </section>

      {/* Featured Post */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="bg-[#181818] border border-white/10 rounded-2xl p-10 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <span className="text-accent text-sm font-medium">
              Featured Article
            </span>
            <h2 className="text-3xl font-semibold mt-3 mb-4">
              How to Build Real Projects That Stand Out
            </h2>
            <p className="text-secondary/70 mb-6">
              Learn how to move beyond tutorials and start building projects
              that actually matter in the real world.
            </p>
            <Link
              href="/blog/how-to-build-real-projects"
              className="inline-block px-6 py-3 rounded-lg bg-accent-gradient text-dark font-semibold hover:opacity-90 transition"
            >
              Read Article
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="h-56 w-full rounded-xl bg-gradient-to-br from-[#0D47A1] to-[#1976D2] opacity-80" />
          </div>

        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Why Most Developers Stay Stuck",
              desc: "Understanding the real reason developers struggle to grow.",
              slug: "why-developers-stay-stuck",
            },
            {
              title: "Projects vs Certificates",
              desc: "What actually matters when applying for jobs?",
              slug: "projects-vs-certificates",
            },
            {
              title: "How to Think Like a Startup",
              desc: "Adopting a product mindset early in your career.",
              slug: "think-like-a-startup",
            },
          ].map((post, i) => (
            <Link
              key={i}
              href={`/blog/${post.slug}`}
              className="bg-[#181818] p-8 rounded-xl border border-white/10 hover:border-accent transition block"
            >
              <h3 className="text-xl font-medium mb-3">
                {post.title}
              </h3>
              <p className="text-secondary/70 mb-6">
                {post.desc}
              </p>
              <span className="text-sm text-accent">
                Read more →
              </span>
            </Link>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto mt-32 text-center bg-[#181818] rounded-2xl p-12 border border-white/10">
        <h2 className="text-3xl font-semibold mb-4">
          Want more insights like this?
        </h2>
        <p className="text-secondary/70 mb-8">
          Follow our blog to learn how to build better projects and products.
        </p>
        <Link
          href="/signup"
          className="inline-block px-8 py-3 rounded-md bg-accent-gradient text-dark font-semibold hover:opacity-90 transition"
        >
          Join Dream Creation
        </Link>
      </section>

    </div>
  );
}
