import { useParams } from 'react-router-dom';

import { useGetStoreSetupByStoreId } from '@/app/modules/manager/store/use-cases';

export function useStoreManagement() {
  const { id } = useParams();

  const { setup, isLoadingSetup } = useGetStoreSetupByStoreId({
    storeId: id || '',
    enabled: !!id
  });

  return {
    store: setup?.store,
    isLoadingStore: isLoadingSetup
  };
}
