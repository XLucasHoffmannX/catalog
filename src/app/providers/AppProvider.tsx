import { ReactNode, useEffect } from 'react';

import Cookies from 'js-cookie';
import { useShallow } from 'zustand/react/shallow';

import { useAuthContext } from '../contexts/auth/useAuth.context';

export function AppProvider({
  children
}: {
  children: ReactNode;
}): JSX.Element {
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

  return <>{children}</>;
}
