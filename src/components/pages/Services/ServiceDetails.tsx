"use client";

import { useLayoutEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { container } from "@/styles/mixins";
import { bodyText } from "@/styles/typography";
import { COLORS, FONT, BREAKPOINTS } from "@/styles/variables";
import { Heading } from "@/components/ui/Heading";
import type { Service } from "@/data/services";

gsap.registerPlugin(ScrollTrigger);

/* ================================================================== */
/*  SHARED LAYOUT                                                      */
/* ================================================================== */

type Tone = "white" | "light" | "dark";

const toneBg: Record<Tone, string> = {
  white: COLORS.white,
  light: "#f9fafb",
  dark: COLORS.bgDark,
};

const Block = styled.section<{ $tone?: Tone }>`
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

const Inner = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    gap: 32px;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Lead = styled.p<{ $light?: boolean }>`
  ${bodyText};
  max-width: 900px;
  margin: 0;
  color: ${({ $light }) => ($light ? COLORS.subtle : COLORS.textMuted)};
`;

/* ---------- Buttons (same pink bordered style as the rest of the site) ---------- */

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

const PrimaryButton = styled(Link)`
  ${buttonBase}
  background: ${COLORS.brandPink};
  color: ${COLORS.white};
  border: 2px solid #f8bdd6;
  border-bottom-width: 4px;

  &:hover {
    background: ${COLORS.brandPinkHover};
  }
`;

const OutlineButton = styled(Link)`
  ${buttonBase}
  background: ${COLORS.white};
  color: ${COLORS.brandPink};
  border: 2px solid ${COLORS.brandPink};
  border-bottom-width: 4px;
`;

const Arrow = ({ color = "currentColor" }: { color?: string }) => (
  <svg width="14" height="14" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path
      d="M1 13.5L13.5 1M13.5 1H1M13.5 1V13.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ================================================================== */
/*  HERO                                                               */
/* ================================================================== */

const HeroSection = styled.section`
  padding: 24px 16px 120px;
  overflow: hidden;

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding-bottom: 80px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding-bottom: 60px;
  }
`;

const HeroInner = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Breadcrumb = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-family: ${FONT.urbanist};
  font-size: 14px;
  color: ${COLORS.textMuted};

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: ${COLORS.brandPink};
    }
  }
  [aria-current="page"] {
    color: ${COLORS.textPrimary};
  }
`;

const TitleGroup = styled.div`
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

const TitleLine = styled.h1`
  ${titleType}
  color: ${COLORS.textPrimary};
`;

const TitleAccent = styled.span`
  ${titleType}
  display: inline-block;
  background: #5a378f;
  color: ${COLORS.lightGray};
  padding: 10px 14px 16px 8px;
  width: fit-content;
  max-width: 100%;
  overflow-wrap: anywhere;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 48px;
  align-items: end;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Pills = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  li {
    padding: 8px 16px;
    border: 1px solid ${COLORS.subtle};
    border-radius: 50px;
    background: ${COLORS.white};
    font-family: ${FONT.urbanist};
    font-size: 14px;
    font-weight: 500;
    color: ${COLORS.textPrimary};
    transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;

    &:hover {
      background: ${COLORS.brandPink};
      border-color: ${COLORS.brandPink};
      color: ${COLORS.white};
    }
  }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    flex-direction: column;
  }
`;

const HeroMedia = styled.div`
  position: relative;
  height: 600px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    height: 460px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    height: 340px;
  }
`;

const ImageBox = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: ${COLORS.lightGray};

  img {
    object-fit: cover;
  }
`;

const HeroFloat = styled.div`
  position: absolute;
  left: -48px;
  bottom: -56px;
  width: 220px;
  height: 280px;
  border: 8px solid ${COLORS.white};
  background: ${COLORS.lightGray};
  z-index: 2;
  will-change: transform;

  img {
    object-fit: cover;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    left: 16px;
    bottom: -32px;
    width: 160px;
    height: 200px;
    border-width: 6px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 110px;
    height: 140px;
    left: 12px;
    bottom: -24px;
  }
`;

/* ================================================================== */
/*  OVERVIEW                                                           */
/* ================================================================== */

const Split = styled.div<{ $reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  gap: 48px;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.md}px) {
    flex-direction: column;
    align-items: stretch;
    gap: 32px;
  }
`;

const SplitMedia = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
  height: 640px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    height: 420px;
    width: 100%;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    height: 320px;
  }
`;

