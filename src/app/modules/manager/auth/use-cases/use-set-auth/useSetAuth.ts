import { useMutation } from '@tanstack/react-query';

import { AuthService } from '../../service';

import { IAuthPayload } from '../../types/auth.types';

export function useSetAuth() {
  const { mutateAsync, isPending, isError } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (data: IAuthPayload) => {
      return AuthService.loginService(data);
    }
  });

  return { mutateAuth: mutateAsync, isPendingMutateAuth: isPending, isError };
}
