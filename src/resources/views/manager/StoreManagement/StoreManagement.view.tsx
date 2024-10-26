import { HiMiniChevronLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

import { Loader } from '@/resources/components/global';
import { ManagerDefaultLayoutWrapper } from '@/resources/components/layouts/manager';
import { Button, Skeleton } from '@/resources/components/ui';

import { useStoreManagement } from './useStoreManagement';

export function StoreManagementView(): JSX.Element {
  const { store, isLoadingStore } = useStoreManagement();

  return (
    <ManagerDefaultLayoutWrapper>
      <Loader isLoading={isLoadingStore} />

      <section className='w-full flex justify-center p-4 '>
        <div className='w-full max-w-[1280px]'>
          <Link to='/manage/store'>
            <Button variant='outline'>
              <HiMiniChevronLeft className='text-lg' />
              <p>Voltar</p>
            </Button>
          </Link>

          <div className='font-bold text-3xl mt-5 flex flex-col'>
            <div className='flex items-center gap-2'>
              <h1>Gerenciar: </h1>

              {isLoadingStore ? (
                <Skeleton className='h-7 w-[100px]' />
              ) : (
                store?.name
              )}
            </div>
            <span className='text-base font-normal'>{store?.title}</span>
          </div>
        </div>
      </section>
    </ManagerDefaultLayoutWrapper>
  );
}
