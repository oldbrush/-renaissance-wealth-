import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Disclosures",
  description: "Important regulatory disclosures and legal information.",
};

export default function DisclosuresPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Disclosures"
      />

      <section className="py-24 lg:py-32 bg-off-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <div className="space-y-8 text-warm-gray leading-relaxed">
              <div>
                <h2 className="text-xl text-navy mb-4 font-heading">Important Information</h2>
                <p>
                  The information provided is not written or intended as specific tax or legal advice. Neither Renaissance Wealth nor MassMutual, its subsidiaries, employees, and representatives are authorized to give tax or legal advice. Individuals are encouraged to seek advice from their own tax or legal counsel.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-navy mb-4 font-heading">Estate Planning</h2>
                <p>
                  Individuals involved in the estate planning process should work with an estate planning team, including their own personal legal or tax counsel.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-navy mb-4 font-heading">Securities</h2>
                <p>
                  Securities and investment advisory services offered through qualified registered representatives of MML Investors Services, LLC. Member SIPC. Renaissance Wealth is not a subsidiary or affiliate of MML Investors Services, LLC, or its affiliated companies.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-navy mb-4 font-heading">Office Location</h2>
                <p>
                  OSJ is located at 48 S. Service Road, Suite 400, Melville, NY 11747; (516) 391-0300.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-navy mb-4 font-heading">Premium Financing</h2>
                <p>
                  Premium financing involves three primary strategies: traditional insurance ownership, premium financing at inception, and exit strategies for loan repayment. Each strategy carries its own considerations, risks, and potential benefits that should be thoroughly discussed with your advisory team.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-navy mb-4 font-heading">Endorsements</h2>
                <p>
                  Endorsements are provided by select Financial Professionals who have done joint work with Renaissance Wealth in the past.
                </p>
              </div>

              <p className="text-sm text-warm-gray/60 pt-8 border-t border-cream-dark/40">
                CRN202705-9305844
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
