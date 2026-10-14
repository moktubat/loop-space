"use client";

import { useLayoutEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { container } from "@/styles/mixins";
import { bodyText } from "@/styles/typography";
import { COLORS, FONT, BREAKPOINTS } from "@/styles/variables";
import { Heading } from "@/components/ui/Heading";
import type { CareerJob } from "@/data/career";
import CareerApplyModal from "./CareerApplyModal"

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

const PrimaryActionButton = styled.button`
    ${buttonBase}
    background: ${COLORS.brandPink};
    color: ${COLORS.white};
    border: 2px solid #f8bdd6;
    border-bottom-width: 4px;

    &:hover {
        background: ${COLORS.brandPinkHover};
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
    align-items: start;

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

const Paragraph = styled.p`
    ${bodyText}
    margin: 0;
    color: ${COLORS.textMuted};
`;

const JobMetaCard = styled.div`
    border: 1px solid ${COLORS.subtle};
    background: ${COLORS.white};
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: ${BREAKPOINTS.sm}px) {
        padding: 20px;
    }
`;

const MetaGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 16px;

    @media (max-width: ${BREAKPOINTS.sm}px) {
        grid-template-columns: 1fr 1fr;
        gap: 20px 12px;
    }
`;

const MetaItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const MetaLabel = styled.span`
    font-family: ${FONT.urbanist};
    font-size: 14px;
    color: ${COLORS.textMuted};
    text-transform: uppercase;
    letter-spacing: 0.05em;
`;

const MetaValue = styled.span`
    font-family: ${FONT.urbanist};
    font-size: 20px;
    font-weight: 600;
    color: ${COLORS.textPrimary};

    @media (max-width: ${BREAKPOINTS.sm}px) {
        font-size: 16px;
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

const HeroRight = styled.div`
    position: relative;
    min-height: 540px;
    border: 1px solid ${COLORS.subtle};
    background:
        linear-gradient(180deg, rgba(234, 43, 123, 0.04) 0%, rgba(90, 55, 143, 0.08) 100%),
        ${COLORS.lightGray};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px;

    @media (max-width: ${BREAKPOINTS.md}px) {
        min-height: 360px;
        padding: 32px;
    }
    @media (max-width: ${BREAKPOINTS.sm}px) {
        min-height: 260px;
        padding: 24px;
    }
`;

const HeroGlyph = styled.div`
    width: 280px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 100%;
        height: 100%;
        opacity: 0.85;
    }

    @media (max-width: ${BREAKPOINTS.md}px) {
        width: 200px;
        height: 200px;
    }
    @media (max-width: ${BREAKPOINTS.sm}px) {
        width: 150px;
        height: 150px;
    }
`;

const HeroFloatBadge = styled.div`
    position: absolute;
    left: 24px;
    top: 24px;
    background: ${COLORS.white};
    border: 1px solid ${COLORS.subtle};
    padding: 12px 16px;
    font-family: ${FONT.urbanist};
    font-size: 14px;
    font-weight: 600;
    color: ${COLORS.brandPink};
    text-transform: uppercase;
    letter-spacing: 0.06em;
`;

const HeroFloatDeadline = styled.div`
    position: absolute;
    right: 24px;
    bottom: 24px;
    background: ${COLORS.textPrimary};
    color: ${COLORS.white};
    padding: 12px 16px;
    font-family: ${FONT.urbanist};
    font-size: 14px;
    font-weight: 500;

    span {
        color: ${COLORS.subtle};
        font-weight: 400;
        margin-right: 6px;
    }
`;

/* ================================================================== */
/*  OVERVIEW                                                           */
/* ================================================================== */

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

/* ================================================================== */
/*  RESPONSIBILITIES / REQUIREMENTS / BENEFITS — grid cards            */
/* ================================================================== */

const CardGrid = styled.div<{ $cols?: number }>`
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

