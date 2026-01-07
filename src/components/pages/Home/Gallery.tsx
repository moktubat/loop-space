"use client";

import { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { container } from "@/styles/mixins";
import { BREAKPOINTS, COLORS } from "@/styles/variables";

import galleryImg1 from "@/assets/galleryImg1.jpg";
import galleryImg2 from "@/assets/galleryImg2.jpg";
import galleryImg3 from "@/assets/galleryImg3.jpg";
import galleryImg4 from "@/assets/galleryImg4.jpg";
import galleryImg5 from "@/assets/galleryImg5.webp";
import galleryImg6 from "@/assets/galleryImg6.webp";
import galleryImg7 from "@/assets/galleryImg7.webp";
import galleryImg8 from "@/assets/galleryImg8.webp";

import { Heading } from "@/components/ui/Heading";

gsap.registerPlugin(ScrollTrigger);

/* ---------------- Styles ---------------- */

const GallerySection = styled.section`
  background: #0c0d12;
  padding: 100px 16px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding: 60px 16px;
  }
gi
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 40px 16px;
  }
`;

const GalleryContainer = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const Marquee = styled.div`
  overflow: hidden;
`;

const MarqueeTrack = styled.div`
  display: flex;
  gap: 24px;
  will-change: transform;
`;

const MarqueeItem = styled.div`
  flex: 0 0 auto;
  width: 348px;
  height: 548px;
  position: relative;
  overflow: hidden;
`;

/* ---------------- Data ---------------- */

const galleryImages = [
  galleryImg1.src,
  galleryImg2.src,
  galleryImg3.src,
  galleryImg4.src,
  galleryImg5.src,
  galleryImg6.src,
  galleryImg7.src,
  galleryImg8.src,
];

/* ---------------- Component ---------------- */

const Gallery = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      /* -------- Reveal animation -------- */
      gsap.fromTo(
        itemRefs.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      /* -------- Marquee animation -------- */
      const track = trackRef.current!;
      const totalWidth = track.scrollWidth / 2;

      gsap.to(track, {
        x: -totalWidth,
        duration: 40,
        ease: "linear",
        repeat: -1,
      });
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <GallerySection ref={sectionRef}>
      <GalleryContainer>
        <Heading color={COLORS.white}>
          Project <span className="highlightTxt">Gallery</span>
        </Heading>

        <Marquee>
          <MarqueeTrack ref={trackRef}>
            {duplicatedImages.map((src, i) => (
              <MarqueeItem
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="348px"
                />
              </MarqueeItem>
            ))}
          </MarqueeTrack>
        </Marquee>
      </GalleryContainer>
    </GallerySection>
  );
};

export default Gallery;
