import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { useManagementSession } from '@/app/modules/manager/auth/use-cases';
import { StoreQueryKeys } from '@/app/modules/manager/store/keys/store.keys';
import {
  useAddStoreManager,
  useGetAvailableDomain
} from '@/app/modules/manager/store/use-cases';
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

  const { isAvailableDomain } = useGetAvailableDomain({
    domain: methods.watch('name'),
    enabled: !!methods.watch('name')
  });

  console.log(isAvailableDomain);

  async function onSubmit(data: AddStoreSchemaType) {
    try {
      if (!!methods.getValues('name') && !isAvailableDomain?.available) {
        return toast.error('Dominio indisponivel! tente outro!');
      }

      await mutateAddStore({
        ...data,
        domain: data.name,
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
    isPendingMutate,
    isAvailableDomain
  };
}
