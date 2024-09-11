import { env } from '@/app/config';

import { useGetProductListMock } from '../mocks';

import {
  IGetProductList,
  IGetProductListPayload
} from '../types/product.types';

export class Product {
  async getProductList(
    payload: IGetProductListPayload
  ): Promise<IGetProductList | null> {
    if (env.VITE_MOCK_API === 'enabled') {
      return await useGetProductListMock(payload);
    }

    return null;
  }
}
export default new Product();
