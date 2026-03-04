import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meet Our Team",
  description: "Chosen for their collective experience + unmatched dedication to our clients.",
};

const leadership = [
  {
    name: "Kuldeep S. Madan",
    role: "Founder + CEO",
    bio: "A visionary leader who founded Renaissance Wealth to redefine how ultra-high-net-worth families experience financial guidance. Kuldeep brings decades of experience in wealth management, premium financing, and strategic planning.",
    initials: "KM",
  },
  {
    name: "Aaron Hughes",
    role: "COO + Senior Partner",
    bio: "Aaron oversees operations and client delivery, ensuring every engagement meets the Renaissance standard of excellence. His deep expertise in financial services drives operational precision across the firm.",
    initials: "AH",
  },
  {
    name: "Alex Aderman",
    role: "Senior Partner + Advisor",
    bio: "Alex brings a consultative approach to complex wealth challenges, working closely with clients and their advisory teams to design and implement tailored financial strategies.",
    initials: "AA",
  },
  {
    name: "Rita Ryan",
    role: "CFO + Head of Private Client Services",
    bio: "Rita leads private client services with a commitment to fiduciary responsibility, technical expertise, and trust\u2014the three pillars she believes define effective wealth management.",
    initials: "RR",
  },
  {
    name: "Abhishek Joshi",
    role: "CTO",
    bio: "Abhishek leads the technology vision at Renaissance, building systems that enhance client experience, data management, and operational efficiency across the firm.",
    initials: "AJ",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet Our Team"
        title="Expertise You Deserve"
        subtitle="Chosen for their collective experience + unmatched dedication to our clients. Our team of specialists has been carefully selected based on their knowledge, skill, and commitment."
      />

      <section className="py-24 lg:py-32 bg-off-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="Our Team"
          />
          <div className="space-y-8 mt-4">
            {leadership.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.08}>
                <div className="flex flex-col md:flex-row gap-8 p-10 bg-white border border-cream-dark/40">
                  <div className="shrink-0 w-28 h-28 rounded-full bg-navy flex items-center justify-center">
                    <span className="text-2xl text-gold font-heading">{member.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl text-navy">{member.name}</h3>
                    <p className="text-sm text-gold tracking-wide mt-1">{member.role}</p>
                    <p className="mt-4 text-warm-gray leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-navy">Work with our team.</h2>
            <span className="flourish mx-auto mt-5" />
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started" className="px-8 py-3.5 bg-navy text-white text-sm tracking-wide hover:bg-navy-light transition-colors">
                Get Started
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
