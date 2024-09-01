import { create } from 'zustand';

import { IUseCartontext } from './useCartContext.types';

export const useCartContext = create<IUseCartontext>()(set => ({
  isOpenDeliveryOptionsModal: false,

  handleChangeIsOpenDeliveryOptionsModal: (value: boolean) => {
    return set({ isOpenDeliveryOptionsModal: value });
  }
}));
