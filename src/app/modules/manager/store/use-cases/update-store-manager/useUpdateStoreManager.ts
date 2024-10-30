import { useMutationCache } from '@/app/cache';

import { StoreMutationKeys } from '../../keys/store.keys';
import { StoreService } from '../../services';

import { IUseUpdateStorePayload } from '../../types/stores.types';

export function useUpdateStoreManager() {
  const { mutateAsync, isPending, isError } = useMutationCache({
    mutationKey: [StoreMutationKeys.UPDATE_STORE],
    mutationFn: (payload: IUseUpdateStorePayload) => {
      return StoreService.updateStoreService(payload);
    }
  });

  return {
    mutateUpdateStore: mutateAsync,
    isPendingMutate: isPending,
    isError
  };
}
