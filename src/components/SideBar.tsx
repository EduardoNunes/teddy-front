import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";

export default function SideBar() {
  const { isOpenMenu, setIsOpenMenu } = useGlobalContext();
  const pathName = useLocation();
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={sidebarRef}
      className={`absolute top-0 left-0 h-full w-[260px] rounded-tr-[16px] z-20 transition-transform ${
        isOpenMenu ? "transform-none" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-center h-32 w-full bg-colorbgblack rounded-tr-[16px]">
        <img
          src="/images/logo.svg"
          alt="Logo"
          className="w-[100px] h-[48.98px]"
        />
      </div>
      <div className="flex flex-col h-[calc(100vh-200px)] pt-12 pl-6 gap-6 bg-fullwhite">
        <div className="flex items-center gap-3">
          <img
            src="/images/home.svg"
            alt="Logo"
            className="w-[19.95px] h-[16.67px]"
          />
          <span className="font-geologica font-medium text-size16 text-textSideBar">
            Home
          </span>
        </div>
        <div className="flex items-center gap-3">
          <img
            src={
              pathName.pathname === "/clients"
                ? "/images/client-orange.svg"
                : "/images/client.svg"
            }
            alt="Logo"
            className="w-[19.95px] h-[16.67px]"
          />
          <span
            className={`font-geologica font-medium text-size16 ${
              pathName.pathname === "/clients"
                ? "text-colororange"
                : "text-textSideBar"
            }`}
          >
            Clientes
          </span>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="/images/product.svg"
            alt="Logo"
            className="w-[19.95px] h-[16.67px]"
          />
          <span className="font-geologica font-medium text-size16 text-textSideBar">
            Produtos
          </span>
        </div>
      </div>
      <div
        className="h-[72px] bg-fullwhite"
        style={{ boxShadow: "-2px -5px 10px rgba(0, 0, 0, .1)" }}
      />
    </div>
  );
}
