"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageHero({ eyebrow, title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative bg-navy pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover object-center opacity-25"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70" />
        </>
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <span className="text-xs tracking-[0.25em] uppercase text-gold mb-3 sm:mb-4 block">
              {eyebrow}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            {title}
          </h1>
          <span className="flourish mt-4 sm:mt-6" />
          {subtitle && (
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
