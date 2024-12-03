import { create } from 'zustand';

import { IUseCartContext } from './useCartContext.types';

export const useCartContext = create<IUseCartContext>()((set, get) => ({
  cartItems: null,
  cart: {
    amountTotal: 0,
    quantityItems: 0,
    fareTotal: 0
  },
  itemToBeRemoved: null,
  sortByDate: 'default',
  isOpenDeliveryOptionsModal: false,

  handleSortByDate: () => {
    switch (get().sortByDate) {
      case 'asc':
        set({ sortByDate: 'default' });
        break;
      case 'desc':
        set({ sortByDate: 'asc' });
        break;
      default:
        set({ sortByDate: 'desc' });
    }
  },

  handleItemToBeRemoved: item => {
    set({ itemToBeRemoved: item });
  },

  handleSetCartItem: item => {
    set(state => {
      const cartItems = state.cartItems || [];

      // Verifica se o item já existe no carrinho pelo ID
      const existingItemIndex = cartItems.findIndex(
        cartItem => cartItem.id === item.id
      );

      let updatedCartItems;

      if (existingItemIndex !== -1) {
        // Atualiza a quantidade de itens no carrinho
        updatedCartItems = [...cartItems];

        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          // Soma a quantidade do item atual com a nova quantidade
          quantityCart:
            (updatedCartItems[existingItemIndex].quantityCart || 0) +
            (item.quantityCart || 1)
        };
      } else {
        // Adiciona o novo item ao carrinho
        updatedCartItems = [
          ...cartItems,
          { ...item, quantityCart: item.quantityCart || 1 }
        ];
      }

      // Recalcula a quantidade total de itens no carrinho e o valor total
      const totalQuantity = updatedCartItems.reduce(
        (sum, cartItem) => sum + (cartItem.quantityCart || 0),
        0
      );

      const amountTotal = updatedCartItems.reduce(
        (sum, cartItem) => sum + cartItem.price * (cartItem.quantityCart || 0),
        0
      );

      return {
        cartItems: updatedCartItems,
        cart: {
          quantityItems: totalQuantity,
          amountTotal: amountTotal,
          fareTotal: 0
        }
      };
    });
  },

  handleDecreaseCartItem: uuidControl => {
    set(state => {
      const cartItems = state.cartItems || [];

      const existingItemIndex = cartItems.findIndex(
        cartItem => cartItem.uuidControl === uuidControl
      );

      // Se o item não for encontrado, retorne o estado atual
      if (existingItemIndex === -1) {
        return { cartItems };
      }

      const updatedCartItems = [...cartItems];

      // Diminuir a quantidade do item
      const updatedItem = { ...updatedCartItems[existingItemIndex] };

      updatedItem.quantityCart = (updatedItem.quantityCart || 1) - 1;

      // Se a quantidade do item for 0 ou menor, remova-o do carrinho
      if (updatedItem.quantityCart <= 0) {
        updatedCartItems.splice(existingItemIndex, 1); // Remove o item do array
      } else {
        updatedCartItems[existingItemIndex] = updatedItem; // Atualiza o item
      }

      // Recalcula a quantidade total de itens no carrinho e o valor total
      const totalQuantity = updatedCartItems.reduce(
        (sum, cartItem) => sum + (cartItem.quantityCart || 0),
        0
      );

      const amountTotal = updatedCartItems.reduce(
        (sum, cartItem) => sum + cartItem.price * (cartItem.quantityCart || 0),
        0
      );

      return {
        cartItems: updatedCartItems,
        cart: {
          quantityItems: totalQuantity,
          amountTotal: amountTotal,
          fareTotal: 0
        }
      };
    });
  },

  handleIncreaseCartItem: uuidControl => {
    set(state => {
      const cartItems = state.cartItems || [];

      // Encontra o índice do item baseado no uuidControl
      const existingItemIndex = cartItems.findIndex(
        cartItem => cartItem.uuidControl === uuidControl
      );

      // Se o item não for encontrado, retorne o estado atual
      if (existingItemIndex === -1) {
        return { cartItems };
      }

      const updatedCartItems = [...cartItems];

      // Atualiza o item, somando 1 à quantidade atual
      const updatedItem = { ...updatedCartItems[existingItemIndex] };
      updatedItem.quantityCart = (updatedItem.quantityCart || 0) + 1;

      // Atualiza o array de itens no carrinho com o item incrementado
      updatedCartItems[existingItemIndex] = updatedItem;

      // Recalcula a quantidade total de itens no carrinho e o valor total
      const totalQuantity = updatedCartItems.reduce(
        (sum, cartItem) => sum + (cartItem.quantityCart || 0),
        0
      );

      const amountTotal = updatedCartItems.reduce(
        (sum, cartItem) => sum + cartItem.price * (cartItem.quantityCart || 0),
        0
      );

      return {
        cartItems: updatedCartItems,
        cart: {
          quantityItems: totalQuantity,
          amountTotal: amountTotal,
          fareTotal: 0
        }
      };
    });
  },

  handleRemoveCartItem: uuidControl => {
    set(state => {
      const cartItems = state.cartItems || [];

      const updatedCartItems = cartItems.filter(
        cartItem => cartItem.uuidControl !== uuidControl
      );

      const totalQuantity = updatedCartItems.reduce(
        (sum, cartItem) => sum + (cartItem.quantityCart || 0),
        0
      );

      const amountTotal = updatedCartItems.reduce(
        (sum, cartItem) => sum + cartItem.price * (cartItem.quantityCart || 0),
        0
      );

      return {
        cartItems: updatedCartItems,
        cart: {
          quantityItems: totalQuantity,
          amountTotal: amountTotal,
          fareTotal: 0
        }
      };
    });
  },

  handleChangeIsOpenDeliveryOptionsModal: (value: boolean) => {
    return set({ isOpenDeliveryOptionsModal: value });
  }
}));
