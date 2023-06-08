import React from "react";

type ButtonProps = {
  title: string;
  onClick: () => void;
};

const PrimaryButton: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className="px-12 py-3 bg-[#e7e7e7] dark:bg-transparent dark:border rounded-full"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default PrimaryButton;
