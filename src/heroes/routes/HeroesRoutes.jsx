import React from 'react';
import { Outlet } from 'react-router-dom';

import { NavBar } from '../../UI';

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
