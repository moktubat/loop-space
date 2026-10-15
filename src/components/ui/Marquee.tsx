"use client";

import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  overflow: hidden;
  width: 100%;
`;

const Track = styled.div<{ $gap: string }>`
  display: flex;
  gap: ${(props) => props.$gap};
  will-change: transform;
`;

interface MarqueeProps {
    /** Duration of one full loop in seconds */
    duration?: number;
    /** Gap between items (must match the gap in your item's styled component) */
    gap?: string;
    children: React.ReactNode;
}

const Marquee = ({
    duration = 40,
    gap = "24px",
    children,
}: MarqueeProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!trackRef.current) return;

        const track = trackRef.current;
        const totalWidth = track.scrollWidth / 2; // items are duplicated

        const tween = gsap.to(track, {
            x: -totalWidth,
            duration,
            ease: "linear",
            repeat: -1,
        });

        return () => {
            tween.kill();
        };
    }, [duration]);

    return (
        <Container ref={containerRef}>
            <Track ref={trackRef} $gap={gap}>
                {children}
                {/* Duplicate for seamless loop */}
                {children}
            </Track>
        </Container>
    );
};

export default Marquee;