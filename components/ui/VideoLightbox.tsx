"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Play, X } from "lucide-react";

import styles from "./VideoLightbox.module.css";

interface VideoLightboxProps {
    videoId: string;
    alt: string;
    playLabel: string;
    closeLabel: string;
    caption?: string;
    captionMeta?: string;
}

const FOCUSABLE = 'button, iframe, [href], [tabindex]:not([tabindex="-1"])';

export default function VideoLightbox({
    videoId,
    alt,
    playLabel,
    closeLabel,
    caption,
    captionMeta,
}: VideoLightboxProps) {
    const [open, setOpen] = useState(false);
    const [thumbnail, setThumbnail] = useState(
        `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    );

    const triggerRef = useRef<HTMLButtonElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);

    const close = useCallback(() => {
        setOpen(false);
        triggerRef.current?.focus();
    }, []);

    useEffect(() => {
        if (!open) {
            return;
        }

        const { body } = document;
        const previousOverflow = body.style.overflow;

        body.style.overflow = "hidden";
        closeRef.current?.focus();

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                event.preventDefault();
                close();
                return;
            }

            if (event.key !== "Tab" || !dialogRef.current) {
                return;
            }

            const focusable = Array.from(
                dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
            );

            if (focusable.length === 0) {
                return;
            }

            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            const active = document.activeElement;

            if (event.shiftKey && (active === first || !dialogRef.current.contains(active))) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && active === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            body.style.overflow = previousOverflow;
        };
    }, [open, close]);

    return (
        <>
            <button
                ref={triggerRef}
                type="button"
                className={styles.preview}
                onClick={() => setOpen(true)}
                aria-label={playLabel}
                aria-haspopup="dialog"
            >
                <Image
                    src={thumbnail}
                    alt=""
                    fill
                    quality={90}
                    sizes="(max-width: 1000px) 100vw, 920px"
                    className={styles.image}
                    onError={() =>
                        setThumbnail(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`)
                    }
                />

                <span className={styles.overlay} aria-hidden="true" />

                <span className={styles.play} aria-hidden="true">
                    <Play size={30} fill="currentColor" strokeWidth={0} />
                </span>

                {caption && (
                    <span className={styles.caption} aria-hidden="true">
                        <span className={styles.captionName}>{caption}</span>

                        {captionMeta && (
                            <span className={styles.captionMeta}>{captionMeta}</span>
                        )}
                    </span>
                )}
            </button>

            {open &&
                createPortal(
                    <div
                        className={styles.backdrop}
                        onClick={(event) => {
                            if (event.target === event.currentTarget) {
                                close();
                            }
                        }}
                    >
                        <div
                            ref={dialogRef}
                            className={styles.dialog}
                            role="dialog"
                            aria-modal="true"
                            aria-label={alt}
                        >
                            <button
                                ref={closeRef}
                                type="button"
                                className={styles.close}
                                onClick={close}
                                aria-label={closeLabel}
                            >
                                <X size={20} />
                            </button>

                            <div className={styles.player}>
                                <iframe
                                    className={styles.iframe}
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                                    title={alt}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}
