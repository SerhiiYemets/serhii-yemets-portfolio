"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { navigation } from "@/constants/navigation";

import styles from "./Navigation.module.css";

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                {navigation.map(({ title, href }) => (
                    <li key={href}>
                        <Link
                            href={href}
                            className={clsx(styles.link, pathname === href && styles.active)}
                            aria-current={pathname === href ? "page" : undefined}
                        >
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
