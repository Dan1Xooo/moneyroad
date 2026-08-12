"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Check, ChevronLeft, Copy, TelegramIcon } from "@/components/icons";
import {
  activeOffers,
  formatMoney,
  type Offer,
} from "@/src/data/offers";

type AgeGroup = "under14" | "14to17" | "18plus";
type BankId = "alfa-debit" | "tbank-debit" | "ozon-debit";

const bankOptions: { id: BankId; label: string }[] = [
  { id: "alfa-debit", label: "Альфа-Банк" },
  { id: "tbank-debit", label: "Т-Банк" },
  { id: "ozon-debit", label: "Ozon Банк" },
];

const steps = [
  "Возраст",
  "Банки",
  "Предложения",
  "Результат",
];

function SelectCard({
  selected,
  title,
  description,
  onClick,
  testId,
}: {
  selected: boolean;
  title: string;
  description?: string;
  onClick: () => void;
  testId?: string;
}) {
  return (
    <button
      type="button"
      className={selected ? "select-card selected" : "select-card"}
      onClick={onClick}
      aria-pressed={selected}
      data-testid={testId}
    >
      <span className="select-indicator">{selected && <Check />}</span>
      <span>
        <strong>{title}</strong>
        {description && <small>{description}</small>}
      </span>
    </button>
  );
}

function CalculatorOfferCard({
  offer,
  selected,
  onToggle,
  loanCount,
  onLoanCountChange,
}: {
  offer: Offer;
  selected: boolean;
  onToggle: () => void;
  loanCount: number;
  onLoanCountChange: (value: number) => void;
}) {
  return (
    <article className={selected ? "calculator-offer selected" : "calculator-offer"}>
      <div className="calculator-offer-top">
        <div>
          <span className="offer-category">
            {offer.category === "debit"
              ? "Дебетовая карта"
              : offer.category === "business"
                ? "Бизнес-пакет"
                : "МФО"}
          </span>
          <h3>{offer.name}</h3>
        </div>
        <strong className={offer.payoutLabel ? "offer-payout offer-payout-label" : "offer-payout"}>
          {offer.payoutLabel ||
            `${offer.payoutPrefix && `${offer.payoutPrefix} `}${formatMoney(offer.payout)}`}
        </strong>
      </div>
      <p>
        {offer.category === "mfo"
          ? "Выбери количество МФО для предварительного расчёта."
          : offer.description}
      </p>
      {offer.category === "mfo" ? (
        <div className="mfo-quantity">
          <span>Количество МФО</span>
          <div className="segmented-control" role="group" aria-label="Количество МФО">
            {[1, 2, 3].map((value) => (
              <button
                key={value}
                type="button"
                className={loanCount === value ? "active" : ""}
                onClick={() => onLoanCountChange(value)}
              >
                {value}
              </button>
            ))}
          </div>
          <small>1 МФО — {formatMoney(offer.payout)}, 3 МФО — {formatMoney(offer.payout * 3)}</small>
        </div>
      ) : (
        <ul className="compact-conditions">
          {offer.conditions.slice(0, 3).map((condition) => (
            <li key={condition}>{condition}</li>
          ))}
        </ul>
      )}
      {offer.category !== "mfo" && (
        <button
          type="button"
          className={selected ? "button button-selected" : "button button-outline"}
          onClick={onToggle}
        >
          {selected ? (
            <>
              <Check /> Выбрано
            </>
          ) : (
            "Добавить в расчёт"
          )}
        </button>
      )}
    </article>
  );
}

