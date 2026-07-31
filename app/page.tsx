import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Shield } from "@/components/icons";
import { CtaBand } from "@/components/CtaBand";
import { activeOffers, formatMoney } from "@/src/data/offers";

const debitTotal = activeOffers
  .filter((offer) => offer.category === "debit")
  .reduce((sum, offer) => sum + offer.payout, 0);
const savingsPayout =
  activeOffers.find((offer) => offer.category === "savings")?.payout ?? 0;
const businessPayout =
  activeOffers.find((offer) => offer.category === "business")?.payout ?? 0;
const loanPayout = activeOffers.find((offer) => offer.category === "mfo")?.payout ?? 0;
const exampleTotal = debitTotal + savingsPayout + businessPayout + loanPayout * 2;

const trustCards = [
  ["Кто ведёт", "Данил, автор MoneyRoad"],
  ["Формат", "Telegram-канал, личка и сайт"],
  ["Главное правило", "Без паролей, SMS-кодов и доступа"],
];

const directionCards = [
  {
    number: "01",
    label: "Банковские карты",
    note: "Дебетовые карты и похожие предложения для новых клиентов банков.",
  },
  {
    number: "02",
    label: "Счета и накопления",
    note: "Счета и накопительные продукты, где важно заранее проверить условия.",
  },
  {
    number: "03",
    label: "РКО для бизнеса",
    note: "Пакетные предложения для тех, кому подходит оформление бизнес-продуктов.",
  },
  {
    number: "04",
    label: "Промокоды и скидки",
    note: "Полезные акции от сервисов, где можно сэкономить или получить бонус.",
  },
  {
    number: "05",
    label: "Простые задания",
    note: "Небольшая подработка и действия, которые можно разобрать до старта.",
  },
];

const safetyPoints = [
  "Вы всё оформляете самостоятельно",
  "Я не прошу пароли и SMS-коды",
  "Нет доступа к вашим банковским приложениям",
  "Условия и сумма обсуждаются заранее",
  "От любого предложения можно отказаться до оформления",
];

const processNotes = [
  "Сумма в калькуляторе предварительная.",
  "Условия банков и сервисов могут меняться.",
  "Вознаграждение появляется после выполнения условий и подтверждения результата.",
];

