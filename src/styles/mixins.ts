import { css } from "styled-components";
import { BREAKPOINTS } from "./variables";

export const container = css`
  max-width: ${BREAKPOINTS.lg}px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
`;

export const sectionSpacing = (top = "100px", bottom = "0") => css`
  margin-top: ${top};
  margin-bottom: ${bottom};
  padding: 0 16px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    margin-top: calc(${top} * 0.6);
    padding: 0 16px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    margin-top: calc(${top} * 0.4);
    padding: 0 16px;
  }
`;

export const centerFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const responsive = (bp: keyof typeof BREAKPOINTS) => (
    styles: TemplateStringsArray | string
) => css`
  @media (max-width: ${BREAKPOINTS[bp]}px) {
    ${styles}
  }
`;

export const ellipsis = (lines = 1) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
