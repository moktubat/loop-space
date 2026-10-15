"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { COLORS, FONT, BREAKPOINTS } from "@/styles/variables";
import { Stars } from "./Icons";

/* ── Card ── */
export const Card = styled.blockquote`
  margin: 0;
  padding: 28px;
  background: ${COLORS.surfaceLight};
  border: 1px solid ${COLORS.subtle};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 20px;
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
`;

/* ── Footer (author row) ── */
const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid ${COLORS.subtle};

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
  }

  strong {
    display: block;
    font-family: ${FONT.urbanist};
    font-size: 20px;
    font-weight: 600;
    color: ${COLORS.textPrimary};
  }

  span {
    font-family: ${FONT.urbanist};
    font-size: 16px;
    color: ${COLORS.textMuted};
  }
`;

/* ── Grid wrapper ── */
export const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

/* ── Data interface ── */
export interface TestimonialData {
    name: string;
    role: string;
    quote: string;
    image?: string;
    rating: number;
}

/* ── Component ── */
interface TestimonialCardProps {
    testimonial: TestimonialData;
    "data-stagger"?: string;
}

const TestimonialCard = ({
    testimonial: t,
    ...rest
}: TestimonialCardProps) => (
    <Card data-stagger={(rest as any)["data-stagger"]}>
        <div>
            <Stars rating={t.rating} />
            <p>{t.quote}</p>
        </div>
        <Footer>
            {t.image && (
                <Image src={t.image} alt="" width={56} height={56} />
            )}
            <div>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
            </div>
        </Footer>
    </Card>
);

export default TestimonialCard;