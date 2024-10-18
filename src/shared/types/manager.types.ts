export interface IUser {
  id: string;
  name: string;
  email: string;
  role: 'OWNER_USER' | string;
  createdAt: string;
  updateAt: string;
  deletedAt: string | null;
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
