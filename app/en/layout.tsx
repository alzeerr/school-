import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institutional School Operating System | Executive Showcase",
  description:
    "A complete executive showcase for a premium White Label school operating system, from student affairs to governance and optional AI capabilities.",
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="english-site" lang="en" dir="ltr">{children}</div>;
}
