import styled from "styled-components";
import { container } from "@/styles/mixins";
import { COLORS, BREAKPOINTS } from "@/styles/variables";

type Tone = "white" | "light" | "dark";

const toneBg: Record<Tone, string> = {
    white: COLORS.white,
    light: COLORS.surfaceLight,
    dark: COLORS.bgDark,
};

export const Block = styled.section<{ $tone?: Tone }>`
  background: ${({ $tone = "white" }) => toneBg[$tone]};
  padding: 100px 16px;
  overflow: hidden;

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding: 60px 16px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 40px 16px;
  }
`;

export const Inner = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    gap: 32px;
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default Block;