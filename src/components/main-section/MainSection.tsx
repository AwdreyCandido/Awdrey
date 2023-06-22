import React from "react";

// import gpmCrmScreen from "./../../images/gpm1.png";
// import gpmRegisterScreen from "./../../images/gpm2.png";
// import mangrover from "./../../images/mangrover-site.png";

import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const MainSection = () => {
  return (
    <section
      id="projects"
      className=" flex-col w-full font-sora py-[11rem] border-b-2 border-slate-200 dark:border-[#363636] border-dashed px-12 md:px-[10rem]"
    >
      <h1 className="text-header text-center sm:text-start mb-4">
        I've been working on
      </h1>

      <section className="grid place-content-center lg:grid-cols-2 xl:grid-cols-3 gap-x-[5rem] w-full ">
        <figure className=" xl:col-span-2 w-full mt-[5rem]">
          <Link to="/projects/gestor-politico-mangrover">
            <div className="relative border-2 border-dashed border-slate-200 dark:border-gray-border w-full h-[40rem] rounded-3xl overflow-hidden">
              {/* <StaticImage
                src="./../../images/gpm2.png"
                alt="gpm register page"
                className="peer w-[90%] rounded-2xl shadow-input absolute top-1 left-1 md:-top-[5%] md:-left-[5%] lg:-top-[10%] lg:-left-[10%] xl:-top-[25%] xl:-left-[25%] hover:-top-[1%]  hover:-left-[1%] sm:hover:z-10 duration-300"
              /> */}

              <StaticImage
                src="./../../images/gpm.png"
                alt="gpm crm page"
                className="w-full h-full object-cover duration-300 hover:scale-105"
              />
            </div>
          </Link>
          <p className="mt-6">Development</p>
          <h2 className="text-primary-h">Gestor Político Mangrover</h2>
        </figure>
        <figure className="w-full mt-[5rem]">
          <Link to="/projects/landing-mangrover">
            <div className="relative h-[40rem] border-2 border-dashed overflow-hidden border-slate-200 dark:border-gray-border w-full rounded-3xl">
              <StaticImage
                src="./../../images/mangrover-site.png"
                alt="mangrover landing page"
                className="w-full h-full object-cover duration-300 hover:scale-105"
              />
            </div>
          </Link>
          <p className="mt-6">Development</p>
          <h2 className="text-primary-h">Site Mangrover</h2>
        </figure>
      </section>
    </section>
  );
};

export default MainSection;
