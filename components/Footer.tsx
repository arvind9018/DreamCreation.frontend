import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] border-t border-white/10 px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid gap-12 md:grid-cols-3 items-start">

          {/* BRAND */}
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Dream Creation helps you build, manage, and showcase
              your ideas like a real startup.
            </p>
          </div>

          {/* NAV LINKS */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-sky-400 transition">Home</Link></li>
              <li><Link href="/services" className="hover:text-sky-400 transition">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-sky-400 transition">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-sky-400 transition">Blog</Link></li>
            </ul>
          </div>

          

          

          {/* ADDRESS + SOCIAL */}
          <div className="space-y-6">
            <div className="text-sm text-sky-400 leading-relaxed">
              <p>Abc homes, Sector 32,</p>
              <p>Ludhiana, Punjab, India</p>
              <p className="text-gray-400">Pin code : 141010</p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
  {[
    { icon: <FaPhoneAlt />, link: "tel:+911234567890" },
    { icon: <FaEnvelope />, link: "mailto:info@dreamcreation.com" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
  ].map((item, i) => (
    <a
      key={i}
      href={item.link}
      target="_blank"
      className="
      p-3 rounded-xl
      bg-[#111]
      border border-sky-400/30
      text-white text-lg
      shadow-[0_0_15px_rgba(56,189,248,0.35)]
      hover:scale-110 hover:text-sky-400
      transition
      "
    >
      {item.icon}
    </a>
  ))}
</div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Dream Creation. Made with{" "}
<span className="heart">❤️</span>

        </div>
      </div>
    </footer>
  );
}
