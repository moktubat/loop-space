"use client";

import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { container, sectionSpacing } from "@/styles/mixins";
import { bodyText } from "@/styles/typography";
import { COLORS, FONT } from "@/styles/variables";
import { BREAKPOINTS } from "@/styles/variables";

import serviceImg1 from "@/assets/serviceImg1.webp";
import serviceImg2 from "@/assets/serviceImg2.webp";
import serviceImg3 from "@/assets/serviceImg3.webp";
import serviceImg4 from "@/assets/serviceImg4.webp";

import { Heading } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";

gsap.registerPlugin(ScrollTrigger);

/* Layout */

const ServicesSection = styled.section`
  ${sectionSpacing("100px", "100px")}
  padding: 0 16px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    margin: 60px 0;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    margin: 40px 0;
  }
`;

const ServicesContainer = styled.div`
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

/* Grid */

const ServicesGrid = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    flex-wrap: wrap;
    gap: 20px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const ServiceCard = styled.div<{ $image: string; $collapsed?: boolean }>`
  position: relative;
  flex: 1 1 0;
  height: 440px;
  padding: ${({ $collapsed }) => ($collapsed ? "20px" : "24px")};
  display: flex;
  align-items: flex-end;

  cursor: pointer;
  overflow: hidden;
  transition: padding 0.3s ease;

  @media (max-width: ${BREAKPOINTS.md}px) {
    flex: 1 1 calc(50% - 10px);
    height: 380px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    height: 320px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg,
        rgba(36, 36, 36, 0.05) 50%,
        rgba(36, 36, 36, 0.9) 100%
      ),
      url(${(p) => p.$image}) center/cover no-repeat;
    z-index: 1;
  }
`;

const ServiceContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ServiceName = styled.h3<{ $collapsed?: boolean }>`
  font-family: ${FONT.helvetica};
  color: ${COLORS.lightGray};
  font-size: ${({ $collapsed }) => ($collapsed ? "20px" : "24px")};
  line-height: ${({ $collapsed }) => ($collapsed ? "140%" : "32px")};
  letter-spacing: ${({ $collapsed }) => ($collapsed ? "-0.4px" : "-0.48px")};
  text-transform: uppercase;
  margin: 0;
  transition: all 0.3s ease;
`;

/* Data */

const services = [
  { id: 1, name: "Residential Design", image: serviceImg1.src },
  { id: 2, name: "Commercial Design", image: serviceImg2.src },
  { id: 3, name: "Renovation", image: serviceImg3.src },
  { id: 4, name: "Custom Furniture", image: serviceImg4.src },
];

/* Component */

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [collapsedIndex, setCollapsedIndex] = useState<number | null>(null);

  const expandCard = (index: number) => {
    cardRefs.current.forEach((card, i) => {
      gsap.killTweensOf(card);

      gsap.to(card, {
        flexGrow: i === index ? 1.4 : 0.9,
        duration: 1.1,
        ease: "power3.out",
      });
    });

    setCollapsedIndex(index);
  };

  const resetCards = () => {
    cardRefs.current.forEach((card) => {
      gsap.to(card, { flexGrow: 1, duration: 1, ease: "power2.out" });
    });

    setCollapsedIndex(null);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    tl.from(sectionRef.current.querySelector("h2"), { opacity: 0, y: 50, duration: 0.6 })
      .from(sectionRef.current.querySelector("p"), { opacity: 0, y: 30, duration: 0.5 }, "-=0.3")
      .from(cardRefs.current, { opacity: 0, y: 40, duration: 0.6, stagger: 0.15 }, "-=0.2");
  }, []);

  return (
    <ServicesSection ref={sectionRef}>
      <ServicesContainer>
        <IntroBlock>
          <Heading>
            Services <span className="highlightTxt">Offered</span>
          </Heading>

          <DescriptionText>
            Our interior design services cater to a variety of needs, from residential makeovers to commercial space transformations.
            We specialize in space planning, furniture selection, custom decor, and renovation projects.
          </DescriptionText>
        </IntroBlock>

        <ServicesGrid>
          {services.map((service, i) => (
            <ServiceCard
              className="hover-parent"
              key={service.id}
              ref={(el: HTMLDivElement | null) => (cardRefs.current[i] = el)}
              $image={service.image}
              $collapsed={collapsedIndex !== null && collapsedIndex !== i ? true : undefined}
              onMouseEnter={() => expandCard(i)}
              onMouseLeave={resetCards}
            >
              <ServiceContent>
                <ServiceName $collapsed={collapsedIndex !== null && collapsedIndex !== i ? true : undefined}>
                  {service.name}
                </ServiceName>

                <TextLink variant="lightGray" href="#">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </TextLink>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;