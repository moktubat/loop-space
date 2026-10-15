"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { COLORS, FONT, BREAKPOINTS } from "@/styles/variables";
import { ArrowIcon } from "./Icons";

export interface BlogCardData {
    id: string;
    slug: string;
    title: string;
    publisher: string;
    date: string;
    thumbnail: string;
}

/* ── Card ── */
const Card = styled.article`
  display: flex;
  flex-direction: column;
  background: ${COLORS.white};
  overflow: hidden;
  border: 1px solid ${COLORS.subtle};
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  will-change: transform;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 28px rgba(29, 31, 44, 0.08);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 320px;
  position: relative;
  overflow: hidden;

  @media (max-width: ${BREAKPOINTS.md}px) {
    height: 220px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    height: 240px;
  }

  img {
    object-fit: cover;
    object-position: center;
    transform: translateZ(0);
    transition: transform 0.6s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.02);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  flex: 1;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const Publisher = styled.p`
  font-family: ${FONT.urbanist};
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.brandPink};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const Separator = styled.span`
  color: ${COLORS.textMuted};
  font-size: 14px;
`;

const Date = styled.span`
  font-family: ${FONT.urbanist};
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.textMuted};
`;

const Title = styled.h3`
  font-family: ${FONT.helvetica};
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
  color: ${COLORS.textPrimary};
  margin: 0;
  letter-spacing: -0.4px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    font-size: 20px;
    line-height: 26px;
  }
`;

const DetailsButton = styled.button`
  margin-top: auto;
  padding: 10px 14px;
  border-radius: 6px;
  background: #fff;
  border-left: 2px solid ${COLORS.brandPink};
  border-top: 2px solid ${COLORS.brandPink};
  border-right: 2px solid ${COLORS.brandPink};
  border-bottom: 4px solid ${COLORS.brandPink};
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  align-self: flex-start;

  font-family: ${FONT.urbanist};
  font-size: 15px;
  line-height: 22px;
  font-weight: 600;
  color: ${COLORS.brandPink};
  transition: transform 0.25s ease;

  svg {
    stroke: ${COLORS.brandPink};
  }

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 100%;
    justify-content: center;
    gap: 8px;
  }
`;

/* ── Component ── */
interface BlogCardProps {
    post: BlogCardData;
    className?: string;
    ref?: React.Ref<HTMLElement>;
}

const BlogCard = React.forwardRef<HTMLElement, BlogCardProps>(
    ({ post, className }, ref) => (
        <Card ref={ref} className={className}>
            <ImageWrapper className="blog-img-wrapper">
                <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1320px) 50vw, 25vw"
                />
            </ImageWrapper>

            <Content>
                <Meta>
                    <Publisher>{post.publisher}</Publisher>
                    <Separator>•</Separator>
                    <Date>{post.date}</Date>
                </Meta>
                <Title>{post.title}</Title>

                <Link href={`/blog/${post.slug}`} passHref>
                    <DetailsButton>
                        View Details
                        <ArrowIcon size={13} color={COLORS.brandPink} />
                    </DetailsButton>
                </Link>
            </Content>
        </Card>
    )
);

BlogCard.displayName = "BlogCard";
export default BlogCard;