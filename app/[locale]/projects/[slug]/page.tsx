import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { ensureLocale } from "@/i18n/locale";
import { buildAlternates } from "@/i18n/metadata";
import { projectsMeta } from "@/data/projects";
import { getLocalizedProject } from "@/lib/projects";
import type { ProjectCategory } from "@/types/project";
import Reveal from "@/components/ui/Reveal";
import { GitHubIcon } from "@/components/ui/icons";
import styles from "./ProjectPage.module.css";

interface ProjectPageProps {
    params: Promise<{
        locale: string;
        slug: string;
    }>;
}

const categoryHrefs: Record<ProjectCategory, string> = {
    commercial: "/commercial-projects",
    team: "/team-projects",
    pet: "/pet-projects",
};

export function generateStaticParams() {
    return routing.locales.flatMap((locale) =>
        projectsMeta.map((project) => ({ locale, slug: project.slug }))
    );
}

export async function generateMetadata({
    params,
}: ProjectPageProps): Promise<Metadata> {
    const { locale: rawLocale, slug } = await params;
    const locale = ensureLocale(rawLocale);
    const project = getLocalizedProject(locale, slug);

    if (!project) {
        const t = await getTranslations({ locale, namespace: "errors.notFound" });
        return { title: t("title") };
    }

    return {
        title: project.title,
        description: project.shortDescription,
        alternates: buildAlternates(locale, `/projects/${slug}`),
        openGraph: {
            title: project.title,
            description: project.shortDescription,
            images: project.images.length ? [{ url: project.images[0] }] : undefined,
        },
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { locale: rawLocale, slug } = await params;
    const locale = ensureLocale(rawLocale);
    setRequestLocale(locale);

    const project = getLocalizedProject(locale, slug);

    if (!project) {
        notFound();
    }

    const t = await getTranslations("projectDetails");
    const tCategory = await getTranslations("projectCategories");
    const tPages = await getTranslations("projectsPages");

    const gallery = project.images.slice(1);
    const hasLinks = Boolean(project.github || project.demo);

    return (
        <article className={styles.page}>
            <div className={styles.container}>
                <Link
                    href={categoryHrefs[project.category]}
                    className={styles.backLink}
                >
                    <ArrowLeft size={16} />
                    {tPages(`${project.category}.back`)}
                </Link>

                <Reveal className={styles.header}>
                    <p className={styles.category}>{tCategory(project.category)}</p>

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
                                    {t("liveDemo")}
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
                                    {t("viewCode")}
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
                            <h2 className={styles.blockTitle}>{t("overview")}</h2>
                            <p className={styles.paragraph}>{project.fullDescription}</p>
                        </Reveal>

                        {project.contribution.length > 0 && (
                            <Reveal className={styles.block}>
                                <h2 className={styles.blockTitle}>{t("myContribution")}</h2>
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
                            <h2 className={styles.blockTitle}>{t("responsibilities")}</h2>
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
                                <h2 className={styles.blockTitle}>
                                    {t("businessChallenges")}
                                </h2>

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
                                <h2 className={styles.blockTitle}>{t("solutions")}</h2>

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
                                <h2 className={styles.blockTitle}>{t("infrastructure")}</h2>

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
                                <h2 className={styles.blockTitle}>{t("achievements")}</h2>

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
                                <h2 className={styles.blockTitle}>{t("lessonsLearned")}</h2>

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
                                <h2 className={styles.blockTitle}>{t("challenges")}</h2>
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
                            <h3 className={styles.cardTitle}>{t("details")}</h3>

                            <dl className={styles.details}>
                                <div className={styles.detailRow}>
                                    <dt>{t("role")}</dt>
                                    <dd>{project.role}</dd>
                                </div>

                                {project.duration && (
                                    <div className={styles.detailRow}>
                                        <dt>{t("duration")}</dt>
                                        <dd>{project.duration}</dd>
                                    </div>
                                )}

                                <div className={styles.detailRow}>
                                    <dt>{t("category")}</dt>
                                    <dd>{tCategory(project.category)}</dd>
                                </div>
                            </dl>
                        </div>

                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>{t("technologies")}</h3>
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
                                <h3 className={styles.cardTitle}>{t("links")}</h3>
                                <div className={styles.cardLinks}>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.cardLink}
                                        >
                                            <ExternalLink size={16} />
                                            {t("liveDemo")}
                                            <ArrowUpRight
                                                size={15}
                                                className={styles.linkArrow}
                                            />
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
                                            {t("githubRepository")}
                                            <ArrowUpRight
                                                size={15}
                                                className={styles.linkArrow}
                                            />
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </aside>
                </div>

                {gallery.length > 0 && (
                    <Reveal className={styles.galleryBlock}>
                        <h2 className={styles.blockTitle}>{t("gallery")}</h2>
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
