import { Code, Server, Wrench, Cloud, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import { techStack, type TechCategoryKey } from "@/data/techStack";
import Reveal from "@/components/ui/Reveal";
import styles from "./TechStack.module.css";

const icons: Record<TechCategoryKey, LucideIcon> = {
    frontend: Code,
    backend: Server,
    tools: Wrench,
    devops: Cloud,
};

export default function TechStack() {
    const t = useTranslations("techStack");

    return (
        <section className={styles.section} id="tech-stack">
            <div className={styles.container}>
                <Reveal className={styles.header}>
                    <p className={styles.subtitle}>{t("subtitle")}</p>

                    <h2 className={styles.title}>{t("title")}</h2>

                    <p className={styles.description}>{t("description")}</p>
                </Reveal>

                <div className={styles.grid}>
                    {techStack.map((category, index) => {
                        const Icon = icons[category.key];

                        return (
                            <Reveal
                                key={category.key}
                                className={styles.card}
                                delay={index * 0.08}
                            >
                                <span className={styles.iconWrap}>
                                    <Icon size={22} />
                                </span>

                                <h3 className={styles.cardTitle}>
                                    {t(`categories.${category.key}`)}
                                </h3>

                                <div className={styles.tags}>
                                    {category.technologies.map((tech) => (
                                        <span key={tech} className={styles.tag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
