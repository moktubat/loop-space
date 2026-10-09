"use client";

<<<<<<< HEAD
import { useRef, useEffect, useState } from "react";
=======
import { useRef, useLayoutEffect, useState } from "react";
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { container, sectionSpacing } from "@/styles/mixins";
import { bodyText } from "@/styles/typography";
<<<<<<< HEAD
import { COLORS, FONT } from "@/styles/variables";
import { BREAKPOINTS } from "@/styles/variables";
=======
import { COLORS, FONT, BREAKPOINTS } from "@/styles/variables";
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937

import serviceImg1 from "@/assets/serviceImg1.webp";
import serviceImg2 from "@/assets/serviceImg2.webp";
import serviceImg3 from "@/assets/serviceImg3.webp";
import serviceImg4 from "@/assets/serviceImg4.webp";

import { Heading } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";

gsap.registerPlugin(ScrollTrigger);

<<<<<<< HEAD
/* Layout */
=======
/* ---------------- Layout ---------------- */
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937

const ServicesSection = styled.section`
  ${sectionSpacing("100px", "100px")}
  padding: 0 16px;
<<<<<<< HEAD

  @media (max-width: ${BREAKPOINTS.md}px) {
    margin: 60px 0;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    margin: 40px 0;
  }
=======
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
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

<<<<<<< HEAD
/* Grid */
=======
/* ---------------- Grid ---------------- */
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937

const ServicesGrid = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    flex-wrap: wrap;
<<<<<<< HEAD
    gap: 20px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    flex-direction: column;
    gap: 16px;
=======
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    flex-direction: column;
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
  }
`;

const ServiceCard = styled.div<{ $image: string; $collapsed?: boolean }>`
  position: relative;
  flex: 1 1 0;
  height: 440px;
  padding: ${({ $collapsed }) => ($collapsed ? "20px" : "24px")};
  display: flex;
  align-items: flex-end;
<<<<<<< HEAD

=======
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
  cursor: pointer;
  overflow: hidden;
  transition: padding 0.3s ease;

  @media (max-width: ${BREAKPOINTS.md}px) {
<<<<<<< HEAD
    flex: 1 1 calc(50% - 10px);
    height: 380px;
  }
=======
    height: 380px;
  }

>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
  @media (max-width: ${BREAKPOINTS.sm}px) {
    height: 320px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
<<<<<<< HEAD
    background: linear-gradient(
=======
    background:
      linear-gradient(
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
        180deg,
        rgba(36, 36, 36, 0.05) 50%,
        rgba(36, 36, 36, 0.9) 100%
      ),
<<<<<<< HEAD
      url(${(p) => p.$image}) center/cover no-repeat;
=======
      url(${(p) => p.$image}) center / cover no-repeat;
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
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
<<<<<<< HEAD
  text-transform: uppercase;
=======
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
  margin: 0;
  transition: all 0.3s ease;
`;

<<<<<<< HEAD
/* Data */
=======
/* ---------------- Data ---------------- */
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937

const services = [
  { id: 1, name: "Residential Design", image: serviceImg1.src },
  { id: 2, name: "Commercial Design", image: serviceImg2.src },
  { id: 3, name: "Renovation", image: serviceImg3.src },
  { id: 4, name: "Custom Furniture", image: serviceImg4.src },
];

<<<<<<< HEAD
/* Component */

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [collapsedIndex, setCollapsedIndex] = useState<number | null>(null);

  const expandCard = (index: number) => {
    cardRefs.current.forEach((card, i) => {
      gsap.killTweensOf(card);

=======
/* ---------------- Component ---------------- */

const Services = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [collapsedIndex, setCollapsedIndex] = useState<number | null>(null);

  /* Hover expand logic (unchanged) */
  const expandCard = (index: number) => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      gsap.killTweensOf(card);
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
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
<<<<<<< HEAD
      gsap.to(card, { flexGrow: 1, duration: 1, ease: "power2.out" });
=======
      if (!card) return;

      gsap.to(card, {
        flexGrow: 1,
        duration: 1,
        ease: "power2.out",
      });
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
    });

    setCollapsedIndex(null);
  };

<<<<<<< HEAD
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
=======
  /* ---------------- Scroll animations (FIXED) ---------------- */

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const heading = sectionRef.current!.querySelector("h2");
      const paragraph = sectionRef.current!.querySelector("p");

      /* Heading */
      gsap.fromTo(
        heading,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      /* Description */
      gsap.fromTo(
        paragraph,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );

      /* Cards */
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
  }, []);

  return (
    <ServicesSection ref={sectionRef}>
      <ServicesContainer>
        <IntroBlock>
          <Heading>
            Services <span className="highlightTxt">Offered</span>
          </Heading>

          <DescriptionText>
<<<<<<< HEAD
            Our interior design services cater to a variety of needs, from residential makeovers to commercial space transformations.
            We specialize in space planning, furniture selection, custom decor, and renovation projects.
=======
            Our interior design services cater to a variety of needs, from
            residential makeovers to commercial space transformations.
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
          </DescriptionText>
        </IntroBlock>

        <ServicesGrid>
          {services.map((service, i) => (
            <ServiceCard
<<<<<<< HEAD
              className="hover-parent"
              key={service.id}
              ref={(el: HTMLDivElement | null) => (cardRefs.current[i] = el)}
              $image={service.image}
              $collapsed={collapsedIndex !== null && collapsedIndex !== i ? true : undefined}
=======
              key={service.id}
              ref={(el) => (cardRefs.current[i] = el)}
              $image={service.image}
              $collapsed={collapsedIndex !== null && collapsedIndex !== i}
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
              onMouseEnter={() => expandCard(i)}
              onMouseLeave={resetCards}
            >
              <ServiceContent>
<<<<<<< HEAD
                <ServiceName $collapsed={collapsedIndex !== null && collapsedIndex !== i ? true : undefined}>
=======
                <ServiceName
                  $collapsed={collapsedIndex !== null && collapsedIndex !== i}
                >
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
                  {service.name}
                </ServiceName>

                <TextLink variant="lightGray" href="#">
                  Learn More
<<<<<<< HEAD
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
=======
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
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

<<<<<<< HEAD
export default Services;
=======
export default Services;
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
