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
        title: t("pet.title"),
        description: t("pet.description"),
        alternates: buildAlternates(locale, "/pet-projects"),
        openGraph: {
            title: t("pet.title"),
            description: t("pet.description"),
        },
    };
}

export default async function PetProjectsPage({ params }: PageProps) {
    const locale = ensureLocale((await params).locale);
    setRequestLocale(locale);

    const projects = getProjectsByCategory(locale, "pet");

    return <ProjectsList category="pet" projects={projects} />;
}
