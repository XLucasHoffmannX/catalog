import { ManagerDefaultLayoutWrapper } from '@/resources/components/layouts/manager';

import { ProductFilters, TablePagination, TableProducts } from './components';

export function ProductsView(): JSX.Element {
  return (
    <ManagerDefaultLayoutWrapper>
      <section className='p-4 w-full flex justify-center'>
        <div className='w-full max-w-[1280px]'>
          <h1 className='font-bold text-3xl'>Produtos</h1>

          <ProductFilters />

          <div className='mt-4'>
            <TableProducts />

            <TablePagination />
          </div>
        </div>
      </section>
    </ManagerDefaultLayoutWrapper>
  );
}
