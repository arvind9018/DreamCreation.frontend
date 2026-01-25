import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  points?: string[];
  link: string;
};

export default function ServiceCard({
  title,
  description,
  points = [],
  link,
}: ServiceCardProps) {
  return (
    <div className="bg-[#181818] p-6 rounded-xl border border-white/10 hover:border-accent transition flex flex-col">
      <h3 className="text-xl font-medium mb-3">
        {title}
      </h3>

      <p className="text-secondary/70 mb-4">
        {description}
      </p>

      {points.length > 0 && (
        <ul className="text-secondary/70 text-sm space-y-2 mb-6">
          {points.map((point, i) => (
            <li key={i}>• {point}</li>
          ))}
        </ul>
      )}

      <Link
        href={link}
        className="mt-auto text-accent hover:underline font-medium"
      >
        Learn more →
      </Link>
    </div>
  );
}
