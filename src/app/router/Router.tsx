import { BrowserRouter as RouterApp } from 'react-router-dom';

import { useGetApp } from './helper';

export function Router(): JSX.Element {
  const CurrentApp = useGetApp();

  return (
    <RouterApp>
      <CurrentApp />
    </RouterApp>
  );
}
