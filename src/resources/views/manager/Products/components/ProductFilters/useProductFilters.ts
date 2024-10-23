import { useManagementSession } from '@/app/modules/manager/auth/use-cases';
import { useGetListStoresByCompany } from '@/app/modules/manager/store/use-cases';

export function useProductFilters() {
  const { companyId } = useManagementSession();

  const { listStores, isLoadingListStores } = useGetListStoresByCompany({
    companyId: companyId || '',
    enabled: !!companyId
  });

  return {
    listStores,
    isLoadingListStores
  };
}
