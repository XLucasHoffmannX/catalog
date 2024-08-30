import { create } from 'zustand';

import { IUseCartontext } from './useCartContext.types';

export const useCartContext = create<IUseCartontext>()(set => ({
  isOpenCart: false,

  handleChangeIsOpenCart: (value: boolean) => {
    return set({ isOpenCart: value });
  }
}));
