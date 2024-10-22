import { HttpManagerAuth } from '@/app/api';
import { IStore } from '@/shared/types';

import { IGetListStoresByCompanyPayload } from '../types/stores.types';

class StoreService {
  async getListStoresByCompany(
    payload: IGetListStoresByCompanyPayload
  ): Promise<IStore[]> {
    const { data } = await HttpManagerAuth.get(`/store/${payload.companyId}`);

    console.log(data);

    return data;
  }
}

export default new StoreService();