const SplitText = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const OverviewHeading = styled.h2`
  margin: 0;
  font-family: ${FONT.helvetica};
  font-weight: 400;
  font-size: clamp(30px, 4vw, 52px);
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: ${COLORS.textPrimary};
`;

const Paragraph = styled.p`
  ${bodyText}
  margin: 0;
  color: ${COLORS.textMuted};
`;

const Points = styled.ul`
  list-style: none;
  padding: 0;
  margin: 12px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 24px;

  li {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 0;
    border-top: 1px solid ${COLORS.subtle};
    font-family: ${FONT.urbanist};
    font-size: 18px;
    color: ${COLORS.textPrimary};
  }

  li::before {
    content: "";
    flex-shrink: 0;
    width: 10px;
    height: 10px;
    background: ${COLORS.brandPink};
    border-radius: 50%;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
    li {
      font-size: 16px;
    }
  }
`;

/* ================================================================== */
/*  OFFERS (dark)                                                      */
/* ================================================================== */

const OfferGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const OfferCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background: #15161f;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: background 0.4s ease, transform 0.4s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 0;
    background: ${COLORS.brandPink};
    transition: width 0.5s ease;
  }

  &:hover {
    background: #1a1b26;
    transform: translateY(-4px);
  }
  &:hover::after {
    width: 100%;
  }

  h3 {
    margin: 0;
    font-family: ${FONT.helvetica};
    font-weight: 400;
    font-size: 24px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: ${COLORS.white};

    @media (max-width: ${BREAKPOINTS.sm}px) {
      font-size: 20px;
    }
  }

  p {
    margin: 0;
    font-family: ${FONT.urbanist};
    font-size: 16px;
    line-height: 1.6;
    color: ${COLORS.subtle};
    opacity: 0.8;
  }
`;

const OfferNumber = styled.span`
  font-family: ${FONT.urbanist};
  font-size: 20px;
  font-weight: 600;
  color: ${COLORS.brandPink};
`;

const OfferImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;

  img {
    object-fit: cover;
    transition: transform 0.7s ease;
  }

  ${OfferCard}:hover & img {
    transform: scale(1.06);
  }
`;

/* ================================================================== */
/*  FEATURED PROJECTS                                                  */
/* ================================================================== */

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ProjectCard = styled(Link)`
  position: relative;
  display: block;
  height: 560px;
  overflow: hidden;
  background: #000;
  text-decoration: none;

  @media (max-width: ${BREAKPOINTS.md}px) {
    height: 440px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    height: 340px;
  }

  img {
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
  }
  &:hover img {
    transform: scale(1.06);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.15) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
`;

const ProjectDiscover = styled.span`
  position: absolute;
  top: 32px;
  left: 50%;
  z-index: 4;
  transform: translate(-50%, -16px);
  opacity: 0;
  padding: 12px 32px;
  background: ${COLORS.white};
  color: ${COLORS.brandPink};
  border: 2px solid ${COLORS.brandPink};
  border-bottom-width: 4px;
  font-family: ${FONT.urbanist};
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);

  ${ProjectCard}:hover & {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  @media (hover: none) {
    display: none;
  }
`;

const ProjectBottom = styled.div`
  position: absolute;
  left: 32px;
  right: 32px;
  bottom: 32px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    left: 20px;
    right: 20px;
    bottom: 20px;
  }

  h3 {
    margin: 0;
    font-family: ${FONT.helvetica};
    font-weight: 400;
    font-size: 36px;
    line-height: 1.1;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    color: ${COLORS.white};

    @media (max-width: ${BREAKPOINTS.sm}px) {
      font-size: 24px;
    }
  }
`;

const Tag = styled.span`
  padding: 6px 12px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  font-family: ${FONT.urbanist};
  font-size: 14px;
  color: ${COLORS.white};
`;

/* ================================================================== */
/*  GALLERY                                                            */
/* ================================================================== */

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  align-items: end;

  @media (max-width: ${BREAKPOINTS.md}px) {
    gap: 16px;
  }
`;

const spanMap = { landscape: 8, portrait: 4, square: 6 } as const;
const ratioMap = { landscape: "4 / 3", portrait: "3 / 4", square: "1 / 1" } as const;

const GalleryItem = styled.div<{ $o: keyof typeof spanMap }>`
  position: relative;
  grid-column: span ${({ $o }) => spanMap[$o]};
  aspect-ratio: ${({ $o }) => ratioMap[$o]};
  overflow: hidden;
  background: ${COLORS.lightGray};

  img {
    object-fit: cover;
    transition: transform 0.8s ease;
  }
  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-column: span ${({ $o }) => ($o === "landscape" ? 12 : 6)};
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-column: span 12;
  }
