import { Project } from "@/types/project";
import ProjectCard from "@/components/cards/ProjectCard";
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
                <header className={styles.header}>
                <h1 className={styles.title}>{title}</h1>

                <p className={styles.description}>{description}</p>
                </header>

                <div className={styles.grid}>
                {projects.map((project) => (
                    <ProjectCard
                    key={project.id}
                    project={project}
                    />
                ))}
                </div>
            </div>
        </section>
    );
}