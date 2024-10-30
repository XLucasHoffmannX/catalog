import { IAddStore, IStore, IUpdateStore } from '@/shared/types';

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
export interface IAddStoreServicePayload extends IAddStore {}

export interface IUseAddStorePayload extends IAddStoreServicePayload {}

/* updateStoreService */
export interface IUpdateStoreService extends IUpdateStore {
  storeId: string;
}

export interface IUseUpdateStorePayload extends IUpdateStoreService {}

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

/*  */
export interface IGetStoreSetupByStoreIdPayload {
  storeId: string;
}

export interface IUseGetStoreSetupByStoreIdPayload
  extends IGetStoreSetupByStoreIdPayload {
  enabled?: boolean;
}
