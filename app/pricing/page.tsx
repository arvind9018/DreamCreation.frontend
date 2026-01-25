import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="px-6 pt-32 pb-24 bg-dark text-secondary space-y-32">

      {/* Header */}
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6">
          Simple <span className="text-accent">Pricing</span>
        </h1>
        <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
          Start for free. Upgrade only when you’re ready to grow.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Free */}
        <div className="bg-[#181818] p-8 rounded-2xl border border-white/10 flex flex-col">
          <h2 className="text-xl font-medium mb-2">Free</h2>
          <p className="text-secondary/70 mb-6">
            Perfect for getting started
          </p>

          <div className="text-4xl font-bold mb-6">
            ₹0
          </div>

          <ul className="space-y-3 text-secondary/70 flex-1">
            <li>✔ Up to 3 projects</li>
            <li>✔ Private projects</li>
            <li>✔ Basic dashboard</li>
            <li>✖ Public showcase</li>
            <li>✖ Client access</li>
          </ul>

          <Link
            href="/signup"
            className="mt-8 inline-block text-center px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Pro (Highlighted) */}
        <div className="bg-[#181818] p-8 rounded-2xl border border-accent scale-[1.03] flex flex-col">
          <span className="text-accent text-sm font-medium mb-2">
            Most Popular
          </span>

          <h2 className="text-xl font-medium mb-2">Pro</h2>
          <p className="text-secondary/70 mb-6">
            For serious builders & developers
          </p>

          <div className="text-4xl font-bold mb-6">
            ₹499<span className="text-lg text-secondary/70">/month</span>
          </div>

          <ul className="space-y-3 text-secondary/70 flex-1">
            <li>✔ Unlimited projects</li>
            <li>✔ Public project showcase</li>
            <li>✔ Client visibility</li>
            <li>✔ Advanced dashboard</li>
            <li>✔ Priority support</li>
          </ul>

          <Link
            href="/signup"
            className="mt-8 inline-block text-center px-6 py-3 rounded-lg bg-accent-gradient text-dark font-semibold hover:opacity-90 transition"
          >
            Upgrade to Pro
          </Link>
        </div>

        {/* Team */}
        <div className="bg-[#181818] p-8 rounded-2xl border border-white/10 flex flex-col">
          <h2 className="text-xl font-medium mb-2">Team</h2>
          <p className="text-secondary/70 mb-6">
            For startups & small teams
          </p>

          <div className="text-4xl font-bold mb-6">
            ₹1,499<span className="text-lg text-secondary/70">/month</span>
          </div>

          <ul className="space-y-3 text-secondary/70 flex-1">
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Role-based access</li>
            <li>✔ Admin controls</li>
            <li>✔ Dedicated support</li>
          </ul>

          <Link
            href="/contact"
            className="mt-8 inline-block text-center px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition"
          >
            Contact Sales
          </Link>
        </div>

      </section>

      {/* Comparison */}
      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          No hidden charges
        </h2>
        <p className="text-secondary/70 max-w-2xl mx-auto">
          Upgrade, downgrade, or cancel anytime.  
          We believe pricing should be transparent and fair.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center bg-[#181818] rounded-2xl p-12 border border-white/10">
        <h2 className="text-3xl font-semibold mb-4">
          Start building today
        </h2>
        <p className="text-secondary/70 mb-8">
          Join Dream Creation and turn ideas into real products.
        </p>
        <Link
          href="/signup"
          className="inline-block px-8 py-3 rounded-md bg-accent-gradient text-dark font-semibold hover:opacity-90 transition"
        >
          Get Started for Free
        </Link>
      </section>

    </div>
  );
}
