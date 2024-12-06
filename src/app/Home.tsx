import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    if (userName === "") {
      setError("Digite seu nome");
    } else {
      Cookies.set("userName", userName);
      navigate("/clients");
    }
  };

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-colorbackground">
      <div className="flex flex-col justify-center items-center w-1/3 gap-5">
        <div>
          <h1 className="font-inter text-size36 text-textblack">
            Olá, seja bem-vindo!
          </h1>
        </div>
        <Input
          placeholder="Digite seu nome:"
          type="text"
          id="name"
          name="name"
          style={{ width: "100%", height: "60px", fontSize: "24px" }}
          onChange={(e) => setUserName(e.target.value)}
        />
        {error && <p className="w-full text-red-600 text-start">Para acessar digite seu nome</p>}
        <Button text="Entrar" type={"type1"} onClick={handleClick} />
      </div>
    </div>
  );
}
