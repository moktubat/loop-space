"use client";

import styled from "styled-components";
import Image from "next/image";
import { Heading } from "@/components/ui/Heading";
import { container } from "@/styles/mixins";
import { COLORS, FONT } from "@/styles/variables";
import { BREAKPOINTS } from "@/styles/variables";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import member1 from "@/assets/member1.webp";
import member2 from "@/assets/member2.webp";
import member3 from "@/assets/member3.webp";
import member4 from "@/assets/member4.webp";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/* Styled Components */

const TeamSection = styled.section`
  background-color: #F9FAFB;
  padding: 100px 16px;
`;

const TeamContainer = styled.div`
  ${container};
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const IntroBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 10px;
`;

const MembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const MemberCard = styled.div`
  display: flex;
  gap: 24px;
  border-radius: 12px;
  align-items: flex-start;
`;

const MemberImageWrapper = styled.div`
  width: 338px;
  height: 420px;
  position: relative;
  flex-shrink: 0;

  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 100%;
    height: auto;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 12px;
`;

const MemberDesignation = styled.p`
  font-family: ${FONT.urbanist};
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: #595B68;
`;

const MemberName = styled.h4`
  font-family: ${FONT.helvetica};
  font-size: 48px;
  font-weight: 400;
  line-height: 120%;
  color: #1D1F2C;
  margin-bottom: 36px;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialIcon = styled.a`
  width: 44px;
  height: 44px;
  background: ${COLORS.white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #9DA7B8;
  transition: all 0.3s ease;

  &:hover {
    background: ${COLORS.brandPink};
    transform: translateY(-2px);
    border: 1px solid ${COLORS.brandPink};
  }

  svg {
    width: 24px;
    height: 24px;
    fill: #595B68;
  }

  &:hover svg {
    fill: ${COLORS.white};
  }
`;

/* Social Icons Array */

const socialIcons = [
    {
        name: "Facebook",
        url: "#facebook",
        svg: (
            <svg viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        url: "#twitter",
        svg: (
            <svg viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        url: "#linkedin",
        svg: (
            <svg viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
];

/* Members Array */

const members = [
    {
        name: "Sarah Johnson",
        designation: "Founder & Lead Designer",
        image: member1,
        social: socialIcons,
    },
    {
        name: "Michael Smith",
        designation: "Co-Founder & Architect",
        image: member2,
        social: socialIcons,
    },
    {
        name: "Emily Davis",
        designation: "Senior Designer",
        image: member3,
        social: socialIcons,
    },
    {
        name: "John Williams",
        designation: "Project Manager",
        image: member4,
        social: socialIcons,
    },
];

/* Team Component */

const Team = () => {
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        cardsRef.current.forEach((card, i) => {
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 1,
                delay: i * 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                },
            });
        });
    }, []);

    return (
        <TeamSection>
            <TeamContainer>
                <IntroBlock>
                    <Heading className="intro-animate">
                        Our <span className="highlightTxt">Story</span>
                    </Heading>
                </IntroBlock>

                <MembersGrid>
                    {members.map((member, index) => (
                        <MemberCard
                            key={index}
                            ref={(el) => {
                                if (el) cardsRef.current[index] = el;
                            }}
                        >
                            <MemberImageWrapper>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </MemberImageWrapper>

                            <InfoWrapper>
                                <MemberDesignation>{member.designation}</MemberDesignation>
                                <MemberName>{member.name}</MemberName>
                                <SocialRow>
                                    {member.social.map((icon, idx) => (
                                        <SocialIcon key={idx} href={icon.url} aria-label={icon.name}>
                                            {icon.svg}
                                        </SocialIcon>
                                    ))}
                                </SocialRow>
                            </InfoWrapper>
                        </MemberCard>
                    ))}
                </MembersGrid>
            </TeamContainer>
        </TeamSection>
    );
};

export default Team;
