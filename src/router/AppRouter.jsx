import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { LoginPage } from '../auth';

import { HeroesRoutes, ChildHeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute.jsx';
import { PublicRoute } from './PublicRoute.jsx';

const routerConfig = [
  {
    path: 'login',
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <HeroesRoutes />
      </PrivateRoute>
    ),
    children: ChildHeroesRoutes,
  },
];

const router = createBrowserRouter(routerConfig);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
