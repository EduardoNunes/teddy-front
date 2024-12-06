import React, { ReactNode, createContext, useContext, useState } from "react";
import api from "../api/api";
import { ClientsData } from "../types/typesClients";

interface FormData {
  name: string;
  salary: number;
  enterprise: number;
}

interface GlobalContextType {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateUser: boolean;
  setIsCreateUser: React.Dispatch<React.SetStateAction<boolean>>;
  isToasty: boolean;
  setIsToasty: React.Dispatch<React.SetStateAction<boolean>>;
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

  const createClientReq = async (
    formData: FormData
  ): Promise<string | unknown> => {
    try {
      await api.post("/clients", formData);
      return "Usuário criado com sucesso!";
    } catch (error: unknown) {
      console.log(error);
      return error;
    }
  };

  const editClientReq = async (
    id: string,
    formData: FormData
  ): Promise<string | unknown> => {
    try {
      await api.put(`/clients/${id}`, formData);
      return "Usuário editado com sucesso!";
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
