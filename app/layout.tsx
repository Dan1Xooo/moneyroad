import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCalculatorBar } from "@/components/MobileCalculatorBar";
import { SITE_URL } from "@/src/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MoneyRoad — банковские выгоды, промокоды и простая подработка",
    template: "%s — MoneyRoad",
  },
  description:
    "MoneyRoad — личный проект Данила: актуальные банковские предложения, промокоды, подработка, предварительный расчёт выгоды и безопасный порядок действий без передачи паролей и SMS-кодов.",
  openGraph: {
    title: "MoneyRoad — банковские выгоды, промокоды и простая подработка",
    description:
      "Личный проект Данила: актуальные банковские предложения, промокоды, подработка и безопасный порядок действий без передачи паролей и SMS-кодов.",
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
    title: "MoneyRoad — банковские выгоды, промокоды и простая подработка",
    description:
      "Личный проект Данила с актуальными предложениями, предварительным расчётом и понятным порядком действий.",
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
    "Личный проект Данила про банковские выгоды, промокоды, простую подработку и безопасный порядок действий.",
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
