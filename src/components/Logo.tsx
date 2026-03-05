interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/urb360.svg"
      alt="Urban 360 Building Inspections"
      className={`block mt-[3px] ${className}`}
    />
  );
}
