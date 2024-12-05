export default function Card() {
  return (
    <div className="flex flex-col items-center justify-center gap-1 w-[285px] h-[138px] px-4 bg-fullwhite rounded-[4px]">
      <h1 className="font-inter font-bold text-size16 text-textblack">
        Eduardo
      </h1>
      <span className="font-inter font-normal text-size14 text-textblack">
        Salário: R$3.500,00
      </span>
      <span className="font-inter font-normal text-size14 text-textblack">
        Empresa: R$120.000,00
      </span>
      <div className="flex justify-between w-full mt-2">
        <img src="/public/images/add.svg" alt="Ícone adicionar" />
        <img src="/public/images/edit.svg" alt="Ícone ditar" />
        <img src="/public/images/trash.svg" alt="Ícone lixeira" />
      </div>
    </div>
  );
}
