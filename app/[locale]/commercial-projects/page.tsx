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
        title: t("commercial.title"),
        description: t("commercial.description"),
        alternates: buildAlternates(locale, "/commercial-projects"),
        openGraph: {
            title: t("commercial.title"),
            description: t("commercial.description"),
        },
    };
}

export default async function CommercialProjectsPage({ params }: PageProps) {
    const locale = ensureLocale((await params).locale);
    setRequestLocale(locale);

    const projects = getProjectsByCategory(locale, "commercial");

    return <ProjectsList category="commercial" projects={projects} />;
}
