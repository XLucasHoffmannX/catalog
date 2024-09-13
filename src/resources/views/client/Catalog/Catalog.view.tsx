import { useGetProductList } from '@/app/modules/client/products';
import {
  ProductCard,
  ProductCardSkeleton
} from '@/resources/components/global';
import { DefaultClientWrapper } from '@/resources/components/layouts';

export function CatalogView(): JSX.Element {
  const { productList, isLoadingProducts } = useGetProductList({ limit: 5 });

  return (
    <DefaultClientWrapper>
      <div className='flex flex-col mb-36 w-full'>
        <div className='w-full flex items-center justify-center mb-4'>
          <p className='font-bold text-muted-foreground w-[900px]'>Produtos</p>
        </div>

        <div className='w-full flex md:flex-row flex-col flex-wrap justify-center gap-3 '>
          {isLoadingProducts &&
            Array.from({ length: 5 }).map((item, index) => (
              <ProductCardSkeleton key={index} />
            ))}

          {productList?.map((product, index) => (
            <ProductCard
              product={product}
              key={`${product.id}-${index}`}
            />
          ))}
        </div>

        {productList && productList?.length > 0 && (
          <div className='flex items-center justify-center'>
            <div className='bg-primary text-secondary border border-input py-3 px-4 rounded-xl cursor-pointer'>
              <p>Ver mais produtos</p>
            </div>
          </div>
        )}
      </div>
    </DefaultClientWrapper>
  );
}
