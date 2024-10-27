import { useMutationCache } from '@/app/cache';

import { AuthClientMutationKeys } from '../../keys/auth-client.keys';
import { AuthClientService } from '../../service';

import { IUseAuthClientPayload } from '../../types/auth-client.types';

export function useAuthClient() {
  const { mutateAsync, isPending, isError } = useMutationCache({
    mutationKey: [AuthClientMutationKeys.AUTH_CLIENT],
    mutationFn: (data: IUseAuthClientPayload) => {
      return AuthClientService.authClientService(data);
    }
  });

  return {
    mutateAuthClient: mutateAsync,
    isPendingMutateAuthClient: isPending,
    isError
  };
}
