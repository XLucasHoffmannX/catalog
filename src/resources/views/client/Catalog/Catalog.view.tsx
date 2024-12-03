import {
  ProductCard,
  ProductCardSkeleton
} from '@/resources/components/global';
import { DefaultClientWrapper } from '@/resources/components/layouts/client';

import { useCatalog } from './useCatalog';

export function CatalogView(): JSX.Element {
  const { products, isLoadingProducts, loadMoreProducts, itemCount } =
    useCatalog();

  console.log(products?.meta.totalItems !== products?.items.length);
  console.log('totalItems', products?.meta.totalItems);
  console.log('items', products?.items.length);

  return (
    <DefaultClientWrapper>
      <div className='flex flex-col mb-36 w-full'>
        <div className='w-full flex items-center justify-center mb-4'>
          <p className='font-bold text-muted-foreground w-[900px]'>Produtos</p>
        </div>

        <div className='w-full flex md:flex-row flex-col flex-wrap justify-center gap-3 grow'>
          {isLoadingProducts &&
            Array.from({ length: 5 }).map((item, index) => (
              <ProductCardSkeleton key={index} />
            ))}

          {products?.items?.map((product, index) => (
            <ProductCard
              product={product}
              key={`${product.id}-${index}`}
            />
          ))}
        </div>

        {products?.meta.totalItems &&
          itemCount < products?.meta?.totalItems && (
            <div className='flex items-center justify-center'>
              <div
                className='bg-primary text-secondary border border-input py-3 px-4 rounded-xl cursor-pointer'
                onClick={loadMoreProducts}
              >
                <p>Ver mais produtos</p>
              </div>
            </div>
          )}
      </div>
    </DefaultClientWrapper>
  );
}
