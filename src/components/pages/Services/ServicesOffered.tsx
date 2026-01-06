"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import styled from "styled-components";
import Image from "next/image";

import { Heading } from "@/components/ui/Heading";
import { BREAKPOINTS } from "@/styles/variables";
import { container } from "@/styles/mixins";
import { bodyText } from "@/styles/typography";
import { COLORS, FONT } from "@/styles/variables";

import residentialImg1 from "@/assets/residentialImg1.webp";
import residentialImg2 from "@/assets/residentialImg2.webp";
import commercialImg1 from "@/assets/commercialImg1.webp";
import commercialImg2 from "@/assets/commercialImg2.webp";
import renovationImg1 from "@/assets/renovationImg1.webp";
import renovationImg2 from "@/assets/renovationImg2.webp";
import customImg1 from "@/assets/customImg1.webp";
import customImg2 from "@/assets/customImg2.webp";

/* -------------------------------------------------------
   STYLED COMPONENTS
------------------------------------------------------- */
const Section = styled.section`
  background: #f9fafb;
  padding: 100px 16px;
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
    flex-direction: column;
    gap: 40px;
  }
`;

const ServiceContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;

  h3 {
  font-family: ${FONT.helvetica};
  font-size: 48px;
  font-weight: 400;
  letter-spacing: -0.96px;
  text-transform: uppercase;
  margin: 0;
  color: #1d1f2c;
  transform: none !important;   /* ensures hover removed */
  transition: none !important;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    font-size: 32px;
  }
}

  p {
    font-family: ${FONT.urbanist};
    font-size: 20px;
    line-height: 28px;
    color: #595b68;
    margin: 0;
  }
`;

const BulletList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 50px;
`;

const Bullet = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${FONT.urbanist};
  font-size: 24px;
  color: #595b68;
  gap: 12px;

  div {
    height: 1px;
    width: 100%;
    background: #9da7b8;
  }
`;

const ServiceImages = styled.div`
  flex: 1;
  display: flex;
  gap: 24px;
`;

const ImgTall = styled(Image)`
  width: 306px;
  height: 452px;
  object-fit: cover;
  transition: 0.4s ease;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 100%;
    height: auto;
  }
`;

const ImgWide = styled(Image)`
  width: 306px;
  height: 288px;
  object-fit: cover;
  transition: 0.4s ease;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 100%;
    height: auto;
  }
`;

/* -------------------------------------------------------
   DATA (Cleaner & Shorter)
------------------------------------------------------- */
const servicesData = [
  {
    title: "Residential Design",
    desc: "Crafting personalized living spaces that reflect your unique style and enhance daily life.",
    bullets: [
      "Full home interior design",
      "Single-room makeovers",
      "Space planning & layout optimization",
      "Lighting & color scheme coordination",
      "Smart home & automation solutions",
    ],
    images: [residentialImg1, residentialImg2],
    reverse: false,
  },
  {
    title: "Commercial Design",
    desc: "Developing functional and aesthetically pleasing environments that align with your brand identity.",
    bullets: [
      "Modern office space design",
      "Retail store & showroom planning",
      "Café & restaurant ambiance creation",
      "Hotel & resort luxurious interiors",
      "Compliance with commercial standards",
    ],
    images: [commercialImg1, commercialImg2],
    reverse: true,
  },
  {
    title: "Renovation",
    desc: "Transforming existing spaces to meet new needs and modern aesthetics.",
    bullets: [
      "Structural remodeling & expansion",
      "Interior redesign",
      "Sustainable upgrades",
      "Kitchen & bathroom transformations",
      "Flooring & wall enhancements",
    ],
    images: [renovationImg1, renovationImg2],
    reverse: false,
  },
  {
    title: "Custom Furniture",
    desc: "Designing and crafting bespoke furniture pieces that perfectly fit your space and style.",
    bullets: [
      "Tailor-made designs",
      "Premium material options",
      "Handcrafted by artisans",
      "Ergonomic solutions",
      "Multi-functional furniture",
    ],
    images: [customImg1, customImg2],
    reverse: true,
  },
];

/* -------------------------------------------------------
   COMPONENT
------------------------------------------------------- */
export default function ServicesOffered() {
  const sectionRefs = useRef([]);

  const addRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Fade + slide up for the whole section
    gsap.from(sectionRefs.current, {
      opacity: 0,
      y: 60,
      duration: 1.2,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRefs.current[0],
        start: "top 85%",
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
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);



  return (
    <Section>
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
          {servicesData.map((service, i) => (
            <ServiceItem key={i} ref={addRef} style={{ flexDirection: service.reverse ? "row-reverse" : "row" }}>
              <ServiceContent>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                <BulletList>
                  {service.bullets.map((text, j) => (
                    <Bullet key={j}>
                      {text}
                      <div />
                    </Bullet>
                  ))}
                </BulletList>
              </ServiceContent>

              <ServiceImages>
                <ImgTall
                  className="reveal-img"
                  src={service.images[0]}
                  alt={service.title + " image tall"}
                />
                <ImgWide
                  className="reveal-img"
                  src={service.images[1]}
                  alt={service.title + " image wide"}
                />
              </ServiceImages>
            </ServiceItem>
          ))}
        </ServiceGroup>
      </Wrapper>
    </Section>
  );
}
