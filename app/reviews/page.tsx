import type { Metadata } from "next";
import { ArrowUpRight } from "@/components/icons";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Отзывы и результаты",
  description: "Реальные видеоотзывы участников MoneyRoad.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <main>
      <section className="page-hero reviews-hero dark-section">
        <div className="container">
          <PageIntro
            eyebrow="Реальные материалы участников MoneyRoad"
            title="Отзывы и результаты"
            description="На этой странице — только предоставленный видеоматериал. Дополнительные отзывы собраны в отдельном Telegram-канале."
          />
        </div>
      </section>

      <section className="section reviews-section">
        <div className="container reviews-grid">
          <div className="video-card">
            <div className="video-frame">
              <video
                src="/reviews-mobile.mp4"
                controls
                preload="none"
                poster="/reviews-poster.webp"
                playsInline
                aria-label="Реальные отзывы участников MoneyRoad"
              >
                Ваш браузер не поддерживает воспроизведение видео.
              </video>
            </div>
            <p>Реальные отзывы участников MoneyRoad</p>
          </div>
          <div className="reviews-copy">
            <p className="eyebrow">Больше материалов</p>
            <h2>Отзывы собраны в одном месте</h2>
            <p>
              Перейдите в канал, чтобы посмотреть другие опубликованные подтверждения и
              результаты. MoneyRoad не добавляет на сайт вымышленные имена, суммы или
              фотографии.
            </p>
            <a
              href="https://t.me/MoneyRoadOtzivi"
              target="_blank"
              rel="noreferrer"
              className="button button-yellow button-large"
            >
              Больше отзывов в Telegram <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
