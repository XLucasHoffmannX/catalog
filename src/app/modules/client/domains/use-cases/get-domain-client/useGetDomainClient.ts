import { useQueryCache } from '@/app/cache';

import { DomainQueryKeys } from '../../keys/domain.keys';
import DomainsService from '../../service/Domain.service';

import { IUseGetDomainClientPayload } from '../../types/domain.types';

export function useGetDomainClient({
  domain,
  enabled
}: IUseGetDomainClientPayload) {
  const { data, isLoading, isFetching } = useQueryCache({
    queryKey: [DomainQueryKeys.GET_DOMAIN_CLIENT],
    queryFn: async () => {
      return await DomainsService.getDomainClient({ domain: domain });
    },
    enabled: enabled
  });

  return {
    data: data ?? null,
    isLoading,
    isFetching
  };
}
