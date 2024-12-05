import React from "react";

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: string;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  text,
  onClick,
}) => {
  return (
    <button
      className="h-[60px] w-full bg-colororange font-inter font-bold text-size24 text-textwhite rounded-[4px]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
