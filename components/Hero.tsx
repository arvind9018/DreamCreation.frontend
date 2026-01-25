export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
        Build Your <span className="text-accent">Dream Projects</span>
      </h1>

      <p className="max-w-2xl text-lg text-gray-400 mb-10">
        Dream Creation helps you create, manage and showcase your ideas
        like a real startup.
      </p>

      <button className="px-10 py-4 rounded-xl bg-accent-gradient text-dark font-bold text-lg shadow-lg hover:scale-105 transition">
        Get Started
      </button>

    </section>
  );
}
