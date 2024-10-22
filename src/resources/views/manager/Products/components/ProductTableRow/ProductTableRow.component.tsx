import { FaStar } from 'react-icons/fa6';
import { SlOptionsVertical } from 'react-icons/sl';
import { useShallow } from 'zustand/react/shallow';

import { useProductManagerContext } from '@/app/contexts';
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

import { RemoveConfirmationModal } from '../RemoveConfirmationModal/RemoveConfirmationModal.component';

import { useProductTableRow } from './useProductTableRow';

import { IProductTableRowProps } from './ProductTableRow.types';

export function ProductTableRow({
  product
}: IProductTableRowProps): JSX.Element {
  const { handleRemoveProduct, isPending } = useProductTableRow();
  const [isOpenRemoveModal, handleChangeRemoveModal] = useProductManagerContext(
    useShallow(state => [
      state.isOpenRemoveModal,
      state.handleChangeRemoveModal
    ])
  );

  return (
    <>
      <TableRow>
        <TableCell className='font-medium'>
          <ImageWithLoader
            maxH='60px'
            maxW='60px'
            alt=''
            rounded='rounded-none'
            src={
              product.images.length > 0
                ? (product.images[0] as string)
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
          title={product.content}
        >
          {product.content}
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
            {!!product.available ? (
              <>
                <p
                  className=''
                  title={product.available.toString()}
                >
                  {product.available}
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
                      handleChangeRemoveModal({
                        open: true,
                        title: product.name
                      });
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

      <RemoveConfirmationModal
        isOpen={isOpenRemoveModal.open}
        onConfirm={() => {
          if (product.id) {
            handleRemoveProduct(product.id);
            return;
          }
          handleChangeRemoveModal({ open: false, title: '' });
        }}
        productTitle={isOpenRemoveModal.title}
        isLoading={isPending}
        onCancel={() => {
          handleChangeRemoveModal({ open: false, title: '' });
        }}
      />
    </>
  );
}
