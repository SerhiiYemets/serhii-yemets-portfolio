"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { navigation } from "@/constants/navigation";
import Navigation from "./Navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "./Header.module.css";

export default function Header() {
    const pathname = usePathname();
    const t = useTranslations();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <header className={clsx(styles.header, scrolled && styles.scrolled)}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Serhii<span>Yemets</span>
                </Link>

                <Navigation />

                <div className={styles.actions}>
                    <LanguageSwitcher className={styles.switcher} />

                    <button
                        type="button"
                        className={styles.menuButton}
                        aria-label={menuOpen ? t("common.closeMenu") : t("common.openMenu")}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            <div
                className={clsx(styles.mobileMenu, menuOpen && styles.mobileMenuOpen)}
                hidden={!menuOpen}
            >
                <nav aria-label={t("common.menuLabel")}>
                    <ul className={styles.mobileList}>
                        {navigation.map(({ key, href }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    onClick={() => setMenuOpen(false)}
                                    className={clsx(
                                        styles.mobileLink,
                                        pathname === href && styles.mobileLinkActive
                                    )}
                                >
                                    {t(`navigation.${key}`)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
