import { useMutation } from '@tanstack/react-query';

import { ProductMutationKeys } from '../../keys/products.key';
import ProductService from '../../service/Product.service';

export function useAddProductImages() {
  const { mutateAsync, isPending, isError } = useMutation({
    mutationKey: [ProductMutationKeys.ADD_PRODUCT_IMAGES],
    mutationFn: (data: FormData) => {
      return ProductService.addProductImages(data);
    }
  });

  return {
    mutateAddProductImages: mutateAsync,
    isPendingMutate: isPending,
    isError
  };
}
