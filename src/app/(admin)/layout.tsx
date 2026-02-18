import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Urban 360",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
