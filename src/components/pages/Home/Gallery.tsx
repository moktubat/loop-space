"use client";

<<<<<<< HEAD
import { useRef, useEffect } from "react";
=======
import { useRef, useLayoutEffect } from "react";
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
import styled from "styled-components";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

<<<<<<< HEAD
import { container, sectionSpacing } from "@/styles/mixins";
import { BREAKPOINTS } from "@/styles/variables";
import { COLORS } from "@/styles/variables";
=======
import { container } from "@/styles/mixins";
import { BREAKPOINTS, COLORS } from "@/styles/variables";
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937

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

<<<<<<< HEAD
/* Styled Components */
=======
/* ---------------- Styles ---------------- */
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937

const GallerySection = styled.section`
  background: #0c0d12;
  padding: 100px 16px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding: 60px 16px;
  }
<<<<<<< HEAD

=======
gi
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
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

<<<<<<< HEAD
const IntroBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  overflow: hidden;
  padding-bottom: 16px;
=======
const Marquee = styled.div`
  overflow: hidden;
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
`;

const MarqueeTrack = styled.div`
  display: flex;
  gap: 24px;
<<<<<<< HEAD
=======
  will-change: transform;
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
`;

const MarqueeItem = styled.div`
  flex: 0 0 auto;
  width: 348px;
  height: 548px;
  position: relative;
  overflow: hidden;
`;

<<<<<<< HEAD
/* Data */
=======
/* ---------------- Data ---------------- */
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937

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

<<<<<<< HEAD
/* Component  */

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const trackRef = useRef<HTMLDivElement>(null);
  const marqueeAnim = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const track = trackRef.current;

    // Fade-in animation
    gsap.from(itemRefs.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });

    // Infinite loop width calc (because duplicated)
    const totalWidth = track.scrollWidth / 2;

    // Smooth horizontal marquee
    marqueeAnim.current = gsap.to(track, {
      x: `-${totalWidth}px`,
      duration: 40,
      ease: "linear",
      repeat: -1,
    });

    return () => {
      marqueeAnim.current?.kill();
    };
=======
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
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
  }, []);

  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <GallerySection ref={sectionRef}>
      <GalleryContainer>
<<<<<<< HEAD
        <IntroBlock>
          <Heading color={COLORS.white}>
            Project <span className="highlightTxt">Gallery</span>
          </Heading>
        </IntroBlock>
=======
        <Heading color={COLORS.white}>
          Project <span className="highlightTxt">Gallery</span>
        </Heading>
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937

        <Marquee>
          <MarqueeTrack ref={trackRef}>
            {duplicatedImages.map((src, i) => (
              <MarqueeItem
                key={i}
<<<<<<< HEAD
                ref={(el) => (itemRefs.current[i] = el as HTMLDivElement)}
=======
                ref={(el) => (itemRefs.current[i] = el)}
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${i + 1}`}
<<<<<<< HEAD
                  width={348}
                  height={548}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
=======
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="348px"
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
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
