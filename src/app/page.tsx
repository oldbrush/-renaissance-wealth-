"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";

const processSteps = [
  { num: "01", name: "Discover", desc: "Understand your values, goals, and financial landscape." },
  { num: "02", name: "Align", desc: "Coordinate with your advisors and align on shared objectives." },
  { num: "03", name: "Analyze", desc: "Evaluate what\u2019s working, what\u2019s missing, and what\u2019s possible." },
  { num: "04", name: "Design", desc: "Craft tailored solutions around your needs and values." },
  { num: "05", name: "Execute", desc: "Implement with precision, discretion, and full accountability." },
  { num: "06", name: "Steward", desc: "Continuously monitor, adjust, and evolve your strategy." },
];

const services = [
  {
    title: "Premium Financing",
    desc: "Our process removes the guesswork from Premium Finance Life Insurance, combining a calculated, conservative approach with the concierge experience advisors and clients deserve.",
    href: "/premium-financing",
  },
  {
    title: "Private Client Services",
    desc: "We are a trusted partner for a select group of successful individuals + families, guiding decisions with the care, discretion, and creativity that complex wealth demands.",
    href: "/services",
  },
  {
    title: "Wealth Management",
    desc: "Managing significant wealth requires more than financial insight. It demands alignment with the full scope of your life, family priorities, professional structures, and long-term vision.",
    href: "/wealth-management",
  },
];

const team = [
  { name: "Kuldeep S. Madan", role: "Founder + CEO" },
  { name: "Aaron Hughes", role: "COO + Senior Partner" },
  { name: "Alex Aderman", role: "Senior Partner + Advisor" },
  { name: "Abhishek Joshi", role: "CTO" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/60 to-navy/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-6 block">
              Renaissance Wealth
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-4">
              Expect Excellence.
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white/60 leading-[1.1] mb-8 italic">
              Experience Exceptional.
            </h1>
            <span className="flourish mx-auto" />
            <p className="mt-8 text-lg lg:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              We guide financial decisions for ultra-high-net-worth individuals + families, delivering the highest standard of stewardship + service.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-started"
                className="px-8 py-3.5 bg-gold text-navy text-sm tracking-wide font-medium hover:bg-gold-light transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/about/approach"
                className="px-8 py-3.5 border border-white/30 text-white text-sm tracking-wide hover:border-gold hover:text-gold transition-colors"
              >
                Our Approach
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-24 lg:py-32 bg-off-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Aligning People + Ideas + Assets"
            subtitle="Every detail considered. Every outcome examined. We work closely with our clients to organize often complex financial structures and support investment decisions + lifestyle management in an ever-evolving landscape of needs, priorities, and expectations."
          />
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Renaissance Method"
            title="Our Curated Process"
            subtitle="Creating complete financial confidence."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {processSteps.map((step, i) => (
              <FadeIn key={step.name} delay={i * 0.1}>
                <div className="group p-8 bg-white rounded-sm border border-cream-dark/40 hover:border-gold/50 hover:shadow-lg transition-all duration-300">
                  <span className="text-3xl font-heading text-gold/40 group-hover:text-gold transition-colors">
                    {step.num}
                  </span>
                  <h3 className="mt-3 text-xl text-navy">{step.name}</h3>
                  <p className="mt-2 text-sm text-warm-gray leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-off-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="We Solve for the Unknown"
            subtitle="From financial changes to unexpected turns, we prepare not just for the expected but for the unknown."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
            {services.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 0.1}>
                <Link href={svc.href} className="group block h-full">
                  <div className="h-full p-10 bg-white border border-cream-dark/40 hover:border-gold/50 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-2xl text-navy group-hover:text-gold transition-colors">
                      {svc.title}
                    </h3>
                    <span className="flourish mt-4" />
                    <p className="mt-5 text-warm-gray leading-relaxed">{svc.desc}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm text-gold tracking-wide">
                      Learn More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 lg:py-32 bg-navy">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            light
            eyebrow="Leadership"
            title="We&rsquo;re visionaries with the expertise you deserve."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-navy-light border-2 border-gold/30 flex items-center justify-center">
                    <span className="text-2xl text-gold font-heading">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg text-white">{member.name}</h3>
                  <p className="mt-1 text-sm text-white/50">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <blockquote>
              <p className="text-2xl md:text-3xl text-navy leading-relaxed font-heading italic">
                &ldquo;Built on trust, our work reflects your values, legacy, and life.&rdquo;
              </p>
              <footer className="mt-6">
                <span className="flourish mx-auto mb-4" />
                <p className="text-sm text-warm-gray tracking-wide">
                  Kuldeep S. Madan, Founder + CEO
                </p>
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-off-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-navy">Your legacy deserves more than a plan.</h2>
            <span className="flourish mx-auto mt-5" />
            <p className="mt-5 text-warm-gray leading-relaxed max-w-xl mx-auto">
              We work exclusively with families who require discretion, demand integrity, and expect the highest standards of service.
            </p>
            <Link
              href="/get-started"
              className="mt-8 inline-block px-10 py-4 bg-navy text-white text-sm tracking-wide hover:bg-navy-light transition-colors"
            >
              Start Our Intake
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
