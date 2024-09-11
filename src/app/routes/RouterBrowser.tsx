import { BrowserRouter as RouterApp, Route, Routes } from 'react-router-dom';

import { ErrorScreen } from '@/resources/components/global';
import { CartView, CatalogView, PaymentView } from '@/resources/views';

import { ClientThemeMiddleware } from '../middlewares';

export function RouterBrowser() {
  return (
    <RouterApp>
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
    </RouterApp>
  );
}
