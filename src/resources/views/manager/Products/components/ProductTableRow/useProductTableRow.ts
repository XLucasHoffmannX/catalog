import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { ProductQueryKeys } from '@/app/modules/client/products/keys/products.key';
import { useRemoveProductManager } from '@/app/modules/client/products/use-cases/remove-product-manager/useRemoveProductManager';

export function useProductTableRow() {
  const { mutateRemoveProductManager, isPending } = useRemoveProductManager();

  const queryClient = useQueryClient();

  async function handleRemoveProduct(id: number) {
    try {
      await mutateRemoveProductManager({ id: id });

      queryClient.invalidateQueries({
        queryKey: [ProductQueryKeys.GET_PRODUCT_MANAGER_LIST]
      });

      toast.info(`Produto removido!`);
    } catch (error) {
      console.error(error);

      toast.error('Não foi possível remover o produto!');
    }
  }

  return { handleRemoveProduct, isPending };
}
