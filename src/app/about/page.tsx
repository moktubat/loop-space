import AboutHero from "@/components/pages/About/AboutHero";
import Design from "@/components/pages/About/Design";
import OurStory from "@/components/pages/About/OurStory";
import Team from "@/components/pages/About/Team";
import TimeLine from "@/components/pages/About/TimeLine";
import Testimonials from "@/components/pages/Home/Testimonials";

const page = () => {
    return (
        <div>
            <AboutHero />
            <OurStory />
            <TimeLine />
            <Design />
            <Team />
            <Testimonials />
        </div>
    );
};

export default page;