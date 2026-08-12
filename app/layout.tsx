import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCalculatorBar } from "@/components/MobileCalculatorBar";
import { SITE_URL } from "@/src/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MoneyRoad — расчёт вознаграждения за банковские продукты",
    template: "%s — MoneyRoad",
  },
  description:
    "Рассчитайте предварительную сумму вознаграждения за дебетовые карты, бизнес-карты и другие финансовые предложения MoneyRoad.",
  openGraph: {
    title: "MoneyRoad — расчёт вознаграждения за банковские продукты",
    description:
      "Проверьте доступные финансовые предложения и рассчитайте предварительную сумму.",
    url: SITE_URL,
    siteName: "MoneyRoad",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/mr-logo.png",
        width: 1024,
        height: 1024,
        alt: "Логотип MoneyRoad",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "MoneyRoad",
    description: "Расчёт вознаграждения за финансовые продукты.",
    images: ["/mr-logo.png"],
  },
  icons: {
    icon: "/favicon-mr.png",
    shortcut: "/favicon-mr.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MoneyRoad",
  url: SITE_URL,
  inLanguage: "ru",
  description:
    "Сервис предварительного расчёта вознаграждений за финансовые предложения.",
  publisher: {
    "@type": "Organization",
    name: "MoneyRoad",
    url: SITE_URL,
    sameAs: ["https://t.me/MRMoneyRoad"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
        <MobileCalculatorBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
