"use client";

import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { localeLabels } from "@/i18n/locale";
import styles from "./LanguageSwitcher.module.css";

interface LanguageSwitcherProps {
    className?: string;
}

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
    const pathname = usePathname();
    const activeLocale = useLocale();
    const t = useTranslations("languageSwitcher");

    return (
        <div
            className={clsx(styles.switcher, className)}
            role="group"
            aria-label={t("label")}
        >
            {routing.locales.map((locale) => {
                const isActive = locale === activeLocale;

                return (
                    <Link
                        key={locale}
                        href={pathname}
                        locale={locale}
                        aria-label={t(locale)}
                        aria-current={isActive ? "true" : undefined}
                        className={clsx(styles.option, isActive && styles.active)}
                    >
                        {localeLabels[locale]}
                    </Link>
                );
            })}
        </div>
    );
}
