'use client';

import { Heading } from "@/components/ui/Heading";
import { BREAKPOINTS } from "@/styles/variables";
import { container } from "@/styles/mixins";
import { bodyText } from "@/styles/typography";
import { COLORS } from "@/styles/variables";
import styled from "styled-components";

const TimelineSection = styled.section`
  background: #0c0d12;
  padding: 100px 16px 60px;

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
  color: ${COLORS.subtle};
  margin: 0;
`;



const TimeLineHeader = () => {
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

      </TimelineContainer>
    </TimelineSection>
  );
};

export default TimeLineHeader;