import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "Renaissance Wealth | Expect Excellence. Experience Exceptional.",
    template: "%s | Renaissance Wealth",
  },
  description:
    "We guide financial decisions for ultra-high-net-worth individuals + families, delivering the highest standard of stewardship + service.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jost.variable}>
      <body className="font-body">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
