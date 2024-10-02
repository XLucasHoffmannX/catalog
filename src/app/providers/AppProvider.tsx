import { ReactNode, useEffect } from 'react';

import Cookies from 'js-cookie';
import { createContext } from 'vm';
import { useShallow } from 'zustand/react/shallow';

import { useAuthContext } from '../contexts/auth/useAuth.context';

export function AppProvider({
  children
}: {
  children: ReactNode;
}): JSX.Element {
  const token = Cookies.get('access-token') as string;

  const [userAuthenticated, handleSetUserAuth, handleLogout] = useAuthContext(
    useShallow(state => [
      state.userAuthenticated,
      state.handleSetUserAuth,
      state.handleLogout
    ])
  );

  useEffect(() => {
    console.log(token);
    console.log('user', userAuthenticated);

    if (token && !userAuthenticated) {
      handleSetUserAuth(token);
    }
  }, [token, userAuthenticated, handleSetUserAuth]);

  return <>{children}</>;
}
