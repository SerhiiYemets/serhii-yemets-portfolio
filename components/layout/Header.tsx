import Link from "next/link";
import Navigation from "./Navigation";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    SERHII YEMETS
                </Link>

                <Navigation />

            </div>
        </header>
    );
}