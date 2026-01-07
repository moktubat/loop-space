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
`;

const ImageGrid = styled.ul`
    position: relative;
    height: 100%;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const ImageListItem = styled.li<{ $width: string; $aspect: string; $pos: any }>`
    position: absolute;
    width: ${props => props.$width};
    aspect-ratio: ${props => props.$aspect};
    ${props => props.$pos}
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
    ${props => props.$pos}
`;

const Title = styled.h2`
    color: ${COLORS.white};
    font-family: ${FONT.urbanist};
    font-size: 40px;
    line-height: 116%;
    font-weight: 500;
`;

const Description = styled.p`
    color: ${COLORS.subtle};
    font-family: ${FONT.urbanist};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
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

    return (
        <Section ref={timelineRef}>
            <TimelineList>
                {TIMELINE_ENTRIES.map((entry, index) => (
                    <li key={index}>
                        <Article>
                            {/* Images */}
                            <ImageGrid>
                                {entry.images.map((image: ImageConfig, imgIndex) => (
                                    <ImageListItem
                                        key={imgIndex}
                                        $width={image.width}
                                        $aspect={image.aspectRatio}
                                        $pos={image.position}
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