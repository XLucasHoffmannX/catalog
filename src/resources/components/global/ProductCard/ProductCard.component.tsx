import { LuBoxes, LuStar } from 'react-icons/lu';
import { TbSquareRoundedArrowDownFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

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
  CarouselItem
} from '@/resources/components/ui/carousel';

import { IProductCardProps } from './ProductCard.types';

export function ProductCard({
  avaliable,
  price,
  quantity,
  title,
  discount,
  subTitle
}: IProductCardProps): JSX.Element {
  return (
    <Link to='/product'>
      <Card className='shadow-md w-full md:w-96 mb-10'>
        <CardHeader>
          <div className='mb-3 flex gap-2'>
            {discount && (
              <Badge className='w-auto bg-orange-600 hover:bg-orange-600 flex gap-1'>
                {discount}%
                <TbSquareRoundedArrowDownFilled className='h-4 w-4' />
              </Badge>
            )}
            {quantity >= 20 && (
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
              {/* eslint-disable-next-line @typescript-eslint/naming-convention */}
              {Array.from({ length: 2 }).map((_, index) => (
                <CarouselItem key={index}>
                  <Card className='bg-violet-500 flex items-center justify-center'>
                    <CardContent className='flex items-center justify-center p-6 h-56 w-full'>
                      <span className='text-4xl font-semibold'>
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </CardContent>
        <CardFooter>
          <div className='w-full'>
            <div className='flex items-center justify-between gap-2 mb-3'>
              <span className='text-sm text-gray-500'>Avaliação</span>
              <div className='flex items-center gap-2'>
                <LuStar className='h-6 w-6 text-yellow-500' />
                <span className='text-sm text-gray-500 font-medium'>
                  {avaliable}
                </span>
              </div>
            </div>
            {discount && (
              <span className='line-through text-sm text-red-400'>
                R$ {price}
              </span>
            )}
            <h2 className='text-2xl font-bold'>
              {discount ? (
                <>R$ {price - price * (discount / 100)}</>
              ) : (
                <>R$ {price}</>
              )}
            </h2>
            <p className='text-sm text-gray-500'>Á vista</p>

            <div className='flex flex-col gap-3 mt-3'>
              <Button className='w-full hover:text-violet-600 hover:bg-white'>
                Comprar
              </Button>

              <Button className='w-full text-violet-600 bg-white hover:text-white border border-violet-600'>
                Adicionar a sacola
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
