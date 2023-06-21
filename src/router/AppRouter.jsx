import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { LoginPage } from '../auth';

import { HeroesRoutes, ChildHeroesRoutes } from '../heroes';

const routerConfig = [
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <HeroesRoutes />,
    children: ChildHeroesRoutes,
  },
];

const router = createBrowserRouter(routerConfig);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
