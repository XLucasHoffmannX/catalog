import { useProductManagerContext } from '@/app/contexts';
import { useGetProductManagerListByCompany } from '@/app/modules/client/products';
import { useManagementSession } from '@/app/modules/manager/auth/use-cases';

export function useTableProduct() {
  const { companyId } = useManagementSession();

  const { filters } = useProductManagerContext();

  const { productListByCompany, isFetching: isFetchingProductListCompany } =
    useGetProductManagerListByCompany({
      page: filters.page,
      limit: 15,
      companyId: companyId || '',
      search: filters.search || '',
      storeId:
        filters.storeId === 'none' ? undefined : filters.storeId || undefined,
      enabled: !!companyId
    });

  return {
    productListByCompany,
    isLoading: isFetchingProductListCompany
  };
}
