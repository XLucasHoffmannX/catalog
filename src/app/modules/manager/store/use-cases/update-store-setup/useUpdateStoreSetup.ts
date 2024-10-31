import { useMutationCache } from '@/app/cache';

import { StoreMutationKeys } from '../../keys/store.keys';
import { StoreService } from '../../services';

import { IUseUpdateStoreSetupPayload } from '../../types/stores.types';

export function useUpdateStoreSetup() {
  const { mutateAsync, isPending, isError } = useMutationCache({
    mutationKey: [StoreMutationKeys.UPDATE_STORE],
    mutationFn: (data: IUseUpdateStoreSetupPayload) => {
      return StoreService.updateStoreSetup(data);
    }
  });

  return {
    mutateUpdateStoreStup: mutateAsync,
    isPendingMutate: isPending,
    isError
  };
}
