export type NavKey = "about" | "commercial" | "team" | "pet" | "contact";

export interface NavItem {
    key: NavKey;
    href: string;
}

export const navigation: NavItem[] = [
    { key: "about", href: "/about" },
    { key: "commercial", href: "/commercial-projects" },
    { key: "team", href: "/team-projects" },
    { key: "pet", href: "/pet-projects" },
    { key: "contact", href: "/contact" },
];



