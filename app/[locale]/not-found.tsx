import { getTranslations } from "next-intl/server";
import { ArrowLeft } from "lucide-react";

import { Link } from "@/i18n/navigation";
import styles from "./not-found.module.css";

export default async function NotFound() {
    const t = await getTranslations("errors.notFound");

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <p className={styles.code}>{t("code")}</p>
                <h1 className={styles.title}>{t("title")}</h1>
                <p className={styles.description}>{t("description")}</p>

                <Link href="/" className={styles.button}>
                    <ArrowLeft size={18} />
                    {t("backHome")}
                </Link>
            </div>
        </div>
    );
}
