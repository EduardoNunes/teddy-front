import { useEffect } from "react";
import { useGlobalContext } from "../context/globalContext";

interface ToastyProps {
  text: string;
}

export default function Toasty({ text }: ToastyProps): JSX.Element {
  const { setIsToasty } = useGlobalContext();

  const hideMessageToasty = () => {
    setTimeout(() => {
      setIsToasty(false);
    }, 3000);
  };

  useEffect(() => {
    hideMessageToasty();
  }, []);

  return (
    <div className="fixed flex justify-center items-center h-20 top-[30px] right-2 z-50 bg-green-600 px-8 rounded-[5px]">
      <h1 className="font-inter font-bold text-normal24 text-fullwhite">
        {text}
      </h1>
    </div>
  );
}
