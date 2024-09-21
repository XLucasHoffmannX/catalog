import { IAddressClient } from '@/shared/types';

export interface IAddress extends IAddressClient {
  id: string;
  principal: boolean;
}

export type IAddressFormType = {
  type: 'EDIT' | 'CREATE';
  isOpen: boolean;
};

export interface IUseDeliveryContext {
  address: IAddress | null;
  addressForm: IAddressFormType;
  handleSetAddressForm: (value: IAddressFormType) => void;
  handleSetAddress: (address: IAddress) => void;
}
