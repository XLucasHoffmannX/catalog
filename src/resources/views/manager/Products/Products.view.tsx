import { managerRoutes } from '@/app/router/routes/manager/managerRoutes.constant';
import { ManageAppLayoutWrapper } from '@/resources/components/layouts/manager';

import { ProductFilters, TablePagination, TableProducts } from './components';

export function ProductsView(): JSX.Element {
  return (
    <ManageAppLayoutWrapper
      breadcrumbs={[
        { name: 'Produtos', url: managerRoutes.products },
        { name: 'Meus Produtos' }
      ]}
    >
      <section className='w-full'>
        <div className='w-full'>
          <h1 className='font-bold text-3xl'>Produtos</h1>

          <ProductFilters />

          <div className='mt-4'>
            <TableProducts />

            <TablePagination />
          </div>
        </div>
      </section>
    </ManageAppLayoutWrapper>
  );
}
