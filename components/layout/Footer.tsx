import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { navigation } from "@/constants/navigation";
import { socialLinks } from "@/data/socialLinks";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import TrackedLink from "@/components/analytics/TrackedLink";
import styles from "./Footer.module.css";

const socials = [
    { label: "GitHub", href: socialLinks.github, Icon: GitHubIcon, event: "github_click" },
    { label: "LinkedIn", href: socialLinks.linkedin, Icon: LinkedInIcon, event: "linkedin_click" },
    { label: "Email", href: `mailto:${socialLinks.email}`, Icon: Mail, event: "email_click" },
];

export default function Footer() {
    const t = useTranslations();
    const year = String(new Date().getFullYear());

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            Serhii<span>Yemets</span>
                        </Link>

                        <p className={styles.tagline}>{t("footer.tagline")}</p>
                    </div>

                    <nav className={styles.nav} aria-label={t("footer.navLabel")}>
                        {navigation.map(({ key, href }) => (
                            <Link key={href} href={href} className={styles.navLink}>
                                {t(`navigation.${key}`)}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copy}>{t("footer.rights", { year })}</p>

                    <div className={styles.socials}>
                        {socials.map(({ label, href, Icon, event }) => (
                            <TrackedLink
                                key={label}
                                href={href}
                                event={event}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className={styles.social}
                            >
                                <Icon size={18} />
                            </TrackedLink>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
