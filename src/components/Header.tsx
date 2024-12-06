import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import SideBar from "./SideBar";
import { useGlobalContext } from "../context/globalContext";

export default function Header() {
  const { isOpenMenu, setIsOpenMenu } = useGlobalContext();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const user = Cookies.get("userName");
    setUserName(user || "");
  }, []);

  return (
    <header className="relative flex justify-center w-full bg-white shadow-md py-4">
      {isOpenMenu && <SideBar />}
      <button
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className="absolute left-16 top-[30px]"
      >
        <img src="/images/hamburger.svg" alt="Logo" className="w-6 h-5" />
      </button>
      <div className="flex items-center justify-between w-[80%]">
        <img
          src="/images/logo.svg"
          alt="Logo"
          className="w-[100px] h-[48.98px]"
        />
        <div className="space-x-12">
          <a
            href="#"
            className="font-inter font-normal text-size16 text-textblack hover:text-colororange hover:underline"
          >
            Clientes
          </a>
          <a
            href="#"
            className="font-inter font-normal text-size16 text-textblack hover:text-colororange hover:underline"
          >
            Clientes selecionados
          </a>
          <a
            href="#"
            className="font-inter font-normal text-size16 text-textblack hover:text-colororange hover:underline"
          >
            Sair
          </a>
        </div>
        <div className="font-inter font-normal text-size16 text-textblack">
          <span>
            Olá, <strong>{userName}!</strong>
          </span>
        </div>
      </div>
    </header>
  );
}
