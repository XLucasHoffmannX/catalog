import { Content } from '@/resources/components/global';
import { DefaultPageWrapper } from '@/resources/components/layouts';
import { Input } from '@/resources/components/ui';

import {
  CartItem,
  CartSubmitFloat,
  DeliveryAndCollection,
  DeliveryOptionsModal
} from './components';

export function CartView(): JSX.Element {
  return (
    <DefaultPageWrapper>
      <div className='w-full flex flex-col items-center'>
        <Content
          title='Meu carrinho'
          isBackTo='/'
          className='md:w-[500px]'
        >
          <div className='w-full flex flex-col gap-5 justify-center '>
            <div className='flex items-center flex-wrap w-full gap-2'>
              <Input
                className='bg-white h-14 rounded-2xl shadow-lg shadow-slate-500/30 animate-up md:w-[500px] text-black'
                placeholder='Buscar...'
              />

              <DeliveryAndCollection />
            </div>

            <div className='w-full flex md:flex-row flex-col flex-wrap gap-5 mb-32'>
              {Array.from({ length: 6 }).map((product, index) => (
                <CartItem key={index} />
              ))}
            </div>
          </div>

          <CartSubmitFloat />
        </Content>
      </div>
      <DeliveryOptionsModal />
    </DefaultPageWrapper>
  );
}
