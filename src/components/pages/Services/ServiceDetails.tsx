
"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { container } from "@/styles/mixins";
import { COLORS, FONT, BREAKPOINTS } from "@/styles/variables";
import { bodyText } from "@/styles/typography";
import type { Service } from "@/data/services";

const DetailsWrapper = styled.article`
  padding: 0 0 100px;
  overflow: hidden;
`;

const BreadcrumbNav = styled.nav`
  ${container}
  padding: 24px 16px;
  font-family: ${FONT.urbanist};
  font-size: 14px;
  color: ${COLORS.textMuted};

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;

  a {
    color: ${COLORS.textMuted};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${COLORS.brandPink};
    }
  }

  span {
    color: ${COLORS.textMuted};
  }
`;

const Eyebrow = styled.span`
  display: inline-block;
  color: ${COLORS.brandPink};
  font-family: ${FONT.urbanist};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 16px;
`;

const HeroContent = styled.header`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 24px 48px;
  text-align: center;

  h1 {
    font-family: ${FONT.helvetica};
    font-size: clamp(42px, 6vw, 84px);
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: -0.045em;
    color: ${COLORS.textPrimary};
    margin: 0 0 24px;
  }

  p {
    max-width: 760px;
    margin: 0 auto;
    font-family: ${FONT.urbanist};
    font-size: 20px;
    line-height: 1.7;
    color: ${COLORS.textMuted};
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 36px 20px 32px;

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const HeroImage = styled.div`
  width: 100%;
  height: min(650px, 60vw);
  min-height: 300px;
  position: relative;
  overflow: hidden;
  background: ${COLORS.lightGray};

  img {
    object-fit: cover;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      0deg,
      rgba(12, 13, 18, 0.18),
      transparent 45%
    );
    pointer-events: none;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    height: 420px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    height: 320px;
    min-height: 0;
  }
`;

const Section = styled.section`
  ${container}
  padding: 0 24px;
  margin: 110px auto 0;

  @media (max-width: ${BREAKPOINTS.md}px) {
    margin-top: 76px;
    padding: 0 20px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    margin-top: 60px;
    padding: 0 16px;
  }
`;

const SectionHeading = styled.div`
  max-width: 760px;
  margin: 0 auto 48px;
  text-align: center;

  h2 {
    font-family: ${FONT.helvetica};
    font-size: clamp(32px, 4vw, 52px);
    font-weight: 400;
    line-height: 1.12;
    letter-spacing: -0.035em;
    color: ${COLORS.textPrimary};
    margin: 0 0 18px;
  }

  p {
    ${bodyText}
    font-size: 18px;
    line-height: 1.75;
    color: ${COLORS.textMuted};
    margin: 0;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    margin-bottom: 32px;

    p {
      font-size: 16px;
    }
  }
`;

const SplitSection = styled.section<{ $reverse?: boolean }>`
  ${container}
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  align-items: center;
  gap: clamp(32px, 5vw, 80px);
  margin: 110px auto 0;
  padding: 0 24px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    flex-direction: column;
    align-items: stretch;
    gap: 32px;
    margin-top: 76px;
    padding: 0 20px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    margin-top: 60px;
    padding: 0 16px;
  }
`;

const SplitImage = styled.div`
  flex: 1;
  min-width: 0;
  height: 560px;
  position: relative;
  overflow: hidden;
  background: ${COLORS.lightGray};

  img {
    object-fit: cover;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    height: 420px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    height: 320px;
  }
`;

const SplitContent = styled.div`
  flex: 1;
  min-width: 0;

  h2 {
    font-family: ${FONT.helvetica};
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 400;
    line-height: 1.12;
    letter-spacing: -0.035em;
    color: ${COLORS.textPrimary};
    margin: 0 0 24px;
  }

  p {
    font-family: ${FONT.urbanist};
    font-size: 18px;
    line-height: 1.8;
    color: ${COLORS.textMuted};
    margin: 0 0 20px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    p {
      font-size: 16px;
    }
  }
