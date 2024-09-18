import { Route, Routes } from 'react-router-dom';

import { ClientThemeMiddleware } from '@/app/middlewares';
import { ErrorScreen } from '@/resources/components/global';
import { CartView, CatalogView, PaymentView } from '@/resources/views/client';

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
