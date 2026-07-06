import ProjectsList from "@/components/sections/ProjectsList";
import { projects } from "@/data/projects";

export default function TeamProjectsPage() {
    const teamProjects = projects.filter(
        (project) => project.category === "team"
    );

    return (
        <ProjectsList
            title="Team Projects"
            description="Collaborative projects developed as part of a team."
            projects={teamProjects}
        />
    );
}