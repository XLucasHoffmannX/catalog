import { create } from 'zustand';

import { IUseDeliveryContext } from './useDeliveryContext.types';

export const useDeliveryContext = create<IUseDeliveryContext>()(set => ({
  address: null,
  addressForm: { isOpen: false, type: 'CREATE' },

  handleSetAddressForm: value => {
    set({ addressForm: value });
  },

  handleSetAddress: address => {
    if (address) {
      set({ address: address });
    }
    return;
  }
}));
