import { useState } from 'react';

import { useClientContext, useStoreContext } from '@/app/contexts';
import { useGetProductClient } from '@/app/modules/client/products';

export function useCatalog() {
  const [itemCount, setItemCount] = useState(1);

  const { storeClient } = useStoreContext();

  const { filters } = useClientContext();

  const { products, isLoadingProducts } = useGetProductClient({
    page: filters.page,
    limit: itemCount,
    search: filters.search || '',
    storeId: storeClient?.id || '',
    enabled: !!storeClient?.id
  });

  const loadMoreProducts = () => {
    if (products?.meta?.totalItems) {
      if (itemCount > products?.meta?.totalItems) {
        return;
      }
      setItemCount(prev => prev + 15);
    }
  };

  return {
    products,
    isLoadingProducts,
    itemCount,
    loadMoreProducts
  };
}
