import { useManagementSession } from '@/app/modules/manager/auth/use-cases/use-management-session/useManagementSession';

export function HomeView(): JSX.Element {
  const { userAuthenticated } = useManagementSession();

  return <>{userAuthenticated?.sub}</>;
}