`;

const CheckList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 28px 0 0;
  display: grid;
  gap: 16px;

  li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-family: ${FONT.urbanist};
    font-size: 16px;
    line-height: 1.6;
    color: ${COLORS.textPrimary};
  }

  li::before {
    content: "✓";
    flex-shrink: 0;
    color: ${COLORS.brandPink};
    font-weight: 700;
  }
`;

const OfferGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const OfferCard = styled.article`
  padding: 30px;
  border: 1px solid ${COLORS.subtle};
  background: ${COLORS.white};
  transition:
    border-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    border-color: ${COLORS.brandPink};
    transform: translateY(-4px);
  }

  h3 {
    font-family: ${FONT.helvetica};
    font-size: 23px;
    font-weight: 400;
    line-height: 1.3;
    color: ${COLORS.textPrimary};
    margin: 0 0 14px;
  }

  p {
    font-family: ${FONT.urbanist};
    font-size: 16px;
    line-height: 1.75;
    color: ${COLORS.textMuted};
    margin: 0;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 24px;
  }
`;

const OfferImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  margin-bottom: 22px;
  overflow: hidden;
  background: ${COLORS.lightGray};

  img {
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${OfferCard}:hover & img {
    transform: scale(1.04);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ProjectCard = styled.article`
  min-width: 0;

  a {
    color: inherit;
    text-decoration: none;
  }

  h3 {
    font-family: ${FONT.helvetica};
    font-size: 25px;
    font-weight: 400;
    color: ${COLORS.textPrimary};
    margin: 12px 0 8px;
  }

  p {
    font-family: ${FONT.urbanist};
    font-size: 14px;
    color: ${COLORS.textMuted};
    margin: 0;
  }
`;

const ProjectImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1.35;
  overflow: hidden;
  background: ${COLORS.lightGray};

  img {
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.04);
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-rows: 100px;
  gap: 16px;

  > div:nth-child(4n + 1) {
    grid-column: span 7;
    grid-row: span 4;
  }

  > div:nth-child(4n + 2) {
    grid-column: span 5;
    grid-row: span 3;
  }

  > div:nth-child(4n + 3) {
    grid-column: span 5;
    grid-row: span 3;
  }

  > div:nth-child(4n) {
    grid-column: span 7;
    grid-row: span 4;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-auto-rows: 75px;
    gap: 12px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: auto;

    > div {
      grid-column: auto !important;
      grid-row: auto !important;
      aspect-ratio: 1 / 1.15;
    }
  }
`;

const GalleryItem = styled.div`
  position: relative;
  min-width: 0;
  overflow: hidden;
  background: ${COLORS.lightGray};

  img {
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const ProcessCard = styled.article`
  padding-top: 24px;
  border-top: 1px solid ${COLORS.subtle};

  > span {
    display: block;
    color: ${COLORS.brandPink};
    font-family: ${FONT.urbanist};
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  h3 {
    font-family: ${FONT.helvetica};
    font-size: 23px;
    font-weight: 400;
    line-height: 1.3;
    color: ${COLORS.textPrimary};
    margin: 0 0 14px;
  }

  p {
    font-family: ${FONT.urbanist};
    font-size: 16px;
    line-height: 1.75;
    color: ${COLORS.textMuted};
    margin: 0;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 48px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const BenefitCard = styled.article`
  padding: 28px 0;
  border-top: 1px solid ${COLORS.subtle};

  h3 {
    font-family: ${FONT.helvetica};
    font-size: 24px;
    font-weight: 400;
    color: ${COLORS.textPrimary};
    margin: 0 0 12px;
  }

  p {
    font-family: ${FONT.urbanist};
    font-size: 16px;
    line-height: 1.8;
    color: ${COLORS.textMuted};
    margin: 0;
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.blockquote`
  margin: 0;
  padding: 32px;
  background: ${COLORS.lightGray};

  > span {
    display: block;
    color: ${COLORS.brandPink};
    letter-spacing: 3px;
    font-size: 17px;
    margin-bottom: 20px;
  }

  > p {
    font-family: ${FONT.urbanist};
    font-size: 18px;
    line-height: 1.8;
    color: ${COLORS.textPrimary};
    margin: 0 0 28px;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  footer img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
  }

  footer h3 {
    font-family: ${FONT.urbanist};
    font-size: 16px;
    font-weight: 700;
    color: ${COLORS.textPrimary};
    margin: 0 0 4px;
  }

  footer p {
    font-family: ${FONT.urbanist};
    font-size: 14px;
    color: ${COLORS.textMuted};
    margin: 0;
  }
`;

const FAQList = styled.div`
  max-width: 900px;
  margin: 0 auto;
  border-top: 1px solid ${COLORS.subtle};
`;

const FAQItem = styled.details`
  border-bottom: 1px solid ${COLORS.subtle};

  summary {
    position: relative;
    list-style: none;
    cursor: pointer;
    padding: 24px 44px 24px 0;
    font-family: ${FONT.urbanist};
    font-size: 19px;
    font-weight: 600;
    line-height: 1.5;
    color: ${COLORS.textPrimary};
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::after {
    content: "+";
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    color: ${COLORS.brandPink};
    font-size: 28px;
    font-weight: 400;
  }

  &[open] summary::after {
    content: "−";
  }

  > p {
    font-family: ${FONT.urbanist};
    font-size: 16px;
    line-height: 1.8;
    color: ${COLORS.textMuted};
    margin: -4px 36px 24px 0;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    summary {
      font-size: 17px;
    }
  }
`;

const CTASection = styled.section`
  margin: 110px 0 0;
  padding: 100px 24px;
  background: ${COLORS.bgDark};
  color: ${COLORS.white};
  text-align: center;

  h2 {
    max-width: 850px;
    margin: 0 auto 20px;
    font-family: ${FONT.helvetica};
    font-size: clamp(34px, 5vw, 64px);
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.035em;
  }

  p {
    max-width: 650px;
    margin: 0 auto 32px;
    font-family: ${FONT.urbanist};
    font-size: 18px;
    line-height: 1.8;
    color: ${COLORS.subtle};
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    margin-top: 60px;
    padding: 64px 20px;

    p {
      font-size: 16px;
    }
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 16px 28px;
  border: 1px solid ${COLORS.brandPink};
  border-radius: 4px;
  background: ${COLORS.brandPink};
  color: ${COLORS.white};
  text-decoration: none;
  font-family: ${FONT.urbanist};
  font-size: 16px;
  font-weight: 700;
  transition:
    background 0.25s ease,
    transform 0.25s ease;

  &:hover {
    background: ${COLORS.brandPinkHover};
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 2px solid ${COLORS.white};
    outline-offset: 4px;
  }
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const RelatedCard = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${COLORS.subtle};
  background: ${COLORS.white};
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${COLORS.brandPink};
  }
`;

const RelatedImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1.4;
  overflow: hidden;
  background: ${COLORS.lightGray};

  img {
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${RelatedCard}:hover & img {
    transform: scale(1.04);
  }
`;

const RelatedContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 14px;

  h3 {
    font-family: ${FONT.helvetica};
    font-size: 23px;
    line-height: 1.3;
    font-weight: 400;
    color: ${COLORS.textPrimary};
    margin: 0;
  }
`;

const RelatedDescription = styled.p`
  font-family: ${FONT.urbanist};
  font-size: 15px;
  line-height: 1.7;
  color: ${COLORS.textMuted};
  margin: 0;
`;

const RelatedButton = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
  padding-top: 8px;
  font-family: ${FONT.urbanist};
  font-size: 15px;
  font-weight: 700;
  color: ${COLORS.brandPink};
`;

interface ServiceDetailsProps {
    service: Service;
    relatedServices: Service[];
}

const ServiceDetails = ({
    service,
    relatedServices,
}: ServiceDetailsProps) => {
    return (
        <DetailsWrapper>
            {/* Breadcrumbs */}
            <BreadcrumbNav aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <Link href="/services">Services</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{service.title}</span>
            </BreadcrumbNav>

            {/* 1. Service Hero */}
            <HeroContent>
                <Eyebrow>Our Services</Eyebrow>
                <h1>{service.title}</h1>
                <p>{service.hero.description}</p>
            </HeroContent>

            <HeroImage>
                <Image
                    src={service.hero.image}
                    alt={service.hero.imageAlt}
                    fill
                    priority
                    sizes="100vw"
                />
            </HeroImage>

            {/* 2. Overview */}
            <SplitSection>
                <SplitImage>
                    <Image
                        src={service.overview.image}
                        alt={service.overview.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </SplitImage>

                <SplitContent>
                    <Eyebrow>Overview</Eyebrow>
                    <h2>{service.overview.heading}</h2>

                    {service.overview.description.map((paragraph, index) => (
                        <p key={`${service.slug}-overview-${index}`}>
                            {paragraph}
                        </p>
                    ))}

                    <CheckList>
                        {service.points.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </CheckList>
                </SplitContent>
            </SplitSection>

            {/* 3. What We Offer */}
            <Section>
                <SectionHeading>
                    <Eyebrow>Our Expertise</Eyebrow>
                    <h2>What We Offer</h2>
                    <p>
                        Explore our tailored solutions, designed around your
                        requirements, preferences, and project goals.
                    </p>
                </SectionHeading>

                <OfferGrid>
                    {service.offers.map((offer, index) => (
                        <OfferCard key={`${offer.title}-${index}`}>
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
            </Section>

            {/* 4. Featured Projects */}
            <Section>
                <SectionHeading>
                    <Eyebrow>Selected Work</Eyebrow>
                    <h2>Featured {service.title} Projects</h2>
                    <p>
                        Discover selected projects that demonstrate our approach
                        to design, functionality, and attention to detail.
                    </p>
                </SectionHeading>

                <ProjectGrid>
                    {service.featuredProjects.map((project) => (
                        <ProjectCard key={project.slug}>
                            <Link href={`/projects/${project.slug}`}>
                                <ProjectImage>
                                    <Image
                                        src={project.image}
                                        alt={project.imageAlt}
                                        fill
                                        sizes="(max-width: 480px) 100vw, 50vw"
                                    />
                                </ProjectImage>

                                <h3>{project.title}</h3>
                                <p>
                                    {project.category} · {project.location}
                                </p>
                            </Link>
                        </ProjectCard>
                    ))}
                </ProjectGrid>
            </Section>

            {/* 5. Gallery */}
            <Section>
                <SectionHeading>
                    <Eyebrow>Visual Highlights</Eyebrow>
                    <h2>Design Gallery</h2>
                    <p>
                        A closer look at the spaces, materials, and details that
                        inspire our work.
                    </p>
                </SectionHeading>

                <GalleryGrid>
                    {service.gallery.map((item, index) => (
                        <GalleryItem key={`${item.imageAlt}-${index}`}>
                            <Image
                                src={item.image}
                                alt={item.imageAlt}
                                fill
                                sizes="(max-width: 480px) 50vw, (max-width: 1024px) 50vw, 60vw"
                            />
                        </GalleryItem>
                    ))}
                </GalleryGrid>
            </Section>

            {/* 6. Design Process */}
            <Section>
                <SectionHeading>
                    <Eyebrow>How We Work</Eyebrow>
                    <h2>Our Design Process</h2>
                    <p>
                        A considered approach that takes your project from the
                        initial conversation through design development and delivery.
                    </p>
                </SectionHeading>

                <ProcessGrid>
                    {service.process.map((item) => (
                        <ProcessCard key={item.step}>
                            <span>{item.step}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </ProcessCard>
                    ))}
                </ProcessGrid>
            </Section>

            {/* 7. Why Choose Us */}
            <Section>
                <SectionHeading>
                    <Eyebrow>Our Difference</Eyebrow>
                    <h2>Why Choose Us</h2>
                    <p>
                        We combine thoughtful planning, a tailored approach, and
                        careful attention to detail to create meaningful spaces.
                    </p>
                </SectionHeading>

                <BenefitsGrid>
                    {service.benefits.map((benefit) => (
                        <BenefitCard key={benefit.title}>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </BenefitCard>
                    ))}
                </BenefitsGrid>
            </Section>

            {/* 8. Client Testimonials */}
            {service.testimonials.length > 0 && (
                <Section>
                    <SectionHeading>
                        <Eyebrow>Client Experiences</Eyebrow>
                        <h2>What Our Clients Say</h2>
                        <p>
                            Every project is a collaboration. Here are some
                            experiences shared by our clients.
                        </p>
                    </SectionHeading>

                    <TestimonialGrid>
                        {service.testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={`${testimonial.name}-${index}`}
                            >
                                <span
                                    aria-label={`${testimonial.rating} out of 5 stars`}
                                    role="img"
                                >
                                    {"★".repeat(
                                        Math.max(0, Math.min(5, testimonial.rating))
                                    )}
                                </span>

                                <p>“{testimonial.quote}”</p>

                                <footer>
                                    {testimonial.image && (
                                        <Image
                                            src={testimonial.image}
                                            alt=""
                                            width={48}
                                            height={48}
                                        />
                                    )}

                                    <div>
                                        <h3>{testimonial.name}</h3>
                                        <p>{testimonial.role}</p>
                                    </div>
                                </footer>
                            </TestimonialCard>
                        ))}
                    </TestimonialGrid>
                </Section>
            )}

            {/* 9. FAQs */}
            <Section>
                <SectionHeading>
                    <Eyebrow>Need to Know</Eyebrow>
                    <h2>Frequently Asked Questions</h2>
                    <p>
                        Find answers to common questions about our {service.title.toLowerCase()}{" "}
                        services and how we work.
                    </p>
                </SectionHeading>

                <FAQList>
                    {service.faqs.map((faq, index) => (
                        <FAQItem key={`${faq.question}-${index}`}>
                            <summary>{faq.question}</summary>
                            <p>{faq.answer}</p>
                        </FAQItem>
                    ))}
                </FAQList>
            </Section>

            {/* 10. Final CTA */}
            <CTASection>
                <Eyebrow>{service.title}</Eyebrow>
                <h2>{service.cta.title}</h2>
                <p>{service.cta.description}</p>

                <CTAButton href={service.cta.buttonLink}>
                    {service.cta.buttonText}
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M3 13L13 3M13 3H4M13 3V12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </CTAButton>
            </CTASection>

            {/* 11. Other Services */}
            {relatedServices.length > 0 && (
                <Section>
                    <SectionHeading>
                        <Eyebrow>Explore More</Eyebrow>
                        <h2>Other Services</h2>
                        <p>
                            Discover more ways we can help bring your next project
                            to life.
                        </p>
                    </SectionHeading>

                    <RelatedGrid>
                        {relatedServices.map((related) => (
                            <Link
                                href={`/services/${related.slug}`}
                                key={related.id}
                                style={{
                                    textDecoration: "none",
                                    display: "block",
                                    height: "100%",
                                }}
                            >
                                <RelatedCard>
                                    <RelatedImage>
                                        <Image
                                            src={related.cardImage}
                                            alt={related.title}
                                            fill
                                            sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </RelatedImage>

                                    <RelatedContent>
                                        <h3>{related.title}</h3>
                                        <RelatedDescription>
                                            {related.excerpt}
                                        </RelatedDescription>

                                        <RelatedButton>
                                            Explore Service
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 15 15"
                                                fill="none"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M1 13.5L13.5 1M13.5 1H1M13.5 1V13.5"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </RelatedButton>
                                    </RelatedContent>
                                </RelatedCard>
                            </Link>
                        ))}
                    </RelatedGrid>
                </Section>
            )}
        </DetailsWrapper>
    );
};

export default ServiceDetails;
