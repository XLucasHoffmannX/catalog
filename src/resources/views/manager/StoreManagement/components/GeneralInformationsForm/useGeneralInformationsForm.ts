import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

import { StoreQueryKeys } from '@/app/modules/manager/store/keys/store.keys';
import {
  useGetAvailableDomain,
  useGetStoreSetupByStoreId,
  useUpdateStoreManager
} from '@/app/modules/manager/store/use-cases';
import { axiosErrorHandler } from '@/shared/utils';

import {
  updateStoreSchema,
  UpdateStoreSchemaType
} from './update-store.schema';

export function useGeneralInformationsForm() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { setup } = useGetStoreSetupByStoreId({
    storeId: id || '',
    enabled: !!id
  });

  const { mutateUpdateStore, isPendingMutate } = useUpdateStoreManager();

  const store = setup?.store;

  const methods = useForm<UpdateStoreSchemaType>({
    resolver: zodResolver(updateStoreSchema),
    defaultValues: {
      description: store?.name,
      name: store?.name,
      title: store?.title
    }
  });

  const isNameDirty = methods.getFieldState('name', methods.formState).isDirty;

  const { isAvailableDomain } = useGetAvailableDomain({
    domain: methods.watch('name'),
    enabled: isNameDirty && methods.watch('name') !== ''
  });

  useEffect(() => {
    if (store) {
      methods.reset({
        description: store.name,
        name: store.name,
        title: store.title
      });
    }
  }, [store, methods]);

  // Marcando a função onSubmit como assíncrona
  async function onSubmit(data: UpdateStoreSchemaType) {
    if (!isAvailableDomain?.available && isNameDirty) {
      toast.error('Nome indisponível!');
      return;
    }

    if (!data.name || !data.title) {
      toast.error('Forneça os dados!');
      return;
    }

    try {
      await mutateUpdateStore({
        ...data,
        status: store?.status,
        domain: data.name,
        storeId: id || ''
      });

      queryClient.invalidateQueries({
        queryKey: [StoreQueryKeys.GET_STORE_STEUP_BY_STORE_ID, { storeId: id }]
      });

      queryClient.invalidateQueries({
        queryKey: [StoreQueryKeys.GET_LIST_STORES_BY_COMPANY]
      });

      toast.success('Dados atualizados com sucesso!');
    } catch (error: unknown) {
      axiosErrorHandler(error);
    }
  }

  async function handleSetStatusStore(status: boolean) {
    try {
      if (store) {
        await mutateUpdateStore({
          ...store,
          status: status,
          storeId: id || ''
        });

        queryClient.invalidateQueries({
          queryKey: [
            StoreQueryKeys.GET_STORE_STEUP_BY_STORE_ID,
            { storeId: id }
          ]
        });

        queryClient.invalidateQueries({
          queryKey: [StoreQueryKeys.GET_LIST_STORES_BY_COMPANY]
        });

        toast.success(status ? 'Loja ativada!' : 'Loja desativada!');
      }
    } catch (error: unknown) {
      axiosErrorHandler(error);
    }
  }

  return {
    methods,
    handleSubmit: methods.handleSubmit(onSubmit),
    errors: methods.formState.errors,
    store,
    isAvailableDomain,
    isNameDirty,
    isLoadingButton: isPendingMutate,
    handleSetStatusStore
  };
}
