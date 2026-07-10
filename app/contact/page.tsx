import type { Metadata } from "next";
import { Mail, ArrowUpRight } from "lucide-react";

import { socialLinks } from "@/data/socialLinks";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";
import styles from "./page.module.css";

import { Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Serhii Yemets — Full Stack JavaScript Developer. Available for freelance work and full-time opportunities.",
};

const channels = [
    {
        label: "Phone",
        value: "+420 774 830 644",
        href: `tel:${socialLinks.phone}`,
        Icon: Phone,
        external: false,
    },
    {
        label: "GitHub",
        value: "github.com/SerhiiYemets",
        href: socialLinks.github,
        Icon: GitHubIcon,
        external: true,
    },
    {
        label: "LinkedIn",
        value: "Serhii Yemets",
        href: socialLinks.linkedin,
        Icon: LinkedInIcon,
        external: true,
    },
];

export default function ContactPage() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <Reveal className={styles.header}>
                    <p className={styles.eyebrow}>Contact</p>

                    <h1 className={styles.title}>Let&apos;s build something together.</h1>

                    <p className={styles.lede}>
                        I&apos;m open to freelance projects and full-time opportunities.
                        Whether you have a question or just want to say hello, my inbox is
                        always open.
                    </p>
                </Reveal>

                <Reveal className={styles.emailCard} delay={0.05}>
                    <div>
                        <p className={styles.emailLabel}>Prefer email?</p>
                        <a
                            href={`mailto:${socialLinks.email}`}
                            className={styles.emailValue}
                        >
                            {socialLinks.email}
                        </a>
                    </div>

                    <a href={`mailto:${socialLinks.email}`} className={styles.emailButton}>
                        <Mail size={18} />
                        Send an email
                    </a>
                </Reveal>

                <div className={styles.channels}>
                    {channels.map(({ label, value, href, Icon, external }, index) => (
                        <Reveal
                            key={label}
                            className={styles.channelWrap}
                            delay={index * 0.08}
                        >
                            <a
                                href={href}
                                className={styles.channel}
                                {...(external
                                    ? { target: "_blank", rel: "noopener noreferrer" }
                                    : {})}
                            >
                                <span className={styles.channelIcon}>
                                    <Icon size={20} />
                                </span>

                                <span className={styles.channelText}>
                                    <span className={styles.channelLabel}>{label}</span>
                                    <span className={styles.channelValue}>{value}</span>
                                </span>

                                <ArrowUpRight size={18} className={styles.channelArrow} />
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
