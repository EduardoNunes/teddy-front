import { ChangeEvent, CSSProperties } from "react";

interface InputProps {
  placeholder: string;
  type: string;
  id: string;
  value?: string;
  name: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  id,
  value,
  name,
  onChange,
  style,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        style={style}
        className="w-full border-[2px] border-colorgray rounded-[4px] font-inter text-textblack placeholder-colorplaceholder px-4 bg-colorbgopacity"
      />
    </>
  );
};

export default Input;
