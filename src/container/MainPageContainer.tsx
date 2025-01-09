import Slider from "../sections/Slider";
import { HomeHeader, SectionHeading } from "../components/Headers";
import { SocialLinksBottom, SocialLinksTop } from "../sections/SocialLinks";
import Services from "../sections/Services";
import Project from "../sections/Project";
import Skill from "../sections/Skill";
import Footer from "../sections/Footer";
import { useEffect, useState } from "react";

const MainPageContainer = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return null;
  }
  return (
    <main className="flex-1 mt-[75px] lg:mt-2">
      <div className="flex flex-col lg:flex-row gap-3 lg:h-[calc(100vh-6.2rem)] lg:overflow-hidden">
        <div className="w-full lg:w-1/2 h-[500px] sm:h-[710px] lg:h-full">
          <div className="h-full lg:sticky lg:top-0">
            <Slider />
          </div>
        </div>

        <div
          data-scroll
          data-scroll-speed="1"
          className="w-full lg:w-1/2 lg:overflow-y-auto"
        >
          <div className="flex flex-col gap-3">
            <div className="md:grid md:grid-cols-5 gap-2">
              <div className="md:col-span-3">
                <HomeHeader />
              </div>
              <div className="md:col-span-2">
                <SocialLinksTop />
              </div>
            </div>
            <SectionHeading title="Services" />
            <div id="services">
              <Services />
            </div>
            <SectionHeading title="Projects" link="View All" />
            <Project />
            <SectionHeading title="Skills" />
            <div id="skills">
              <Skill />
            </div>

            <SocialLinksBottom />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPageContainer;
