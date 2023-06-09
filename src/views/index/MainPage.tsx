import React from "react";
import NavBar from "../../components/nav-bar/NavBar";
import MainHeader from "../../components/main-header/MainHeader";
import MainSection from "../../components/main-section/MainSection";
import MainAbout from "../../components/main-about/MainAbout";
import MainFooter from "../../components/main-footer/MainFooter";
import JsTechCircle from "../../components/tech-circles/JsTechCircle";
import CssTechCircle from "../../components/tech-circles/CssTechCircle";
import DevOpsTechCircle from "../../components/tech-circles/DevOpsTechCircle";
import MainContact from "../../components/main-contact/MainContact";

const MainPage = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <MainHeader />
      <MainSection />
      <MainAbout />
      <MainContact />
      <MainFooter />
    </div>
  );
};

export default MainPage;
