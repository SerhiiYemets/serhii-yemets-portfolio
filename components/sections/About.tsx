import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import Reveal from "@/components/ui/Reveal";
import styles from "./About.module.css";

export default function About() {
    const t = useTranslations("about.section");

    return (
        <section className={styles.section} id="about">
            <div className={styles.container}>
                <Reveal className={styles.left}>
                    <p className={styles.subtitle}>{t("subtitle")}</p>

                    <h2 className={styles.title}>{t("title")}</h2>

                    <Link href="/about" className={styles.link}>
                        {t("moreAboutMe")}
                        <ArrowRight size={17} />
                    </Link>
                </Reveal>

                <Reveal className={styles.right} delay={0.1}>
                    <p>{t("p1")}</p>
                    <p>{t("p2")}</p>
                    <p>{t("p3")}</p>
                </Reveal>
            </div>
        </section>
    );
}
