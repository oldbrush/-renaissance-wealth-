"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const aboutLinks = [
  { href: "/about/team", label: "Meet Our Team" },
  { href: "/about/advisory", label: "Advisory Partnerships" },
  { href: "/about/partners", label: "Partners + Platforms" },
  { href: "/about/approach", label: "Our Approach" },
  { href: "/about/story", label: "Our Story" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-cream-dark/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl tracking-wider text-navy font-heading">
            RENAISSANCE <span className="text-gold">WEALTH</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm tracking-wide text-charcoal hover:text-gold transition-colors">
              Home
            </Link>

            {/* About dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="text-sm tracking-wide text-charcoal hover:text-gold transition-colors flex items-center gap-1">
                About Us
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-sm shadow-lg border border-cream-dark/30 py-2"
                  >
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-5 py-2.5 text-sm text-charcoal hover:text-gold hover:bg-cream/50 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/services" className="text-sm tracking-wide text-charcoal hover:text-gold transition-colors">
              Private Client Services
            </Link>
            <Link href="/wealth-management" className="text-sm tracking-wide text-charcoal hover:text-gold transition-colors">
              Wealth Management
            </Link>
            <Link href="/premium-financing" className="text-sm tracking-wide text-charcoal hover:text-gold transition-colors">
              Premium Financing
            </Link>
            <Link
              href="/get-started"
              className="ml-2 px-6 py-2.5 bg-navy text-white text-sm tracking-wide hover:bg-navy-light transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-cream-dark/30 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <Link href="/" onClick={() => setMobileOpen(false)} className="block text-sm tracking-wide text-charcoal">Home</Link>
              <div className="space-y-2">
                <p className="text-sm font-medium tracking-wide text-navy">About Us</p>
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block pl-4 text-sm text-warm-gray hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link href="/services" onClick={() => setMobileOpen(false)} className="block text-sm tracking-wide text-charcoal">Private Client Services</Link>
              <Link href="/wealth-management" onClick={() => setMobileOpen(false)} className="block text-sm tracking-wide text-charcoal">Wealth Management</Link>
              <Link href="/premium-financing" onClick={() => setMobileOpen(false)} className="block text-sm tracking-wide text-charcoal">Premium Financing</Link>
              <Link
                href="/get-started"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-6 py-3 bg-navy text-white text-sm tracking-wide"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
