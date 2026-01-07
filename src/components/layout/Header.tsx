"use client";

import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

import HeaderLogo from "@/assets/headerLogo.svg";
import { BREAKPOINTS } from "@/styles/variables";
import { container } from "@/styles/mixins";
import { FONT, Z, COLORS } from "@/styles/variables";
import Link from "next/link";

/* Styled Components */

const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px 16px;
`;

const Nav = styled.nav`
  ${container}
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: ${Z.top};
`;

const Logo = styled.div`
  width: 256px;
  height: 62.5px;
  display: flex;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 200px;
    height: 48px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 160px;
    height: 38px;
  }
`;

const NavLinks = styled.div<{ $open?: boolean }>`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: ${BREAKPOINTS.md}px}) {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 300px;
    background: ${COLORS.white};
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    box-shadow: -2px 0 10px rgba(0,0,0,0.1);
    z-index: ${Z.nav};
    transition: right 0.5s ease;
    ${(p) => p.$open && "right: 0;"}
  }

  @media (max-width: ${BREAKPOINTS.sm}px}) {
    width: 250px;
  }
`;

const NavLink = styled.a`
  font-family: ${FONT.urbanist};
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: ${COLORS.textMuted};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${COLORS.brandPink};
  }

  @media (max-width: ${BREAKPOINTS.md}px}) {
    font-size: 24px;
  }
`;

const ContactButton = styled.a`
  background: #EA2B7B;
  border-radius: 6px;
  padding: 8px 16px;
  border-left: 2px solid #F8BDD6;
  border-top: 2px solid #F8BDD6;
  border-right: 2px solid #F8BDD6;
  border-bottom: 4px solid #F8BDD6;

  color: #FFF;
  font-family: ${FONT.urbanist};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  cursor: pointer;
`;

const MenuButton = styled.button`
  display: none;
  border: none;
  background: none;
  cursor: pointer;
  z-index: ${Z.top};

  @media (max-width: ${BREAKPOINTS.md}px}) {
    display: block;
  }
`;

const MenuIcon = styled.div<{ $isOpen: boolean }>`
  width: 30px;
  height: 2px;
  background: ${COLORS.textMuted};
  position: relative;
  transition: 0.3s ease;

  &::before,
  &::after {
    content: "";
    width: 30px;
    height: 2px;
    background: ${COLORS.textMuted};
    position: absolute;
    transition: 0.3s ease;
  }

  &::before { top: -8px; }
  &::after { top: 8px; }

  ${({ $isOpen }) =>
    $isOpen &&
    `
    background: transparent;
    &::before {
      top: 0; 
      transform: rotate(45deg);
    }
    &::after {
      top: 0;
      transform: rotate(-45deg);
    }
  `}
`;

const Overlay = styled.div<{ $visible: boolean }>`
  display: none;

  @media (max-width: ${BREAKPOINTS.md}px}) {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    opacity: ${(p) => (p.$visible ? 1 : 0)};
    pointer-events: ${(p) => (p.$visible ? "all" : "none")};
    transition: opacity 0.3s ease;
    z-index: ${Z.overlay};
  }
`;

/* Component */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  /* Mobile menu slide-in animation */
  useEffect(() => {
    if (window.innerWidth > BREAKPOINTS.md) return;

    if (isOpen) {
      gsap.to(navRef.current, { right: 0, duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(navRef.current, { right: "-100%", duration: 0.5, ease: "power3.in" });
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((p) => !p);
  const closeMenu = () => setIsOpen(false);

  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <Link href="/">
            <HeaderLogo />
          </Link>
        </Logo>

        <NavLinks ref={navRef} $open={isOpen}>
          <NavLink href="about" onClick={closeMenu}>About</NavLink>
          <NavLink href="services" onClick={closeMenu}>Services</NavLink>
          <NavLink href="works" onClick={closeMenu}>Our Works</NavLink>
          <NavLink href="career" onClick={closeMenu}>Career</NavLink>
          <NavLink href="blog" onClick={closeMenu}>Blog</NavLink>

          <ContactButton href="contact" onClick={closeMenu}>
            Contact Us
          </ContactButton>
        </NavLinks>

        <MenuButton onClick={toggleMenu}>
          <MenuIcon $isOpen={isOpen} />
        </MenuButton>
      </Nav>

      <Overlay $visible={isOpen} onClick={closeMenu} />
    </HeaderContainer>
  );
};

export default Navbar;
