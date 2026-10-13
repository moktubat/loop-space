"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { container } from "@/styles/mixins";
import { COLORS, FONT, BREAKPOINTS } from "@/styles/variables";
import { bodyText } from "@/styles/typography";
import { BlogPost } from "@/data/blogs";

const DetailsWrapper = styled.article`
  padding: 60px 0 120px;
`;

const BreadcrumbNav = styled.div`
  ${container}
  padding: 20px 16px;
  font-family: ${FONT.urbanist};
  font-size: 14px;
  color: ${COLORS.textMuted};
  
  a { 
    color: ${COLORS.textMuted}; 
    text-decoration: none; 
    margin-right: 8px; 
    &:hover { color: ${COLORS.brandPink}; } 
  }
  span { margin: 0 8px; }
`;

const ArticleHeader = styled.header`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 40px 16px 60px;

  span {
    font-family: ${FONT.urbanist};
    color: ${COLORS.brandPink};
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  h1 {
    font-family: ${FONT.helvetica};
    font-size: 48px;
    line-height: 1.1;
    margin: 16px 0;
    color: ${COLORS.textPrimary};
    letter-spacing: -1px;
  }

  p {
    font-family: ${FONT.urbanist};
    color: ${COLORS.textMuted};
    font-size: 18px;
    line-height: 1.6;
  }

  div {
    margin-top: 16px;
    font-size: 14px;
    color: ${COLORS.textMuted};
    font-family: ${FONT.urbanist};
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    h1 {
      font-size: 36px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const FeaturedImageWrapper = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  margin: 20px 0 60px;
  
  @media (max-width: ${BREAKPOINTS.md}px) { 
    height: 400px; 
  }
`;

const ContentSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px 60px;
  
  h2 { 
    font-family: ${FONT.helvetica}; 
    font-size: 32px; 
    margin-bottom: 20px;
    color: ${COLORS.textPrimary};
  }
  p { 
    ${bodyText}
    color: ${COLORS.textMuted}; 
    margin-bottom: 20px;
  }
`;

const SplitSection = styled.section<{ $reverse?: boolean }>`
  ${container}
  display: flex;
  flex-direction: ${props => props.$reverse ? 'row-reverse' : 'row'};
  gap: 48px;
  align-items: center;
  margin-bottom: 80px;
  padding: 0 16px;
  
  @media (max-width: ${BREAKPOINTS.md}px) { 
    flex-direction: column;
    gap: 32px;
  }
`;

const SplitImageWrapper = styled.div`
  flex: 1;
  height: 500px;
  position: relative;
  
  @media (max-width: ${BREAKPOINTS.md}px) { 
    width: 100%;
    height: 350px;
  }
`;

const SplitTextContent = styled.div`
  flex: 1;
  
  h3 { 
    font-family: ${FONT.helvetica}; 
    font-size: 32px; 
    margin-bottom: 16px; 
    color: ${COLORS.textPrimary};
  }
  p { 
    font-size: 18px; 
    color: ${COLORS.textMuted}; 
    margin-bottom: 24px;
    font-family: ${FONT.urbanist};
  }
  ul { 
    list-style: none; 
    padding: 0; 
    li { 
      font-family: ${FONT.urbanist};
      font-size: 16px; 
      margin-bottom: 12px; 
      padding-left: 24px; 
      position: relative; 
      color: ${COLORS.textPrimary};
      &::before { 
        content: '—'; 
        position: absolute; 
        left: 0; 
        color: ${COLORS.brandPink}; 
      } 
    } 
  }
`;

const SectionWrapper = styled.section`
  ${container}
  margin-bottom: 80px;
  padding: 0 16px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-family: ${FONT.helvetica};
  font-size: 36px;
  margin-bottom: 40px;
  color: ${COLORS.textPrimary};
`;

const ProsConsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  background: #F9FAFB;
  padding: 60px;
  border-radius: 12px;
  
  @media (max-width: ${BREAKPOINTS.md}px) { 
    grid-template-columns: 1fr; 
    gap: 40px;
    padding: 40px;
  }
`;

