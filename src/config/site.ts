export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mrmoneyroad.ru";

export const absoluteSiteUrl = (path = "/") => new URL(path, SITE_URL).toString();
