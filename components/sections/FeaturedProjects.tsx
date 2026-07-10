import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import styles from "./FeaturedProjects.module.css";

export default function FeaturedProjects() {
    const featuredProjects = projects.filter((project) => project.featured);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Reveal className={styles.header}>
                    <p className={styles.subtitle}>Portfolio</p>

                    <h2 className={styles.title}>Featured Projects</h2>

                    <p className={styles.description}>
                        A selection of projects that best demonstrate my experience in
                        frontend, backend and full-stack development.
                    </p>
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
                        View All Projects
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
