import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { clientDomainSchema, ClientSchemaType } from './client.schema';

export function useSetupForm() {
  const methods = useForm<ClientSchemaType>({
    resolver: zodResolver(clientDomainSchema)
  });

  function onSubmit(data: ClientSchemaType) {
    console.log(data);
  }

  return {
    handleSubmit: methods.handleSubmit(onSubmit),
    methods,
    errors: methods.formState.errors
  };
}
