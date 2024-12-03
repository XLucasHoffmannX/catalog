import { create } from 'zustand';

import { IProductManagerContext } from './useProductManagerContext.types';

export const useProductManagerContext = create<IProductManagerContext>()(
  set => ({
    isOpenRemoveModal: {
      open: false,
      title: ''
    },
    filters: {
      page: 1,
      limit: 10,
      search: null,
      storeId: null
    },

    handleChangeFilter: ({ page, limit, search, storeId }) => {
      set(state => ({
        filters: {
          ...state.filters,
          ...(typeof search !== null && { search }),
          ...(typeof storeId !== null && { storeId }),
          ...(page && { page }),
          ...(limit && { limit })
        }
      }));
    },
    handleChangeRemoveModal: value => {
      set({ isOpenRemoveModal: { open: value.open, title: value.title } });
    }
  })
);
