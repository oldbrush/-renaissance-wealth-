import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Start the conversation with Renaissance Wealth. Tell us about your needs and we'll connect you with our advisory team.",
};

export default function GetStartedLayout({ children }: { children: React.ReactNode }) {
  return children;
}
