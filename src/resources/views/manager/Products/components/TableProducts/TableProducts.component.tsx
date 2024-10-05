import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from '@/resources/components/ui';

import { ProductTableRow } from '../ProductTableRow/ProductTableRow.component';
import { RowSkeleton } from '../RowSkeleton/RowSkeleton.component';

import { useTableProduct } from './useTableProducts';

export function TableProducts(): JSX.Element {
  const { productList, isFetching } = useTableProduct();

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
        {isFetching && (
          <RowSkeleton
            cells={8}
            rows={5}
            heightRow={45}
          />
        )}

        {productList?.content.map((product, index) => (
          <ProductTableRow
            product={product}
            key={`${index}-${product.id}-${product.minQuantity}`}
          />
        ))}
      </TableBody>
    </Table>
  );
}
