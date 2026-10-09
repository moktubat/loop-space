'use client';
import LazyImage from "@/components/ui/LazyImage";
import { getYears, TIMELINE_ENTRIES, ImageConfig } from "@/data/timeline";
import { BREAKPOINTS, COLORS, container, FONT } from "@/styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

// Styled Components
const Section = styled.section`
    position: relative;
    background: #0c0d12;
    isolation: isolate;
    padding: 0 16px 100px;
    
      @media (max-width: ${BREAKPOINTS.md}px) {
        padding-top: 60px;
        padding-bottom: 60px;
      }
      @media (max-width: ${BREAKPOINTS.sm}px) {
        padding-top: 40px;
        padding-bottom: 40px;
      }
        
`;

const TimelineList = styled.ul`
    ${container}
    list-style: none;
    padding: 0;
    margin: 0 auto;
    
`;

const Article = styled.article`
    position: relative;
    height: 100vh;

    @media (max-width: ${BREAKPOINTS.md}px) {
        height: auto;
        display: flex;
        flex-direction: column;
    }
`;

const ImageGrid = styled.ul`
    position: relative;
    height: 100%;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: ${BREAKPOINTS.md}px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        gap: 12px;
        height: auto;
        margin-bottom: 48px;
    }
`;

const ImageListItem = styled.li<{
    $width: string;
    $aspect: string;
    $pos: any;
    $type: 'portrait' | 'square' | 'logo';
}>`
    position: absolute;
    width: ${props => props.$width};
    aspect-ratio: ${props => props.$aspect};
    ${props => props.$pos};

    @media (max-width: ${BREAKPOINTS.md}px) {
        position: relative;
        width: 100%;
        inset: unset;
        transform: none !important;

        ${({ $type }) =>
        $type === 'logo' &&
        `
            grid-column: 1 / 2;
            grid-row: 1 / 2;
        `}

        ${({ $type }) =>
        $type === 'square' &&
        `
            grid-column: 2 / 3;
            grid-row: 1 / 2;
        `}

        ${({ $type }) =>
        $type === 'portrait' &&
        `
            grid-column: 1 / 3;
            grid-row: 2 / 3;
        `}
    }
`;


const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const ContentWrapper = styled.div<{ $pos: any }>`
    position: absolute;
    max-width: 500px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 12px;
    ${props => props.$pos};

    @media (max-width: ${BREAKPOINTS.md}px) {
        position: relative;
        max-width: 100%;
        padding: 0 8px;
        top: auto;
        left: auto;
        right: auto;
        bottom: auto;
        transform: none;
    }
`;

const Title = styled.h2`
    color: ${COLORS.white};
    font-family: ${FONT.urbanist};
    font-size: 40px;
    line-height: 116%;
    font-weight: 500;

    @media (max-width: ${BREAKPOINTS.md}px) {
        font-size: 28px;
        line-height: 120%;
    }
`;

const Description = styled.p`
    color: ${COLORS.subtle};
    font-family: ${FONT.urbanist};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;

    @media (max-width: ${BREAKPOINTS.md}px) {
        font-size: 14px;
        line-height: 22px;
    }
`;

const YearBadge = styled.div<{ $isFirst?: boolean }>`
  display: none;

  @media (max-width: ${BREAKPOINTS.md}px) {
    display: inline-flex;
    align-items: center;
    align-self: flex-start; /* 👈 FIX */

    padding: 6px 14px;
    border-radius: 6px;
    background: #fff;

    border-left: 2px solid #EA2B7B;
    border-top: 2px solid #EA2B7B;
    border-right: 2px solid #EA2B7B;
    border-bottom: 4px solid #EA2B7B;

    font-family: ${FONT.urbanist};
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #EA2B7B;

    margin-bottom: 16px;
    margin-top: ${({ $isFirst }) => ($isFirst ? '0' : '24px')};

    opacity: 0;
    transform: translateY(6px);
  }
`;



const BackgroundContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
    height: 100%;
    width: 100%;
    opacity: 0.4;
    pointer-events: none;

    @media (max-width: ${BREAKPOINTS.md}px) {
        display: none;
    }
`;

const YearsWrapper = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    min-height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 15vw;
    color: ${COLORS.textMuted};
    line-height: 1;
`;

const YearText = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    clip-path: inset(12% 0px 0px 0px);
    
    & span {
        display: inline-block; // Required for GSAP transform to work nicely
        will-change: transform, opacity;
    }
`;

const TimeLineContent = () => {
    const timelineRef = useRef<HTMLElement>(null);
    const years = getYears;

    useEffect(() => {
        const articles = gsap.utils.toArray<HTMLElement>(
            timelineRef.current!.querySelectorAll("article")
        );
        const yearElements = gsap.utils.toArray<HTMLElement>('[data-timeline="year"]');

        // Initial setup
        yearElements.forEach((year, index) => {
            const chars = year.querySelectorAll(".char");
            gsap.set(chars, {
                yPercent: index === 0 ? 0 : 100,
                opacity: index === 0 ? 1 : 0,
            });
        });

        // Animations for each article
        articles.forEach((article, articleIndex) => {
            if (articleIndex === 0) return;

            const previousYearChars = yearElements[articleIndex - 1]?.querySelectorAll(".char");
            const currentYearChars = yearElements[articleIndex]?.querySelectorAll(".char");

            if (!previousYearChars || !currentYearChars) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: article,
                    start: "top bottom",
                    end: "top top",
                    scrub: 1,
                },
            });

            tl.to(previousYearChars, {
                yPercent: -100,
                opacity: 0,
                duration: 1,
                stagger: 0.05,
                ease: "power3.out",
            }, 0);

            tl.fromTo(
                currentYearChars,
                { yPercent: 100, opacity: 0 },
                { yPercent: 0, opacity: 1, duration: 1, stagger: 0.05, ease: "power3.out" },
                0
            );
        });

    }, []);

    useEffect(() => {
        if (window.innerWidth > BREAKPOINTS.md) return;

        const mobileYears = gsap.utils.toArray<HTMLElement>('[data-mobile-year]');

        mobileYears.forEach((year) => {
            gsap.to(year, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: year,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });
        });
    }, []);

    return (
        <Section ref={timelineRef}>
            <TimelineList>
                {TIMELINE_ENTRIES.map((entry, index) => (
                    <li key={index}>
                        <Article>
                            <YearBadge
                                data-mobile-year
                                $isFirst={index === 0}
                            >
                                {entry.year}
                            </YearBadge>
                            {/* Images */}
                            <ImageGrid>
                                {entry.images.map((image: ImageConfig, imgIndex) => (
                                    <ImageListItem
                                        key={imgIndex}
                                        $width={image.width}
                                        $aspect={image.aspectRatio}
                                        $pos={image.position}
                                        $type={image.type}
                                    >
                                        <ImageWrapper>
                                            <LazyImage
                                                src={image.src}
                                                alt={image.alt || ""}
                                                parallax={image.parallax}
                                                blur
                                            />
                                        </ImageWrapper>
                                    </ImageListItem>
                                ))}
                            </ImageGrid>

                            <ContentWrapper $pos={entry.contentPosition}>
                                <Title
                                    dangerouslySetInnerHTML={{ __html: entry.title }}
                                />
                                <Description>
                                    {entry.desc}
                                </Description>
                            </ContentWrapper>
                        </Article>
                    </li>
                ))}
            </TimelineList>

            {/* Year Display Background */}
            <BackgroundContainer>
                <YearsWrapper data-timeline="years-wrapper">
                    {years.map((year, index) => (
                        <YearText
                            key={index}
                            data-timeline="year"
                        >
                            {year.split('').map((char, charIndex) => (
                                <span key={charIndex} className="char">
                                    {char}
                                </span>
                            ))}
                        </YearText>
                    ))}
                </YearsWrapper>
            </BackgroundContainer>
        </Section>
    );
};

export default TimeLineContent;