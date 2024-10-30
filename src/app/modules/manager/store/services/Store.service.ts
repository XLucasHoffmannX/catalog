import { HttpManagerAuth } from '@/app/api';
import { ISetupStore } from '@/app/modules/client/domains/types/domain.types';
import { IAddStoreServiceResponse } from '@/app/modules/client/products/types/product.types';
import { IStore } from '@/shared/types';

import {
  IAddStoreServicePayload,
  IGetAvailableDomainPayload,
  IGetAvailableDomainResponse,
  IGetListStoresByCompanyPayload,
  IGetStorePayload,
  IGetStoreSetupByStoreIdPayload,
  IUpdateStoreService
} from '../types/stores.types';

class StoreService {
  async getListStoresByCompany(
    payload: IGetListStoresByCompanyPayload
  ): Promise<IStore[]> {
    const { data } = await HttpManagerAuth.get(`/store/${payload.companyId}`);

    return data;
  }

  async getStore(payload: IGetStorePayload): Promise<IStore> {
    const { data } = await HttpManagerAuth.get(
      `/store/${payload.companyId}/${payload.storeId}`
    );

    console.log(data);

    return data;
  }

  async addStoreService(
    payload: IAddStoreServicePayload
  ): Promise<IAddStoreServiceResponse> {
    const { data } = await HttpManagerAuth.post('/store', payload);

    return data;
  }

  async updateStoreService({
    storeId,
    ...payload
  }: IUpdateStoreService): Promise<IStore> {
    const { data } = await HttpManagerAuth.patch(`/store/${storeId}`, payload);

    return data;
  }

  async getAvailableDomain(
    payload: IGetAvailableDomainPayload
  ): Promise<IGetAvailableDomainResponse> {
    const { data } = await HttpManagerAuth.get('/store/validate-domain', {
      params: {
        domain: payload.domain
      }
    });

    return data;
  }

  async getStoreSetupByStoreId(
    payload: IGetStoreSetupByStoreIdPayload
  ): Promise<ISetupStore> {
    const { data } = await HttpManagerAuth.get(
      `/store-setup/store/${payload.storeId}`
    );

    return data;
  }
}

export default new StoreService();
