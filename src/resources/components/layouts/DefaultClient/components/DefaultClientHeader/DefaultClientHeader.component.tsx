import { FaUser } from 'react-icons/fa';
import { HiShoppingBag } from 'react-icons/hi2';
import { IoMenu } from 'react-icons/io5';
import { MdLocationPin } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';
import { TbFilterSearch } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

import { Badge, Input } from '@/resources/components/ui';
import { useTheme } from '@/shared/styles/theme/theme-provider';

import { IDefaultClientHeaderProps } from './DefaultClientHeader.types';

export function DefaultClientHeader({
  hiddenSearch
}: IDefaultClientHeaderProps): JSX.Element {
  const navigate = useNavigate();

  const { setTheme, theme } = useTheme();

  return (
    <div
      className='bg-primary 
        h-[300px] rounded-b-lg flex flex-col py-5 px-3'
    >
      <div className='flex items-center justify-center'>
        <div className='flex items-center justify-between gap-2 w-full md:w-[800px] '>
          <div className='flex items-center gap-2'>
            <div className='bg-secondary p-2 rounded-lg flex gap-2 items-center justify-center cursor-pointer'>
              <IoMenu className='text-secondary-foreground text-xl' />
            </div>

            <div className='bg-secondary p-2 rounded-lg flex gap-2 items-center justify-center cursor-pointer'>
              <FaUser className='text-primary text-sm' />
              <p className='leading-4 text-sm font-semibold'>Entrar</p>
            </div>

            <div className='bg-secondary p-2 rounded-lg flex gap-2 items-center justify-center cursor-pointer'>
              <MdLocationPin className='text-primary text-lg ' />

              <p className='leading-4 text-sm font-semibold max-w-[80px] truncate'>
                Minha localização
              </p>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <div
              className='bg-secondary p-2 rounded-lg flex gap-2 items-center justify-center relative cursor-pointer'
              onClick={() => navigate('/cart')}
            >
              <HiShoppingBag className='text-primary text-lg ' />

              <Badge className='rounded-full absolute mb-8 mr-8 bg-secondary'>
                <p className='leading-4 font-semibold text-secondary-foreground'>
                  1
                </p>
              </Badge>
            </div>

            <div
              className='bg-secondary p-2 rounded-lg flex gap-2 items-center justify-center relative cursor-pointer'
              onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light');
              }}
            >
              {theme === 'light' ? (
                <MdDarkMode className='text-primary text-lg ' />
              ) : (
                <MdOutlineLightMode className='text-primary text-lg ' />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='h-full flex flex-col items-center justify-center gap-2 pr-5'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-secondary'>
          Seu negócio aqui: Brand name
        </h1>

        <p className='text-md text-muted text-stone-300'>
          A modal dialog that interrupts the user with important content and
          expects a response.
        </p>
      </div>

      {!hiddenSearch && (
        <div className='relative flex items-center justify-center '>
          <div className='flex items-center justify-center gap-3 absolute mt-8'>
            <Input
              className='bg-white h-12 rounded-2xl shadow-lg shadow-slate-500/30 animate-up md:w-[800px]'
              placeholder='Buscar...'
            />

            <div className='flex border border-input items-center gap-2 bg-white rounded-2xl shadow-lg shadow-slate-500/30 animate-up p-3 text-muted-foreground hover:text-secondary-foreground active:text-secondary-foreground cursor-pointer'>
              <p className=' '>Filtros</p>
              <TbFilterSearch className='text-primary' />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
