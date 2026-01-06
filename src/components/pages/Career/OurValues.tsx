'use client';

import { Heading } from "@/components/ui/Heading";
import { container } from "@/styles/mixins";
import { bodyText } from "@/styles/typography";
import { BREAKPOINTS, COLORS } from "@/styles/variables";
import styled from "styled-components";

import CreativityIcon from "@/assets/creativity.svg";
import CollaborationIcon from "@/assets/collaboration.svg";
import SustainabilityIcon from "@/assets/sustainability.svg";
import ExcellenceIcon from "@/assets/excellence.svg";
import IntegrityIcon from "@/assets/integrity.svg";
import InnovationIcon from "@/assets/innovation.svg";

/* SECTION */

const ValuesSection = styled.section`
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

const ValuesContainer = styled.div`
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

/* GRID */

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: white;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  width: fit-content;
  padding: 16px;
  background: #EA2B7B;
  border: 1px solid #F8BDD6;
  border-radius: 4px;
`;

const Title = styled.h3`
  margin: 24px 0 0;
  color: #222;
  font-family: "Helvetica";
  font-size: 30px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.6px;
  text-transform: uppercase;
`;

const Divider = styled.hr`
  margin: 16px 0;
  border: none;
  border-top: 1px solid #E4E6E9;
`;

const Text = styled.p`
  margin: 0;
  color: #393953;
  font-family: Urbanist;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
`;


/* DATA */

const values = [
    {
        title: "Creativity",
        Icon: CreativityIcon,
        description:
            "We foster a culture of innovation, where fresh ideas and unique designs take the lead. Our approach ensures each project is distinct and inspiring.",
    },
    {
        title: "Collaboration",
        Icon: CollaborationIcon,
        description:
            "We believe in teamwork. By working closely with clients and partners, we ensure every vision is realized and the best solutions are achieved.",
    },
    {
        title: "Sustainability",
        Icon: SustainabilityIcon,
        description:
            "We design with the environment in mind, using sustainable materials and energy-efficient solutions to create beautiful, eco-conscious spaces.",
    },
    {
        title: "Excellence",
        Icon: ExcellenceIcon,
        description:
            "Every project is approached with meticulous attention to detail, delivering high-quality results that exceed expectations and stand the test of time.",
    },
    {
        title: "Integrity",
        Icon: IntegrityIcon,
        description:
            "Transparency and honesty guide our work. We build trust through clear communication, ethical practices, and reliability.",
    },
    {
        title: "Innovation",
        Icon: InnovationIcon,
        description:
            "We embrace the latest technologies and trends, ensuring our designs are modern, forward-thinking, and adaptable to clients' needs.",
    },
];

/* COMPONENT */

const OurValues = () => {
    return (
        <ValuesSection>
            <ValuesContainer>
                <IntroBlock>
                    <Heading color={COLORS.white}>
                        OUR <span className="highlightTxt">Values</span>
                    </Heading>

                    <Description>
                        At Loop Space Studio, we are driven by creativity, integrity, and sustainability.
                        We believe in delivering thoughtful designs that prioritize both functionality and
                        aesthetics, while fostering a collaborative and innovative environment.
                    </Description>
                </IntroBlock>

                {/* --- VALUES GRID --- */}
                <ValuesGrid>
                    {values.map((item, idx) => (
                        <ValueCard key={idx}>
                            <IconWrapper>
                                <item.Icon />
                            </IconWrapper>

                            <Title>{item.title}</Title>

                            <Divider />

                            <Text>{item.description}</Text>
                        </ValueCard>
                    ))}
                </ValuesGrid>
            </ValuesContainer>
        </ValuesSection>
    );
};

export default OurValues;
