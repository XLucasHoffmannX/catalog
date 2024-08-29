import { FaUser } from 'react-icons/fa';
import { HiShoppingBag } from 'react-icons/hi2';
import { MdLocationPin } from 'react-icons/md';

import {
  Badge,
  Button,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/resources/components/ui';

import { ProductCard } from '../../global';

import { IDefaultLayoutProps } from './DefaultClient.types';

export function DefaultClientWrapper({}: IDefaultLayoutProps): JSX.Element {
  return (
    <div className='h-screen w-screen flex justify-center items-center overflow-hidden relative'>
      <div className='w-full max-w-[1366px] h-full overflow-auto '>
        {/* Sobreposição */}
        <div className='bg-violet-700 h-[300px] rounded-b-lg flex flex-col py-5 px-3'>
          {/* Top */}
          <div className='flex items-center justify-between'>
            <div className='flex gap-2'>
              <div className='bg-white p-2 rounded-lg flex gap-2 items-center justify-center'>
                <FaUser className='text-violet-600 text-sm' />
                <p className='leading-4 text-sm font-semibold '>Entrar</p>
              </div>

              <div className='bg-white p-2 rounded-lg flex gap-2 items-center justify-center'>
                <MdLocationPin className='text-violet-600 text-lg ' />

                <p className='leading-4 text-sm font-semibold '>
                  Minha localização
                </p>
              </div>
            </div>

            <div className='bg-white p-2 rounded-lg flex gap-2 items-center justify-center relative'>
              <HiShoppingBag className='text-violet-600 text-lg ' />

              <Badge className='rounded-full absolute mb-8 mr-8 bg-white'>
                <p className='leading-4 font-semibold text-black'>1</p>
              </Badge>
            </div>
          </div>

          {/* content */}
          <div className='h-full flex flex-col items-center justify-center gap-2 pr-5'>
            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white'>
              Seu negócio aqui: Brand name
            </h1>

            <p className='text-md text-muted text-stone-300'>
              A modal dialog that interrupts the user with important content and
              expects a response.
            </p>
          </div>

          <div className='relative flex items-center'>
            <Input
              className='bg-white absolute h-12 rounded-2xl shadow-lg shadow-slate-500/30  mt-8'
              placeholder='Buscar...'
            />
          </div>
        </div>

        {/* content */}
        <div className='mt-8 p-3 flex flex-col gap-3'>
          {/* filtros */}
          <div className='flex items-center gap-2 mb-6'>
            <Select defaultValue='0'>
              <SelectTrigger className='bg-gray-100 text-black'>
                <SelectValue placeholder='Ordernar' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='0'>Relevância</SelectItem>
                  <SelectItem value='1'>Menor Preço</SelectItem>
                  <SelectItem value='2'>Maior Preço</SelectItem>
                  <SelectItem value='3'>Lançamento</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button className='bg-gray-100 text-black border border-solid border-gray-200'>
              Promoções 🔥
            </Button>
          </div>

          {/* scroll order */}
          <div className='w-full flex md:flex-row flex-col flex-wrap justify-between'>
            {Array.from({ length: 6 }).map((product, index) => (
              <ProductCard
                avaliable='4.5'
                title=''
                subTitle='Steam'
                quantity={20}
                price={100}
                discount={20}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 mb-9 bg-neutral-800 p-3 w-96 rounded-2xl shadow-lg shadow-slate-500/50 text-white font-semibold flex items-center justify-between'>
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
