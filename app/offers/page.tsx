import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { CtaBand } from "@/components/CtaBand";
import { PageIntro } from "@/components/PageIntro";
import {
  activeOffers,
  categoryLabels,
  formatMoney,
  type OfferCategory,
} from "@/src/data/offers";

export const metadata: Metadata = {
  title: "Актуальные предложения",
  description:
    "Дебетовые карты, накопительные счета, бизнес-карты и заёмные предложения MoneyRoad.",
  alternates: { canonical: "/offers" },
};

const categories: OfferCategory[] = ["debit", "savings", "business", "mfo"];

const audienceLabel = (category: OfferCategory) => {
  if (category === "debit") return "Новым клиентам банка";
  if (category === "savings") return "Тем, кому доступен продукт после проверки";
  if (category === "business") return "Тем, кто готов пройти полный пакет";
  return "Совершеннолетним пользователям после изучения договора";
};

export default function OffersPage() {
  return (
    <main>
      <section className="page-hero light-hero">
        <div className="container">
          <PageIntro
            eyebrow="Каталог MoneyRoad"
            title="Актуальные направления"
            description="Условия и доступность подтверждаются перед оформлением. Добавьте интересующий вариант в расчёт — калькулятор проверит возраст и статус нового клиента."
          />
        </div>
      </section>

      <div className="offer-categories">
        {categories.map((category, categoryIndex) => {
          const categoryOffers = activeOffers.filter((offer) => offer.category === category);
          return (
            <section
              className={
                categoryIndex % 2 === 1
                  ? "section offer-category-section alternate"
                  : "section offer-category-section"
              }
              key={category}
            >
              <div className="container">
                <div className="offer-category-heading">
                  <span>0{categoryIndex + 1}</span>
                  <h2>{categoryLabels[category]}</h2>
                </div>
                <div className="catalog-grid">
                  {categoryOffers.map((offer) => (
                    <article className="catalog-card" key={offer.id}>
                      <div className="catalog-card-top">
                        <div>
                          <p className="catalog-age">Возраст: от {offer.ageMin} лет</p>
                          <h3>{offer.name}</h3>
                        </div>
                        <strong>
                          {offer.payoutPrefix && `${offer.payoutPrefix} `}
                          {formatMoney(offer.payout)}
                        </strong>
                      </div>
                      <dl className="offer-facts offer-facts-compact">
                        <div>
                          <dt>Главное действие</dt>
                          <dd>{offer.conditions[0]}</dd>
                        </div>
                        <div>
                          <dt>Примерный срок</dt>
                          <dd>{offer.duration}</dd>
                        </div>
                      </dl>
                      {offer.category === "business" && (
                        <p className="catalog-critical-note">
                          Полный пакет из пяти карт. Выплата 15 000 ₽ — после выполнения
                          условий по всему пакету. Отдельные карты выбрать нельзя.
                        </p>
                      )}
                      {offer.category === "mfo" && (
                        <p className="offer-warning loan-visible-warning">
                          Это займы с обязательством вернуть полученные средства. Перед
                          оформлением необходимо самостоятельно изучить договор и полную
                          стоимость займа.
                        </p>
                      )}
                      <div className="catalog-actions">
                        <Link
                          href={`/calculator?offer=${offer.id}`}
                          className="button button-dark"
                        >
                          Добавить в расчёт <ArrowRight />
                        </Link>
                        <details className="catalog-details">
                          <summary className="button button-outline">Все условия</summary>
                          <div className="catalog-details-content">
                            <p className="catalog-description">{offer.description}</p>
                            <dl className="offer-facts">
                              <div>
                                <dt>Кому подходит</dt>
                                <dd>{audienceLabel(offer.category)}</dd>
                              </div>
                            </dl>
                            <div className="condition-block">
                              <p>Что потребуется</p>
                              <ul>
                                {offer.conditions.map((condition) => (
                                  <li key={condition}>{condition}</li>
                                ))}
                              </ul>
                            </div>
                            {offer.warning && (
                              <p className="offer-warning">{offer.warning}</p>
                            )}
                            <a
                              href="https://t.me/DanIlMoneyRoad"
                              target="_blank"
                              rel="noreferrer"
                              className="button button-outline catalog-telegram-link"
                            >
                              Уточнить условия <ArrowUpRight />
                            </a>
                          </div>
                        </details>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
      <CtaBand />
    </main>
  );
}
