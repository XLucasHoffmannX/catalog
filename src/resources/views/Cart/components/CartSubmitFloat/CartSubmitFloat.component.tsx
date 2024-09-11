import { HiShoppingBag } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/resources/components/ui';

export function CartSubmitFloat(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className='absolute bottom-0 mb-9 w-full cursor-pointer flex justify-center items-center'>
      <div className='md:w-1/3 w-full '>
        <div className='flex items-center justify-between bg-secondary-foreground h-full p-3 rounded-2xl shadow-lg shadow-slate-500/50 text-secondary font-semibold border mx-2'>
          <div className='flex flex-col'>
            <p className='text-sm font-light'>Sub-total</p>
            <p className='text-sm font-semibold '>R$ 120,00</p>
          </div>

          <div className='flex items-center gap-3 text-secondary-foreground'>
            <div className='flex items-center bg-secondary rounded-xl p-2 gap-3'>
              <HiShoppingBag className=' text-2xl ' />
              <p className='text-sm font-semibold '>1</p>
            </div>

            <Button
              className='p-2 rounded-xl bg-secondary text-secondary-foreground'
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
