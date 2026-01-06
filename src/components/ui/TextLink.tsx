"use client";

import styled, { css } from "styled-components";
import { COLORS, FONT } from "@/styles/variables";

export const TextLink = styled.a<{ variant?: "pink" | "lightGray" }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  font-family: ${FONT.urbanist};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;

  padding-right: ${({ variant }) => (variant === "pink" ? "2px" : "0")};
  padding-bottom: 2px;

  color: ${({ variant }) =>
        variant === "pink" ? COLORS.brandPink : COLORS.lightGray};

  svg {
    transition: transform 0.4s ease;
    stroke: ${({ variant }) =>
        variant === "pink" ? COLORS.brandPink : COLORS.lightGray};
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: ${({ variant }) =>
        variant === "pink" ? COLORS.brandPink : COLORS.lightGray};
    transition: width 0.4s ease;
  }

  /* Hover effect when hovering the link itself */
  &:hover::after {
    width: 100%;
  }
  &:hover svg {
    transform: rotate(45deg);
  }

  /* Hover effect when parent with class .hover-parent is hovered */
  ${({ variant }) =>
        variant === "lightGray" &&
        css`
      .hover-parent:hover &::after {
        width: 100%;
      }
      .hover-parent:hover & svg {
        transform: rotate(45deg);
      }
    `}
`;