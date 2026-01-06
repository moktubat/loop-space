'use client';

import { useState, useEffect, useRef } from "react";
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

import { TextLink } from "@/components/ui/TextLink";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*                            STYLED COMPONENTS                       */
/* ------------------------------------------------------------------ */

const WorksSection = styled.section`
  background-color: #F9FAFB;
  padding: 100px 16px;
`;

const WorksContainer = styled.div`
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

const FadeWrapper = styled.div`
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transition: opacity 0.5s ease;
  will-change: opacity;
`;

const WorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 24px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: 1fr;
    gap: 32px 0;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.8s ease forwards;
  animation-play-state: ${(p) => (p.$play ? "running" : "paused")};
  animation-delay: ${(p) => p.$delay || 0}s;

  @keyframes fadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;

  @media (max-width: ${BREAKPOINTS.md}px) {
    height: 420px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    height: 320px;
  }
`;

const Mask = styled.div`
  position: absolute;
  inset: 0;
  background: white;
  transform: translateX(0%);
  animation: maskSlide 0.9s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  animation-play-state: ${(p) => (p.$play ? "running" : "paused")};
  animation-delay: ${(p) => p.$delay || 0}s;
  z-index: 5;

  @keyframes maskSlide {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(101%);
    }
  }
`;

const ImageInner = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: imgFade 0.9s ease forwards;
  animation-play-state: ${(p) => (p.$play ? "running" : "paused")};
  animation-delay: ${(p) => (p.$delay ? p.$delay + 0.1 : 0.1)}s;

  @keyframes imgFade {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProjectTitle = styled.h3`
  font-family: ${FONT.helvetica};
  font-size: 36px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: -2px;
  text-transform: uppercase;
  color: ${COLORS.textPrimary};
  margin: 0;
`;

const ProjectDesc = styled.p`
  ${bodyText};
  color: ${COLORS.textMuted};
  margin: 0;
`;

const PaginationWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ArrowButton = styled.button`
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background 0.25s ease, transform 0.25s ease;

  &:hover:not(:disabled) {
    background: #EA2B7B;
  }

  &:disabled {
    opacity: 0.4;
  }
`;

const PageNumber = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})`
  width: 44px;
  height: 44px;
  border: 2px solid #EA2B7B;
  background: ${(p) => (p.active ? "#EA2B7B" : "#FFF")};
  color: ${(p) => (p.active ? "#FFF" : "#EA2B7B")};
  font-family: Urbanist;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* ------------------------------------------------------------------ */
/*                              DATA                                  */
/* ------------------------------------------------------------------ */

const projects = [
  { id: 1, title: "Modern Luxe Apartment", description: "A sophisticated retreat featuring sleek furniture, ambient lighting, and a neutral palette with gold accents.", image: workImg1, link: "#" },
  { id: 2, title: "Cozy Scandinavian Home", description: "A warm, minimalistic space with natural wood elements, soft textures, and a calming pastel scheme.", image: workImg2, link: "#" },
  { id: 3, title: "Industrial Loft Office", description: "A stylish workspace blending exposed brick walls, metal fixtures, and open-concept design for creativity.", image: workImg3, link: "#" },
  { id: 4, title: "Elegant Classic Villa", description: "A timeless interior with intricate moldings, rich fabrics, and antique-inspired furnishings for luxury.", image: workImg4, link: "#" },
  { id: 5, title: "Serene Haven Residence", description: "A modern minimalist home with warm, earthy tones and seamless functionality.", image: workImg5, link: "#" },
  { id: 6, title: "Modern Zen Apartment", description: "A tranquil living space inspired by Japanese simplicity and balance.", image: workImg6, link: "#" },
  { id: 7, title: "Opulent Living Penthouse", description: "A high-end penthouse featuring luxurious textures and panoramic views.", image: workImg7, link: "#" },
  { id: 8, title: "Boutique Chic Café", description: "A stylish café with cozy aesthetics and Instagram-worthy interiors.", image: workImg8, link: "#" },
];

/* ------------------------------------------------------------------ */
/*                         PAGINATION LOGIC                           */
/* ------------------------------------------------------------------ */

const getPaginationNumbers = (total, current) => {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 3) return [1, 2, 3, "...", total];
  if (current >= total - 2) return [1, "...", total - 2, total - 1, total];
  return [1, "...", current - 1, current, current + 1, "...", total];
};

/* ------------------------------------------------------------------ */
/*                             COMPONENT                              */
/* ------------------------------------------------------------------ */

const Works = () => {
  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);

  const sectionRef = useRef(null);

  /* --- TRIGGER WHEN ENTERS VIEWPORT --- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setPlayAnimation(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;

    setIsVisible(false);
    setPlayAnimation(false);

    setTimeout(() => {
      setCurrentPage(page);

      const sectionTop = sectionRef.current?.offsetTop || 0;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });

      setIsVisible(true);
      setPlayAnimation(true);
    }, 500);
  };

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

        <FadeWrapper $visible={isVisible}>
          <WorksGrid>
            {displayedProjects.map((project, index) => (
              <GridItem
                key={project.id}
                $delay={index * 0.15}
                $play={playAnimation}
              >
                <ImageWrapper>
                  <Mask $delay={index * 0.15} $play={playAnimation} />
                  <ImageInner $delay={index * 0.15} $play={playAnimation}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </ImageInner>
                </ImageWrapper>

                <InfoWrapper>
                  <TextWrapper>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDesc>{project.description}</ProjectDesc>
                  </TextWrapper>

                  <TextLink variant="pink" href={project.link}>
                    View Project
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M1 13.5L13.5 1M13.5 1H1M13.5 1V13.5" stroke="#EA2B7B" strokeWidth="2" />
                    </svg>
                  </TextLink>
                </InfoWrapper>

              </GridItem>
            ))}
          </WorksGrid>
        </FadeWrapper>

        {/* Pagination */}
        <PaginationWrapper>

          {/* Left Arrow */}
          <ArrowButton onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <rect x="1" y="1" width="42" height="42" fill="white" />
              <rect x="1" y="1" width="42" height="42" stroke="#EA2B7B" strokeWidth="2" />
              <path d="M25 29.5L17.5 22L25 14.5V29.5Z" fill="#EA2B7B" />
            </svg>
          </ArrowButton>

          {getPaginationNumbers(totalPages, currentPage).map((item, idx) => {
            if (item === "...") {
              return (
                <span
                  key={idx}
                  style={{
                    width: 44,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#EA2B7B",
                    fontFamily: "Urbanist",
                    fontSize: "22px",
                  }}
                >
                  …
                </span>
              );
            }

            return (
              <PageNumber key={idx} active={currentPage === item} onClick={() => goToPage(item)}>
                {item}
              </PageNumber>
            );
          })}

          {/* Right Arrow */}
          <ArrowButton onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <rect x="1" y="1" width="42" height="42" fill="white" />
              <rect x="1" y="1" width="42" height="42" stroke="#EA2B7B" strokeWidth="2" />
              <path d="M19 29.5V14.5L26.5 22L19 29.5Z" fill="#EA2B7B" />
            </svg>
          </ArrowButton>

        </PaginationWrapper>

      </WorksContainer>
    </WorksSection>
  );
};

export default Works;
