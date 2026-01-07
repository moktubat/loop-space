"use client";

import { Heading } from "@/components/ui/Heading";
import { container } from "@/styles/mixins";
import { bodyText } from "@/styles/typography";
import { COLORS } from "@/styles/variables";
import Image from "next/image";
import styled from "styled-components";
import joinUsImg from "@/assets/joinUsImg.webp";


const StorySection = styled.section`
  background-color: #F9FAFB;
  padding: 100px 16px;
`;

const StoryContainer = styled.div`
  ${container}
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

const DescriptionText = styled.p`
  ${bodyText};
  max-width: 900px;
  color: ${COLORS.textMuted};
  margin: 0;
`;

const StoryImage = styled.div`
  width: 100%;
  height: 700px;
  position: relative;
`;

const JoinUs = () => {
    return (
        <StorySection>
            <StoryContainer>
                <IntroBlock>
                    <Heading className="intro-animate">
                        Why <span className="Join us">Story</span>
                    </Heading>

                    <DescriptionText className="intro-animate">
                        At Loop Space Studio, we believe in fostering creativity, collaboration, and growth. As part of our team, you'll have the opportunity to work on exciting projects, innovate alongside passionate professionals, and make a real impact on the spaces we design.
                    </DescriptionText>
                </IntroBlock>

                <StoryImage>
                    <Image
                        src={joinUsImg}
                        alt="Our Story Image"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </StoryImage>
            </StoryContainer>
        </StorySection>
    );
};

export default JoinUs;