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
  "Все продукты ты оформляешь самостоятельно.",
  "Калькулятор показывает предварительную, а не гарантированную сумму.",
  "Актуальность и доступность предложений проверяются перед оформлением в личных сообщениях.",
  "Выплата зависит от выполнения целевого действия.",
  "Условия и размер выплаты могут изменяться. Уточнять в личных сообщениях.",
];

export default function SafetyPage() {
  return (
    <main>
      <section className="page-hero safety-hero dark-section">
        <div className="container safety-title-grid">
          <PageIntro
            eyebrow="Перед оформлением"
            title="Безопасность и важные условия"
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

      <CtaBand
        title="Проверьте только подходящие предложения"
        text="Калькулятор учитывает возраст и исключает дебетовые карты банков, клиентом которых вы уже были."
      />
    </main>
  );
}
