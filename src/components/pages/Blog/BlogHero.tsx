"use client";

import blogHeroImg1 from "@/assets/careerImg1.webp";
import blogHeroImg2 from "@/assets/careerImg2.webp";
import blogHeroImg3 from "@/assets/careerImg3.webp";
import PageHeader from "@/components/ui/PageHeader";

const BlogHero = () => {
    return (
        <PageHeader
            introText="Explore insights, design tips, and stories from the world of interior design — curated by Loop Space."
            introImage={blogHeroImg1}
            headingLine1="Our"
            headingLine2="Blog"
            rightTallImage={blogHeroImg2}
            rightMediumImage={blogHeroImg3}
        />
    );
};

export default BlogHero;