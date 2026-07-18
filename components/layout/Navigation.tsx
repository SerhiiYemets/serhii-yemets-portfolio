"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { navigation } from "@/constants/navigation";
import styles from "./Navigation.module.css";

export default function Navigation() {
    const pathname = usePathname();
    const t = useTranslations("navigation");

    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                {navigation.map(({ key, href }) => (
                    <li key={href}>
                        <Link
                            href={href}
                            className={clsx(styles.link, pathname === href && styles.active)}
                            aria-current={pathname === href ? "page" : undefined}
                        >
                            {t(key)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
