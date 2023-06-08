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
      <section className="flex items-center justify-end h-[60rem] w-full border-r-2 border-b-2 border-slate-200 dark:border-[#363636] border-dashed">
        <div className="relative flex flex-col gap-8 w-[75%] right-[10%] ">
          <h1 className="text-header">
            HEY! <span className="font-semibold">I'm Awdrey</span>, A{" "}
            <span className="font-semibold">FRONT-END </span> DEVELOPER BASED IN
            <span className="font-semibold"> BRAZIL</span>
          </h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            dignissimos quasi architecto dolorum
          </p>
          <div className="flex gap-6 text-base">
            <button
              className="px-12 py-4 bg-[#171717] text-white rounded-full"
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
      <section className="flex items-center h-[60rem] border-b-2 border-b-slate-200 dark:border-b-[#363636] border-dashed  w-full">
        <div className="relative h-[45rem] w-[45rem] left-[15%] bg-slate-500 rounded-full"></div>
      </section>
    </section>
  );
};

export default MainHeader;
