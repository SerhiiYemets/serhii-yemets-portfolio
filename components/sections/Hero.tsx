"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

import styles from "./Hero.module.css";

const stack = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Docker",
];

const highlights = ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"];

export default function Hero() {
    const prefersReducedMotion = useReducedMotion();

    const container: Variants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.09,
                delayChildren: prefersReducedMotion ? 0 : 0.05,
            },
        },
    };

    const item: Variants = {
        hidden: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <section className={styles.hero}>
            <div className={styles.glow} aria-hidden="true" />
            <div className={styles.grid} aria-hidden="true" />

            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.p className={styles.badge} variants={item}>
                        <span className={styles.dot} />
                        Available for work
                    </motion.p>

                    <motion.p className={styles.label} variants={item}>
                        Full Stack JavaScript Developer
                    </motion.p>

                    <motion.h1 className={styles.title} variants={item}>
                        Hi, I&apos;m <span>Serhii Yemets</span>
                    </motion.h1>

                    <motion.p className={styles.description} variants={item}>
                        I build scalable web applications from idea to production using
                        React, Next.js, Node.js and TypeScript.
                    </motion.p>

                    <motion.div className={styles.actions} variants={item}>
                        <Link href="/team-projects" className={styles.primaryButton}>
                            View Projects
                            <ArrowRight size={18} />
                        </Link>

                        {/* <a href="/cv.pdf" download className={styles.secondaryButton}>
                            <Download size={18} />
                            Download CV
                        </a> */}

                        <Link href="/contact" className={styles.ghostButton}>
                            <Mail size={18} />
                            Contact Me
                        </Link>
                    </motion.div>

                    <motion.ul className={styles.techList} variants={item}>
                        {highlights.map((tech) => (
                            <li key={tech} className={styles.techItem}>
                                {tech}
                            </li>
                        ))}
                    </motion.ul>
                </motion.div>

                <motion.div
                    className={styles.codeCard}
                    initial={
                        prefersReducedMotion
                            ? { opacity: 1 }
                            : { opacity: 0, y: 24, scale: 0.98 }
                    }
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className={styles.codeHeader}>
                        <span />
                        <span />
                        <span />
                        <p className={styles.codeFile}>developer.ts</p>
                    </div>

                    <pre className={styles.code}>
                        <code>{`const developer = {
  name: "Serhii Yemets",
  role: "Full Stack Developer",
  location: "Czech Republic",
  stack: [
${stack.map((item) => `    "${item}"`).join(",\n")}
  ],
  focus: "Production-ready web apps",
};`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
}
