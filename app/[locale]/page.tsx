import { setRequestLocale } from "next-intl/server";

import { ensureLocale } from "@/i18n/locale";
import Hero from "@/components/sections/Hero";
import VideoIntroduction from "@/components/sections/VideoIntroduction";
import TechStack from "@/components/sections/TechStack";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import About from "@/components/sections/About";

export default async function Home({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const locale = ensureLocale((await params).locale);
    setRequestLocale(locale);

    return (
        <>
            <Hero />
            <VideoIntroduction />
            <TechStack />
            <FeaturedProjects />
            <About />
        </>
    );
}
