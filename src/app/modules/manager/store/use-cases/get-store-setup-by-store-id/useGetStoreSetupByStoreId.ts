import { useQueryCache } from '@/app/cache';

import { StoreQueryKeys } from '../../keys/store.keys';
import { StoreService } from '../../services';

import { IUseGetStoreSetupByStoreIdPayload } from '../../types/stores.types';

export function useGetStoreSetupByStoreId(
  payload: IUseGetStoreSetupByStoreIdPayload
) {
  const { data, isLoading, isError } = useQueryCache({
    queryKey: [
      StoreQueryKeys['GET_STORE_STEUP_BY_STORE_ID'],
      { storeId: payload.storeId }
    ],
    queryFn: async () => StoreService.getStoreSetupByStoreId(payload),
    enabled: payload.enabled
  });

  return {
    setup: data,
    isLoadingSetup: isLoading,
    isError
  };
}
