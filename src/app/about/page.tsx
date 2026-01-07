import AboutHero from "@/components/pages/About/AboutHero";
import Design from "@/components/pages/About/Design";
import OurStory from "@/components/pages/About/OurStory";
import Team from "@/components/pages/About/Team";
import TimeLineContent from "@/components/pages/About/TimeLineContent";
import TimeLineHeader from "@/components/pages/About/TimeLineHeader";
import Testimonials from "@/components/pages/Home/Testimonials";

const page = () => {
    return (
        <div>
            <AboutHero />
            <OurStory />
            <TimeLineHeader />
            <TimeLineContent />
            <Design />
            <Team />
            <Testimonials />
        </div>
    );
};

export default page;