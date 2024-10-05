import { FaStar } from 'react-icons/fa6';
import { SlOptionsVertical } from 'react-icons/sl';

import { ImageWithLoader } from '@/resources/components/global';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  TableCell,
  TableRow
} from '@/resources/components/ui';
import { Currency } from '@/shared/utils/format';

import { useProductTableRow } from './useProductTableRow';

import { IProductTableRowProps } from './ProductTableRow.types';

export function ProductTableRow({
  product
}: IProductTableRowProps): JSX.Element {
  const { handleRemoveProduct, isPending } = useProductTableRow();

  return (
    <TableRow>
      <TableCell className='font-medium'>
        <ImageWithLoader
          maxH='60px'
          maxW='60px'
          alt=''
          rounded='rounded-none'
          src={
            product.images.length > 0
              ? (product.images[0].url as string)
              : 'https://semantic-ui.com/images/wireframe/image.png'
          }
        />
      </TableCell>
      <TableCell title={product.id?.toString()}>{product.id}</TableCell>
      <TableCell
        className='max-w-[150px] truncate'
        title={product.name}
      >
        {product.name}
      </TableCell>
      <TableCell
        className='max-w-[150px] truncate'
        title={product.description}
      >
        {product.description}
      </TableCell>
      <TableCell
        className='max-w-[90px] truncate'
        title={product.subDescription}
      >
        {product.subDescription}
      </TableCell>
      <TableCell
        className='w-[150px] truncate'
        title={Currency.format('BRL', product.price, true)}
      >
        <p className='font-bold'>
          {Currency.format('BRL', product.price, true)}
        </p>
      </TableCell>
      <TableCell>
        <div className='flex gap-2 items-center justify-center text-gray-400'>
          {product.isAvaliable ? (
            <>
              <p
                className=''
                title={product.avaliable}
              >
                {product.avaliable}
              </p>
              <FaStar className='' />
            </>
          ) : (
            '-'
          )}
        </div>
      </TableCell>
      <TableCell className=''>
        <div className='flex gap-2 items-center justify-center'>
          <Popover>
            <PopoverTrigger>
              <SlOptionsVertical className='cursor-pointer ' />
            </PopoverTrigger>
            <PopoverContent className='w-full'>
              <div className='flex flex-col gap-3 w-[250px]'>
                <p className='max-w-[250px] truncate'>
                  Açoes para {product.name}
                </p>
                <Button
                  variant='destructive'
                  isLoading={isPending}
                  onClick={() => {
                    handleRemoveProduct(product.id as number);
                  }}
                >
                  Remover
                </Button>
                <Button>Editar</Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </TableCell>
    </TableRow>
  );
}
