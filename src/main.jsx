import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroesApp } from './HeroesApp.jsx';
import { AppRouter } from './router/AppRouter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeroesApp />
  </React.StrictMode>
);
