import { TypesClients } from "../types/typesClients";
import formatBrl from "../utils/formatBrl";

export default function Card({ name, salary, enterprise }: TypesClients) {
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
        <img src="/public/images/add.svg" alt="Ícone adicionar" />
        <img src="/public/images/edit.svg" alt="Ícone ditar" />
        <img src="/public/images/trash.svg" alt="Ícone lixeira" />
      </div>
    </div>
  );
}
