import { useSubdomain } from '@/shared/hooks';

import { useGetDomainClient } from '../get-domain-client/useGetDomainClient';

import { IUseGetClient } from '../../types/domain.types';

export function useGetClient(): IUseGetClient {
  const subdomain = useSubdomain();

  const { data, isLoading } = useGetDomainClient({
    domain: subdomain,
    enabled: !!subdomain
  });

  return {
    client: data?.store.storeSetup.setup.client,
    theme: data?.theme,
    isLoading
  };
}
