import { Link } from 'react-router-dom';

import { managerRoutes } from '@/app/router/routes/manager/managerRoutes.constant';
import { BadgeStatus, Loader } from '@/resources/components/global';
import { ManageAppLayoutWrapper } from '@/resources/components/layouts/manager';
import { Button, Separator, Skeleton } from '@/resources/components/ui';

import { GeneralInformationsForm, SetupStoreForm } from './components';
import { useStoreManagement } from './useStoreManagement';

export function StoreManagementView(): JSX.Element {
  const { store, isLoadingStore } = useStoreManagement();

  return (
    <ManageAppLayoutWrapper
      breadcrumbs={[
        { name: 'Empresa', url: managerRoutes.manage },
        { name: 'Lojas', url: managerRoutes.manageStore },
        { name: store?.title || '' }
      ]}
    >
      <Loader isLoading={isLoadingStore} />

      <section className='w-full flex justify-center '>
        <div className='w-full'>
          <div className='font-bold text-3xl mt-5 flex flex-col'>
            <div className='flex items-center'>
              <BadgeStatus status={store?.status || false} />
            </div>
            <div className='flex flex-col md:flex-row md:items-center items-start md:gap-4'>
              <div className='flex items-center'>
                <h1>
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
    </ManageAppLayoutWrapper>
  );
}
