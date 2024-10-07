import Lottie from 'react-lottie';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/resources/components/ui';
import EmptyAnimation from '@/shared/assets/animations/empty-list-anm.json';
import { useAnimationLottie } from '@/shared/hooks/useAnimationLottie';

import { ProductTableRow } from '../ProductTableRow/ProductTableRow.component';
import { RowSkeleton } from '../RowSkeleton/RowSkeleton.component';

import { useTableProduct } from './useTableProducts';

export function TableProducts(): JSX.Element {
  const { productList, isFetching } = useTableProduct();
  const defaultOptions = useAnimationLottie(EmptyAnimation);

  return (
    <Table className='max-w-[1200px]'>
      <TableHeader>
        <TableRow>
          <TableHead>-</TableHead>
          <TableHead>ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Conteúdo</TableHead>
          <TableHead>Preço</TableHead>
          <TableHead className='w-[20px]'>Avaliação</TableHead>
          <TableHead className='text-center'>-</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {isFetching ? (
          <RowSkeleton
            cells={8}
            rows={5}
            heightRow={45}
          />
        ) : productList?.content.length ? (
          productList.content.map((product, index) => (
            <ProductTableRow
              product={product}
              key={`${index}-${product.id}-${product.minQuantity}`}
            />
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={8}
              className='text-center h-[150px]'
            >
              <div className='flex flex-col items-center justify-center p-6'>
                <div className='w-[200px]  h-[200px] mt-4'>
                  <Lottie options={defaultOptions} />
                </div>
                <p className='text-base font-bold mt-4'>
                  Nenhum produto encontrado
                </p>
              </div>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
