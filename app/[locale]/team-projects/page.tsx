import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ensureLocale } from "@/i18n/locale";
import { buildAlternates } from "@/i18n/metadata";
import { getProjectsByCategory } from "@/lib/projects";
import ProjectsList from "@/components/sections/ProjectsList";

interface PageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const locale = ensureLocale((await params).locale);
    const t = await getTranslations({ locale, namespace: "metadata" });

    return {
        title: t("team.title"),
        description: t("team.description"),
        alternates: buildAlternates(locale, "/team-projects"),
        openGraph: {
            title: t("team.title"),
            description: t("team.description"),
        },
    };
}

export default async function TeamProjectsPage({ params }: PageProps) {
    const locale = ensureLocale((await params).locale);
    setRequestLocale(locale);

    const projects = getProjectsByCategory(locale, "team");

    return <ProjectsList category="team" projects={projects} />;
}
