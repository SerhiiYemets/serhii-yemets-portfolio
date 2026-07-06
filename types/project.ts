export interface Project {
    id: string;
    title: string;
    slug: string;

    category: "commercial" | "team" | "pet";

    featured: boolean;

    shortDescription: string;

    fullDescription: string;

    role: string;

    duration?: string;

    technologies: string[];

    responsibilities: string[];

    challenges?: string[];

    github?: string;

    demo?: string;

    images: string[];
}