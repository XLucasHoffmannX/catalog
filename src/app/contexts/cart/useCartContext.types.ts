import { ICartItemClient } from '@/shared/types';

export interface ICart {
  amountTotal: number;
  fareTotal: number /* total de taxas */;
  quantityItems: number;
}

export interface IUseCartontext {
  cart: ICart;
  itemToBeRemoved: ICartItemClient | null;
  cartItems: ICartItemClient[] | null;
  isOpenDeliveryOptionsModal: boolean;
  sortByDate: 'asc' | 'desc' | 'default';
  handleSortByDate: () => void;
  handleSetCartItem: (item: ICartItemClient) => void;
  handleItemToBeRemoved: (item: ICartItemClient | null) => void;
  handleChangeIsOpenDeliveryOptionsModal: (value: boolean) => void;
  handleIncreaseCartItem: (uuidControl: ICartItemClient['uuidControl']) => void;
  handleDecreaseCartItem: (uuidControl: ICartItemClient['uuidControl']) => void;
  handleRemoveCartItem: (uuidControl: ICartItemClient['uuidControl']) => void;
}
