import { HttpManagerAuth } from '@/app/api';
import { env } from '@/app/config';
import { IPaginatedResponse, IProductManager } from '@/shared/types';

import { useGetProductListMock } from '../mocks';

import {
  IGetProductList,
  IGetProductListPayload
} from '../types/product.types';

export class ProductService {
  async getProductList(
    payload: IGetProductListPayload
  ): Promise<IGetProductList | null> {
    if (env.VITE_MOCK_API === 'enabled') {
      return await useGetProductListMock(payload);
    }

    return null;
  }

  async getProductManagerList() {
    const { data } = await HttpManagerAuth.get<
      IPaginatedResponse<IProductManager>
    >('/api/products');

    return data;
  }
}

export default new ProductService();
