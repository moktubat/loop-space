"use client";

import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import { container } from "@/styles/mixins";
import { COLORS, FONT, BREAKPOINTS } from "@/styles/variables";
import { Heading } from "@/components/ui/Heading";
import { ArrowIcon, CheckIcon } from "@/components/ui/Icons";
import type { CareerJob } from "@/data/career";
import CareerApplyModal from "./CareerApplyModal";

/* ================================================================== */
/*  Buttons                                                            */
/* ================================================================== */

const btnBase = `
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 12px 18px;
  border-radius: 6px;
  font-family: var(--font-urbanist), "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
`;

const ApplyButton = styled.button<{ $full?: boolean }>`
  ${btnBase}
  width: ${({ $full }) => ($full ? "100%" : "auto")};
  background: ${COLORS.brandPink};
  color: ${COLORS.white};
  border: 2px solid ${COLORS.btnBorderLight};
  border-bottom-width: 4px;

  &:hover {
    background: ${COLORS.brandPinkHover};
    transform: translateY(-2px);
  }
  &:hover svg {
    transform: rotate(45deg);
  }
  svg {
    transition: transform 0.4s ease;
  }
`;

const OutlineLink = styled(Link)`
  ${btnBase}
  background: ${COLORS.white};
  color: ${COLORS.brandPink};
  border: 2px solid ${COLORS.brandPink};
  border-bottom-width: 4px;

  &:hover {
    transform: translateY(-2px);
  }
`;

/* ================================================================== */
/*  Header                                                             */
/* ================================================================== */

const HeaderSection = styled.section`
  background: ${COLORS.surfaceLight};
  border-bottom: 1px solid ${COLORS.subtle};
  padding: 24px 16px 56px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding-bottom: 40px;
  }
`;

const HeaderInner = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  gap: 24px;
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

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.span<{ $accent?: boolean }>`
  padding: 6px 14px;
  border-radius: 50px;
  font-family: ${FONT.urbanist};
  font-size: 14px;
  font-weight: 600;
  border: 1px solid ${({ $accent }) => ($accent ? COLORS.brandPink : COLORS.subtle)};
  background: ${({ $accent }) => ($accent ? "rgba(234, 43, 123, 0.08)" : COLORS.white)};
  color: ${({ $accent }) => ($accent ? COLORS.brandPink : COLORS.textPrimary)};
`;

const JobTitle = styled.h1`
  margin: 0;
  font-family: ${FONT.helvetica};
  font-weight: 400;
  font-size: clamp(40px, 7vw, 96px);
  line-height: 1;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: ${COLORS.textPrimary};
`;

const HeroText = styled.p`
  margin: 0;
  max-width: 760px;
  font-family: ${FONT.urbanist};
  font-size: 20px;
  line-height: 30px;
  color: ${COLORS.textMuted};

  @media (max-width: ${BREAKPOINTS.sm}px) {
    font-size: 17px;
    line-height: 26px;
  }
`;

const QuickFacts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: ${COLORS.white};
  border: 1px solid ${COLORS.subtle};

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Fact = styled.div`
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-right: 1px solid ${COLORS.subtle};

  &:last-child {
    border-right: none;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    &:nth-child(2n) {
      border-right: none;
    }
    &:nth-child(-n + 2) {
      border-bottom: 1px solid ${COLORS.subtle};
    }
  }

  span {
    font-family: ${FONT.urbanist};
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: ${COLORS.textMuted};
  }

  strong {
    font-family: ${FONT.urbanist};
    font-size: 22px;
    font-weight: 600;
    color: ${COLORS.textPrimary};

    small {
      font-size: 14px;
      font-weight: 400;
      color: ${COLORS.textMuted};
    }

    @media (max-width: ${BREAKPOINTS.sm}px) {
      font-size: 18px;
    }
  }
`;

const HeaderActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    flex-direction: column;

    > * {
      width: 100%;
      justify-content: center;
      gap: 12px;
    }
  }
`;

/* ================================================================== */
/*  Body layout (content + sticky sidebar)                             */
/* ================================================================== */

const BodySection = styled.section`
  padding: 72px 16px 100px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding: 48px 16px 80px;
  }
`;

const BodyGrid = styled.div`
  ${container}
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 64px;
  align-items: start;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    gap: 48px;
  }
