import Link from "next/link";
import { Project } from "@/types/project";
import styles from "./ProjectCard.module.css";
import Image from "next/image";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.image}>
                <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className={styles.projectImage}
                />
            </div>

            <div className={styles.content}>
                <div className={styles.top}>
                    <span className={styles.category}>{project.category}</span>

                    {project.featured && (
                        <span className={styles.featured}>Featured</span>
                    )}
                    </div>

                    <h3 className={styles.title}>{project.title}</h3>

                    <p className={styles.description}>
                    {project.shortDescription}
                    </p>

                    <div className={styles.tech}>
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className={styles.tag}>
                        {tech}
                        </span>
                    ))}
                    </div>

                    <div className={styles.footer}>
                    <Link
                        href={`/projects/${project.slug}`}
                        className={styles.button}
                    >
                        View Project →
                    </Link>
                </div>
            </div>
        </article>
    );
}