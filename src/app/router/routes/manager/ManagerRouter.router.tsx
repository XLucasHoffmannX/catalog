import { Route, Routes } from 'react-router-dom';

import { AuthManagementhMiddleware } from '@/app/middlewares';
import { ManagerMiddleware } from '@/app/middlewares/manager/Manager.middleware';
import { FallbackError } from '@/resources/components/manager';
import {
  AddProductView,
  AddStoreView,
  AuthView,
  HomeView,
  ManagerAreaView,
  OrdersView,
  ProductsView,
  StoreManagementView,
  StoreView
} from '@/resources/views/manager';

import { managerRoutes } from './managerRoutes.constant';

export function ManagerRouter(): JSX.Element {
  return (
    <Routes>
      <Route
        path='/'
        element={<AuthView />}
      />

      <Route
        path={managerRoutes.login}
        element={<AuthView context='login' />}
      />

      <Route
        path={managerRoutes.register}
        element={<AuthView context='register' />}
      />

      <Route
        key='private-routes'
        element={<AuthManagementhMiddleware />}
      >
        <Route
          path={managerRoutes.home}
          element={<HomeView />}
        />

        <Route
          path={managerRoutes.products}
          element={<ProductsView />}
        />

        <Route
          path={managerRoutes.addProduct}
          element={<AddProductView />}
        />

        <Route
          path={managerRoutes.orders}
          element={<OrdersView />}
        />

        {/* Manager */}
        <Route
          key='private-manager'
          element={<ManagerMiddleware />}
        >
          <Route
            path={managerRoutes.manage}
            element={<ManagerAreaView />}
          />

          <Route
            path={managerRoutes.manageStore}
            element={<StoreView />}
          />

          <Route
            path={managerRoutes.manageAddStore}
            element={<AddStoreView />}
          />

          <Route
            path={`${managerRoutes.manageStoreId}:id`}
            element={<StoreManagementView />}
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