`;

const Block = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  scroll-margin-top: 24px;

  h2 {
    margin: 0;
    font-family: ${FONT.helvetica};
    font-weight: 400;
    font-size: clamp(28px, 3.5vw, 44px);
    line-height: 1.1;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    color: ${COLORS.textPrimary};
    padding-bottom: 16px;
    border-bottom: 1px solid ${COLORS.subtle};
    position: relative;
  }

  h2::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 64px;
    height: 3px;
    background: ${COLORS.brandPink};
  }

  > p {
    margin: 0;
    font-family: ${FONT.urbanist};
    font-size: 18px;
    line-height: 1.7;
    color: ${COLORS.textMuted};
  }
`;

const OverviewLead = styled.h3`
  margin: 0;
  font-family: ${FONT.urbanist};
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  color: ${COLORS.textPrimary};
`;

/* Responsibilities / requirements as checklist rows */
const CheckList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const CheckRow = styled.li`
  display: flex;
  gap: 16px;
  padding: 20px 0;
  border-bottom: 1px solid ${COLORS.subtle};

  &:first-child {
    padding-top: 4px;
  }

  .icon {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: ${COLORS.brandPink};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
  }

  h4 {
    margin: 0 0 6px;
    font-family: ${FONT.urbanist};
    font-size: 19px;
    font-weight: 600;
    color: ${COLORS.textPrimary};
  }

  p {
    margin: 0;
    font-family: ${FONT.urbanist};
    font-size: 16px;
    line-height: 1.6;
    color: ${COLORS.textMuted};
  }
`;

const BenefitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.article`
  padding: 20px;
  background: ${COLORS.surfaceLight};
  border: 1px solid ${COLORS.subtle};
  border-left: 3px solid ${COLORS.accent};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 28px rgba(29, 31, 44, 0.08);
  }

  h4 {
    margin: 0 0 6px;
    font-family: ${FONT.urbanist};
    font-size: 18px;
    font-weight: 600;
    color: ${COLORS.textPrimary};
  }

  p {
    margin: 0;
    font-family: ${FONT.urbanist};
    font-size: 15px;
    line-height: 1.6;
    color: ${COLORS.textMuted};
  }
`;

/* FAQ */
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
  padding: 22px 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: ${FONT.urbanist};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ $open }) => ($open ? COLORS.brandPink : COLORS.textPrimary)};
  transition: color 0.3s ease;

  &:hover {
    color: ${COLORS.brandPink};
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    font-size: 17px;
  }

  .icon {
    flex-shrink: 0;
    position: relative;
    width: 34px;
    height: 34px;
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
  transition: grid-template-rows 0.45s cubic-bezier(0.4, 0, 0.2, 1);

  > div {
    overflow: hidden;
  }

  p {
    margin: 0;
    padding: 0 48px 22px 0;
    font-family: ${FONT.urbanist};
    font-size: 17px;
    line-height: 1.7;
    color: ${COLORS.textMuted};
  }
`;

/* ================================================================== */
/*  Sidebar                                                            */
/* ================================================================== */

const Sidebar = styled.aside`
  position: sticky;
  top: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    position: static;
  }
`;

const SummaryCard = styled.div`
  border: 1px solid ${COLORS.subtle};
  background: ${COLORS.white};
  box-shadow: 0 14px 28px rgba(29, 31, 44, 0.06);
`;

const SummaryHead = styled.div`
  padding: 20px 24px;
  background: ${COLORS.accent};
  color: ${COLORS.white};
  font-family: ${FONT.helvetica};
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: -0.02em;
`;

const SummaryBody = styled.div`
  padding: 8px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid ${COLORS.subtle};
  font-family: ${FONT.urbanist};

  span {
    font-size: 15px;
    color: ${COLORS.textMuted};
  }

  strong {
    font-size: 16px;
    font-weight: 600;
    text-align: right;
    color: ${COLORS.textPrimary};
  }
`;

const DeadlineNote = styled.p`
  margin: 0;
  padding: 14px 16px;
  background: rgba(234, 43, 123, 0.08);
  border-left: 3px solid ${COLORS.brandPink};
  font-family: ${FONT.urbanist};
  font-size: 14px;
  line-height: 1.5;
  color: ${COLORS.textPrimary};
`;

/* Sticky apply bar for phones */
const MobileBar = styled.div`
  display: none;

  @media (max-width: ${BREAKPOINTS.md}px) {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 900;
    gap: 12px;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    background: ${COLORS.white};
    border-top: 1px solid ${COLORS.subtle};
    box-shadow: 0 -8px 20px rgba(29, 31, 44, 0.08);
  }

  div {
    font-family: ${FONT.urbanist};
    line-height: 1.2;

    strong {
      display: block;
      font-size: 15px;
      color: ${COLORS.textPrimary};
    }
    span {
      font-size: 13px;
      color: ${COLORS.textMuted};
    }
  }

  button {
    padding: 10px 16px;
    gap: 16px;
  }
