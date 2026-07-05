import Link from "next/link";
import styles from "./Navigation.module.css";

const links = [
    { label: "About me", href: "/about"},
    { label: "Commercial", href: "/commercial-projects" },
    { label: "Team", href: "./team-projects"},
    { label: "Pet", href: "./pet-projects"},
    { label: "Contact", href: "./contact"},
];

export default function Navigation() {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className={styles.link}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}