import Button from "./Button";
import Input from "./Input";

export default function Modal() {
  return (
    <div className="absolute top-0 left-0 flex justify-center items-center w-[100vw] h-[100vh] bg-colorbgmodal z-10">
      <div className="flex flex-col justify-center items-center gap-2 w-[400px] h-[269px] bg-fullwhite px-[20px] rounded-[4px]">
        <div className="flex justify-between items-center w-full mb-2">
          <h1 className="font-inter font-bold text-size16 text-textblack">
            Criar cliente:
          </h1>
          <button>
            <img
              src="/public/images/exit.svg"
              alt="Ícone de sair"
              className="w-3 h-3"
            />
          </button>
        </div>
        <Input
          placeholder="Digite o nome:"
          type="text"
          id="name"
          name="name"
          style={{ width: "360px", height: "40px", fontSize: "16px" }}
        />
        <Input
          placeholder="Digite o salário:"
          type="text"
          id="name"
          name="name"
          style={{ width: "360px", height: "40px", fontSize: "16px" }}
        />
        <Input
          placeholder="Digite o valor da empresa:"
          type="text"
          id="name"
          name="name"
          style={{ width: "360px", height: "40px", fontSize: "16px" }}
        />
        <div className="w-full mt-2">
          <Button
            text="Criar cliente"
            type={"type2"}
          />
        </div>
      </div>
      ;
    </div>
  );
}
