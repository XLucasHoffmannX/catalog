export interface ICompany {
  id?: string;
  name: string;
  createdAt: string;
  upadteAt: string;
}

export interface IProductManagerCompany {
  id?: string;
  companyId?: string;
  storeId?: string;
  name: string;
  price: number;
  description: string;
  content: string;
  available: number;
  discount: number;
  quantity: number;
  minQuantity: number;
  category: string;
  createdAt: string;
  updatedAt: string;
  images: string[];
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: 'OWNER_USER' | string;
  createdAt: string;
  updateAt: string;
  deletedAt: string | null;
  company?: ICompany;
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

export interface IStore {
  id: string;
  name: string;
  title: string;
  description: string;
}

export interface IAddProduct {
  name: string;
  description: string;
  content: string;
  price: number;
  available: number;
  discount: number;
  quantity: number;
  minQuantity: number;
  category: string;
  storeId: string;
  companyId: string;
}
