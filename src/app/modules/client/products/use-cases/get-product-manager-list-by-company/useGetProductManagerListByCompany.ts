import { useQueryCache } from '@/app/cache';

import { ProductQueryKeys } from '../../keys/products.key';
import ProductService from '../../service/Product.service';

import { IUseGetProductManagerListByCompanyPayload } from '../../types/product.types';

export function useGetProductManagerListByCompany(
  payload: IUseGetProductManagerListByCompanyPayload
) {
  const { data, isFetching } = useQueryCache({
    queryKey: [ProductQueryKeys.GET_PRODUCT_MANAGER_LIST_BY_COMPANY],
    queryFn: async () =>
      await ProductService.getProductManagerListByCompany(payload),
    enabled: payload.enabled
  });

  return {
    productListByCompany: data,
    isFetching: isFetching
  };
}
