import { LuBoxes, LuStar } from 'react-icons/lu';
import { TbSquareRoundedArrowDownFilled } from 'react-icons/tb';

import { useCartContext } from '@/app/contexts';
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

export function ProductCard({ product }: IProductCardProps): JSX.Element {
  const { handleSetCartItem } = useCartContext();

  return (
    <Card className='shadow-md w-full md:w-96 mb-10 flex flex-col justify-between'>
      <CardHeader>
        <div className='mb-3 flex gap-2'>
          {product.isDiscount && product.discount && (
            <Badge className='w-auto bg-orange-600 hover:bg-orange-600 flex gap-1'>
              {product.discount}%
              <TbSquareRoundedArrowDownFilled className='h-4 w-4' />
            </Badge>
          )}
          {product.minQuantity && product.quantity <= product.minQuantity && (
            <Badge className='w-auto bg-orange-600 hover:bg-orange-600 flex gap-1'>
              Últimas unidades
              <LuBoxes className='h-4 w-4' />
            </Badge>
          )}
        </div>
        <CardTitle>{product.title}</CardTitle>
        {product.subTitle && (
          <CardDescription>{product.subTitle}</CardDescription>
        )}
      </CardHeader>

      <CardContent>
        <Carousel className='w-full'>
          <CarouselContent>
            {product.images?.map((image, index) => (
              <CarouselItem key={index}>
                <Card className='bg-primary flex items-center justify-center animate-right'>
                  <CardContent className='flex items-center justify-center w-full text-secondary p-3 '>
                    <ImageWithLoader
                      src={image}
                      alt={product.title}
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
          {product.isAvaliable && product.avaliable && (
            <div className='flex items-center justify-between gap-2 mb-3'>
              <span className='text-sm text-gray-500'>Avaliação</span>
              <div className='flex items-center gap-2'>
                <LuStar className='h-6 w-6 text-yellow-500' />
                <span className='text-sm text-gray-500 font-medium'>
                  {product.avaliable}
                </span>
              </div>
            </div>
          )}

          {product.isDiscount && product.discount && (
            <span className='line-through text-sm text-red-400'>
              {Currency.format('BRL', product.price, true)}
            </span>
          )}
          <h2 className='text-2xl font-bold'>
            {product.isDiscount && product.discount ? (
              <>
                {Currency.format(
                  'BRL',
                  product.price - product.price * (product.discount / 100),
                  true
                )}
              </>
            ) : (
              <> {Currency.format('BRL', product.price, true)}</>
            )}
          </h2>
          <p className='text-sm text-gray-500'>Á vista</p>

          <div className='flex flex-col gap-3 mt-3'>
            <Button className='w-full hover:text-primary hover:bg-white'>
              Comprar
            </Button>

            <Button
              className='w-full hover:text-primary hover:bg-white'
              onClick={() => {
                if (product.isDiscount && product.discount) {
                  handleSetCartItem({
                    ...product,
                    price:
                      product.price - product.price * (product.discount / 100),
                    uuidControl: crypto.randomUUID(),
                    dateAdd: new Date().toISOString()
                  });
                  return;
                }

                handleSetCartItem({
                  ...product,
                  uuidControl: crypto.randomUUID(),
                  dateAdd: new Date().toISOString()
                });
              }}
            >
              Adicionar ao carrinho
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
