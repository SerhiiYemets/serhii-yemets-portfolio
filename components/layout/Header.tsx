"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

import { navigation } from "@/constants/navigation";
import Navigation from "./Navigation";
import styles from "./Header.module.css";

export default function Header() {
    const pathname = usePathname();
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

                <button
                    type="button"
                    className={styles.menuButton}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <div
                className={clsx(styles.mobileMenu, menuOpen && styles.mobileMenuOpen)}
                hidden={!menuOpen}
            >
                <nav>
                    <ul className={styles.mobileList}>
                        {navigation.map(({ title, href }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    onClick={() => setMenuOpen(false)}
                                    className={clsx(
                                        styles.mobileLink,
                                        pathname === href && styles.mobileLinkActive
                                    )}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
