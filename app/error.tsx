"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="error-page dark-section">
      <div className="container">
        <p className="eyebrow yellow">Что-то пошло не так</p>
        <h1>Не удалось открыть страницу</h1>
        <p>Попробуйте загрузить её ещё раз. Данные калькулятора на сервер не отправлялись.</p>
        <button type="button" className="button button-yellow button-large" onClick={reset}>
          Повторить
        </button>
      </div>
    </main>
  );
}

