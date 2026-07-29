import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Check, Shield } from "@/components/icons";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Безопасность и условия",
  description: "Важные условия работы с финансовыми предложениями MoneyRoad.",
  alternates: { canonical: "/safety" },
};

const rules = [
  "Каждый продукт пользователь оформляет самостоятельно.",
  "MoneyRoad не является банком или микрофинансовой организацией.",
  "Сайт не принимает заявки на кредит и не выдаёт деньги.",
  "Сайт не хранит банковские данные и результаты калькулятора.",
  "Калькулятор показывает предварительную, а не гарантированную сумму.",
  "Актуальность и доступность предложения проверяются перед оформлением.",
  "Выплата зависит от выполнения целевого действия и подтверждения результата.",
  "Пользователь обязан изучить условия банка или финансовой организации.",
  "При нарушении регламента дополнительные расходы могут остаться ответственностью пользователя.",
  "Названия и условия некоторых предложений сообщаются в личных сообщениях.",
  "Условия и размеры выплат могут изменяться.",
];

export default function SafetyPage() {
  return (
    <main>
      <section className="page-hero safety-hero dark-section">
        <div className="container safety-title-grid">
          <PageIntro
            eyebrow="Перед оформлением"
            title="Безопасность и важные условия"
            description="MoneyRoad помогает разобраться в предложениях, но решение и все действия всегда остаются за пользователем."
          />
          <div className="large-shield">
            <Shield />
          </div>
        </div>
      </section>

      <section className="section rules-section">
        <div className="container">
          <div className="rules-grid">
            {rules.map((rule, index) => (
              <article key={rule}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Check />
                <p>{rule}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section loan-risk-section">
        <div className="container">
          <div className="loan-risk-card">
            <div>
              <p className="eyebrow">Отдельно о займах</p>
              <h2>Заём — это обязательство вернуть деньги</h2>
            </div>
            <p>
              Получение займа создаёт обязательство вернуть полученные средства. Перед
              оформлением проверьте срок возврата, полную стоимость займа, подключённые
              услуги и последствия просрочки.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Проверьте только подходящие предложения"
        text="Калькулятор учитывает возраст и исключает дебетовые карты банков, клиентом которых вы уже были."
      />
    </main>
  );
}

