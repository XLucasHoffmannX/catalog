import { TbReload } from 'react-icons/tb';

import { ManageAppLayoutWrapper } from '@/resources/components/layouts/manager';
import {
  Button,
  Input,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/resources/components/ui';

import { TableOrders } from './components';

export function OrdersView(): JSX.Element {
  return (
    <ManageAppLayoutWrapper breadcrumbs={[{ name: 'Meus PedidosPedidos' }]}>
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

          <div className='w-full'>
            <Tabs
              defaultValue='all'
              className='mt-5'
            >
              <TabsList className='w-full flex items-center justify-around'>
                <TabsTrigger
                  value='all'
                  className='w-full'
                >
                  Todos
                </TabsTrigger>
                <TabsTrigger
                  value='all1'
                  className='w-full'
                >
                  A enviar
                </TabsTrigger>
                <TabsTrigger
                  value='all2'
                  className='w-full'
                >
                  Em espera para envio
                </TabsTrigger>
                <TabsTrigger
                  value='all3'
                  className='w-full'
                >
                  Enviados
                </TabsTrigger>
                <TabsTrigger
                  value='costumize4'
                  className='w-full'
                >
                  Entregues
                </TabsTrigger>
                <TabsTrigger
                  value='costumize5'
                  className='w-full'
                >
                  Processando
                </TabsTrigger>
                <TabsTrigger
                  value='costumize6'
                  className='w-full'
                >
                  Cancelado
                </TabsTrigger>
              </TabsList>

              <TabsContent value='generalInformation'></TabsContent>
              <TabsContent value='costumize'></TabsContent>
            </Tabs>
          </div>

          <div className='mt-4'>
            <TableOrders />
          </div>
        </div>
      </section>
    </ManageAppLayoutWrapper>
  );
}
