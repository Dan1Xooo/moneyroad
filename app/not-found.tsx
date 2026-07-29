import Link from "next/link";

export default function NotFound() {
  return (
    <main className="error-page dark-section">
      <div className="container">
        <p className="eyebrow yellow">Ошибка 404</p>
        <h1>Такой страницы нет</h1>
        <p>Вернитесь на главную или сразу рассчитайте предварительную сумму.</p>
        <div className="hero-actions">
          <Link href="/" className="button button-ghost button-large">
            На главную
          </Link>
          <Link href="/calculator" className="button button-yellow button-large">
            Открыть калькулятор
          </Link>
        </div>
      </div>
    </main>
  );
}

