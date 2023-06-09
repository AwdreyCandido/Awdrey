import React from "react";

type ButtonProps = {
  title: string;
  onClick: () => void;
};

const PrimaryButton: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className="px-12 py-3 bg-[#e7e7e7] dark:bg-transparent dark:hover:bg-darkwhite  dark:hover:text-darkgray dark:border rounded-full duration-300"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default PrimaryButton;
