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

/* availableDomain */
export interface IGetAvailableDomainPayload {
  domain: string;
}

export interface IGetAvailableDomainResponse {
  available: boolean;
  message: string;
}

export interface IUseGetAvailableDomainPayload
  extends IGetAvailableDomainPayload {
  enabled?: boolean;
}
