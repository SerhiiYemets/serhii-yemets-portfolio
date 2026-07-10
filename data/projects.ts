import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: "1",
        slug: "food-delivery",

        title: "Commercial Food Delivery Platform",

        category: "commercial",

        featured: true,

        shortDescription:
        "Commercial food delivery platform for restaurants in the Czech Republic.",

        fullDescription:
        "SushiMax.cz is a production-ready food delivery platform developed for a restaurant in the Czech Republic. The project is actively used by real customers and supports online ordering, delivery management, menu synchronization, and restaurant operations. The application consists of a Next.js frontend and a Node.js backend deployed on a self-managed VPS infrastructure.",

        role: "Full Stack Developer",

        duration: "2026 – Present",

        technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Docker",
        ],

        contribution: [],

        responsibilities: [
        "Develop frontend features",
        "Develop backend REST APIs",
        "Design database structure",
        "Implement business logic",
        "Integrate external services",
        "Support production environment",
        "Optimize performance",
        ],

        businessChallenges: [
            "Worked directly with two restaurant owners with different business requirements.",
            "Collected and clarified project requirements.",
            "Found compromises between business expectations and technical implementation.",
            "Designed the application architecture from scratch."
        ],

        solutions: [
            "Integrated Poster POS API.",
            "Implemented webhook synchronization.",
            "Built online ordering workflow.",
            "Developed delivery zones and delivery cost calculation.",
            "Implemented email notifications.",
            "Configured production deployment.",
        ],

        infrastructure: [
            "Hetzner Cloud VPS",
            "Ubuntu Linux",
            "Nginx",
            "PM2",
            "Let's Encrypt",
            "MongoDB",
            "DNS Configuration",
        ],

        achievements: [
            "Successfully launched the platform into production.",
            "Website is used by real customers.",
            "Restaurant owners actively use the administration panel.",
            "Delivered a complete commercial solution from idea to deployment.",
        ],

        lessonsLearned: [
            "Working with real clients.",
            "Gathering business requirements.",
            "Designing production-ready architecture.",
            "Deploying and maintaining Linux servers.",
            "Supporting a live production application.",
        ],

        challenges: [
        "Production deployment",
        "Database optimization",
        "Infrastructure migration",
        ],

        github: "https://github.com/SerhiiYemets/sushi-blended-express-frontend",

        demo: "https://sushimax.cz/",

        images: ["/images/projects/food-delivery.webp"],
    },

    {
        id: "2",

        slug: "relax-map",

        title: "RelaxMap",

        category: "team",

        featured: true,

        shortDescription:
            "A modern travel platform for discovering, sharing and managing recreation locations across Ukraine.",

        fullDescription:
            "RelaxMap is a full-stack team project built with Next.js 16 and React 19. The platform allows users to discover recreation locations across Ukraine, create and edit their own places, leave reviews, manage personal profiles, and interact with an interactive map. The application combines Server-Side Rendering, React Query hydration, authentication, protected routes, and modern App Router architecture.",

        role: "Full Stack Developer",

        duration: "2025",

        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "TanStack Query",
            "Zustand",
            "Axios",
            "Formik",
            "Yup",
            "Leaflet",
            "React Leaflet",
            "Cloudinary",
            "Swiper",
            "CSS Modules",
            "React Hot Toast",
            "React Spinners",
        ],

        contribution: [
            "Authentication",
            "Authorization",
            "JWT Authentication",
            "Protected Routes",
            "Session Management",
            "Token Refresh",
            "Auth Middleware (proxy.ts)",
            "REST API Integration",
        ],

        responsibilities: [
            "Developed reusable React components",
            "Implemented authentication and protected routes",
            "Integrated REST API with Axios",
            "Implemented Server-Side Rendering with React Query hydration",
            "Developed interactive maps using Leaflet",
            "Implemented CRUD functionality for locations",
            "Created profile management features",
            "Built responsive user interface with CSS Modules",
            "Participated in project architecture and code reviews",
        ],

        challenges: [
            "Designing scalable App Router architecture",
            "Synchronizing server and client state",
            "Implementing intercepting routes and modal navigation",
            "Authentication with automatic session refresh",
            "Optimizing SSR performance",
        ],

        github:
            "https://github.com/Ihor-Kotliarevskyi/next-project-group-02",

        demo:
            "https://relax-map-group-02.vercel.app/",

        images: [
            "/images/projects/relax-map.webp",
        ],
    },
        {
        id: "3",

        slug: "travel-trucks",

        title: "TravelTrucks",

        category: "pet",

        featured: true,

        shortDescription:
            "A camper van rental platform with advanced filtering, detailed camper pages, booking functionality and modern data fetching.",

        fullDescription:
            "TravelTrucks is a modern web application for camper van rentals. Users can browse available campers, filter results by multiple criteria, explore detailed camper information, view image galleries, read reviews and submit booking requests. The application is built with Next.js App Router and TanStack Query for efficient server state management.",

        role: "Frontend Developer",

        duration: "2025",

        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "TanStack Query",
            "CSS Modules",
            "React Icons",
            "Vercel",
        ],

        contribution: [
            "Application Architecture",
            "Camper Catalog",
            "Advanced Filtering",
            "Camper Details Page",
            "Image Gallery",
            "Booking Form",
            "API Integration",
            "Infinite Pagination",
            "Responsive Design",
        ],

        responsibilities: [
            "Designed project architecture",
            "Integrated REST API",
            "Implemented filtering system",
            "Built camper details page",
            "Created booking form",
            "Implemented infinite loading with TanStack Query",
            "Developed responsive interface",
            "Optimized application performance",
        ],

        challenges: [
            "Efficient server state management with TanStack Query",
            "Complex filtering logic",
            "Pagination and data caching",
            "Responsive UI implementation",
        ],

        github:
            "https://github.com/SerhiiYemets/camper-booking-platform",

        demo:
            "https://camper-booking-platform.vercel.app/",

        images: [
            "/images/projects/nature-travel.webp",
        ],
    },

    {
        id: "4",

        slug: "notehub",

        title: "NoteHub",

        category: "pet",

        featured: true,

        shortDescription:
            "A modern note management application built with Next.js App Router, SSR, TanStack Query and Zustand.",

        fullDescription:
            "NoteHub is a full-featured note management application developed with Next.js App Router. The project demonstrates modern React development practices including Server-Side Rendering, Client-Side Rendering, dynamic routing, React Query hydration, Zustand state management, SEO optimization and responsive user interface.",

        role: "Frontend Developer",

        duration: "2025",

        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "TanStack Query",
            "Zustand",
            "Axios",
            "CSS Modules",
            "Next SEO",
        ],

        contribution: [
            "SSR & CSR",
            "App Router",
            "Dynamic Routes",
            "SEO Metadata",
            "Open Graph",
            "TanStack Query",
            "Hydration",
            "Zustand Persist",
            "Axios API",
            "Draft Persistence",
        ],

        responsibilities: [
            "Built application using Next.js App Router",
            "Implemented Server-Side Rendering",
            "Implemented Client-Side Rendering",
            "Integrated REST API with Axios",
            "Configured React Query hydration",
            "Implemented dynamic routing",
            "Added SEO metadata and Open Graph",
            "Implemented note filtering",
            "Created note details page",
            "Implemented draft persistence with Zustand",
            "Configured localStorage persistence",
            "Developed responsive UI using CSS Modules",
        ],

        challenges: [
            "Combining SSR and CSR",
            "React Query hydration",
            "Dynamic routing with App Router",
            "SEO optimization",
            "Persisting drafts with Zustand",
        ],

        github: "https://github.com/SerhiiYemets/08-zustand",

        demo: "https://08-zustand-seven-rust.vercel.app/notes/filter/all",

        images: [
            "/images/projects/note-hub.webp",
        ],
    },

    {
        id: "5",

        slug: "yoga-bloom",

        title: "YogaBloom",

        category: "team",

        featured: true,

        shortDescription:
            "A responsive landing page for a yoga studio with pricing plans, interactive modal windows and smooth navigation.",

        fullDescription:
            "YogaBloom is a team project focused on building a modern responsive landing page for a yoga studio. The project includes multiple content sections, smooth navigation, pricing plans, interactive modal windows and a fully responsive layout following modern HTML5, CSS and JavaScript best practices.",

        role: "Frontend Developer",

        duration: "2025",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive Design",
            "Modern Normalize",
            "SVG Sprite",
            "Git",
            "GitHub"
        ],

        contribution: [
            "Pricing Section",
            "Pricing Cards",
            "Modal Windows",
            "Modal Form",
            "Backdrop Handling",
            "Form Validation",
            "Responsive Layout"
        ],

        responsibilities: [
            "Developed the Pricing section",
            "Implemented pricing cards",
            "Created reusable modal windows",
            "Implemented open and close modal logic",
            "Handled backdrop and Escape key events",
            "Implemented responsive layout",
            "Collaborated with the team using Git and GitHub"
        ],

        challenges: [
            "Building reusable modal components",
            "Responsive layout implementation",
            "Maintaining consistent UI across screen sizes"
        ],

        github: "https://github.com/SerhiiYemets/project-group-05",

        demo: "https://dmytro-liashenko.github.io/project-group-05/",

        images: [
            "/images/projects/joha.webp",
        ],
    },

    {
        id: "6",

        slug: "furniture-store",

        title: "Furniture Store",

        category: "team",

        featured: true,

        shortDescription:
            "A responsive furniture store landing page with product catalog, API integration, loading states and interactive user experience.",

        fullDescription:
            "Furniture Store is a team project focused on building a modern responsive landing page for an online furniture store. The application integrates with a REST API to display furniture products, categories, reviews and detailed product information. It includes responsive layouts, smooth navigation, loading states and interactive UI components.",

        role: "Frontend Developer",

        duration: "2025",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "REST API",
            "Responsive Design",
            "Git",
            "GitHub",
            "Swiper",
            "iziToast"
        ],

        contribution: [
            "Hero Section",
            "Responsive Hero Layout",
            "Loader Component",
            "Loading State Handling",
            "API Request Feedback",
            "Responsive UI"
        ],

        responsibilities: [
            "Developed the Hero section",
            "Implemented responsive layout",
            "Created global loader component",
            "Handled loading states during API requests",
            "Improved user experience with visual feedback",
            "Collaborated with the development team using Git"
        ],

        challenges: [
            "Building responsive layouts",
            "Managing loading states",
            "Integrating asynchronous API requests"
        ],

        github: "https://github.com/Dmytro-Liashenko/DreamTeam",

        demo: "https://dmytro-liashenko.github.io/DreamTeam/",

        images: [
            "/images/projects/furniture.webp",
        ],
    }
];