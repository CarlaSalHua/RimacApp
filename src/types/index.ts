export type User = {
  name: string;
  lastname: string;
  birthday: string;
  documentType: 'DNI' | 'CE';
  documentNumber: string;
  phone: string;
};

export type Plan = {
  name: string;
  price: number;
  description: string[];
};

export type PlansResponse = {
  list: Plan[];
};
