import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/images/logo.svg"
      alt="Urban 360 Building Inspections"
      width={200}
      height={87}
      className={className}
      priority
    />
  );
}
