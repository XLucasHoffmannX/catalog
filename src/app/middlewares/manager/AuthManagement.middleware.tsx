import { useEffect } from 'react';

import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';
import { useShallow } from 'zustand/react/shallow';

import { useAuthContext } from '@/app/contexts/auth/useAuth.context';
import { useGetValidateAuth } from '@/app/modules/manager/auth/use-cases';
import { useManagementSession } from '@/app/modules/manager/auth/use-cases/use-management-session/useManagementSession';

export function AutManagementhMiddleware(): JSX.Element {
  const { authenticated } = useManagementSession();

  const token = Cookies.get('access-token') as string;

  const [userAuthenticated, handleSetUserAuth] = useAuthContext(
    useShallow(state => [state.userAuthenticated, state.handleSetUserAuth])
  );

  const { cachedUserLogged, isLoadingUserLogged } = useGetValidateAuth({
    enabled: !!token
  });

  useEffect(() => {
    if (token && !userAuthenticated && !isLoadingUserLogged) {
      handleSetUserAuth(token, cachedUserLogged);
    }
  }, [
    token,
    userAuthenticated,
    handleSetUserAuth,
    isLoadingUserLogged,
    cachedUserLogged
  ]);

  if (!authenticated) {
    return <Navigate to='/' />;
  }

  return <Outlet />;
}
