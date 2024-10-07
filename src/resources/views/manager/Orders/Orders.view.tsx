import { TbReload } from 'react-icons/tb';

import { ManagerDefaultLayoutWrapper } from '@/resources/components/layouts/manager';
import { Button, Input } from '@/resources/components/ui';

import { TableOrders } from './components';

export function OrdersView(): JSX.Element {
  return (
    <ManagerDefaultLayoutWrapper>
      <section className='p-4 w-full flex justify-center'>
        <div className='w-full max-w-[1280px]'>
          <h1 className='font-bold text-3xl'>Pedidos</h1>

          <div className='mt-4 flex items-center gap-4'>
            <Input
              placeholder='Buscar pedido...'
              className='w-[250px]'
            />

            <Button className='text-white flex items-center gap-2'>
              Atualizar <TbReload />
            </Button>
          </div>
          <div className='mt-4'>
            <TableOrders />
          </div>
        </div>
      </section>
    </ManagerDefaultLayoutWrapper>
  );
}
