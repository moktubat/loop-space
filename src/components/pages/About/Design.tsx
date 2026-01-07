'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { Heading } from "@/components/ui/Heading";
import { BREAKPOINTS } from "@/styles/variables";
import { container, sectionSpacing } from "@/styles/mixins";
import { bodyText, bodyLarge } from "@/styles/typography";
import { COLORS } from "@/styles/variables";
import styled from "styled-components";
import susDesign1 from "@/assets/susDesign1.webp";
import susDesign2 from "@/assets/susDesign2.webp";
import Image from "next/image";

/* SECTION STYLES */
const DesignSection = styled.section`
  ${sectionSpacing("100px", "100px")}
`;

const DesignContainer = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const IntroBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const DescriptionText = styled.p`
  ${bodyText};
  max-width: 900px;
  color: ${COLORS.textMuted};
  margin: 0;
`;

/* DETAILS SECTION */
const DetailsSection = styled.div`
  display: flex;
  gap: 48px;
  align-items: flex-start;

  @media (max-width: ${BREAKPOINTS.md}px) {
    flex-direction: column;
    gap: 32px;
  }
`;

/* IMAGE WRAPPERS */
const ImageWrapper = styled.div`
  width: 612px;
  height: 712px;
  position: relative;

  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 100%;
    height: auto;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 612px;
`;

const RightText = styled.p`
  ${bodyLarge};
  color: ${COLORS.textMuted};
  margin: 0;
`;

const Design = () => {
    /* REFS FOR GSAP ELEMENTS */
    const sectionRef = useRef(null);
    const leftImageRef = useRef(null);
    const textRef = useRef(null);
    const bottomImageRef = useRef(null);

    /* GSAP ANIMATION */
    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            tl.from(leftImageRef.current, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power3.out",
            })
                .from(
                    textRef.current,
                    {
                        opacity: 0,
                        y: 40,
                        duration: 0.7,
                        ease: "power3.out",
                    },
                    "-=0.4"
                )
                .from(
                    bottomImageRef.current,
                    {
                        opacity: 0,
                        y: 40,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.4"
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);


    return (
        <DesignSection ref={sectionRef}>
            <DesignContainer>

                <IntroBlock>
                    <Heading>
                        Sustainable <span className="highlightTxt">Design</span>
                    </Heading>

                    <DescriptionText>
                        Our interior design services cater to a variety of needs, from residential makeovers
                        to commercial space transformations. We specialize in space planning, furniture
                        selection, custom decor, and renovation projects.
                    </DescriptionText>
                </IntroBlock>

                <DetailsSection>
                    <ImageWrapper ref={leftImageRef}>
                        <Image
                            src={susDesign1}
                            alt="Sustainable Design Image Left"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </ImageWrapper>

                    <RightContent>
                        <RightText ref={textRef}>
                            At Loop Space, we are committed to creating beautiful, functional spaces that
                            prioritize environmental responsibility. We carefully select sustainable materials,
                            incorporate energy-efficient designs, and aim to reduce our carbon footprint with
                            every project.
                        </RightText>

                        <ImageWrapper ref={bottomImageRef}>
                            <Image
                                src={susDesign2}
                                alt="Sustainable Design Image Right"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </ImageWrapper>
                    </RightContent>
                </DetailsSection>
            </DesignContainer>
        </DesignSection>
    );
};

export default Design;