import { IStore } from '@/shared/types';

export interface IGetListStoresByCompanyPayload {
  companyId: string;
}

export interface IUseGetListStoresByCompanyPayload
  extends IGetListStoresByCompanyPayload {
  enabled?: boolean;
}

export interface IUseGetListStoresByCompany {
  listStores: IStore[] | undefined;
  isLoadingListStores: boolean;
}
