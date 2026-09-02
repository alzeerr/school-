import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "منصة تشغيل مدرسية مؤسسية | عرض تنفيذي",
  description:
    "عرض ترويجي تنفيذي لمنصة مدرسية متكاملة ذات علامة بيضاء، من شؤون الطالب حتى القيادة المؤسسية والذكاء الاصطناعي الاختياري.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
