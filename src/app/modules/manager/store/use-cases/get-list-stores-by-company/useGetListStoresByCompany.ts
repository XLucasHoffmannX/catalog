import { useQueryCache } from '@/app/cache';

import { StoreQueryKeys } from '../../keys/store.keys';
import { StoreService } from '../../services';

import {
  IUseGetListStoresByCompany,
  IUseGetListStoresByCompanyPayload
} from '../../types/stores.types';

export function useGetListStoresByCompany({
  companyId,
  enabled
}: IUseGetListStoresByCompanyPayload): IUseGetListStoresByCompany {
  const { data, isLoading } = useQueryCache({
    queryKey: [StoreQueryKeys['GET_LIST_STORES_BY_COMPANY']],
    queryFn: async () =>
      StoreService.getListStoresByCompany({ companyId: companyId }),
    enabled: enabled
  });

  return {
    listStores: data,
    isLoadingListStores: isLoading
  };
}
