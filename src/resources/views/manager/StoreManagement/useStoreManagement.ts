import { useParams } from 'react-router-dom';

import { useManagementSession } from '@/app/modules/manager/auth/use-cases';
import { useGetStore } from '@/app/modules/manager/store/use-cases';

export function useStoreManagement() {
  const { id } = useParams();

  const { companyId } = useManagementSession();

  const { store, isLoadingStore } = useGetStore({
    companyId: companyId || '',
    storeId: id || '',
    enabled: !!id && !!companyId
  });

  return {
    store,
    isLoadingStore
  };
}
