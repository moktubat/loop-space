"use client";

import React from "react";
import styled from "styled-components";
import { container } from "@/styles/mixins";
import { COLORS, BREAKPOINTS } from "@/styles/variables";
import { bodyText } from "@/styles/typography";
import Button from "./Button";

const Section = styled.section`
  padding: 0 16px 100px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding-bottom: 60px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding-bottom: 40px;
  }
`;

const Box = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 64px;
  background: ${COLORS.accent};
  color: ${COLORS.white};

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding: 40px 24px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 32px 20px;
    gap: 20px;
  }

  h2 {
    margin: 0;
    max-width: 900px;
    font-family: ${COLORS.helvetica ? "var(--font-family-helvetica)" : "var(--font-family-helvetica)"};
    font-weight: 400;
    font-size: clamp(36px, 6vw, 80px);
    line-height: 1;
    letter-spacing: -0.04em;
    text-transform: uppercase;
  }

  p {
    ${bodyText}
    margin: 0;
    max-width: 680px;
    color: ${COLORS.subtle};
  }
`;

interface CTABoxProps {
    title: string;
    description: string;
    buttonText: string;
    buttonLink?: string;
    onClick?: () => void;
}

const CTABox = ({
    title,
    description,
    buttonText,
    buttonLink,
    onClick,
}: CTABoxProps) => (
    <Section>
        <Box data-reveal>
            <h2>{title}</h2>
            <p>{description}</p>
            {buttonLink ? (
                <Button href={buttonLink} arrow>
                    {buttonText}
                </Button>
            ) : (
                <Button onClick={onClick} arrow>
                    {buttonText}
                </Button>
            )}
        </Box>
    </Section>
);

export default CTABox;