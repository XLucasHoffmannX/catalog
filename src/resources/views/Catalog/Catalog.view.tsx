import { ProductCard } from '@/resources/components/global';
import { DefaultClientWrapper } from '@/resources/components/layouts';

export function CatalogView(): JSX.Element {
  return (
    <DefaultClientWrapper>
      <div className='w-full flex md:flex-row flex-col flex-wrap justify-center gap-5'>
        {Array.from({ length: 6 }).map((product, index) => (
          <ProductCard
            avaliable='4.5'
            title=''
            subTitle='Steam'
            quantity={20}
            price={100}
            discount={20}
            key={index}
          />
        ))}
      </div>
    </DefaultClientWrapper>
  );
}
