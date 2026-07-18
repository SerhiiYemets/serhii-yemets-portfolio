import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "cs", "uk"],
    defaultLocale: "en",
    localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;
