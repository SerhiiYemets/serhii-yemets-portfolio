import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { getFeaturedProjects } from "@/lib/projects";
import ProjectCard from "@/components/cards/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import styles from "./FeaturedProjects.module.css";

export default function FeaturedProjects() {
    const locale = useLocale();
    const t = useTranslations("featuredProjects");
    const featuredProjects = getFeaturedProjects(locale);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Reveal className={styles.header}>
                    <p className={styles.subtitle}>{t("subtitle")}</p>

                    <h2 className={styles.title}>{t("title")}</h2>

                    <p className={styles.description}>{t("description")}</p>
                </Reveal>

                <div className={styles.grid}>
                    {featuredProjects.map((project, index) => (
                        <Reveal
                            key={project.id}
                            className={styles.cardWrap}
                            delay={(index % 3) * 0.08}
                        >
                            <ProjectCard project={project} />
                        </Reveal>
                    ))}
                </div>

                <div className={styles.actions}>
                    <Link href="/commercial-projects" className={styles.button}>
                        {t("viewAll")}
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
