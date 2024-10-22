import { useGetProductManagerListByCompany } from '@/app/modules/client/products';
import { useManagementSession } from '@/app/modules/manager/auth/use-cases';

export function useTableProduct() {
  const { company } = useManagementSession();

  const { productListByCompany, isFetching: isFetchingProductListCompany } =
    useGetProductManagerListByCompany({
      page: 1,
      limit: 10,
      companyId: company?.id || '',
      enabled: !!company?.id
    });

  return {
    productListByCompany,
    isLoading: isFetchingProductListCompany
  };
}
