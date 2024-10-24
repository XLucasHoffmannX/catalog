import { HiMiniChevronLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

import { ManagerDefaultLayoutWrapper } from '@/resources/components/layouts/manager';
import { Button, Input } from '@/resources/components/ui';

import { useStoreList } from './components/StoreList/useStoreList';
import { StoreList } from './components';

export function StoreView(): JSX.Element {
  const { listStores } = useStoreList();

  return (
    <ManagerDefaultLayoutWrapper>
      <section className='w-full flex justify-center p-4 '>
        <div className='w-full max-w-[1280px]'>
          <Link to='/manage'>
            <Button variant='outline'>
              <HiMiniChevronLeft className='text-lg' />
              <p>Voltar a gestão</p>
            </Button>
          </Link>

          <div className='flex flex-col'>
            <h1 className='font-bold text-3xl mt-5'>Minhas Lojas</h1>
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
    </ManagerDefaultLayoutWrapper>
  );
}
