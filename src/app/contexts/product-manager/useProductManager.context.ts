import { create } from 'zustand';

import { IProductManagerContext } from './useProductManagerContext.types';

export const useProductManagerContext = create<IProductManagerContext>()(
  set => ({
    isOpenRemoveModal: {
      open: false,
      title: ''
    },
    handleChangeRemoveModal: value => {
      set({ isOpenRemoveModal: { open: value.open, title: value.title } });
    }
  })
);
