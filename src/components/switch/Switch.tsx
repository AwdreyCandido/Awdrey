import React from "react";

type SwitchProps = {
  onChange: () => void;
};

const Switch: React.FC<SwitchProps> = (props) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        onChange={props.onChange}
        type="checkbox"
        value=""
        className="sr-only peer"
      ></input>
      <div className="w-[4.5rem] h-[2.5rem] bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[50%] after:-translate-y-[50%] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[1.8rem] after:w-[1.9rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  );
};

export default Switch;
