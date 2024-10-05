import { useGetProductManagerList } from '@/app/modules/client/products';

export function useTableProduct() {
  const { productList, isFetching } = useGetProductManagerList();

  console.log(productList);

  return {
    productList,
    isFetching
  };
}
