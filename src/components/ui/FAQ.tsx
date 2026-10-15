"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { COLORS, FONT, BREAKPOINTS } from "@/styles/variables";

export interface FAQItemData {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItemData[];
    defaultOpen?: number | null;
    "data-reveal"?: string;
}

/* ── Styles (exactly matching original) ── */

const List = styled.div`
  border-top: 1px solid ${COLORS.subtle};
`;

const Item = styled.div`
  border-bottom: 1px solid ${COLORS.subtle};
`;

const Question = styled.button<{ $open: boolean }>`
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

const Answer = styled.div<{ $open: boolean }>`
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

/* ── Component ── */

const FAQ = ({ items, defaultOpen = 0, ...rest }: FAQProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

    return (
        <List {...rest}>
            {items.map((item, i) => {
                const open = openIndex === i;
                return (
                    <Item key={`${item.question}-${i}`}>
                        <h3 style={{ margin: 0 }}>
                            <Question
                                type="button"
                                $open={open}
                                aria-expanded={open}
                                aria-controls={`faq-panel-${i}`}
                                id={`faq-btn-${i}`}
                                onClick={() => setOpenIndex(open ? null : i)}
                            >
                                {item.question}
                                <span className="icon" aria-hidden="true" />
                            </Question>
                        </h3>
                        <Answer
                            $open={open}
                            id={`faq-panel-${i}`}
                            role="region"
                            aria-labelledby={`faq-btn-${i}`}
                        >
                            <div>
                                <p>{item.answer}</p>
                            </div>
                        </Answer>
                    </Item>
                );
            })}
        </List>
    );
};

export default FAQ;