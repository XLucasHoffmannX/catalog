import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useManagementSession } from '@/app/modules/manager/auth/use-cases';
import { StoreQueryKeys } from '@/app/modules/manager/store/keys/store.keys';
import { useAddStoreManager } from '@/app/modules/manager/store/use-cases';
import { axiosErrorHandler } from '@/shared/utils';

import { addStoreSchema, AddStoreSchemaType } from './add-store.schema';

export function useAddStore() {
  const methods = useForm<AddStoreSchemaType>({
    resolver: zodResolver(addStoreSchema)
  });
  const queryClient = useQueryClient();

  const { companyId } = useManagementSession();

  const { mutateAddStore, isPendingMutate } = useAddStoreManager();

  const navigate = useNavigate();

  async function onSubmit(data: AddStoreSchemaType) {
    try {
      await mutateAddStore({
        ...data,
        companyId: companyId || ''
      });

      queryClient.invalidateQueries({
        queryKey: [StoreQueryKeys.GET_LIST_STORES_BY_COMPANY]
      });

      navigate('/manage/store');
      return;
    } catch (error: unknown) {
      axiosErrorHandler(error);
    }
  }

  return {
    handleSubmit: methods.handleSubmit(onSubmit),
    methods,
    errors: methods.formState.errors,
    isPendingMutate
  };
}
