import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wealth Management + Investments",
  description: "Managing significant wealth requires more than financial insight. It demands alignment with the full scope of your life.",
};

const strategies = [
  {
    title: "Portfolio Construction",
    desc: "Exceptional portfolios aren\u2019t assembled\u2014they\u2019re engineered. We start by aligning capital with purpose, designing diversified structures that balance growth, protection, and liquidity across your entire ecosystem.",
  },
  {
    title: "Portfolio Implementation",
    desc: "Precision matters\u2014especially at scale. We implement with intention, blending passive efficiency and active edge where it counts, supported by an independent, research-driven process.",
  },
  {
    title: "Investment Strategy",
    desc: "Discipline outperforms drama. Our investment approach is rooted in market efficiency, long-term alignment, and strategic calm\u2014not short-term speculation or noise chasing.",
  },
  {
    title: "Direct Indexing",
    desc: "Personalization is the new alpha. Direct indexing allows you to own the underlying securities of an index\u2014enabling tax-smart customization, value alignment, and seamless integration of legacy holdings.",
  },
  {
    title: "Alternative Investments",
    desc: "Alternative strategies demand discipline, not just access. We selectively source private opportunities that complement your public portfolio, enhance diversification, and match your risk profile and horizon.",
  },
];

const useCases = [
  { title: "Tax Transitioning", desc: "Integrate low-basis holdings with minimal disruption." },
  { title: "Tax-Efficient Management", desc: "Harvest losses to strategically offset gains." },
  { title: "Portfolio Customization", desc: "Apply filters, tilts, or exclusions aligned with your worldview." },
  { title: "Portfolio Completion", desc: "Diversify around concentrated positions while preserving upside." },
  { title: "Index Replication", desc: "Mirror benchmark performance, with greater control and efficiency." },
];

export default function WealthManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Wealth Management + Investments"
        title="Align Vision + Expectations"
        subtitle="Managing significant wealth requires more than financial insight. It demands alignment with the full scope of your life, family priorities, professional structures, and long-term vision."
      />

      <section className="py-6 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-xl text-navy font-heading italic">
              Your wealth is more than capital. It&rsquo;s a catalyst for legacy.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-off-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Strategies"
            title="We build strategies + solutions for complex lives"
            subtitle="Solutions that exist beyond simple models."
          />
          <div className="space-y-8 mt-4">
            {strategies.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="p-10 bg-white border border-cream-dark/40 hover:border-gold/50 hover:shadow-md transition-all duration-300">
                  <h3 className="text-2xl text-navy">{s.title}</h3>
                  <span className="flourish mt-4" />
                  <p className="mt-4 text-warm-gray leading-relaxed max-w-3xl">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Use Cases"
            title="Tailored to Your Needs"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {useCases.map((uc, i) => (
              <FadeIn key={uc.title} delay={i * 0.08}>
                <div className="p-8 bg-white border border-cream-dark/40">
                  <h3 className="text-lg text-navy">{uc.title}</h3>
                  <p className="mt-2 text-sm text-warm-gray leading-relaxed">{uc.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-white">
              We show up for the milestones that matter.
            </h2>
            <span className="flourish mx-auto mt-5" />
            <p className="mt-5 text-white/70 leading-relaxed max-w-2xl mx-auto">
              From family additions and business transitions to the quiet moments after loss, we&rsquo;re by your side&mdash;planning for what&rsquo;s next, celebrating the good, and offering calm when the path feels uncertain.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-navy">Start the conversation.</h2>
            <span className="flourish mx-auto mt-5" />
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started" className="px-8 py-3.5 bg-navy text-white text-sm tracking-wide hover:bg-navy-light transition-colors">
                Start Our Intake
              </Link>
              <Link href="/about/partners" className="px-8 py-3.5 border border-navy text-navy text-sm tracking-wide hover:bg-navy hover:text-white transition-colors">
                Partners + Platforms
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
