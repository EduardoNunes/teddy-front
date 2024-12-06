export interface TypesClients {
  name: string;
  salary: number;
  enterprise: number;
}

export type Client = {
  id: string;
  name: string;
  salary: number;
  enterprise: number;
};

export type ClientsData = {
  data: Client[];
  total: number;
};
