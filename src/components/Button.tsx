import React, { CSSProperties } from "react";

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  type: "type1" | "type2" | "type3" | "";
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  text,
  onClick,
  style,
  type,
}) => {
  const baseClass = "w-full font-inter font-bold rounded-[4px]";
  const typeClass =
    type === "type1"
      ? "bg-colororange h-[60px] text-size24 text-fullwhite"
      : type === "type2"
      ? "bg-colororange h-[40px] text-size14 text-fullwhite"
      : type === "type3"
      ? "h-[40px] text-size14 text-colororange border-[2px] border-colororange mt-4"
      : "bg-colororange h-[40px] text-size14";

  return (
    <button
      className={`${baseClass} ${typeClass}`}
      style={style}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
