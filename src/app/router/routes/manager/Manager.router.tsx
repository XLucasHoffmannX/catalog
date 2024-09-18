import { Route, Routes } from 'react-router-dom';

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
