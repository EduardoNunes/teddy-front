import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import SideBar from "./SideBar";
import { useGlobalContext } from "../context/globalContext";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { isOpenMenu, setIsOpenMenu } = useGlobalContext();
  const [userName, setUserName] = useState("");
  const pathName = useLocation();

  useEffect(() => {
    const user = Cookies.get("userName");
    setUserName(user || "");
  }, []);

  const handleExit = () => {
    Cookies.remove("userName");
  };

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
            href="/clients"
            className={`font-inter font-normal text-size16 ${
              pathName.pathname === "/clients"
                ? "text-colororange underline"
                : "text-textblack"
            }`}
          >
            Clientes
          </a>
          <a
            href="/selected-clients"
            className={`font-inter font-normal text-size16 ${
              pathName.pathname === "/selected-clients"
                ? "text-colororange underline"
                : "text-textblack"
            }`}
          >
            Clientes selecionados
          </a>
          <a
            href="/"
            className="font-inter font-normal text-size16 text-textblack "
            onClick={handleExit}
          >
            Sair
          </a>
        </div>
        <div className="font-inter font-normal text-size16 text-textblack">
          <span>
            Olá, <strong>{userName.split(" ")[0]}!</strong>
          </span>
        </div>
      </div>
    </header>
  );
}
