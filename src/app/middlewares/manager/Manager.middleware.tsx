import { Navigate, Outlet } from 'react-router-dom';

import {
  useGetValidateAuth,
  useManagementSession
} from '@/app/modules/manager/auth/use-cases';
import { SplashScreen } from '@/resources/components/global';

export function ManagerMiddleware(): JSX.Element {
  const { isManager } = useManagementSession();

  const { cachedUserLogged, isLoadingUserLogged } = useGetValidateAuth({
    enabled: !isManager
  });

  if (isLoadingUserLogged) {
    return <SplashScreen />;
  }

  if (cachedUserLogged?.role !== 'OWNER_USER' && !isLoadingUserLogged) {
    return <Navigate to='/home' />;
  }

  return <Outlet />;
}
