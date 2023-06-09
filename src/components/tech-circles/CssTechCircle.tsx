import React from "react";

import styledComponentsLogo from "./../../images/styled-components.png";
import sassLogo from "./../../images/sass.png";
import tailwindLogo from "./../../images/tailwind.png";
import cssLogo from "./../../images/css3.png";

import { StaticImage } from "gatsby-plugin-image";

const CssTechCircle = () => {
  return (
    <section className="relative w-min">
      <div className="animate-rotate relative items-center justify-center h-[20rem] w-[20rem] border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full">
        {/* <div className="absolute animate-rotate-back -top-[10%] left-[10%] h-[8rem] w-[8rem] p-4  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full">
          <img
            src={reactLogo}
            alt="tailwind logo"
            className=" drop-shadow-2xl"
          />
        </div> */}
        <div className="absolute animate-rotate-back -top-[15%] left-[40%] h-[6rem] w-[6rem] p-4  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full">
          <StaticImage
            src="./../../images/sass.png"
            alt="sass logo"
            className=" drop-shadow-2xl"
          />
        </div>
        <div className="absolute animate-rotate-back top-[70%]  h-[7rem] w-[7rem] p-6  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full ">
          <StaticImage
            src="./../../images/tailwind.png"
            alt="tailwind logo"
            className=" drop-shadow-2xl"
          />
        </div>
        <div className="absolute animate-rotate-back top-[75%] left-[70%] h-[7rem] w-[7rem] p-6  border-2 border-dashed border-slate-300 dark:border-gray-border rounded-full">
          <StaticImage
            src="./../../images/styled-components.png"
            alt="styled-components logo"
            className=" drop-shadow-2xl"
          />
        </div>
      </div>
      <div className="absolute h-[8rem] w-[8rem] bg-darkwhite dark:bg-white shadow-input rounded-full p-4 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
        <StaticImage src="./../../images/css3.png" alt="tailwind logo" />
      </div>
    </section>
  );
};

export default CssTechCircle;
