import { LuBan } from 'react-icons/lu';
import {
  BrowserRouter as RouterApp,
  Link,
  Route,
  Routes
} from 'react-router-dom';

import { Button } from '@/resources/components/ui';
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
            element={
              <div className='h-screen w-screen flex flex-col items-center justify-center gap-4'>
                <LuBan className='h-10 w-10 text-red-600' />
                Página não econtrada
                <Link to='/'>
                  <Button>Voltar</Button>
                </Link>
              </div>
            }
          />
        </Route>
      </Routes>
    </RouterApp>
  );
}
