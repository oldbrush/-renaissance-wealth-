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
  metadataBase: new URL("https://renaissance-wealth.vercel.app"),
  title: {
    default: "Renaissance Wealth | Expect Excellence. Experience Exceptional.",
    template: "%s | Renaissance Wealth",
  },
  description:
    "We guide financial decisions for ultra-high-net-worth individuals + families, delivering the highest standard of stewardship + service.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Renaissance Wealth",
    title: "Renaissance Wealth | Expect Excellence. Experience Exceptional.",
    description:
      "We guide financial decisions for ultra-high-net-worth individuals + families, delivering the highest standard of stewardship + service.",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "Renaissance Wealth" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renaissance Wealth | Expect Excellence. Experience Exceptional.",
    description:
      "We guide financial decisions for ultra-high-net-worth individuals + families, delivering the highest standard of stewardship + service.",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jost.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "Renaissance Wealth",
              description:
                "We guide financial decisions for ultra-high-net-worth individuals + families, delivering the highest standard of stewardship + service.",
              url: "https://renaissance-wealth.vercel.app",
              email: "advisors@renaissancewealth.com",
              sameAs: [],
              serviceType: [
                "Wealth Management",
                "Premium Financing",
                "Private Client Services",
                "Estate Planning",
                "Investment Advisory",
              ],
            }),
          }}
        />
      </head>
      <body className="font-body">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
