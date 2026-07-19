import { MetadataRoute } from "next";
import { projectsMeta } from "@/data/projects";

const BASE_URL = "https://serhiiyemets.com";

const locales = ["en", "cs", "uk"];

const staticRoutes = [
    "",
    "/about",
    "/commercial-projects",
    "/team-projects",
    "/pet-projects",
    "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages = locales.flatMap((locale) =>
            staticRoutes.map((route) => ({
            url: `${BASE_URL}/${locale}${route}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: route === "" ? 1 : 0.8,
        }))
    );

    const projectPages = locales.flatMap((locale) =>
            projectsMeta.map((project) => ({
            url: `${BASE_URL}/${locale}/projects/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        }))
    );

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        ...staticPages,
        ...projectPages,
    ];
}