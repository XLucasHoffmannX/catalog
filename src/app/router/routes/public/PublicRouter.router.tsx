import { Route, Routes } from 'react-router-dom';

import { FallbackError } from '@/resources/components/manager';
import { AuthView } from '@/resources/views/manager';

export function PublicRouter(): JSX.Element {
  return (
    <Routes>
      <Route
        path='/'
        element={<AuthView />}
      />

      <Route
        path='/login'
        element={<AuthView context='login' />}
      />

      <Route
        path='/register'
        element={<AuthView context='register' />}
      />

      <Route
        path='*'
        element={<FallbackError />}
      />
    </Routes>
  );
}
