"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styled from "styled-components";
import Image from "next/image";
import heroImg1 from "@/assets/heroImg1.webp";

import { container, sectionSpacing } from "@/styles/mixins";
import { heroLine } from "@/styles/typography";
import { COLORS, FONT } from "@/styles/variables";
import { BREAKPOINTS } from "@/styles/variables";
import ImageTrailComponent from "./ImageTrail";
import trailImg1 from "@/assets/trailImg1.webp";
import trailImg2 from "@/assets/trailImg2.webp";
import trailImg3 from "@/assets/trailImg3.webp";
import trailImg4 from "@/assets/trailImg4.webp";
import trailImg5 from "@/assets/trailImg5.webp";

/* Hero Wrapper */

const HeroSection = styled.section`
  ${sectionSpacing("40px", "100px")}

  @media (max-width: ${BREAKPOINTS.md}px) {
    margin-top: 30px;
    margin-bottom: 60px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;

const HeroContainer = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  gap: 52px;


  @media (max-width: ${BREAKPOINTS.md}px) {
    gap: 40px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    gap: 30px;
  }
`;

/* Hero Text */

const HeroText = styled.h1`
  ${heroLine}
  font-family: ${FONT.urbanist};
`;

const FirstLine = styled(HeroText)`
  color: ${COLORS.textPrimary};
  text-align: right;
  margin-right: 70px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    margin-right: 40px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    margin-right: 20px;
  }
`;

const SecondLine = styled(HeroText)`
  color: ${COLORS.brandPink};
  text-align: left;
`;

const ThirdLineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    gap: 16px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const ThirdLine = styled(HeroText)`
  color: ${COLORS.textPrimary};
  text-align: right;
  flex: 1;
  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 100%;
  }
`;

/* Image */

const HeroImage = styled.div`
  width: 463px;
  height: 111px;
  overflow: hidden;
  border-radius: 100px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 300px;
    height: 72px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 200px;
    height: 48px;
  }
`;

/* Video */

const VideoContainer = styled.div`
  width: 100%;
  min-height: 67dvh;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    width: 50%;
    object-fit: cover;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    min-height: 50dvh;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    min-height: 40dvh;
  }
`;

/* Component */

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (videoRef.current) {
      gsap.to(videoRef.current, {
        width: "100%",
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 100%",
          end: "top 0%",
          scrub: 1,
        },
      });
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const images = [trailImg1, trailImg2, trailImg3, trailImg4, trailImg5];

  return (
    <HeroSection>
      <ImageTrailComponent items={images} />
      <HeroContainer>
        <div>
          <FirstLine>WHERE YOUR</FirstLine>
          <SecondLine>VISION MEETS</SecondLine>

          <ThirdLineContainer>
            <HeroImage>
              <Image src={heroImg1} alt="Hero Visual" width={463} height={111} />
            </HeroImage>
            <ThirdLine>OUR CRAFT</ThirdLine>
          </ThirdLineContainer>
        </div>

        <VideoContainer>
          <video ref={videoRef} autoPlay loop muted playsInline>
            <source src="/heroVid.mp4" type="video/mp4" />
          </video>
        </VideoContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
