import { useGlobalContext } from "../context/globalContext";
import Button from "./Button";

export default function ModalDelete() {
  const {
    setIsOpenDelete,
    deleteClientReq,
    selectedClient,
    setMessageToasty,
    setIsToasty,
    selectedClientData,
    findClientsReq,
  } = useGlobalContext();

  const handleDelete = async () => {
    const response = deleteClientReq(selectedClient);

    if ((await response) === "Cliente deletado com sucesso!") {
      setMessageToasty("Cliente deletado com sucesso!");
      setIsToasty(true);
      findClientsReq(1, 16);
      setIsOpenDelete(false);
    }
  };

  return (
    <div className="absolute top-0 left-0 flex justify-center items-center w-[100vw] h-[100vh] bg-colorbgmodal z-10">
      <div className="flex flex-col justify-center items-center gap-2 w-[400px] h-[148px] bg-fullwhite px-[20px] rounded-[4px]">
        <div className="flex justify-between items-center w-full">
          <h1 className="font-inter font-bold text-size16 text-textblack">
            Excluir cliente:
          </h1>
          <button onClick={() => setIsOpenDelete(false)}>
            <img
              src="/images/exit.svg"
              alt="Ícone de sair"
              className="w-3 h-3"
            />
          </button>
        </div>
        <h2 className="w-full text-start">
          Você está prestes a excluir o cliente:{" "}
          <strong>{selectedClientData.name}</strong>
        </h2>
        <div className="w-full mt-2">
          <Button
            text="Deletar cliente"
            type={"type2"}
            onClick={handleDelete}
          />
        </div>
      </div>
      ;
    </div>
  );
}
