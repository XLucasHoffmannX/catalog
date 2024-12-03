import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { useStoreContext } from '@/app/contexts';
import { useGetDomainClient } from '@/app/modules/client/domains/use-cases/get-domain-client/useGetDomainClient';
import { ErrorScreen, SplashScreen } from '@/resources/components/global';
import { useSubdomain } from '@/shared/hooks';
import { useTheme } from '@/shared/styles/theme/theme-provider';

export function ClientThemeMiddleware(): JSX.Element {
  const { theme } = useTheme();

  const subdomain = useSubdomain();

  const { handleSetStoreClient } = useStoreContext();

  const { data, isLoading } = useGetDomainClient({
    domain: subdomain,
    enabled: !!subdomain
  });

  const titleHtml = data?.store.storeSetup.setup.client.titleHmtl;

  useEffect(() => {
    if (titleHtml && titleHtml !== '') {
      document.title = titleHtml;
    }

    const root = document.documentElement;

    const themeVariables = data?.theme;

    const setCSSVariables = (variables: { [key: string]: string }) => {
      Object.keys(variables).forEach(key => {
        root.style.setProperty(key, variables[key]);
      });
    };

    if (themeVariables) {
      if (theme === 'dark') {
        setCSSVariables(themeVariables.dark);
        return;
      }

      setCSSVariables(themeVariables.light);
    }
  }, [theme, data?.theme]);

  useEffect(() => {
    if (data?.store) {
      handleSetStoreClient(data.store);
    }
  }, [data?.store]);

  if (isLoading) {
    return <SplashScreen />;
  }

  if (!data?.store.status) {
    return <ErrorScreen description='Loja indisponível no momento' />;
  }

  return <Outlet />;
}
