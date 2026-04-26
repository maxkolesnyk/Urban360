interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/urban360-logo.webp"
      alt="Urban 360 Building Inspections"
      className={`block ${className}`}
      width={1200}
      height={190}
    />
  );
}
