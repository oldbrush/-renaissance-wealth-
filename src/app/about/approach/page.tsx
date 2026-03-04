import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Approach",
  description: "A process built for managing complexity, established to create enduring partnerships.",
};

const phases = [
  {
    num: "01",
    title: "Discover + Align",
    tagline: "Relationships drive results",
    desc: "Every engagement begins with a conversation\u2014or several. We take the time to understand what matters most to you: your values, family dynamics, financial history, goals, and the goals you\u2019re working toward. If you\u2019re coming through a trusted advisor\u2014a CPA, attorney, or advisor\u2014we align with them early. We educate your team on our process, coordinate strategy from the outset, and ensure everyone is working toward the same outcome.",
  },
  {
    num: "02",
    title: "Organize",
    tagline: "Turn complexity into clarity",
    desc: "You\u2019ve likely accumulated complexity across multiple entities, accounts, policies, and jurisdictions. Our job is to make sense of it all and bring it into view. We map your balance sheet, clarify ownership structures, assess current protections, and gather what\u2019s often scattered or siloed. This stage includes a full review of financial documents, legal entities, business interests, liquidity positions, income streams, and tax exposures.",
  },
  {
    num: "03",
    title: "Analyze",
    tagline: "From insight to opportunity",
    desc: "With everything organized, we evaluate what\u2019s working, what\u2019s missing, and what may be costing you more than it should\u2014in tax, risk, or opportunity. Whether it\u2019s identifying opportunities to reduce exposure across jurisdictions, optimizing liquidity, structuring assets efficiently, or building succession frameworks, our team creates scenario-based options reflecting your risk tolerance, lifestyle goals, and long-term legacy.",
  },
  {
    num: "04",
    title: "Design",
    tagline: "Where strategy becomes structure",
    desc: "We collaborate with you and your existing advisors to craft solutions around your needs. Some clients engage us for a full planning relationship, while others come for high-impact insurance solutions or an overhaul of their investment strategy. This phase is tailored, measured, and thoughtful. We\u2019ll walk you through every recommendation and design a strategy that feels as aligned with your values as it is with your numbers.",
  },
  {
    num: "05",
    title: "Execute",
    tagline: "From ideas to action \u2013 without the friction",
    desc: "Once you\u2019re ready, we take full responsibility for implementation. That may include negotiating bank financing, coordinating with attorneys to execute trust documents, restructuring investment allocations, or reviewing coverages. You\u2019ll always be informed\u2014but never overwhelmed. We preserve your time while ensuring every detail is managed with precision and discretion.",
  },
  {
    num: "06",
    title: "Steward",
    tagline: "Long-term planning. Lifelong partnership.",
    desc: "We continuously monitor your strategy, review new legislation, adjust for life transitions, and revisit performance across your portfolio, policies, and protections. This includes proactive updates, collaboration sessions, family governance support, tax-aware investment strategy, and continuity planning across generations. You\u2019re not just building a plan. You\u2019re building a partnership.",
  },
];

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Approach"
        title="The Renaissance Method"
        subtitle="A process built for managing complexity, established to create enduring partnerships. Every Renaissance engagement requires two attributes: shared knowledge + trust."
      />

      <section className="py-24 lg:py-32 bg-off-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-lg text-warm-gray leading-relaxed text-center max-w-3xl mx-auto">
              At Renaissance, the path forward is never one-size-fits-all. The Renaissance Method offers a tested, tailored process for navigating financial complexity with clarity and unlocking the solutions most families never access.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Six Phases"
            title="A Partnership in Every Step"
          />
          <div className="space-y-12 mt-8">
            {phases.map((phase, i) => (
              <FadeIn key={phase.title} delay={i * 0.05}>
                <div className="p-10 bg-white border border-cream-dark/40">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-4xl font-heading text-gold/40">{phase.num}</span>
                    <h3 className="text-2xl text-navy">{phase.title}</h3>
                  </div>
                  <p className="text-sm text-gold tracking-wide italic mb-4">&ldquo;{phase.tagline}&rdquo;</p>
                  <p className="text-warm-gray leading-relaxed">{phase.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <blockquote>
              <p className="text-2xl md:text-3xl text-white leading-relaxed font-heading italic">
                &ldquo;What I respect most about Renaissance is their care for their clientele, which doesn&rsquo;t vanish after inception. It doesn&rsquo;t surprise me that their client relationships often become long-lasting friendships.&rdquo;
              </p>
              <footer className="mt-6">
                <span className="flourish mx-auto mb-4" />
                <p className="text-sm text-white/50 tracking-wide">
                  Joe Gaglio, Founder + CEO at Shepherd Wealth Group
                </p>
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-navy">Experience the Renaissance difference.</h2>
            <span className="flourish mx-auto mt-5" />
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started" className="px-8 py-3.5 bg-navy text-white text-sm tracking-wide hover:bg-navy-light transition-colors">
                Start Our Intake
              </Link>
              <Link href="/about/team" className="px-8 py-3.5 border border-navy text-navy text-sm tracking-wide hover:bg-navy hover:text-white transition-colors">
                Meet Our Team
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
