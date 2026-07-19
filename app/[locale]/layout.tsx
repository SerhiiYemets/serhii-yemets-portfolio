import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { ensureLocale } from "@/i18n/locale";
import { buildAlternates, getOpenGraphLocale } from "@/i18n/metadata";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "../globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";

interface LocaleLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const locale = ensureLocale((await params).locale);
    const t = await getTranslations({ locale, namespace: "metadata" });

    return {
        metadataBase: new URL("https://serhiiyemets.com"),
        title: {
            default: t("home.title"),
            template: t("titleTemplate"),
        },
        description: t("home.description"),
        keywords: [
            "Serhii Yemets",
            "Full Stack Developer",
            "JavaScript Developer",
            "React Developer",
            "Next.js Developer",
            "Node.js Developer",
            "TypeScript",
            "Web Developer Portfolio",
        ],
        authors: [{ name: "Serhii Yemets" }],
        creator: "Serhii Yemets",
        openGraph: {
        type: "website",
        url: `https://serhiiyemets.com/${locale}`,
        locale: getOpenGraphLocale(locale),
        title: t("home.title"),
        description: t("ogDescription"),
        siteName: "Serhii Yemets",
            images: [
                {
                    url: "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: "Serhii Yemets Portfolio",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: t("home.title"),
            description: t("ogDescription"),
            images: ["/og-image.png"],
        },
        robots: {
            index: true,
            follow: true,
        },
        alternates: buildAlternates(locale),
    };
}

export default async function LocaleLayout({
    children,
    params,
}: LocaleLayoutProps) {
    const locale = ensureLocale((await params).locale);

    setRequestLocale(locale);

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </NextIntlClientProvider>

                <GoogleAnalytics gaId="G-M89V1BCGE6" />
            </body>
        </html>
    );
}
