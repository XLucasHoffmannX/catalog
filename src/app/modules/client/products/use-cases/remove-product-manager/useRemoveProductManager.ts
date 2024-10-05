import { useMutation } from '@tanstack/react-query';

import { ProductMutationKeys } from '../../keys/products.key';
import ProductService from '../../service/Product.service';

import { IRemoveProductManagerPayload } from '../../types/product.types';

export function useRemoveProductManager() {
  const { mutateAsync, isPending, isError } = useMutation({
    mutationKey: [ProductMutationKeys.REMOVE_PRODUCT_MANAGER],
    mutationFn: (payload: IRemoveProductManagerPayload) => {
      return ProductService.removeProductManager(payload);
    }
  });

  return {
    mutateRemoveProductManager: mutateAsync,
    isPending: isPending,
    isError
  };
}
