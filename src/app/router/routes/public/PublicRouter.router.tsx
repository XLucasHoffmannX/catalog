import { Route, Routes } from 'react-router-dom';

import { AuthManagementhMiddleware } from '@/app/middlewares';
import { ManagerMiddleware } from '@/app/middlewares/manager/Manager.middleware';
import { FallbackError } from '@/resources/components/manager';
import {
  AddProductView,
  AuthView,
  HomeView,
  ManagerAreaView,
  OrdersView,
  ProductsView
} from '@/resources/views/manager';

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
        element={<AuthManagementhMiddleware />}
      >
        <Route
          path='/home'
          element={<HomeView />}
        />

        <Route
          path='/products'
          element={<ProductsView />}
        />

        <Route
          path='/add-product'
          element={<AddProductView />}
        />

        <Route
          path='/orders'
          element={<OrdersView />}
        />

        {/* Manager */}
        <Route
          key='private-manager'
          element={<ManagerMiddleware />}
        >
          <Route
            path='/manage'
            element={<ManagerAreaView />}
          />
        </Route>
      </Route>

      <Route
        path='*'
        element={<FallbackError />}
      />
    </Routes>
  );
}
