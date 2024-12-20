import { useEffect } from 'react';

import { useStoreContext } from '@/app/contexts';
import { useManagementSession } from '@/app/modules/manager/auth/use-cases';
import { useGetListStoresByCompany } from '@/app/modules/manager/store/use-cases';

export function useAccountSwitcher() {
  const { companyId } = useManagementSession();

  const { listStores, isLoadingListStores } = useGetListStoresByCompany({
    companyId: companyId || '',
    enabled: !!companyId
  });

  const { store, handleSetStore } = useStoreContext();

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
