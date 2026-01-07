'use client';

import { Heading } from "@/components/ui/Heading";
import { BREAKPOINTS } from "@/styles/variables";
import { container } from "@/styles/mixins";
import { COLORS, FONT } from "@/styles/variables";
import styled from "styled-components";

/* -------------------------------- */
/* MAIN SECTION */
/* -------------------------------- */

const PricingSection = styled.section`
  background: #0c0d12;
  padding: 100px 16px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

const PricingContainer = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const IntroBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* -------------------------------- */
/* GRID */
/* -------------------------------- */

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: 1fr;
  }
`;

/* -------------------------------- */
/* PRICING CARD */
/* -------------------------------- */

const PricingCardWrapper = styled.div`
  background: #F9FAFB;
  padding: 16px;
`;

const PricingInner = styled.div`

background: rgba(90, 55, 143, 0.04);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PackageTitle = styled.h3`
  color: #222;
  font-family: ${FONT.urbanist};
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  margin: 0;
`;

const PackageDescription = styled.p`
  color: #4A4C56;
  font-family: ${FONT.urbanist};
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  margin: 0;
`;

const PackagePrice = styled.p`
  color: #222;
  font-family: ${FONT.helvetica};
  font-size: 48px;
  font-weight: 500;
  line-height: 120%;
  margin-bottom: 20px;
`;

/* -------------------------------- */
/* BUTTON */
/* -------------------------------- */

const ActionButton = styled.button`
  padding: 12px 16px;
  border-radius: 6px;
  background: #fff;
  border-left: 2px solid #EA2B7B;
  border-top: 2px solid #EA2B7B;
  border-right: 2px solid #EA2B7B;
  border-bottom: 4px solid #EA2B7B;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;

  font-family: ${FONT.urbanist};
  font-size: 18px;
  font-weight: 600;
  color: #EA2B7B;

  align-self: flex-start;

  svg {
    stroke: #EA2B7B;
  }
`;


/* -------------------------------- */
/* FEATURE LIST */
/* -------------------------------- */

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px
`;

const FeatureItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const FeatureIcon = styled.div`
  background: #EA2B7B;
  padding: 4px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 12px;
    height: 12px;
  }
`;

const FeatureText = styled.p`
  color: #595B68;
  font-family: ${FONT.urbanist};
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin: 0;
`;

/* -------------------------------- */
/* REUSABLE COMPONENTS */
/* -------------------------------- */

const FeatureItem = ({ text }: { text: string }) => (
    <FeatureItemWrapper>
        <FeatureIcon>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                    d="M5.537 10.6348C5.50517 10.6348 5.47368 10.6282 5.44452 10.6155C5.41536 10.6027 5.38915 10.584 5.36755 10.5607L0.798615 5.61839C0.768157 5.58544 0.747966 5.54433 0.740512 5.50008C0.733057 5.45584 0.738664 5.41038 0.756645 5.36927C0.774626 5.32816 0.804202 5.29318 0.841752 5.26862C0.879303 5.24406 0.923199 5.23098 0.968069 5.23098H3.1673C3.20032 5.23098 3.23295 5.23807 3.263 5.25176C3.29305 5.26545 3.31981 5.28542 3.34148 5.31034L4.86844 7.06705C5.03346 6.71429 5.35292 6.12694 5.9135 5.41123C6.74224 4.35315 8.28373 2.79705 10.9211 1.39231C10.972 1.36517 11.0313 1.35812 11.0872 1.37257C11.1432 1.38702 11.1916 1.4219 11.2231 1.47034C11.2545 1.51878 11.2667 1.57725 11.2571 1.63421C11.2475 1.69116 11.217 1.74246 11.1714 1.77798C11.1614 1.78585 10.1445 2.58661 8.97424 4.05336C7.89719 5.40313 6.46545 7.61021 5.76094 10.4595C5.74856 10.5096 5.71978 10.554 5.67918 10.5858C5.63858 10.6176 5.5885 10.6349 5.53693 10.6349L5.537 10.6348Z"
                    fill="white"
                />
            </svg>
        </FeatureIcon>

        <FeatureText>{text}</FeatureText>
    </FeatureItemWrapper>
);

const PricingCard = ({
    title,
    description,
    price,
    features,
}: {
    title: string;
    description: string;
    price: string;
    features: string[];
}) => (
    <PricingCardWrapper>
        <PricingInner>
            <div>
                <PackageTitle>{title}</PackageTitle>
                <PackageDescription>{description}</PackageDescription>
            </div>

            <PackagePrice>{price}</PackagePrice>

            <ActionButton>
                Get Started
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path
                        d="M0.850098 9.18343L9.18343 0.850098M9.18343 0.850098H0.850098M9.18343 0.850098V9.18343"
                        stroke="#EA2B7B"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </ActionButton>


        </PricingInner>
        <FeatureList>
            {features.map((feature, i) => (
                <FeatureItem key={i} text={feature} />
            ))}
        </FeatureList>
    </PricingCardWrapper>
);

/* -------------------------------- */
/* MAIN COMPONENT */
/* -------------------------------- */

const Pricing = () => {
    return (
        <PricingSection>
            <PricingContainer>
                <IntroBlock>
                    <Heading color={COLORS.white}>
                        Pricing <span className="highlightTxt">Plan</span>
                    </Heading>
                </IntroBlock>

                {/* GRID */}
                <PricingGrid>
                    <PricingCard
                        title="Essential Package"
                        description="Perfect for small spaces and minimal transformations"
                        price="$500 - $700"
                        features={[
                            "Consultation & space assessment",
                            "Basic 2D layout & design plan",
                        ]}
                    />

                    <PricingCard
                        title="Standard Package"
                        description="Ideal for medium spaces needing moderate updates."
                        price="$800 - $1200"
                        features={[
                            "Detailed space planning",
                            "3D layout visualization",
                        ]}
                    />

                    <PricingCard
                        title="Premium Package"
                        description="Ideal for large spaces or full redesign projects."
                        price="$1500 - $2500"
                        features={[
                            "Advanced 3D renderings",
                            "Custom material & color selection",
                        ]}
                    />

                    <PricingCard
                        title="Luxury Package"
                        description="For bespoke interiors and complete transformations."
                        price="$3000 - $5000"
                        features={[
                            "Personalized concept design",
                            "On-site design supervision",
                        ]}
                    />
                </PricingGrid>
            </PricingContainer>
        </PricingSection>
    );
};

export default Pricing;
