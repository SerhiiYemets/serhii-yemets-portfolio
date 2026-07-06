import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";
import styles from "./FeaturedProjects.module.css";

export default function FeaturedProjects() {
    const featuredProjects = projects.filter((project) => project.featured);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.subtitle}>Portfolio</p>

                    <h2 className={styles.title}>Featured Projects</h2>

                    <p className={styles.description}>
                        A selection of projects that best demonstrate my experience in
                        frontend, backend and full-stack development.
                    </p>
                    </div>

                    <div className={styles.grid}>
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                    </div>

                    <div className={styles.actions}>
                    <Link href="/commercial-projects" className={styles.button}>
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}