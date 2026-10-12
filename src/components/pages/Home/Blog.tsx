"use client";

import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/ui/Heading";
import { container } from "@/styles/mixins";
import { COLORS, FONT } from "@/styles/variables";
import { BREAKPOINTS } from "@/styles/variables";
import { bodyText } from "@/styles/typography";

import { blogs } from "@/data/blogs"; // Import from data file

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ---------------------------------- */
/* Styled Components                  */
/* ---------------------------------- */

const BlogSection = styled.section`
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
    transform: translateZ(0);
    transition: transform 0.6s ease;
    will-change: auto;
  }

  ${BlogCard}:hover & img {
    transform: scale(1.02);
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

/* ---------------------------------- */
/* Component                          */
/* ---------------------------------- */

const Blog = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLElement | null)[]>([]);

    useLayoutEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            const intro = sectionRef.current?.querySelector(".intro-animate");
            const cards = cardsRef.current.filter(Boolean) as HTMLElement[];

            if (intro) {
                gsap.fromTo(
                    intro,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        immediateRender: false,
                        scrollTrigger: { trigger: intro, start: "top 85%" },
                    }
                );
            }

            gsap.fromTo(
                cards,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    immediateRender: false,
                    scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
                }
            );

            const imageWrappers = gsap.utils.toArray<HTMLElement>(".blog-img-wrapper");
            imageWrappers.forEach((wrapper) => {
                gsap.fromTo(
                    wrapper,
                    { clipPath: "inset(0 0 100% 0)" },
                    {
                        clipPath: "inset(0 0 0% 0)",
                        duration: 1.2,
                        ease: "power3.out",
                        immediateRender: false,
                        scrollTrigger: { trigger: wrapper, start: "top 85%", toggleActions: "play none none reverse" },
                    }
                );

                const img = wrapper.querySelector("img");
                if (img) {
                    gsap.fromTo(
                        img,
                        { scale: 1.03 },
                        {
                            scale: 1,
                            duration: 1.2,
                            ease: "power3.out",
                            immediateRender: false,
                            scrollTrigger: { trigger: wrapper, start: "top 85%", toggleActions: "play none none reverse" },
                        }
                    );
                }
            });
        }, sectionRef);

        ScrollTrigger.refresh();
        return () => ctx.revert();
    }, []);

    return (
        <BlogSection ref={sectionRef}>
            <BlogContainer>
                <IntroBlock>
                    <Heading className="intro-animate">
                        Latest <span className="highlightTxt">Blog</span>
                    </Heading>
                    <DescriptionText className="intro-animate">
                        Read our latest insights, design tips, and stories from the world
                        of interior design — curated by our team and featured in leading
                        publications.
                    </DescriptionText>
                </IntroBlock>

                <BlogGrid>
                    {blogs.map((post, index) => (
                        <BlogCard
                            key={post.id}
                            ref={(el) => { if (el) cardsRef.current[index] = el; }}
                        >
                            <BlogImageWrapper className="blog-img-wrapper">
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
        </BlogSection>
    );
};

export default Blog;