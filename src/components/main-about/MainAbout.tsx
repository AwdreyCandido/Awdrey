import React from "react";

const MainAbout = () => {
  return (
    <section id="#about" className=" flex-col w-full font-sora py-[11rem] border-b-2 border-slate-200 dark:border-[#363636] border-dashed px-[11rem] ">
      <h1 className="text-header  mb-4">Who am I?</h1>

      <section className="flex w-full justify-between">
        <div className="flex flex-col gap-8 mt-[5rem] text-base w-[65%]">
          <p>
            My name is Awdrey Candido 😎. I am 22 years old, I live In
            Pernambuco, Brazil and I'm a self-taught Front-End developer. At the
            moment I'm a college student of Information Systems at Universidade
            Federal Rural de Pernambuco.
          </p>
          <p>
            I've started to learn about this incredible world of technology with
            the C programming language, but after some more research, I found
            myself in love with the Front-End way to live 😁. But recently I was
            flirting with native mobile development with Kotlin, You can see it
            in my Github, so let's see where it goes.
          </p>

          <p>
            More about me? As any developer I don't live without coffee, I have
            a strange addiction with cats and Elvis songs... Uhhh, you only
            wanna know about software? It is secret 🤫, but I can tell more if
            you're really interested. Just contact me!
          </p>
        </div>
        <div className="self-center">
          <div className="h-[25rem] w-[35rem] bg-[#e2e2e2] dark:bg-white rounded-3xl"></div>
        </div>
      </section>
    </section>
  );
};

export default MainAbout;
