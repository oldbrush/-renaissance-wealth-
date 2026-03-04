"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, align = "center", light = false }: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${alignClass} mb-12`}
    >
      {eyebrow && (
        <span className={`text-xs tracking-[0.25em] uppercase mb-3 ${light ? "text-gold-light" : "text-gold"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl leading-tight ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      <span className="flourish mt-5" />
      {subtitle && (
        <p className={`mt-5 text-lg max-w-2xl leading-relaxed ${light ? "text-white/70" : "text-warm-gray"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
