export type OfferCategory = "debit" | "business" | "mfo";

export type Offer = {
  id: string;
  category: OfferCategory;
  name: string;
  shortName: string;
  payout: number;
  payoutLabel?: string;
  catalogNote?: string;
  payoutPrefix: "" | "от";
  ageMin: number;
  newClientOnly: boolean;
  active: boolean;
  description: string;
  conditions: string[];
  duration: string;
  warning: string;
  hiddenName: boolean;
  telegramLabel: string;
};

export const offers: Offer[] = [
  {
    id: "alfa-debit",
    category: "debit",
    name: "Дебетовая карта Альфа-Банка",
    shortName: "Альфа-Банк",
    payout: 1000,
    payoutLabel: "1000 ₽ гарантировано + 1450 ₽ через написание отзывов",
    catalogNote:
      "1000 ₽ даётся за оформление после выполнения целевого действия. Ещё 1450 ₽ можно получить за написание отзывов.",
    payoutPrefix: "",
    ageMin: 14,
    newClientOnly: true,
    active: true,
    description: "Физическая дебетовая карта для нового клиента банка.",
    conditions: [
      "Только для нового клиента Альфа-Банка",
      "Получить физическую карту",
      "Совершить покупку физической картой от 100 ₽",
      "Дождаться подтверждения целевого действия",
    ],
    duration: "Срок подтверждается перед оформлением",
    warning: "Если карта уже была, предложение недоступно.",
    hiddenName: false,
    telegramLabel: "Дебетовая карта Альфа-Банка — 1 000 ₽",
  },
  {
    id: "tbank-debit",
    category: "debit",
    name: "Дебетовая карта Т-Банка",
    shortName: "Т-Банк",
    payout: 1000,
    payoutLabel: "1000 ₽ гарантировано + 1000 ₽ через написание отзывов",
    catalogNote:
      "1000 ₽ можно получить за выполнение целевого действия. Ещё 1000 ₽ можно получить за написание отзывов.",
    payoutPrefix: "",
    ageMin: 14,
    newClientOnly: true,
    active: true,
    description: "Физическая дебетовая карта для нового клиента банка.",
    conditions: [
      "Только для нового клиента Т-Банка",
      "Получить физическую карту",
      "Совершить покупку физической картой от 500 ₽",
      "Дождаться подтверждения целевого действия",
    ],
    duration: "Срок подтверждается перед оформлением",
    warning: "Если карта уже была, предложение недоступно.",
    hiddenName: false,
    telegramLabel: "Дебетовая карта Т-Банка — 1 000 ₽",
  },
  {
    id: "ozon-debit",
    category: "debit",
    name: "Дебетовая карта Ozon Банка",
    shortName: "Ozon Банк",
    payout: 300,
    payoutPrefix: "",
    ageMin: 14,
    newClientOnly: true,
    active: true,
    description: "Дебетовая карта Ozon Банка для нового клиента.",
    conditions: [
      "Только для нового клиента Ozon Банка",
      "Получить карту",
      "Совершить покупку от 100 ₽",
      "Дождаться подтверждения целевого действия",
    ],
    duration: "Срок подтверждается перед оформлением",
    warning: "Если карта уже была, предложение недоступно.",
    hiddenName: false,
    telegramLabel: "Дебетовая карта Ozon Банка — 300 ₽",
  },
  {
    id: "business-pack",
    category: "business",
    name: "Пакет из пяти бизнес-карт",
    shortName: "5 бизнес-карт",
    payout: 15000,
    payoutPrefix: "",
    ageMin: 18,
    newClientOnly: false,
    active: true,
    description: "Единый пакет: Т-Банк, Альфа-Банк, ВТБ, Ozon Банк и Сбер.",
    conditions: [
      "Оформляется только полным пакетом",
      "Выплата после полного выполнения условий по каждой карте",
      "Доступность проверяется индивидуально в личных сообщениях",
    ],
    duration: "Примерно 7–10 дней",
    warning: "",
    hiddenName: false,
    telegramLabel: "Пакет из пяти бизнес-карт — 15 000 ₽",
  },
  {
    id: "loan-offers",
    category: "mfo",
    name: "МФО",
    shortName: "МФО",
    payout: 1000,
    payoutPrefix: "от",
    ageMin: 18,
    newClientOnly: false,
    active: true,
    description: "Условия по МФО строго в личных сообщениях.",
    conditions: [
      "Взять МФО со сроком от 10 дней",
      "Условия по МФО строго в личных сообщениях",
    ],
    duration: "Около 7–12 дней",
    warning: "",
    hiddenName: true,
    telegramLabel: "МФО",
  },
];

export const activeOffers = offers.filter((offer) => offer.active);

export const loanPayoutConfig = {
  firstMax: 3,
  additionalMinimumPayout: 500,
  additionalPublicMax: 10,
} as const;

export const categoryLabels: Record<OfferCategory, string> = {
  debit: "Дебетовые карты",
  business: "Бизнес-карты",
  mfo: "МФО",
};

export const formatMoney = (value: number) =>
  new Intl.NumberFormat("ru-RU").format(value) + " ₽";
