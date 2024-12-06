export interface TypesClients {
  id: string;
  name: string;
  salary: number;
  enterprise: number;
}

export type Client = {
  client?: any;
  id: string;
  name: string;
  salary: number;
  enterprise: number;
};

export type ClientsData = {
  data: Client[];
  total: number;
};

export interface FormData {
  name: string;
  salary: number;
  enterprise: number;
}

export interface SelectedClientData {
  name: string;
  salary: number;
  enterprise: number;
}
