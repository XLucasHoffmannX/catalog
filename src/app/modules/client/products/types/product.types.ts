/* eslint-disable @typescript-eslint/no-empty-object-type */

import { IProductClient, IProductManager } from '@/shared/types';

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

export interface IAddProductManagerPayload extends IProductManager {}

export interface IRemoveProductManagerPayload {
  id: IProductManager['id'];
}
