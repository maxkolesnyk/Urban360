import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Urban 360 Building Inspections | Melbourne Building Surveyors",
    template: "%s | Urban 360 Building Inspections",
  },
  description:
    "Expert-led building inspection services across Melbourne and Victoria. Pre-purchase inspections, building permits, dilapidation reports, and more. AS 4349.1 compliant.",
  keywords: [
    "building inspection Melbourne",
    "pre-purchase building inspection Melbourne",
    "building surveyor Melbourne",
    "dilapidation report Melbourne",
    "owner builder defect report Victoria",
    "timber pest inspection Melbourne",
    "AS 4349.1 building inspection",
    "Section 137B defect report Melbourne",
  ],
  openGraph: {
    title: "Urban 360 Building Inspections | Melbourne Building Surveyors",
    description:
      "Expert-led building inspection services across Melbourne and Victoria. Inspect to Protect.",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
