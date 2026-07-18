export type ProjectCategory = "commercial" | "team" | "pet";

export type ProjectSlug =
    | "food-delivery"
    | "relax-map"
    | "travel-trucks"
    | "notehub"
    | "yoga-bloom"
    | "furniture-store";

export interface ProjectMeta {
    id: string;
    slug: ProjectSlug;
    category: ProjectCategory;
    featured: boolean;
    technologies: string[];
    infrastructure?: string[];
    github?: string;
    demo?: string;
    images: string[];
}

export interface ProjectContent {
    title: string;
    shortDescription: string;
    fullDescription: string;
    role: string;
    duration?: string;
    contribution: string[];
    responsibilities: string[];
    businessChallenges?: string[];
    solutions?: string[];
    achievements?: string[];
    lessonsLearned?: string[];
    challenges?: string[];
}

export type Project = ProjectMeta & ProjectContent;
