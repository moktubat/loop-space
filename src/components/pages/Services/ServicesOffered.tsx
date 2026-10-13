"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { Heading } from "@/components/ui/Heading";
import { BREAKPOINTS } from "@/styles/variables";
import { container } from "@/styles/mixins";
import { bodyText } from "@/styles/typography";
import { COLORS, FONT } from "@/styles/variables";

import { services } from "@/data/services";

/* -------------------------------------------------------
   STYLED COMPONENTS
------------------------------------------------------- */
const Section = styled.section`
  background: #f9fafb;
  padding: 100px 16px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding: 60px 16px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 40px 16px;
  }
`;

const Wrapper = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Description = styled.p`
  ${bodyText};
  max-width: 900px;
  color: ${COLORS.textMuted};
  margin: 0;
`;

const ServiceGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    gap: 70px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    gap: 40px;
  }
`;

const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 70px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    flex-direction: column !important; /* Overrides inline style reverse */
    gap: 40px;
  }
`;

const ServiceContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h3 {
    font-family: ${FONT.helvetica};
    font-size: 48px;
    font-weight: 400;
    letter-spacing: -0.96px;
    text-transform: uppercase;
    margin: 0;
    line-height: 1.1;
    color: #1d1f2c;

    @media (max-width: ${BREAKPOINTS.sm}px) {
      font-size: 28px;
    }
  }

  p {
    font-family: ${FONT.urbanist};
    font-size: 20px;
    line-height: 26px;
    color: #595b68;
    margin: 0;

    @media (max-width: ${BREAKPOINTS.sm}px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

const BulletList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 24px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    margin-top: 20px;
  }
`;

const Bullet = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${FONT.urbanist};
  font-size: 24px;
  color: #595b68;
  gap: 8px;

  div {
    height: 1px;
    width: 100%;
    background: #9da7b8;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    font-size: 18px;
    gap: 6px;
  }
`;

const ServiceImages = styled.div`
  flex: 1;
  display: flex;
  gap: 24px;
  
  /* Fix for tablet/mobile to prevent overflow */
  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 100%;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    flex-direction: column;
  }
`;

const ImgTall = styled(Image)`
  width: 100%;
  max-width: 306px;
  height: 452px;
  object-fit: cover;

  @media (max-width: ${BREAKPOINTS.md}px) {
    flex: 1;
    height: 320px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    max-width: 100%;
    height: auto;
    aspect-ratio: 306 / 452;
  }
`;

const ImgWide = styled(Image)`
  width: 100%;
  max-width: 306px;
  height: 288px;
  object-fit: cover;

  @media (max-width: ${BREAKPOINTS.md}px) {
    flex: 1;
    height: 320px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    max-width: 100%;
    height: auto;
    aspect-ratio: 306 / 288;
  }
`;

const LearnMoreLink = styled(Link)`
  text-decoration: none;
  margin-top: 20px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${FONT.urbanist};
  color: ${COLORS.brandPink};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  align-self: flex-start;

  svg {
    stroke: ${COLORS.brandPink};
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

/* -------------------------------------------------------
   COMPONENT
------------------------------------------------------- */
export default function ServicesOffered() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Fade + slide up for the whole section
      gsap.from(itemsRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        immediateRender: false, // Prevents blinking
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Smooth top-to-bottom reveal for images
      const images = gsap.utils.toArray<HTMLImageElement>(".reveal-img");
      images.forEach((img) => {
        gsap.fromTo(
          img,
          { clipPath: "inset(0 0 100% 0)" }, // start fully hidden
          {
            clipPath: "inset(0 0 0% 0)",     // end fully revealed
            duration: 1.4,
            ease: "power3.out",
            immediateRender: false, // Prevents blinking
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <Section ref={sectionRef}>
      <Wrapper>
        <Intro>
          <Heading>
            Services <span className="highlightTxt">Offered</span>
          </Heading>

          <Description>
            Our interior services cater to a variety of needs, from residential
            makeovers to commercial transformations. We specialize in space
            planning, furniture selection, decor, and renovation projects.
          </Description>
        </Intro>

        <ServiceGroup>
          {services.map((service, i) => (
            <ServiceItem
              key={service.id}
              ref={(el) => { if (el) itemsRef.current[i] = el; }}
              style={{ flexDirection: i % 2 !== 0 ? "row-reverse" : "row" }}
            >
              <ServiceContent>
                <h3>{service.title}</h3>
                <p>{service.hero.description}</p>

                <BulletList>
                  {service.bullets.map((text, j) => (
                    <Bullet key={j}>
                      {text}
                      <div />
                    </Bullet>
                  ))}
                </BulletList>

                <LearnMoreLink href={`/services/${service.slug}`}>
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke={COLORS.brandPink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </LearnMoreLink>
              </ServiceContent>

              <ServiceImages>
                <ImgTall
                  className="reveal-img"
                  src={service.images.tall}
                  alt={service.title + " image tall"}
                  width={306}
                  height={452}
                />
                <ImgWide
                  className="reveal-img"
                  src={service.images.wide}
                  alt={service.title + " image wide"}
                  width={306}
                  height={288}
                />
              </ServiceImages>
            </ServiceItem>
          ))}
        </ServiceGroup>
      </Wrapper>
    </Section>
  );
}