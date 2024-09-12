import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

import { useCartContext } from '@/app/contexts';
import { Content } from '@/resources/components/global';
import { DefaultPageWrapper } from '@/resources/components/layouts';
import { Input } from '@/resources/components/ui';
import EmptyAnimation from '@/shared/assets/animations/empty-list-anm.json';
import { useAnimationLottie } from '@/shared/hooks/useAnimationLottie';

import {
  CartItem,
  CartSubmitFloat,
  DeliveryAndCollection,
  DeliveryOptionsModal,
  OrdenationCardItems,
  RemovalConfirmationModal
} from './components';
import { useCartView } from './useCartView';

export function CartView(): JSX.Element {
  const {
    isOpenRemovalConfirmationModal,
    onChangeIsOpenRemovalConfirmationModal,
    items,
    cartParams,
    handleChangeSearchParam,
    sortArrayByDate
  } = useCartView();

  const sortByDate = useCartContext(state => state.sortByDate);

  const defaultOptions = useAnimationLottie(EmptyAnimation);

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
              <div className='w-full flex items-center gap-2'>
                <Input
                  className='bg-white h-14 rounded-2xl shadow-lg shadow-slate-500/30 animate-up md:w-[500px] text-black'
                  placeholder='Buscar...'
                  value={cartParams.searchInput}
                  onChange={e => {
                    handleChangeSearchParam('searchInput', e.target.value);
                  }}
                />
                <OrdenationCardItems />
              </div>

              <DeliveryAndCollection />
            </div>

            <div className='w-full flex md:flex-row flex-col flex-wrap gap-5 mb-32'>
              {sortArrayByDate(items ?? [], sortByDate)?.map(
                (cartItem, index) => (
                  <CartItem
                    item={cartItem}
                    key={`${cartItem.uuidControl}-${index}`}
                  />
                )
              )}

              {!items?.length && (
                <div className='flex flex-col items-center justify-center mt-12 w-full gap-3'>
                  <p className='font-medium text-lg'>
                    Não itens no seu carrinho.
                  </p>
                  <div className='w-[200px]  h-[200px] mt-4'>
                    <Lottie options={defaultOptions} />
                  </div>
                  <Link
                    to='/'
                    className='font-medium text-lg text-blue-500 underline leading-3'
                  >
                    Voltar para a loja
                  </Link>
                </div>
              )}
            </div>
          </div>
          <CartSubmitFloat />
        </Content>
      </div>
      <DeliveryOptionsModal />

      <RemovalConfirmationModal
        isOpenRemovalConfirmationModal={isOpenRemovalConfirmationModal}
        onChangeIsOpenRemovalConfirmationModal={
          onChangeIsOpenRemovalConfirmationModal
        }
      />
    </DefaultPageWrapper>
  );
}
