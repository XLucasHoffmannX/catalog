import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { RouterBrowser } from '@/app/routes';
import { Toaster } from '@/resources/components/ui';
import { ThemeProvider } from '@/shared/styles/theme';

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
        {/* <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition='bottom-left'
          position='left'
        />
 */}
        <RouterBrowser />

        <Toaster
          richColors
          position='top-center'
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
}