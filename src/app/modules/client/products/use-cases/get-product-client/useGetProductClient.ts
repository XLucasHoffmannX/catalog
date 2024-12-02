import { useQueryCache } from '@/app/cache';

import { ProductQueryKeys } from '../../keys/products.key';
import ProductService from '../../service/Product.service';

import { IUseGetProductClientPayload } from '../../types/product.types';

export function useGetProductClient(payload: IUseGetProductClientPayload) {
  const { data, isFetching } = useQueryCache({
    queryKey: [ProductQueryKeys.GET_PRODUCT_CLIENT, payload],
    queryFn: async () => await ProductService.getProductClient(payload),
    enabled: payload.enabled
  });

  return {
    products: data,
    isLoadingProducts: isFetching
  };
}
