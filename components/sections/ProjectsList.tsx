import { useTranslations } from "next-intl";

import type { Project, ProjectCategory } from "@/types/project";
import ProjectCard from "@/components/cards/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import styles from "./ProjectsList.module.css";

interface ProjectsListProps {
    category: ProjectCategory;
    projects: Project[];
}

export default function ProjectsList({ category, projects }: ProjectsListProps) {
    const t = useTranslations("projectsPages");

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Reveal className={styles.header}>
                    <p className={styles.eyebrow}>{t("eyebrow")}</p>

                    <h1 className={styles.title}>{t(`${category}.title`)}</h1>

                    <p className={styles.description}>{t(`${category}.description`)}</p>
                </Reveal>

                {projects.length > 0 ? (
                    <div className={styles.grid}>
                        {projects.map((project, index) => (
                            <Reveal
                                key={project.id}
                                className={styles.cardWrap}
                                delay={(index % 3) * 0.08}
                            >
                                <ProjectCard project={project} />
                            </Reveal>
                        ))}
                    </div>
                ) : (
                    <p className={styles.empty}>{t("empty")}</p>
                )}
            </div>
        </section>
    );
}
