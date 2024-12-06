import React, { ReactNode, createContext, useContext, useState } from "react";
import api from "../api/api";

interface GlobalContextType {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateUser: boolean;
  setIsCreateUser: React.Dispatch<React.SetStateAction<boolean>>;
  createClientReq: (formData: {
    name: string;
    salary: string;
    enterprise: string;
  }) => Promise<string | undefined>;
}

const GlobalContext = createContext<GlobalContextType | null>(null);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isCreateUser, setIsCreateUser] = useState(false);

  const createClientReq = async (formData: {
    name: string;
    salary: string;
    enterprise: string;
  }) => {
    try {
      const response = await api.post("/cycle/create", formData);
      return response.data.message;
    } catch (error) {
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
