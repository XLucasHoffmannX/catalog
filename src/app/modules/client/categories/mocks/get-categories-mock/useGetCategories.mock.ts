import { faker } from '@faker-js/faker';

import { ICategoriesClient } from '@/shared/types';
import { MockApi } from '@/shared/utils';

import {
  IGetCategories,
  IGetCategoriesPayload
} from '../../types/categories.types';

export async function useGetCategoriesMock(
  payload: IGetCategoriesPayload
): Promise<IGetCategories | null> {
  const categories: ICategoriesClient[] = Array.from(
    { length: payload.limit },
    () => {
      const random = faker.datatype.boolean();

      return {
        name: faker.commerce.productName(),
        defaultIcon: faker.image.urlLoremFlickr({
          category: 'category',
          width: 50,
          height: 50
        }),
        icon: random
          ? faker.image.urlLoremFlickr({
              category: 'category',
              width: 50,
              height: 50
            })
          : null
      };
    }
  );

  await MockApi.sleep(2000);

  const result: IGetCategories = {
    data: categories
  };

  return result;
}
