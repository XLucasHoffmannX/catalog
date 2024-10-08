import { LuListChecks } from 'react-icons/lu';
import { RiDashboardLine } from 'react-icons/ri';
import { TbZoomMoney } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import { useManagementSession } from '@/app/modules/manager/auth/use-cases';
import { ManagerDefaultLayoutWrapper } from '@/resources/components/layouts/manager';

import { CardDahsboard, ChartDashboard } from './components';

export function HomeView(): JSX.Element {
  const { isManager } = useManagementSession();

  return (
    <ManagerDefaultLayoutWrapper>
      <section className='w-full flex justify-center p-4'>
        <div className='max-w-[1280px]'>
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

          <div className='mt-4 max-w-[1200px]'>
            <ChartDashboard />
          </div>
        </div>
      </section>
    </ManagerDefaultLayoutWrapper>
  );
}
