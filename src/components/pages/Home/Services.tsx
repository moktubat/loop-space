"use client";

import { useRef, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { container, sectionSpacing } from "@/styles/mixins";
import { bodyText } from "@/styles/typography";
import { COLORS, FONT, BREAKPOINTS } from "@/styles/variables";

import serviceImg1 from "@/assets/serviceImg1.webp";
import serviceImg2 from "@/assets/serviceImg2.webp";
import serviceImg3 from "@/assets/serviceImg3.webp";
import serviceImg4 from "@/assets/serviceImg4.webp";

import { Heading } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";

gsap.registerPlugin(ScrollTrigger);

/* ---------------- Layout ---------------- */

const ServicesSection = styled.section`
  ${sectionSpacing("100px", "100px")}
  padding: 0 16px;
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

/* ---------------- Grid ---------------- */

const ServicesGrid = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  align-items: stretch;

  @media (max-width: ${BREAKPOINTS.md}px) {
    flex-wrap: wrap;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 16px;
    align-items: stretch;
  }
`;

const ServiceCard = styled.div<{ $image: string; $collapsed?: boolean }>`
  position: relative;
  flex: 1 1 0;
  min-width: 0;
  height: 440px;
  box-sizing: border-box;
  padding: ${({ $collapsed }) => ($collapsed ? "20px" : "24px")};
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  overflow: hidden;
  transition: padding 0.3s ease;

  @media (max-width: ${BREAKPOINTS.md}px) {
    flex: 1 1 calc(50% - 12px);
    height: 380px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    flex: 0 0 360px;
    width: 100%;
    min-height: 360px;
    height: 360px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        180deg,
        rgba(36, 36, 36, 0.05) 50%,
        rgba(36, 36, 36, 0.9) 100%
      ),
      url(${(p) => p.$image}) center / cover no-repeat;
    z-index: 1;
  }
`;


const ServiceContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const ServiceName = styled.h3<{ $collapsed?: boolean }>`
  font-family: ${FONT.helvetica};
  color: ${COLORS.lightGray};
  font-size: ${({ $collapsed }) => ($collapsed ? "20px" : "24px")};
  line-height: ${({ $collapsed }) => ($collapsed ? "140%" : "32px")};
  letter-spacing: ${({ $collapsed }) => ($collapsed ? "-0.4px" : "-0.48px")};
  margin: 0;
  transition: all 0.3s ease;
`;

/* ---------------- Key Points ---------------- */

const KeyPointsWrapper = styled.div<{ $visible: boolean }>`
  display: grid;
  grid-template-rows: ${({ $visible }) => ($visible ? "1fr" : "0fr")};
  transition: grid-template-rows 0.45s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-rows: 1fr;
  }
`;

const KeyPointsInner = styled.div`
  overflow: hidden;
`;

const KeyPointsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 12px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (min-width: ${BREAKPOINTS.md + 1}px) {
    padding-bottom: 16px;
  }
`;

const KeyPoint = styled.li<{ $visible: boolean; $index: number }>`
  font-family: ${FONT.helvetica};
  color: ${COLORS.lightGray};
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0.2px;
  opacity: ${({ $visible }) => ($visible ? 0.75 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : "8px")});
  transition:
    opacity 0.35s ease ${({ $index }) => 0.08 + $index * 0.06}s,
    transform 0.35s ease ${({ $index }) => 0.08 + $index * 0.06}s;

  &::before {
    content: "—";
    margin-right: 8px;
    opacity: 0.5;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    opacity: 0.75;
    transform: translateY(0);
    transition: none;
  }
`;

/* ---------------- Data ---------------- */

const services = [
  {
    id: 1,
    name: "Residential Design",
    image: serviceImg1.src,
    points: ["Space Planning", "Color Palette", "Material Selection", "Mood Board Creation"],
  },
  {
    id: 2,
    name: "Commercial Design",
    image: serviceImg2.src,
    points: ["Office Layouts", "Brand Integration", "Lighting Design", "Space Flow Analysis"],
  },
  {
    id: 3,
    name: "Renovation",
    image: serviceImg3.src,
    points: ["Full Remodeling", "Structural Updates", "Modern Finishes", "On Time Delivery"],
  },
  {
    id: 4,
    name: "Custom Furniture",
    image: serviceImg4.src,
    points: ["Bespoke Pieces", "Material Sourcing", "Ergonomic Design", "Hand Built Quality"],
  },
];

/* ---------------- Component ---------------- */

const Services = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [collapsedIndex, setCollapsedIndex] = useState<number | null>(null);

  /* Hover expand logic */
  const expandCard = (index: number) => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;

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
      if (!card) return;

      gsap.to(card, {
        flexGrow: 1,
        duration: 1,
        ease: "power2.out",
      });
    });

    setCollapsedIndex(null);
  };

  /* ---------------- Scroll animations ---------------- */

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const heading = sectionRef.current!.querySelector("h2");
      const paragraph = sectionRef.current!.querySelector("p");
      const cards = cardRefs.current.filter(Boolean);

      // 1) Set initial hidden state BEFORE the browser paints
      gsap.set(heading, { opacity: 0, y: 50 });
      gsap.set(paragraph, { opacity: 0, y: 30 });
      gsap.set(cards, { opacity: 0, y: 40 });

      // 2) Animate to visible on scroll
      gsap.to(heading, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.to(paragraph, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <ServicesSection ref={sectionRef}>
      <ServicesContainer>
        <IntroBlock>
          <Heading>
            Services <span className="highlightTxt">Offered</span>
          </Heading>

          <DescriptionText>
            Our interior design services cater to a variety of needs, from
            residential makeovers to commercial space transformations.
          </DescriptionText>
        </IntroBlock>

        <ServicesGrid>
          {services.map((service, i) => {
            const isExpanded = collapsedIndex === i;

            return (
              <ServiceCard
                key={service.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                $image={service.image}
                $collapsed={collapsedIndex !== null && collapsedIndex !== i}
                onMouseEnter={() => expandCard(i)}
                onMouseLeave={resetCards}
              >
                <ServiceContent>
                  <ServiceName
                    $collapsed={collapsedIndex !== null && collapsedIndex !== i}
                  >
                    {service.name}
                  </ServiceName>

                  {/* Key points — visible on hover (desktop) / always (mobile) */}
                  <KeyPointsWrapper $visible={isExpanded}>
                    <KeyPointsInner>
                      <KeyPointsList>
                        {service.points.map((point, pIdx) => (
                          <KeyPoint
                            key={point}
                            $visible={isExpanded}
                            $index={pIdx}
                          >
                            {point}
                          </KeyPoint>
                        ))}
                      </KeyPointsList>
                    </KeyPointsInner>
                  </KeyPointsWrapper>

                  <TextLink variant="lightGray" href="#">
                    Learn More
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </TextLink>
                </ServiceContent>
              </ServiceCard>
            );
          })}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;