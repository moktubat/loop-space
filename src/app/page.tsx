import Gallery from "@/components/pages/Home/Gallery";
import Hero from "@/components/pages/Home/Hero";
import Process from "@/components/pages/Home/Process";
import Services from "@/components/pages/Home/Services";
import Testimonials from "@/components/pages/Home/Testimonials";
import Works from "@/components/pages/Home/Works";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Process />
      <Works />
      <Gallery />
      <Testimonials />
    </div>
  );
}