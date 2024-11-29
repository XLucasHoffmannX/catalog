import { useEffect } from 'react';

import { useStoreContext } from '@/app/contexts';
import { useManagementSession } from '@/app/modules/manager/auth/use-cases';
import { useGetListStoresByCompany } from '@/app/modules/manager/store/use-cases';

export function useStoreSwitcher() {
  const { companyId } = useManagementSession();
  const { store, handleSetStore } = useStoreContext();

  const { listStores, isLoadingListStores } = useGetListStoresByCompany({
    companyId: companyId || '',
    enabled: !!companyId
  });

  useEffect(() => {
    if (listStores && listStores.length > 0 && !store) {
      handleSetStore(listStores[0]);
    }
  }, [listStores, store]);

  return {
    listStores,
    isLoadingListStores
  };
}
