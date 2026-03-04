import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advisory Partnerships",
  description: "We only partner with advisors who share our values + uphold the standards required to guide affluent families.",
};

export default function AdvisoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Advisory Partnerships"
        title="Selective by Design"
        subtitle="We only partner with advisors who share our values + uphold the standards required to guide affluent families."
      />

      <section className="py-24 lg:py-32 bg-off-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <div className="prose prose-lg max-w-none">
              <p className="text-warm-gray leading-relaxed text-lg">
                At Renaissance, advisory partnerships are not transactional. They are long-term relationships built on mutual respect, shared values, and a unified commitment to the client&rsquo;s best interest.
              </p>
              <p className="text-warm-gray leading-relaxed mt-6">
                We selectively partner with CPAs, attorneys, family offices, and independent advisors who bring the same level of care and expertise that we demand of ourselves. Together, we create integrated strategies that serve the full complexity of our clients&rsquo; financial lives.
              </p>
              <p className="text-warm-gray leading-relaxed mt-6">
                Our partnerships are characterized by open communication, rigorous planning, and a shared dedication to outcomes that transcend the ordinary.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-navy">Become a partner.</h2>
            <span className="flourish mx-auto mt-5" />
            <p className="mt-5 text-warm-gray leading-relaxed">
              If your practice serves affluent families and you&rsquo;re looking for a collaborative partner, we&rsquo;d like to hear from you.
            </p>
            <Link href="/get-started" className="mt-8 inline-block px-8 py-3.5 bg-navy text-white text-sm tracking-wide hover:bg-navy-light transition-colors">
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
