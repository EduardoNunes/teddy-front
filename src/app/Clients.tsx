import { useState } from "react";
import { JsonClients } from "../../public/data/JsonClients.js";
import Button from "../components/Button.js";
import Card from "../components/Card.js";
import Header from "../components/Header.js";
import { useGlobalContext } from "../context/globalContext.js";
import Modal from "../components/Modal.js";

export default function Clients() {
  const { isOpenModal, setIsOpenModal, setIsCreateUser } = useGlobalContext();
  const [clientsPerPage, setClientsPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(JsonClients.length / clientsPerPage);

  const startIndex = (currentPage - 1) * clientsPerPage;
  const currentClients = JsonClients.slice(
    startIndex,
    startIndex + clientsPerPage
  );

  const handleClientsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setClientsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleCreateClient = () => {
    setIsOpenModal(true);
    setIsCreateUser(true);
  };

  return (
    <div className="flex flex-col items-center w-[100vw] h-[100vh] bg-colorbackground">
      {isOpenModal && <Modal />}
      <Header />
      <div className="w-[80%]">
        <div className="flex justify-between w-full mt-6 mb-2">
          <span>
            <strong>{JsonClients.length} </strong>clientes encontrados
          </span>
          <div className="flex gap-2">
            <span>Clientes por página:</span>
            <select
              value={clientsPerPage}
              onChange={handleClientsPerPageChange}
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value={16}>16</option>
              <option value={24}>24</option>
              <option value={32}>32</option>
              <option value={40}>40</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-between h-[65vh] overflow-y-auto">
          {currentClients.map((client, index: number) => (
            <Card
              key={index}
              name={client.name}
              salary={client.salary}
              enterprise={client.enterprise}
            />
          ))}
        </div>

        <Button
          text="Criar cliente"
          type="type3"
          onClick={handleCreateClient}
        />
        <div className="flex justify-center w-full">
          <div className="mt-4 flex justify-between w-[250px]">
            <button
              onClick={() => goToPage(1)}
              className="font-inter font-bold text-siz14 text-textblack"
            >
              1
            </button>
            <span>...</span>
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`font-inter font-bold text-siz14 text-textblack`}
            >
              {currentPage === 1 ? "." : currentPage - 1}
            </button>
            <div className="flex items-center justify-center w-[35px] h-[35px] bg-colororange rounded-[4px]">
              <span className="font-inter font-bold text-siz14 text-fullwhite">
                {currentPage}
              </span>
            </div>
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="font-inter font-bold text-siz14 text-textblack"
            >
              {currentPage === totalPages ? "." : currentPage + 1}
            </button>
            <span>...</span>
            <button
              onClick={() => goToPage(totalPages)}
              className="font-inter font-bold text-siz14 text-textblack"
            >
              {totalPages}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
