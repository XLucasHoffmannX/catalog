import { Link, useNavigate } from 'react-router-dom';

import { useStoreContext } from '@/app/contexts';
import { managerRoutes } from '@/app/router/routes/manager/managerRoutes.constant';
import { ManageAppLayoutWrapper } from '@/resources/components/layouts/manager';
import { Button, Input } from '@/resources/components/ui';

import { FinishStoreModal } from './components/FinishStoreModal/FinishStoreModal.component';
import { useStoreList } from './components/StoreList/useStoreList';
import { StoreList } from './components';

export function StoreView(): JSX.Element {
  const { listStores } = useStoreList();
  const navigate = useNavigate();
  const { visibleFinishModal, handleVisibleFinishModal } = useStoreContext();

  return (
    <ManageAppLayoutWrapper
      breadcrumbs={[
        { name: 'Empresa', url: managerRoutes.manage },
        { name: 'Lojas' }
      ]}
    >
      <section className='w-full flex justify-center'>
        <div className='w-full'>
          <div className='flex flex-col'>
            <h1 className='font-bold text-3xl'>Lojas</h1>
            <p className='font-light font-sm'>
              {listStores?.length} de 10 criadas
            </p>
          </div>

          <div className='mt-4 flex items-center gap-4 flex-wrap'>
            <Input
              placeholder='Buscar por loja...'
              className='w-[250px]'
            />

            <Link to='/manage/add-store'>
              <Button className='text-white'>Criar uma nova loja +</Button>
            </Link>
          </div>

          <StoreList />
        </div>
      </section>

      <FinishStoreModal
        isOpen={visibleFinishModal.isVisible}
        onCancel={() => {
          handleVisibleFinishModal({ isVisible: false, storeId: undefined });
        }}
        onConfirm={() => {
          navigate(`/manage/store/${visibleFinishModal.storeId}`);
          handleVisibleFinishModal({ isVisible: false, storeId: undefined });
        }}
      />
    </ManageAppLayoutWrapper>
  );
}
