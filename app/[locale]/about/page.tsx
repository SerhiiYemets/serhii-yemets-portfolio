import type { Metadata } from "next";
import { ArrowRight, MapPin, Briefcase, Sparkles } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { ensureLocale } from "@/i18n/locale";
import { buildAlternates } from "@/i18n/metadata";
import { techStack } from "@/data/techStack";
import Reveal from "@/components/ui/Reveal";
import styles from "./page.module.css";

interface PageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const locale = ensureLocale((await params).locale);
    const t = await getTranslations({ locale, namespace: "metadata" });

    return {
        title: t("about.title"),
        description: t("about.description"),
        alternates: buildAlternates(locale, "/about"),
        openGraph: {
            title: t("about.title"),
            description: t("about.description"),
        },
    };
}

export default async function AboutPage({ params }: PageProps) {
    const locale = ensureLocale((await params).locale);
    setRequestLocale(locale);

    return <AboutContent />;
}

function AboutContent() {
    const t = useTranslations("about.page");
    const tCategory = useTranslations("techStack.categories");

    const facts = [
        { label: t("facts.location"), value: t("facts.locationValue"), Icon: MapPin },
        { label: t("facts.role"), value: t("facts.roleValue"), Icon: Briefcase },
        { label: t("facts.focus"), value: t("facts.focusValue"), Icon: Sparkles },
    ];

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <Reveal className={styles.header}>
                    <p className={styles.eyebrow}>{t("eyebrow")}</p>

                    <h1 className={styles.title}>{t("title")}</h1>

                    <p className={styles.lede}>{t("lede")}</p>
                </Reveal>

                <div className={styles.intro}>
                    <Reveal className={styles.bio}>
                        <p>{t("p1")}</p>
                        <p>{t("p2")}</p>
                        <p>{t("p3")}</p>
                    </Reveal>

                    <Reveal className={styles.factsCard} delay={0.1}>
                        {facts.map(({ label, value, Icon }) => (
                            <div key={label} className={styles.fact}>
                                <span className={styles.factIcon}>
                                    <Icon size={18} />
                                </span>
                                <div>
                                    <p className={styles.factLabel}>{label}</p>
                                    <p className={styles.factValue}>{value}</p>
                                </div>
                            </div>
                        ))}
                    </Reveal>
                </div>

                <section className={styles.skills}>
                    <Reveal>
                        <h2 className={styles.skillsTitle}>{t("skillsTitle")}</h2>
                    </Reveal>

                    <div className={styles.skillsGrid}>
                        {techStack.map((category, index) => (
                            <Reveal
                                key={category.key}
                                className={styles.skillCard}
                                delay={index * 0.06}
                            >
                                <h3 className={styles.skillCardTitle}>
                                    {tCategory(category.key)}
                                </h3>
                                <div className={styles.tags}>
                                    {category.technologies.map((tech) => (
                                        <span key={tech} className={styles.tag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                <Reveal className={styles.cta}>
                    <div>
                        <h2 className={styles.ctaTitle}>{t("ctaTitle")}</h2>
                        <p className={styles.ctaText}>{t("ctaText")}</p>
                    </div>

                    <Link href="/contact" className={styles.ctaButton}>
                        {t("ctaButton")}
                        <ArrowRight size={18} />
                    </Link>
                </Reveal>
            </div>
        </div>
    );
}