function HeroVisual() {
  return (
    <div className="hero-visual trust-visual" aria-label="Кратко о MoneyRoad">
      <div className="hero-glow" />
      <div className="trust-card trust-card-main">
        <div className="trust-card-top">
          <span className="trust-avatar">
            <Image
              src="/mr-logo-header.webp"
              alt=""
              width={70}
              height={70}
              priority
              unoptimized
            />
          </span>
          <div>
            <span>MoneyRoad</span>
            <strong>личный проект Данила</strong>
          </div>
        </div>
        <p>
          Помогаю спокойно разобраться в банковских предложениях, выгодах,
          промокодах и простых вариантах подработки.
        </p>
      </div>
      <div className="trust-card trust-card-side">
        <span>Безопасный порядок</span>
        <strong>без передачи доступа</strong>
      </div>
      <div className="trust-card trust-card-preview">
        <span>Предварительный расчёт</span>
        <strong>до {formatMoney(exampleTotal)}</strong>
        <p>Пример зависит от возраста, статуса нового клиента и доступности условий.</p>
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
            <h1>MoneyRoad — банковские выгоды, промокоды и простая подработка</h1>
            <p className="hero-subtitle">
              Меня зовут Данил. Я веду MoneyRoad и помогаю людям разбираться в
              актуальных предложениях от банков и сервисов: объясняю условия,
              подсказываю безопасный порядок действий и сопровождаю до результата.
            </p>
            <p className="hero-safety-note">
              Без передачи паролей, SMS-кодов и доступа к вашим банковским приложениям.
            </p>
            <div className="hero-actions">
              <Link href="/calculator" className="button button-yellow button-large">
                Рассчитать сумму <ArrowRight />
              </Link>
              <a
                href="https://t.me/DanIlMoneyRoad"
                target="_blank"
                rel="noreferrer"
                className="button button-ghost button-large"
              >
                Написать Данилу <ArrowUpRight />
              </a>
            </div>
            <a
              href="https://t.me/MoneyRoadOtzivi"
              target="_blank"
              rel="noreferrer"
              className="hero-review-link"
            >
              Отзывы участников в Telegram <ArrowUpRight />
            </a>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="section intro-section">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">Что такое MoneyRoad</p>
            <h2>Не банк и не безликая платформа, а проект, где помогают разобраться</h2>
          </div>
          <div className="intro-copy">
            <p>
              MoneyRoad — это мой проект, где я собираю актуальные предложения от
              банков и сервисов, проверяю условия и помогаю людям получить выгоду за
              выполненные действия: оформление карт, счетов, РКО, промокоды и другие
              предложения.
            </p>
            <p>
              Я заранее объясняю, что нужно сделать, какие условия важно учитывать и
              когда можно ожидать подтверждения результата.
            </p>
          </div>
        </div>
      </section>

      <section className="section danil-section">
        <div className="container danil-card">
          <div>
            <p className="eyebrow yellow">Кто ведёт проект</p>
            <h2>Проект ведёт Данил</h2>
          </div>
          <div>
            <p>
              Я больше года работаю с банковскими и партнёрскими предложениями, веду
              Telegram-канал MoneyRoad и собираю отзывы участников в отдельном канале.
            </p>
            <p>
              Мне важно, чтобы человек понимал условия до оформления, а не разбирался
              уже после.
            </p>
            <Link href="/about" className="text-link">
              Подробнее о проекте <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="section explanation-section">
        <div className="container explanation-grid">
          <div className="big-question">
            <span>?</span>
            <p>На чём строится выгода</p>
          </div>
          <div className="explanation-copy">
            <p className="eyebrow">Простыми словами</p>
            <h2>Банки и сервисы платят за подтверждённые действия</h2>
            <p>
              Банки и сервисы платят партнёрам за новых клиентов и выполненные целевые
              действия. Человек оформляет продукт самостоятельно, результат
              подтверждается, после этого появляется вознаграждение.
            </p>
            <p>
              MoneyRoad помогает заранее разобраться в условиях и понять, какие варианты
              могут подойти именно вам.
            </p>
            <div className="process-notes">
              {processNotes.map((note) => (
                <div key={note}>
                  <Check />
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section control-section safety-home-section">
        <div className="container control-grid">
          <div className="control-copy">
            <p className="eyebrow">Почему это безопасно</p>
            <h2>Оформление остаётся под вашим контролем</h2>
            <p>
              Я могу объяснить порядок действий и условия, но решение об оформлении вы
              принимаете сами. Доступ к деньгам, приложениям и личным кодам не нужен.
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

      <section className="section categories-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Какие направления бывают</p>
              <h2>От банковских карт до промокодов и простых заданий</h2>
            </div>
            <p>
              Направления отличаются условиями, возрастными ограничениями и сроками
              подтверждения. На старте лучше спокойно проверить, что подходит именно вам.
            </p>
          </div>
          <div className="category-grid direction-grid">
            {directionCards.map((item) => (
              <article className="category-card direction-card" key={item.label}>
                <span className="card-number">{item.number}</span>
                <div>
                  <h3>{item.label}</h3>
                  <p>{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section calculator-hook-section dark-section">
        <div className="container calculator-hook-grid">
          <div>
            <p className="eyebrow yellow">Предварительный расчёт</p>
            <h2>Хочешь понять, что доступно именно тебе?</h2>
            <p>
              Ответь на несколько вопросов — калькулятор покажет предварительную сумму
              и подходящие направления. После этого можно написать мне и уточнить
              актуальные условия.
            </p>
            <Link href="/calculator" className="button button-yellow button-large">
              Рассчитать сумму <ArrowRight />
            </Link>
          </div>
          <div className="hook-facts">
            {trustCards.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reviews-preview-section">
        <div className="container reviews-preview-grid">
          <div>
            <p className="eyebrow">Отзывы</p>
            <h2>Отзывы я собираю отдельно</h2>
            <p>
              Так любой человек может посмотреть реальные результаты и сообщения
              участников. На сайте есть страница с видео, а больше материалов собрано в
              Telegram-канале отзывов.
            </p>
            <div className="preview-actions">
              <Link href="/reviews" className="button button-dark">
                Страница отзывов
              </Link>
              <a
                href="https://t.me/MoneyRoadOtzivi"
                target="_blank"
                rel="noreferrer"
                className="button button-outline"
              >
                Отзывы в Telegram <ArrowUpRight />
              </a>
            </div>
          </div>
          <div className="review-preview-card">
            <span>Реальные материалы</span>
            <strong>без выдуманных имён и сумм</strong>
            <p>Перед оформлением можно открыть отзывы и спокойно оценить проект.</p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Если хочешь разобраться по себе"
        text="Пройди калькулятор или напиши мне в Telegram — уточним актуальные условия и подходящие варианты без спешки."
      />
    </main>
  );
}