export function Calculator({ initialOffer = null }: { initialOffer?: string | null }) {
  const isLoanEntry = initialOffer === "loan-offers";
  const [step, setStep] = useState(1);
  const [age, setAge] = useState<AgeGroup | null>(null);
  const [banks, setBanks] = useState<BankId[]>([]);
  const [noneBanks, setNoneBanks] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [pendingOffer, setPendingOffer] = useState<string | null>(
    initialOffer &&
      initialOffer !== "loan-offers" &&
      activeOffers.some((offer) => offer.id === initialOffer)
      ? initialOffer
      : null,
  );
  const [loanCount, setLoanCount] = useState(0);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const [copyMessage, setCopyMessage] = useState("");

  const eligibleOffers = useMemo(() => {
    if (!age || age === "under14") return [];
    const numericAge = age === "18plus" ? 18 : 14;
    return activeOffers.filter(
      (offer) =>
        offer.ageMin <= numericAge &&
        !(offer.category === "debit" && banks.includes(offer.id as BankId)),
    );
  }, [age, banks]);

  const selectedOffers = eligibleOffers.filter(
    (offer) => offer.category !== "mfo" && selected.includes(offer.id),
  );
  const loanOffer = activeOffers.find((offer) => offer.category === "mfo");
  const firstLoanPayout = loanOffer?.payout ?? 0;
  const regularTotal = selectedOffers.reduce((sum, offer) => sum + offer.payout, 0);
  const loanTotal = loanCount * firstLoanPayout;
  const total = regularTotal + loanTotal;

  const resultLines = [
    ...selectedOffers.map(
      (offer) => `${offer.telegramLabel} (${offer.conditions[0]})`,
    ),
    ...(loanCount > 0
      ? [
          `МФО: ${loanCount} — ${formatMoney(
            loanCount * firstLoanPayout,
          )}`,
        ]
      : []),
  ];

  const resultText = `Привет! Я прошёл калькулятор MoneyRoad.

Мне предварительно подошли:
${resultLines.length ? resultLines.map((line) => `— ${line}`).join("\n") : "— пока ничего не выбрано"}

Предварительная сумма:
${formatMoney(total)}

Хочу узнать актуальные условия`;

  const copyResult = async (
    successMessage = "Расчёт скопирован.",
  ) => {
    try {
      let copied = false;

      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(resultText);
          copied = true;
        } catch {
          copied = false;
        }
      }

      if (!copied) {
        const textArea = document.createElement("textarea");
        textArea.value = resultText;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        textArea.setAttribute("readonly", "");
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        copied = document.execCommand("copy");
        textArea.remove();
      }

      if (!copied) {
        throw new Error("Clipboard copy failed");
      }

      setCopyStatus("copied");
      setCopyMessage(successMessage);
      return true;
    } catch {
      setCopyStatus("error");
      setCopyMessage("");
      return false;
    }
  };

  const openTelegram = async () => {
    const copied = await copyResult(
      "Расчёт скопирован. Вставьте сообщение в открывшийся чат",
    );

    if (copied) {
      const telegramWindow = window.open(
        "https://t.me/DanIlMoneyRoad",
        "_blank",
        "noopener,noreferrer",
      );
      if (!telegramWindow) {
        window.location.assign("https://t.me/DanIlMoneyRoad");
      }
    }
  };

  const toggleBank = (id: BankId) => {
    setNoneBanks(false);
    setBanks((current) =>
      current.includes(id) ? current.filter((bank) => bank !== id) : [...current, id],
    );
  };

  const chooseNoBanks = () => {
    setNoneBanks(true);
    setBanks([]);
  };

  const nextFromAge = () => {
    if (!age) return;
    if (age === "under14") {
      setStep(4);
    } else {
      setStep(2);
    }
  };

  const nextFromOffers = () => {
    setStep(4);
  };

  const goToOffers = () => {
    if (
      pendingOffer &&
      pendingOffer !== "business-pack" &&
      pendingOffer !== "loan-offers" &&
      eligibleOffers.some((offer) => offer.id === pendingOffer)
    ) {
      setSelected((current) =>
        current.includes(pendingOffer) ? current : [...current, pendingOffer],
      );
      setPendingOffer(null);
    }
    if (pendingOffer === "business-pack") {
      setPendingOffer(null);
    }
    if (isLoanEntry && age === "18plus") {
      setLoanCount((current) => (current > 0 ? current : 1));
    }
    setStep(3);
  };

  const reset = () => {
    setStep(1);
    setAge(null);
    setBanks([]);
    setNoneBanks(false);
    setSelected([]);
    setLoanCount(0);
    setCopyStatus("idle");
    setCopyMessage("");
  };

  return (
    <div className="calculator-shell">
      <div className="calculator-progress" aria-label={`Шаг ${step} из 5`}>
        <div className="progress-meta">
          <span>
            Шаг {step} из {steps.length}
          </span>
          <span>{steps[step - 1]}</span>
        </div>
        <div className="progress-track">
          <span style={{ width: `${(step / steps.length) * 100}%` }} />
        </div>
      </div>

      {pendingOffer && step < 3 && (
        <div className="pending-note">
          Выбранное на странице предложений будет показано после проверки возраста.
        </div>
      )}
      {isLoanEntry && step < 4 && age && age !== "18plus" && (
        <div className="pending-note">
          МФО доступны только с 18 лет. Калькулятор покажет категории,
          подходящие вашему возрасту.
        </div>
      )}

      {step === 1 && (
        <section className="calculator-step">
          <p className="step-label">Шаг 1</p>
          <h2>Сколько тебе лет?</h2>
          <p>Возраст определяет доступные категории продуктов.</p>
          <div className="select-grid">
            <SelectCard
              selected={age === "under14"}
              title="Младше 14 лет"
              onClick={() => setAge("under14")}
              testId="age-under-14"
            />
            <SelectCard
              selected={age === "14to17"}
              title="14–17 лет"
              description="Будут доступны только дебетовые карты"
              onClick={() => setAge("14to17")}
              testId="age-14-17"
            />
            <SelectCard
              selected={age === "18plus"}
              title="18 лет и старше"
              description="Можно проверить все категории"
              onClick={() => setAge("18plus")}
              testId="age-18-plus"
            />
          </div>
          <button
            type="button"
            className="button button-yellow button-large"
            onClick={nextFromAge}
            disabled={!age}
          >
            Продолжить <ArrowRight />
          </button>
        </section>
      )}

      {step === 2 && (
        <section className="calculator-step">
          <p className="step-label">Шаг 2</p>
          <h2>В каких банках у тебя уже была дебетовая карта?</h2>
          <p>
            Можно выбрать несколько. Карта этого банка будет исключена, поскольку
            предложение действует только для новых клиентов.
          </p>
          <div className="select-grid">
            {bankOptions.map((bank) => (
              <SelectCard
              key={bank.id}
              selected={banks.includes(bank.id)}
              title={bank.label}
              onClick={() => toggleBank(bank.id)}
              testId={`bank-${bank.id}`}
              />
            ))}
            <SelectCard
              selected={noneBanks}
              title="Ни в одном из перечисленных"
              onClick={chooseNoBanks}
              testId="bank-none"
            />
          </div>
          <div className="step-actions">
            <button type="button" className="button button-ghost-light" onClick={() => setStep(1)}>
              <ChevronLeft /> Назад
            </button>
            <button
              type="button"
              className="button button-yellow"
              onClick={goToOffers}
              disabled={!noneBanks && banks.length === 0}
              data-testid="show-offers"
            >
              Показать предложения <ArrowRight />
            </button>
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="calculator-step wide">
          <p className="step-label">Шаг 3</p>
          <h2>Доступные предложения</h2>
          <p>
            Выбери любые подходящие варианты. Выбор можно изменить до отправки
            результата.
          </p>
          {eligibleOffers.length ? (
            <div className="calculator-offers">
              {eligibleOffers.map((offer) => (
                <CalculatorOfferCard
                  key={offer.id}
                  offer={offer}
                  selected={offer.category === "mfo" ? loanCount > 0 : selected.includes(offer.id)}
                  loanCount={loanCount}
                  onLoanCountChange={setLoanCount}
                  onToggle={() => {
                    if (offer.category === "mfo") {
                      setLoanCount((current) => (current > 0 ? 0 : 1));
                      return;
                    }
                    setSelected((current) =>
                      current.includes(offer.id)
                        ? current.filter((id) => id !== offer.id)
                        : [...current, offer.id],
                    );
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>Подходящих предложений сейчас не найдено</h3>
              <p>Можно уточнить другие актуальные варианты у меня.</p>
            </div>
          )}
          <div className="step-actions">
            <button type="button" className="button button-ghost-light" onClick={() => setStep(2)}>
              <ChevronLeft /> Назад
            </button>
            <button type="button" className="button button-yellow" onClick={nextFromOffers}>
              Показать результат{" "}
              <ArrowRight />
            </button>
          </div>
        </section>
      )}

      {step === 4 && age === "under14" && (
        <section className="calculator-step underage-result">
          <p className="step-label">Результат</p>
          <h2>Предложения из калькулятора доступны с 14 лет</h2>
          <p>
            Оформлять финансовый продукт раньше установленного возраста нельзя. Если
            хотите узнать о других форматах участия, напишите мне напрямую.
          </p>
          <div className="result-actions">
            <a
              href="https://t.me/DanIlMoneyRoad"
              target="_blank"
              rel="noreferrer"
              className="button button-yellow button-large"
            >
              Спросить в Telegram <TelegramIcon />
            </a>
            <button type="button" className="button button-ghost-light" onClick={reset}>
              Изменить возраст
            </button>
          </div>
        </section>
      )}

      {step === 4 && age !== "under14" && (
        <section className="calculator-step result-step wide">
          <div className="result-card">
            <p className="step-label">Твой предварительный расчёт</p>
            <h2>
              Предварительно доступно:{" "}
              <span>{formatMoney(total)}</span>
            </h2>
            <div className="result-list">
              {selectedOffers.map((offer) => (
                <div key={offer.id}>
                  <span>
                    <strong>{offer.name}</strong>
                    <small>{offer.conditions[0]}</small>
                  </span>
                  <b>{formatMoney(offer.payout)}</b>
                </div>
              ))}
              {loanCount > 0 && (
                <div>
                  <span>
                    <strong>МФО — {loanCount}</strong>
                    <small>После подтверждения каждого результата</small>
                  </span>
                  <b>{formatMoney(loanCount * firstLoanPayout)}</b>
                </div>
              )}
              {!resultLines.length && (
                <div className="empty-result">
                  Вы пока не выбрали предложения. Итоговая сумма равна 0 ₽.
                </div>
              )}
            </div>
            <p className="result-disclaimer">
              Итоговая доступность зависит от соответствия требованиям и выполнения
              целевого действия.
            </p>
          </div>

          <div className="result-actions">
            <button
              type="button"
              className="button button-yellow button-large"
              onClick={openTelegram}
            >
              Скопировать расчёт и открыть Telegram <TelegramIcon />
            </button>
            <button type="button" className="button button-ghost-light" onClick={reset}>
              Изменить ответы
            </button>
            <button
              type="button"
              className="button button-ghost-light"
              onClick={() => copyResult()}
            >
              <Copy /> Скопировать результат
            </button>
          </div>
          {copyStatus === "copied" && (
            <p className="copy-message success">
              {copyMessage}
            </p>
          )}
          {copyStatus === "error" && (
            <div className="copy-fallback">
              <p className="copy-message error">
                Не удалось скопировать автоматически. Текст расчёта показан ниже.
              </p>
              <pre>{resultText}</pre>
              <div className="copy-fallback-actions">
                <button
                  type="button"
                  className="button button-yellow"
                  onClick={() => copyResult()}
                >
                  <Copy /> Скопировать ещё раз
                </button>
                <a
                  href="https://t.me/DanIlMoneyRoad"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-ghost-light"
                >
                  Открыть Telegram <TelegramIcon />
                </a>
              </div>
            </div>
          )}
          <Link href="/safety" className="calculator-safety-link">
            Прочитать важные условия безопасности <ArrowRight />
          </Link>
        </section>
      )}
    </div>
  );
}
