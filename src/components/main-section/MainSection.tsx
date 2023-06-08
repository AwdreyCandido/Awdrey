import React from "react";

const MainSection = () => {
  return (
    <section
      id="#projects"
      className=" flex-col w-full font-sora py-[11rem] border-b-2 border-slate-200 dark:border-[#363636] border-dashed "
    >
      <h1 className="text-header ml-[11rem] mb-4">I've been working on</h1>

      <section className="grid grid-cols-3 gap-x-[5rem] w-full px-[10rem]">
        <figure className=" col-span-2 w-full mt-[5rem]">
          <a href="">
            <div className=" h-[40rem] bg-[#e2e2e2] dark:bg-white w-full rounded-3xl"></div>
          </a>
          <p className="mt-6">Development</p>
          <h2 className="text-primary-h">Gestor Político Mangrover</h2>
        </figure>
        <figure className=" w-[40rem] mt-[5rem]">
          <a href="">
            <div className=" h-[40rem] bg-[#e2e2e2] dark:bg-white w-full rounded-3xl"></div>
          </a>
          <p className="mt-6">Development</p>
          <h2 className="text-primary-h">Site Mangrover</h2>
        </figure>
      </section>
    </section>
  );
};

export default MainSection;
