import React from "react";
import styled, { css } from "styled-components";
import { container } from "@/styles/mixins";
import { COLORS, FONT, BREAKPOINTS } from "@/styles/variables";
import { bodyText } from "@/styles/typography";
import Breadcrumb, { BreadcrumbItem } from "./Breadcrumb";

/* ── Layout pieces ── */

export const HeroSection = styled.section`
  padding: 24px 16px 120px;
  overflow: hidden;

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding-bottom: 80px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding-bottom: 60px;
  }
`;

export const HeroInner = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const titleType = css`
  margin: 0;
  font-family: ${FONT.helvetica};
  font-weight: 400;
  font-size: clamp(48px, 10vw, 150px);
  line-height: 0.95;
  letter-spacing: -0.04em;
  text-transform: uppercase;
`;

export const TitleLine = styled.h1`
  ${titleType}
  color: ${COLORS.textPrimary};
`;

export const TitleAccent = styled.span`
  ${titleType}
  display: inline-block;
  background: ${COLORS.accent};
  color: ${COLORS.lightGray};
  padding: 10px 14px 16px 8px;
  width: fit-content;
  max-width: 100%;
  overflow-wrap: anywhere;
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 48px;
  align-items: start;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const HeroParagraph = styled.p`
  ${bodyText}
  margin: 0;
  color: ${COLORS.textMuted};
`;

/* ── Helper: split a title into first words + last word (accent) ── */
export function splitTitle(title: string): { firstLine: string; accent: string } {
    const words = title.split(" ");
    const accent = words.pop() ?? title;
    const firstLine = words.join(" ");
    return { firstLine, accent };
}

/* ── Convenience component ── */
interface DetailHeroProps {
    breadcrumbItems: BreadcrumbItem[];
    title: string;
    children: React.ReactNode;
}

export const DetailHero = ({
    breadcrumbItems,
    title,
    children,
}: DetailHeroProps) => {
    const { firstLine, accent } = splitTitle(title);

    return (
        <HeroSection>
            <HeroInner>
                <Breadcrumb items={breadcrumbItems} data-reveal />
                <TitleGroup data-reveal>
                    {firstLine && <TitleLine>{firstLine}</TitleLine>}
                    {firstLine ? (
                        <TitleAccent as="span">{accent}</TitleAccent>
                    ) : (
                        <TitleLine as="h1">
                            <TitleAccent as="span">{accent}</TitleAccent>
                        </TitleLine>
                    )}
                </TitleGroup>
                {children}
            </HeroInner>
        </HeroSection>
    );
};

export default DetailHero;