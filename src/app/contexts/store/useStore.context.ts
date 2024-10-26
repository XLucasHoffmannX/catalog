import { create } from 'zustand';

import { IUseStoreContext } from './useStoreContext.types';

export const useStoreContext = create<IUseStoreContext>()(set => ({
  store: undefined,

  handleSetStore: store => {
    set({ store: store });
  }
}));
