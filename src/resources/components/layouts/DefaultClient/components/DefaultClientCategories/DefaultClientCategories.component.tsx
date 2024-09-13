import { Fragment } from 'react';

import { useGetCategories } from '@/app/modules/client/products';
import { ImageWithLoader } from '@/resources/components/global';
import { Skeleton } from '@/resources/components/ui';

export function DefaultClientCategories(): JSX.Element {
  const { categories, isLoadingCategories } = useGetCategories({ limit: 10 });

  console.log(categories);

  return (
    <Fragment>
      {isLoadingCategories ? (
        <Skeleton className='h-[160px] w-full max-w-[900px] shadow-md' />
      ) : (
        <div className='w-full shadow-md flex flex-col justify-center gap-2 mb-2 max-w-[900px] cursor-pointer bg-primary-foreground rounded-xl p-3'>
          <p className='text-muted-foreground font-bold'>Categorias</p>
          <div className='flex items-center gap-3 overflow-x-auto'>
            {categories?.map((category, index) => (
              <div
                className='flex flex-col justify-center items-center w-[120px] text-muted-foreground pb-3 hover:bg-secondary-foreground p-2 rounded-sm '
                key={index}
              >
                <div className='rounded-full w-[60px] h-[60px] border bg-primary flex items-center justify-center overflow-hidden'>
                  <ImageWithLoader
                    src={category.icon ? category.icon : category.defaultIcon}
                    alt={category.name}
                    maxH='60px'
                    maxW='60px'
                  />
                </div>
                <p className='max-w-[120px] truncate'>{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
}
