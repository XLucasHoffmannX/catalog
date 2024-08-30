import { FaUser } from 'react-icons/fa';
import { HiShoppingBag } from 'react-icons/hi2';
import { MdLocationPin } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { Badge, Input } from '@/resources/components/ui';

import { IDefaultClientHeaderProps } from './DefaultClientHeader.types';

export function DefaultClientHeader({
  hiddenSearch
}: IDefaultClientHeaderProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div
      className='bg-violet-700 
        h-[300px] rounded-b-lg flex flex-col py-5 px-3'
    >
      <div className='flex items-center justify-center'>
        <div className='flex items-center justify-between gap-2 w-full md:w-[800px] '>
          <div className='flex gap-2'>
            <div className='bg-white p-2 rounded-lg flex gap-2 items-center justify-center cursor-pointer'>
              <FaUser className='text-violet-600 text-sm' />
              <p className='leading-4 text-sm font-semibold '>Entrar</p>
            </div>

            <div className='bg-white p-2 rounded-lg flex gap-2 items-center justify-center cursor-pointer'>
              <MdLocationPin className='text-violet-600 text-lg ' />

              <p className='leading-4 text-sm font-semibold '>
                Minha localização
              </p>
            </div>
          </div>

          <div
            className='bg-white p-2 rounded-lg flex gap-2 items-center justify-center relative cursor-pointer'
            onClick={() => navigate('/cart')}
          >
            <HiShoppingBag className='text-violet-600 text-lg ' />

            <Badge className='rounded-full absolute mb-8 mr-8 bg-white'>
              <p className='leading-4 font-semibold text-black'>1</p>
            </Badge>
          </div>
        </div>
      </div>

      <div className='h-full flex flex-col items-center justify-center gap-2 pr-5'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white'>
          Seu negócio aqui: Brand name
        </h1>

        <p className='text-md text-muted text-stone-300'>
          A modal dialog that interrupts the user with important content and
          expects a response.
        </p>
      </div>

      {!hiddenSearch && (
        <div className='relative flex items-center justify-center'>
          <Input
            className='bg-white absolute h-12 rounded-2xl shadow-lg shadow-slate-500/30  mt-8 animate-up max-w-[800px]'
            placeholder='Buscar...'
          />
        </div>
      )}
    </div>
  );
}
