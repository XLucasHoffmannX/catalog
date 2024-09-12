export interface IClient {
  clientName: string;
  clientLogo: string;
  clientDescription: string;
  clientDomain: string;
  token: string;
  clientBackground?: string;
  mediaLinks?: string[];
  useBackgroundDefaultPage?: boolean;
}

export interface IProductClient {
  id: string;
  avaliable: string;
  isAvaliable?: boolean /* mostrar icone de avaliação */;
  title: string;
  subTitle?: string;
  quantity: number;
  isLastUnits?: boolean /* mostrar icon de ultimas undades */;
  minQuantity?: number;
  price: number;
  isDiscount?: boolean /* mostrar icon de desconto */;
  discount?: number;
  resource: boolean;
  images?: string[];
  category?: string;
  fareUnique?: number;
}

export interface ICartItemClient extends IProductClient {
  uuidControl: string;
  quantityCart?: number;
  dateAdd: string;
}
