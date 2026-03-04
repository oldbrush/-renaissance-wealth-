import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners + Platforms",
  description: "The institutional partners and platforms we leverage to deliver exceptional outcomes for our clients.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners + Platforms"
        title="Institutional Strength, Personal Touch"
        subtitle="The partners and platforms we leverage to deliver exceptional outcomes for our clients."
      />

      <section className="py-24 lg:py-32 bg-off-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-warm-gray leading-relaxed text-lg text-center">
              Renaissance works with a curated network of institutional partners, insurance carriers, custodians, and technology platforms to ensure every client engagement is supported by best-in-class infrastructure.
            </p>
            <p className="text-warm-gray leading-relaxed mt-6 text-center">
              Our platform integrations enable seamless data management, consolidated reporting, and real-time visibility into your financial ecosystem.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-navy">Learn more about our capabilities.</h2>
            <span className="flourish mx-auto mt-5" />
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about/approach" className="px-8 py-3.5 bg-navy text-white text-sm tracking-wide hover:bg-navy-light transition-colors">
                Our Approach
              </Link>
              <Link href="/get-started" className="px-8 py-3.5 border border-navy text-navy text-sm tracking-wide hover:bg-navy hover:text-white transition-colors">
                Get Started
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
