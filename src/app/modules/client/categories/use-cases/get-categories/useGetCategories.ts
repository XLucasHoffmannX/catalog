import { useQueryCache } from '@/app/cache';

import { CategoriesQueryKeys } from '../../keys/categories.key';
import CategoriesService from '../../service/Categories.service';

import {
  IUseGetProductList,
  IUseGetProductListPayload
} from '../../types/categories.types';

export function useGetCategories(
  payload: IUseGetProductListPayload
): IUseGetProductList {
  const { data: categorioes, isLoading: isLoadingCategories } = useQueryCache({
    queryKey: [CategoriesQueryKeys.GET_CATEGORIES],
    queryFn: async () => {
      return await CategoriesService.getCategories(payload);
    }
  });

  return {
    categories: categorioes?.data,
    isLoadingCategories
  };
}
