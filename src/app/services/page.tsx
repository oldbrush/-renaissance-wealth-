import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Private Client Services",
  description: "Empowering founders, entrepreneurs, + ultra-affluent families to master their wealth and streamline financial complexities.",
};

const services = [
  { title: "Tax Strategy + Compliance", desc: "Multi-jurisdictional, tax-efficient strategies reducing drag and optimizing outcomes." },
  { title: "Estate + Entity Structure", desc: "Individualized planning fortifying legacies while aligning with tax law and family dynamics." },
  { title: "Strategic Business Planning", desc: "Building resilient structures for founders to scale, pivot, and perform." },
  { title: "Personal Financial Planning", desc: "Aligning cash flow, debt, liquidity, and long-term goals through intelligent planning." },
  { title: "Risk Management + Protection", desc: "Multi-layered liability coverage analyzing exposures across personal and professional worlds." },
  { title: "Wealth Management + Investments", desc: "Long-term discipline blended with tailored strategies reflecting ambitions and values." },
  { title: "Document + Data Management", desc: "Consolidating critical records and supporting fast, informed decisions." },
  { title: "Philanthropy + Legacy", desc: "Formalizing giving through foundations and donor-advised funds for generational impact." },
  { title: "Family Governance", desc: "Creating governance systems fostering shared decision-making and communication." },
  { title: "Planning for the Unknown", desc: "Tackling surprises with adaptable, resilient strategies." },
];

const clientTypes = [
  "Ultra-Affluent Families",
  "Founders Seeking Optimization",
  "Entrepreneurs Looking to Level Up",
  "Executives Focused on Growth",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="/images/services.jpg"
        eyebrow="Private Client Services"
        title="The Renaissance Advisory Model"
        subtitle="Empowering founders, entrepreneurs, + ultra-affluent families to master their wealth and streamline financial complexities."
      />

      <section className="py-24 lg:py-32 bg-off-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive Wealth Solutions"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {services.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 0.05}>
                <div className="p-8 bg-white border border-cream-dark/40 hover:border-gold/50 hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl text-navy">{svc.title}</h3>
                  <p className="mt-3 text-warm-gray leading-relaxed">{svc.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Built for Complex Lives"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {clientTypes.map((type, i) => (
              <FadeIn key={type} delay={i * 0.1}>
                <div className="p-8 bg-white text-center border border-cream-dark/40">
                  <h3 className="text-lg text-navy">{type}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <blockquote>
              <p className="text-2xl md:text-3xl text-white leading-relaxed font-heading italic">
                &ldquo;Our work reflects a deep respect for where you have been, and what the future may bring.&rdquo;
              </p>
              <footer className="mt-6">
                <span className="flourish mx-auto mb-4" />
                <p className="text-sm text-white/50 tracking-wide">
                  Kuldeep S. Madan, Founder + CEO
                </p>
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-navy">Ready to begin?</h2>
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
