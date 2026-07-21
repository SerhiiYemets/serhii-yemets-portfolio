"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

import { trackEvent } from "@/lib/analytics";

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    event?: string;
    eventParams?: Record<string, string | number | boolean>;
    children: ReactNode;
}

export default function TrackedLink({
    event,
    eventParams,
    onClick,
    children,
    ...props
}: TrackedLinkProps) {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        if (event) {
            trackEvent(event, eventParams);
        }

        onClick?.(e);
    };

    return (
        <a {...props} onClick={handleClick}>
            {children}
        </a>
    );
}
