"use client";

import { useEffect, useRef } from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BREAKPOINTS } from "@/styles/variables";
import { FONT, COLORS, SIZING } from "@/styles/variables";

gsap.registerPlugin(ScrollTrigger);

/* Styled Components */

const HeaderSection = styled.section`
  width: 100%;
  padding: 60px 16px 100px 16px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 40px 16px 60px 16px;
  }
`;

const HeaderContainer = styled.div`
  max-width: ${SIZING.maxWidth};
  margin: 0 auto;

  display: flex;
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const IntroBlock = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const IntroText = styled.p`
  flex: 1;
  color: ${COLORS.textMuted};
  font-family: ${FONT.urbanist};
  font-size: 20px;
  line-height: 28px;
  margin-bottom: -60px;
  align-self: flex-end;

  @media (max-width: ${BREAKPOINTS.md}px) {
    margin-bottom: 0;
    align-self: flex-start;
  }
`;

const IntroImage = styled.div`
  flex: 1;
  width: 260px;
  height: 393px;
  position: relative;
  will-change: transform;

  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 100%;
    height: 360px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    height: 300px;
  }
`;

const HeadingGroup = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const HeroHeading = styled.h1`
  margin: 0;
  color: ${COLORS.textPrimary};
  font-family: ${FONT.helvetica};
  text-align: right;

  font-size: 160px;
  line-height: 0.7;
  letter-spacing: -6.4px;
  text-transform: uppercase;
  margin-right: 60px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    font-size: 120px;
    margin-right: 0;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    font-size: 80px;
  }
`;

const Line2 = styled(HeroHeading)`
  margin-top: 32px;
  color: ${COLORS.lightGray};
  background: #5A378F;
  padding: 14px 14px 20px 6px;
  width: fit-content;
  margin-left: auto;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    margin-top: 20px;
  }
`;

const ImageColumn = styled.div`
  flex: 1;
  display: flex;
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    justify-content: space-between;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    flex-direction: column;
  }
`;

const TallImage = styled.div`
  width: 312px;
  height: 784px;
  position: relative;
  will-change: transform;

  @media (max-width: ${BREAKPOINTS.md}px) {
    height: 600px;
    width: 48%;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 100%;
    height: 400px;
  }
`;

const MediumImage = styled.div`
  width: 312px;
  height: 628px;
  position: relative;
  will-change: transform;

  @media (max-width: ${BREAKPOINTS.md}px) {
    height: 500px;
    width: 48%;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 100%;
    height: 360px;
  }
`;

/* Component Props */

interface PageHeaderProps {
  introText: string;
  introImage: StaticImageData;
  headingLine1: string;
  headingLine2: string;
  rightTallImage: StaticImageData;
  rightMediumImage: StaticImageData;
}

/* Component */

const PageHeader = ({
  introText,
  introImage,
  headingLine1,
  headingLine2,
  rightTallImage,
  rightMediumImage,
}: PageHeaderProps) => {
  const sectionRef = useRef(null);
  const parallax1 = useRef(null);
  const parallax2 = useRef(null);
  const parallax3 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();

      gsap.from(".fade-up", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" }
      });

      const layers = [
        { ref: parallax1, y: -30, smooth: 1.5 },
        { ref: parallax2, y: -80, smooth: 1 },
        { ref: parallax3, y: -140, smooth: 0.8 }
      ];

      layers.forEach(layer =>
        gsap.to(layer.ref.current, {
          y: layer.y,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: layer.smooth
          }
        })
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <HeaderSection ref={sectionRef}>
      <HeaderContainer>

        <Column>
          <IntroBlock>
            <IntroText className="fade-up">{introText}</IntroText>

            <IntroImage ref={parallax1} className="fade-up">
              <Image src={introImage} alt="" fill style={{ objectFit: "cover" }} />
            </IntroImage>
          </IntroBlock>

          <HeadingGroup>
            <HeroHeading className="fade-up">{headingLine1}</HeroHeading>
            <Line2 className="fade-up">{headingLine2}</Line2>
          </HeadingGroup>
        </Column>

        <ImageColumn>
          <TallImage ref={parallax2} className="fade-up">
            <Image src={rightTallImage} alt="Header" fill style={{ objectFit: "cover" }} />
          </TallImage>

          <MediumImage ref={parallax3} className="fade-up">
            <Image src={rightMediumImage} alt="Header" fill style={{ objectFit: "cover" }} />
          </MediumImage>
        </ImageColumn>

      </HeaderContainer>
    </HeaderSection>
  );
};

export default PageHeader;
