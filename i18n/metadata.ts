import type { Metadata } from "next";

import { routing, type Locale } from "./routing";

const openGraphLocales: Record<Locale, string> = {
    en: "en_US",
    cs: "cs_CZ",
    uk: "uk_UA",
};

export function getOpenGraphLocale(locale: Locale): string {
    return openGraphLocales[locale];
}

export function buildAlternates(
    locale: Locale,
    path = ""
): NonNullable<Metadata["alternates"]> {
    const languages = Object.fromEntries(
        routing.locales.map((item) => [item, `/${item}${path}`])
    );

    return {
        canonical: `/${locale}${path}`,
        languages: {
            ...languages,
            "x-default": `/${routing.defaultLocale}${path}`,
        },
    };
}
