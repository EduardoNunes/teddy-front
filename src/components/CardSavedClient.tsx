import { useGlobalContext } from "../context/globalContext";
import { TypesClients } from "../types/typesClients";
import formatBrl from "../utils/formatBrl";

export default function CardSavedClient({
  id,
  name,
  salary,
  enterprise,
}: TypesClients) {
  const {
    deleteSavedClientReq,
    setMessageToasty,
    setIsToasty,
    findAllSavedClientsReq,
  } = useGlobalContext();

  const handleClick = async () => {
    const response = deleteSavedClientReq(Number(id));

    if ((await response) === "Cliente removido!") {
      findAllSavedClientsReq();
      setMessageToasty("Cliente removido!");
      setIsToasty(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-1 w-[285px] h-[138px] px-4 bg-fullwhite rounded-[4px]">
      <h1 className="font-inter font-bold text-size16 text-textblack">
        {name}
      </h1>
      <span className="font-inter font-normal text-size14 text-textblack">
        Salário: {formatBrl(salary)}
      </span>
      <span className="font-inter font-normal text-size14 text-textblack">
        Empresa: R${formatBrl(enterprise)}
      </span>
      <div className="flex justify-end w-full mt-2">
        <button onClick={() => handleClick()}>
          <img
            src="/images/hifen.svg"
            alt="Ícone lixeira"
            className="cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}
