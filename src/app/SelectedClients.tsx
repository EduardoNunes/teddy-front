import Button from "../components/Button.js";
import Card from "../components/Card";
import Header from "../components/Header.js";

export default function SelectedClients() {
  return (
    <div className="flex flex-col items-center w-[100vw] h-[100vh] bg-colorbackground">
      <Header />
      <div className="w-[80%]">
        <h1 className="font-inter font-bold text-size22 text-textblack mt-6 mb-2">
          Clientes selecionados:
        </h1>

        <div className="flex flex-wrap gap-4 justify-between h-[65vh] overflow-y-auto">
          {/*           {selectedClients.map((client, index: number) => (
            <Card
              key={index}
              name={client.name}
              salary={client.salary}
              enterprise={client.enterprise}
            />
          ))} */}
        </div>

        <Button text="Limpar clientes selecionados" type="type3" />
      </div>
    </div>
  );
}
