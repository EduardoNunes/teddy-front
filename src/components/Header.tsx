import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img
              src="/public/images/hamburger.svg"
              alt="Logo"
              className="w-6 h-5"
            />
          </button>
          <img
            src="/public/images/logo.svg"
            alt="Logo"
            className="w-[100px] h-[48.98px]"
          />
        </div>

        <div className="hidden lg:flex space-x-8">
          <a href="#" className="text-sm text-gray-700 hover:text-orange-500">
            Clientes
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-orange-500">
            Clientes selecionados
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-orange-500">
            Sair
          </a>
        </div>

        <div className="text-sm text-gray-700">
          <span>Olá, Usuário!</span>
        </div>
      </div>     
    </header>
  );
}
