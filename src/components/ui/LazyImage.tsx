'use client';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

// Styled Components
const LazyContainer = styled.div<{ $width?: string; $height?: string }>`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    width: ${props => props.$width || '100%'};
    height: ${props => props.$height || '100%'};
`;

const Skeleton = styled.div`
    position: absolute;
    inset: 0;
    background-color: #f0f0f0; // Light gray placeholder
`;

const StyledNextImage = styled(Image)`
    position: absolute;
    inset: 0;
    z-index: 10;
    width: 100%;
    height: 120%; // Extra height for parallax movement
    object-fit: cover;
    opacity: 0; // Hidden initially for fade-in effect
`;

interface LazyImageProps {
    src: string;
    alt: string;
    parallax?: number;
    blur?: boolean;
}

const LazyImage = ({
    src,
    alt,
    parallax = 0,
    blur = false,
}: LazyImageProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!isLoaded || !containerRef.current) return;

        const img = containerRef.current.querySelector<HTMLImageElement>("img");
        if (!img) return;

        /* -----------------------------
           Blur + Fade Reveal
        ------------------------------ */
        gsap.fromTo(
            img,
            {
                opacity: 0,
                scale: 1.1,
                filter: blur ? "blur(14px)" : "none",
            },
            {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom-=15%",
                    once: true,
                },
            }
        );

        /* -----------------------------
           Parallax Scroll
        ------------------------------ */
        if (parallax !== 0) {
            gsap.fromTo(
                img,
                { y: -parallax },
                {
                    y: parallax,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );
        }

    }, [isLoaded, parallax, blur]);

    return (
        <LazyContainer ref={containerRef}>
            <Skeleton />
            <StyledNextImage
                src={src}
                alt={alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onLoadingComplete={() => setIsLoaded(true)}
            />
        </LazyContainer>
    );
};

export default LazyImage;