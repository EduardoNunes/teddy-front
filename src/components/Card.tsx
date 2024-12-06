import { useGlobalContext } from "../context/globalContext";
import { TypesClients } from "../types/typesClients";
import formatBrl from "../utils/formatBrl";

export default function Card({ name, salary, enterprise }: TypesClients) {
  const { setIsOpenModal, setIsCreateUser } = useGlobalContext();

  const handleClick = (clicked: string) => {
    if (clicked === "add") {
    } else if (clicked === "edit") {
      setIsOpenModal(true);
      setIsCreateUser(false);
    } else if (clicked === "delete") {
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
      <div className="flex justify-between w-full mt-2">
        <button onClick={() => handleClick("add")}>
          <img
            src="/images/add.svg"
            alt="Ícone adicionar"
            className="cursor-pointer"
          />
        </button>
        <button onClick={() => handleClick("edit")}>
          <img
            src="/images/edit.svg"
            alt="Ícone ditar"
            className="cursor-pointer"
          />
        </button>
        <button onClick={() => handleClick("delete")}>
          <img
            src="/images/trash.svg"
            alt="Ícone lixeira"
            className="cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}
