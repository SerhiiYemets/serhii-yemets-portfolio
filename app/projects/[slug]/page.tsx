import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import styles from "./ProjectPage.module.css";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectPage({
    params,
}: ProjectPageProps) {
    const { slug } = await params;

    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Link href="/" className={styles.backLink}>
                ← Back to home
                </Link>
                
                    <div className={styles.header}>
                    <p className={styles.category}>{project.category}</p>

                    <h1 className={styles.title}>{project.title}</h1>

                    <p className={styles.description}>{project.fullDescription}</p>
                    </div>

                    <div className={styles.meta}>
                    <div className={styles.metaItem}>
                        <span>Role</span>
                        <strong>{project.role}</strong>
                    </div>

                    {project.duration && (
                        <div className={styles.metaItem}>
                        <span>Duration</span>
                        <strong>{project.duration}</strong>
                        </div>
                    )}

                    <div className={styles.metaItem}>
                        <span>Category</span>
                        <strong>{project.category}</strong>
                    </div>
                    </div>

                    <div className={styles.block}>
                        <h2>My Contribution</h2>

                        <div className={styles.tags}>
                            {project.contribution.map((item) => (
                            <span key={item}>{item}</span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.links}>
                    {project.github && (
                        <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        >
                        GitHub
                        </a>
                    )}

                    {project.demo && (
                        <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        >
                        Live Demo
                        </a>
                    )}
                    </div>

                    <div className={styles.block}>
                    <h2>Technologies</h2>

                    <div className={styles.tags}>
                        {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                        ))}
                    </div>
                    </div>

                    <div className={styles.block}>
                    <h2>Responsibilities</h2>

                    <ul>
                        {project.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                        ))}
                    </ul>
                    </div>

                    {project.challenges && project.challenges.length > 0 && (
                    <div className={styles.block}>
                        <h2>Challenges</h2>

                        {project.images.length > 0 && (
                            <div className={styles.block}>
                                <h2>Project Gallery</h2>

                                <div className={styles.gallery}>
                                {project.images.map((image) => (
                                    <div key={image} className={styles.galleryItem}>
                                    <img src={image} alt={project.title} />
                                    </div>
                                ))}
                                </div>
                            </div>
                            )}

                        <ul>
                        {project.challenges.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}