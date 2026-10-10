"use client";

import { useLayoutEffect, useRef } from "react";
import { Heading } from "@/components/ui/Heading";
import { container } from "@/styles/mixins";
import { bodyText } from "@/styles/typography";
import { BREAKPOINTS, COLORS, FONT } from "@/styles/variables";
import styled from "styled-components";

import workImg1 from "@/assets/workImg1.webp";
import workImg2 from "@/assets/workImg2.webp";
import workImg3 from "@/assets/workImg3.webp";
import workImg4 from "@/assets/workImg4.webp";
import workImg5 from "@/assets/workImg5.webp";
import workImg6 from "@/assets/workImg6.webp";
import workImg7 from "@/assets/workImg7.webp";
import workImg8 from "@/assets/workImg8.webp";

import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*                            STYLED COMPONENTS                       */
/* ------------------------------------------------------------------ */

const WorksSection = styled.section`
  background-color: #F9FAFB;
  padding: 100px 16px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding: 60px 16px;
  }
`;

const WorksContainer = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  gap: 64px;
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

const WorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: 1fr;
  }
`;

/* Card Wrapper - Handles Full vs Half Width */
const CardWrapper = styled.div<{
  $isFull: boolean;
  $isMinimal?: boolean;
}>`
  position: relative;
  overflow: hidden;
  grid-column: ${(p) => (p.$isFull ? "span 2" : "span 1")};
  height: 600px;
  cursor: pointer;
  background: #000;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-column: span 2;
    height: 450px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    height: 350px;
  }

  ${(p) =>
    p.$isMinimal &&
    `
      ${BottomContent} {
        justify-content: center;
        align-items: center;
      }

      ${ProjectInfo} {
        align-items: center;
        text-align: center;
      }
    `}
`;

const ImageMask = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  img {
    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.2) 40%,
    rgba(0, 0, 0, 0.4) 100%
  );
`;

const DiscoverButton = styled.button`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%) translateY(-20px);
  background: ${COLORS.white};
  color: ${COLORS.brandPink};
  border: 2px solid ${COLORS.brandPink};
  border-bottom: 4px solid ${COLORS.brandPink};
  padding: 12px 32px;
  font-family: ${FONT.urbanist};
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 5;
  white-space: nowrap;

  ${CardWrapper}:hover & {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

const BottomContent = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  right: 40px;
  z-index: 4;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    bottom: 20px;
    left: 20px;
    right: 20px;
    gap: 12px;
  }
`;

const DateBadge = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${COLORS.white};
  padding: 6px 12px;
  border-radius: 4px;
  font-family: ${FONT.urbanist};
  font-size: 14px;
  display: flex;
  gap: 8px;
`;

const ProjectTitle = styled.h3`
  font-family: ${FONT.helvetica};
  font-size: 36px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: -2px;
  text-transform: uppercase;
  color: ${COLORS.white};
  margin: 0;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 24px;
  color: ${COLORS.white};
  font-family: ${FONT.urbanist};
  font-size: 16px;
  font-weight: 500;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    font-size: 13px;
    gap: 12px;
  }
`;

/* ------------------------------------------------------------------ */
/*                              DATA                                  */
/* ------------------------------------------------------------------ */

interface ProjectData {
  id: number;
  month: string;
  year: string;
  title: string;
  location: string;
  size: string;
  image: string;
  link: string;
}

const projects: ProjectData[] = [
  { id: 1, month: "Nov", year: "2025", title: "Modern Luxe Apartment", location: "New York", size: "2450 sqft", image: workImg1.src, link: "#" },
  { id: 2, month: "Jul", year: "2025", title: "Cozy Scandinavian Home", location: "Stockholm", size: "1770 sqft", image: workImg2.src, link: "#" },
  { id: 3, month: "May", year: "2025", title: "Industrial Loft Office", location: "Berlin", size: "6000 sqft", image: workImg3.src, link: "#" },
  { id: 4, month: "Feb", year: "2025", title: "Opulent Living Penthouse", location: "Miami", size: "2840 sqft", image: workImg4.src, link: "#" },
  { id: 5, month: "Jan", year: "2025", title: "Serene Haven Residence", location: "Kyoto", size: "4290 sqft", image: workImg5.src, link: "#" },
  { id: 6, month: "Dec", year: "2024", title: "Boutique Chic Café", location: "Paris", size: "1200 sqft", image: workImg6.src, link: "#" },
  { id: 7, month: "Oct", year: "2024", title: "Minimalist Urban Studio", location: "Tokyo", size: "800 sqft", image: workImg7.src, link: "#" },
  { id: 8, month: "Aug", year: "2024", title: "Rustic Country House", location: "Tuscany", size: "3200 sqft", image: workImg8.src, link: "#" },
];

/* ------------------------------------------------------------------ */
/*                             COMPONENT                              */
/* ------------------------------------------------------------------ */

const Works = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // GSAP Animation Logic
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate Cards
      const cards = gsap.utils.toArray(".work-card");
      gsap.set(cards, { opacity: 0, y: 50 });
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate Image Masks
      const imgMasks = gsap.utils.toArray(".work-img-mask");
      gsap.set(imgMasks, { clipPath: "inset(0 0 100% 0)" });
      gsap.to(imgMasks, {
        clipPath: "inset(0 0 0% 0)",
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <WorksSection id="works-section" ref={sectionRef}>
      <WorksContainer>
        <IntroBlock>
          <Heading>
            Our <span className="highlightTxt">Works</span>
          </Heading>
          <DescriptionText>
            Founded in 2020, Loop Space was created with a passion for designing
            interiors that are both stylish and functional.
          </DescriptionText>
        </IntroBlock>

        <WorksGrid>
          {projects.map((project, index) => {
            // Pattern logic: 3 full, 2 half, 3 full, 2 half...
            const isFullWidth = index % 5 < 3;
            const isMinimal = project.id === 4 || project.id === 5;

            return (
              <CardWrapper
                key={project.id}
                className="work-card"
                $isFull={isFullWidth}
                $isMinimal={isMinimal}
              >
                <ImageMask className="work-img-mask">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </ImageMask>

                <GradientOverlay />

                <DiscoverButton>Discover</DiscoverButton>

                <BottomContent>
                  <ProjectInfo>
                    <DateBadge>
                      <span>{project.month}</span>
                      <span>{project.year}</span>
                    </DateBadge>

                    <ProjectTitle>{project.title}</ProjectTitle>
                  </ProjectInfo>

                  {!isMinimal && (
                    <InfoRow>
                      <span>Location: {project.location}</span>
                      <span>Surface: {project.size}</span>
                    </InfoRow>
                  )}
                </BottomContent>
              </CardWrapper>
            );
          })}
        </WorksGrid>

      </WorksContainer>
    </WorksSection>
  );
};

export default Works;