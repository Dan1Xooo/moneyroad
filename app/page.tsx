import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Shield } from "@/components/icons";
import { CtaBand } from "@/components/CtaBand";
import {
  activeOffers,
  formatMoney,
} from "@/src/data/offers";

const debitTotal = activeOffers
  .filter((offer) => offer.category === "debit")
  .reduce((sum, offer) => sum + offer.payout, 0);
const savingsPayout =
  activeOffers.find((offer) => offer.category === "savings")?.payout ?? 0;
const businessPayout =
  activeOffers.find((offer) => offer.category === "business")?.payout ?? 0;
const loanPayout = activeOffers.find((offer) => offer.category === "mfo")?.payout ?? 0;
const exampleTotal = debitTotal + savingsPayout + businessPayout + loanPayout * 2;
const exampleRows = [
  ["Дебетовые карты", `до ${formatMoney(debitTotal)}`],
  ["Накопительный счёт", formatMoney(savingsPayout)],
  ["Пакет бизнес-карт", formatMoney(businessPayout)],
  ["Два заёмных предложения", formatMoney(loanPayout * 2)],
];

const categoryCards = [
  {
    number: "01",
    label: "Дебетовые карты",
    amount: `до ${formatMoney(debitTotal)}`,
    note: "Если раньше не было карт перечисленных банков",
  },
  {
    number: "02",
    label: "Накопительный счёт",
    amount: formatMoney(savingsPayout),
    note: "Доступность проверяется индивидуально",
  },
  {
    number: "03",
    label: "Пакет бизнес-карт",
    amount: formatMoney(businessPayout),
    note: "Только полным пакетом после выполнения условий",
  },
  {
    number: "04",
    label: "Заёмные предложения",
    amount: `от ${formatMoney(loanPayout)}`,
    note: "Только 18+ после изучения обязательных условий",
  },
];

const steps = [
  ["01", "Пройдите калькулятор", "Укажите возраст и банки, клиентом которых уже были."],
  ["02", "Выберите продукты", "Добавьте в расчёт только то, что готовы рассмотреть."],
  ["03", "Получите условия", "Свяжитесь с Данилом и подтвердите актуальность предложений."],
  ["04", "Выполните действия", "Оформите всё самостоятельно и получите выплату после подтверждения."],
];

const safetyPoints = [
  "Все продукты оформляются самостоятельно",
  "Данил не просит SMS-коды и пароли",
  "Нет доступа к банковским приложениям",
  "Условия и размер выплаты сообщаются заранее",
  "От предложения можно отказаться до оформления",
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
        <p>До {formatMoney(exampleTotal)} при доступности выбранных предложений</p>
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
          Это пример. Персональная сумма зависит от возраста, статуса нового клиента и
          выбранных предложений.
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
              <span className="hero-logo">
                <Image
                  src="/mr-logo-header.webp"
                  alt="Логотип MR"
                  width={84}
                  height={84}
                  priority
                  unoptimized
                />
              </span>
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
              Итог зависит от возраста, истории взаимодействия с банками и выполнения
              целевых действий. Калькулятор исключит заведомо неподходящие варианты.
            </p>
          </div>
          <div className="category-grid">
            {categoryCards.map((item) => (
              <article className="category-card" key={item.label}>
                <span className="card-number">{item.number}</span>
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
              выполненные целевые действия. Я подбираю предложения, объясняю условия и
              сопровождаю процесс, после чего частью подтверждённой комиссии делюсь с
              участником.
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
            <h2>Оформление под вашим контролем</h2>
            <p>
              MoneyRoad помогает разобраться в предложении, но не получает управление
              вашими деньгами или банковскими приложениями.
            </p>
            <Link href="/safety" className="button button-dark">
              Подробнее о безопасности <Shield />
            </Link>
          </div>
          <div className="check-list">
            {safetyPoints.map((point) => (
              <div key={point}>
                <span className="check-icon">
                  <Check />
                </span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
