/* eslint-disable @typescript-eslint/no-empty-object-type */

import { ICategoriesClient } from '@/shared/types';

export interface IGetCategoriesPayload {
  limit: number;
}

export interface IGetCategories {
  data: ICategoriesClient[] | null;
}

export interface IUseGetProductListPayload extends IGetCategoriesPayload {}

export interface IUseGetProductList {
  categories: IGetCategories['data'] | undefined;
  isLoadingCategories: boolean;
}
/*  */
