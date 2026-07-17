import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";

import { projects } from "@/data/projects";
import { Project } from "@/types/project";
import Reveal from "@/components/ui/Reveal";
import { GitHubIcon } from "@/components/ui/icons";
import styles from "./ProjectPage.module.css";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

const categoryLabels: Record<Project["category"], string> = {
    commercial: "Commercial",
    team: "Team",
    pet: "Pet Project",
};

const categoryHrefs: Record<Project["category"], string> = {
    commercial: "/commercial-projects",
    team: "/team-projects",
    pet: "/pet-projects",
};

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
    params,
}: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return { title: "Project Not Found" };
    }

    return {
        title: project.title,
        description: project.shortDescription,
        openGraph: {
            title: project.title,
            description: project.shortDescription,
            images: [{ url: project.images[0] }],
        },
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;

    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    const gallery = project.images.slice(1);
    const hasLinks = Boolean(project.github || project.demo);

    return (
        <article className={styles.page}>
            <div className={styles.container}>
                <Link href={categoryHrefs[project.category]} className={styles.backLink}>
                    <ArrowLeft size={16} />
                    Back to {categoryLabels[project.category]} Projects
                </Link>

                <Reveal className={styles.header}>
                    <p className={styles.category}>{categoryLabels[project.category]}</p>

                    <h1 className={styles.title}>{project.title}</h1>

                    <p className={styles.lede}>{project.shortDescription}</p>

                    {hasLinks && (
                        <div className={styles.headerActions}>
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.primaryLink}
                                >
                                    <ExternalLink size={17} />
                                    Live Demo
                                </a>
                            )}

                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.secondaryLink}
                                >
                                    <GitHubIcon size={17} />
                                    View Code
                                </a>
                            )}
                        </div>
                    )}
                </Reveal>

                <Reveal className={styles.hero} delay={0.05}>
                    <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        preload
                        quality={90}
                        sizes="(max-width: 1080px) 100vw, 1040px"
                        className={styles.heroImage}
                    />
                </Reveal>

                <div className={styles.layout}>
                    <div className={styles.main}>
                        <Reveal className={styles.block}>
                            <h2 className={styles.blockTitle}>Overview</h2>
                            <p className={styles.paragraph}>{project.fullDescription}</p>
                        </Reveal>

                        {project.contribution.length > 0 && (
                            <Reveal className={styles.block}>
                                <h2 className={styles.blockTitle}>My Contribution</h2>
                                <div className={styles.tags}>
                                    {project.contribution.map((item) => (
                                        <span key={item} className={styles.tag}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </Reveal>
                        )}

                        <Reveal className={styles.block}>
                            <h2 className={styles.blockTitle}>Responsibilities</h2>
                            <ul className={styles.timeline}>
                                {project.responsibilities.map((item) => (
                                    <li key={item} className={styles.timelineItem}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>

                        {project.businessChallenges && (
                            <Reveal className={styles.block}>
                                <h2 className={styles.blockTitle}>Business Challenges</h2>

                                <ul className={styles.timeline}>
                                    {project.businessChallenges.map((item) => (
                                        <li key={item} className={styles.timelineItem}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>
                        )}

                        {project.solutions && (
                            <Reveal className={styles.block}>
                                <h2 className={styles.blockTitle}>Solutions</h2>

                                <ul className={styles.timeline}>
                                    {project.solutions.map((item) => (
                                        <li key={item} className={styles.timelineItem}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>
                        )}
                        
                        {project.infrastructure && (
                            <Reveal className={styles.block}>
                                <h2 className={styles.blockTitle}>Infrastructure</h2>

                                <div className={styles.tags}>
                                    {project.infrastructure.map((item) => (
                                        <span key={item} className={styles.tag}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </Reveal>
                        )}

                        {project.achievements && (
                            <Reveal className={styles.block}>
                                <h2 className={styles.blockTitle}>Achievements</h2>

                                <ul className={styles.timeline}>
                                    {project.achievements.map((item) => (
                                        <li key={item} className={styles.timelineItem}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>
                        )}

                        {project.lessonsLearned && (
                            <Reveal className={styles.block}>
                                <h2 className={styles.blockTitle}>Lessons Learned</h2>

                                <ul className={styles.timeline}>
                                    {project.lessonsLearned.map((item) => (
                                        <li key={item} className={styles.timelineItem}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>
                        )}

                        {project.challenges && project.challenges.length > 0 && (
                            <Reveal className={styles.block}>
                                <h2 className={styles.blockTitle}>Challenges</h2>
                                <ul className={styles.timeline}>
                                    {project.challenges.map((item) => (
                                        <li key={item} className={styles.timelineItem}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>
                        )}
                    </div>

                    <aside className={styles.sidebar}>
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Project Details</h3>

                            <dl className={styles.details}>
                                <div className={styles.detailRow}>
                                    <dt>Role</dt>
                                    <dd>{project.role}</dd>
                                </div>

                                {project.duration && (
                                    <div className={styles.detailRow}>
                                        <dt>Duration</dt>
                                        <dd>{project.duration}</dd>
                                    </div>
                                )}

                                <div className={styles.detailRow}>
                                    <dt>Category</dt>
                                    <dd>{categoryLabels[project.category]}</dd>
                                </div>
                            </dl>
                        </div>

                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Technologies</h3>
                            <div className={styles.tags}>
                                {project.technologies.map((tech) => (
                                    <span key={tech} className={styles.tag}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {hasLinks && (
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>Links</h3>
                                <div className={styles.cardLinks}>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.cardLink}
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                            <ArrowUpRight size={15} className={styles.linkArrow} />
                                        </a>
                                    )}

                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.cardLink}
                                        >
                                            <GitHubIcon size={16} />
                                            GitHub Repository
                                            <ArrowUpRight size={15} className={styles.linkArrow} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </aside>
                </div>

                {gallery.length > 0 && (
                    <Reveal className={styles.galleryBlock}>
                        <h2 className={styles.blockTitle}>Gallery</h2>
                        <div className={styles.gallery}>
                            {gallery.map((image) => (
                                <div key={image} className={styles.galleryItem}>
                                    <Image
                                        src={image}
                                        alt={project.title}
                                        fill
                                        quality={90}
                                        sizes="(max-width: 1080px) 100vw, 1040px"
                                        className={styles.galleryImage}
                                    />
                                </div>
                            ))}
                        </div>
                    </Reveal>
                )}
            </div>
        </article>
    );
}
