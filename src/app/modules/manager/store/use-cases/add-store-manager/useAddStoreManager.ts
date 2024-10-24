import { useMutation } from '@tanstack/react-query';

import { StoreMutationKeys } from '../../keys/store.keys';
import { StoreService } from '../../services';

import { IUseAddStorePayload } from '../../types/stores.types';

export function useAddStoreManager() {
  const { mutateAsync, isPending, isError } = useMutation({
    mutationKey: [StoreMutationKeys.ADD_STORE],
    mutationFn: (data: IUseAddStorePayload) => {
      return StoreService.addStoreService(data);
    }
  });

  return {
    mutateAddStore: mutateAsync,
    isPendingMutate: isPending,
    isError
  };
}
