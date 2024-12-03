import { useEffect, useState } from 'react';

import { useProductManagerContext } from '@/app/contexts';
import { useManagementSession } from '@/app/modules/manager/auth/use-cases';
import { useGetListStoresByCompany } from '@/app/modules/manager/store/use-cases';
import { useDebounce } from '@/shared/hooks';

export function useProductFilters() {
  const { companyId } = useManagementSession();
  const [searchTerm, setSearchTerm] = useState('');
  const debounceValue = useDebounce(searchTerm);
  const { handleChangeFilter } = useProductManagerContext();

  useEffect(() => {
    handleChangeFilter({ search: debounceValue });
  }, [debounceValue, handleChangeFilter]);

  const { listStores, isLoadingListStores } = useGetListStoresByCompany({
    companyId: companyId || '',
    enabled: !!companyId
  });

  return {
    listStores,
    isLoadingListStores,
    onChangeSetSearchTerm: setSearchTerm
  };
}
