import Image from "next/image";

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
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* FORM CARD */}
        <div className="relative bg-[#181818] p-10 rounded-[32px] border border-white/20 shadow-xl">

          <h2 className="text-3xl font-semibold mb-8 text-accent">
            Send Us A Message
          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-4 rounded-xl bg-[#2a2a2a] border border-white/10 text-secondary placeholder:text-secondary/50 focus:outline-none focus:border-accent transition"
            />

            <input
              type="email"
              placeholder="Your E-mail"
              className="w-full px-5 py-4 rounded-xl bg-[#2a2a2a] border border-white/10 text-secondary placeholder:text-secondary/50 focus:outline-none focus:border-accent transition"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full px-5 py-4 rounded-xl bg-[#2a2a2a] border border-white/10 text-secondary placeholder:text-secondary/50 focus:outline-none focus:border-accent transition resize-none"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-accent-gradient text-dark font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT ILLUSTRATION + INFO */}
        <div className="flex flex-col items-center text-center gap-8">

          {/* IMAGE */}
          <Image
            src="/hero/contact.png"
            alt="Contact Support"
            width={420}
            height={420}
            className="object-contain"
            priority
          />

          {/* CONTACT INFO */}
          <div className="space-y-2 text-secondary/80">
            <p className="text-accent font-medium">
              Support@dreamcreations.in
            </p>
            <p>
              +91 7658009018
            </p>
          </div>

        </div>

      </section>
    </div>
  );
}
