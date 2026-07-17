import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Project } from "@/types/project";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
    project: Project;
}

const categoryLabels: Record<Project["category"], string> = {
    commercial: "Commercial",
    team: "Team",
    pet: "Pet Project",
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className={styles.card}
            aria-label={`View project: ${project.title}`}
        >
            <div className={styles.imageWrap}>
                <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
                    className={styles.image}
                />

                <div className={styles.badges}>
                    <span className={styles.category}>
                        {categoryLabels[project.category]}
                    </span>

                    {project.featured && (
                        <span className={styles.featured}>Featured</span>
                    )}
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.meta}>
                    <span className={styles.role}>{project.role}</span>

                    {project.duration && (
                        <span className={styles.duration}>{project.duration}</span>
                    )}
                </div>

                <h3 className={styles.title}>{project.title}</h3>

                <p className={styles.description}>{project.shortDescription}</p>

                <div className={styles.tech}>
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className={styles.tag}>
                            {tech}
                        </span>
                    ))}

                    {project.technologies.length > 4 && (
                        <span className={styles.tagMore}>
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>

                <span className={styles.cta}>
                    View Project
                    <ArrowUpRight size={17} />
                </span>
            </div>
        </Link>
    );
}
