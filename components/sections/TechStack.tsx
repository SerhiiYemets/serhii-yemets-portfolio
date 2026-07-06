import styles from "./TechStack.module.css";
import { techStack } from "@/data/techStack";

export default function TechStack() {
    return (
        <section className={styles.section} id="tech-stack">
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.subtitle}>
                        Tech Stack
                    </p>

                <h2 className={styles.title}>Technologies I Use</h2>

                <p className={styles.description}>
                    Modern technologies that I use to build scalable, responsive and
                    production-ready web applications.
                </p>
                </div>

                <div className={styles.grid}>
                    {techStack.map((category) => (
                        <article key={category.title} className={styles.card}>
                        <h3 className={styles.cardTitle}>{category.title}</h3>

                        <div className={styles.tags}>
                            {category.technologies.map((tech) => (
                            <span key={tech} className={styles.tag}>
                                {tech}
                            </span>
                            ))}
                        </div>
                        </article>
                    ))}
                </div>              
            </div>
        </section>
    )
}