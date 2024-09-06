import { ReactNode } from 'react';

import { FaUser } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';

export function DefaultPageWrapper({
  children
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div className='w-screen h-screen flex justify-center items-center overflow-hidden bg-secondary'>
      <div className='w-full max-w-[1920px] h-full overflow-auto bg-secondary'>
        <div className='bg-primary rounded-b-lg flex flex-col py-5 px-3'>
          <div className='flex gap-2 items-center justify-between'>
            <div className='bg-secondary p-2 rounded-lg flex gap-2 items-center justify-center cursor-pointer'>
              <FaUser className='text-primary text-sm' />
              <p className='leading-4 text-sm font-semibold'>Entrar</p>
            </div>

            <div className='bg-secondary p-2 rounded-lg flex gap-2 items-center justify-center cursor-pointer'>
              <MdLocationPin className='text-primary text-lg ' />

              <p className='leading-4 text-sm font-semibold '>
                Minha localização
              </p>
            </div>
          </div>
        </div>

        <div className='animate-up'>
          <div className='overflow-x-hidden p-3'>{children}</div>
        </div>
      </div>
    </div>
  );
}
