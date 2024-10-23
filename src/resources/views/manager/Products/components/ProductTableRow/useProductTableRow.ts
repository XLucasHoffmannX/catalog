import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { useProductManagerContext } from '@/app/contexts';
import { ProductQueryKeys } from '@/app/modules/client/products/keys/products.key';
import { useRemoveProductManager } from '@/app/modules/client/products/use-cases/remove-product-manager/useRemoveProductManager';
import { useManagementSession } from '@/app/modules/manager/auth/use-cases';

export function useProductTableRow() {
  const { companyId } = useManagementSession();
  const { mutateRemoveProductManager, isPending } = useRemoveProductManager();

  const { filters } = useProductManagerContext();

  const queryClient = useQueryClient();

  async function handleRemoveProduct(id: string) {
    try {
      await mutateRemoveProductManager({ companyId: companyId || '', id: id });

      queryClient.invalidateQueries({
        queryKey: [
          ProductQueryKeys.GET_PRODUCT_MANAGER_LIST_BY_COMPANY,
          {
            page: filters.page,
            limit: filters.limit,
            companyId: companyId || '',
            search: filters.search
          }
        ]
      });

      toast.info(`Produto removido!`);
    } catch (error) {
      console.error(error);

      toast.error('Não foi possível remover o produto!');
    }
  }

  return { handleRemoveProduct, isPending };
}
