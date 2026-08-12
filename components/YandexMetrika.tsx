"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

const metrikaId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID || "111528085";
const counterId = metrikaId && /^\d+$/.test(metrikaId) ? Number(metrikaId) : null;

export function YandexMetrika() {
  const pathname = usePathname();
  const isFirstHit = useRef(true);

  useEffect(() => {
    if (!counterId || !window.ym) return;
    if (isFirstHit.current) {
      isFirstHit.current = false;
      return;
    }
    window.ym(counterId, "hit", window.location.href);
  }, [pathname]);

  if (!counterId) return null;

  return (
    <>
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=${counterId}", "ym");

            ym(${counterId}, "init", {
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              referrer: document.referrer,
              url: location.href,
              trackLinks: true,
              accurateTrackBounce: true
            });
          `,
        }}
      />
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://mc.yandex.ru/watch/${counterId}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}
