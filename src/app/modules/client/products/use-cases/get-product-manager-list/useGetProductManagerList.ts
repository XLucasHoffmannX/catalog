import { useQueryCache } from '@/app/cache';

import { ProductQueryKeys } from '../../keys/products.key';
import ProductService from '../../service/Product.service';

export function useGetProductManagerList() {
  const { data, isFetching } = useQueryCache({
    queryKey: [ProductQueryKeys.GET_PRODUCT_MANAGER_LIST],
    queryFn: async () => await ProductService.getProductManagerList()
  });

  return {
    productList: data,
    isFetching: isFetching
  };
}
