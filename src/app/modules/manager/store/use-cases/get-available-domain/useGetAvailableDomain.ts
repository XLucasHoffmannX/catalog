import { useQueryCache } from '@/app/cache';

import { StoreQueryKeys } from '../../keys/store.keys';
import { StoreService } from '../../services';

import { IUseGetAvailableDomainPayload } from '../../types/stores.types';

export function useGetAvailableDomain(payload: IUseGetAvailableDomainPayload) {
  const { data, isLoading } = useQueryCache({
    queryKey: [StoreQueryKeys['AVAILABLE_DOMAIN'], payload.domain],
    queryFn: async () =>
      StoreService.getAvailableDomain({ domain: payload.domain }),
    enabled: payload.enabled
  });

  return {
    isAvailableDomain: data,
    isLoadingAvailableDomain: isLoading
  };
}
