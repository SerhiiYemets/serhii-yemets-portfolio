import Link from "next/link";
import styles from "./Hero.module.css";

const stack = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Docker",
];

export default function Hero() {
    return (
        <section className={styles.hero}>
        <div className={styles.container}>
            <div className={styles.content}>
            <p className={styles.label}>Full Stack JavaScript Developer</p>

            <h1 className={styles.title}>
                Hi, I&apos;m <span>Serhii Yemets</span>
            </h1>

            <p className={styles.description}>
                I build scalable web applications from idea to production using
                React, Next.js, Node.js and TypeScript.
            </p>

            <div className={styles.actions}>
                <Link href="/commercial-projects" className={styles.primaryButton}>
                View Projects
                </Link>

                <Link href="/contact" className={styles.secondaryButton}>
                Contact Me
                </Link>
            </div>
            </div>

            <div className={styles.codeCard}>
            <div className={styles.codeHeader}>
                <span />
                <span />
                <span />
            </div>

            <pre className={styles.code}>
                <code>{`const developer = {
    name: "Serhii Yemets",
    role: "Full Stack Developer",
    location: "Czech Republic",
    stack: [
    ${stack.map((item) => `    "${item}"`).join(",\n")}
    ],
    focus: "Production-ready web apps"
    };`}</code>
            </pre>
            </div>
        </div>
        </section>
    );
}