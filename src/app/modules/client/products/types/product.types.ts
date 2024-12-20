/* eslint-disable @typescript-eslint/no-empty-object-type */

import {
  IAddProduct,
  ICompany,
  IProductClient,
  IProductManagerCompany,
  IStore
} from '@/shared/types';

/* GET_PRODUCT_LIST */

export interface IGetProductListPayload {
  limit: number;
}

export interface IGetProductList {
  data: IProductClient[] | null;
}

export interface IUseGetProductListPayload extends IGetProductListPayload {}

export interface IUseGetProductList {
  productList: IGetProductList['data'] | undefined;
  isLoadingProducts: boolean;
}
/*  */

export interface IGetProductManagerListPayload {
  size: number;
}

export interface IAddProductManagerPayload extends IAddProduct {}

export interface IRemoveProductManagerPayload {
  id: IProductManagerCompany['id'];
  companyId: string;
}

/* getProductManagerListByCompany */
export interface IGetProductManagerListByCompany {}

export interface IGetProductManagerListByCompanyPayload {
  limit: number;
  page: number;
  companyId: string;
  search?: string;
  storeId?: string;
}

export interface IUseGetProductManagerListByCompanyPayload
  extends IGetProductManagerListByCompanyPayload {
  enabled?: boolean;
}

/* addProductImages */
export interface IAddStoreServiceResponse extends IStore {
  company: ICompany;
}

/* getProductsClient */

export interface IGetProductClientPayload {
  storeId: string;
  limit: number;
  page: number;
  search?: string;
}

export interface IUseGetProductClientPayload extends IGetProductClientPayload {
  enabled?: boolean;
}
