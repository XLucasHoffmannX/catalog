import { useEffect } from 'react';

import Cookies from 'js-cookie';
import { Outlet } from 'react-router-dom';

import { env } from '@/app/config';
import { useAuthClient } from '@/app/modules/client/auth-client/use-cases';
import { ErrorScreen, SplashScreen } from '@/resources/components/global';

export function ClientAuthMiddleware(): JSX.Element {
  const { mutateAuthClient, isPendingMutateAuthClient, isError } =
    useAuthClient();

  useEffect(() => {
    const authenticate = async () => {
      try {
        if (!Cookies.get('access-client')) {
          const res = await mutateAuthClient({
            client: env.APP_CLIENT,
            password: env.PASS_CLIENT
          });

          Cookies.set('access-client', res.token);
        }
      } catch (error) {
        console.error('Erro na autenticação:', error);
      }
    };

    authenticate();
  }, [mutateAuthClient]);

  if (isError) {
    return <ErrorScreen description='Loja indisponível' />;
  }

  if (isPendingMutateAuthClient) {
    return <SplashScreen />;
  }

  return <Outlet />;
}
