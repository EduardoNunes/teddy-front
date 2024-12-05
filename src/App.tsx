import Button from "./components/Button";
import Input from "./components/Input";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-colorbackground">
      <SideBar />
      <div className="flex flex-col justify-center items-center w-1/3 gap-5">
        <h1 className="font-inter text-size36 text-textblack">
          Olá, seja bem-vindo!
        </h1>
        <Input
          placeholder="Digite seu nome:"
          type="text"
          id="name"
          name="name"
          className=""
        />
        <Button text="Entrar" />
      </div>
    </div>
  );
}

export default App;
