import { HiMiniChevronLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

import { BadgeStatus, Loader } from '@/resources/components/global';
import { ManagerDefaultLayoutWrapper } from '@/resources/components/layouts/manager';
import { Button, Separator, Skeleton } from '@/resources/components/ui';

import { GeneralInformationsForm, SetupStoreForm } from './components';
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
            <div className='flex items-center'>
              <BadgeStatus status={store?.status || false} />
            </div>
            <div className='flex flex-col md:flex-row md:items-center items-start md:gap-4'>
              <div className='flex items-center'>
                <h1>
                  Gerenciar:{' '}
                  {isLoadingStore ? (
                    <Skeleton className='h-7 w-[100px]' />
                  ) : (
                    store?.name
                  )}
                </h1>
              </div>

              {store?.status && (
                <Link
                  to={`//${store?.domain}.${window.location.hostname}${
                    window.location.port ? `:${window.location.port}` : ''
                  }`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button disabled={!store?.status}>Acessar loja</Button>
                </Link>
              )}
            </div>
            <span className='text-base font-normal'>{store?.title}</span>
          </div>
          <Separator className='my-4' />

          <GeneralInformationsForm />

          <SetupStoreForm />
        </div>
      </section>
    </ManagerDefaultLayoutWrapper>
  );
}
