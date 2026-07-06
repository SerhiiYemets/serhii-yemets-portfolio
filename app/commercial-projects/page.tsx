import ProjectsList from "@/components/sections/ProjectsList";
import { projects } from "@/data/projects";

export default function CommercialProjectsPage() {
    const commercialProjects = projects.filter(
        (project) => project.category === "commercial"
    );

    return (
        <ProjectsList
            title="Commercial Projects"
            description="Projects developed for real business needs and production environments."
            projects={commercialProjects}
        />
    );
}