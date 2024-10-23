/* eslint-disable @typescript-eslint/no-empty-object-type */

import {
  IAddProduct,
  IProductClient,
  IProductManagerCompany
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
}

export interface IUseGetProductManagerListByCompanyPayload
  extends IGetProductManagerListByCompanyPayload {
  enabled?: boolean;
}

/* addProductImages */
