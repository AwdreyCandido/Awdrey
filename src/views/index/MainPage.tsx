import React from "react";
import NavBar from "../../components/nav-bar/NavBar";
import MainHeader from "../../components/main-header/MainHeader";
import MainSection from "../../components/main-section/MainSection";
import MainAbout from "../../components/main-about/MainAbout";
import MainFooter from "../../components/main-footer/MainFooter";
import JsTechCircle from "../../components/tech-circles/JsTechCircle";
import CssTechCircle from "../../components/tech-circles/CssTechCircle";
import DevOpsTechCircle from "../../components/tech-circles/DevOpsTechCircle";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <MainHeader />
      <MainSection />
      <MainAbout />
      <MainFooter />
    </div>
  );
};

export default MainPage;
