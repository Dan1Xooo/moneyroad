import Link from "next/link";
import { ArrowRight } from "@/components/icons";

type CtaBandProps = {
  title?: string;
  text?: string;
};

export function CtaBand({
  title = "Узнай свою предварительную сумму",
  text = "Несколько вопросов, и ты увидишь только подходящие по возрасту и статусу предложения.",
}: CtaBandProps) {
  return (
    <section className="cta-band section">
      <div className="container cta-band-inner">
        <div>
          <p className="eyebrow">Предварительный расчёт</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link href="/calculator" className="button button-yellow button-large">
          Открыть калькулятор <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
