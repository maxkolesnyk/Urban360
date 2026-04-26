interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function Logo({ className = "", variant = "light" }: LogoProps) {
  const src =
    variant === "dark"
      ? "/images/urban360-logo-dark-v3.webp"
      : "/images/urban360-logo-v3.webp";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Urban 360 Building Inspections"
      className={`block ${className}`}
      width={1200}
      height={190}
    />
  );
}
