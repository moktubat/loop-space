"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import styled from "styled-components";
import Image from "next/image";
import gsap from "gsap";

import { BREAKPOINTS } from "@/styles/variables";
import { COLORS, FONT } from "@/styles/variables";
import { container } from "@/styles/mixins";

import reviewer1 from "@/assets/reviewer1.webp";
import reviewer2 from "@/assets/reviewer2.webp";
import companyLogo1 from "@/assets/companyLogo1.png";
import companyLogo2 from "@/assets/companyLogo2.png";

import { Heading } from "@/components/ui/Heading";

/* Styled Components */

const TestimonialsSection = styled.section`
  background: ${COLORS.white};
  padding: 100px 16px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding: 60px 16px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 40px 16px;
  }
`;

const TestimonialsContainer = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const IntroBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Viewport = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
`;

const Track = styled.div`
  display: flex;
  gap: 24px;
  will-change: transform;
`;

const Item = styled.div`
  flex: 0 0 calc(50% - 12px);
  background: #f9fafb;
  border: 1px solid #e4e6e9;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    flex: 0 0 100%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h3`
  color: ${COLORS.textPrimary};
  font-family: ${FONT.urbanist};
  font-size: 30px;
  font-weight: 600;
  line-height: 36px;
  margin: 0;
`;

const Review = styled.p`
  color: #595b68;
  font-family: ${FONT.urbanist};
  font-size: 20px;
  line-height: 28px;
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #e4e6e9;
  margin: 24px 0;
`;

const ReviewerRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReviewerLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ReviewerImage = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const ReviewerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewerName = styled.span`
  color: ${COLORS.textPrimary};
  font-family: ${FONT.urbanist};
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
`;

const ReviewerDesignation = styled.span`
  color: #595b68;
  font-family: ${FONT.urbanist};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const LogoWrapper = styled.div`
  img {
    width: 140px !important;
    height: 42px !important;
    object-fit: contain;
  }
`;

const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: -20px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    margin-top: -12px;
  }
`;

const ArrowButton = styled.div`
  width: 44px;
  height: 44px;
  cursor: pointer;

  svg rect.bg {
    fill: white;
    transition: fill 0.25s ease;
  }
  svg rect.border {
    stroke: ${COLORS.brandPink};
    transition: stroke 0.25s ease;
  }
  svg path.arrow {
    fill: ${COLORS.brandPink};
    transition: fill 0.25s ease;
  }

  &:hover svg rect.bg {
    fill: ${COLORS.brandPink};
  }
  &:hover svg path.arrow {
    fill: white;
  }
`;

/* Data */

const testimonials = [
  {
    title: "Exceeded Our Expectations!",
    review:
      "From the first consultation to the final reveal, the entire process was smooth and enjoyable. The designers were professional, creative, and highly responsive. They transformed our outdated space into a modern, elegant sanctuary that truly reflects our personality.",
    reviewer: "Cameron Williamson",
    designation: "Project Manager of GEM Corp",
    image: reviewer1,
    companyLogo: companyLogo1,
  },
  {
    title: "A Dream Come True!",
    review:
      "Absolutely thrilled with the transformation! The team took the time to understand our vision and brought it to life in a way we never imagined. Every detail, from the furniture selection to the lighting, was thoughtfully curated.",
    reviewer: "Jenny Wilson",
    designation: "CEO & Founder of SHIPIT",
    image: reviewer2,
    companyLogo: companyLogo2,
  },
];

/* Component */

const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const looped = useMemo(
    () => [...testimonials, ...testimonials, ...testimonials],
    []
  );

  const total = testimonials.length;
  const [index, setIndex] = useState(total); // Start at middle set
  const [isBusy, setIsBusy] = useState(false);

  const slideTo = (i: number, duration = 0.5) => {
    if (!trackRef.current) return;

    const item = trackRef.current.children[0] as HTMLElement;
    if (!item) return;

    const move = item.offsetWidth + 24;

    gsap.to(trackRef.current, {
      x: -i * move,
      duration,
      ease: "power2.inOut",
      onComplete: () => {
        setIsBusy(false);

        if (i >= total * 2) {
          const reset = i - total;
          setIndex(reset);
          gsap.set(trackRef.current, { x: -reset * move });
        }
        if (i < total) {
          const reset = i + total;
          setIndex(reset);
          gsap.set(trackRef.current, { x: -reset * move });
        }
      },
    });
  };

  useEffect(() => {
    requestAnimationFrame(() => slideTo(index, 0));
  }, []);


  const next = () => {
    if (isBusy) return;
    setIsBusy(true);
    const newIndex = index + 1;
    setIndex(newIndex);
    slideTo(newIndex);
  };

  const prev = () => {
    if (isBusy) return;
    setIsBusy(true);
    const newIndex = index - 1;
    setIndex(newIndex);
    slideTo(newIndex);
  };

  return (
    <TestimonialsSection>
      <TestimonialsContainer>
        <IntroBlock>
          <Heading>
            Client <span className="highlightTxt">Voices</span>
          </Heading>
        </IntroBlock>

        <Viewport>
          <Track ref={trackRef}>
            {looped.map((t, i) => (
              <Item key={i}>
                <TextWrapper>
                  <Title>{t.title}</Title>
                  <Review>{t.review}</Review>
                </TextWrapper>

                <Divider />

                <ReviewerRow>
                  <ReviewerLeft>
                    <ReviewerImage src={t.image} alt={t.reviewer} />
                    <ReviewerInfo>
                      <ReviewerName>{t.reviewer}</ReviewerName>
                      <ReviewerDesignation>
                        {t.designation}
                      </ReviewerDesignation>
                    </ReviewerInfo>
                  </ReviewerLeft>

                  <LogoWrapper>
                    <Image
                      src={t.companyLogo}
                      alt="Company Logo"
                      width={140}
                      height={42}
                    />
                  </LogoWrapper>
                </ReviewerRow>
              </Item>
            ))}
          </Track>
        </Viewport>

        <ArrowWrapper>
          <ArrowButton onClick={prev}>
            <svg width="44" height="44" viewBox="0 0 44 44">
              <rect className="bg" x="1" y="1" width="42" height="42" fill="none" />
              <rect className="border" x="1" y="1" width="42" height="42" fill="none" strokeWidth="2" />
              <path className="arrow" d="M25 29.5L17.5 22L25 14.5V29.5Z" />
            </svg>
          </ArrowButton>

          <ArrowButton onClick={next}>
            <svg width="44" height="44" viewBox="0 0 44 44">
              <rect className="bg" x="1" y="1" width="42" height="42" fill="none" />
              <rect className="border" x="1" y="1" width="42" height="42" fill="none" strokeWidth="2" />
              <path className="arrow" d="M19 29.5L26.5 22L19 14.5V29.5Z" />
            </svg>
          </ArrowButton>
        </ArrowWrapper>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;
