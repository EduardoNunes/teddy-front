import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex justify-center w-full bg-white shadow-md py-4">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute left-16 top-[30px]"
      >
        <img
          src="/public/images/hamburger.svg"
          alt="Logo"
          className="w-6 h-5"
        />
      </button>
      <div className="flex items-center justify-between w-[80%]">
        <img
          src="/public/images/logo.svg"
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
            Olá, <strong>Usuário!</strong>
          </span>
        </div>
      </div>
    </header>
  );
}
