import type { Metadata } from "next";
import { Mail, ArrowUpRight, Phone } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ensureLocale } from "@/i18n/locale";
import { buildAlternates } from "@/i18n/metadata";
import { socialLinks } from "@/data/socialLinks";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";
import styles from "./page.module.css";

interface PageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const locale = ensureLocale((await params).locale);
    const t = await getTranslations({ locale, namespace: "metadata" });

    return {
        title: t("contact.title"),
        description: t("contact.description"),
        alternates: buildAlternates(locale, "/contact"),
        openGraph: {
            title: t("contact.title"),
            description: t("contact.description"),
        },
    };
}

export default async function ContactPage({ params }: PageProps) {
    const locale = ensureLocale((await params).locale);
    setRequestLocale(locale);

    const t = await getTranslations("contact");

    const channels = [
        {
            label: t("channels.phone"),
            value: "+420 774 830 644",
            href: `tel:${socialLinks.phone}`,
            Icon: Phone,
            external: false,
        },
        {
            label: t("channels.github"),
            value: "github.com/SerhiiYemets",
            href: socialLinks.github,
            Icon: GitHubIcon,
            external: true,
        },
        {
            label: t("channels.linkedin"),
            value: "Serhii Yemets",
            href: socialLinks.linkedin,
            Icon: LinkedInIcon,
            external: true,
        },
    ];

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <Reveal className={styles.header}>
                    <p className={styles.eyebrow}>{t("eyebrow")}</p>

                    <h1 className={styles.title}>{t("title")}</h1>

                    <p className={styles.lede}>{t("lede")}</p>
                </Reveal>

                <Reveal className={styles.emailCard} delay={0.05}>
                    <div>
                        <p className={styles.emailLabel}>{t("preferEmail")}</p>
                        <a
                            href={`mailto:${socialLinks.email}`}
                            className={styles.emailValue}
                        >
                            {socialLinks.email}
                        </a>
                    </div>

                    <a href={`mailto:${socialLinks.email}`} className={styles.emailButton}>
                        <Mail size={18} />
                        {t("sendEmail")}
                    </a>
                </Reveal>

                <div className={styles.channels}>
                    {channels.map(({ label, value, href, Icon, external }, index) => (
                        <Reveal
                            key={label}
                            className={styles.channelWrap}
                            delay={index * 0.08}
                        >
                            <a
                                href={href}
                                className={styles.channel}
                                {...(external
                                    ? { target: "_blank", rel: "noopener noreferrer" }
                                    : {})}
                            >
                                <span className={styles.channelIcon}>
                                    <Icon size={20} />
                                </span>

                                <span className={styles.channelText}>
                                    <span className={styles.channelLabel}>{label}</span>
                                    <span className={styles.channelValue}>{value}</span>
                                </span>

                                <ArrowUpRight size={18} className={styles.channelArrow} />
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
