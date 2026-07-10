import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import styles from "./About.module.css";

export default function About() {
    return (
        <section className={styles.section} id="about">
            <div className={styles.container}>
                <Reveal className={styles.left}>
                    <p className={styles.subtitle}>About Me</p>

                    <h2 className={styles.title}>
                        Full Stack Developer passionate about building modern web
                        applications.
                    </h2>

                    <Link href="/about" className={styles.link}>
                        More about me
                        <ArrowRight size={17} />
                    </Link>
                </Reveal>

                <Reveal className={styles.right} delay={0.1}>
                    <p>
                        Full Stack JavaScript Developer based in the Czech Republic,
                        specializing in React, Next.js, Node.js and TypeScript.
                    </p>

                    <p>
                        I have commercial experience developing production web
                        applications, designing REST APIs, implementing business logic,
                        working with PostgreSQL and MongoDB, and deploying applications
                        using Docker and Linux servers.
                    </p>

                    <p>
                        I enjoy solving complex problems, learning new technologies and
                        creating products that deliver real value to users.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
