import Button from "./Button";

export default function ModalDelete() {
  return (
    <div className="absolute top-0 left-0 flex justify-center items-center w-[100vw] h-[100vh] bg-colorbgmodal z-10">
      <div className="flex flex-col justify-center items-center gap-2 w-[400px] h-[148px] bg-fullwhite px-[20px] rounded-[4px]">
        <div className="flex justify-between items-center w-full">
          <h1 className="font-inter font-bold text-size16 text-textblack">
            Excluir cliente:
          </h1>
          <button>
            <img
              src="/images/exit.svg"
              alt="Ícone de sair"
              className="w-3 h-3"
            />
          </button>
        </div>
        <h2 className="w-full text-start">
          Você está prestes a excluir o cliente: <strong>Eduardo</strong>
        </h2>
        <div className="w-full mt-2">
          <Button text="Criar cliente" type={"type2"} />
        </div>
      </div>
      ;
    </div>
  );
}
