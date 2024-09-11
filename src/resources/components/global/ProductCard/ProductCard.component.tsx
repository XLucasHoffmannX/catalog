import { LuBoxes, LuStar } from 'react-icons/lu';
import { TbSquareRoundedArrowDownFilled } from 'react-icons/tb';

import { Badge } from '@/resources/components/ui/badge';
import { Button } from '@/resources/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/resources/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/resources/components/ui/carousel';
import { Currency } from '@/shared/utils/format';

import { ImageWithLoader } from '../';

import { IProductCardProps } from './ProductCard.types';

export function ProductCard({
  title,
  subTitle,
  quantity,
  discount,
  isDiscount,
  minQuantity,
  avaliable,
  images,
  isAvaliable,
  price
}: IProductCardProps): JSX.Element {
  return (
    <Card className='shadow-md w-full md:w-96 mb-10'>
      <CardHeader>
        <div className='mb-3 flex gap-2'>
          {isDiscount && discount && (
            <Badge className='w-auto bg-orange-600 hover:bg-orange-600 flex gap-1'>
              {discount}%
              <TbSquareRoundedArrowDownFilled className='h-4 w-4' />
            </Badge>
          )}
          {minQuantity && quantity <= minQuantity && (
            <Badge className='w-auto bg-orange-600 hover:bg-orange-600 flex gap-1'>
              Últimas unidades
              <LuBoxes className='h-4 w-4' />
            </Badge>
          )}
        </div>
        <CardTitle>{title}</CardTitle>
        {subTitle && <CardDescription>{subTitle}</CardDescription>}
      </CardHeader>

      <CardContent>
        <Carousel className='w-full'>
          <CarouselContent>
            {images?.map((image, index) => (
              <CarouselItem key={index}>
                <Card className='bg-primary flex items-center justify-center animate-right'>
                  <CardContent className='flex items-center justify-center w-full text-secondary p-3 '>
                    <ImageWithLoader
                      src={image}
                      alt={title}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='absolute left-0 top-1/2 transform -translate-y-1/2 ml-2 z-10' />
          <CarouselNext className='absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 z-10' />
        </Carousel>
      </CardContent>

      <CardFooter>
        <div className='w-full'>
          {isAvaliable && avaliable && (
            <div className='flex items-center justify-between gap-2 mb-3'>
              <span className='text-sm text-gray-500'>Avaliação</span>
              <div className='flex items-center gap-2'>
                <LuStar className='h-6 w-6 text-yellow-500' />
                <span className='text-sm text-gray-500 font-medium'>
                  {avaliable}
                </span>
              </div>
            </div>
          )}

          {isDiscount && discount && (
            <span className='line-through text-sm text-red-400'>
              {Currency.format('BRL', price, true)}
            </span>
          )}
          <h2 className='text-2xl font-bold'>
            {isDiscount && discount ? (
              <>
                {Currency.format('BRL', price - price * (discount / 100), true)}
              </>
            ) : (
              <> {Currency.format('BRL', price, true)}</>
            )}
          </h2>
          <p className='text-sm text-gray-500'>Á vista</p>

          <div className='flex flex-col gap-3 mt-3'>
            <Button className='w-full hover:text-primary hover:bg-white'>
              Comprar
            </Button>

            <Button className='w-full text-primary bg-white hover:text-white border border-primary'>
              Adicionar ao carrinho
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
