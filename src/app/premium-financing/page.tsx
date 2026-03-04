import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Premium Financing",
  description: "Our process removes the guesswork from Premium Finance Life Insurance, combining a calculated, conservative approach with the concierge experience advisors and clients deserve.",
};

const benefits = [
  {
    title: "Estate Preservation",
    desc: "Assists with generational wealth transfer with lower cash outlay, maintains estate liquidity for taxes and debts, replaces wealth lost to estate taxes through irrevocable trust planning.",
  },
  {
    title: "Tax Efficiency",
    desc: "Paying interest instead of premiums and proper ownership structuring minimizes gift and estate taxes. Life insurance proceeds can be tax-free when properly structured.",
  },
  {
    title: "Retained Capital",
    desc: "Enables ultra-affluent individuals earning double-digit returns to keep capital working in high-returning asset classes rather than redirecting to insurance premiums.",
  },
  {
    title: "Flexibility",
    desc: "Essential for founders and entrepreneurs; preserves cash flow, scales with evolving needs, extends across generations, allows exit option selection.",
  },
];

const risks = [
  { title: "Interest Rates", desc: "Mitigated through rate caps, swaps, or fixed rate arrangements." },
  { title: "Policy Performance", desc: "Addressed via carriers with strong track records." },
  { title: "Collateral Risk", desc: "Managed through careful sinking fund design." },
  { title: "Exit Strategy", desc: "Conservative benchmark of 10\u201318 years from inception." },
];

const processSteps = [
  { num: "01", title: "Advisor Education", desc: "We educate your advisory team on the premium financing process and qualification criteria." },
  { num: "02", title: "Information Intake", desc: "Gather comprehensive client data to assess suitability and structure." },
  { num: "03", title: "Client Education", desc: "Walk clients through the mechanics, risks, and potential outcomes." },
  { num: "04", title: "Model Refinement", desc: "Build and refine financial models with institutional-grade precision." },
  { num: "05", title: "Underwriting + Execution", desc: "Coordinate with carriers and lenders for seamless implementation." },
  { num: "06", title: "Lifetime Stewardship", desc: "Ongoing protection management and strategy adjustment." },
];

export default function PremiumFinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Premium Financing"
        title="Protect + Preserve"
        subtitle="Our process removes the guesswork from Premium Finance Life Insurance, combining a calculated, conservative approach with the concierge experience advisors and clients deserve."
      />

      <section className="py-24 lg:py-32 bg-off-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Premium Financing?"
            title="Life Insurance for the Ultra-Affluent"
            subtitle="For ultra-affluent clients needing significant life insurance, premium financing allows appreciable assets to remain invested rather than being diverted to expensive policy premiums."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.1}>
                <div className="p-10 bg-white border border-cream-dark/40 hover:border-gold/50 hover:shadow-md transition-all duration-300 h-full">
                  <h3 className="text-2xl text-navy">{b.title}</h3>
                  <span className="flourish mt-4" />
                  <p className="mt-4 text-warm-gray leading-relaxed">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-navy">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            light
            eyebrow="Risk Mitigation"
            title="Every Risk, Addressed"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {risks.map((r, i) => (
              <FadeIn key={r.title} delay={i * 0.1}>
                <div className="p-8 bg-white/5 border border-white/10 hover:border-gold/30 transition-colors">
                  <h3 className="text-lg text-white">{r.title}</h3>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">{r.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="From Concept to Lifetime Protection"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {processSteps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.08}>
                <div className="p-8 bg-white border border-cream-dark/40">
                  <span className="text-3xl font-heading text-gold/40">{step.num}</span>
                  <h3 className="mt-3 text-xl text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm text-warm-gray leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-navy">Explore premium financing for your clients.</h2>
            <span className="flourish mx-auto mt-5" />
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started" className="px-8 py-3.5 bg-navy text-white text-sm tracking-wide hover:bg-navy-light transition-colors">
                Start Our Intake
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
