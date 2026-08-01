"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/calculator", label: "Калькулятор" },
  { href: "/offers", label: "Предложения" },
  { href: "/how-it-works", label: "Как это работает" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/about", label: "О проекте" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="MoneyRoad — главная">
          <span className="brand-logo">
            <Image
              src="/mr-logo-header.webp"
              alt=""
              width={48}
              height={48}
              priority
              unoptimized
            />
          </span>
          <span>MoneyRoad</span>
        </Link>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "nav-link active" : "nav-link"}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {!isHome && (
          <Link href="/calculator" className="button button-yellow header-cta">
            Рассчитать сумму
          </Link>
        )}

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          <nav className="container" aria-label="Мобильная навигация">
            {navItems.map((item) => (
              <Link
                key={item.href}
              href={item.href}
              className={pathname === item.href ? "mobile-link active" : "mobile-link"}
              onClick={() => setOpen(false)}
            >
                {item.label}
              </Link>
            ))}
            <Link href="/safety" className="mobile-link" onClick={() => setOpen(false)}>
              Безопасность
            </Link>
            {!isHome && (
              <Link
                href="/calculator"
                className="button button-yellow mobile-menu-cta"
                onClick={() => setOpen(false)}
              >
                Рассчитать сумму
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
