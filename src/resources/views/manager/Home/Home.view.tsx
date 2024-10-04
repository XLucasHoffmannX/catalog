import { LuListChecks } from 'react-icons/lu';
import { TbZoomMoney } from 'react-icons/tb';

import { ManagerDefaultLayoutWrapper } from '@/resources/components/layouts/manager';

import { CardDahsboard, ChartDashboard } from './components';

export function HomeView(): JSX.Element {
  return (
    <ManagerDefaultLayoutWrapper>
      <section className='w-full flex justify-center p-4'>
        <div className='max-w-[1280px]'>
          <h1 className='font-bold text-3xl'>Dashboard</h1>

          <sub className='font-light text-sm'>
            Informações gerais de suas lojas
          </sub>

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
