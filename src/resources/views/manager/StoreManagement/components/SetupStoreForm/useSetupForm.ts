import { useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

import { ThemeType } from '@/app/modules/client/domains/types/domain.types';
import { StoreQueryKeys } from '@/app/modules/manager/store/keys/store.keys';
import {
  useGetStoreSetupByStoreId,
  useUpdateStoreSetup
} from '@/app/modules/manager/store/use-cases';
import { axiosErrorHandler } from '@/shared/utils';

import { clientDomainSchema, ClientSchemaType } from './client.schema';

export function useSetupForm() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const [theme, setTheme] = useState<ThemeType>();

  const { mutateUpdateStoreStup, isPendingMutate } = useUpdateStoreSetup();

  const { setup, isError } = useGetStoreSetupByStoreId({
    storeId: id || '',
    enabled: !!id
  });

  const methods = useForm<ClientSchemaType>({
    resolver: zodResolver(clientDomainSchema),
    defaultValues: {
      client: setup?.setup.client,
      theme: setup?.setup.theme
    }
  });

  useEffect(() => {
    if (isError) {
      toast.error('Loja ainda não configurada!');
    }

    if (setup && !isError) {
      methods.reset({
        client: setup?.setup.client,
        theme: setup?.setup.theme
      });
    }
  }, [setup, methods, isError]);

  async function onSubmit(data: ClientSchemaType) {
    try {
      if (theme) {
        console.log(theme);
        await mutateUpdateStoreStup({
          storeSetupId: setup?.id || '',
          setup: {
            client: data.client,
            theme: {
              type: theme,
              header: data.theme.header
            }
          }
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

        toast.success('Dados atualizados com sucesso!');

        return;
      }
    } catch (error) {
      axiosErrorHandler(error);
    }
  }

  return {
    handleSubmit: methods.handleSubmit(onSubmit),
    methods,
    errors: methods.formState.errors,
    themeType: setup?.themeType,
    handleChangeSetTheme: setTheme,
    isLoading: isPendingMutate
  };
}
