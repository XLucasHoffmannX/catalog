import { HiShoppingBag } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

export function DefaultClientCartFloat(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div
      className='absolute bottom-0 mb-9 md:w-1/3 w-full cursor-pointer'
      onClick={() => navigate('/cart')}
    >
      <div className='flex items-center justify-between bg-neutral-800 h-full p-3 rounded-2xl shadow-lg shadow-slate-500/50 text-white font-semibold border mx-2'>
        <div className='flex flex-col'>
          <p className='text-sm font-light'>Total</p>
          <p className='text-sm font-semibold '>R$ 120,00</p>
        </div>

        <div className='flex items-center bg-neutral-100 rounded-xl p-2 gap-3'>
          <HiShoppingBag className='text-neutral-700 text-2xl ' />
          <p className='text-sm font-semibold text-neutral-700'>1</p>
        </div>
      </div>
    </div>
  );
}