`;

/* ================================================================== */
/*  PROCESS (dark)                                                     */
/* ================================================================== */

const StepGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 48px;
  min-height: 320px;
  padding: 24px;
  background: #15161f;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 -1px -1px 0;
  transition: background 0.4s ease;

  &:hover {
    background: ${COLORS.brandPink};
  }
  &:hover p {
    color: ${COLORS.white};
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    min-height: 0;
    gap: 32px;
  }

  > span {
    font-family: ${FONT.urbanist};
    font-size: 24px;
    font-weight: 600;
    color: ${COLORS.white};
  }

  h3 {
    margin: 0 0 8px;
    font-family: ${FONT.helvetica};
    font-weight: 400;
    font-size: 24px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: ${COLORS.white};
  }

  p {
    margin: 0;
    font-family: ${FONT.urbanist};
    font-size: 16px;
    line-height: 1.6;
    color: ${COLORS.subtle};
    transition: color 0.4s ease;
  }
`;

/* ================================================================== */
/*  BENEFITS                                                           */
/* ================================================================== */

const BenefitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const BenefitCard = styled.article`
  padding: 24px;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.subtle};
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 28px rgba(29, 31, 44, 0.08);
    border-color: ${COLORS.brandPink};
  }

  h3 {
    margin: 0;
    font-family: ${FONT.helvetica};
    font-weight: 400;
    font-size: 24px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: ${COLORS.textPrimary};
  }

  p {
    margin: 0;
    font-family: ${FONT.urbanist};
    font-size: 18px;
    line-height: 1.6;
    color: ${COLORS.textMuted};

    @media (max-width: ${BREAKPOINTS.sm}px) {
      font-size: 16px;
    }
  }
`;

const BenefitIcon = styled.div`
  width: fit-content;
  padding: 12px;
  background: ${COLORS.brandPink};
  border: 1px solid #f8bdd6;
  border-radius: 4px;
  display: flex;

  svg {
    width: 20px;
    height: 20px;
  }
`;

/* ================================================================== */
/*  TESTIMONIALS                                                       */
/* ================================================================== */

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const TestimonialCard = styled.blockquote`
  margin: 0;
  padding: 28px;
  background: #f9fafb;
  border: 1px solid ${COLORS.subtle};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 20px;
  }

  .stars {
    color: ${COLORS.brandPink};
    letter-spacing: 4px;
    font-size: 18px;
  }

  p {
    margin: 12px 0 0;
    font-family: ${FONT.urbanist};
    font-size: 20px;
    line-height: 28px;
    color: ${COLORS.textMuted};

    @media (max-width: ${BREAKPOINTS.sm}px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  footer {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-top: 24px;
    border-top: 1px solid ${COLORS.subtle};
  }

  footer img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
  }

  footer strong {
    display: block;
    font-family: ${FONT.urbanist};
    font-size: 20px;
    font-weight: 600;
    color: ${COLORS.textPrimary};
  }

  footer span {
    font-family: ${FONT.urbanist};
    font-size: 16px;
    color: ${COLORS.textMuted};
  }
`;

/* ================================================================== */
/*  FAQ (smooth accordion)                                             */
/* ================================================================== */

const FAQList = styled.div`
  border-top: 1px solid ${COLORS.subtle};
`;

const FAQItem = styled.div`
  border-bottom: 1px solid ${COLORS.subtle};
`;

const FAQQuestion = styled.button<{ $open: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: ${FONT.urbanist};
  font-size: 22px;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ $open }) => ($open ? COLORS.brandPink : COLORS.textPrimary)};
  transition: color 0.3s ease;

  &:hover {
    color: ${COLORS.brandPink};
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    font-size: 18px;
    padding: 20px 0;
  }

  .icon {
    flex-shrink: 0;
    position: relative;
    width: 36px;
    height: 36px;
    border: 1px solid ${({ $open }) => ($open ? COLORS.brandPink : COLORS.subtle)};
    background: ${({ $open }) => ($open ? COLORS.brandPink : COLORS.white)};
    transition: background 0.3s ease, border-color 0.3s ease;
  }

  .icon::before,
  .icon::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 14px;
    height: 2px;
    background: ${({ $open }) => ($open ? COLORS.white : COLORS.brandPink)};
    transform: translate(-50%, -50%);
    transition: transform 0.4s ease, background 0.3s ease;
  }

  .icon::after {
    transform: translate(-50%, -50%) rotate(${({ $open }) => ($open ? "0deg" : "90deg")});
  }
