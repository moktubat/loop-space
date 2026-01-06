"use client";

import styled from "styled-components";
import Image from "next/image";
import { Heading } from "@/components/ui/Heading";

import { container, sectionSpacing } from "@/styles/mixins";
import { bodyText } from "@/styles/typography";
import { COLORS, FONT } from "@/styles/variables";
import { BREAKPOINTS } from "@/styles/variables";

import workImg1 from "@/assets/workImg1.webp";
import workImg2 from "@/assets/workImg2.webp";
import workImg3 from "@/assets/workImg3.webp";
import workImg4 from "@/assets/workImg4.webp";
import { TextLink } from "@/components/ui/TextLink";

/* Styled Components */

const WorksSection = styled.section`
  ${sectionSpacing("100px", "100px")}
  padding-left: 16px;
  padding-right: 16px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    ${sectionSpacing("60px", "60px")}
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${sectionSpacing("40px", "40px")}
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
  gap: 24px;
`;

const Description = styled.p`
  ${bodyText};
  max-width: 900px;
  color: ${COLORS.textMuted};
  margin: 0;
`;

const WorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 24px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: 1fr;
    gap: 32px 0;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    gap: 24px 0;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 500px;
  position: relative;

  @media (max-width: ${BREAKPOINTS.md}px) {
    height: 420px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    height: 320px;
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

  @media (max-width: ${BREAKPOINTS.sm}px) {
    font-size: 30px;
    line-height: 34px;
  }
`;

const ProjectDesc = styled.p`
  ${bodyText};
  color: ${COLORS.textMuted};
  margin: 0;
`;


/* Data */

const projects = [
  {
    id: 1,
    title: "Modern Luxe Apartment",
    description:
      "A sophisticated retreat featuring sleek furniture, ambient lighting, and a neutral palette with gold accents.",
    image: workImg1,
    link: "#",
  },
  {
    id: 2,
    title: "Cozy Scandinavian Home",
    description:
      "A warm, minimalistic space with natural wood elements, soft textures, and a calming pastel scheme.",
    image: workImg2,
    link: "#",
  },
  {
    id: 3,
    title: "Industrial Loft Office",
    description:
      "A stylish workspace blending exposed brick walls, metal fixtures, and open-concept design for creativity.",
    image: workImg3,
    link: "#",
  },
  {
    id: 4,
    title: "Elegant Classic Villa",
    description:
      "A timeless interior with intricate moldings, rich fabrics, and antique-inspired furnishings for luxury.",
    image: workImg4,
    link: "#",
  },
];

/* Component */

const Works = () => {
  return (
    <WorksSection>
      <WorksContainer>
        <IntroBlock>
          <Heading>
            Our <span className="highlightTxt">Works</span>
          </Heading>

          <Description>
            We take pride in delivering exceptional interior solutions tailored
            to each client’s preferences. From luxurious residential interiors to
            functional office spaces.
          </Description>
        </IntroBlock>

        <WorksGrid>
          {projects.map((project) => (
            <GridItem key={project.id}>
              <ImageWrapper>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </ImageWrapper>

              <InfoWrapper>
                <TextWrapper>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDesc>{project.description}</ProjectDesc>
                </TextWrapper>
                
                <TextLink variant="pink" href={project.link}>
                  View Project
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13.5L13.5 1M13.5 1H1M13.5 1V13.5"
                      stroke="#EA2B7B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </TextLink>
              </InfoWrapper>
            </GridItem>
          ))}
        </WorksGrid>
      </WorksContainer>
    </WorksSection>
  );
};

export default Works;