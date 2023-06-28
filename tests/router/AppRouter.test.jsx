import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext } from '../../src/auth/index.js';
import { AppRouter } from '../../src/router/AppRouter.jsx';
import { screen, render } from '@testing-library/react';

describe('Pruebas en <AppRouter/>', () => {
  test('Debe de mostrar el login si no estoy autenticado ', () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    // screen.debug();
    expect(screen.getAllByText('Login').length).toBe(2);
  });

  test('Debe de mostrar el componente marvel si esta autentificado', () => {
    const contextValue = {
      logged: true,
      user: {
        id: 5,
        name: 'John',
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    screen.debug();
    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
  });
});
