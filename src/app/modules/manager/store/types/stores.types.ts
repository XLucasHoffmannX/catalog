import { IAddStore, IStore } from '@/shared/types';

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

/* addStore */
export interface IAddStoreService extends IAddStore {}

export interface IUseAddStorePayload extends IAddStoreService {}

/* getStore */

export interface IGetStorePayload {
  companyId: string;
  storeId: string;
}

export interface IUseGetStorePayload extends IGetStorePayload {
  enabled?: boolean;
}
