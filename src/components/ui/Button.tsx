"use client";

import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { COLORS, FONT, BREAKPOINTS } from "@/styles/variables";
import { ArrowIcon } from "./Icons";

/* ── Base styles (shared by all variants) ── */
const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  padding: 12px 16px;
  border-radius: 6px;
  font-family: ${FONT.urbanist};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid ${COLORS.btnBorderLight};
  border-bottom-width: 4px;
  transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;

  svg {
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-2px);
  }
  &:hover svg {
    transform: rotate(45deg);
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 100%;
    justify-content: center;
    gap: 12px;
  }
`;

/* ── Styled variants ── */
const StyledLink = styled(Link)`
  ${buttonBase}
  background: ${COLORS.brandPink};
  color: ${COLORS.white};

  &:hover {
    background: ${COLORS.brandPinkHover};
  }
`;

const StyledLinkOutline = styled(Link)`
  ${buttonBase}
  background: ${COLORS.white};
  color: ${COLORS.brandPink};
  border-color: ${COLORS.brandPink};

  &:hover {
    background: ${COLORS.brandPink};
    color: ${COLORS.white};
  }
`;

const StyledButton = styled.button`
  ${buttonBase}
  background: ${COLORS.brandPink};
  color: ${COLORS.white};

  &:hover {
    background: ${COLORS.brandPinkHover};
  }
`;

const StyledButtonOutline = styled.button`
  ${buttonBase}
  background: ${COLORS.white};
  color: ${COLORS.brandPink};
  border-color: ${COLORS.brandPink};

  &:hover {
    background: ${COLORS.brandPink};
    color: ${COLORS.white};
  }
`;

/* ── Props ── */
type ButtonVariant = "primary" | "outline";

interface BaseButtonProps {
    variant?: ButtonVariant;
    arrow?: boolean;
    arrowColor?: string;
    children: React.ReactNode;
    className?: string;
    "data-reveal"?: string;
    "data-stagger"?: string;
}

interface LinkButtonProps extends BaseButtonProps {
    href: string;
    onClick?: () => void;
}

interface ActionButtonProps extends BaseButtonProps {
    href?: never;
    onClick?: () => void;
    type?: "button" | "submit";
}

type ButtonProps = LinkButtonProps | ActionButtonProps;

/* ── Component ── */
export const Button = (props: ButtonProps) => {
    const {
        variant = "primary",
        arrow = true,
        arrowColor,
        children,
        className,
    } = props;

    const arrowEl = arrow ? (
        <ArrowIcon color={arrowColor ?? (variant === "primary" ? "#fff" : COLORS.brandPink)} />
    ) : null;

    if ("href" in props && props.href) {
        return variant === "outline" ? (
            <StyledLinkOutline
                href={props.href}
                onClick={props.onClick}
                className={className}
                data-reveal={(props as any)["data-reveal"]}
                data-stagger={(props as any)["data-stagger"]}
            >
                {children}
                {arrowEl}
            </StyledLinkOutline>
        ) : (
            <StyledLink
                href={props.href}
                onClick={props.onClick}
                className={className}
                data-reveal={(props as any)["data-reveal"]}
                data-stagger={(props as any)["data-stagger"]}
            >
                {children}
                {arrowEl}
            </StyledLink>
        );
    }

    return variant === "outline" ? (
        <StyledButtonOutline
            type={(props as ActionButtonProps).type ?? "button"}
            onClick={props.onClick}
            className={className}
            data-reveal={(props as any)["data-reveal"]}
            data-stagger={(props as any)["data-stagger"]}
        >
            {children}
            {arrowEl}
        </StyledButtonOutline>
    ) : (
        <StyledButton
            type={(props as ActionButtonProps).type ?? "button"}
            onClick={props.onClick}
            className={className}
            data-reveal={(props as any)["data-reveal"]}
            data-stagger={(props as any)["data-stagger"]}
        >
            {children}
            {arrowEl}
        </StyledButton>
    );
};

export default Button;