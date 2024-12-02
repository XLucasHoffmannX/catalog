import Lottie from 'react-lottie';

import { Skeleton } from '@/resources/components/ui';
import EmptyAnimation from '@/shared/assets/animations/empty-list-anm.json';
import { useAnimationLottie } from '@/shared/hooks/useAnimationLottie';

import { StoreItem } from '../StoreItem/StoreItem.component';

import { useStoreList } from './useStoreList';

export function StoreList(): JSX.Element {
  const { listStores, isLoadingListStores } = useStoreList();
  const defaultOptions = useAnimationLottie(EmptyAnimation);

  return (
    <div className='mt-8 flex items-center gap-3 flex-wrap md:justify-start justify-center'>
      {isLoadingListStores ? (
        <Skeleton className='h-[300px] w-full' />
      ) : listStores?.length ? (
        listStores?.map((store, index) => (
          <StoreItem
            key={`${store.id}-${index}`}
            store={store}
          />
        ))
      ) : (
        <div className='flex flex-col items-center justify-center p-6  w-full rounded-sm'>
          <div className='w-[200px]  h-[200px] mt-4'>
            <Lottie options={defaultOptions} />
          </div>
          <p className='text-base font-bold mt-4'>
            Nenhuma loja encontrada ou criada
          </p>
        </div>
      )}
    </div>
  );
}
