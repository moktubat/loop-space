"use client";

import { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import { container, sectionSpacing } from "@/styles/mixins";
import { bodyText } from "@/styles/typography";
import { COLORS, FONT } from "@/styles/variables";
import { BREAKPOINTS } from "@/styles/variables";

import { Heading } from "@/components/ui/Heading";

gsap.registerPlugin(ScrollTrigger);

/* Styled Components */

const ProcessSection = styled.section`
  ${sectionSpacing("100px", "100px")}
  background: #0c0d12;
  padding: 100px 16px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

const ProcessContainer = styled.div`
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

const Description = styled.p`
  ${bodyText};
  max-width: 900px;
  color: ${COLORS.textMuted};
  margin: 0;
`;

const ProcessGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    aspect-ratio: auto;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const InfoWrapper = styled.div`
  padding: 24px;
  background: #15161f;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #1a1b26;
  }
`;

const StepNumber = styled.span`
  font-family: ${FONT.urbanist};
  font-size: 24px;
  font-weight: 600;
  color: ${COLORS.white};

  @media (max-width: ${BREAKPOINTS.sm}px) {
    font-size: 20px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StepTitle = styled.h3`
  font-family: ${FONT.helvetica};
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${COLORS.white};
  margin: 0;
  letter-spacing: -0.48px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    font-size: 20px;
  }
`;

const StepDesc = styled.p`
  font-family: ${FONT.urbanist};
  font-size: 16px;
  color: ${COLORS.textMuted};
  margin: 0;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    font-size: 14px;
  }
`;

const CornerIcon = styled.div`
  position: absolute;
  bottom: -27px; 
  right: -27px;
  width: 54px;
  height: 54px;
  pointer-events: none;
  z-index: 1;


  svg {
    width: 100%;
    height: 100%;
  }
`;

/* Data */

const steps = [
  {
    id: 1,
    number: "01",
    title: "Consultation & Planning",
    description:
      "We begin with an in-depth discussion to understand your needs, preferences, and budget, followed by initial design concepts.",
    image: "/processImg1.webp",
  },
  {
    id: 2,
    number: "02",
    title: "Space Planning & Layout Design",
    description:
      "Our team creates efficient layouts, ensuring optimal functionality while maintaining aesthetics.",
    image: "/processImg1.webp",
  },
  {
    id: 3,
    number: "03",
    title: "Mood Board & Material Selection",
    description:
      "We present a curated selection of colors, textures, furniture, and finishes to define the overall theme.",
    image: "/processImg1.webp",
  },
  {
    id: 4,
    number: "04",
    title: "3D Visualization & Design Approval",
    description:
      "Using advanced rendering techniques, we create realistic 3D models to help you visualize the final look before execution.",
    image: "/processImg1.webp",
  },
  {
    id: 5,
    number: "05",
    title: "Project Execution & Installation",
    description:
      "Our skilled team oversees construction, furniture placement, and décor styling to bring the design to life.",
    image: "/processImg1.webp",
  },
  {
    id: 6,
    number: "06",
    title: "Final Review & Handover",
    description:
      "We conduct a final walkthrough, ensuring every detail aligns with your expectations before delivering the completed space.",
    image: "/processImg1.webp",
  },
];

// matching your original layout fully
const layout = [
  "image", "text",
  "image", "text",
  "text", "image",
  "text", "image",
  "image", "text",
  "image", "text"
];

const stepMap = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

const animationDirection = [
  "ltr", null,
  "ltr", null,
  null, "rtl",
  null, "rtl",
  "ltr", null,
  "ltr", null
];

/* Component */

const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* Scroll reveals + initial hidden states */
  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(sectionRef.current.querySelector("h2"), { opacity: 0, y: 50, duration: 0.6 })
      .from(sectionRef.current.querySelector("p"), { opacity: 0, y: 30, duration: 0.5 }, "-=0.3");

    // prepare all image reveal clipPaths
    imageRefs.current.forEach((img, i) => {
      if (!img || layout[i] !== "image") return;

      const dir = animationDirection[i];
      gsap.set(img, {
        clipPath: dir === "rtl"
          ? "inset(0 100% 0 0)"
          : "inset(0 0 0 100%)",
        filter: "blur(10px)"
      });
    });
  }, []);

  /* Hover handlers — unchanged behavior */
  const revealImage = (textIndex: number) => {
    const stepIndex = stepMap[textIndex];
    const imageIndex = layout.findIndex(
      (t, i) => t === "image" && stepMap[i] === stepIndex
    );
    if (imageIndex === -1) return;

    const img = imageRefs.current[imageIndex];
    if (!img) return;

    gsap.to(img, {
      clipPath: "inset(0 0% 0 0%)",
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const hideImage = (textIndex: number) => {
    const stepIndex = stepMap[textIndex];
    const imageIndex = layout.findIndex(
      (t, i) => t === "image" && stepMap[i] === stepIndex
    );
    if (imageIndex === -1) return;

    const img = imageRefs.current[imageIndex];
    if (!img) return;

    const dir = animationDirection[imageIndex];

    gsap.to(img, {
      clipPath: dir === "rtl"
        ? "inset(0 100% 0 0)"
        : "inset(0 0 0 100%)",
      filter: "blur(10px)",
      duration: 0.8,
      ease: "power3.in",
    });
  };

  return (
    <ProcessSection ref={sectionRef}>
      <ProcessContainer>
        <IntroBlock>
          <Heading color={COLORS.white}>
            Design <span className="highlightTxt">Process</span>
          </Heading>

          <Description>
            Our structured design process ensures a seamless experience from
            concept to completion. We begin with a consultation to understand
            your vision.
          </Description>
        </IntroBlock>

        <ProcessGrid>
          {layout.map((item, index) => {
            const step = steps[stepMap[index]];

            return (
              <div key={index} style={{ position: "relative" }}>
                {/* ICON ABOVE ALL GRID CELLS */}
                {[0, 1, 2, 4, 5, 6].includes(index) && (
                  <CornerIcon>
                    <svg xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#FFF"
                      strokeWidth="1">
                      <path d="M12 6v12m6-6H6" />
                    </svg>


                  </CornerIcon>
                )}

                <GridItem>
                  {item === "image" ? (
                    <ImageWrapper ref={(el) => (imageRefs.current[index] = el)}>
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </ImageWrapper>
                  ) : (
                    <InfoWrapper
                      onMouseEnter={() => revealImage(index)}
                      onMouseLeave={() => hideImage(index)}
                    >
                      <StepNumber>{step.number}</StepNumber>
                      <TextContainer>
                        <StepTitle>{step.title}</StepTitle>
                        <StepDesc>{step.description}</StepDesc>
                      </TextContainer>
                    </InfoWrapper>
                  )}
                </GridItem>
              </div>
            );
          })}
        </ProcessGrid>
      </ProcessContainer>
    </ProcessSection>
  );
};

export default Process;
