import { useQueryCache } from '@/app/cache';

import { StoreQueryKeys } from '../../keys/store.keys';
import { StoreService } from '../../services';

import { IUseGetStorePayload } from '../../types/stores.types';

export function useGetStore(payload: IUseGetStorePayload) {
  const { data, isLoading } = useQueryCache({
    queryKey: [StoreQueryKeys['GET_STORE'], payload],
    queryFn: async () => StoreService.getStore(payload),
    enabled: payload.enabled
  });

  return {
    store: data,
    isLoadingStore: isLoading
  };
}
