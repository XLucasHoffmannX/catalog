import { useEffect } from 'react';

import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';
import { useShallow } from 'zustand/react/shallow';

import { useAuthContext } from '@/app/contexts/auth/useAuth.context';
import { useManagementSession } from '@/app/modules/manager/auth/use-cases/use-management-session/useManagementSession';

export function AutManagementhMiddleware(): JSX.Element {
  const { authenticated } = useManagementSession();

  const token = Cookies.get('access-token') as string;

  const [userAuthenticated, handleSetUserAuth] = useAuthContext(
    useShallow(state => [state.userAuthenticated, state.handleSetUserAuth])
  );

  useEffect(() => {
    console.log(token);
    console.log('user', userAuthenticated);

    if (token && !userAuthenticated) {
      handleSetUserAuth(token);
    }
  }, [token, userAuthenticated, handleSetUserAuth]);

  if (!authenticated) {
    return <Navigate to='/' />;
  }

  return <Outlet />;
}
