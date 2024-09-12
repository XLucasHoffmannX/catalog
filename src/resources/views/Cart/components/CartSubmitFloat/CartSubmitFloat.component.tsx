import { HiShoppingBag } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

import { useCartContext } from '@/app/contexts';
import { Button } from '@/resources/components/ui';
import { Currency } from '@/shared/utils/format';

export function CartSubmitFloat(): JSX.Element {
  const navigate = useNavigate();
  const { cart } = useCartContext();

  return (
    <div
      className={`absolute bottom-0 mb-9 w-full cursor-pointer flex justify-center items-center ${
        !cart.quantityItems && 'hidden'
      }`}
    >
      <div className='md:w-1/4 w-full '>
        <div className='flex items-center justify-between bg-secondary-foreground h-full p-3 rounded-2xl shadow-lg shadow-slate-500/50 text-secondary font-semibold border mx-2'>
          <div className='flex flex-col'>
            <p className='text-sm font-light'>Sub-total</p>
            <p className='text-sm font-semibold '>
              {Currency.format('BRL', cart.amountTotal, true)}
            </p>
          </div>

          <div className='flex items-center gap-3 text-secondary-foreground'>
            <div className='flex items-center bg-secondary rounded-xl p-2 gap-3'>
              <HiShoppingBag className=' text-2xl ' />
              <p className='text-sm font-semibold '>
                {cart.quantityItems > 0 && cart.quantityItems}
              </p>
            </div>

            <Button
              className='p-2 rounded-xl bg-secondary text-secondary-foreground hover:text-secondary border'
              onClick={() => navigate('/payment')}
            >
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
