import { ThemeType } from '@/app/modules/client/domains/types/domain.types';

import { IThemeVariables } from './theme.types';

export interface IClient {
  clientName: string;
  clientLogo: string;
  clientDescription: string;
  titleHmtl: string;
  clientDomain: string;
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
  isLastUnits?: boolean /* mostrar icon de ultimas unidades */;
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

export interface ICategoriesClient {
  name: string;
  defaultIcon: string;
  icon: string | null;
}

export interface IAddressClient {
  postalCode: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface IUpdateStoreSetup {
  client: IClient;
  theme: {
    type: ThemeType;
    header?: IThemeVariables['header'];
  };
}
