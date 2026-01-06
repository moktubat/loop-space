'use client';

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Heading } from "@/components/ui/Heading";
import { BREAKPOINTS } from "@/styles/variables";
import { container } from "@/styles/mixins";
import { bodyText } from "@/styles/typography";
import { COLORS, FONT } from "@/styles/variables";

import ourStory from "@/assets/ourStory.webp";
import Mission from "@/assets/mission.svg";
import Vision from "@/assets/vision.svg";

import Image from "next/image";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const StorySection = styled.section`
  background-color: #F9FAFB;
  padding: 100px 16px;
`;

const StoryContainer = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const IntroBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 10px;
`;

const DescriptionText = styled.p`
  ${bodyText};
  max-width: 900px;
  color: ${COLORS.textMuted};
  margin: 0;
`;

const StoryImage = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
`;

const MissionVisionContainer = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    flex-direction: column;
  }
`;

const Block = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "bgColor"
}) <{ bgColor: string }>`
  flex: 1;
  background: ${(p) => p.bgColor};
  padding: 24px;
  border: 1px solid ${COLORS.subtle};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const IconWrapper = styled.div`
  background: ${COLORS.white};
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlockTitle = styled.div`
  display: flex;
  align-items: end;
  gap: 20px;

  h3 {
    font-family: ${FONT.helvetica};
    font-size: 30px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: -0.6px;
    color: ${COLORS.white};
    margin-bottom: -5px;
  }
`;

const BlockDivider = styled.hr`
  border: 1px solid ${COLORS.subtleBorder};
`;

const BlockDescription = styled.p`
  font-family: ${FONT.urbanist};
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: ${COLORS.white};
`;

const OurStory = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const blocksRef = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".intro-animate", {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            });

            gsap.from(imageRef.current, {
                opacity: 0,
                y: 80,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 85%",
                },
            });

            gsap.from(blocksRef.current, {
                opacity: 0,
                y: 60,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: blocksRef.current[0],
                    start: "top 80%",
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <StorySection ref={containerRef}>
            <StoryContainer>
                <IntroBlock>
                    <Heading className="intro-animate">
                        Our <span className="highlightTxt">Story</span>
                    </Heading>

                    <DescriptionText className="intro-animate">
                        Founded in 2020, Loop Space was created with a passion for designing
                        interiors that are both stylish and functional. We believe in blending
                        innovation, elegance, and comfort to craft spaces that reflect
                        individuality.
                    </DescriptionText>
                </IntroBlock>

                <StoryImage ref={imageRef}>
                    <Image
                        src={ourStory}
                        alt="Our Story Image"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </StoryImage>

                <MissionVisionContainer>
                    <Block
                        bgColor={COLORS.brandPink}
                        ref={(el) => {
                            blocksRef.current[0] = el;
                        }}
                    >
                        <BlockTitle>
                            <IconWrapper>
                                <Mission width={40} height={40} />
                            </IconWrapper>
                            <h3>OUR MISSION</h3>
                        </BlockTitle>

                        <BlockDivider />

                        <BlockDescription>
                            At Loop Space, we strive to create interiors that seamlessly blend
                            style and functionality. Our goal is to transform spaces into
                            personalized, inspiring environments that enhance everyday living
                            and well-being.
                        </BlockDescription>
                    </Block>

                    <Block
                        bgColor="#5A378F"
                        ref={(el) => {
                            blocksRef.current[1] = el;
                        }}
                    >
                        <BlockTitle>
                            <IconWrapper>
                                <Vision width={40} height={40} />
                            </IconWrapper>
                            <h3>OUR VISION</h3>
                        </BlockTitle>

                        <BlockDivider />

                        <BlockDescription>
                            To become a leading force in interior design by redefining how people
                            experience spaces—where innovation meets timeless elegance, and
                            every design empowers individuality and belonging.
                        </BlockDescription>
                    </Block>
                </MissionVisionContainer>
            </StoryContainer>
        </StorySection>
    );
};

export default OurStory;
