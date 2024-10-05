import { useMutation } from '@tanstack/react-query';

import { ProductMutationKeys } from '../../keys/products.key';
import ProductService from '../../service/Product.service';

import { IAddProductManagerPayload } from '../../types/product.types';

export function useAddProductManager() {
  const { mutateAsync, isPending, isError } = useMutation({
    mutationKey: [ProductMutationKeys.ADD_PRODUCT_MANAGER],
    mutationFn: (data: IAddProductManagerPayload) => {
      return ProductService.addProductManager(data);
    }
  });

  return {
    mutateAddProductManager: mutateAsync,
    isPendingMutate: isPending,
    isError
  };
}
