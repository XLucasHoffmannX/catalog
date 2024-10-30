import { useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

import { ThemeType } from '@/app/modules/client/domains/types/domain.types';
import { useGetStoreSetupByStoreId } from '@/app/modules/manager/store/use-cases';

import { clientDomainSchema, ClientSchemaType } from './client.schema';

export function useSetupForm() {
  const { id } = useParams();

  const [theme, setTheme] = useState<string>();

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

  function onSubmit(data: ClientSchemaType) {
    console.log(data);
  }

  return {
    handleSubmit: methods.handleSubmit(onSubmit),
    methods,
    errors: methods.formState.errors,
    themeType: setup?.themeType,
    handleChangeSetTheme: setTheme
  };
}
