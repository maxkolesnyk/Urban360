import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/images/urb360.svg"
      alt="Urban 360 Building Inspections"
      width={789}
      height={193}
      className={`block ${className}`}
      priority
    />
  );
}
