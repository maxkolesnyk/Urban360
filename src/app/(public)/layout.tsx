"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABar from "@/components/CTABar";

// Pages with full-bleed hero sections that extend behind the header
const FULL_BLEED_PAGES = ["/", "/about", "/services"];

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isFullBleed = FULL_BLEED_PAGES.includes(pathname);

  return (
    <>
      <Header />
      <main className={`pb-[72px] lg:pb-0 ${isFullBleed ? "" : "pt-[85px]"}`}>
        {children}
      </main>
      <Footer />
      <CTABar />
    </>
  );
}
