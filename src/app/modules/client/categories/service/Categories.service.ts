import { env } from '@/app/config';

import { useGetCategoriesMock } from '../mocks';

import {
  IGetCategories,
  IGetCategoriesPayload
} from '../types/categories.types';

export class Categories {
  async getCategories(
    payload: IGetCategoriesPayload
  ): Promise<IGetCategories | null> {
    if (env.VITE_MOCK_API === 'enabled') {
      return await useGetCategoriesMock(payload);
    }

    return null;
  }
}
export default new Categories();
