import { Route, Routes } from 'react-router-dom';

import { ClientThemeMiddleware } from '@/app/middlewares';
import { ClientAuthMiddleware } from '@/app/middlewares/client/ClientAuthMiddleware/ClientAuth.middleware';
import { ErrorScreen } from '@/resources/components/global';
import { CartView, CatalogView, PaymentView } from '@/resources/views/client';

export function ClientRouter(): JSX.Element {
  return (
    <Routes>
      <Route
        key='auth'
        element={<ClientAuthMiddleware />}
      >
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
      </Route>
    </Routes>
  );
}
