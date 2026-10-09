import AboutHero from "@/components/pages/About/AboutHero";
import Design from "@/components/pages/About/Design";
import OurStory from "@/components/pages/About/OurStory";
import Team from "@/components/pages/About/Team";
<<<<<<< HEAD
import TimeLine from "@/components/pages/About/TimeLine";
=======
import TimeLineContent from "@/components/pages/About/TimeLineContent";
import TimeLineHeader from "@/components/pages/About/TimeLineHeader";
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
import Testimonials from "@/components/pages/Home/Testimonials";

const page = () => {
    return (
        <div>
            <AboutHero />
            <OurStory />
<<<<<<< HEAD
            <TimeLine />
=======
            <TimeLineHeader />
            <TimeLineContent />
>>>>>>> 41df2574fabb2893cdc14f4cc32b02383b27d937
            <Design />
            <Team />
            <Testimonials />
        </div>
    );
};

export default page;