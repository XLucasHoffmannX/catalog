import { Route, Routes } from 'react-router-dom';

import { AutManagementhMiddleware } from '@/app/middlewares';
import { FallbackError } from '@/resources/components/manager';
import { AuthView, HomeView } from '@/resources/views/manager';

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
        key='private-routes'
        element={<AutManagementhMiddleware />}
      >
        <Route
          path='/home'
          element={<HomeView />}
        />
      </Route>

      <Route
        path='*'
        element={<FallbackError />}
      />
    </Routes>
  );
}