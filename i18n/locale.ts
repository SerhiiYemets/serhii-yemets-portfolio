import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";

import { routing, type Locale } from "./routing";

export function ensureLocale(locale: string): Locale {
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return locale;
}
