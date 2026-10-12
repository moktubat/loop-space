"use client";

import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/ui/Heading";
import { container } from "@/styles/mixins";
import { COLORS, FONT, BREAKPOINTS } from "@/styles/variables";
import { bodyText } from "@/styles/typography";
import { blogs, blogCategories } from "@/data/blogs";

const PageWrapper = styled.section`
  background-color: #f9fafb;
  padding: 100px 16px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding: 60px 16px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 40px 16px;
  }
`;

const BlogContainer = styled.div`
  ${container};
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const IntroBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 10px;
`;

const DescriptionText = styled.p`
  ${bodyText};
  max-width: 900px;
  color: ${COLORS.textMuted};
  margin: 0;
`;

const CategoryFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 12px;
  margin-bottom: 20px;
`;

const CategoryButton = styled.button<{ $active?: boolean }>`
  padding: 8px 20px;
  border-radius: 50px;
  border: 1px solid ${COLORS.subtle};
  background: ${({ $active }) => ($active ? COLORS.brandPink : COLORS.white)};
  color: ${({ $active }) => ($active ? COLORS.white : COLORS.textPrimary)};
  font-family: ${FONT.urbanist};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${COLORS.brandPink};
    color: ${COLORS.white};
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const BlogCard = styled.article`
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

const BlogImageWrapper = styled.div`
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
    transition: transform 0.6s ease;
  }

  ${BlogCard}:hover & img {
    transform: scale(1.05);
  }
`;

const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  flex: 1;
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

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const BlogDate = styled.span`
  font-family: ${FONT.urbanist};
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.textMuted};
`;

const MetaSeparator = styled.span`
  color: ${COLORS.textMuted};
  font-size: 14px;
`;

const BlogTitle = styled.h3`
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
  border-left: 2px solid #ea2b7b;
  border-top: 2px solid #ea2b7b;
  border-right: 2px solid #ea2b7b;
  border-bottom: 4px solid #ea2b7b;
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
  color: #ea2b7b;
  transition: transform 0.25s ease;

  svg {
    stroke: #ea2b7b;
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

const BlogList = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredBlogs = activeCategory === "All"
        ? blogs
        : blogs.filter((blog) => blog.category === activeCategory);

    return (
        <PageWrapper>
            <BlogContainer>
                <IntroBlock>
                    <Heading>
                        Our <span className="highlightTxt">Blog</span>
                    </Heading>
                    <DescriptionText>
                        Read our latest insights, design tips, and stories from the world
                        of interior design — curated by our team and featured in leading
                        publications.
                    </DescriptionText>
                </IntroBlock>

                <CategoryFilter>
                    {blogCategories.map((category) => (
                        <CategoryButton
                            key={category}
                            $active={activeCategory === category}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </CategoryButton>
                    ))}
                </CategoryFilter>

                <BlogGrid>
                    {filteredBlogs.map((post) => (
                        <BlogCard key={post.id}>
                            <BlogImageWrapper>
                                <Image
                                    src={post.thumbnail}
                                    alt={post.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1320px) 50vw, 25vw"
                                />
                            </BlogImageWrapper>
                            <BlogContent>
                                <BlogMeta>
                                    <Publisher>{post.publisher}</Publisher>
                                    <MetaSeparator>•</MetaSeparator>
                                    <BlogDate>{post.date}</BlogDate>
                                </BlogMeta>
                                <BlogTitle>{post.title}</BlogTitle>
                                <Link href={`/blog/${post.slug}`} passHref>
                                    <DetailsButton>
                                        View Details
                                        <svg width="13" height="13" viewBox="0 0 15 15" fill="none">
                                            <path d="M1 13.5L13.5 1M13.5 1H1M13.5 1V13.5" stroke="#EA2B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </DetailsButton>
                                </Link>
                            </BlogContent>
                        </BlogCard>
                    ))}
                </BlogGrid>
            </BlogContainer>
        </PageWrapper>
    );
};

export default BlogList;