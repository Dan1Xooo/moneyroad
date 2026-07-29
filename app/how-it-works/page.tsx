import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Check, Shield } from "@/components/icons";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Как проходит работа",
  description: "Порядок работы с MoneyRoad — от калькулятора до подтверждённой выплаты.",
  alternates: { canonical: "/how-it-works" },
};

const process = [
  ["Расчёт", "Пользователь проходит калькулятор и видит предварительно доступные направления."],
  ["Выбор", "Выбирает продукты, которые готов рассмотреть, без обязательства оформлять их."],
  ["Telegram", "Переходит в личный чат с автоматически подготовленным списком."],
  ["Проверка", "Данил проверяет актуальность, доступность и ограничения каждого оффера."],
  ["Условия", "Пользователь получает точные действия, сроки и согласованный размер выплаты."],
  ["Оформление", "Самостоятельно оформляет продукт на официальной стороне банка или организации."],
  ["Действие", "Выполняет целевое действие в установленный срок и сообщает о результате."],
  ["Выплата", "После подтверждения получает заранее согласованное вознаграждение."],
];

const neverAsked = [
  "SMS-коды",
  "Пароли",
  "Доступ к личному кабинету",
  "Данные банковской карты",
  "Возможность управлять вашими деньгами",
];

export default function HowItWorksPage() {
  return (
    <main>
      <section className="page-hero dark-section">
        <div className="container">
          <PageIntro
            eyebrow="Порядок работы"
            title="От первого сообщения до выплаты"
            description="Каждый этап понятен заранее: сначала предварительный расчёт, затем проверка условий и только после этого самостоятельное оформление."
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
              Для сопровождения не нужен доступ к вашим счетам, приложению или платёжным
              данным.
            </p>
          </div>
          <div className="never-list">
            {neverAsked.map((item) => (
              <div key={item}>
                <Check />
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

