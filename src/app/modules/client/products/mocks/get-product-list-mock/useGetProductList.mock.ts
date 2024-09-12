import { faker } from '@faker-js/faker';

import { IProductClient } from '@/shared/types';
import { MockApi } from '@/shared/utils';

import {
  IGetProductList,
  IGetProductListPayload
} from '../../types/product.types';

export async function useGetProductListMock(
  payload: IGetProductListPayload
): Promise<IGetProductList | null> {
  const products: IProductClient[] = Array.from(
    { length: payload.limit },
    () => {
      const isDiscount = faker.datatype.boolean();
      const isLastUnits = faker.datatype.boolean();

      return {
        id: faker.string.uuid(),
        isAvaliable: faker.datatype.boolean(),
        title: faker.commerce.productName(),
        avaliable: faker.number
          .float({ min: 1, max: 5, fractionDigits: 1 })
          .toString(),
        subTitle: faker.commerce.productDescription(),
        quantity: faker.number.int({ min: 1, max: 100 }),
        isLastUnits,
        minQuantity: isLastUnits
          ? faker.number.int({ min: 1, max: 5 })
          : undefined,
        price: parseFloat(faker.commerce.price()),
        isDiscount,
        discount: isDiscount
          ? faker.number.int({ min: 1, max: 50 })
          : undefined,
        resource: faker.datatype.boolean(),
        images: Array.from({ length: 3 }, () =>
          faker.image.urlLoremFlickr({
            category: 't-shirt',
            width: 300,
            height: 300
          })
        ),
        category: faker.commerce.department()
      };
    }
  );

  await MockApi.sleep(2000);

  const result: IGetProductList = {
    data: products
  };

  return result;
}
