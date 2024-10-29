import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useStoreManagement } from '../../useStoreManagement';

import {
  updateStoreSchema,
  UpdateStoreSchemaType
} from './update-store.schema';

export function useGeneralInformationsForm() {
  const { store } = useStoreManagement();

  const methods = useForm<UpdateStoreSchemaType>({
    resolver: zodResolver(updateStoreSchema),
    defaultValues: {
      description: store?.name,
      name: store?.name,
      title: store?.title
    }
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

  function onSubmit(data: UpdateStoreSchemaType) {
    console.log(data);
  }

  return {
    methods,
    handleSubmit: methods.handleSubmit(onSubmit),
    errors: methods.formState.errors
  };
}
