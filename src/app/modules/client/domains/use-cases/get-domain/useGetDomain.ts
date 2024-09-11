import { useQueryCache } from '@/app/cache';

import { DomainQueryKeys } from '../../keys/domain.keys';
import DomainsService from '../../service/Domain.service';

import { IUseGetDomain, IUseGetDomainPayload } from '../../types/domain.types';

export function useGetDomain(payload: IUseGetDomainPayload): IUseGetDomain {
  const { data, isLoading, isFetching } = useQueryCache({
    queryKey: [DomainQueryKeys.GET_DOMAIN],
    queryFn: async () => {
      return await DomainsService.getDomain(payload);
    }
  });

  return {
    data: data ?? null,
    isLoading,
    isFetching
  };
}
