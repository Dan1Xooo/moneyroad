import type { Metadata } from "next";
import { ArrowUpRight, TelegramIcon } from "@/components/icons";
import { CtaBand } from "@/components/CtaBand";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "О MoneyRoad",
  description:
    "О проекте MoneyRoad и подходе Данила к работе с финансовыми предложениями.",
  alternates: { canonical: "/about" },
};

const links = [
  {
    title: "Telegram-канал",
    description: "Новости, предложения и разборы",
    href: "https://t.me/MRMoneyRoad",
    label: "Канал",
  },
  {
    title: "Личные сообщения",
    description: "Уточнить условия у Данила",
    href: "https://t.me/DanIlMoneyRoad",
    label: "Чат",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero about-hero">
        <div className="container about-hero-grid">
          <PageIntro
            eyebrow="О проекте"
            title="MoneyRoad — дополнительный заработок на финансовых продуктах"
          />
          <div className="about-brand-lockup">
            <span className="about-brand-mark">MR</span>
            <span className="about-brand-word">MoneyRoad</span>
          </div>
        </div>
      </section>

      <section className="section about-story">
        <div className="container about-story-grid">
          <div>
            <p className="eyebrow">Основатель</p>
            <h2>Данил, 19 лет</h2>
          </div>
          <div className="story-text">
            <p>
              Меня зовут Данил, мне 19 лет. Более года я работаю с банковскими и
              финансовыми предложениями и более года являюсь индивидуальным
              предпринимателем.
            </p>
            <p>
              Я создал MoneyRoad, чтобы помогать людям находить понятные способы
              дополнительного заработка и получать выгоду от актуальных финансовых
              предложений.
            </p>
            <p>
              Я заранее объясняю условия, сообщаю размер выплаты и сопровождаю человека
              на протяжении работы. При этом каждый пользователь самостоятельно
              принимает решение об оформлении продукта и самостоятельно управляет
              своими счетами и банковскими приложениями.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-section dark-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow yellow">MoneyRoad в Telegram</p>
            <h2>Выберите удобный канал связи</h2>
          </div>
          <div className="contact-grid">
            {links.map(({ title, description, href, label }) => (
              <a key={title} href={href} target="_blank" rel="noreferrer">
                <div className="contact-card-main">
                  <span className="contact-mark">
                    <TelegramIcon />
                  </span>
                  <div>
                    <span className="contact-label">{label}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