`;

/* ================================================================== */
/*  Related + CTA                                                      */
/* ================================================================== */

const RelatedSection = styled.section`
  background: ${COLORS.surfaceLight};
  border-top: 1px solid ${COLORS.subtle};
  padding: 80px 16px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 48px 16px 96px;
  }
`;

const RelatedInner = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
  }
`;

const RelatedCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.subtle};
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
    gap: 12px;
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
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 20px;
    font-family: ${FONT.urbanist};
    font-size: 15px;
    color: ${COLORS.textMuted};

    strong {
      color: ${COLORS.textPrimary};
      font-weight: 600;
    }
  }

  .more {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: ${FONT.urbanist};
    font-size: 15px;
    font-weight: 600;
    color: ${COLORS.brandPink};
  }
`;

const CTASection = styled.section`
  padding: 0 16px 100px;
  background: ${COLORS.surfaceLight};

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding-bottom: 96px;
  }
`;

const CTABox = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 56px;
  background: ${COLORS.accent};
  color: ${COLORS.white};

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 32px 20px;
    gap: 20px;
  }

  h2 {
    margin: 0;
    max-width: 900px;
    font-family: ${FONT.helvetica};
    font-weight: 400;
    font-size: clamp(32px, 5vw, 64px);
    line-height: 1;
    letter-spacing: -0.04em;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    max-width: 680px;
    font-family: ${FONT.urbanist};
    font-size: 20px;
    line-height: 1.5;
    color: ${COLORS.subtle};
  }
`;

/* ================================================================== */
/*  Component                                                          */
/* ================================================================== */

interface CareerDetailsProps {
    job: CareerJob;
    relatedJobs: CareerJob[];
}