const InfoCard = styled.article<{ $tone?: Tone }>`
    padding: 24px;
    background: ${({ $tone }) => ($tone === "dark" ? "#15161f" : COLORS.white)};
    border: 1px solid
        ${({ $tone }) => ($tone === "dark" ? "rgba(255,255,255,0.1)" : COLORS.subtle)};
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;

    &:hover {
        transform: translateY(-6px);
        box-shadow: 0 14px 28px rgba(29, 31, 44, 0.08);
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

const checkIcon = (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
            d="M5 12.5l4.5 4.5L19 7.5"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

/* ================================================================== */
/*  FAQ                                                                */
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
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    @media (max-width: ${BREAKPOINTS.sm}px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

const RelatedCard = styled(Link)`
    display: flex;
    flex-direction: column;
    background: ${COLORS.white};
    border: 1px solid ${COLORS.subtle};
    padding: 24px;
    text-decoration: none;
    transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;

    &:hover {
        transform: translateY(-6px);
        box-shadow: 0 14px 28px rgba(29, 31, 44, 0.08);
        border-color: ${COLORS.brandPink};
    }

    .top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 16px;
        margin-bottom: 16px;
    }

    h3 {
        margin: 0;
        font-family: ${FONT.helvetica};
        font-weight: 400;
        font-size: 26px;
        line-height: 1.1;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        color: ${COLORS.textPrimary};

        @media (max-width: ${BREAKPOINTS.sm}px) {
            font-size: 22px;
        }
    }

    .tag {
        font-family: ${FONT.urbanist};
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: ${COLORS.brandPink};
        background: rgba(234, 43, 123, 0.08);
        padding: 6px 10px;
        white-space: nowrap;
    }

    .meta {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        font-family: ${FONT.urbanist};
        font-size: 14px;
        color: ${COLORS.textMuted};
        margin-bottom: 20px;

        strong {
            color: ${COLORS.textPrimary};
            font-weight: 600;
            margin-right: 4px;
        }
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

interface CareerDetailsProps {
    job: CareerJob;
    relatedJobs: CareerJob[];
}

const CareerDetails = ({ job, relatedJobs }: CareerDetailsProps) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const words = job.title.split(" ");
    const accent = words.pop() ?? job.title;
    const firstLine = words.join(" ");

    useLayoutEffect(() => {
        if (!rootRef.current) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                const ease = "power3.out";

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
    }, [job.slug]);

    return (
        <div ref={rootRef}>
            {/* ---------------------------- HERO ---------------------------- */}
            <HeroSection>
                <HeroInner>
                    <Breadcrumb aria-label="Breadcrumb" data-reveal>
                        <Link href="/">Home</Link>
                        <span aria-hidden="true">/</span>
                        <Link href="/career">Career</Link>
                        <span aria-hidden="true">/</span>
                        <span aria-current="page">{job.title}</span>
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
                            <Paragraph data-reveal>{job.hero.description}</Paragraph>

                            <JobMetaCard data-reveal>
                                <MetaGrid>
                                    <MetaItem>
                                        <MetaLabel>Job Type</MetaLabel>
                                        <MetaValue>{job.type}</MetaValue>
                                    </MetaItem>
                                    <MetaItem>
                                        <MetaLabel>Workplace</MetaLabel>
                                        <MetaValue>{job.workplace}</MetaValue>
                                    </MetaItem>
                                    <MetaItem>
                                        <MetaLabel>Salary</MetaLabel>
                                        <MetaValue>
                                            {job.salary}{" "}
                                            <span style={{ fontSize: 14, fontWeight: 400 }}>
                                                {job.salaryPeriod}
                                            </span>
                                        </MetaValue>
                                    </MetaItem>
                                    <MetaItem>
                                        <MetaLabel>Experience</MetaLabel>
                                        <MetaValue>{job.experience}</MetaValue>
                                    </MetaItem>
                                    <MetaItem>
                                        <MetaLabel>Deadline</MetaLabel>
                                        <MetaValue>{job.deadline}</MetaValue>
                                    </MetaItem>
                                    <MetaItem>
                                        <MetaLabel>Location</MetaLabel>
                                        <MetaValue>{job.location}</MetaValue>
                                    </MetaItem>
                                </MetaGrid>

                                <ButtonRow data-reveal>
                                    <PrimaryActionButton onClick={() => setIsModalOpen(true)}>
                                        {job.cta.buttonText}
                                        <Arrow color="#fff" />
                                    </PrimaryActionButton>
                                    <OutlineButton href="/career">
                                        All Positions
                                        <Arrow color={COLORS.brandPink} />
                                    </OutlineButton>
                                </ButtonRow>
                            </JobMetaCard>
                        </HeroLeft>

                        <HeroRight data-reveal>
                            <HeroFloatBadge>{job.type}</HeroFloatBadge>

                            <HeroGlyph>
                                {/* Interior design glyph */}
                                <svg
                                    viewBox="0 0 224 224"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g opacity="0.85" clipPath="url(#clip0_career)">
                                        <rect width="224" height="224" fill="#E4E6E9" />
                                        <path
                                            d="M108.775 0H262.771V20.1389H108.775V0Z"
                                            fill="#222222"
                                        />
                                        <path
                                            d="M16.974 168.956H146.489L150.569 132.34C150.778 129.829 149.942 127.318 148.267 125.435C145.861 122.767 142.2 121.25 138.224 121.25H25.2384C21.263 121.25 17.6015 122.767 15.2474 125.435C13.5212 127.318 12.6321 129.829 12.8937 132.34L16.974 168.956Z"
                                            fill="#222222"
                                        />
                                        <path
                                            d="M152.923 121.25C155.853 124.441 157.265 128.731 156.794 133.02L153.603 161.946H182.635V26.4155H108.775V114.974H138.225C143.979 114.974 149.366 117.275 152.923 121.25ZM163.123 75.6377H169.4V98.3918H163.123V75.6377Z"
                                            fill="#222222"
                                        />
                                        <path
                                            d="M188.911 161.946H262.77V26.4155H188.911V161.946ZM203.662 75.6377H209.939V98.3918H203.662V75.6377Z"
                                            fill="#222222"
                                        />
                                        <path
                                            d="M68.5499 21.2896H30.2602L24.8726 58.2714H73.9375L68.5499 21.2896Z"
                                            fill="#222222"
                                        />
                                        <path
                                            d="M152.714 170.002C158.416 171.78 163.281 175.703 166.262 180.882V178.109H202.25V184.387H167.883C168.877 187.002 169.4 189.774 169.4 192.599V200.184C169.4 202.695 168.407 205.101 166.68 206.932C167.988 208.344 168.877 210.122 169.244 212.005H262.771V168.223H152.924L152.714 170.002Z"
                                            fill="#222222"
                                        />
                                        <path
                                            d="M163.123 234.968V213.679C163.123 211.691 161.502 210.07 159.514 210.07H4.83859C2.85086 210.07 1.22949 211.691 1.22949 213.679V234.968C1.22949 236.956 2.85086 238.578 4.83859 238.578H159.462C161.449 238.63 163.071 237.008 163.123 235.02V234.968Z"
                                            fill="#222222"
                                        />
                                        <path
                                            d="M169.4 231.726H202.25V238.003H168.93C167.569 242.083 163.751 244.855 159.462 244.855H159.2V258.403H262.771V218.283H169.4V231.726Z"
                                            fill="#222222"
                                        />
                                        <path
                                            d="M4.83854 203.793H159.514C161.502 203.793 163.123 202.172 163.123 200.184V192.599C163.123 183.027 155.329 175.233 145.757 175.233H18.5955C9.02317 175.233 1.229 183.027 1.229 192.599V200.184C1.22944 202.172 2.8508 203.793 4.83854 203.793Z"
                                            fill="#222222"
                                        />
                                        <path
                                            d="M46.2666 61.4097H52.5438V114.973H46.2666V61.4097Z"
                                            fill="#222222"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_career">
                                            <rect width="224" height="224" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </HeroGlyph>

                            <HeroFloatDeadline>
                                <span>Deadline:</span>
                                {job.deadline}
                            </HeroFloatDeadline>
                        </HeroRight>
                    </HeroGrid>
                </HeroInner>
            </HeroSection>

            {/* -------------------------- OVERVIEW -------------------------- */}
            <Block $tone="light">
                <Inner>
                    <div style={{ maxWidth: 900, display: "flex", flexDirection: "column", gap: 20 }}>
                        <OverviewHeading data-reveal>{job.overview.heading}</OverviewHeading>
                        {job.overview.description.map((paragraph, i) => (
                            <Paragraph key={i} data-reveal>
                                {paragraph}
                            </Paragraph>
                        ))}
                    </div>
                </Inner>
            </Block>

            {/* ----------------------- RESPONSIBILITIES --------------------- */}
            <Block $tone="white">
                <Inner>
                    <Intro data-reveal>
                        <Heading>
                            What You'll <span className="highlightTxt">Be Doing</span>
                        </Heading>
                        <Lead>
                            Your day-to-day work will involve a balance of creative thinking,
                            technical documentation, and collaborative problem-solving.
                        </Lead>
                    </Intro>

                    <CardGrid $cols={3}>
                        {job.responsibilities.map((item, i) => (
                            <InfoCard key={`${item.title}-${i}`} data-stagger>
                                <span className="index">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </InfoCard>
                        ))}
                    </CardGrid>
                </Inner>
            </Block>

            {/* ----------------------- REQUIREMENTS ------------------------- */}
            <Block $tone="light">
                <Inner>
                    <Intro data-reveal>
                        <Heading>
                            Education & <span className="highlightTxt">Skills</span>
                        </Heading>
                        <Lead>
                            We look for candidates who combine formal training with hands-on
                            experience and a strong creative point of view.
                        </Lead>
                    </Intro>

                    <CardGrid $cols={3}>
                        {job.requirements.map((item, i) => (
                            <InfoCard key={`${item.title}-${i}`} data-stagger>
                                <span className="index">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </InfoCard>
                        ))}
                    </CardGrid>
                </Inner>
            </Block>

            {/* --------------------------- BENEFITS ------------------------- */}
            <Block $tone="white">
                <Inner>
                    <Intro data-reveal>
                        <Heading>
                            Perks & <span className="highlightTxt">Benefits</span>
                        </Heading>
                        <Lead>
                            We invest in our team's growth, well-being, and creative development
                            with a benefits package designed around the people who make Loop Space.
                        </Lead>
                    </Intro>

                    <CardGrid $cols={3}>
                        {job.benefits.map((item, i) => (
                            <InfoCard key={`${item.title}-${i}`} data-stagger>
                                <BenefitIcon>{checkIcon}</BenefitIcon>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </InfoCard>
                        ))}
                    </CardGrid>
                </Inner>
            </Block>

            {/* ------------------------------ FAQ --------------------------- */}
            <Block $tone="light">
                <Inner>
                    <Intro data-reveal>
                        <Heading>
                            Common <span className="highlightTxt">Questions</span>
                        </Heading>
                        <Lead>
                            Answers to what candidates ask most about this role and life at Loop Space.
                        </Lead>
                    </Intro>

                    <FAQList data-reveal>
                        {job.faqs.map((faq, i) => {
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

            {/* ------------------------------ CTA --------------------------- */}
            <CTASection>
                <CTABox data-reveal>
                    <h2>{job.cta.title}</h2>
                    <p>{job.cta.description}</p>

                    <PrimaryActionButton onClick={() => setIsModalOpen(true)}>
                        {job.cta.buttonText}
                        <Arrow color="#fff" />
                    </PrimaryActionButton>
                </CTABox>
            </CTASection>

            {/* --------------------------- RELATED -------------------------- */}
            {relatedJobs.length > 0 && (
                <Block $tone="white">
                    <Inner>
                        <Intro data-reveal>
                            <Heading>
                                More <span className="highlightTxt">Openings</span>
                            </Heading>
                            <Lead>
                                Explore other roles at Loop Space and find the one that fits your skills
                                and ambitions.
                            </Lead>
                        </Intro>

                        <RelatedGrid>
                            {relatedJobs.map((related) => (
                                <RelatedCard
                                    key={related.id}
                                    href={`/career/${related.slug}`}
                                    data-stagger
                                >
                                    <div className="top">
                                        <h3>{related.title}</h3>
                                        <span className="tag">{related.type}</span>
                                    </div>
                                    <div className="meta">
                                        <span>
                                            <strong>Salary:</strong>
                                            {related.salary}
                                            {related.salaryPeriod}
                                        </span>
                                        <span>
                                            <strong>Deadline:</strong>
                                            {related.deadline}
                                        </span>
                                        <span>
                                            <strong>Workplace:</strong>
                                            {related.workplace}
                                        </span>
                                    </div>
                                    <span className="more">
                                        View Details
                                        <Arrow color={COLORS.brandPink} />
                                    </span>
                                </RelatedCard>
                            ))}
                        </RelatedGrid>
                    </Inner>
                </Block>
            )}

            {/* ----------------------- APPLY MODAL ----------------------- */}
            <CareerApplyModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                jobTitle={job.title}
            />
            
        </div>
    );
};

export default CareerDetails;