const ProsColumn = styled.div`
  h4 { 
    font-family: ${FONT.urbanist};
    font-size: 20px; 
    margin-bottom: 20px; 
    color: ${COLORS.brandPink};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  ul { 
    list-style: none; 
    padding: 0; 
    li { 
      font-family: ${FONT.urbanist};
      font-size: 18px; 
      margin-bottom: 16px; 
      padding-left: 28px; 
      position: relative; 
      color: ${COLORS.textPrimary};
      &::before { 
        content: '✓'; 
        position: absolute; 
        left: 0; 
        color: ${COLORS.brandPink}; 
        font-weight: bold;
      } 
    } 
  }
`;

const ConsColumn = styled(ProsColumn)`
  h4 { 
    color: ${COLORS.textMuted};
  }
  ul { 
    li { 
      &::before { 
        content: '✗'; 
        color: ${COLORS.textMuted};
      } 
    } 
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  
  table { 
    width: 100%; 
    border-collapse: collapse; 
    
    th, td { 
      border: 1px solid ${COLORS.subtle}; 
      padding: 16px; 
      text-align: left; 
      font-family: ${FONT.urbanist};
      font-size: 16px;
      color: ${COLORS.textPrimary};
    } 
    th { 
      background: #0c0d12; 
      color: white; 
      font-weight: 500;
    } 
    tr:nth-child(even) { 
      background-color: #F9FAFB; 
    } 
  }
`;

const AuthorSection = styled.section`
  ${container}
  background: ${COLORS.brandPink};
  color: white;
  padding: 60px;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 80px;
  
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 40px 20px;
  }
  
  blockquote { 
    font-family: ${FONT.helvetica}; 
    font-size: 28px; 
    font-style: italic; 
    margin-bottom: 32px; 
    line-height: 1.4;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  img {
    object-fit: cover;
    border: 2px solid white;
    flex-shrink: 0;
    width: 68px;
    height: 68px;

    @media (max-width: ${BREAKPOINTS.sm}px) {
      width: 64px;
      height: 64px;
    }
  }

  div {
    text-align: left;

    strong {
      display: block;
      font-size: 18px;
      margin-bottom: 4px;
      font-family: ${FONT.urbanist};
      font-weight: 600;
    }

    p {
      font-size: 14px;
      opacity: 0.9;
      font-family: ${FONT.urbanist};
      margin: 0;
    }
  }
`;

const CTASection = styled.section`
  background: #0c0d12;
  color: white;
  padding: 80px 16px;
  text-align: center;
  margin-bottom: 80px;
  
  h2 { 
    font-family: ${FONT.helvetica}; 
    font-size: 40px; 
    margin-bottom: 16px; 
  }
  p { 
    font-size: 18px; 
    margin-bottom: 32px; 
    color: ${COLORS.subtle}; 
    font-family: ${FONT.urbanist};
  }
`;

const CTAButton = styled.button`
  background: ${COLORS.brandPink};
  color: white;
  border: none;
  padding: 16px 32px;
  font-size: 18px;
  cursor: pointer;
  font-family: ${FONT.urbanist};
  font-weight: 600;
  border-radius: 6px;
  border-left: 2px solid #F8BDD6;
  border-top: 2px solid #F8BDD6;
  border-right: 2px solid #F8BDD6;
  border-bottom: 4px solid #F8BDD6;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const RelatedGrid = styled.div`
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

const RelatedCard = styled.article`
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

const RelatedImageWrapper = styled.div`
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

  ${RelatedCard}:hover & img {
    transform: scale(1.05);
  }
`;

const RelatedContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  flex: 1;
`;

const RelatedMeta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const RelatedPublisher = styled.p`
  font-family: ${FONT.urbanist};
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.brandPink};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const RelatedDate = styled.span`
  font-family: ${FONT.urbanist};
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.textMuted};
`;

const RelatedSeparator = styled.span`
  color: ${COLORS.textMuted};
  font-size: 14px;
`;

const RelatedTitle = styled.h4`
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

