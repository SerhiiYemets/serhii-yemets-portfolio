import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, Sparkles } from "lucide-react";

import { techStack } from "@/data/techStack";
import Reveal from "@/components/ui/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "About",
    description:
        "Full Stack JavaScript Developer based in the Czech Republic, specializing in React, Next.js, Node.js and TypeScript.",
};

const facts = [
    { label: "Location", value: "Czech Republic", Icon: MapPin },
    { label: "Role", value: "Full Stack Developer", Icon: Briefcase },
    { label: "Focus", value: "Production web apps", Icon: Sparkles },
];

export default function AboutPage() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <Reveal className={styles.header}>
                    <p className={styles.eyebrow}>About Me</p>

                    <h1 className={styles.title}>
                        Building modern web applications, from idea to production.
                    </h1>

                    <p className={styles.lede}>
                        I&apos;m Serhii Yemets, a Full Stack JavaScript Developer who
                        enjoys turning complex problems into clean, reliable and
                        maintainable products.
                    </p>
                </Reveal>

                <div className={styles.intro}>
                    <Reveal className={styles.bio}>
                        <p>
                            Full Stack JavaScript Developer based in the Czech Republic,
                            specializing in React, Next.js, Node.js and TypeScript. I build
                            end-to-end web applications with a strong focus on performance,
                            accessibility and clean architecture.
                        </p>

                        <p>
                            I have commercial experience developing production web
                            applications, designing REST APIs, implementing business logic,
                            working with PostgreSQL and MongoDB, and deploying applications
                            using Docker and Linux servers.
                        </p>

                        <p>
                            I care about the details that make software feel polished —
                            thoughtful interactions, consistent design systems and code that
                            other developers enjoy working with. I&apos;m always learning
                            and looking for the next challenge worth solving.
                        </p>
                    </Reveal>

                    <Reveal className={styles.factsCard} delay={0.1}>
                        {facts.map(({ label, value, Icon }) => (
                            <div key={label} className={styles.fact}>
                                <span className={styles.factIcon}>
                                    <Icon size={18} />
                                </span>
                                <div>
                                    <p className={styles.factLabel}>{label}</p>
                                    <p className={styles.factValue}>{value}</p>
                                </div>
                            </div>
                        ))}
                    </Reveal>
                </div>

                <section className={styles.skills}>
                    <Reveal>
                        <h2 className={styles.skillsTitle}>Skills &amp; Tools</h2>
                    </Reveal>

                    <div className={styles.skillsGrid}>
                        {techStack.map((category, index) => (
                            <Reveal
                                key={category.title}
                                className={styles.skillCard}
                                delay={index * 0.06}
                            >
                                <h3 className={styles.skillCardTitle}>{category.title}</h3>
                                <div className={styles.tags}>
                                    {category.technologies.map((tech) => (
                                        <span key={tech} className={styles.tag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                <Reveal className={styles.cta}>
                    <div>
                        <h2 className={styles.ctaTitle}>Let&apos;s work together</h2>
                        <p className={styles.ctaText}>
                            Have a project in mind or an open position? I&apos;d love to
                            hear about it.
                        </p>
                    </div>

                    <Link href="/contact" className={styles.ctaButton}>
                        Get in touch
                        <ArrowRight size={18} />
                    </Link>
                </Reveal>
            </div>
        </div>
    );
}