`;

const FAQAnswer = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
  transition: grid-template-rows 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  > div {
    overflow: hidden;
  }

  p {
    margin: 0;
    padding: 0 60px 24px 0;
    max-width: 900px;
    font-family: ${FONT.urbanist};
    font-size: 18px;
    line-height: 1.7;
    color: ${COLORS.textMuted};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    transform: translateY(${({ $open }) => ($open ? "0" : "-8px")});
    transition: opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s;

    @media (max-width: ${BREAKPOINTS.sm}px) {
      font-size: 16px;
      padding-right: 0;
    }
  }
`;

/* ================================================================== */
/*  CTA                                                                */
/* ================================================================== */

const CTASection = styled.section`
  padding: 0 16px 100px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding-bottom: 60px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding-bottom: 40px;
  }
`;

const CTABox = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 64px;
  background: #5a378f;
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
    font-family: ${FONT.helvetica};
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

/* ================================================================== */
/*  RELATED                                                            */
/* ================================================================== */

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const RelatedCard = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.subtle};
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 28px rgba(29, 31, 44, 0.08);
  }

  .media {
    position: relative;
    height: 280px;
    overflow: hidden;

    @media (max-width: ${BREAKPOINTS.md}px) {
      height: 220px;
    }
    @media (max-width: ${BREAKPOINTS.sm}px) {
      height: 240px;
    }
  }

  .media img {
    object-fit: cover;
    transition: transform 0.6s ease;
  }
  &:hover .media img {
    transform: scale(1.05);
  }

  .body {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding: 20px;
  }

  h3 {
    margin: 0;
    font-family: ${FONT.helvetica};
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    letter-spacing: -0.4px;
    color: ${COLORS.textPrimary};
  }

  p {
    margin: 0;
    font-family: ${FONT.urbanist};
    font-size: 16px;
    line-height: 24px;
    color: ${COLORS.textMuted};
  }

  .more {
    margin-top: auto;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: ${FONT.urbanist};
    font-size: 15px;
    font-weight: 600;
    color: ${COLORS.brandPink};
  }

  .more svg {
    transition: transform 0.4s ease;
  }
  &:hover .more svg {
    transform: rotate(45deg);
  }
