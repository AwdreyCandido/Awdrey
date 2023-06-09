import React from "react";

// import gpmCrmScreen from "./../../images/gpm1.png";
// import gpmRegisterScreen from "./../../images/gpm2.png";
// import mangrover from "./../../images/mangrover-site.png";

import { StaticImage } from "gatsby-plugin-image";

const MainSection = () => {
  return (
    <section
      id="projects"
      className=" flex-col w-full font-sora py-[11rem] border-b-2 border-slate-200 dark:border-[#363636] border-dashed px-12 md:px-[10rem]"
    >
      <h1 className="text-header text-center lg:ml-[11rem] mb-4">
        I've been working on
      </h1>

      <section className="grid place-content-center lg:grid-cols-2 xl:grid-cols-3 gap-x-[5rem] w-full ">
        <figure className=" xl:col-span-2 w-full mt-[5rem]">
          <a href="https://gpm.mangrover.com.br/login" target="_blanck">
            <div className="relative h-[30rem] sm:h-[40rem] border-2 border-dashed border-slate-200 dark:border-gray-border w-full rounded-3xl overflow-hidden">
              <StaticImage
                src="./../../images/gpm2.png"
                alt="gpm register page"
                className="peer w-[70rem] rounded-2xl shadow-input absolute -left-[5%] -top-[1%] md:-top-[10%] hover:-left-[1%] hover:-top-[1%] hover:scale-105 hover:z-10 duration-300 peer-hover:-top-[2%]"
              />

              <StaticImage
                src="./../../images/gpm1.png"
                alt="gpm crm page"
                className="peer w-[70rem] rounded-2xl  shadow-input  absolute  -right-[5%] -bottom-[5%] md:-right-[15%] md:-bottom-[10%] hover:-right-[1%] hover:bottom-[-1%] duration-300 peer-hover:-right-[25%]"
              />
            </div>
          </a>
          <p className="mt-6">Development</p>
          <h2 className="text-primary-h">Gestor Político Mangrover</h2>
        </figure>
        <figure className="w-full mt-[5rem]">
          <a href="https://mangrover.com.br" target="_blanck">
            <div className="relative h-[40rem] border-2 border-dashed overflow-hidden border-slate-200 dark:border-gray-border w-full rounded-3xl">
              <StaticImage
                src="./../../images/mangrover-site.png"
                alt="mangrover landing page"
                className="peer absolute w-full rounded-2xl object-contain shadow-input left-[10%] top-[5%] hover:-left-[1%] hover:-top-[1%] hover:scale-105 hover:z-10 duration-300 peer-hover:-top-[2%]"
              />
            </div>
          </a>
          <p className="mt-6">Development</p>
          <h2 className="text-primary-h">Site Mangrover</h2>
        </figure>
      </section>
    </section>
  );
};

export default MainSection;
