import styled, { css } from "styled-components";
import { FONT } from "@/styles/variables";

export const HeadingBase = css`
  font-family: ${FONT.helvetica};
  margin: 0;
  letter-spacing: -1px;
`;

export const Heading = styled.h2<{ size?: "sm" | "md" | "lg"; color?: string }>`
  ${HeadingBase}
  font-weight: 400;
  color: ${(p) => p.color ?? "inherit"};
  ${(p) =>
        p.size === "lg" &&
        css`
      font-size: 100px;
      @media (max-width: 1024px) {
        font-size: 70px;
      }
      @media (max-width: 480px) {
        font-size: 48px;
      }
    `}
  ${(p) =>
        p.size === "md" &&
        css`
      font-size: 32px;
    `}
  ${(p) =>
        p.size === "sm" &&
        css`
      font-size: 18px;
    `}
  .highlightTxt {
    background: #f9c551;
    padding: 1px 8px;
    color: #1d1f2c;
  }
`;
