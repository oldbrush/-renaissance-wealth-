import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-off-white pt-20">
      <div className="mx-auto max-w-2xl px-5 sm:px-6 lg:px-8 text-center">
        <span className="text-xs tracking-[0.25em] uppercase text-gold mb-4 block">404</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-navy">Page Not Found</h1>
        <span className="flourish mx-auto mt-6" />
        <p className="mt-6 text-warm-gray leading-relaxed text-base sm:text-lg">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block px-8 py-3.5 bg-navy text-white text-sm tracking-wide hover:bg-navy-light transition-colors"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
