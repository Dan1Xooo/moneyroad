import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";

const siteLinks = [
  ["/", "Главная"],
  ["/calculator", "Калькулятор"],
  ["/offers", "Предложения"],
  ["/how-it-works", "Как это работает"],
  ["/reviews", "Отзывы"],
  ["/about", "О проекте"],
  ["/safety", "Безопасность"],
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <Image
                src="/mr-logo-medium.webp"
                alt="Логотип MR"
                width={112}
                height={112}
                unoptimized
              />
            </div>
            <div>
              <p className="footer-name">MoneyRoad</p>
              <p>Дополнительный заработок и выгода на финансовых продуктах.</p>
            </div>
          </div>

          <div className="footer-columns">
            <div>
              <p className="footer-label">Навигация</p>
              {siteLinks.map(([href, label]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </div>
            <div>
              <p className="footer-label">Telegram</p>
              <a href="https://t.me/MRMoneyRoad" target="_blank" rel="noreferrer">
                Telegram-канал <ArrowUpRight />
              </a>
              <a href="https://t.me/MoneyRoadOtzivi" target="_blank" rel="noreferrer">
                Канал с отзывами <ArrowUpRight />
              </a>
              <a href="https://t.me/DanIlMoneyRoad" target="_blank" rel="noreferrer">
                Связаться со мной <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-disclaimer">
          <p>
            Информация на сайте носит ознакомительный характер. MoneyRoad не является
            банком, кредитной или микрофинансовой организацией. Предложения, условия и
            размеры вознаграждений могут изменяться. Решение об оформлении любого
            продукта ты принимаешь самостоятельно.
          </p>
          <p>© {new Date().getFullYear()} MoneyRoad</p>
        </div>
      </div>
    </footer>
  );
}
