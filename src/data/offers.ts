export type OfferCategory = "debit" | "savings" | "business" | "mfo";

export type Offer = {
  id: string;
  category: OfferCategory;
  name: string;
  shortName: string;
  payout: number;
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
    id: "alfa-savings",
    category: "savings",
    name: "Накопительный счёт Альфа-Банка",
    shortName: "Накопительный счёт",
    payout: 750,
    payoutPrefix: "",
    ageMin: 18,
    newClientOnly: false,
    active: true,
    description: "Предложение по накопительному счёту с индивидуальной проверкой доступности.",
    conditions: [
      "Точные условия сообщаются перед оформлением",
      "Доступность проверяется индивидуально",
      "Выплата — после выполнения условий и подтверждения результата",
    ],
    duration: "Уточняется перед оформлением",
    warning: "Наличие дебетовой карты не исключает это предложение автоматически.",
    hiddenName: false,
    telegramLabel: "Накопительный счёт Альфа-Банка — 750 ₽",
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
      "Отдельную карту выбрать нельзя",
      "Действия по каждой карте сообщаются до начала",
      "Выплата после полного выполнения условий пакета",
      "Расходы на обслуживание по условиям предложения отсутствуют",
      "Доступность проверяется индивидуально",
    ],
    duration: "Примерно 7–10 дней",
    warning: "Частичная выплата на сайте не предусмотрена.",
    hiddenName: false,
    telegramLabel: "Пакет из пяти бизнес-карт — 15 000 ₽",
  },
  {
    id: "loan-offers",
    category: "mfo",
    name: "Заёмные предложения",
    shortName: "Заёмные предложения",
    payout: 1000,
    payoutPrefix: "от",
    ageMin: 18,
    newClientOnly: false,
    active: true,
    description: "Заёмные предложения с заранее объяснённым порядком действий.",
    conditions: [
      "Заём поступает на вашу банковскую карту",
      "Стандартный срок договора — примерно 10–12 дней",
      "Погашение — примерно через 7 дней по полученной инструкции",
      "Организация и сумма займа сообщаются в личных сообщениях",
      "Договор, полную стоимость займа и подключённые услуги нужно проверить самостоятельно",
      "Согласованные проценты компенсируются MoneyRoad после соблюдения инструкции",
    ],
    duration: "Около 7–12 дней",
    warning:
      "При нарушении сроков, отклонении от инструкции или подключении дополнительных услуг дополнительные расходы остаются ответственностью пользователя.",
    hiddenName: true,
    telegramLabel: "Заёмные предложения",
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
  savings: "Накопительные счета",
  business: "Бизнес-карты",
  mfo: "Заёмные предложения",
};

export const formatMoney = (value: number) =>
  new Intl.NumberFormat("ru-RU").format(value) + " ₽";
