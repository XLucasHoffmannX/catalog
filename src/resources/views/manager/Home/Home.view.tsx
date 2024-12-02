import { LuListChecks } from 'react-icons/lu';
import { RiDashboardLine } from 'react-icons/ri';
import { RiStore2Line } from 'react-icons/ri';
import { TbZoomMoney } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import { useManagementSession } from '@/app/modules/manager/auth/use-cases';
import { ManageAppLayoutWrapper } from '@/resources/components/layouts/manager';
import { Alert, AlertDescription, AlertTitle } from '@/resources/components/ui';

import { CardDahsboard, ChartDashboard } from './components';

export function HomeView(): JSX.Element {
  const { isManager, store } = useManagementSession();

  console.log(store);

  return (
    <ManageAppLayoutWrapper breadcrumbs={[{ name: 'Inicio' }]}>
      <section className='w-full p-4'>
        <div className=''>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col'>
              <h1 className='font-bold text-3xl'>Dashboard</h1>

              <sub className='font-light text-sm'>
                Informações gerais de suas lojas
              </sub>
            </div>

            {isManager && (
              <Link to='/manage'>
                <div className='bg-primary text-white flex items-center gap-2 border rounded-md p-2 cursor-pointer hover:scale-105 transition-all h-full'>
                  <RiDashboardLine className='h-4 w-4' />
                  <p className='font-medium'>Gerenciar empresa</p>
                </div>
              </Link>
            )}
          </div>

          {isManager && store && (
            <Alert className='my-5'>
              <RiStore2Line className='h-4 w-4' />
              <AlertTitle></AlertTitle>
              <AlertDescription>
                Acessar loja(s).
                <Link
                  to='/manage/store'
                  className='text-primary ml-2'
                >
                  Gerenciar aqui
                </Link>
              </AlertDescription>
            </Alert>
          )}

          {isManager && !store && (
            <Alert className='my-5 '>
              <RiStore2Line className='h-4 w-4' />
              <AlertTitle>Crie uma loja!</AlertTitle>
              <AlertDescription>
                Parece que você ainda não possui uma loja criada.
                <Link
                  to='/manage/add-store'
                  className='text-primary'
                >
                  {' '}
                  Crie aqui
                </Link>
              </AlertDescription>
            </Alert>
          )}

          <div className='flex mt-6 gap-4 flex-wrap'>
            <CardDahsboard
              title='Receita Total (mês)'
              Icon={TbZoomMoney}
              value='R$ 41.023,00'
              description='+42.3% em relação ao mês passado'
            />

            <CardDahsboard
              title='Pedidos (mês)'
              Icon={LuListChecks}
              value='78'
              description='-32.3% em relação ao mês passado'
            />
          </div>

          <div className='mt-4 '>
            <ChartDashboard />
          </div>
        </div>
      </section>
    </ManageAppLayoutWrapper>
  );
}
