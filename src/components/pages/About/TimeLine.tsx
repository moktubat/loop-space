'use client';

import React from "react";

import { Heading } from "@/components/ui/Heading";
import { BREAKPOINTS } from "@/styles/variables";
import { container } from "@/styles/mixins";
import { bodyText } from "@/styles/typography";
import { COLORS } from "@/styles/variables";
import styled from "styled-components";

import timelineImg1 from "@/assets/timelineImg1.webp";
import timelineImg2 from "@/assets/timelineImg2.webp";
import timelineImg3 from "@/assets/timelineImg3.webp";
import timelineImg4 from "@/assets/timelineImg4.webp";

const TimelineSection = styled.section`
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

const TimelineContainer = styled.div`
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


const TimelineContent = styled.div`
  position: relative;
  width: 100%;
  height: 1800px;
`;

const TimelineItem = styled.article<{ top: string }>`
  position: absolute;
  left: 0;
  display: flex;
  gap: 258px;
  top: ${(props) => props.top};
`;

const TimelineText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 531px;
`;

const TimelineTitle = styled.h2`
  color: white;
  font-size: 40px;
  font-weight: 500;
  line-height: 46.4px;
`;

const TimelineDescription = styled.p`
  color: #e4e6e9;
  font-size: 16px;
  line-height: 24px;
`;

const TimelineImage = styled.img`
  width: 531px;
  height: 380px;
  object-fit: cover;
`;

const timelineData = [
  {
    year: "2020",
    title: "The Founding \nJourney of Loop Space",
    description:
      "Loop Space was established with a clear vision to create functional, stylish, and timeless interiors that elevate everyday living experiences and bring unique design concepts to life.",
    image: timelineImg1,
    imagePosition: "left",
    topPosition: "91px",
  },
  {
    year: "2021",
    title: "Completion of Our \nFirst Major Design Projects",
    description:
      "We successfully completed our first high-profile residential and commercial projects, quickly gaining recognition for our innovative approach to interior design and commitment to excellence.",
    image: timelineImg2,
    imagePosition: "right",
    topPosition: "623px",
  },
  {
    year: "2023",
    title: "Expanding Our Reach \nand Service Capabilities",
    description:
      "As our reputation grew, we expanded our team and service offerings, taking on larger, more complex projects while building strong relationships with clients and industry partners.",
    image: timelineImg3,
    imagePosition: "left",
    topPosition: "1155px",
  },
  {
    year: "2024",
    title: "Loop Space's \nGrowth and Leadership",
    description:
      "Loop Space continues to lead with exceptional designs, focusing on innovation and timeless style, setting new industry standards and inspiring our clients through transformative, personalized spaces.",
    image: timelineImg4,
    imagePosition: "right",
    topPosition: "1687px",
  },
];


const TimeLine = () => {
  return (
    <TimelineSection>
      <TimelineContainer>
        <IntroBlock>
          <Heading color={COLORS.white}>
            OUR <span className="highlightTxt">Timeline</span>
          </Heading>

          <Description>
            A vibrant office layout promoting collaboration, creativity and execution A vibrant office layout promoting collaboration, creativity and execution.
          </Description>
        </IntroBlock>
        {/* Timeline content goes here */}
        <TimelineContent>
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              top={item.topPosition}

              style={{ flexDirection: item.imagePosition === "left" ? "row" : "row-reverse" }}
            >
              <TimelineImage
                src={item.image}
                alt={item.title.replace("\n", " ")}
              />
              <TimelineText>
                <TimelineTitle>
                  {item.title.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < item.title.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </TimelineTitle>
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineText>
            </TimelineItem>
          ))}
        </TimelineContent>
      </TimelineContainer>
    </TimelineSection>
  );
};

export default TimeLine;