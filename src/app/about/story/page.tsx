import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description: "The origin and mission behind Renaissance Wealth.",
};

export default function StoryPage() {
  return (
    <>
      <PageHero
        image="/images/story.jpg"
        eyebrow="Our Story"
        title="Built on Purpose"
        subtitle="The origin and mission behind Renaissance Wealth."
      />

      <section className="py-24 lg:py-32 bg-off-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <div className="space-y-6">
              <p className="text-warm-gray leading-relaxed text-lg">
                Renaissance Wealth was founded with a singular vision: to create a financial advisory firm that treats every client relationship as a lifelong partnership, not a transaction.
              </p>
              <p className="text-warm-gray leading-relaxed">
                Our founder, Kuldeep S. Madan, recognized that ultra-high-net-worth families deserve more than conventional financial advice. They deserve a team that understands the full complexity of their lives&mdash;from multigenerational estate planning to the nuances of premium financing, from philanthropy to family governance.
              </p>
              <p className="text-warm-gray leading-relaxed">
                Today, Renaissance serves a select group of families and their advisors, delivering the kind of bespoke financial guidance that was once reserved for the largest institutions. We&rsquo;ve built our reputation on discretion, precision, and an unwavering commitment to our clients&rsquo; long-term success.
              </p>
              <p className="text-warm-gray leading-relaxed">
                Every member of our team has been chosen for their expertise, their integrity, and their dedication to the Renaissance standard: Expect Excellence. Experience Exceptional.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-navy">Meet the people behind Renaissance Wealth.</h2>
            <span className="flourish mx-auto mt-5" />
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about/team" className="px-8 py-3.5 bg-navy text-white text-sm tracking-wide hover:bg-navy-light transition-colors">
                Meet Our Team
              </Link>
              <Link href="/about/approach" className="px-8 py-3.5 border border-navy text-navy text-sm tracking-wide hover:bg-navy hover:text-white transition-colors">
                Our Approach
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
