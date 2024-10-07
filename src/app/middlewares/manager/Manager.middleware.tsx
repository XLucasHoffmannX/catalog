import { Navigate, Outlet } from 'react-router-dom';

import { useManagementSession } from '@/app/modules/manager/auth/use-cases';

export function ManagerMiddleware(): JSX.Element {
  const { isManager } = useManagementSession();

  if (!isManager) {
    return <Navigate to='/home' />;
  }

  return <Outlet />;
}
