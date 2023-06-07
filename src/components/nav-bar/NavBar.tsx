import React, { useEffect, useState } from "react";

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
    <nav className="flex justify-between bg-blue-500 dark:bg-slate-600">
      <h4>Awdrey</h4>
      <ul>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
      </ul>
      <div>
        <button onClick={handleThemeSwitch}>Mudar tema</button>
        <button>Entre em contato!</button>
      </div>
    </nav>
  );
};

export default NavBar;
