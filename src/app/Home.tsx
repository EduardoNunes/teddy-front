import { JsonClients } from "../../public/data/JsonClients.js";
import Button from "../components/Button.js";
import Card from "../components/Card.js";
import Header from "../components/Header.js";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-[100vw] h-[100vh] bg-colorbackground">
      <Header />
      <div className="w-[80%]">
        <div className="flex justify-between w-full mt-6 mb-2">
          <span>
            <strong>16 </strong>clientes encontrados
          </span>
          <div className="flex gap-2">
            <span>Clientes por página:</span>
            <select></select>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-between h-[70vh] overflow-y-auto">
          {JsonClients.map((client, index: number) => (
            <Card
              key={index}
              name={client.name}
              salary={client.salary}
              enterprise={client.enterprise}
            />
          ))}
        </div>
        <Button text="Criar cliente" type={"type3"} />
      </div>
    </div>
  );
}
