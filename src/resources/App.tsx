import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Router } from '@/app/router/Router';
import { Toaster } from '@/resources/components/ui';
import { ThemeProvider } from '@/shared/styles/theme';

import '@/shared/styles/global.css';

export function App(): JSX.Element {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 2 // 5 minutos
      }
    }
  });

  return (
    <ThemeProvider
      defaultTheme='light'
      storageKey='vite-ui-theme'
    >
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition='bottom-right'
        />

        <Router />

        <Toaster
          richColors
          position='top-right'
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
