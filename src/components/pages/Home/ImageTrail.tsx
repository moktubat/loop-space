"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import type { StaticImageData } from "next/image";

/* Component Props */
interface Props {
    items: (string | StaticImageData)[];
}

/* Styled Components */
const TrailContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: auto;
  z-index: 1;
`;

const TrailImage = styled.div`
  width: 224px;
  height: 280px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  overflow: hidden;
  border-radius: 15px;
  will-change: transform, filter;
`;

const TrailImageInner = styled.div<{ $url: string }>`
  position: absolute;
  inset: -14px;
  width: calc(100% + 28px);
  height: calc(100% + 28px);
  background-size: cover;
  background-position: center;
  background-image: url(${(p) => p.$url});
`;

/* Helpers */
function lerp(a: number, b: number, n: number) {
    return (1 - n) * a + n * b;
}

function getLocalPointerPos(e: any, rect: DOMRect) {
    let x = e.touches?.[0]?.clientX ?? e.clientX;
    let y = e.touches?.[0]?.clientY ?? e.clientY;
    return { x: x - rect.left, y: y - rect.top };
}

function getMouseDistance(a: { x: number; y: number }, b: { x: number; y: number }) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}

/* Functional ImageTrail Logic */
const useImageTrail = (containerRef: React.RefObject<HTMLDivElement>) => {
    const state = useRef({
        images: [] as HTMLElement[],
        positions: [] as DOMRect[],
        mouse: { x: 0, y: 0 },
        lastMouse: { x: 0, y: 0 },
        cache: { x: 0, y: 0 },
        index: 0,
        zIndex: 1,
        lastAngle: 0,
        threshold: 80,
        isRendering: false,
    });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Initialize images
        const images = Array.from(container.querySelectorAll(".trail-img")) as HTMLElement[];
        state.current.images = images;
        state.current.positions = images.map((img) => img.getBoundingClientRect());

        const updateRect = () => {
            state.current.positions = images.map((img) => img.getBoundingClientRect());
        };

        window.addEventListener("resize", updateRect);

        const onMove = (e: any) => {
            const rect = container.getBoundingClientRect();
            state.current.mouse = getLocalPointerPos(e, rect);
        };

        const start = (e: any) => {
            const rect = container.getBoundingClientRect();
            state.current.mouse = getLocalPointerPos(e, rect);
            state.current.cache = { ...state.current.mouse };

            if (!state.current.isRendering) {
                state.current.isRendering = true;
                requestAnimationFrame(render);
            }

            container.removeEventListener("mousemove", start);
            container.removeEventListener("touchmove", start);
        };

        container.addEventListener("mousemove", onMove);
        container.addEventListener("touchmove", onMove);

        container.addEventListener("mousemove", start);
        container.addEventListener("touchmove", start);

        const render = () => {
            const s = state.current;
            if (getMouseDistance(s.mouse, s.lastMouse) > s.threshold) {
                showNextImage();
                s.lastMouse = { ...s.mouse };
            }

            s.cache.x = lerp(s.cache.x, s.mouse.x, 0.1);
            s.cache.y = lerp(s.cache.y, s.mouse.y, 0.1);

            requestAnimationFrame(render);
        };

        const showNextImage = () => {
            const s = state.current;
            let dx = s.mouse.x - s.cache.x;
            let dy = s.mouse.y - s.cache.y;

            let angle = Math.atan2(dy, dx) * (180 / Math.PI);
            if (angle < 0) angle += 360;
            if (angle > 90 && angle <= 270) angle += 180;

            const clockwise = angle >= s.lastAngle;
            s.lastAngle = angle;

            const startAngle = clockwise ? angle - 10 : angle + 10;

            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist !== 0) {
                dx /= dist;
                dy /= dist;
            }

            dx *= dist / 150;
            dy *= dist / 150;

            s.zIndex++;
            s.index = (s.index + 1) % s.images.length;

            const img = s.images[s.index];
            gsap.killTweensOf(img);

            gsap
                .timeline()
                .fromTo(
                    img,
                    {
                        opacity: 1,
                        filter: "brightness(80%)",
                        scale: 0.1,
                        zIndex: s.zIndex,
                        x: s.cache.x - s.positions[s.index].width / 2,
                        y: s.cache.y - s.positions[s.index].height / 2,
                        rotation: startAngle,
                    },
                    {
                        duration: 1,
                        ease: "power2",
                        scale: 1,
                        filter: "brightness(100%)",
                        x: s.mouse.x - s.positions[s.index].width / 2 + dx * 70,
                        y: s.mouse.y - s.positions[s.index].height / 2 + dy * 70,
                        rotation: angle,
                    }
                )
                .to(img, { duration: 0.4, ease: "expo", opacity: 0 }, 0.5)
                .to(
                    img,
                    {
                        duration: 1.5,
                        ease: "power4",
                        x: `+=${dx * 120}`,
                        y: `+=${dy * 120}`,
                    },
                    0.05
                );
        };

        return () => {
            window.removeEventListener("resize", updateRect);
            container.removeEventListener("mousemove", onMove);
            container.removeEventListener("touchmove", onMove);
        };
    }, [containerRef]);
};

/* Component */
const ImageTrailComponent: React.FC<Props> = ({ items }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useImageTrail(containerRef);

    return (
        <TrailContainer ref={containerRef}>
            {items.map((url, i) => (
                <TrailImage key={i} className="trail-img">
                    <TrailImageInner className="img-inner" $url={typeof url === "string" ? url : url.src} />
                </TrailImage>
            ))}
        </TrailContainer>
    );
};

export default ImageTrailComponent;
