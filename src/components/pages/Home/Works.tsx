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
import workImg5 from "@/assets/workImg4.webp";
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

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const ProjectItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 24px;
  padding: 32px 0;
`;

const DateBadge = styled.div`
  display: flex;
  align-items: center;
  background-color: ${COLORS.subtle};
  padding: 6px 10px;
  border-radius: 4px;
  gap: 90px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    justify-content: center;
    gap: 8px;
    width: fit-content;
  }
`;

const Month = styled.span`
  color: ${COLORS.textPrimary};
  font-family: ${FONT.urbanist};
  font-size: 16px;
  line-height: 24px;
`;

const Year = styled.span`
  font-family: ${FONT.urbanist};
  color: ${COLORS.textPrimary};
  font-size: 16px;
  line-height: 24px;
`;

const ProjectImage = styled.div`
  width: 363px;
  height: 238px;
  border: 4px solid ${COLORS.subtle};
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 140px;
    height: 100px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 100%;
    height: 200px;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  gap: 24px;
  padding: 20px 0 36px;
  border-top: 1px solid ${COLORS.subtle};
`;

const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  flex: 1;
`;

const InfoRight = styled.div`
max-width: 338px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-family: ${FONT.helvetica};
  font-size: 36px;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: -2px;
  text-transform: uppercase;
  color: ${COLORS.textPrimary};
  margin: 0;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    font-size: 20px;
  }
`;

const SizeLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;

  font-family: ${FONT.urbanist};
  font-size: 18px;
  line-height: 28px;
  color: ${COLORS.textPrimary};
  font-weight: 400;

  span {
    font-weight: 600;
    color: #1D1F2C;
  }

  svg {
    flex-shrink: 0;
  }
`;

const ProjectDesc = styled.p`
  font-family: ${FONT.urbanist};
  font-size: 16px;
  line-height: 1.5;
  color: ${COLORS.textMuted};
  margin: 0;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    font-size: 14px;
  }
`;

const ActionButton = styled.button`
  padding: 12px 16px;
  border-radius: 6px;
  background: #fff;
  border-left: 2px solid #EA2B7B;
  border-top: 2px solid #EA2B7B;
  border-right: 2px solid #EA2B7B;
  border-bottom: 4px solid #EA2B7B;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;

  font-family: ${FONT.urbanist};
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: #EA2B7B;

  align-self: flex-start;

  svg {
    stroke: #EA2B7B;
  }
`;

const ExploreButton = styled.button`
  font-family: ${FONT.urbanist};
  font-size: 16px;
  font-weight: 500;
  color: ${COLORS.white};
  background-color: ${COLORS.brandPink};
  border-left: 2px solid #F8BDD6;
  border-top: 2px solid #F8BDD6;
  border-right: 2px solid #F8BDD6;
  border-bottom: 4px solid #F8BDD6;
  border-radius: 6px;
  padding: 12px 11px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0px auto 0;

  &:hover {
    background-color: ${COLORS.brandPinkHover};
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 100%;
    justify-content: center;
  }
`;


/* Data */

const projects = [
  {
    id: 1,
    month: "Nov",
    year: "2025",
    title: "Modern Luxe Apartment",
    description: "A sophisticated retreat featuring sleek furniture, ambient lighting, and a neutral palette with gold accents.",
    size: "2450 sqft",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    month: "Jul",
    year: "2025",
    title: "Cozy <br /> Scandinavian Home",
    description: "A warm, minimalistic space with natural wood elements, soft textures, and a calming pastel scheme.",
    size: "1770 sqft",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    month: "May",
    year: "2025",
    title: "Industrial Loft Office",
    description: "A stylish workspace blending exposed brick walls, metal fixtures, and open-concept design for creativity.",
    size: "6000 sqft",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    month: "Feb",
    year: "2025",
    title: "Opulent Living Penthouse",
    description: "A high-end penthouse featuring luxurious textures and panoramic views.",
    size: "2840 sqft",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    month: "Jan",
    year: "2025",
    title: "Serene Haven Residence",
    description: "A modern minimalist home with warm earthy tones and seamless functionality.",
    size: "4290 sqft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
  },
];

/* Component */

const Works = () => {
  return (
    <WorksSection>
      <WorksContainer>
        <IntroBlock>
          <Heading>
            OUR <span className="highlightTxt">WORKS</span>
          </Heading>
          <Description>
            We take pride in delivering exceptional interior solutions tailored to each client's preferences. From luxurious residential interiors to functional office spaces.
          </Description>
        </IntroBlock>

        <ProjectsList>
          {projects.map((project) => (
            <ProjectItem key={project.id}>
              <DateBadge>
                <Month>{project.month}</Month>
                <Year>{project.year}</Year>
              </DateBadge>

              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>

              <ProjectInfo>
                <InfoLeft>
                  <ProjectTitle dangerouslySetInnerHTML={{ __html: project.title }} />
                  <ActionButton>
                    View Project
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path
                        d="M1 13.5L13.5 1M13.5 1H1M13.5 1V13.5"
                        stroke="#EA2B7B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ActionButton>
                </InfoLeft>

                <InfoRight>
                  <SizeLabel>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                      <path d="M12.4167 5.75009H13.1667V5.00009H12.4167V5.75009ZM9.50004 5.75009V6.50009H12.4167V5.75009V5.00009H9.50004V5.75009ZM12.4167 5.75009H11.6667V8.66667H12.4167H13.1667V5.75009H12.4167ZM12.4167 5.75009L11.8864 5.21976L7.30305 9.803L7.83337 10.3333L8.3637 10.8637L12.947 6.28043L12.4167 5.75009Z" fill="#EA2B7B" />
                      <path d="M0.75 17.4165H0C0 17.8307 0.335786 18.1665 0.75 18.1665L0.75 17.4165ZM8.25 17.4165V18.1665H9V17.4165H8.25ZM8.25 9.9165H9V9.1665H8.25V9.9165ZM0.75 9.9165V9.1665H0V9.9165H0.75ZM0.75 9.9165V10.6665H8.25V9.9165V9.1665H0.75V9.9165ZM8.25 9.9165H7.5V17.4165H8.25H9V9.9165H8.25ZM8.25 17.4165V16.6665H0.75V17.4165V18.1665H8.25V17.4165ZM0.75 17.4165H1.5V9.9165H0.75H0V17.4165H0.75Z" fill="#EA2B7B" />
                      <path d="M0.75 5.75V7.41667M11.5833 0.75H6.58333M17.4167 11.5833L17.4167 6.58333M10.75 17.4167H12.4167M0.75 4.08333V0.75L4.08333 0.750055M14.0833 0.750055H17.4167L17.4167 4.08333M17.4167 14.0833V17.4167H14.0833" stroke="#EA2B7B" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                    Size: <span>{project.size}</span>
                  </SizeLabel>
                  <ProjectDesc>{project.description}</ProjectDesc>
                </InfoRight>

              </ProjectInfo>


            </ProjectItem>
          ))}
        </ProjectsList>

        <ExploreButton>
          Explore More
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5.83331 14.1668L14.1666 5.8335M14.1666 5.8335H5.83331M14.1666 5.8335V14.1668" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </ExploreButton>
      </WorksContainer>
    </WorksSection>
  );
};

export default Works;