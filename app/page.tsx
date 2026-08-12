import Link from "next/link";
import { ArrowRight, Check, CloseIcon, Shield } from "@/components/icons";
import { CtaBand } from "@/components/CtaBand";
import {
  activeOffers,
  formatMoney,
} from "@/src/data/offers";

const debitTotal = activeOffers
  .filter((offer) => offer.category === "debit")
  .reduce((sum, offer) => sum + offer.payout, 0);
const businessPayout =
  activeOffers.find((offer) => offer.category === "business")?.payout ?? 0;
const loanPayout = activeOffers.find((offer) => offer.category === "mfo")?.payout ?? 0;
const exampleTotal = debitTotal + businessPayout + loanPayout * 2;
const exampleRows = [
  ["Дебетовые карты", `до ${formatMoney(debitTotal)}`],
  ["Пакет бизнес-карт", formatMoney(businessPayout)],
  ["Два МФО-предложения", formatMoney(loanPayout * 2)],
];

const categoryCards = [
  {
    number: "01",
    label: "Дебетовые карты",
    amount: `до ${formatMoney(debitTotal)}`,
    note: "Если раньше не было карт перечисленных банков",
    visual: "debit",
  },
  {
    number: "02",
    label: "Пакет бизнес-карт",
    amount: formatMoney(businessPayout),
    note: "18+. За пять сделанных бизнес-карт",
    visual: "business",
  },
  {
    number: "03",
    label: "МФО",
    amount: `от ${formatMoney(loanPayout)}`,
    note: "18+ после выполнения обязательных условий",
    visual: "mfo",
  },
];

const steps = [
  [
    "01",
    "Пройди калькулятор",
    "Укажи возраст и банки, клиентом которых ты уже являешься.",
  ],
  ["02", "Выбери продукты", "Добавь в расчёт только то, за что готов получить вознаграждение."],
  ["03", "Получи условия", "Свяжись с Данилом и уточни актуальность предложений."],
  [
    "04",
    "Выполни действия",
    "Оформи продукт и получи выплату после подтверждения выполнения целевого действия.",
  ],
];

const safetyPoints = [
  { text: "Все продукты оформляй самостоятельно", tone: "positive" },
  { text: "Данил не просит SMS-коды и пароли", tone: "negative" },
  { text: "Не прошу данные от ваших банковских приложений", tone: "negative" },
  { text: "Условия и размер выплаты сообщаются заранее", tone: "positive" },
];

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Пример результата калькулятора">
      <div className="hero-glow" />
      <div className="floating-card card-back">
        <span className="card-chip" />
        <span>MR / BUSINESS</span>
      </div>
      <div className="floating-card card-front">
        <div className="card-topline">
          <span>MoneyRoad</span>
          <span className="card-dot" />
        </div>
        <strong>{formatMoney(businessPayout)}</strong>
        <span>Пакет бизнес-карт</span>
      </div>
      <div className="calc-preview">
        <div className="calc-preview-head">
          <span>Пример расчёта</span>
        </div>
        <p>До {formatMoney(exampleTotal)} при выборе этих предложений</p>
        <strong>До {formatMoney(exampleTotal)}</strong>
        <div className="calc-example-list">
          {exampleRows.map(([label, amount]) => (
            <div key={label}>
              <span>{label}</span>
              <b>{amount}</b>
            </div>
          ))}
        </div>
        <small>
          Это пример. Сумма зависит от возраста, статуса для банка: новый клиент или
          старый.
        </small>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero dark-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-brand">
              <span className="hero-logo" aria-hidden="true">MR</span>
              <span>MoneyRoad</span>
            </div>
            <h1>Узнай свою потенциальную выручку за сделанные финансовые продукты</h1>
            <p className="hero-subtitle">
              Выбери подходящие для себя предложения и узнай, сколько ты сможешь
              заработать.
            </p>
            <div className="hero-actions">
              <Link href="/calculator" className="button button-yellow button-large">
                Рассчитать сумму <ArrowRight />
              </Link>
              <Link href="/offers" className="button button-ghost button-large">
                Посмотреть предложения
              </Link>
            </div>
            <p className="hero-note">
              Доступность и точные условия каждого предложения подтверждаются заранее в
              личных сообщениях перед оформлением.
            </p>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="section categories-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Актуальные направления</p>
              <h2>Разные продукты — разные условия</h2>
            </div>
            <p>
              Итог зависит от возраста, статуса в банке и выполнения целевого действия.
              Калькулятор исключит заведомо неподходящие варианты.
            </p>
          </div>
          <div className="category-grid">
            {categoryCards.map((item) => (
              <article className="category-card" key={item.label}>
                <div className="category-card-head">
                  <span className="card-number">{item.number}</span>
                </div>
                <div
                  className={`category-visual category-visual-${item.visual}`}
                  aria-hidden="true"
                >
                  <span />
                  <span />
                  <span />
                </div>
                <div>
                  <h3>{item.label}</h3>
                  <strong>{item.amount}</strong>
                  <p>{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section explanation-section">
        <div className="container explanation-grid">
          <div className="big-question">
            <span>?</span>
            <p>Откуда берётся вознаграждение</p>
          </div>
          <div className="explanation-copy">
            <p className="eyebrow">Почему за это платят?</p>
            <h2>Партнёрская комиссия за подтверждённый результат</h2>
            <p>
              Банки и финансовые организации платят партнёрам за новых клиентов и
              выполненные целевые действия. Я нахожу для компаний новых клиентов.
              Клиенты делают продукты, я за это получаю комиссионные. После чего частью
              комиссионных делюсь с клиентами.
            </p>
            <p className="accent-note">
              Выплата возникает не за сам переход по ссылке, а после выполнения условий
              и подтверждения результата.
            </p>
          </div>
        </div>
      </section>

      <section className="section process-section dark-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow yellow">Понятный процесс</p>
              <h2>Как это работает</h2>
            </div>
            <p>
              От первого расчёта до выплаты — без передачи доступа к вашим приложениям
              и счетам.
            </p>
          </div>
          <div className="steps-grid">
            {steps.map(([number, title, description]) => (
              <article className="step-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <Link href="/how-it-works" className="text-link">
            Посмотреть полный порядок работы <ArrowRight />
          </Link>
        </div>
      </section>

      <section className="section control-section">
        <div className="container control-grid">
          <div className="control-copy">
            <p className="eyebrow">Безопасный подход</p>
            <h2>Оформление под твоим контролем</h2>
            <p>
              MoneyRoad помогает на пути оформления продукта, но не получает управление
              твоими деньгами или банковскими приложениями.
            </p>
            <Link href="/safety" className="button button-dark">
              Подробнее о безопасности <Shield />
            </Link>
          </div>
          <div className="check-list">
            {safetyPoints.map((point) => (
              <div key={point.text}>
                <span
                  className={
                    point.tone === "negative" ? "check-icon check-icon-negative" : "check-icon"
                  }
                >
                  {point.tone === "negative" ? <CloseIcon /> : <Check />}
                </span>
                <p>{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
