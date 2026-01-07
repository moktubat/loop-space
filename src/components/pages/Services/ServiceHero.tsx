"use client";

import servicesImg1 from "@/assets/servicesImg1.webp";
import servicesImg2 from "@/assets/servicesImg2.webp";
import servicesImg3 from "@/assets/servicesImg3.webp";
import PageHeader from "@/components/ui/PageHeader";

const ServiceHero = () => {

    return (
        <PageHeader
            introText="At Loop Space, we specialize in creating interiors that seamlessly blend style, functionality, and your unique vision."
            introImage={servicesImg1}
            headingLine1="Expert"
            headingLine2="Care"
            rightTallImage={servicesImg2}
            rightMediumImage={servicesImg3}
        />
    );
};

export default ServiceHero;