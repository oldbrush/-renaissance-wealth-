import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
};

export default function ThanksPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-off-white pt-20">
      <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
        <FadeIn>
          <span className="text-xs tracking-[0.25em] uppercase text-gold mb-4 block">Thank You</span>
          <h1 className="text-4xl md:text-5xl text-navy">We appreciate your interest.</h1>
          <span className="flourish mx-auto mt-6" />
          <p className="mt-6 text-warm-gray leading-relaxed text-lg">
            Thank you for reaching out. A member of our team will review your information and be in touch shortly to begin the conversation about your wealth strategy.
          </p>
          <Link
            href="/"
            className="mt-10 inline-block px-8 py-3.5 bg-navy text-white text-sm tracking-wide hover:bg-navy-light transition-colors"
          >
            Return Home
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
