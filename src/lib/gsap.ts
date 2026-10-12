import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Shared animation configuration
const animationDefaults = {
    duration: 1,
    ease: "power3.out",
};

// Shared types
type ScrollTriggerOptions = Partial<ScrollTrigger.Vars>;

type AnimationOptions = {
    duration?: number;
    ease?: string;
    delay?: number;
    stagger?: number;
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    scrub?: number | boolean;
    repeat?: number;
    scrollTrigger?: ScrollTriggerOptions;
};

type ParallaxOptions = {
    y?: number;
    scrub?: number | boolean;
    scrollTrigger?: ScrollTriggerOptions;
};

type MarqueeOptions = {
    duration?: number;
    ease?: string;
    repeat?: number;
    x?: number;
};

// Fade up animation
export const useGsapFadeUp = (
    selector: string,
    options: AnimationOptions = {}
) => {
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        const elements = container.querySelectorAll<HTMLElement>(selector);
        if (!elements.length) return;

        const tween = gsap.from(elements, {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ...animationDefaults,
            ...options,
            scrollTrigger: {
                trigger: container,
                start: "top 85%",
                ...options.scrollTrigger,
            },
        });

        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
        };
    }, [selector, options]);

    return ref;
};

// Parallax animation
export const useGsapParallax = (
    selector: string,
    options: ParallaxOptions = {}
) => {
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        const elements = container.querySelectorAll<HTMLElement>(selector);
        if (!elements.length) return;

        const tweens: gsap.core.Tween[] = [];

        elements.forEach((element: HTMLElement) => {
            const tween = gsap.to(element, {
                y: options.y ?? -100,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: options.scrub ?? 1,
                    ...options.scrollTrigger,
                },
            });

            tweens.push(tween);
        });

        return () => {
            tweens.forEach((tween) => {
                tween.scrollTrigger?.kill();
                tween.kill();
            });
        };
    }, [selector, options]);

    return ref;
};

// Marquee animation
export const useGsapMarquee = (
    selector: string,
    options: MarqueeOptions = {}
) => {
    const ref = useRef<HTMLElement | null>(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        const element = container.querySelector<HTMLElement>(selector);
        if (!element) return;

        animationRef.current = gsap.to(element, {
            x: -element.scrollWidth,
            duration: options.duration ?? 40,
            ease: options.ease ?? "linear",
            repeat: options.repeat ?? -1,
            ...options,
        });

        return () => {
            animationRef.current?.kill();
            animationRef.current = null;
        };
    }, [selector, options]);

    return ref;
};

// Continuous reveal animation
export const useGsapReveal = (
    selector: string,
    options: AnimationOptions = {}
) => {
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        const elements = container.querySelectorAll<HTMLElement>(selector);
        if (!elements.length) return;

        const tween = gsap.fromTo(
            elements,
            {
                y: 100,
                opacity: 0,
                scale: 0.9,
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                stagger: 0.15,
                duration: 1.2,
                ease: "power3.out",
                ...options,
                scrollTrigger: {
                    trigger: container,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 0.5,
                    ...options.scrollTrigger,
                },
            }
        );

        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
        };
    }, [selector, options]);

    return ref;
};