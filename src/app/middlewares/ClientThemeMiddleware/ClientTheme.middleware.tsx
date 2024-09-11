import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { useGetClient } from '@/app/modules/client';
import { SplashScreen } from '@/resources/components/global';
import { useTheme } from '@/shared/styles/theme/theme-provider';

export function ClientThemeMiddleware(): JSX.Element {
  const { theme } = useTheme();

  const { theme: themeClient, isLoading } = useGetClient();

  useEffect(() => {
    const root = document.documentElement;

    const themeVariables = themeClient;

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
  }, [theme, themeClient]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return <Outlet />;
}
