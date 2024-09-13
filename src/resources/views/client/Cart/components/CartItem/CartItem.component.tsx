import { FaTrashCan } from 'react-icons/fa6';
import { useShallow } from 'zustand/react/shallow';

import { useCartContext } from '@/app/contexts';
import { ImageWithLoader } from '@/resources/components/global';
import { Currency } from '@/shared/utils/format';

import { ICartItemClientProps } from './CartItem.types';

export function CartItem({ item }: ICartItemClientProps): JSX.Element {
  const [
    handleIncreaseCartItem,
    handleDecreaseCartItem,
    handleItemToBeRemoved
  ] = useCartContext(
    useShallow(state => [
      state.handleIncreaseCartItem,
      state.handleDecreaseCartItem,
      state.handleItemToBeRemoved
    ])
  );

  return (
    <div className='bg-secondary p-3 rounded-xl flex items-center justify-between gap-2 shadow-lg md:w-[500px] animate-up'>
      <div className='w-[100px] h-[100px] rounded-xl bg-primary flex items-center justify-center text-secondary font-bold overflow-hidden'>
        {!!item.images?.length && (
          <ImageWithLoader
            src={item.images[0]}
            alt={item.title}
            maxH='100'
            maxW='100'
          />
        )}
      </div>
      <div className='h-[100px] flex flex-col justify-between'>
        <p className='leading-4 text-sm font-medium truncate w-[150px]'>
          {item.title}
        </p>

        <div>
          {item.fareUnique && (
            <small className='font-bold text-secondary-foreground'>
              Frete: R$ 00,00
            </small>
          )}

          <p className='leading-4 text-sm font-bold text-primary'>
            {Currency.format('BRL', item.price, true)}
          </p>
        </div>
      </div>

      <div className='h-[100px] flex-1 flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center font-medium mb-10 max-w-[77px]'>
          <div
            className='bg-secondary rounded-l-lg border border-gray-400 h-[25px] flex items-center justify-center p-2 cursor-pointer'
            onClick={() => {
              if (item.quantityCart === 1) {
                handleItemToBeRemoved(item);
                return;
              }
              handleDecreaseCartItem(item.uuidControl);
            }}
          >
            -
          </div>
          <p className='max-w-[40px] truncate bg-secondary border border-gray-400 text-sm h-[25px] flex items-center justify-center p-2 font-bold'>
            {item.quantityCart && item.quantityCart < 0 ? 0 : item.quantityCart}
          </p>
          <div
            className='bg-secondary rounded-r-lg border border-gray-400 h-[25px] flex items-center justify-center p-2 cursor-pointer'
            onClick={() => {
              handleIncreaseCartItem(item.uuidControl);
            }}
          >
            +
          </div>
        </div>
        <div
          className='flex item-center gap-2 border-b border-red-400 text-red-600 font-medium'
          onClick={() => {
            handleItemToBeRemoved(item);
          }}
        >
          <p className='text-sm'>Remover</p>
          <FaTrashCan />
        </div>
      </div>
    </div>
  );
}
