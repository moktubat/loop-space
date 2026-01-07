"use client";

import workssImg1 from "@/assets/workssImg1.webp";
import workssImg2 from "@/assets/workssImg2.webp";
import workssImg3 from "@/assets/workssImg3.webp";
import PageHeader from "@/components/ui/PageHeader";

const WorkHero = () => {

    return (
        <PageHeader
            introText="We craft interiors that blend aesthetics with functionality, tailored to your unique style."
            introImage={workssImg1}
            headingLine1="Our"
            headingLine2="Craft"
            rightTallImage={workssImg2}
            rightMediumImage={workssImg3}
        />
    );
};

export default WorkHero;