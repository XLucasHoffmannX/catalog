import { useEffect, useState } from 'react';

import { useManagementSession } from '@/app/modules/manager/auth/use-cases';
import { useGetListStoresByCompany } from '@/app/modules/manager/store/use-cases';

export function useLogoActionHeader() {
  const { company } = useManagementSession();
  const { listStores } = useGetListStoresByCompany({
    companyId: company?.id || ''
  });

  const [selectedAccount, setSelectedAccount] = useState<string>();

  useEffect(() => {
    if (listStores && listStores.length > 0 && !selectedAccount) {
      setSelectedAccount(listStores[0].name);
    }
  }, [listStores, selectedAccount]);

  return {
    listStores,
    selectedAccount,
    onChangeSelectedAccount: setSelectedAccount
  };
}
