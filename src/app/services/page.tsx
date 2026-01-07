import Testimonials from "@/components/pages/Home/Testimonials";
import Pricing from "@/components/pages/Services/Pricing";
import ServiceHero from "@/components/pages/Services/ServiceHero";
import ServicesOffered from "@/components/pages/Services/ServicesOffered";

const page = () => {
    return (
        <div>
            <ServiceHero />
            <ServicesOffered />
            <Pricing />
            <Testimonials />
        </div>
    );
};

export default page;