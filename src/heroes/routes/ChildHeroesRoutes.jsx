import React from 'react';
import { Navigate } from 'react-router-dom';
import { DcPage, MarvelPage, HeroPage, SearchPage } from '../';

export const ChildHeroesRoutes = [
  {
    index: true,
    element: <Navigate to={'/marvel'} />,
  },
  {
    path: 'marvel',
    element: <MarvelPage />,
  },
  {
    path: 'dc',
    element: <DcPage />,
  },
  {
    path: 'search',
    element: <SearchPage />,
  },
  {
    path: 'hero',
    element: <HeroPage />,
  },
];
