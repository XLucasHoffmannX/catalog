import { Route, Routes } from 'react-router-dom';

import { ErrorScreen } from '@/resources/components/global';
import { CartView, CatalogView, PaymentView } from '@/resources/views/client';

import { ClientThemeMiddleware } from '../middlewares';

export function ClientRouter(): JSX.Element {
  return (
    <Routes>
      <Route
        key='theme-provider'
        element={<ClientThemeMiddleware />}
      >
        <Route
          path='/'
          element={<CatalogView />}
        />

        <Route
          path='/cart'
          element={<CartView />}
        />

        <Route
          path='/payment'
          element={<PaymentView />}
        />

        <Route
          path='*'
          element={<ErrorScreen />}
        />
      </Route>
    </Routes>
  );
}

export function ManagementRouter(): JSX.Element {
  return (
    <Routes>
      <Route
        path='/'
        element={<>ManagementRoutes</>}
      />
    </Routes>
  );
}

export function LandingRouter(): JSX.Element {
  return (
    <Routes>
      <Route
        path='/'
        element={<>Bem vindo!</>}
      />
    </Routes>
  );
}
