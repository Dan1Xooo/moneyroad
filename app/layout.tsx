import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCalculatorBar } from "@/components/MobileCalculatorBar";
import { SITE_URL } from "@/src/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MoneyRoad — банковские выгоды, промокоды и способы заработка в интернете",
    template: "%s — MoneyRoad",
  },
  description:
    "MoneyRoad — проект Данила про банковские выгоды, промокоды, экономию на доставке, заработок на отзывах и банковских продуктах без передачи паролей и SMS-кодов.",
  openGraph: {
    title: "MoneyRoad — банковские выгоды, промокоды и способы заработка в интернете",
    description:
      "Проект Данила про банковские выгоды, промокоды, экономию, отзывы и заработок на банковских продуктах.",
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
    title: "MoneyRoad — банковские выгоды, промокоды и способы заработка в интернете",
    description:
      "Проект Данила про банковские выгоды, промокоды, экономию и способы заработка в интернете.",
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
    "Проект Данила про банковские выгоды, промокоды, экономию и способы заработка в интернете.",
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
