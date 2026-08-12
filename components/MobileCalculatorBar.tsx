"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileCalculatorBar() {
  const pathname = usePathname();

  if (pathname === "/calculator") {
    return null;
  }

  return (
    <div className="mobile-calc-bar">
      <Link href="/calculator" className="button button-yellow">
        Рассчитать сумму
      </Link>
    </div>
  );
}
