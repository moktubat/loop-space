"use client";

import aboutImg1 from "@/assets/aboutImg1.webp";
import aboutImg2 from "@/assets/aboutImg2.webp";
import aboutImg3 from "@/assets/aboutImg3.webp";
import PageHeader from "@/components/ui/PageHeader";

const AboutHero = () => {

    return (
        <PageHeader
            introText="At Loop Space, we create timeless interiors that blend style, seamless design, and functionality flow."
            introImage={aboutImg1}
            headingLine1="About"
            headingLine2="Us"
            rightTallImage={aboutImg2}
            rightMediumImage={aboutImg3}
        />
    );
};

export default AboutHero;