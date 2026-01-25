export default function Input({ type = "text", placeholder, name }: any) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-secondary placeholder:text-secondary/50 focus:outline-none focus:border-accent transition"
      required
    />
  );
}
