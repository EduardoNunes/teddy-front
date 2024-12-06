import { useEffect } from "react";
import Button from "../components/Button.js";
import CardSavedClient from "../components/CardSavedClient.js";
import Header from "../components/Header.js";
import Toasty from "../components/Toasty.js";
import { useGlobalContext } from "../context/globalContext.js";

export default function SelectedClients() {
  const { allSavedClients, findAllSavedClientsReq, isToasty, messageToasty } =
    useGlobalContext();

  useEffect(() => {
    findAllSavedClientsReq();
  }, []);

  console.log(allSavedClients);

  return (
    <div className="flex flex-col items-center w-[100vw] h-[100vh] bg-colorbackground">
      {isToasty && <Toasty text={messageToasty} />}
      <Header />
      <div className="w-[80%]">
        <h1 className="font-inter font-bold text-size22 text-textblack mt-6 mb-2">
          Clientes selecionados:
        </h1>

        <div className="flex flex-wrap gap-4 justify-between h-[65vh] overflow-y-auto">
          {allSavedClients.map((client, index: number) => (
            <CardSavedClient
              id={client.id}
              key={index}
              name={client.client.name}
              salary={client.client.salary}
              enterprise={client.client.enterprise}
            />
          ))}
        </div>

        <Button text="Limpar clientes selecionados" type="type3" />
      </div>
    </div>
  );
}