`;

/* ================================================================== */
/*  COMPONENT                                                          */
/* ================================================================== */

interface ServiceDetailsProps {
  service: Service;
  relatedServices: Service[];
}

const checkIcon = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ServiceDetails = ({ service, relatedServices }: ServiceDetailsProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const words = service.title.split(" ");
  const accent = words.pop() ?? service.title;
  const firstLine = words.join(" ");

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const ease = "power3.out";

        /* Simple fade-up reveals */
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease,
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            }
          );
        });

        /* Image mask reveals (top to bottom) with inner zoom settle */
        gsap.utils.toArray<HTMLElement>("[data-clip]").forEach((el) => {
          const img = el.querySelector("img");
          const st = { trigger: el, start: "top 88%", once: true };

          gsap.fromTo(
            el,
            { clipPath: "inset(0 0 100% 0)" },
            { clipPath: "inset(0 0 0% 0)", duration: 1.3, ease, scrollTrigger: st }
          );
          if (img) {
            gsap.fromTo(
              img,
              { scale: 1.2 },
              { scale: 1, duration: 1.6, ease, scrollTrigger: st }
            );
          }
        });

        /* Parallax on floating layers */
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const amount = Number(el.dataset.parallax) || -60;
          gsap.fromTo(
            el,
            { y: 0 },
            {
              y: amount,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        });

        /* Staggered groups, batched so each row cascades as it enters */
        gsap.set("[data-stagger]", { opacity: 0, y: 50 });
        ScrollTrigger.batch("[data-stagger]", {
          start: "top 90%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.12,
              ease,
              overwrite: true,
            }),
        });
      });
    }, rootRef);

    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(raf);
      ctx.revert();
    };
  }, [service.slug]);

  return (
    <div ref={rootRef}>
      {/* ---------------------------- HERO ---------------------------- */}
      <HeroSection>
        <HeroInner>
          <Breadcrumb aria-label="Breadcrumb" data-reveal>
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{service.title}</span>
          </Breadcrumb>

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

          <HeroGrid>
            <HeroLeft>
              <Paragraph data-reveal>{service.hero.description}</Paragraph>

              <Pills data-reveal>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </Pills>

              <ButtonRow data-reveal>
                <PrimaryButton href={service.cta.buttonLink}>
                  {service.cta.buttonText}
                  <Arrow color="#fff" />
                </PrimaryButton>
                <OutlineButton href="/services">
                  All Services
                  <Arrow color={COLORS.brandPink} />
                </OutlineButton>
              </ButtonRow>
            </HeroLeft>

            <HeroMedia>
              <ImageBox data-clip>
                <Image
                  src={service.hero.image}
                  alt={service.hero.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </ImageBox>

              <HeroFloat data-parallax="-50">
                <Image
                  src={service.images.wide}
                  alt={`${service.title} detail`}
                  fill
                  sizes="220px"
                />
              </HeroFloat>
            </HeroMedia>
          </HeroGrid>
        </HeroInner>
      </HeroSection>

      {/* -------------------------- OVERVIEW -------------------------- */}
      <Block $tone="light">
        <Inner>
          <Split>
            <SplitMedia data-clip>
              <ImageBox>
                <Image
                  src={service.overview.image}
                  alt={service.overview.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </ImageBox>
            </SplitMedia>

            <SplitText>
              <OverviewHeading data-reveal>{service.overview.heading}</OverviewHeading>

              {service.overview.description.map((paragraph, i) => (
                <Paragraph key={i} data-reveal>
                  {paragraph}
                </Paragraph>
              ))}

              <Points data-reveal>
                {service.bullets.slice(0, 6).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </Points>
            </SplitText>
          </Split>
        </Inner>
      </Block>

      {/* ---------------------------- OFFERS --------------------------- */}
      <Block $tone="dark">
        <Inner>
          <Intro data-reveal>
            <Heading color={COLORS.white}>
              What We <span className="highlightTxt">Offer</span>
            </Heading>
            <Lead $light>
              Tailored solutions designed around your requirements, preferences, and project goals.
            </Lead>
          </Intro>

          <OfferGrid>
            {service.offers.map((offer, i) => (
              <OfferCard key={`${offer.title}-${i}`} data-stagger>
                <OfferNumber>{String(i + 1).padStart(2, "0")}</OfferNumber>
                {offer.image && (
                  <OfferImage>
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </OfferImage>
                )}
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
              </OfferCard>
            ))}
          </OfferGrid>
        </Inner>
      </Block>

      {/* ------------------------ FEATURED PROJECTS -------------------- */}
      {service.featuredProjects.length > 0 && (
        <Block $tone="white">
          <Inner>
            <Intro data-reveal>
              <Heading>
                Featured <span className="highlightTxt">Work</span>
              </Heading>
              <Lead>
                Selected projects that show our approach to design, functionality, and detail.
              </Lead>
            </Intro>

            <ProjectGrid>
              {service.featuredProjects.map((project) => (
                <ProjectCard key={project.slug} href="/works" data-stagger>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <ProjectOverlay />
                  <ProjectDiscover>Discover</ProjectDiscover>
                  <ProjectBottom>
                    <Tag>
                      {project.category} · {project.location}
                    </Tag>
                    <h3>{project.title}</h3>
                  </ProjectBottom>
                </ProjectCard>
              ))}
            </ProjectGrid>
          </Inner>
        </Block>
      )}

      {/* ---------------------------- GALLERY -------------------------- */}
      {service.gallery.length > 0 && (
        <Block $tone="light">
          <Inner>
            <Intro data-reveal>
              <Heading>
                Design <span className="highlightTxt">Gallery</span>
              </Heading>
              <Lead>A closer look at the spaces, materials, and details that inspire our work.</Lead>
            </Intro>

            <GalleryGrid>
              {service.gallery.map((item, i) => (
                <GalleryItem key={`${item.imageAlt}-${i}`} $o={item.orientation} data-clip>
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 66vw"
                  />
                </GalleryItem>
              ))}
            </GalleryGrid>
          </Inner>
        </Block>
      )}

      {/* ---------------------------- PROCESS -------------------------- */}
      <Block $tone="dark">
        <Inner>
          <Intro data-reveal>
            <Heading color={COLORS.white}>
              Our <span className="highlightTxt">Process</span>
            </Heading>
            <Lead $light>
              A considered approach that takes your project from the first conversation to delivery.
            </Lead>
          </Intro>

          <StepGrid>
            {service.process.map((item) => (
              <StepCard key={item.step} data-stagger>
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </StepCard>
            ))}
          </StepGrid>
        </Inner>
      </Block>

      {/* ---------------------------- BENEFITS ------------------------- */}
      <Block $tone="white">
        <Inner>
          <Intro data-reveal>
            <Heading>
              Why <span className="highlightTxt">Choose Us</span>
            </Heading>
            <Lead>
              Thoughtful planning, a tailored approach, and careful attention to detail.
            </Lead>
          </Intro>

          <BenefitGrid>
            {service.benefits.map((benefit) => (
              <BenefitCard key={benefit.title} data-stagger>
                <BenefitIcon>{checkIcon}</BenefitIcon>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </BenefitCard>
            ))}
          </BenefitGrid>
        </Inner>
      </Block>

      {/* -------------------------- TESTIMONIALS ----------------------- */}
      {service.testimonials.length > 0 && (
        <Block $tone="light">
          <Inner>
            <Intro data-reveal>
              <Heading>
                Client <span className="highlightTxt">Voices</span>
              </Heading>
            </Intro>

            <TestimonialGrid>
              {service.testimonials.map((t, i) => (
                <TestimonialCard key={`${t.name}-${i}`} data-stagger>
                  <div>
                    <span
                      className="stars"
                      role="img"
                      aria-label={`${t.rating} out of 5 stars`}
                    >
                      {"★".repeat(Math.max(0, Math.min(5, t.rating)))}
                    </span>
                    <p>“{t.quote}”</p>
                  </div>

                  <footer>
                    {t.image && <Image src={t.image} alt="" width={56} height={56} />}
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </footer>
                </TestimonialCard>
              ))}
            </TestimonialGrid>
          </Inner>
        </Block>
      )}

      {/* ------------------------------ FAQ ---------------------------- */}
      <Block $tone="white">
        <Inner>
          <Intro data-reveal>
            <Heading>
              Common <span className="highlightTxt">Questions</span>
            </Heading>
            <Lead>
              Answers to what people ask most about our {service.title.toLowerCase()} service.
            </Lead>
          </Intro>

          <FAQList data-reveal>
            {service.faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <FAQItem key={`${faq.question}-${i}`}>
                  <h3 style={{ margin: 0 }}>
                    <FAQQuestion
                      type="button"
                      $open={open}
                      aria-expanded={open}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-btn-${i}`}
                      onClick={() => setOpenFaq(open ? null : i)}
                    >
                      {faq.question}
                      <span className="icon" aria-hidden="true" />
                    </FAQQuestion>
                  </h3>
                  <FAQAnswer
                    $open={open}
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                  >
                    <div>
                      <p>{faq.answer}</p>
                    </div>
                  </FAQAnswer>
                </FAQItem>
              );
            })}
          </FAQList>
        </Inner>
      </Block>

      {/* ------------------------------ CTA ---------------------------- */}
      <CTASection>
        <CTABox data-reveal>
          <h2>{service.cta.title}</h2>
          <p>{service.cta.description}</p>
          <PrimaryButton href={service.cta.buttonLink}>
            {service.cta.buttonText}
            <Arrow color="#fff" />
          </PrimaryButton>
        </CTABox>
      </CTASection>

      {/* ---------------------------- RELATED -------------------------- */}
      {relatedServices.length > 0 && (
        <Block $tone="light">
          <Inner>
            <Intro data-reveal>
              <Heading>
                More <span className="highlightTxt">Services</span>
              </Heading>
              <Lead>Discover more ways we can help bring your next project to life.</Lead>
            </Intro>

            <RelatedGrid>
              {relatedServices.map((related) => (
                <RelatedCard
                  key={related.id}
                  href={`/services/${related.slug}`}
                  data-stagger
                >
                  <div className="media">
                    <Image
                      src={related.cardImage}
                      alt={related.title}
                      fill
                      sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="body">
                    <h3>{related.title}</h3>
                    <p>{related.excerpt}</p>
                    <span className="more">
                      Explore Service
                      <Arrow color={COLORS.brandPink} />
                    </span>
                  </div>
                </RelatedCard>
              ))}
            </RelatedGrid>
          </Inner>
        </Block>
      )}
    </div>
  );
};

export default ServiceDetails;