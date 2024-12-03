import { AiFillInstagram } from 'react-icons/ai';
import { HiShoppingBag } from 'react-icons/hi2';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { useCartContext, useClientContext } from '@/app/contexts';
import { useGetClient } from '@/app/modules/client/products';
import { Avatar, AvatarImage, Badge, Input } from '@/resources/components/ui';
import { useTheme } from '@/shared/styles/theme/theme-provider';

import { HeaderSkeleton } from '../HeaderSkeleton/HeaderSkeleton.component';

import { IDefaultClientHeaderProps } from './DefaultClientHeader.types';

export function DefaultClientHeader({
  hiddenSearch
}: IDefaultClientHeaderProps): JSX.Element {
  const navigate = useNavigate();
  const { handleChangeFilter } = useClientContext();

  const { client, theme: themeClient, isLoading } = useGetClient();

  const { setTheme, theme } = useTheme();

  const { cart } = useCartContext();

  return (
    <div
      className='bg-primary 
        h-[300px] rounded-b-lg flex flex-col py-5 px-3'
      style={
        client?.clientBackground
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.5)), url(${client.clientBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top left'
            }
          : {}
      }
    >
      <div className='flex items-center justify-center'>
        <div className='flex items-center justify-between gap-2 w-full md:w-[800px] '>
          <div className='flex items-center gap-2'>
            {/* <div className='bg-secondary p-2 rounded-lg flex gap-2 items-center justify-center cursor-pointer'>
              <IoMenu className='text-secondary-foreground text-xl' />
            </div> */}

            {/* <div className='bg-secondary p-2 rounded-lg flex gap-2 items-center justify-center cursor-pointer'>
              <FaUser className='text-primary text-sm' />
              <p className='leading-4 text-sm font-semibold'>Entrar</p>
            </div> */}
          </div>

          <div className='flex items-center gap-2'>
            <div
              className='bg-secondary p-2 rounded-lg flex gap-2 items-center justify-center relative cursor-pointer'
              onClick={() => navigate('/cart')}
            >
              <HiShoppingBag className='text-primary text-lg ' />

              {!!cart.quantityItems && (
                <Badge className='rounded-full absolute mb-8 mr-8 bg-secondary'>
                  <p className='leading-4 font-semibold text-secondary-foreground'>
                    {cart.quantityItems > 0 && cart.quantityItems}
                  </p>
                </Badge>
              )}
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
        {isLoading && <HeaderSkeleton />}

        {client && (
          <>
            {client?.clientLogo && themeClient?.header?.logoAccept && (
              <div className='flex items-center justify-center'>
                <Avatar className='size-20'>
                  <AvatarImage
                    src={client?.clientLogo}
                    alt={client?.clientName}
                  />
                </Avatar>
              </div>
            )}

            <h1
              className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${
                themeClient?.header?.titleColor
                  ? `text-[${themeClient?.header?.titleColor}]`
                  : 'text-secondary'
              }`}
            >
              {client?.clientName}
            </h1>

            <p
              className={`text-md  text-center ${
                themeClient?.header?.subTitleColor
                  ? `text-[${themeClient?.header?.subTitleColor}]`
                  : 'text-muted text-stone-300'
              }}`}
            >
              {client?.clientDescription}
            </p>

            {!!client.mediaLinks?.length && (
              <div className='w-full flex items-center justify-center mb-5 mt-2 gap-3'>
                <div className='size-8  rounded-full flex items-center justify-center'>
                  <AiFillInstagram className='w-full h-full' />
                </div>
                <div className='size-8 rounded-full flex items-center justify-center'>
                  <IoLogoWhatsapp className='w-full h-full' />
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {!hiddenSearch && (
        <div className='relative flex items-center justify-center '>
          <div className='flex items-center justify-center gap-3 absolute mt-8'>
            <Input
              className='bg-white h-12 rounded-2xl shadow-lg shadow-slate-500/30 animate-up md:w-[800px] text-black'
              placeholder='Buscar...'
              onChange={e => {
                handleChangeFilter({ search: e.target.value });
              }}
            />

            {/* <div className='flex border border-input items-center gap-2 bg-white rounded-2xl shadow-lg shadow-slate-500/30 animate-up p-3 text-muted-foreground hover:text-secondary-foreground active:text-secondary-foreground cursor-pointer'>
              <p>Filtros</p>
              <TbFilterSearch className='text-primary' />
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
