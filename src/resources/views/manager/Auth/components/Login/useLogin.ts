import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '@/app/contexts/auth/useAuth.context';
import { useSetAuth } from '@/app/modules/manager/auth/use-cases';
import { axiosErrorHandler } from '@/shared/utils';

import { loginSchema, LoginSchemaType } from './login.schema';

export function useLogin() {
  const methods = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema)
  });

  const navigate = useNavigate();

  const { handleSetUserAuth } = useAuthContext();

  const { mutateAuth, isPendingMutateAuth } = useSetAuth();

  async function onSubmit(data: LoginSchemaType) {
    try {
      const response = await mutateAuth(data);

      const { token } = response;

      handleSetUserAuth(token);

      navigate('/home');
    } catch (error: unknown) {
      axiosErrorHandler(error);
    }
  }

  const disabledContinue =
    !methods.watch('email') || !methods.watch('password');

  return {
    handleSubmit: methods.handleSubmit(onSubmit),
    errors: methods.formState.errors,
    methods,
    disabledContinue,
    isPendingMutateAuth
  };
}
