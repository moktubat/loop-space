import React from "react";
import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "@/styles/variables";
import { SOCIAL_ICONS } from "./Icons";

/* ── Styles for Footer (44x44, light bg) ── */
const FooterIcon = styled.a`
  width: 44px;
  height: 44px;
  background: ${COLORS.white};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${COLORS.brandPink};
    transform: translateY(-2px);
  }

  svg {
    width: 24px;
    height: 24px;
    fill: ${COLORS.bgDark};
  }

  &:hover svg {
    fill: ${COLORS.white};
  }
`;

/* ── Styles for Team page (40x40, bordered) ── */
const TeamIcon = styled.a`
  width: 40px;
  height: 40px;
  background: ${COLORS.white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #9DA7B8;
  transition: all 0.3s ease;

  &:hover {
    background: ${COLORS.brandPink};
    transform: translateY(-2px);
    border: 1px solid ${COLORS.brandPink};
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #595B68;
  }

  &:hover svg {
    fill: ${COLORS.white};
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 36px;
    height: 36px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

interface SocialIconProps {
    variant?: "footer" | "team";
    href?: string;
    name?: string;
    icon?: React.ReactNode;
}

export const SocialIcons = ({ variant = "footer" }: { variant?: "footer" | "team" }) => {
    const Styled = variant === "team" ? TeamIcon : FooterIcon;
    return (
        <>
            {SOCIAL_ICONS.map(({ name, url, Icon }) => (
                <Styled key={name} href={url} aria-label={name}>
                    <Icon size={24} />
                </Styled>
            ))}
        </>
    );
};

export default SocialIcons;