import { ProductCard } from '@/resources/components/global';
import { DefaultClientWrapper } from '@/resources/components/layouts';

export function CatalogView(): JSX.Element {
  return (
    <DefaultClientWrapper>
      <div className='flex flex-col mb-36 w-full'>
        <div className='w-full flex items-center justify-center mb-4'>
          <p className='font-bold text-muted-foreground w-[900px]'>Produtos</p>
        </div>

        <div className='w-full flex md:flex-row flex-col flex-wrap justify-center gap-3 '>
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
        <div className='flex items-center justify-center'>
          <div className='bg-primary text-white border border-input py-3 px-4 rounded-xl cursor-pointer'>
            <p>Ver mais produtos</p>
          </div>
        </div>
      </div>
    </DefaultClientWrapper>
  );
}
