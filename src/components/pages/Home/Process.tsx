"use client";

import { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import { container, sectionSpacing } from "@/styles/mixins";
import { bodyText } from "@/styles/typography";
import { COLORS, FONT, BREAKPOINTS } from "@/styles/variables";

import { Heading } from "@/components/ui/Heading";

import processImg1 from "@/assets/processImg1.webp";
import processImg2 from "@/assets/processImg2.webp";
import processImg3 from "@/assets/processImg3.webp";
import processImg4 from "@/assets/processImg4.webp";
import processImg5 from "@/assets/processImg5.webp";
import processImg6 from "@/assets/processImg6.webp";

gsap.registerPlugin(ScrollTrigger);

/* ---------------- Styled Components ---------------- */

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

/* Desktop Grid - Unchanged */
const ProcessGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${BREAKPOINTS.md}px) {
    display: none; 
  }
`;

/* Mobile Grid - New */
const MobileProcessGrid = styled.div`
  display: none;
  width: 100%;
  flex-direction: column;
  gap: 32px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    display: flex;
  }
`;

const MobileStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const GridItem = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;

  @media (max-width: ${BREAKPOINTS.md}px) {
    /* Prevents Next.js Image fill from collapsing to 0 height on mobile */
    aspect-ratio: 4 / 3; 
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

/* ---------------- Data ---------------- */

const steps = [
  {
    id: 1,
    number: "01",
    title: "Consultation & Planning",
    description:
      "We begin with an in-depth discussion to understand your needs, preferences, and budget, followed by initial design concepts.",
    image: processImg1.src,
  },
  {
    id: 2,
    number: "02",
    title: "Space Planning & Layout Design",
    description:
      "Our team creates efficient layouts, ensuring optimal functionality while maintaining aesthetics.",
    image: processImg2.src,
  },
  {
    id: 3,
    number: "03",
    title: "Mood Board & Material Selection",
    description:
      "We present a curated selection of colors, textures, furniture, and finishes to define the overall theme.",
    image: processImg3.src,
  },
  {
    id: 4,
    number: "04",
    title: "3D Visualization & Design Approval",
    description:
      "Using advanced rendering techniques, we create realistic 3D models to help you visualize the final look before execution.",
    image: processImg4.src,
  },
  {
    id: 5,
    number: "05",
    title: "Project Execution & Installation",
    description:
      "Our skilled team oversees construction, furniture placement, and décor styling to bring the design to life.",
    image: processImg5.src,
  },
  {
    id: 6,
    number: "06",
    title: "Final Review & Handover",
    description:
      "We conduct a final walkthrough, ensuring every detail aligns with your expectations before delivering the completed space.",
    image: processImg6.src,
  },
];

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

/* ---------------- Component ---------------- */

const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* Scroll reveals + initial hidden states (BLINK FIX) */
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      const heading = sectionRef.current?.querySelector(".process-heading");
      const desc = sectionRef.current?.querySelector(".process-desc");

      // Desktop: Hover interactions + directional clip reveals (UNCHANGED)
      mm.add(`(min-width: ${BREAKPOINTS.md + 1}px)`, () => {
        // 1. Set initial hidden state BEFORE paint to prevent blinking
        if (heading) gsap.set(heading, { opacity: 0, y: 50 });
        if (desc) gsap.set(desc, { opacity: 0, y: 30 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        if (heading) {
          tl.to(heading, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
        }
        if (desc) {
          tl.to(desc, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.3");
        }

        // Prepare all image reveal clipPaths
        imageRefs.current.forEach((img, i) => {
          if (!img || layout[i] !== "image") return;
          const dir = animationDirection[i];
          gsap.set(img, {
            clipPath: dir === "rtl" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
            filter: "blur(10px)",
          });
        });
      });

      // Mobile: No hover, images always visible, little bit smooth parallax
      mm.add(`(max-width: ${BREAKPOINTS.md}px)`, () => {
        if (heading && desc) {
          gsap.set([heading, desc], { opacity: 0, y: 30 });

          gsap.to([heading, desc], {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        }

        // Parallax effect for mobile images
        const mobileImages = sectionRef.current?.querySelectorAll(".mobile-process-image");
        if (mobileImages) {
          mobileImages.forEach((wrapper) => {
            // Subtle fade up for the wrapper
            gsap.set(wrapper, { opacity: 0, y: 40 });
            gsap.to(wrapper, {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: wrapper,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            });

            // Smooth Parallax for the inner image (not fast)
            const innerImg = wrapper.querySelector("img");
            if (innerImg) {
              gsap.set(innerImg, { yPercent: -8, scale: 1.15 });
              gsap.to(innerImg, {
                yPercent: 8,
                scale: 1.15,
                ease: "none",
                scrollTrigger: {
                  trigger: wrapper,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 3 // smooth and not fast
                }
              });
            }
          });
        }
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  /* Hover handlers */
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
      clipPath: dir === "rtl" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
      filter: "blur(10px)",
      duration: 0.8,
      ease: "power3.in",
    });
  };

  return (
    <ProcessSection ref={sectionRef}>
      <ProcessContainer>
        <IntroBlock>
          <Heading className="process-heading" color={COLORS.white}>
            Design <span className="highlightTxt">Process</span>
          </Heading>

          <Description className="process-desc">
            Our structured design process ensures a seamless experience from
            concept to completion. We begin with a consultation to understand
            your vision.
          </Description>
        </IntroBlock>

        {/* DESKTOP GRID - UNCHANGED */}
        <ProcessGrid>
          {layout.map((item, index) => {
            const step = steps[stepMap[index]];

            return (
              <div key={index} style={{ position: "relative" }}>
                {[0, 1, 2, 4, 5, 6].includes(index) && (
                  <CornerIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#FFF"
                      strokeWidth="1"
                    >
                      <path d="M12 6v12m6-6H6" />
                    </svg>
                  </CornerIcon>
                )}

                <GridItem>
                  {item === "image" ? (
                    <ImageWrapper
                      ref={(el) => {
                        imageRefs.current[index] = el;
                      }}
                    >
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

        {/* MOBILE GRID - NEW LAYOUT */}
        <MobileProcessGrid>
          {steps.map((step) => (
            <MobileStepWrapper key={step.id}>
              <GridItem>
                <ImageWrapper className="mobile-process-image">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </ImageWrapper>
              </GridItem>
              <GridItem>
                <InfoWrapper>
                  <StepNumber>{step.number}</StepNumber>
                  <TextContainer>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDesc>{step.description}</StepDesc>
                  </TextContainer>
                </InfoWrapper>
              </GridItem>
            </MobileStepWrapper>
          ))}
        </MobileProcessGrid>
      </ProcessContainer>
    </ProcessSection>
  );
};

export default Process;