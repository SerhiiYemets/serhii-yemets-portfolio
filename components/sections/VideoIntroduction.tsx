import { useTranslations } from "next-intl";

import Reveal from "@/components/ui/Reveal";
import VideoLightbox from "@/components/ui/VideoLightbox";
import styles from "./VideoIntroduction.module.css";

const VIDEO_ID = "CIY8qymwFUg";

export default function VideoIntroduction() {
    const t = useTranslations();

    return (
        <section className={styles.section} id="video-introduction">
            <div className={styles.container}>
                <Reveal className={styles.header}>
                    <p className={styles.subtitle}>{t("videoIntro.subtitle")}</p>

                    <h2 className={styles.title}>{t("videoIntro.title")}</h2>
                </Reveal>

                <Reveal className={styles.card} delay={0.08}>
                    <VideoLightbox
                        videoId={VIDEO_ID}
                        alt={t("videoIntro.alt")}
                        playLabel={t("videoIntro.play")}
                        closeLabel={t("videoIntro.close")}
                        caption="Serhii Yemets"
                        captionMeta={t("hero.card.role")}
                    />
                </Reveal>
            </div>
        </section>
    );
}
