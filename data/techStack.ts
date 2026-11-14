export type TechCategoryKey = "frontend" | "backend" | "tools" | "devops";

export interface TechCategory {
    key: TechCategoryKey;
    technologies: string[];
}

export const techStack: TechCategory[] = [
    {
        key: "frontend",
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "React Hooks",
            "Context API",
            "CSS Modules",
            "Responsive Design",
            "Tailwind CSS",
        ],
    },
    {
        key: "backend",
        technologies: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST API",
            "Socket.IO",
            "JWT",
            "OpenStreetMap",
            "GeoJSON",
            "GraphQL",
            "Shopify Storefront API",
            "PostgreSQL",
        ],
    },
    {
        key: "tools",
        technologies: [
            "Git",
            "GitHub",
            "VS Code",
            "Postman",
            "Figma",
            "Cursor",
            "ChatGPT",
            "Claude",
            "npm",
            "Squoosh",
            "SVGO",
            "IcoMoon",
        ],
    },
    {
        key: "devops",
        technologies: [
            "Linux",
            "SSH",
            "PM2",
            "Hetzner",
            "Vercel",
            "MongoDB Atlas",
            "Environment Variables",
            "DNS",
            "Docker",
            "Nginx",
            "Terraform",
            "Infrastructure as Code (IaC)",
            "AWS EC2",
            "AWS S3",
            "AWS VPC",
            "AWS CLI",
            "DynamoDB",
        ],
    },
];
