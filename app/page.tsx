import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

const projectBlocks = [
  {
    eyebrow: "Проект 01",
    title: "Заработок на отзывах",
    highlights: ["1000 ₽ за 1 отзыв", "1450 ₽ за 3 отзыва", "до 2000 ₽ сверху"],
    text: [
      "Заработок строится на отзывах крупным компаниям, а именно компаниям банков. Механика работы такая: пишем в поддержку банка с каким-либо вопросом, после чего общаемся с оператором, задаём ему уточняющие вопросы на протяжении 5–7 минут.",
      "Далее скриним диалог переписки и идём оставлять отзыв компании о том, что у них очень отзывчивая поддержка и компетентные сотрудники, прикрепляя подтверждения скринами. Готово. Ждём, пока нам перечислят деньги за написание 5-звёздочного отзыва.",
      "А что по оплате? Т-Банк платит 1000 ₽ за 1 отзыв, Альфа-Банк — 1450 ₽ за 3 отзыва, и ещё пара-тройка банков платит 500–1000 ₽ за отзыв. Если же у вас нет карты от Альфа-Банка или Т-Банка, вы можете заработать 2000 ₽ сверху. Подробности у меня в Telegram-канале.",
    ],
  },
  {
    eyebrow: "Проект 02",
    title: "Пассивный заработок за счёт денежных средств банков",
    highlights: ["18+", "льготный период", "накопительный счёт"],
    text: [
      "Кратко: это финансовая стратегия, при которой заёмщик оплачивает покупки деньгами банка по кредитной карте с длинным беспроцентным периодом, а собственные деньги держит на накопительном счёте или вкладе.",
      "В результате человек получает доход от процентов за свои средства, а долг по карте закрывает до истечения льготного периода. Этот способ заработка подойдёт совершеннолетним.",
    ],
  },
  {
    eyebrow: "Проект 03",
    title: "Заработок на банковских картах, бизнес-картах, брокерских счетах и прочее",
    highlights: ["покупка от 100 ₽", "пополнение от 1000 ₽", "новый клиент банка"],
    text: [
      "Это самый простой способ заработка, прямиком через общение в личных сообщениях со мной. Механика взаимодействия следующая: вы делаете какой-либо продукт по моей реферальной ссылке, после чего совершаете целевое действие, иными словами условия для получения вознаграждения.",
      "Условия могут быть у каждого продукта разными. К примеру, у дебетовых карт в частности это совершение покупки, используя карту, на сумму от 100 ₽. У бизнес-карт — это пополнение от 1000 ₽ и так далее. Для банка клиент должен быть новым.",
      "Почему я плачу за оформление банковских продуктов? Всё довольно просто. Банкам нужны новые клиенты, поэтому они платят партнёрам комиссионное вознаграждение за оформленные продукты и выполненные условия.",
      "Я привожу банкам клиентов, получаю комиссию и частью этой суммы делюсь с вами. В итоге: банк получает нового клиента, вы получаете вознаграждение, я получаю свою часть комиссии за привлечение и сопровождение.",
    ],
  },
];

const finalLinks = [
  {
    label: "Канал с отзывами",
    href: "https://t.me/MoneyRoadOtzivi",
    external: true,
  },
  {
    label: "Telegram-канал",
    href: "https://t.me/MRMoneyRoad",
    external: true,
  },
  {
    label: "Написать мне",
    href: "https://t.me/DanIlMoneyRoad",
    external: true,
  },
  {
    label: "Калькулятор заработка",
    href: "/calculator",
    external: false,
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero home-hero-simple dark-section">
        <div className="container home-hero-content">
          <div className="home-hero-copy">
            <h1>MoneyRoad — банковские выгоды и заработок в интернете</h1>
            <p className="hero-subtitle">
              Всем привет! Меня зовут Данил, я основатель MoneyRoad. В проекте я
              показываю, как можно{" "}
              <span className="text-accent">экономить деньги на доставке продуктов</span>,
              как{" "}
              <span className="text-accent">зарабатывать в интернете на отзывах</span>,
              получать{" "}
              <span className="text-accent">
                пассивный заработок за счёт денежных средств самого банка
              </span>{" "}
              и{" "}
              <span className="text-accent">
                зарабатывать на банковских картах, бизнес-картах, брокерских счетах и
                т.п.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="section projects-intro-section">
        <div className="container projects-intro">
          <p className="eyebrow">Кратко о проектах</p>
          <h2>
            Кратко пробежимся по моим проектам, более подробно всё расписано у меня в
            Telegram-канале
          </h2>
          <a
            href="https://t.me/MRMoneyRoad"
            target="_blank"
            rel="noreferrer"
            className="telegram-inline-link"
          >
            Перейти в Telegram-канал <ArrowUpRight />
          </a>
        </div>
      </section>

      <section className="section project-story-section">
        <div className="container project-story-list">
          {projectBlocks.map((block, index) => (
            <article
              className={`project-story-card project-story-card-${index + 1}`}
              key={block.title}
            >
              <div className="project-story-heading">
                <p className="eyebrow">{block.eyebrow}</p>
                <h2>{block.title}</h2>
                <div className="project-story-highlights">
                  {block.highlights.map((highlight) => (
                    <span key={highlight}>{highlight}</span>
                  ))}
                </div>
              </div>
              <div className="project-story-copy">
                {block.text.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section home-safety-note">
        <div className="container home-safety-card">
          <div>
            <p className="eyebrow">Безопасность</p>
            <h2>Вы всё оформляете самостоятельно</h2>
            <p>
              Все действия вы делаете сами: оформляете продукт, подтверждаете данные и
              выполняете условия.
            </p>
            <p className="safety-emphasis">
              Я не прошу пароли, SMS-коды, доступ к банковским приложениям и не скупаю
              карты.
            </p>
          </div>
        </div>
      </section>

      <section className="section calculator-bridge-section">
        <div className="container calculator-bridge">
          <div>
            <p className="eyebrow">Предварительный расчёт</p>
            <h2>Хочешь понять, сколько может выйти по банковским продуктам?</h2>
            <p>Открой калькулятор и узнай свой предварительный заработок.</p>
          </div>
          <Link href="/calculator" className="calculator-bridge-link">
            <span>Открыть калькулятор</span>
            <ArrowRight />
          </Link>
        </div>
      </section>

      <section className="section home-final-links-section">
        <div className="container home-final-links">
          {finalLinks.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="home-final-link"
              >
                <span>{item.label}</span>
                <ArrowRight />
              </a>
            ) : (
              <Link key={item.label} href={item.href} className="home-final-link">
                <span>{item.label}</span>
                <ArrowRight />
              </Link>
            ),
          )}
        </div>
      </section>
    </main>
  );
}
