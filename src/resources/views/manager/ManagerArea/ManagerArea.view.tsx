import { BsCardChecklist } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { PiStorefrontDuotone } from 'react-icons/pi';
import { TbGraphFilled } from 'react-icons/tb';

import { managerRoutes } from '@/app/router/routes/manager/managerRoutes.constant';
import { ManageAppLayoutWrapper } from '@/resources/components/layouts/manager';

import { ManagerItem } from './components';

export function ManagerAreaView(): JSX.Element {
  return (
    <ManageAppLayoutWrapper
      breadcrumbs={[
        { name: 'Empresa', url: managerRoutes.manage },
        { name: 'Gerenciar' }
      ]}
    >
      <section className='w-full flex justify-center '>
        <div className='w-full'>
          <h1 className='font-bold text-3xl'>Gerenciar empresa</h1>

          <sub className='font-light text-sm'>Área de controle geral</sub>

          <div className='mt-8'>
            <div className='flex items-center gap-3 flex-wrap md:justify-start justify-center w-full '>
              <ManagerItem
                name='Usuários'
                Icon={FaUsers}
              />

              <ManagerItem
                name='Lojas'
                Icon={PiStorefrontDuotone}
                to='manage/store'
              />

              <ManagerItem
                name='Financeiro'
                Icon={TbGraphFilled}
              />

              <ManagerItem
                name='Meu plano'
                Icon={BsCardChecklist}
              />
            </div>
          </div>
        </div>
      </section>
    </ManageAppLayoutWrapper>
  );
}
