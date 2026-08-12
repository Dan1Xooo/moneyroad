import type { Metadata } from "next";
import { Suspense } from "react";
import { CalculatorEntry } from "@/components/CalculatorEntry";

export const metadata: Metadata = {
  title: "Калькулятор выплат",
  description:
    "Рассчитай предварительную сумму по доступным предложениям MoneyRoad.",
  alternates: { canonical: "/calculator" },
};

export default function CalculatorPage() {
  return (
    <main className="calculator-page dark-section">
      <div className="container calculator-page-inner">
        <div className="calculator-heading">
          <p className="eyebrow yellow">Калькулятор MoneyRoad</p>
          <h1>Рассчитай предварительную сумму</h1>
          <p>
            Ответь на несколько вопросов и выбери предложение, за которое ты готов
            получить вознаграждение.
          </p>
        </div>
        <Suspense fallback={<div className="calculator-shell">Загрузка калькулятора…</div>}>
          <CalculatorEntry />
        </Suspense>
      </div>
    </main>
  );
}
