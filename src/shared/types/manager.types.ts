export interface IUser {
  id: number;
  login: string;
  role: string;
  empresa: string;
  password: string;
  companyId: number;
}

export interface IProductManagerImage {
  id?: number;
  url?: string;
  base64?: string;
  blob?: string[];
}

export interface IProductManager {
  id: number;
  name: string;
  description: string;
  price: number;
  companyId: number;
  images: IProductManagerImage[];
}
