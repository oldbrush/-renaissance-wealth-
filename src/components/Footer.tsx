import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl tracking-wider text-white font-heading">
              RENAISSANCE <span className="text-gold">WEALTH</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Guiding financial decisions for ultra-high-net-worth individuals + families.
            </p>
            <a
              href="mailto:advisors@renaissancewealth.com"
              className="mt-4 inline-block text-sm text-gold hover:text-gold-light transition-colors"
            >
              advisors@renaissancewealth.com
            </a>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4 font-heading">Explore</p>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-sm hover:text-gold transition-colors">Private Client Services</Link></li>
              <li><Link href="/wealth-management" className="text-sm hover:text-gold transition-colors">Wealth Management</Link></li>
              <li><Link href="/premium-financing" className="text-sm hover:text-gold transition-colors">Premium Financing</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4 font-heading">Quick Links</p>
            <ul className="space-y-3">
              <li><Link href="/disclosures" className="text-sm hover:text-gold transition-colors">Licensing</Link></li>
              <li><a href="https://brokercheck.finra.org/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gold transition-colors" aria-label="BrokerCheck by FINRA (opens in new tab)">BrokerCheck by FINRA <span aria-hidden="true" className="text-[10px]">&#8599;</span></a></li>
              <li><Link href="/disclosures" className="text-sm hover:text-gold transition-colors">Customer Relationship Summary</Link></li>
              <li><Link href="/disclosures" className="text-sm hover:text-gold transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4 font-heading">Get in Touch</p>
            <p className="text-sm leading-relaxed text-white/60 mb-4">
              Your legacy deserves more than a plan.
            </p>
            <Link
              href="/get-started"
              className="inline-block px-6 py-2.5 border border-gold text-gold text-sm tracking-wide hover:bg-gold hover:text-navy transition-colors"
            >
              Start Our Intake
            </Link>
          </div>
        </div>

        {/* Regulatory */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs leading-relaxed text-white/40 max-w-4xl">
            Securities and investment advisory services offered through qualified registered representatives of MML Investors Services, LLC. Member SIPC. Renaissance Wealth is not a subsidiary or affiliate of MML Investors Services, LLC, or its affiliated companies.
          </p>
          <p className="mt-4 text-xs text-white/30">
            &copy; {new Date().getFullYear()} Renaissance Wealth &middot; All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
