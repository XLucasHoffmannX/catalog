import { HttpManagerAuth } from '@/app/api';
import { HttpClientAuth } from '@/app/api/client/client';
import { env } from '@/app/config';
import {
  IPaginatedResponse,
  IProduct,
  IProductManager,
  IProductManagerCompany
} from '@/shared/types';
import { IPaginationDefaultResponse } from '@/shared/types/paginate.types';

import { useGetProductListMock } from '../mocks';

import {
  IAddProductManagerPayload,
  IGetProductClientPayload,
  IGetProductList,
  IGetProductListPayload,
  IGetProductManagerListByCompanyPayload,
  IRemoveProductManagerPayload
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

  async getProductManagerListByCompany(
    payload: IGetProductManagerListByCompanyPayload
  ): Promise<IPaginationDefaultResponse<IProductManagerCompany>> {
    const { data } = await HttpManagerAuth.get<
      IPaginationDefaultResponse<IProductManagerCompany>
    >(`/product/${payload.companyId}`, {
      params: {
        limit: payload.limit,
        page: payload.page,
        search: payload.search,
        storeId: payload.storeId
      }
    });

    return data;
  }

  async getProductManagerList() {
    const { data } = await HttpManagerAuth.get<
      IPaginatedResponse<IProductManager[]>
    >('/api/products');

    return data;
  }

  async addProductManager(
    payload: IAddProductManagerPayload
  ): Promise<IProductManagerCompany> {
    const { data } = await HttpManagerAuth.post('/product', payload);

    return data;
  }

  async removeProductManager(
    payload: IRemoveProductManagerPayload
  ): Promise<null> {
    await HttpManagerAuth.delete(`/product/${payload.companyId}/${payload.id}`);

    return null;
  }

  async addProductImages(payload: FormData) {
    const { data } = await HttpManagerAuth.post('/product-images', payload);

    return data;
  }

  async getProductClient(payload: IGetProductClientPayload) {
    const { data } = await HttpClientAuth.get<
      IPaginationDefaultResponse<IProduct>
    >(`/client/product/${payload.storeId}`, {
      params: {
        limit: payload.limit,
        page: payload.page,
        search: payload.search
      }
    });

    return data;
  }
}

export default new ProductService();
