export default function ContactPage() {
  return (
    <div className="px-6 pt-32 pb-24 bg-dark text-secondary">

      {/* Header */}
      <section className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6">
          Contact <span className="text-accent">Us</span>
        </h1>
        <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
          Have a question, feedback, or idea?  
          We’d love to hear from you.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* Form Card */}
        <div className="bg-[#181818] p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-6">
            Send us a message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-secondary placeholder:text-secondary/50 focus:outline-none focus:border-accent transition"
            />

            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-secondary placeholder:text-secondary/50 focus:outline-none focus:border-accent transition"
            />

            <textarea
              rows={5}
              placeholder="Your message"
              className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-secondary placeholder:text-secondary/50 focus:outline-none focus:border-accent transition resize-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-accent-gradient text-dark font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6">
            Get in touch
          </h2>

          <p className="text-secondary/70 mb-8 leading-relaxed">
            Whether you’re a student, developer, or founder,
            feel free to reach out. We usually respond within 24 hours.
          </p>

          <ul className="space-y-4 text-secondary/80">
            <li>
              📧 <span className="font-medium text-secondary">Email:</span>{" "}
              support@dreamcreation.com
            </li>
            <li>
              📍 <span className="font-medium text-secondary">Location:</span>{" "}
              India
            </li>
            <li>
              ⏱ <span className="font-medium text-secondary">Response time:</span>{" "}
              Within 24 hours
            </li>
          </ul>
        </div>

      </section>
    </div>
  );
}
