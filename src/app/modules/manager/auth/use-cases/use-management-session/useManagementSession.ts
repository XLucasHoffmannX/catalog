import Cookies from 'js-cookie';
import { useShallow } from 'zustand/react/shallow';

import { useStoreContext } from '@/app/contexts';
import { useAuthContext } from '@/app/contexts/auth/useAuth.context';

export function useManagementSession() {
  const { store } = useStoreContext();
  const token = Cookies.get('access-token') as string;

  const [userAuthenticated, handleLogout] = useAuthContext(
    useShallow(state => [state.userAuthenticated, state.handleLogout])
  );

  return {
    authenticated: !!token,
    companyId: userAuthenticated?.company?.id,
    company: userAuthenticated?.company,
    userAuthenticated,
    store,
    storeId: store?.id,
    handleLogout,
    isManager: userAuthenticated?.role === 'OWNER_USER'
  };
}
