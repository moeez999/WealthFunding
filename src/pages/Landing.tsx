// project imports
import ThemeLayoutWrapper from "../theme/ThemeLayoutWrapper";
import LandingPageComponent from "../components/LandingPageComponent";

const Landing = () => {
  return (
    <>
      <ThemeLayoutWrapper>
        <section className="w-full flex">
          <LandingPageComponent />
        </section>
      </ThemeLayoutWrapper>
    </>
  );
};

export default Landing;
