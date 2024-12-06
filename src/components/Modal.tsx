import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useGlobalContext } from "../context/globalContext";
import formatBrl from "../utils/formatBrl";

export default function Modal() {
  const {
    isCreateUser,
    setIsOpenModal,
    createClientReq,
    setMessageToasty,
    setIsToasty,
    editClientReq,
    findClientsReq,
  } = useGlobalContext();
  const [name, setName] = useState("");
  const [salaryInput, setSalaryInput] = useState("");
  const [enterpriseInput, setEnterpriseInput] = useState("");

  const handleChangeCurrency = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    let value = event.target.value;
    value = value.replace(/\D/g, "");

    const formattedValue = formatBrl(parseFloat(value) / 100);

    setter(formattedValue);
  };

  const handleSubmit = async () => {
    const salary = Number(
      salaryInput.replace("R$", "").replace(/\./g, "").replace(",", "")
    );

    const enterprise = Number(
      enterpriseInput.replace("R$", "").replace(/\./g, "").replace(",", "")
    );

    const form = { name, salary, enterprise };

    if (isCreateUser) {
      const response = createClientReq(form);

      if ((await response) === "Usuário criado com sucesso!") {
        findClientsReq(1, 16)
        setMessageToasty("Usuário criado com sucesso!");
        setIsToasty(true);
        setName("");
        setSalaryInput("");
        setEnterpriseInput("");
      }
    } else {
/*       const response = editClientReq(id, form);

      if ((await response) === "Usuário criado com sucesso!") {
        setMessageToasty("Usuário criado com sucesso!");
        setIsToasty(true);
        setName("");
        setSalaryInput("");
        setEnterpriseInput("");
      } */
    }
  };

  return (
    <div className="absolute top-0 left-0 flex justify-center items-center w-[100vw] h-[100vh] bg-colorbgmodal z-10">
      <div className="flex flex-col justify-center items-center gap-2 w-[400px] h-[269px] bg-fullwhite px-[20px] rounded-[4px]">
        <div className="flex justify-between items-center w-full mb-2">
          <h1 className="font-inter font-bold text-size16 text-textblack">
            {isCreateUser ? "Criar cliente:" : "Editar cliente:"}
          </h1>
          <button onClick={() => setIsOpenModal(false)}>
            <img
              src="/images/exit.svg"
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
          value={name}
          style={{ width: "360px", height: "40px", fontSize: "16px" }}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Digite o salário:"
          type="text"
          id="name"
          name="name"
          value={salaryInput}
          style={{ width: "360px", height: "40px", fontSize: "16px" }}
          onChange={(e) => handleChangeCurrency(e, setSalaryInput)}
        />
        <Input
          placeholder="Digite o valor da empresa:"
          type="text"
          id="name"
          name="name"
          value={enterpriseInput}
          style={{ width: "360px", height: "40px", fontSize: "16px" }}
          onChange={(e) => handleChangeCurrency(e, setEnterpriseInput)}
        />
        <div className="w-full mt-2">
          <Button
            text={`${isCreateUser ? "Criar cliente" : "Editar cliente"}`}
            type={"type2"}
            onClick={handleSubmit}
          />
        </div>
      </div>
      ;
    </div>
  );
}
