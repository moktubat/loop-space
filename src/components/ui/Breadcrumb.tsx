import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { COLORS, FONT } from "@/styles/variables";

export interface BreadcrumbItem {
    label: string;
    href?: string;
    current?: boolean;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    "data-reveal"?: string;
}

const Nav = styled.nav`
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

const Breadcrumb = ({ items, ...rest }: BreadcrumbProps) => (
    <Nav aria-label="Breadcrumb" {...rest}>
        {items.map((item, i) => (
            <React.Fragment key={i}>
                {item.href ? (
                    <Link href={item.href}>{item.label}</Link>
                ) : (
                    <span aria-current={item.current ? "page" : undefined}>
                        {item.label}
                    </span>
                )}
                {i < items.length - 1 && <span aria-hidden="true">/</span>}
            </React.Fragment>
        ))}
    </Nav>
);

export default Breadcrumb;