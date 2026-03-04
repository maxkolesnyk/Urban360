interface LogoProps {
  className?: string;
  color?: "dark" | "light";
}

export default function Logo({ className = "", color = "dark" }: LogoProps) {
  const primary = color === "dark" ? "#0a0a0a" : "#ffffff";
  const secondary = color === "dark" ? "#555555" : "rgba(255,255,255,0.6)";

  return (
    <svg
      viewBox="0 0 180 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Urban 360 Building Inspections logo"
      className={className}
    >
      {/* URBAN */}
      <text
        x="0"
        y="22"
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        fontSize="24"
        fontWeight="800"
        letterSpacing="0.18em"
        fill={primary}
      >
        URBAN
      </text>

      {/* 360 - rotated 90° clockwise */}
      <text
        x="112"
        y="22"
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        fontSize="24"
        fontWeight="300"
        letterSpacing="0.06em"
        fill={secondary}
        transform="rotate(90, 112, 14)"
      >
        360
      </text>

      {/* BUILDING INSPECTIONS */}
      <text
        x="1"
        y="55"
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        fontSize="7.5"
        fontWeight="500"
        letterSpacing="0.28em"
        fill={secondary}
      >
        BUILDING INSPECTIONS
      </text>
    </svg>
  );
}
