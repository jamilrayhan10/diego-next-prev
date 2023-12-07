import Demo from "@/components/Demo";
import FeatureArea from "@/components/FeatureArea";
import FeatureTwo from "@/components/FeatureTwo";
import HeroArea from "@/components/HeroArea";
import InnerArea from "@/components/InnerArea";
import ResponsiveArea from "@/components/ResponsiveArea";
import ServiceArea from "@/components/ServiceArea";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Diego - Personal Creative Portfolio & Resume Next js Template", 
};

const MainHome = () => {
  return (
    <Wrapper>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea />
            <ServiceArea />
            <Demo />
            <FeatureArea />
            <FeatureTwo />
            <InnerArea />
            <ResponsiveArea />
          </main>
          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};

export default MainHome;