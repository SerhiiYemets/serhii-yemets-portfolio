import Link from "next/link";
import { Mail } from "lucide-react";

import { navigation } from "@/constants/navigation";
import { socialLinks } from "@/data/socialLinks";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import styles from "./Footer.module.css";

const socials = [
    { label: "GitHub", href: socialLinks.github, Icon: GitHubIcon },
    { label: "LinkedIn", href: socialLinks.linkedin, Icon: LinkedInIcon },
    { label: "Email", href: `mailto:${socialLinks.email}`, Icon: Mail },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            Serhii<span>Yemets</span>
                        </Link>

                        <p className={styles.tagline}>
                            Full Stack JavaScript Developer building scalable,
                            production-ready web applications.
                        </p>
                    </div>

                    <nav className={styles.nav} aria-label="Footer">
                        {navigation.map(({ title, href }) => (
                            <Link key={href} href={href} className={styles.navLink}>
                                {title}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copy}>
                        © {new Date().getFullYear()} Serhii Yemets. All rights reserved.
                    </p>

                    <div className={styles.socials}>
                        {socials.map(({ label, href, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className={styles.social}
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
