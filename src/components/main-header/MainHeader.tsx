import React from "react";
import PrimaryButton from "../buttons/primary-button/PrimaryButton";

import perfil from "./../../images/perfil.jpg";

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import JsTechCircle from "../tech-circles/JsTechCircle";
import CssTechCircle from "../tech-circles/CssTechCircle";
import DevOpsTechCircle from "../tech-circles/DevOpsTechCircle";

const MainHeader = () => {
  return (
    <section className="flex w-full h-fit font-sora">
      <section className="flex items-center h-[60rem] w-full border-r-2 border-b-2 border-slate-200 dark:border-[#363636] border-dashed">
        <div className="relative flex flex-col gap-8 w-[75%] ml-[11rem]">
          <h1 className="text-header">
            HEY!{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              I'm Awdrey
            </span>
            , A{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              FRONT-END{" "}
            </span>{" "}
            DEVELOPER BASED IN
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {" "}
              BRAZIL
            </span>
          </h1>
          <p className="text-base">
            By being a Front-End developer basically means that I can create
            beautiful and attractive screens 😳...
          </p>
          <div className="flex gap-6 text-base">
            <a href="/#contact">
              <button
                className="px-12 py-4 bg-[#171717] hover:bg-darkwhite hover:text-darkgray dark:bg-transparent border dark:border-gray-border border-darkwhite  dark:hover:bg-darkwhite  dark:hover:text-darkgray text-white rounded-full duration-300"
                onClick={() => {}}
              >
                Contact Me!
              </button>
            </a>
            <a href="https://github.com/AwdreyCandido">
              <div className="h-[4.5rem] w-[4.5rem] text-[2.5rem] cursor-pointer flex items-center justify-center rounded-full border border-black-20 hover:bg-darkgray hover:text-darkwhite dark:text-white dark:border-[#363636] dark:hover:bg-darkwhite  dark:hover:text-darkgray duration-300">
                <AiOutlineGithub />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/awdrey-candido-67b381221/">
              <div className="h-[4.5rem] w-[4.5rem] text-[2.5rem] cursor-pointer flex items-center justify-center rounded-full border border-black-20 hover:bg-darkgray hover:text-darkwhite dark:text-white dark:border-[#363636] dark:hover:bg-darkwhite  dark:hover:text-darkgray duration-300">
                <AiOutlineLinkedin />
              </div>
            </a>
            <a href="https://www.instagram.com/awdrey.candido/?next=%2F">
              <div className="h-[4.5rem] w-[4.5rem] text-[2.5rem] cursor-pointer flex items-center justify-center rounded-full border border-black-20 hover:bg-darkgray hover:text-darkwhite dark:text-white dark:border-[#363636] dark:hover:bg-darkwhite  dark:hover:text-darkgray duration-300">
                <AiOutlineInstagram />
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="relative flex items-center h-[60rem] border-b-2 border-b-slate-200 dark:border-b-[#363636] border-dashed  w-full">
        <div>
          <img
            className="relative h-[45rem] w-[45rem] left-[15%] bg-[#e2e2e2] object-cover grayscale dark:grayscale-0 dark:bg-white rounded-full"
            src={perfil}
          />
        </div>
        <div className="h-[9rem] w-[9rem] absolute right-[35%] top-[5%]">
          <JsTechCircle />
        </div>
        <div className="h-[8rem] w-[8rem] absolute left-[10%] top-[20%]">
          <DevOpsTechCircle />
        </div>
        <div className="h-[14rem] w-[14rem] p-4 absolute right-[40%] top-[65%]">
          <CssTechCircle />
        </div>
        {/* <div className="h-[7rem] w-[7rem] p-4 border-dashed border-slate-200 border-2 dark:bg-white animate-breathe rounded-full absolute left-[10%] top-[25%]">
          <img src={sassLogo} alt="tailwind logo" />
        </div> */}
        {/* <div className="h-[7rem] w-[7rem] p-6 border-dashed border-slate-200 border-2 dark:bg-white animate-breathe rounded-full absolute right-[20%] top-[35%]">
          <img src={javascriptLogo} alt="tailwind logo" />
        </div>
        <div className="h-[10rem] w-[10rem] p-4 border-dashed border-slate-200 border-2 dark:bg-white animate-breathe rounded-full absolute left-[25%] top-[65%]">
          <img src={tailwindLogo} alt="tailwind logo" />
        </div> */}
      </section>
    </section>
  );
};

export default MainHeader;
