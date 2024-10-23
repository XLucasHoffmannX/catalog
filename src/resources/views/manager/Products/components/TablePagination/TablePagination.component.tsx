import { useProductManagerContext } from '@/app/contexts';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/resources/components/ui';

import { useTableProduct } from '../TableProducts/useTableProducts';

export function TablePagination(): JSX.Element | null {
  const { handleChangeFilter } = useProductManagerContext();
  const { productListByCompany } = useTableProduct();

  const meta = productListByCompany?.meta;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > (meta?.totalPages || 1)) return;
    handleChangeFilter({ page });
  };

  if (!meta || meta.totalPages <= 1) {
    return null;
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href='#'
            onClick={() => handlePageChange(meta.currentPage - 1)}
          />
        </PaginationItem>

        {[...Array(meta.totalPages)].map((item, index) => {
          const page = index + 1;
          return (
            <PaginationItem key={page}>
              <PaginationLink
                href='#'
                isActive={page === meta.currentPage}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {meta.totalPages > 5 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            href='#'
            onClick={() => handlePageChange(meta.currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
