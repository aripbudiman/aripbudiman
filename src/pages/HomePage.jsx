import React from "react";
import Header from "../components/Header";
import HeroSection from "../layouts/HeroSection";
import Content from "../layouts/Content";
import SkillExperience from "../layouts/SkillExperience";
import Footer from "../components/Footer";
import MyProject from "../layouts/MyProject";
const HomePage = () => {
  return (
    <>
      <Header />
      <Content>
        <HeroSection />
      </Content>
      <SkillExperience />
      <Content>
        <MyProject />
      </Content>
      <Footer />
    </>
  );
};

export default HomePage;
