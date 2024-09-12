import { useEffect, useState } from 'react';

import { useCartContext } from '@/app/contexts';
import { useDebounce } from '@/shared/hooks';
import { ICartItemClient } from '@/shared/types';

import { ICartPaginationParams } from './Cart.types';

export function useCartView() {
  const { itemToBeRemoved, cartItems } = useCartContext();

  const [cartParams, setCartParams] = useState<ICartPaginationParams>({
    currentPage: 1,
    pageSize: 10,
    searchInput: ''
  });

  const debouncedSearchInputValue = useDebounce(cartParams.searchInput);

  function sortBalanceSolicitationsBySearch(
    cartItems: ICartItemClient[],
    searchString: string
  ): ICartItemClient[] {
    const searchLowerCase = searchString.toLowerCase();

    return cartItems
      .filter(item => item.title.toLowerCase().includes(searchLowerCase))
      .sort((itemA, itemB) => {
        const aIncludes = itemA.title.toLowerCase().includes(searchLowerCase);
        const bIncludes = itemB.title.toLowerCase().includes(searchLowerCase);

        return aIncludes && !bIncludes
          ? -1
          : !aIncludes && bIncludes
          ? 1
          : itemA.title.localeCompare(itemB.title);
      });
  }

  const sort = sortBalanceSolicitationsBySearch(
    cartItems ?? [],
    debouncedSearchInputValue
  );

  const items = cartParams.searchInput !== '' ? sort : cartItems;

  function handleChangeSearchParam<T extends keyof ICartPaginationParams>(
    type: T,
    value: ICartPaginationParams[T]
  ): void {
    switch (type) {
      case 'searchInput':
        setCartParams(oldState => ({
          ...oldState,
          currentPage: 1,
          searchInput: value as string
        }));
    }
  }

  function sortArrayByDate(
    array: ICartItemClient[],
    order: 'asc' | 'desc' | 'default'
  ): ICartItemClient[] {
    if (order === 'default') {
      return array;
    }

    const sortedArray = [...array];

    sortedArray.sort(function (a, b) {
      const dateA = new Date(a.dateAdd);
      const dateB = new Date(b.dateAdd);

      return order === 'asc'
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });

    return sortedArray;
  }

  const [isOpenRemovalConfirmationModal, setIsOpenRemovalConfirmationModal] =
    useState(!!itemToBeRemoved);

  useEffect(() => {
    if (!!itemToBeRemoved) {
      setIsOpenRemovalConfirmationModal(true);
    }
  }, [itemToBeRemoved]);

  return {
    items,
    cartParams,
    sortArrayByDate,
    handleChangeSearchParam,
    isOpenRemovalConfirmationModal,
    onChangeIsOpenRemovalConfirmationModal: setIsOpenRemovalConfirmationModal
  };
}
