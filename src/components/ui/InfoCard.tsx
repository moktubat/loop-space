import React from "react";
import styled from "styled-components";
import { COLORS, FONT, BREAKPOINTS } from "@/styles/variables";

type Tone = "white" | "light" | "dark";

const Card = styled.article<{ $tone?: Tone }>`
  padding: 24px;
  background: ${({ $tone }) => ($tone === "dark" ? COLORS.surfaceDark2 : COLORS.white)};
  border: 1px solid
    ${({ $tone }) => ($tone === "dark" ? "rgba(255,255,255,0.1)" : COLORS.subtle)};
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${"0 14px 28px rgba(29, 31, 44, 0.08)"};
    border-color: ${COLORS.brandPink};
  }

  .index {
    font-family: ${FONT.urbanist};
    font-size: 20px;
    font-weight: 600;
    color: ${COLORS.brandPink};
  }

  h3 {
    margin: 0;
    font-family: ${FONT.helvetica};
    font-weight: 400;
    font-size: 24px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: ${({ $tone }) => ($tone === "dark" ? COLORS.white : COLORS.textPrimary)};

    @media (max-width: ${BREAKPOINTS.sm}px) {
      font-size: 20px;
    }
  }

  p {
    margin: 0;
    font-family: ${FONT.urbanist};
    font-size: 16px;
    line-height: 1.6;
    color: ${({ $tone }) => ($tone === "dark" ? COLORS.subtle : COLORS.textMuted)};

    @media (max-width: ${BREAKPOINTS.sm}px) {
      font-size: 15px;
    }
  }
`;

export const CardGrid = styled.div<{ $cols?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $cols = 3 }) => $cols}, 1fr);
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

/* ── Optional icon slot above index ── */
const IconSlot = styled.div`
  width: fit-content;
  padding: 12px;
  background: ${COLORS.brandPink};
  border: 1px solid ${COLORS.btnBorderLight};
  border-radius: 4px;
  display: flex;

  svg {
    width: 20px;
    height: 20px;
  }
`;

/* ── Component ── */
interface InfoCardProps {
    index?: number;
    title: string;
    description: string;
    tone?: Tone;
    icon?: React.ReactNode;
    "data-stagger"?: string;
}

const InfoCard = ({
    index,
    title,
    description,
    tone,
    icon,
    ...rest
}: InfoCardProps) => (
    <Card $tone={tone} data-stagger={(rest as any)["data-stagger"]}>
        {icon && <IconSlot>{icon}</IconSlot>}
        {index !== undefined && (
            <span className="index">
                {String(index + 1).padStart(2, "0")}
            </span>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
    </Card>
);

export default InfoCard;