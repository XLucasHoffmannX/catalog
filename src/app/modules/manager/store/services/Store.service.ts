import { HttpManagerAuth } from '@/app/api';
import { IAddStoreServiceResponse } from '@/app/modules/client/products/types/product.types';
import { IStore } from '@/shared/types';

import {
  IAddStoreService,
  IGetListStoresByCompanyPayload,
  IGetStorePayload
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
    payload: IAddStoreService
  ): Promise<IAddStoreServiceResponse> {
    const { data } = await HttpManagerAuth.post('/store', payload);

    return data;
  }
}

export default new StoreService();
