import { useProductManagerContext } from '@/app/contexts';
import { useGetProductManagerListByCompany } from '@/app/modules/client/products';
import { useManagementSession } from '@/app/modules/manager/auth/use-cases';

export function useTableProduct() {
  const { company } = useManagementSession();

  const { filters } = useProductManagerContext();

  const { productListByCompany, isFetching: isFetchingProductListCompany } =
    useGetProductManagerListByCompany({
      page: filters.page,
      limit: filters.limit,
      companyId: company?.id || '',
      search: filters.search,
      enabled: !!company?.id
    });

  return {
    productListByCompany,
    isLoading: isFetchingProductListCompany
  };
}
