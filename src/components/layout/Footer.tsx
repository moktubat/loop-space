"use client";

import styled, { css } from "styled-components";

import { BREAKPOINTS } from "@/styles/variables";
import { container } from "@/styles/mixins";
import { COLORS, FONT } from "@/styles/variables";

import FooterLogo from "@/assets/footerLogo.svg";
import Link from "next/link";

/* Shared Typography */

const textBase = css`
  font-family: ${FONT.urbanist};
  margin: 0;
`;

const TitleText = styled.h3`
  ${textBase};
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: ${COLORS.white};
`;

const BodyText = styled.p`
  ${textBase};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.subtle};
`;

const LinkText = styled.a`
  ${textBase};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.subtle};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${COLORS.brandPink};
  }
`;

/* Layout Containers */

const FooterContainer = styled.footer`
  width: 100%;
  background: ${COLORS.bgDark};
  padding: 60px 16px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding: 50px 16px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 40px 16px;
  }
`;

const FooterContent = styled.div`
  ${container}
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  margin-bottom: 40px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InfoSection = styled(Section)`
  gap: 8px;
`;

/* Logo */

const Logo = styled.div`
  width: 256px;
  height: 62.5px;
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 200px;
    height: 48px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 160px;
    height: 38px;
  }
`;

/* List Group */

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

/* Divider */

const Divider = styled.hr`
  ${container}
  border: none;
  border-top: 1px solid ${COLORS.subtleBorder};
  width: 100%;
`;

/* Bottom Area */

const FooterBottom = styled.div`
  ${container}
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.md}px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const SocialIcon = styled.a`
  width: 44px;
  height: 44px;
  background: ${COLORS.white};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${COLORS.brandPink};
    transform: translateY(-2px);
  }

  svg {
    width: 24px;
    height: 24px;
    fill: ${COLORS.bgDark};
  }

  &:hover svg {
    fill: ${COLORS.white};
  }
`;

/* Component */

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        {/* Column 1 */}
        <Section>
          <Logo>
            <Link href="/">
              <FooterLogo />
            </Link>
          </Logo>

          <TitleText style={{ marginTop: "60px" }}>Documentation</TitleText>

          <List>
            <LinkText href="#company-deck">Company Deck</LinkText>
            <LinkText href="#terms">Terms of Services</LinkText>
          </List>
        </Section>

        {/* Column 2 */}
        <Section>
          <TitleText>Quick Links</TitleText>

          <List>
            <LinkText href="/">Home</LinkText>
            <LinkText href="about">About Us</LinkText>
            <LinkText href="services">Our Services</LinkText>
            <LinkText href="works">Our Works</LinkText>
            <LinkText href="gallery">Gallery</LinkText>
            <LinkText href="contact">Contact Us</LinkText>
          </List>
        </Section>

        {/* Column 3 */}
        <InfoSection>
          <TitleText>Address:</TitleText>
          <BodyText>440 Parker Rd. Allentown, New Mexico 31134</BodyText>

          <TitleText style={{ marginTop: "26px" }}>Email:</TitleText>
          <LinkText href="mailto:info@loopspace.xyz">info@loopspace.xyz</LinkText>

          <TitleText style={{ marginTop: "26px" }}>Phone:</TitleText>
          <LinkText href="tel:+8801621507890">+8801621507890</LinkText>
        </InfoSection>
      </FooterContent>

      <Divider />

      <FooterBottom>
        <BodyText>© Loop Space Studio — {year}. All Rights Reserved</BodyText>

        <SocialWrapper>
          {/* Facebook */}
          <SocialIcon href="#facebook" aria-label="Facebook"> <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /> </svg> </SocialIcon>

          {/* Twitter */}
          <SocialIcon href="#twitter" aria-label="Twitter"> <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> </svg> </SocialIcon>

          {/* LinkedIn */}
          <SocialIcon href="#linkedin" aria-label="LinkedIn"> <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> </svg> </SocialIcon>

          {/* Instagram */}
          <SocialIcon href="#instagram" aria-label="Instagram"> <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /> </svg> </SocialIcon>
        </SocialWrapper>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;