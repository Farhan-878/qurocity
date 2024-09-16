import React from "react";
import Layout from "../components/layout/layout";
import BannerSection from "../components/home/banner";
import Course from "../components/home/course";
import FeatureSection from "../components/home/feature";
import Keybenefit from "../components/home/keybenefit";
import WonderingSection from "../components/home/wondering";
import LanguageSection from "../components/home/language";
import StandOut from "../components/home/standOut";
import ForeignLang from "../components/home/foreignLang";
import GlobalDream from "../components/home/globalDream";
import Faq from "../components/home/faq";
import ReviewsSlider from "../components/home/reviewSlider";
import Linguistics from "../components/home/linguistics";

const Home = () => {
  return (
    <Layout>
      <BannerSection />
      <Course />
      <FeatureSection />
      <Keybenefit />
      <Linguistics />
      <WonderingSection />
      <LanguageSection />
      <StandOut />
      <ForeignLang />
      <GlobalDream />
      <Faq />
      <ReviewsSlider />
    </Layout>
  );
};

export default Home;
