import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import AboutCards from "./AboutCards";
import FundingSection from "./FundingSection";
import HeroSection from "./HeroSection";
import RevolutionizeSection from "./RevolutionizeSection";
import TestSection from "./TestSection";
import TestimonialsSection from "./TestimonialsSection";

const LandingPageComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="w-full flex flex-col">
      <div
        className="mt-[3.25rem] md:mt-[5.25rem] xl:mt-[6.25rem] w-full flex flex-col"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <HeroSection />
      </div>
      <div
        className="pt-[1.75rem] md:pt-[2.25rem] xl:pt-[3.76rem] w-full flex flex-col bg-white bg-opacity-[0.02]"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <RevolutionizeSection />
      </div>
      <div
        className="mt-[3rem] md:mt-[7rem] xl:mt-[10rem] w-full flex flex-col"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <AboutCards />
      </div>
      <div
        className="mt-[7.5rem] w-full flex flex-col"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <TestSection />
      </div>
      <div
        className="my-12 md:my-20 xl:my-[7.25rem] w-full flex flex-col"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <FundingSection />
      </div>
      <div
        className="mt-[3.25rem] md:mt-20 xl:mt-[10rem] mb-20 md:mb-24 xl:mb-[6.25rem] w-full flex flex-col"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <TestimonialsSection />
      </div>
    </section>
  );
};

export default LandingPageComponent;
