/* eslint-disable @typescript-eslint/no-empty-object-type */

import { IProductClient } from '@/shared/types';

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
