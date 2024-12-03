import { useSubdomain } from '@/shared/hooks';

import { useGetDomainClient } from '../get-domain-client/useGetDomainClient';

export function useGetClient() {
  const subdomain = useSubdomain();

  const { data, isLoading } = useGetDomainClient({
    domain: subdomain,
    enabled: !!subdomain
  });

  return {
    client: data?.store.storeSetup.setup.client,
    theme: data?.theme,
    store: data?.store.storeSetup,
    isLoading
  };
}
