import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { CloseIcon, Shield } from "@/components/icons";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Как проходит работа",
  description: "Порядок работы с MoneyRoad — от калькулятора до подтверждённой выплаты.",
  alternates: { canonical: "/how-it-works" },
};

const process = [
  ["Расчёт", "Пользователь проходит калькулятор и видит предварительно доступные направления."],
  ["Выбор", "Выбирает продукты, которые готов рассмотреть ради заработка."],
  ["Telegram", "Переходит в личный чат с Данилом."],
  ["Проверка", "Данил проверяет актуальность, доступность и ограничения каждого оффера."],
  [
    "Условия",
    "Пользователь получает точные действия, необходимые для получения вознаграждения, сроки и согласованный размер выплаты.",
  ],
  ["Оформление", "Самостоятельно оформляет продукты на официальном сайте банка или организации."],
  [
    "Действие",
    "Человек выполняет целевое действие в установленный срок и подтверждает выполнение в личных сообщениях.",
  ],
  [
    "Выплата",
    "После подтверждения выполнения целевого действия получает заранее согласованное вознаграждение.",
  ],
];

const neverAsked = [
  "SMS-коды",
  "Пароли",
  "Доступ к личному кабинету",
  "Данные банковской карты",
];

export default function HowItWorksPage() {
  return (
    <main>
      <section className="page-hero dark-section">
        <div className="container">
          <PageIntro
            eyebrow="Порядок работы"
            title="От первого сообщения до выплаты"
            description="Каждый этап понятен заранее. Сначала предварительный расчёт в калькуляторе, затем проверка условий через личные сообщения. Только после этого оформление продуктов."
          />
        </div>
      </section>

      <section className="section timeline-section">
        <div className="container">
          <div className="timeline">
            {process.map(([title, description], index) => (
              <article className="timeline-item" key={title}>
                <div className="timeline-number">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section never-section dark-section">
        <div className="container never-grid">
          <div>
            <span className="safety-badge">
              <Shield />
            </span>
            <p className="eyebrow yellow">Ваши данные остаются у вас</p>
            <h2>Что я никогда не запрашиваю</h2>
            <p>
              Для сопровождения не нужен доступ к вашим счетам, приложениям или платёжным
              данным.
            </p>
          </div>
          <div className="never-list">
            {neverAsked.map((item) => (
              <div key={item}>
                <span className="negative-icon">
                  <CloseIcon />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
