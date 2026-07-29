import type { Metadata } from "next";
import { Suspense } from "react";
import { CalculatorEntry } from "@/components/CalculatorEntry";

export const metadata: Metadata = {
  title: "Калькулятор выплат",
  description:
    "Рассчитайте предварительную сумму по доступным предложениям MoneyRoad.",
  alternates: { canonical: "/calculator" },
};

export default function CalculatorPage() {
  return (
    <main className="calculator-page dark-section">
      <div className="container calculator-page-inner">
        <div className="calculator-heading">
          <p className="eyebrow yellow">Калькулятор MoneyRoad</p>
          <h1>Рассчитайте предварительную сумму</h1>
          <p>
            Ответьте на несколько вопросов и выберите предложения, которые готовы
            рассмотреть.
          </p>
        </div>
        <Suspense fallback={<div className="calculator-shell">Загрузка калькулятора…</div>}>
          <CalculatorEntry />
        </Suspense>
      </div>
    </main>
  );
}
