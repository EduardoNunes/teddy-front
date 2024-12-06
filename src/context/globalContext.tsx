import React, { ReactNode, createContext, useContext, useState } from "react";
import api from "../api/api";
import { Client, ClientsData } from "../types/typesClients";
import { SelectedClientData, FormData } from "../types/typesClients";

interface GlobalContextType {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateUser: boolean;
  setIsCreateUser: React.Dispatch<React.SetStateAction<boolean>>;
  isToasty: boolean;
  setIsToasty: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenDelete: boolean;
  setIsOpenDelete: React.Dispatch<React.SetStateAction<boolean>>;
  createClientReq: (formData: FormData) => Promise<string | unknown>;
  editClientReq: (id: string, formData: FormData) => Promise<string | unknown>;
  findClientsReq: (
    page: number,
    limit: number
  ) => Promise<ClientsData | unknown>;
  messageToasty: string;
  setMessageToasty: React.Dispatch<React.SetStateAction<string>>;
  allClients: ClientsData;
  setAllClients: React.Dispatch<React.SetStateAction<ClientsData>>;
  selectedClient: string;
  setSelectedClient: React.Dispatch<React.SetStateAction<string>>;
  selectedClientData: SelectedClientData;
  setSelectedClientData: React.Dispatch<
    React.SetStateAction<SelectedClientData>
  >;
  deleteClientReq: (id: string) => Promise<string | unknown>;
  allSavedClients: Client[];
  setAllSavedClients: React.Dispatch<React.SetStateAction<Client[]>>;
  findAllSavedClientsReq: () => Promise<ClientsData | unknown>;
  deleteSavedClientReq: (id: number) => Promise<string | unknown>; 
}

const GlobalContext = createContext<GlobalContextType | null>(null);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isCreateUser, setIsCreateUser] = useState(false);
  const [isToasty, setIsToasty] = useState(false);
  const [messageToasty, setMessageToasty] = useState("");
  const [allClients, setAllClients] = useState<ClientsData>({
    data: [],
    total: 0,
  });
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedClientData, setSelectedClientData] =
    useState<SelectedClientData>({
      name: "",
      salary: 0,
      enterprise: 0,
    });
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [allSavedClients, setAllSavedClients] = useState<Client[]>([]);

  const createClientReq = async (
    formData: FormData
  ): Promise<string | unknown> => {
    try {
      await api.post("/clients", formData);
      return "Cliente criado com sucesso!";
    } catch (error: unknown) {
      console.log(error);
      return error;
    }
  };

  const editClientReq = async (
    id: string,
    formData: FormData
  ): Promise<string | unknown> => {
    const client = formData;

    try {
      await api.put(`/clients/${id}`, client);
      return "Cliente editado com sucesso!";
    } catch (error: unknown) {
      console.log(error);
      return error;
    }
  };

  const findClientsReq = async (
    page: number,
    limit: number
  ): Promise<ClientsData | unknown> => {
    try {
      const response = await api.get(`/clients`, {
        params: {
          page,
          limit,
        },
      });

      setAllClients(response.data);
      return response.data;
    } catch (error: unknown) {
      console.log(error);
      return error;
    }
  };

  const deleteClientReq = async (id: string): Promise<string> => {
    try {
      await api.delete(`/clients/${id}`);

      return "Cliente deletado com sucesso!";
    } catch (error: any) {
      console.error("Erro ao deletar Cliente:", error);
      return error.response?.data?.message || "Erro ao deletar Cliente.";
    }
  };

  const findAllSavedClientsReq = async (): Promise<ClientsData | unknown> => {
    try {
      const response = await api.get(`/saved-clients`);

      setAllSavedClients(response.data);
      return response.data;
    } catch (error: unknown) {
      console.log(error);
      return error;
    }
  };

  const deleteSavedClientReq = async (id: number): Promise<string> => {
    try {
      await api.delete(`/saved-clients/delete/${id}`);

      return "Cliente removido!";
    } catch (error: any) {
      console.error("Erro ao deletar Cliente:", error);
      return error.response?.data?.message || "Erro ao remover Cliente.";
    }
  };

  const contextValue: GlobalContextType = {
    isOpenMenu,
    setIsOpenMenu,
    isOpenModal,
    setIsOpenModal,
    isCreateUser,
    setIsCreateUser,
    createClientReq,
    editClientReq,
    findClientsReq,
    isToasty,
    setIsToasty,
    messageToasty,
    setMessageToasty,
    allClients,
    setAllClients,
    selectedClient,
    setSelectedClient,
    selectedClientData,
    setSelectedClientData,
    isOpenDelete,
    setIsOpenDelete,
    deleteClientReq,
    allSavedClients,
    setAllSavedClients,
    findAllSavedClientsReq,
    deleteSavedClientReq
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext deve ser usado dentro de um GlobalProvider"
    );
  }
  return context;
};
