import { useState } from 'react';

import { FaTrashCan } from 'react-icons/fa6';

export function CartItem(): JSX.Element {
  const [count, setCount] = useState(1);

  return (
    <div className='bg-secondary p-3 rounded-xl flex items-center justify-between gap-2 shadow-lg md:w-[500px]'>
      <div className='w-[100px] h-[100px] rounded bg-primary flex items-center justify-center text-secondary font-bold'>
        item
      </div>
      <div className='h-[100px] flex flex-col justify-between'>
        <p className='leading-4 text-sm font-medium truncate w-[150px]'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>

        <div>
          <small className='font-bold text-secondary-foreground'>
            Frete: R$ 12,00
          </small>
          <p className='leading-4 text-sm font-bold text-primary'>R$ 120,00</p>
        </div>
      </div>

      <div className='h-[100px] flex-1 flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center font-medium mb-10 max-w-[77px]'>
          <div
            className=' bg-secondary rounded-l-lg border border-gray-400 h-[25px] flex items-center justify-center p-2 cursor-pointer'
            onClick={() => {
              if (count > 0 || count === 0) setCount(count - 1);
            }}
          >
            -
          </div>
          <p className='max-w-[40px] truncate bg-secondary border border-gray-400 text-sm h-[25px] flex items-center justify-center p-2 font-bold'>
            {count < 0 ? 0 : count}
          </p>
          <div
            className='bg-secondary rounded-r-lg border border-gray-400 h-[25px] flex items-center justify-center p-2 cursor-pointer'
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </div>
        </div>
        <div className='flex item-center gap-2 border-b border-red-400 text-red-600 font-medium'>
          <p className='text-sm'>Remover</p>
          <FaTrashCan />
        </div>
      </div>
    </div>
  );
}
