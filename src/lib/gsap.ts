import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Common animation configurations
const animationDefaults = {
    duration: 1,
    ease: "power3.out",
};

// Fade up animation
export const useGsapFadeUp = (selector: string, options = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const elements = ref.current?.querySelectorAll(selector);
        if (!elements) return;

        gsap.from(elements, {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ...animationDefaults,
            ...options,
            scrollTrigger: {
                trigger: ref.current,
                start: "top 85%",
                ...options.scrollTrigger,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [options]);

    return ref;
};

// Parallax animation
export const useGsapParallax = (selector: string, options = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const elements = ref.current?.querySelectorAll(selector);
        if (!elements) return;

        elements.forEach((element) => {
            gsap.to(element, {
                y: options.y || -100,
                ease: "none",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: options.scrub || 1,
                    ...options.scrollTrigger,
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [options]);

    return ref;
};

// Marquee animation
export const useGsapMarquee = (selector: string, options = {}) => {
    const ref = useRef(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        const element = ref.current?.querySelector(selector);
        if (!element) return;

        const width = element.scrollWidth;
        animationRef.current = gsap.to(element, {
            x: -width,
            duration: options.duration || 40,
            ease: "linear",
            repeat: -1,
            ...options,
        });

        return () => {
            animationRef.current?.kill();
        };
    }, [options]);

    return ref;
};

// Continuous reveal animation
export const useGsapReveal = (selector: string, options = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const elements = ref.current?.querySelectorAll(selector);
        if (!elements) return;

        gsap.fromTo(
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
                    trigger: ref.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 0.5,
                    ...options.scrollTrigger,
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [options]);

    return ref;
};