import React, { useEffect, useState } from "react";

import { Link } from "gatsby";
import PrimaryButton from "../buttons/primary-button/PrimaryButton";
import Switch from "../switch/Switch";
import { HiOutlineCode } from "react-icons/hi";

const NavBar = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="flex items-center justify-between text-base px-16 py-6 font-sora border-b border-b-slate-200 dark:border-b-[#363636] ">
      <h4 className="flex items-center gap-8">
        <HiOutlineCode className="text-[2.5rem]" />
        Awdrey
      </h4>
      <ul className="flex gap-12">
        <li className="relative hover:font-semibold duration-100">
          <Link to="/#projects" className="peer bg-white dark:bg-darkgray">
            Projects
          </Link>
          <div className="bg-black w-[1.6rem] h-[.3rem] top-0 left-[50%] -translate-x-[50%] rounded-xl absolute -z-10 mt-[0.3rem] invisible peer-hover:visible  peer-hover:top-[100%] duration-300 " />
        </li>
        <li className="relative hover:font-semibold duration-100">
          <a href="/#about" className="peer bg-white dark:bg-darkgray">
            About
          </a>
          <div className="bg-black w-[1.6rem] h-[.3rem] top-0 left-[50%] -translate-x-[50%] rounded-xl absolute -z-10 mt-[0.3rem] invisible peer-hover:visible  peer-hover:top-[100%] duration-300 " />
        </li>
        <li className="relative hover:font-semibold duration-100">
          <a href="/#contact" className="peer bg-white dark:bg-darkgray">
            Contact
          </a>
          <div className="bg-black w-[1.6rem] h-[.3rem] top-0 left-[50%] -translate-x-[50%] rounded-xl absolute -z-10 mt-[0.3rem] invisible peer-hover:visible  peer-hover:top-[100%] duration-300 " />
        </li>
      </ul>
      <div className="flex gap-8">
        <Switch onChange={handleThemeSwitch} />
        <PrimaryButton onClick={() => {}} title="Hire Me!" />
      </div>
    </nav>
  );
};

export default NavBar;
