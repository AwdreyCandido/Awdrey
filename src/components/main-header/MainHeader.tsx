import React from "react";
import PrimaryButton from "../buttons/primary-button/PrimaryButton";

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            dignissimos quasi architecto dolorum
          </p>
          <div className="flex gap-6 text-base">
            <button
              className="px-12 py-4 bg-[#171717] dark:bg-transparent dark:border text-white rounded-full"
              onClick={() => {}}
            >
              Entre em contato
            </button>
            <a href="https://github.com/AwdreyCandido">
              <div className="h-[4.5rem] w-[4.5rem] text-[2.5rem] cursor-pointer flex items-center justify-center rounded-full border border-black-20 dark:text-white dark:border-[#363636]">
                <AiOutlineGithub />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/awdrey-candido-67b381221/">
              <div className="h-[4.5rem] w-[4.5rem] text-[2.5rem] cursor-pointer flex items-center justify-center rounded-full border border-black-20 dark:text-white dark:border-[#363636]">
                <AiOutlineLinkedin />
              </div>
            </a>
            <a href="https://www.instagram.com/awdrey.candido/?next=%2F">
              <div className="h-[4.5rem] w-[4.5rem] text-[2.5rem] cursor-pointer flex items-center justify-center rounded-full border border-black-20 dark:text-white dark:border-[#363636]">
                <AiOutlineInstagram />
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="relative flex items-center h-[60rem] border-b-2 border-b-slate-200 dark:border-b-[#363636] border-dashed  w-full">
        <div className="relative h-[45rem] w-[45rem] left-[15%] bg-[#e2e2e2]  dark:bg-white rounded-full"></div>
        <div className="h-[9rem] w-[9rem] bg-lightgray dark:bg-white shadow-xl animate-breathe rounded-full absolute right-[30%] top-[10%]"></div>
        <div className="h-[8rem] w-[8rem] bg-lightgray dark:bg-white shadow-xl animate-breathe rounded-full absolute left-[10%] top-[25%]"></div>
        <div className="h-[9rem] w-[9rem] bg-lightgray dark:bg-white shadow-xl animate-breathe rounded-full absolute left-[25%] top-[5%]"></div>
        <div className="h-[7rem] w-[7rem] bg-lightgray dark:bg-white shadow-xl animate-breathe rounded-full absolute right-[20%] top-[35%]"></div>
        <div className="h-[10rem] w-[10rem] bg-lightgray dark:bg-white shadow-xl animate-breathe rounded-full absolute left-[25%] top-[65%]"></div>
        <div className="h-[14rem] w-[14rem] bg-lightgray dark:bg-white shadow-xl animate-breathe rounded-full absolute right-[30%] top-[75%]"></div>
      </section>
    </section>
  );
};

export default MainHeader;
