import { useQueryCache } from '@/app/cache';

import { ProductQueryKeys } from '../../keys/products.key';
import ProductService from '../../service/Product.service';

import {
  IUseGetProductList,
  IUseGetProductListPayload
} from '../../types/product.types';

export function useGetProductList(
  payload: IUseGetProductListPayload
): IUseGetProductList {
  const { data: productList, isLoading: isLoadingProducts } = useQueryCache({
    queryKey: [ProductQueryKeys.GET_PRODUCT_LIST],
    queryFn: async () => {
      return await ProductService.getProductList(payload);
    }
  });

  return {
    productList: productList?.data,
    isLoadingProducts
  };
}
