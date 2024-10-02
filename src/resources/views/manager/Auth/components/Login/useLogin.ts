import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { useAuthContext } from '@/app/contexts/auth/useAuth.context';
import { useSetAuth } from '@/app/modules/manager/auth/use-cases';

import { loginSchema, LoginSchemaType } from './login.schema';

export function useLogin() {
  const methods = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema)
  });

  const navigate = useNavigate();

  const { handleSetUserAuth } = useAuthContext();

  const { mutateAuth, isError, isPendingMutateAuth } = useSetAuth();

  async function onSubmit(data: LoginSchemaType) {
    try {
      const response = await mutateAuth(data);

      const { token } = response;

      handleSetUserAuth(token);

      navigate('/home');
    } catch (error) {
      const errorResponse: any = error;

      toast.error(errorResponse.response.data.message);
    }
  }

  const disabledContinue =
    !methods.watch('login') || !methods.watch('password');

  if (isError) toast.error('Ocorreu um erro');

  return {
    handleSubmit: methods.handleSubmit(onSubmit),
    errors: methods.formState.errors,
    methods,
    disabledContinue,
    isPendingMutateAuth
  };
}
