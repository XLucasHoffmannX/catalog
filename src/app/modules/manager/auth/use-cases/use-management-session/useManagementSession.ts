import Cookies from 'js-cookie';
import { useShallow } from 'zustand/react/shallow';

import { useAuthContext } from '@/app/contexts/auth/useAuth.context';

export function useManagementSession() {
  const token = Cookies.get('access-token') as string;

  const [userAuthenticated, handleLogout] = useAuthContext(
    useShallow(state => [state.userAuthenticated, state.handleLogout])
  );

  return {
    authenticated: !!token,
    userAuthenticated,
    handleLogout,
    isManager: userAuthenticated?.role === 'ADMIN'
  };
}
