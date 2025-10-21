export type User = {
  name: string;
  lastName: string;
  birthDay: string;
  documentType: 'DNI' | 'CE';
  documentNumber: string;
  phone: string;
};

export type Plan = {
  name: string;
  price: number;
  age: number;
  description: string[];
};

export type PlansResponse = {
  list: Plan[]
};
