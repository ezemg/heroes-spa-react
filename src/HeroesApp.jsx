import React from 'react';
import { AppRouter } from './router/AppRouter.jsx';
import { AuthProvider } from './auth';

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