const RelatedDetailsButton = styled.span`
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

interface BlogDetailsProps {
  blog: BlogPost;
  relatedPosts: BlogPost[];
}

const BlogDetails = ({ blog, relatedPosts }: BlogDetailsProps) => {
  return (
    <DetailsWrapper>
      <BreadcrumbNav>
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/blog">Blog</Link>
        <span>/</span>
        {blog.category}
      </BreadcrumbNav>

      <ArticleHeader>
        <span>{blog.category}</span>
        <h1>{blog.title}</h1>
        <p>{blog.excerpt}</p>
        <div>{blog.author} · {blog.date} · {blog.readingTime}</div>
      </ArticleHeader>

      <FeaturedImageWrapper>
        <Image
          src={blog.featuredImage}
          alt={blog.title}
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      </FeaturedImageWrapper>

      <ContentSection>
        <h2>Introduction</h2>
        {blog.introduction.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </ContentSection>

      <SplitSection>
        <SplitImageWrapper>
          <Image src={blog.designPrinciples.image} alt={blog.designPrinciples.title} fill style={{ objectFit: "cover" }} sizes="50vw" />
        </SplitImageWrapper>
        <SplitTextContent>
          <h3>{blog.designPrinciples.title}</h3>
          <p>{blog.designPrinciples.description}</p>
          <ul>
            {blog.designPrinciples.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </SplitTextContent>
      </SplitSection>

      <SplitSection $reverse>
        <SplitImageWrapper>
          <Image src={blog.lightingTextures.image} alt={blog.lightingTextures.title} fill style={{ objectFit: "cover" }} sizes="50vw" />
        </SplitImageWrapper>
        <SplitTextContent>
          <h3>{blog.lightingTextures.title}</h3>
          <p>{blog.lightingTextures.description}</p>
          <ul>
            {blog.lightingTextures.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </SplitTextContent>
      </SplitSection>

      <SectionWrapper>
        <SectionTitle>Pros & Cons</SectionTitle>
        <ProsConsGrid>
          <ProsColumn>
            <h4>Pros</h4>
            <ul>
              {blog.pros.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </ProsColumn>
          <ConsColumn>
            <h4>Cons</h4>
            <ul>
              {blog.cons.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </ConsColumn>
        </ProsConsGrid>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Material Comparison</SectionTitle>
        <TableWrapper>
          <table>
            <thead>
              <tr>
                {blog.comparison.headers.map((h, i) => <th key={i}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {blog.comparison.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => <td key={j}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <AuthorSection>
          <blockquote>“{blog.takeaway}”</blockquote>
          <AuthorInfo>
            <Image src={blog.authorImage} alt={blog.author} width={68} height={68} />
            <div>
              <strong>{blog.author}</strong>
              <p>{blog.authorBio}</p>
            </div>
          </AuthorInfo>
        </AuthorSection>
      </SectionWrapper>

      <CTASection>
        <h2>Enjoyed this article?</h2>
        <p>Explore more ideas for your next interior transformation.</p>
        <Link href="/services" passHref>
          <CTAButton>Explore Our Services</CTAButton>
        </Link>
      </CTASection>

      <SectionWrapper>
        <SectionTitle>Related Posts</SectionTitle>

        <RelatedGrid>
          {relatedPosts.map((post) => (
            <RelatedCard key={post.id}>
              <RelatedImageWrapper>
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1320px) 50vw, 25vw"
                />
              </RelatedImageWrapper>

              <RelatedContent>
                <RelatedMeta>
                  <RelatedPublisher>{post.publisher}</RelatedPublisher>
                  <RelatedSeparator>•</RelatedSeparator>
                  <RelatedDate>{post.date}</RelatedDate>
                </RelatedMeta>

                <RelatedTitle>{post.title}</RelatedTitle>

                <RelatedDetailsButton as="span">
                  View Details
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 15 15"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 13.5L13.5 1M13.5 1H1M13.5 1V13.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </RelatedDetailsButton>
              </RelatedContent>
            </RelatedCard>
          ))}
        </RelatedGrid>
      </SectionWrapper>
    </DetailsWrapper>
  );
};

export default BlogDetails;