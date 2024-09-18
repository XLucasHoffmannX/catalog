import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { loginSchema, LoginSchemaType } from './login.schema';

export function useLogin() {
  const methods = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema)
  });

  function onSubmit(data: LoginSchemaType) {
    console.log(data);
  }

  const disabledContinue =
    !methods.watch('email') || !methods.watch('password');

  return {
    handleSubmit: methods.handleSubmit(onSubmit),
    errors: methods.formState.errors,
    methods,
    disabledContinue
  };
}
