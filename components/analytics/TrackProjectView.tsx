"use client";

import { useEffect, useRef } from "react";

import { trackEvent } from "@/lib/analytics";

interface TrackProjectViewProps {
    project: string;
}

export default function TrackProjectView({ project }: TrackProjectViewProps) {
    const tracked = useRef(false);

    useEffect(() => {
        if (tracked.current) return;
        tracked.current = true;

        trackEvent("view_project", { project });
    }, [project]);

    return null;
}
