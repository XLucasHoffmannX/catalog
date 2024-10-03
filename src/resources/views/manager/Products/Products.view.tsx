import { Link } from 'react-router-dom';

import { ManagerDefaultLayoutWrapper } from '@/resources/components/layouts/manager';
import { Button, Input } from '@/resources/components/ui';

import { TableProducts } from './components';

export function ProductsView(): JSX.Element {
  return (
    <ManagerDefaultLayoutWrapper>
      <section className='p-4 w-full flex justify-center'>
        <div className='w-full max-w-[1280px]'>
          <h1 className='font-bold text-3xl'>Produtos</h1>

          <div className='mt-4 flex items-center gap-4'>
            <Input
              placeholder='Buscar produto...'
              className='w-[250px]'
            />
            <Link to='/add-product'>
              <Button className='text-white'>Adicionar +</Button>
            </Link>
          </div>
          <div className='mt-4'>
            <TableProducts />
          </div>
        </div>
      </section>
    </ManagerDefaultLayoutWrapper>
  );
}
