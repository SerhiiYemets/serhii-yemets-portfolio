import ProjectsList from "@/components/sections/ProjectsList";
import { projects } from "@/data/projects";

export default function PetProjectsPage() {
    const petProjects = projects.filter(
        (project) => project.category === "pet"
    );

    return (
        <ProjectsList
            title="Pet Projects"
            description="Personal projects created to learn, experiment, and improve my skills."
            projects={petProjects}
        />
    );
}