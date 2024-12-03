import { create } from 'zustand';

import { IUseStoreContext } from './useStoreContext.types';

export const useStoreContext = create<IUseStoreContext>()(set => ({
  store: undefined,
  storeClient: undefined,

  visibleFinishModal: {
    isVisible: false,
    storeId: undefined
  },

  handleVisibleFinishModal: value => {
    set({ visibleFinishModal: value });
  },

  handleSetStore: store => {
    set({ store: store });
  },

  handleSetStoreClient: store => {
    set({ storeClient: store });
  }
}));
