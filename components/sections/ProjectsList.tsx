import { Project } from "@/types/project";
import ProjectCard from "@/components/cards/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import styles from "./ProjectsList.module.css";

interface ProjectsListProps {
    title: string;
    description: string;
    projects: Project[];
}

export default function ProjectsList({
    title,
    description,
    projects,
}: ProjectsListProps) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Reveal className={styles.header}>
                    <p className={styles.eyebrow}>Portfolio</p>

                    <h1 className={styles.title}>{title}</h1>

                    <p className={styles.description}>{description}</p>
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
                    <p className={styles.empty}>
                        Projects in this category are coming soon.
                    </p>
                )}
            </div>
        </section>
    );
}