const CareerDetails = ({ job, relatedJobs }: CareerDetailsProps) => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            {/* ------------------------- JOB HEADER ------------------------- */}
            <HeaderSection>
                <HeaderInner>
                    <Breadcrumb aria-label="Breadcrumb">
                        <Link href="/">Home</Link>
                        <span aria-hidden="true">/</span>
                        <Link href="/career">Career</Link>
                        <span aria-hidden="true">/</span>
                        <span aria-current="page">{job.title}</span>
                    </Breadcrumb>

                    <TagRow>
                        <Tag $accent>We&apos;re hiring</Tag>
                        <Tag>{job.type}</Tag>
                        <Tag>{job.workplace}</Tag>
                        <Tag>{job.location}</Tag>
                    </TagRow>

                    <JobTitle>{job.title}</JobTitle>
                    <HeroText>{job.hero.description}</HeroText>

                    <QuickFacts>
                        <Fact>
                            <span>Salary</span>
                            <strong>
                                {job.salary} <small>{job.salaryPeriod}</small>
                            </strong>
                        </Fact>
                        <Fact>
                            <span>Experience</span>
                            <strong>{job.experience}</strong>
                        </Fact>
                        <Fact>
                            <span>Job Type</span>
                            <strong>{job.type}</strong>
                        </Fact>
                        <Fact>
                            <span>Apply Before</span>
                            <strong>{job.deadline}</strong>
                        </Fact>
                    </QuickFacts>

                    <HeaderActions>
                        <ApplyButton type="button" onClick={openModal}>
                            {job.cta.buttonText}
                            <ArrowIcon color="#fff" />
                        </ApplyButton>
                        <OutlineLink href="/career">
                            All Positions
                            <ArrowIcon color={COLORS.brandPink} />
                        </OutlineLink>
                    </HeaderActions>
                </HeaderInner>
            </HeaderSection>

            {/* --------------------------- BODY ----------------------------- */}
            <BodySection>
                <BodyGrid>
                    <Main>
                        <Block id="overview">
                            <h2>Job Overview</h2>
                            <OverviewLead>{job.overview.heading}</OverviewLead>
                            {job.overview.description.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </Block>

                        <Block id="responsibilities">
                            <h2>Responsibilities</h2>
                            <CheckList>
                                {job.responsibilities.map((item, i) => (
                                    <CheckRow key={`${item.title}-${i}`}>
                                        <span className="icon">
                                            <CheckIcon size={14} />
                                        </span>
                                        <div>
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </CheckRow>
                                ))}
                            </CheckList>
                        </Block>

                        <Block id="requirements">
                            <h2>Requirements</h2>
                            <CheckList>
                                {job.requirements.map((item, i) => (
                                    <CheckRow key={`${item.title}-${i}`}>
                                        <span className="icon">
                                            <CheckIcon size={14} />
                                        </span>
                                        <div>
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </CheckRow>
                                ))}
                            </CheckList>
                        </Block>

                        <Block id="benefits">
                            <h2>Perks &amp; Benefits</h2>
                            <BenefitGrid>
                                {job.benefits.map((item, i) => (
                                    <BenefitCard key={`${item.title}-${i}`}>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </BenefitCard>
                                ))}
                            </BenefitGrid>
                        </Block>

                        <Block id="faq">
                            <h2>Common Questions</h2>
                            <FAQList>
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
                        </Block>
                    </Main>

                    {/* ------------------------ SIDEBAR ------------------------- */}
                    <Sidebar>
                        <SummaryCard>
                            <SummaryHead>Job Summary</SummaryHead>
                            <SummaryBody>
                                <div>
                                    <SummaryRow>
                                        <span>Position</span>
                                        <strong>{job.title}</strong>
                                    </SummaryRow>
                                    <SummaryRow>
                                        <span>Job Type</span>
                                        <strong>{job.type}</strong>
                                    </SummaryRow>
                                    <SummaryRow>
                                        <span>Workplace</span>
                                        <strong>{job.workplace}</strong>
                                    </SummaryRow>
                                    <SummaryRow>
                                        <span>Salary</span>
                                        <strong>
                                            {job.salary}
                                            {job.salaryPeriod}
                                        </strong>
                                    </SummaryRow>
                                    <SummaryRow>
                                        <span>Experience</span>
                                        <strong>{job.experience}</strong>
                                    </SummaryRow>
                                    <SummaryRow>
                                        <span>Location</span>
                                        <strong>{job.location}</strong>
                                    </SummaryRow>
                                </div>

                                <DeadlineNote>
                                    Applications close on <strong>{job.deadline}</strong>.
                                </DeadlineNote>

                                <ApplyButton type="button" $full onClick={openModal}>
                                    {job.cta.buttonText}
                                    <ArrowIcon color="#fff" />
                                </ApplyButton>
                            </SummaryBody>
                        </SummaryCard>
                    </Sidebar>
                </BodyGrid>
            </BodySection>

            {/* --------------------------- RELATED -------------------------- */}
            {relatedJobs.length > 0 && (
                <RelatedSection>
                    <RelatedInner>
                        <Heading>
                            Other <span className="highlightTxt">Openings</span>
                        </Heading>

                        <RelatedGrid>
                            {relatedJobs.map((related) => (
                                <RelatedCard key={related.id} href={`/career/${related.slug}`}>
                                    <div className="top">
                                        <h3>{related.title}</h3>
                                        <Tag>{related.type}</Tag>
                                    </div>
                                    <div className="meta">
                                        <span>
                                            <strong>Salary:</strong> {related.salary}
                                            {related.salaryPeriod}
                                        </span>
                                        <span>
                                            <strong>Deadline:</strong> {related.deadline}
                                        </span>
                                    </div>
                                    <span className="more">
                                        View Details
                                        <ArrowIcon color={COLORS.brandPink} />
                                    </span>
                                </RelatedCard>
                            ))}
                        </RelatedGrid>
                    </RelatedInner>
                </RelatedSection>
            )}

            {/* ----------------------------- CTA ---------------------------- */}
            <CTASection>
                <CTABox>
                    <h2>{job.cta.title}</h2>
                    <p>{job.cta.description}</p>
                    <ApplyButton type="button" onClick={openModal}>
                        {job.cta.buttonText}
                        <ArrowIcon color="#fff" />
                    </ApplyButton>
                </CTABox>
            </CTASection>

            {/* Sticky apply bar on mobile/tablet */}
            <MobileBar>
                <div>
                    <strong>{job.title}</strong>
                    <span>Apply by {job.deadline}</span>
                </div>
                <ApplyButton type="button" onClick={openModal}>
                    Apply
                    <ArrowIcon color="#fff" />
                </ApplyButton>
            </MobileBar>

            <CareerApplyModal isOpen={isModalOpen} onClose={closeModal} jobTitle={job.title} />
        </>
    );
};

export default CareerDetails;