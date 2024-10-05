export interface IUser {
  id: number;
  login: string;
  role: string;
  empresa: string;
  password: string;
  companyId: number;
}

export interface IProductManagerImages {
  id?: number;
  uuidControl?: string;
  url?: string;
  base64?: string;
  blob?: string[];
}

export interface IProductManager {
  id?: number;
  name: string;
  description: string;
  subDescription: string;
  price: number;
  avaliable: string;
  isAvaliable: boolean;
  minQuantity: number;
  isLastUnits: boolean;
  isDiscount: boolean;
  discount: number;
  category: boolean;
  companyId: number;
  images: IProductManagerImages[] | [];
}
