import { create } from 'zustand';

import { IUseClientContext } from './useClientContext.types';

export const useClientContext = create<IUseClientContext>()(set => ({
  filters: {
    page: 1,
    limit: 10,
    search: null
  },

  handleChangeFilter: ({ page, limit, search }) => {
    set(state => ({
      filters: {
        ...state.filters,
        ...(typeof search !== null && { search }),
        ...(page && { page }),
        ...(limit && { limit })
      }
    }));
  }
}));
