export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Icon */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 5C25.7 5 6 24.7 6 49s19.7 44 44 44c18.6 0 34.5-11.5 41-27.8"
          stroke="#38BDF8"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M38 30h14c11 0 18 7 18 19s-7 19-18 19H38V30z"
          stroke="#38BDF8"
          strokeWidth="8"
          strokeLinejoin="round"
        />
      </svg>

      {/* Text */}
      <div className="leading-none">
        <p className="text-lg font-semibold text-sky-400">
          Dream
        </p>
        <p className="text-[10px] tracking-[0.3em] text-gray-300">
          CREATIONS
        </p>
      </div>
    </div>
  );
}
