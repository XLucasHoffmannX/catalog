import { useGetDomain } from '../get-domain/useGetDomain';

import { IUseGetClient } from '../../types/domain.types';

export function useGetClient(): IUseGetClient {
  const { data, isLoading } = useGetDomain({
    domain: window.location.hostname
  });

  return {
    client: data?.client,
    theme: data?.theme,
    token: data?.client.token,
    isLoading
  };
}
