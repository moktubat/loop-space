"use client";

import careerImg1 from "@/assets/careerImg1.webp";
import careerImg2 from "@/assets/careerImg2.webp";
import careerImg3 from "@/assets/careerImg3.webp";
import PageHeader from "@/components/ui/PageHeader";

const CareerHero = () => {

    return (
        <PageHeader
            introText="Start your journey with Loop Space Studio and make an impact in interior design."
            introImage={careerImg1}
            headingLine1="Join"
            headingLine2="Us"
            rightTallImage={careerImg2}
            rightMediumImage={careerImg3}
        />
    );
};

export default CareerHero;