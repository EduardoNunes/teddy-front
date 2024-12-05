import React, { CSSProperties } from "react";

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  text,
  onClick,
  style,
}) => {
  return (
    <button
      className="w-full bg-colororange font-inter font-bold text-size24 text-fullwhite rounded-[4px]"
      style={style}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
