import { Code, Server, Wrench, Cloud, type LucideIcon } from "lucide-react";

import { techStack } from "@/data/techStack";
import Reveal from "@/components/ui/Reveal";
import styles from "./TechStack.module.css";

const icons: Record<string, LucideIcon> = {
    Frontend: Code,
    Backend: Server,
    Tools: Wrench,
    "Deployment & DevOps": Cloud,
};

export default function TechStack() {
    return (
        <section className={styles.section} id="tech-stack">
            <div className={styles.container}>
                <Reveal className={styles.header}>
                    <p className={styles.subtitle}>Tech Stack</p>

                    <h2 className={styles.title}>Technologies I Use</h2>

                    <p className={styles.description}>
                        Modern technologies that I use to build scalable, responsive and
                        production-ready web applications.
                    </p>
                </Reveal>

                <div className={styles.grid}>
                    {techStack.map((category, index) => {
                        const Icon = icons[category.title] ?? Code;

                        return (
                            <Reveal
                                key={category.title}
                                className={styles.card}
                                delay={index * 0.08}
                            >
                                <span className={styles.iconWrap}>
                                    <Icon size={22} />
                                </span>

                                <h3 className={styles.cardTitle}>{category.title}</h3>

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
