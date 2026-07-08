"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/constants/navigation";

import styles from "./Navigation.module.css";

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className={styles.navigation}>
        <ul className={styles.list}>
            {navigation.map(({ title, href }) => {
            const isActive = pathname === href;

            return (
                <li key={href}>
                <Link
                    href={href}
                    className={`${styles.link} ${
                    isActive ? styles.active : ""
                    }`}
                >
                    {title}
                </Link>
                </li>
            );
            })}
        </ul>
        </nav>
    );
}