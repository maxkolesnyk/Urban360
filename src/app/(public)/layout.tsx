import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABar from "@/components/CTABar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-[85px] pb-[72px] lg:pb-0">{children}</main>
      <Footer />
      <CTABar />
    </>
  );
}
