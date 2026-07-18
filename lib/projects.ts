import { projectsMeta } from "@/data/projects";
import { projectContent } from "@/data/projectContent";
import type { Locale } from "@/i18n/routing";
import type { Project, ProjectCategory } from "@/types/project";

export function getLocalizedProjects(locale: Locale): Project[] {
    return projectsMeta.map((meta) => ({
        ...meta,
        ...projectContent[locale][meta.slug],
    }));
}

export function getProjectsByCategory(
    locale: Locale,
    category: ProjectCategory
): Project[] {
    return getLocalizedProjects(locale).filter(
        (project) => project.category === category
    );
}

export function getFeaturedProjects(locale: Locale): Project[] {
    return getLocalizedProjects(locale).filter((project) => project.featured);
}

export function getLocalizedProject(
    locale: Locale,
    slug: string
): Project | undefined {
    const meta = projectsMeta.find((project) => project.slug === slug);

    if (!meta) {
        return undefined;
    }

    return { ...meta, ...projectContent[locale][meta.slug] };
}
