"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const inputClass =
  "w-full px-4 py-3 bg-white border border-cream-dark/60 text-charcoal placeholder:text-warm-gray/50 focus:border-gold transition-colors";

export default function GetStartedPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Wire to backend / email service
    setSubmitted(true);
  }

  return (
    <>
      <section className="relative bg-navy pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-xs tracking-[0.25em] uppercase text-gold mb-3 sm:mb-4 block">
              Get Started
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Start the Conversation
            </h1>
            <span className="flourish mt-4 sm:mt-6" />
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
              We work exclusively with families who require discretion, demand integrity, and expect the highest standards of service. Tell us about yourself and we&rsquo;ll be in touch.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-off-white">
        <div className="mx-auto max-w-2xl px-5 sm:px-6 lg:px-8">
          {submitted ? (
            <FadeIn>
              <div className="text-center py-16">
                <h2 className="text-2xl sm:text-3xl text-navy">Thank you for your interest.</h2>
                <span className="flourish mx-auto mt-5" />
                <p className="mt-5 text-warm-gray leading-relaxed">
                  We&rsquo;ve received your information and will be in touch shortly to begin the conversation about your wealth strategy.
                </p>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <form onSubmit={handleSubmit} aria-label="Intake form" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm text-charcoal mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      autoComplete="given-name"
                      required
                      aria-required="true"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm text-charcoal mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      autoComplete="family-name"
                      required
                      aria-required="true"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-charcoal mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    aria-required="true"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-charcoal mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm text-charcoal mb-2">Area of Interest</label>
                  <select
                    id="interest"
                    name="interest"
                    className={inputClass}
                  >
                    <option value="">Select an area</option>
                    <option value="private-client">Private Client Services</option>
                    <option value="wealth-management">Wealth Management</option>
                    <option value="premium-financing">Premium Financing</option>
                    <option value="advisory-partnership">Advisory Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-charcoal mb-2">Tell us about your needs</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-navy text-white text-sm tracking-wide hover:bg-navy-light transition-colors"
                >
                  Submit Intake
                </button>
              </form>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  );
}
